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
    setFormData({
      ...formData,
      interest,
      message: `${formData.message} Intérêt: ${interest}.`,
    });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({
      ...formData,
      budget,
      message: `${formData.message} Budget: ${budget}.`,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis");

    if (!validate()) {
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
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Chat to sales</h2>
            <p className="mb-2 text-gray-700">Speak to our friendly team.</p>
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
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Call us</h2>
            <p className="mb-2 text-gray-700">Mon-Fri from 8am to 5pm.</p>
            <p className="text-[#3E6D77]" aria-label="numéro pour nous contacter">
              +1 (555) 000-0000
            </p>
          </div>
          <div className="rounded-lg bg-[#F5F9FA] p-4 shadow">
            <Image src="/Icons/position.svg" alt="" width={40} height={40}></Image>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Visit us</h2>
            <p className="mb-2 text-gray-700">Visit our office HQ.</p>
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
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleInterestSelect("Audit")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  Audit
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestSelect("Accompagnement")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  Accompagnement
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestSelect("Développement")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  Développement
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestSelect("Formation")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  Formation
                </button>
                <button
                  type="button"
                  onClick={() => handleInterestSelect("Autre")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  Autre
                </button>
              </div>
            </fieldset>

            <fieldset className="mb-4">
              <legend className="mb-2 w-96 border-b-2 border-b-gray-200 text-lg font-semibold text-gray-900">
                Votre budget
              </legend>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleBudgetSelect("1000€")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  1000€
                </button>
                <button
                  type="button"
                  onClick={() => handleBudgetSelect("5k - 10k€")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  5k - 10k€
                </button>
                <button
                  type="button"
                  onClick={() => handleBudgetSelect("10k-20k€")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  10k-20k€
                </button>
                <button
                  type="button"
                  onClick={() => handleBudgetSelect("20k-50k€")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  20k-50k€
                </button>
                <button
                  type="button"
                  onClick={() => handleBudgetSelect("Autre")}
                  className="rounded-full border bg-[#F5F9FA] px-4 py-2 hover:bg-green-100 focus:outline-none"
                >
                  Autre
                </button>
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="First name"
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Last name"
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="+1 (555) 000-0000"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="Leave us a message..."
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
                You agree to our friendly{" "}
                <a href="#" className="border-b border-[#1e6d30] text-[#1e6d30]">
                  privacy policy
                </a>
                .
              </label>
            </div>

            <div>
              <Button variant="buttonNoir" type="submit" className="w-96">
                Prendre rendez-vous
              </Button>
            </div>
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
