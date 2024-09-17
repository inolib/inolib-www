export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  interest: string;
  budget: string;
  privacyPolicy: boolean;
};

// Définir le type de errors
export type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  privacyPolicy?: string;
};
