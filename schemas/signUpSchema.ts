import { z } from 'zod';

export  const usernameValidation = 
z.string()
.min(3, 'Username must be at least 3 characters long')
.max(20, 'Username must be at most 20 characters long')
.regex(/^[a-zA-Z0-9_]+$/, 'Username must only contain letters, numbers, and underscores');

export const signUpSchema = z.object({
    usernae : usernameValidation,
    email: z.string()
    .email( {message : 'Invalid email address'} ),
    password: z.string().min(8, 'Password must be at least 8 characters long')
});