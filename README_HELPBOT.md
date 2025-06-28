# MOSDAC AI Help Bot Implementation

## Overview
This project implements an AI-powered help bot for the MOSDAC (Meteorological & Oceanographic Satellite Data Archival Centre) portal. The bot provides intelligent information retrieval about satellite data, missions, weather forecasts, and other MOSDAC services.

## Features Implemented

### 1. Core Components
- **ChatBot Component** (`src/components/helpbot/ChatBot.tsx`): Main chat interface with message handling
- **MessageBubble Component** (`src/components/helpbot/MessageBubble.tsx`): Individual message display component
- **Help Bot Page** (`src/app/help-bot/page.tsx`): Dedicated page for the chat interface
- **API Route** (`src/app/api/helpbot/route.ts`): Backend endpoint for processing queries
- **Help Bot Service** (`src/lib/helpBotService.ts`): Knowledge base and query processing logic

### 2. Knowledge Base
The help bot includes a structured knowledge base covering:
- **Satellite Missions**: INSAT-3DR, INSAT-3D, KALPANA-1, OCEANSAT series, MeghaTropiques, SARAL-AltiKa
- **Weather Services**: 3-hourly forecasts, cold wave predictions, heat wave forecasts, heavy rainfall predictions
- **Data Access**: Satellite data, insitu (AWS) data, RADAR data, atmospheric and oceanic parameters
- **Applications**: Monsoon tracking, cyclone monitoring, ocean subsurface data, agricultural applications

### 3. UI/UX Features
- Modern, responsive design using Tailwind CSS
- Clean chat interface with distinct user/bot message styling
- Loading indicators and error handling
- Keyboard support (Enter to send messages)
- Auto-scrolling to latest messages

## File Structure
```
src/
├── app/
│   ├── api/helpbot/route.ts          # API endpoint
│   ├── help-bot/page.tsx             # Help bot page
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Global styles
├── components/
│   └── helpbot/
│       ├── ChatBot.tsx               # Main chat component
│       └── MessageBubble.tsx         # Message display component
└── lib/
    └── helpBotService.ts             # Knowledge base service
```

## API Endpoints

### POST /api/helpbot
Processes user queries and returns AI-generated responses.

**Request Body:**
```json
{
  "query": "Tell me about INSAT-3DR satellite"
}
```

**Response:**
```json
{
  "answer": "INSAT-3DR is a meteorological satellite launched by ISRO for enhanced meteorological observations."
}
```

## Usage

### Accessing the Help Bot
Navigate to `/help-bot` to access the chat interface.

### Example Queries
- "Tell me about INSAT-3DR satellite"
- "What weather forecasting services does MOSDAC provide?"
- "How can I access satellite data?"
- "What is monsoon prediction?"
- "Tell me about cyclone monitoring"

## Technical Implementation

### Frontend
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom chat components
- **UI Components**: Shadcn/ui component library
- **State Management**: React hooks (useState, useEffect)

### Backend
- **API**: Next.js API routes
- **Knowledge Processing**: Pattern matching with keyword detection
- **Error Handling**: Comprehensive try-catch blocks with user-friendly messages

### Responsive Design
- Mobile-first approach
- Flexible layout adapting to different screen sizes
- Accessible design with proper ARIA labels

## Future Enhancements

### 1. Advanced NLP Integration
- Integration with external NLP services (OpenAI, Hugging Face)
- Semantic search capabilities
- Context-aware conversations

### 2. Knowledge Graph Expansion
- Dynamic content crawling from MOSDAC portal
- Real-time data integration
- Enhanced entity relationship mapping

### 3. Data Ingestion Pipeline
- Automated content extraction from PDFs, DOCX, XLSX files
- Web scraping for dynamic content updates
- Structured data processing for better query matching

### 4. Advanced Features
- Multi-turn conversation support
- User session management
- Analytics and usage tracking
- Feedback collection system

## Deployment Considerations

### Environment Variables

The following environment variables need to be configured in your `.env` file:

#### AI/NLP Services
```env
OPENAI_API_KEY=your_openai_api_key          # OpenAI API key for advanced NLP
OPENAI_MODEL=gpt-4                          # OpenAI model to use
NLP_API_URL=your_nlp_service_url            # Custom NLP service URL
```

