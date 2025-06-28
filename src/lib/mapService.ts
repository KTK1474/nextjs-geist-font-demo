import { config } from './config';

interface GeocodingResult {
  lat: number;
  lng: number;
  address: string;
}

interface PlaceResult {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class MapService {
  private readonly mapsApiKey: string;
  private readonly geocodingApiKey: string;
  private readonly placesApiKey: string;

  constructor() {
    this.mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    this.geocodingApiKey = process.env.GOOGLE_GEOCODING_API_KEY || '';
    this.placesApiKey = process.env.GOOGLE_PLACES_API_KEY || '';
  }

  /**
   * Get coordinates for a given address
   */
  async getCoordinates(address: string): Promise<GeocodingResult | null> {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${this.geocodingApiKey}`
      );

      if (!response.ok) {
        throw new Error('Geocoding request failed');
      }

      const data = await response.json();

      if (data.status === 'OK' && data.results && data.results[0]) {
        const result = data.results[0];
        return {
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng,
          address: result.formatted_address,
        };
      }

      return null;
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  }

  /**
   * Search for places near a location
   */
  async searchNearbyPlaces(
    lat: number,
    lng: number,
    radius: number = 1000,
    type?: string
  ): Promise<PlaceResult[]> {
    try {
      const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
      url.searchParams.append('location', `${lat},${lng}`);
      url.searchParams.append('radius', radius.toString());
      url.searchParams.append('key', this.placesApiKey);
      if (type) url.searchParams.append('type', type);

      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error('Places API request failed');
      }

      const data = await response.json();

      if (data.status === 'OK' && data.results) {
        return data.results.map((place: any) => ({
          id: place.place_id,
          name: place.name,
          address: place.vicinity,
          location: {
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
          },
        }));
      }

      return [];
    } catch (error) {
      console.error('Places API error:', error);
      return [];
    }
  }

  /**
   * Get the Google Maps script URL with API key
   */
  getMapScriptUrl(): string {
    return `https://maps.googleapis.com/maps/api/js?key=${this.mapsApiKey}&libraries=places`;
  }

  /**
   * Initialize a map instance
   */
  initMap(elementId: string, center: { lat: number; lng: number }, zoom: number = 12): void {
    // This function should be called after the Google Maps script is loaded
    if (typeof window !== 'undefined' && (window as any).google) {
      const map = new (window as any).google.maps.Map(document.getElementById(elementId), {
        center,
        zoom,
      });

      // Return the map instance for further customization
      return map;
    }
    throw new Error('Google Maps not loaded');
  }

  /**
   * Add a marker to the map
   */
  addMarker(
    map: any,
    position: { lat: number; lng: number },
    title?: string
  ): void {
    if (typeof window !== 'undefined' && (window as any).google) {
      new (window as any).google.maps.Marker({
        map,
        position,
        title,
      });
    }
  }

  /**
   * Validate API keys
   */
  validateKeys(): boolean {
    if (!this.mapsApiKey || !this.geocodingApiKey || !this.placesApiKey) {
      console.error('Missing required Google Maps API keys');
      return false;
    }
    return true;
  }
}

export const mapService = new MapService();
