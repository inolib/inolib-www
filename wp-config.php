<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_inolibBackend_db' );

/** Database username */
define( 'DB_USER', 'wp_inolibBackend_user' );

/** Database password */
define( 'DB_PASSWORD', 'wp_inolibBackend_pw' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'W`hP#wda$0zd;taGnSvnYc/rQc9e~GL+M>X]$Xtl57_s+*4&TIlHl02QE_N~h4KJ' );
define( 'SECURE_AUTH_KEY',   'h>k9#/zK(`AYm{`:^uH1nr 6YV3W556&_9T.+Me5|^tGMC0UmZr3@I[FG `]}y/^' );
define( 'LOGGED_IN_KEY',     'QDm]/pPlTnorG,$HZY)td6(QO&})WpOOhfZS?1&TSsP*6tvTQ/wyC=@6+dxIYJ]a' );
define( 'NONCE_KEY',         'vK$#BKXYbE1(7{P/TS9OMA{cB.8u55$opu}>4RX5/,*OoJM:cE%~*F}L)Z.:LxH[' );
define( 'AUTH_SALT',         'l]xyfHFPIkAv[JG3sDhA:YrXk~>P6daXlkY[C5X;@.^8r7Vj AA(@gD;a)*^5g>$' );
define( 'SECURE_AUTH_SALT',  '2fMpV. 4:/lrR9sSP=?u~Sf)b 9 uP)48oK4?>Sr^$he*aW?1@S+,?fg1!^t=>Nw' );
define( 'LOGGED_IN_SALT',    ';ur9_]`X;Engwt$mJ=oP,9{F|0Hdpi[6l(}lAy7>?QazGgUB}/`@]=W;DV;!&>S3' );
define( 'NONCE_SALT',        '%%(8_jTQ27C1pCU{CIaC$*uKDJ@pVlLa}#/FRrA#xdpruo/V#mxv?EkC[*y2yVqg' );
define( 'WP_CACHE_KEY_SALT', 'zJ|8vO~%Fq5$&VdJz^U)~I)p9wvxBs0dV|EvTx4b*Z`SRUqwQHCcBuM>`Tr(|G:E' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
