// Ajouter l'image à la une dans l'API REST
function add_thumbnail_to_JSON() {
	register_rest_field(
		'post',
		'img',
		array(
			'get_callback'    => 'get_image',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}

function get_image($object, $field_name, $request) {
	if ($object['featured_media']) {
		$img = wp_get_attachment_image_src($object['featured_media'], 'full');
		return $img[0];
	}
	return false;
}

add_action('rest_api_init', 'add_thumbnail_to_JSON');

// Restriction des méthodes API REST
function restrict_rest_api_methods( $result, $server, $request ) {
	$allowed_methods = array( 'GET', 'POST' );
	$allowed_routes = array(
		'/wp/v2/comments', // Autoriser POST pour les commentaires
		 '/wp/v2/posts',    // Autoriser POST pour les articles
        '/custom-api/v2/contact',
	);

	if ( in_array( $request->get_route(), $allowed_routes ) && $request->get_method() === 'POST' ) {
			return $result; // Autoriser POST pour les commentaires
	}

	if ( ! in_array( $request->get_method(), $allowed_methods ) ) {
			return new WP_Error( 'rest_forbidden', __( 'Method not allowed' ), array( 'status' => 405 ) );
	}

	return $result;
}
add_filter( 'rest_pre_dispatch', 'restrict_rest_api_methods', 10, 3 );

// CORS pour les requêtes venant de http://localhost:3000
function add_cors_http_header() {
	header("Access-Control-Allow-Origin: http://localhost:3000");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
	header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization");
	header("Access-Control-Allow-Credentials: true");

	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
		header("HTTP/1.1 200 OK");
		exit();
	}
}
add_action('init', 'add_cors_http_header');

// Ajouter des champs personnalisés à l'API REST
function add_custom_fields_to_rest_api() {
	register_rest_field('post', 'author_name', array(
		'get_callback' => function($post_arr) {
			$author_id = $post_arr['author'];
			return get_the_author_meta('display_name', $author_id);
		},
		'update_callback' => null,
		'schema' => null,
	));

	register_rest_field('post', 'category_names', array(
		'get_callback' => function ($post_arr) {
			$categories = get_the_category($post_arr['id']);
			$category_names = array();

			if (!empty($categories)) {
				foreach ($categories as $category) {
					$category_names[] = $category->name;
				}
			}

			return $category_names;
		},
		'update_callback' => null,
		'schema' => null,
	));
}
add_action('rest_api_init', 'add_custom_fields_to_rest_api');

// Ajouter les commentaires à la réponse de l'API REST
function include_comments_in_post_response($response, $post, $request) {
	$comments = get_comments(array(
		'post_id' => $post->ID,
		'status' => 'approve'
	));

	$response->data['comments'] = $comments;

	return $response;
}
add_filter('rest_prepare_post', 'include_comments_in_post_response', 10, 3);

// Autoriser les commentaires anonymes
 add_filter('rest_allow_anonymous_comments', '__return_true');

// Enregistrement d'une route personnalisée pour le formulaire de contact
add_action('rest_api_init', function () {
	error_log('REST API Initialized');
	register_rest_route('custom-api/v2', '/contact', array(
			'methods' => 'POST', 
			'callback' => 'handle_contact_form_submission',
	));
});

function handle_contact_form_submission(WP_REST_Request $request) {
	$parameters = $request->get_json_params();

	$first_name = sanitize_text_field($parameters['firstName']);
	$last_name = sanitize_text_field($parameters['lastName']);
	$email = sanitize_email($parameters['email']);
	$phone = sanitize_text_field($parameters['phoneNumber']);
	$message = sanitize_textarea_field($parameters['message']);
	$interest = sanitize_text_field($parameters['interest']); 

	// Définir l'adresse email de destination en fonction de l'intérêt
	if (in_array($interest, ['Audit', 'Accompagnement', 'Développement'])) {
			$recipient_email = 'maria.grairi33@hotmail.com';
	} elseif ($interest === 'Formation') {
			$recipient_email = 'maria.grairi33@hotmail.com';
	} elseif ($interest === 'Autre') {
			$recipient_email = 'autre@example.com';
	} else {
			$recipient_email = 'default@example.com';
	}

	$subject = "Nouvelle demande de contact de $first_name $last_name - $interest";
	$body = "
			Nom: $first_name $last_name\n
			Email: $email\n
			Téléphone: $phone\n
			Intérêt: $interest\n
			Message: $message
	";
	$headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email);

	// Envoyer l'email à l'adresse appropriée
	wp_mail($recipient_email, $subject, $body, $headers);

	return new WP_REST_Response('Message envoyé avec succès', 200);
}
add_filter('rest_allow_anonymous_comments', '__return_true');

// Ajouter une route API REST pour générer un token temporaire
add_action('rest_api_init', function () {
	register_rest_route('custom-api/v1', '/generate-token', array(
			'methods' => 'GET',
			'callback' => 'generate_temporary_token',
	));
});

add_filter('rest_pre_dispatch', function ($result, $server, $request) {
	if ($request->get_route() === '/wp/v2/comments' && $request->get_method() === 'POST') {
			$token = $request->get_header('Authorization');
			$token = str_replace('Bearer ', '', $token);

			if (!$token || strlen($token) !== 36) { // Vérifie que le token a une longueur valide pour un UUID
					return new WP_Error('rest_forbidden', __('Unauthorized: Invalid token.'), array('status' => 401));
			}

		
	}

	return $result;
}, 10, 3);