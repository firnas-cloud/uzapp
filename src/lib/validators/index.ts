import { z } from 'zod';
export const reactionSchema = z.object({ entityType: z.string(), entityId: z.string(), type: z.string().min(1).max(20), sessionId: z.string().optional() });
export const commentSchema = z.object({ entityType: z.string(), entityId: z.string(), content: z.string().min(2).max(500) });
