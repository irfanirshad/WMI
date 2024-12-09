import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['general', 'support', 'sales', 'career']).default('general'),
});

export type ContactFormData = z.infer<typeof contactSchema>;