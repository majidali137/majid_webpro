import { z } from 'zod';

export const  formSchema = z.object({
  user_name: z.string().min(2, "Name is required"),
  company_name: z.string().optional(), // This field is optional
  user_email: z.string().email("Invalid email address"),
  phone_number: z.string().min(10, "Phone number should be at least 10 digits").optional(),
  message: z.string().min(10, "Message is required")
});
