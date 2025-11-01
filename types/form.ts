/**
 * Type definitions cho Form data
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface TestDriveFormData {
  name: string;
  phone: string;
  email: string;
  carId: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  notes?: string;
}

export interface FinanceFormData {
  name: string;
  phone: string;
  email: string;
  carId: string;
  price: number;
  downPayment: number;
  loanTerm: number; // số tháng
}

export type FormErrors<T> = {
  [K in keyof T]?: string;
};

export interface FormState<T> {
  values: T;
  errors: FormErrors<T>;
  isSubmitting: boolean;
  isSuccess: boolean;
}

