"use client";

import DOMPurify from "dompurify";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { FormData, Errors } from "~/lib/types/features/contactType/type";
import { Button } from "~/components/UI/Button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "~/components/UI/Breadcrumb";
import Link from "next/link";

const MainContact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    interest: [],
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
      interest: [],

      privacyPolicy: false,
    });
  };
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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

  const handleInterestSelect = (interestItem: string) => {
    setFormData((prevFormData: FormData) => {
      const interest = prevFormData.interest || [];
      const isInterestSelected = interest.includes(interestItem);

      return {
        ...prevFormData,
        interest: isInterestSelected ? interest.filter((i) => i !== interestItem) : [...interest, interestItem],
      };
    });
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

    fetch("https://www.backend.inolib.fr/wp-json/custom-api/v2/contact", {

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
        interest: formData.interest || [],
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
  useEffect(() => {
    if (isModalOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <main className="flex w-full flex-col items-center px-4 py-8">
      <section className="flex w-full flex-col items-center md:flex-row-reverse md:items-start md:justify-center xl:w-[1240px] 2xl:w-[1300px]">
        <div className="flex w-full flex-col items-center px-2 md:w-[50%] md:items-start">
          <form onSubmit={handleSubmit} className="w-full max-w-[520px] space-y-4" noValidate>
            <fieldset className="mb-4 w-full">
              <legend className="mb-2 w-full border-b-2 border-b-gray-200 text-lg font-semibold text-gray-900">
                Vous êtes intéressé par :
              </legend>
              <div className="mb-6 mt-2 flex flex-wrap gap-2 space-x-[1.5px]">
                {["Audit", "Accompagnement", "Développement", "Formation", "Partenariat", "Autre"].map(
                  (interestItem) => (
                    <button
                      role="radio"
                      aria-checked={formData.interest && formData.interest.includes(interestItem)}
                      key={interestItem}
                      type="button"
                      onClick={() => handleInterestSelect(interestItem)}
                      className={`flex items-center gap-2 rounded-full border-[1px] border-[#8EBBC5] px-4 py-2 ${
                        formData.interest && formData.interest.includes(interestItem)
                          ? "bg-[#254147] text-white"
                          : "bg-[#EEF5F6] text-black"
                      } focus:outline-none`}
                      aria-live="polite"
                    >
                      {formData.interest && formData.interest.includes(interestItem) && (
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
                      {interestItem}
                    </button>
                  ),
                )}
              </div>
            </fieldset>

            <legend className="mb-2 w-full border-b-2 border-b-gray-200 text-lg font-semibold text-gray-900">
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
                  aria-describedby="firstName-error"
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
                aria-describedby="phoneNumber-error"
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
                aria-describedby="email-error"
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
                aria-describedby="message-error"
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
              <Button variant="buttonNoir" type="submit" className="w-full max-w-96">
                Envoyer le formulaire
              </Button>
            </div>
            <Link href="/Calendar">
              <Button variant="buttonNoir" className="mt-2 w-full max-w-96">
                Prendre rendez-vous
              </Button>
            </Link>
            {/* Message d'erreur global */}
            {submitError && (
              <div className="mt-4 text-red-500" role="alert" aria-live="assertive">
                {submitError}
              </div>
            )}

            {/* Confirmation de soumission */}
            {submissionMessage && (
              <div className="mt-4 text-green-500" role="status" aria-live="polite" aria-atomic="true">
                {submissionMessage}
              </div>
            )}
          </form>
        </div>

        <aside
          className="mt-8 flex w-full flex-col items-center px-2 md:mt-0 md:w-[50%] md:items-start md:lg:pl-[3%]"
          tabIndex={0}
        >
          <div className="mb-4 w-full max-w-[520px] rounded-lg bg-[#F5F9FA] p-4 shadow md:max-w-96">
            <Image src="/Icons/contactC.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Discuter avec le service client</h2>
            <p className="mb-2 text-gray-700">Parlez à notre équipe sympathique.</p>
            <a href="mailto:contact@inolib.com" className="text-[#133348]">
              contact@inolib.com
            </a>
          </div>
          <div className="mb-4 w-full max-w-[520px] rounded-lg bg-[#F5F9FA] p-4 shadow md:max-w-96">
            <Image src="/Icons/phone.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Appelez-nous au </h2>
            <p className="mb-2 text-gray-700"> +33 6 47 21 86 69</p>
            <p className="text-[#3E6D77]" aria-label="numéro pour nous contacter">
              Du lundi au vendredi de 8h à 17h.
            </p>
          </div>
          <div className="mb-4 w-full max-w-[520px] rounded-lg bg-[#F5F9FA] p-4 shadow md:max-w-96">
            <Image src="/Icons/position.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Adresse</h2>

            <address className="not-italic text-gray-700">
              254 rue Vendôme
              <br />
              69003 Lyon
            </address>
          </div>
        </aside>
      </section>

      <section className="mt-8">
        <Image src="/Homepage/contact.svg" alt="" width={800} height={500} />
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
          role="alertdialog"
          tabIndex={-1}
        >
          {/* ref={closeButtonRef}*/}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 id="content" className="mb-4 text-lg font-semibold text-gray-900">
              Formulaire envoyé avec succès
            </h2>
            <p id="modal-description" className="mb-4 text-gray-700">
              Merci de nous avoir contactés ! Nous reviendrons vers vous rapidement.
            </p>
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
