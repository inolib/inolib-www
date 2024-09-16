"use client";

import DOMPurify from "dompurify";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { FormData, Errors } from "~/lib/types/features/contactType/type";
import { Button } from "~/components/UI/Button";
import { SocialButton } from "~/components/UI/SocialButton";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from "~/components/UI/Dialog";

const MainContact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    interest: "",
    budget: "",
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      interest: "",
      budget: "",
      privacyPolicy: false,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    console.log("FormData during validation:", formData);

    if (!formData.firstName) {
      newErrors.firstName = "Veuillez entrer votre prénom.";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    if (!formData.phoneNumber || !/^\+?\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Veuillez entrer un numéro de téléphone valide.";
    }

    if (!formData.message) {
      newErrors.message = "Le message ne peut pas être vide.";
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = "Vous devez accepter la politique de confidentialité.";
    }

    setErrors(newErrors);

    console.log("Validation Errors:", newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleInterestSelect = (interest: string) => {
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      interest: prevFormData.interest === interest ? "" : interest,
      message: `${formData.message} Intérêt: ${prevFormData.interest === interest ? "Aucun" : interest}.`,
    }));
  };

  // Gérer l'affichage du calendrier HubSpot via un bouton
  const handleShowCalendar = () => {
    setIsCalendarVisible(true);
  };

  // Ajouter le script HubSpot quand le calendrier est visible
  useEffect(() => {
    if (isCalendarVisible) {
      const script = document.createElement("script");
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, [isCalendarVisible]);

  const handleCloseCalendar = () => {
    setIsCalendarVisible(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setSubmissionMessage("");
    console.log("test");
    if (!validate()) {
      setSubmitError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const sanitizedMessage = DOMPurify.sanitize(formData.message);

    // Soumission à l'API via fetch
    fetch("http://localhost/WORDPRESS/wp-json/custom-api/v2/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: sanitizedMessage,
        interest: formData.interest || "",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSubmissionMessage("Votre formulaire a bien été soumis !");
        resetForm(); // Réinitialise le formulaire
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitError("Une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <main className="container mx-auto px-4 py-8 lg:px-0">
      <section className="lg:flex lg:space-x-64">
        <aside className="sm:w-50 mb-8 ml-12 md:w-64 lg:mb-0 lg:w-64">
          <div className="mb-4 rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/contactC.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Discuter avec le service client</h2>
            <p className="mb-2 text-gray-700">Parlez à notre équipe sympathique.</p>
            <a
              href="mailto:sales@untitledui.com"
              className="text-[#133348]"
              aria-label="adresse email pour nous contacter"
            >
              contact@inolib.com
            </a>
          </div>
          <div className="mb-4 rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/phone.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Appelez-nous</h2>
            <p className="mb-2 text-gray-700">Du lundi au vendredi de 8h à 17h.</p>
            <p className="text-[#3E6D77]" aria-label="numéro pour nous contacter">
              +33 6 47 21 86 69
            </p>
          </div>
          <div className="rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/position.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Visitez-nous</h2>
            <p className="mb-2 text-gray-700">Visitez notre siège social.</p>
            <address className="not-italic text-gray-700">
              254 rue Vendôme
              <br />
              69003 Lyon
            </address>
          </div>
        </aside>

        <div className="lg:w-96">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <fieldset className="mb-4">
              <legend className="mb-2 w-96 border-b-2 border-b-gray-200 text-lg font-semibold text-gray-900">
                Vous êtes intéressé par :
              </legend>
              <div className="mb-6 flex flex-wrap gap-2 space-x-[1.5px]">
                {["Audit", "Accompagnement", "Développement", "Formation", "Partenariat", "Autre"].map((interest) => (
                  <button
                    role="radio"
                    aria-checked={formData.interest === interest}
                    key={interest}
                    type="button"
                    onClick={() => handleInterestSelect(interest)}
                    className={`flex items-center gap-2 rounded-full border-[1px] border-[#8EBBC5] px-4 py-2 ${
                      formData.interest === interest ? "bg-[#254147] text-white" : "bg-[#EEF5F6] text-black"
                    } focus:outline-none`}
                    aria-live="polite"
                  >
                    {formData.interest === interest && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {interest}
                  </button>
                ))}
              </div>
            </fieldset>

            <legend className="mb-2 w-96 border-b-2 border-b-gray-200 text-lg font-semibold text-gray-900">
              Dites-nous un peu plus sur vous :
            </legend>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Prénom"
                  aria-required="true"
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500" role="alert" aria-live="assertive">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Nom"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Numéro de téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="Votre numéro de téléphone"
                aria-required="true"
                aria-invalid={!!errors.phoneNumber}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500" role="alert" aria-live="assertive">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="vous@exemple.com"
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500" role="alert" aria-live="assertive">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="Laissez-nous un message..."
                aria-required="true"
                aria-invalid={!!errors.message}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500" role="alert" aria-live="assertive">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-start">
              <input
                id="privacyPolicy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring focus:ring-opacity-50"
                checked={formData.privacyPolicy}
                onChange={handleChange}
              />
              <label htmlFor="privacyPolicy" className="ml-2 block text-sm text-gray-900">
                Vous acceptez notre{" "}
                <a href="#" className="border-b border-[#1e6d30] text-[#1e6d30]">
                  politique de confidentialité
                </a>
                .
              </label>
              {errors.privacyPolicy && (
                <p className="mt-1 text-sm text-red-500" role="alert" aria-live="assertive">
                  {errors.privacyPolicy}
                </p>
              )}
            </div>

            <div>
              <Button variant="buttonNoir" type="submit" className="w-96">
                Nous contacter
              </Button>
            </div>

            {/* Message d'erreur global */}
            {submitError && (
              <div className="mt-4 text-red-500" role="alert" aria-live="assertive">
                {submitError}
              </div>
            )}
          </form>

          {/* Confirmation de soumission */}
          {submissionMessage && (
            <div className="mt-4 text-green-500" role="status" aria-live="polite">
              {submissionMessage}
            </div>
          )}

          {/* Bouton pour afficher le calendrier dans une modale */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="buttonNoir" className="mt-2 w-96">
                Prendre rendez-vous
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Prendre un rendez-vous</DialogTitle>
              </DialogHeader>

              {/* Intégration du calendrier HubSpot */}
              <div className="mt-4">
                <iframe
                  src="https://meetings-eu1.hubspot.com/djeberine?embed=true"
                  className="h-96 w-full"
                  title="Calendrier HubSpot"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="ml-80 justify-center">
        <Image src="/Homepage/contact.svg" alt="" width={800} height={500} />
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Formulaire envoyé avec succès</h2>
            <p className="mb-4 text-gray-700">Merci de nous avoir contactés ! Nous reviendrons vers vous rapidement.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContact;
