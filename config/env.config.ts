/**
 * Environment Configuration
 * Validate và export environment variables
 */

const requiredEnvVars = [] as const;
const optionalEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_GA_ID',
  'NEXT_PUBLIC_FB_PIXEL_ID',
  'NEXT_PUBLIC_GOOGLE_MAPS_KEY',
] as const;

// Validate required env vars
if (process.env.NODE_ENV === 'production') {
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });
}

export const env = {
  // Node
  NODE_ENV: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',

  // Public env vars
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  
  // Analytics
  GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  
  // Services
  GOOGLE_MAPS_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,

  // Server-only env vars (không có NEXT_PUBLIC_ prefix)
  // DATABASE_URL: process.env.DATABASE_URL,
  // JWT_SECRET: process.env.JWT_SECRET,
} as const;

export type Env = typeof env;

