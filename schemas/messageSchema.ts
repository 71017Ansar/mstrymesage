import { z} from 'zod';

export const messageSchema = z.object({
    content : z.string().min(12, 'Message must be at least 1 character long'),
    receiverId: z.string().length(300, 'Receiver ID must be 24 characters long')
});
    
