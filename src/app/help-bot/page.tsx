'use client';

import ChatBot from '@/components/helpbot/ChatBot';

export default function HelpBotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            MOSDAC AI Assistant
          </h1>
          <p className="text-gray-600">
            Get instant answers about satellite data, missions, weather forecasts, and more.
          </p>
        </div>
        <ChatBot />
      </div>
    </div>
  );
}
