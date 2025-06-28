export const config = {
  // AI/NLP Configuration
  ai: {
    openAiKey: process.env.OPENAI_API_KEY,
    openAiModel: process.env.OPENAI_MODEL || 'gpt-4',
    nlpApiUrl: process.env.NLP_API_URL,
  },

  // MOSDAC Data Configuration
  mosdac: {
    apiKey: process.env.MOSDAC_API_KEY,
    baseUrl: process.env.MOSDAC_BASE_URL,
    endpoints: {
      weather: '/weather',
      satellite: '/satellite',
      forecast: '/forecast',
      realtime: '/realtime',
    },
  },

  // Weather API Configuration
  weather: {
    apiKey: process.env.WEATHER_API_KEY,
    satelliteKey: process.env.SATELLITE_DATA_API_KEY,
  },

  // Authentication Configuration
  auth: {
    secretKey: process.env.AUTH_SECRET_KEY,
    jwtSecret: process.env.JWT_SECRET,
    nextAuthUrl: process.env.NEXTAUTH_URL,
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
  },

  // Database Configuration
  database: {
    url: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
  },

  // Analytics & Monitoring
  analytics: {
    apiKey: process.env.ANALYTICS_API_KEY,
    sentryDsn: process.env.SENTRY_DSN,
    loggingKey: process.env.LOGGING_API_KEY,
    publicId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  },

  // Public URLs
  public: {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    websocketUrl: process.env.NEXT_PUBLIC_WEBSOCKET_URL,
  },

  // Rate Limiting
  rateLimit: {
    maxRequests: parseInt(process.env.RATE_LIMIT_REQUESTS || '100', 10),
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  },

  // Validation function to check if required APIs are configured
  validateConfig() {
    const requiredVars = [
      'OPENAI_API_KEY',
      'MOSDAC_API_KEY',
      'AUTH_SECRET_KEY',
      'DATABASE_URL',
    ];

    const missingVars = requiredVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingVars.length > 0) {
      console.warn(
        `Warning: Missing required environment variables: ${missingVars.join(', ')}`
      );
      return false;
    }

    return true;
  },
};

// Validate configuration on import
config.validateConfig();

export default config;
