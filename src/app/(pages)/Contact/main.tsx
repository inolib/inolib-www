"use client";

import DOMPurify from "dompurify";
import Image from "next/image";
import { useState } from "react";

import { Button } from "~/components/UI/Button";
import { SocialButton } from "~/components/UI/SocialButton";

// Définir le type de formData
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  interest: string;
  budget: string;
};

// Définir le type de errors
type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  interest?: string;
  budget?: string;
};

const MainContact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    interest: "",
    budget: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      interest: "",
      budget: "",
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    if (!formData.phoneNumber || !/^\+?\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Veuillez entrer un numéro de téléphone valide.";
    }

    if (!formData.message) {
      newErrors.message = "Le message ne peut pas être vide.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleInterestSelect = (interest: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      interest: prevFormData.interest === interest ? "" : interest,
      message: `${formData.message} Intérêt: ${prevFormData.interest === interest ? "Aucun" : interest}.`,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis");

    setSubmitError("");

    if (!validate()) {
      setSubmitError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const sanitizedMessage = DOMPurify.sanitize(formData.message);

    fetch("http://localhost/WORDPRESS/wp-json/custom-api/v2/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, message: sanitizedMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        resetForm();
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main className="container mx-auto px-4 py-8 lg:px-0">
      <section className="lg:flex lg:space-x-64">
        <aside className="sm:w-50 mb-8 ml-12 md:w-64 lg:mb-0 lg:w-64">
          <div className="mb-4 rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/contactC.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Discuter avec les ventes</h2>
            <p className="mb-2 text-gray-700">Parlez à notre équipe sympathique.</p>
            <a
              href="mailto:sales@untitledui.com"
              className="text-[#133348]"
              aria-label="adresse email pour nous contacter"
            >
              sales@untitledui.com
            </a>
          </div>
          <div className="mb-4 rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/phone.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Appelez-nous</h2>
            <p className="mb-2 text-gray-700">Du lundi au vendredi de 8h à 17h.</p>
            <p className="text-[#3E6D77]" aria-label="numéro pour nous contacter">
              +1 (555) 000-0000
            </p>
          </div>
          <div className="rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/position.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Visitez-nous</h2>
            <p className="mb-2 text-gray-700">Visitez notre siège social.</p>
            <address className="not-italic text-gray-700">
              100 Smith Street
              <br />
              Collingwood VIC 3066 AU
            </address>
          </div>
          <div className="flex flex-col justify-end">
            <SocialButton className="" />
          </div>
        </aside>

        <div className="lg:w-96">
          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="mb-4">
              <legend className="mb-2 w-96 border-b-2 border-b-gray-200 text-lg font-semibold text-gray-900">
                Vous êtes intéressé par :
              </legend>
              <div className="mb-6 flex flex-wrap gap-2 space-x-[1.5px]">
                {["Audit", "Accompagnement", "Développement", "Formation", "Autre"].map((interest) => (
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
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
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
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <div className="flex items-start">
              <input
                id="privacyPolicy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring focus:ring-opacity-50"
              />
              <label htmlFor="privacyPolicy" className="ml-2 block text-sm text-gray-900">
                Vous acceptez notre{" "}
                <a href="#" className="border-b border-[#1e6d30] text-[#1e6d30]">
                  politique de confidentialité
                </a>
                .
              </label>
            </div>

            <div>
              <Button variant="buttonNoir" type="submit" className="w-96">
                Prendre rendez-vous
              </Button>
            </div>

            {/* Message d'erreur affiché au niveau du bouton d'envoi */}
            {submitError && (
              <div className="mt-4 text-red-500" aria-live="assertive">
                {submitError}
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="ml-80 justify-center">
        <Image src="/Homepage/contact.svg" alt="Illustration contact" width={800} height={500} />
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
