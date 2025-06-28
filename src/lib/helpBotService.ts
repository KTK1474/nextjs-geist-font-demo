// Knowledge base structured based on MOSDAC portal content
const knowledgeBase = {
  missions: {
    'INSAT-3DR': 'INSAT-3DR is a meteorological satellite launched by ISRO for enhanced meteorological observations.',
    'INSAT-3D': 'INSAT-3D is an advanced weather satellite providing atmospheric sounding and imaging.',
    'KALPANA-1': 'Kalpana-1 (formerly METSAT) is dedicated to meteorological observations and weather forecasting.',
    'OCEANSAT': 'OCEANSAT series are Indian satellites designed for ocean and atmospheric studies.',
    'MEGHATROPIQUES': 'MeghaTropiques is designed to study the water cycle and energy exchanges in the tropics.',
    'SARAL-ALTIKA': 'SARAL-AltiKa is a joint Indian-French satellite mission for oceanographic studies.',
  },
  services: {
    'weather': 'MOSDAC provides comprehensive weather services including 3-hourly forecasts, cold wave predictions, heat wave forecasts, and heavy rainfall predictions.',
    'forecast': 'Available forecasts include city weather, monsoon predictions, sea state forecasts, and solar & wind energy forecasts.',
    'data_access': 'MOSDAC offers access to satellite data, insitu (AWS) data, RADAR data, and various atmospheric and oceanic parameters.',
    'products': 'Products include satellite imagery, weather reports, ocean state information, and atmospheric data products.',
  },
  applications: {
    'monsoon': 'Track monsoon predictions and patterns, including onset predictions over Kerala.',
    'cyclone': 'Monitor cyclone observations and predictions over the Indian Ocean region.',
    'ocean': 'Access ocean subsurface data, eddy currents information, and sea state forecasts.',
    'agriculture': 'Utilize soil moisture data and rainfall information for agricultural applications.',
  }
};

export async function getBotResponse(query: string): Promise<string> {
  try {
    // Convert query to lowercase for case-insensitive matching
    const lowerQuery = query.toLowerCase();
    
    // Mission-related queries
    if (lowerQuery.includes('insat')) {
      if (lowerQuery.includes('3dr')) {
        return knowledgeBase.missions['INSAT-3DR'];
      } else if (lowerQuery.includes('3d')) {
        return knowledgeBase.missions['INSAT-3D'];
      }
      return 'INSAT series satellites are used for meteorological observations. Which specific INSAT satellite would you like to know about?';
    }
    
    if (lowerQuery.includes('oceansat')) {
      return knowledgeBase.missions['OCEANSAT'];
    }
    
    if (lowerQuery.includes('kalpana')) {
      return knowledgeBase.missions['KALPANA-1'];
    }
    
    // Weather and forecast queries
    if (lowerQuery.includes('weather') || lowerQuery.includes('forecast')) {
      if (lowerQuery.includes('city')) {
        return 'MOSDAC provides 3-hourly weather forecasts for cities across India.';
      }
      return knowledgeBase.services['weather'];
    }
    
    // Data access queries
    if (lowerQuery.includes('data') || lowerQuery.includes('access')) {
      return knowledgeBase.services['data_access'];
    }
    
    // Application-specific queries
    if (lowerQuery.includes('monsoon')) {
      return knowledgeBase.applications['monsoon'];
    }
    
    if (lowerQuery.includes('cyclone')) {
      return knowledgeBase.applications['cyclone'];
    }
    
    if (lowerQuery.includes('ocean')) {
      return knowledgeBase.applications['ocean'];
    }

    // Default response
    return "I can help you with information about MOSDAC's satellite missions, weather forecasts, and data services. Please ask a specific question about these topics.";
    
  } catch (error) {
    console.error('Error in getBotResponse:', error);
    return 'I apologize, but I encountered an error. Please try asking your question again.';
  }
}