#### Google Maps & Location Services
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key    # Google Maps JavaScript API key
GOOGLE_GEOCODING_API_KEY=your_geocoding_key      # Geocoding API key
GOOGLE_PLACES_API_KEY=your_places_key            # Places API key
GOOGLE_CLIENT_ID=your_oauth_client_id            # OAuth 2.0 Client ID
GOOGLE_CLIENT_SECRET=your_oauth_client_secret    # OAuth 2.0 Client Secret
```

#### Social Media Integration
```env
TWITTER_API_KEY=your_twitter_key            # Twitter API key
FACEBOOK_API_KEY=your_facebook_key          # Facebook API key
LINKEDIN_API_KEY=your_linkedin_key          # LinkedIn API key
```

#### Email & Notifications
```env
SENDGRID_API_KEY=your_sendgrid_key         # SendGrid for email notifications
TWILIO_API_KEY=your_twilio_key             # Twilio for SMS
TWILIO_ACCOUNT_SID=your_twilio_sid         # Twilio Account SID
PUSH_NOTIFICATION_KEY=your_push_key         # Web Push Notifications
```

#### Storage & CDN
```env
AWS_ACCESS_KEY_ID=your_aws_key_id          # AWS S3 Access Key
AWS_SECRET_ACCESS_KEY=your_aws_secret      # AWS S3 Secret
AWS_BUCKET_NAME=your_bucket_name           # S3 Bucket Name
CLOUDINARY_URL=your_cloudinary_url         # Cloudinary URL
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=name     # Cloudinary Cloud Name
```

#### MOSDAC & Weather Data
```env
MOSDAC_API_KEY=your_mosdac_api_key          # MOSDAC API access key
MOSDAC_BASE_URL=https://mosdac.gov.in/api/v1 # MOSDAC API base URL
WEATHER_API_KEY=your_weather_api_key        # Additional weather data API key
SATELLITE_DATA_API_KEY=your_satellite_api_key # Satellite data access key
```

#### Authentication
```env
AUTH_SECRET_KEY=your_auth_secret            # Main authentication secret
JWT_SECRET=your_jwt_secret                  # JWT token secret
NEXTAUTH_URL=http://localhost:3000          # NextAuth.js URL
NEXTAUTH_SECRET=your_nextauth_secret        # NextAuth.js secret
```

#### Database & Caching
```env
DATABASE_URL=your_database_url              # Main database connection URL
REDIS_URL=your_redis_url                    # Redis cache connection URL
```

#### Analytics & Monitoring
```env
ANALYTICS_API_KEY=your_analytics_api_key    # Analytics service API key
SENTRY_DSN=your_sentry_dsn                 # Sentry.io error tracking
LOGGING_API_KEY=your_logging_service_key    # Logging service API key
```

#### Public URLs (Client-side)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api  # API base URL
NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:3000       # WebSocket URL
NEXT_PUBLIC_ANALYTICS_ID=your_public_analytics_id   # Public analytics ID
```

#### Rate Limiting
```env
RATE_LIMIT_REQUESTS=100                     # Max requests per window
RATE_LIMIT_WINDOW_MS=900000                # Time window in milliseconds (15 min)
```

### API Integration Details

1. **OpenAI Integration**
   - Used for advanced natural language processing
   - Enhances query understanding and response generation
   - Supports multiple models (default: GPT-4)

2. **Google Maps & Location Services**
   - Interactive maps for location visualization
   - Geocoding for location search and conversion
   - Places API for location suggestions
   - OAuth integration for user authentication

3. **Social Media Integration**
   - Share weather updates and alerts
   - Social login options
   - Social media engagement tracking

4. **Email & Notifications**
   - SendGrid for transactional emails
   - Twilio for SMS alerts
   - Web Push for real-time notifications
   - Custom notification preferences

5. **Storage & Content Delivery**
   - AWS S3 for file storage
   - Cloudinary for image optimization
   - CDN for fast content delivery
   - Automatic image resizing and optimization

6. **MOSDAC API**
   - Primary data source for satellite and weather information
   - Provides real-time meteorological data
   - Endpoints for weather forecasts and satellite imagery

7. **Weather API**
   - Supplementary weather data source
   - Provides additional meteorological parameters
   - Used for cross-validation of weather forecasts

8. **Authentication System**
   - JWT-based authentication
   - NextAuth.js integration for secure user sessions
   - Supports multiple authentication providers

9. **Database & Caching**
   - Main database for conversation history
   - Redis caching for improved performance
   - Supports data persistence and quick retrieval

10. **Analytics & Monitoring**
    - Tracks user interactions and queries
    - Error monitoring through Sentry
    - Custom logging for system events

11. **Real-time Updates**
    - WebSocket connection for live data
    - Supports instant message updates
    - Real-time weather alerts

### Security Considerations

1. **API Key Protection**
   - All API keys must be stored in `.env`
   - Never commit sensitive keys to version control
   - Use different keys for development/production
   - Restrict API key usage by domain/IP
   - Regular key rotation and monitoring

2. **OAuth & Authentication**
   - Secure social login implementation
   - JWT token management
   - Session handling and timeout
   - CORS policy configuration

3. **Data Protection**
   - End-to-end encryption for sensitive data
   - Secure file upload handling
   - Input validation and sanitization
   - XSS and CSRF protection

4. **Rate Limiting**
   - Prevents API abuse
   - Configurable limits per time window
   - Separate limits for authenticated/anonymous users

3. **Error Handling**
   - Graceful fallbacks for API failures
   - Comprehensive error logging
   - User-friendly error messages

### Deployment Notes

1. **Required Setup**
   - Copy `.env.example` to `.env`
   - Fill in all required API keys
   - Validate configuration using `config.validateConfig()`

2. **Environment Specific**
   - Use different API keys per environment
   - Adjust rate limits as needed
   - Configure appropriate logging levels

3. **Monitoring**
   - Regular API key rotation
   - Monitor API usage and limits
   - Track error rates and performance

### Production Optimizations
- Code minification and bundling
- Image optimization
- Static page generation where applicable
- CDN integration for static assets

## Modular Architecture
The implementation is designed to be modular and reusable:
- Knowledge base can be easily updated or replaced
- UI components are self-contained
- API layer abstracts the underlying NLP service
- Easy integration with other web portals

## Testing
- Unit tests for API endpoints
- Component testing for React components
- Integration testing for end-to-end functionality
- Performance testing for response times

## Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Responsive text sizing

This implementation provides a solid foundation for an AI-powered help bot that can be extended and customized for various use cases beyond the MOSDAC portal.
