'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';
import styled from 'styled-components';
import ProfileCard, { ProfileCardProps } from './ProfileCard'; // Import your existing ProfileCard
import { Icon } from '@iconify/react'; // Add this import

// Define types for our props and data
interface Location {
  lat: number;
  lng: number;
}

interface MarkerData {
  id: string;
  position: Location;
  name: string;
  distance?: string;
  rating: number;
  description?: string;
  imageUrl?: string;
  verified?: boolean;
}

interface MapContainerProps {
  width?: string;
  height?: string;
}

interface MapComponentProps {
  markers?: MarkerData[];
  width?: string;
  height?: string;
  radiusInKm?: number;
  onViewProfile?: (markerId: string) => void;
}

// Styled components
const MapContainer = styled.div<MapContainerProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '500px'};
  margin-top: 10px;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 12px;
  margin-top: 10px;
`;

const BottomCardContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  color: #666;
  z-index: 20;
  
  &:hover {
    color: #333;
    background-color: #f5f5f5;
  }
`;

const LocateButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const MapComponent: React.FC<MapComponentProps> = ({
  markers = [],
  width = '100%',
  height = '350px',
  radiusInKm = 20,
  onViewProfile
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  // Default to a central location (can be anywhere, will be updated immediately)
  const [currentLocation, setCurrentLocation] = useState<Location>({
    lat: 51.5074, // Default to London coordinates
    lng: -0.1278
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [isLocating, setIsLocating] = useState(false);

  const handleLocationRequest = useCallback(() => {
    setIsLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentLocation(userLocation);
          if (map) {
            map.panTo(userLocation);
            map.setZoom(15);
          }
          setLocationError('');
          setIsLocating(false);
        },
        (error) => {
          setIsLocating(false);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocationError('Location permission denied');
              break;
            case error.POSITION_UNAVAILABLE:
              setLocationError('Location information unavailable');
              break;
            case error.TIMEOUT:
              setLocationError('Location request timed out');
              break;
            default:
              setLocationError('An unknown error occurred');
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setIsLocating(false);
      setLocationError('Geolocation is not supported by this browser');
    }
  }, [map]);

  // Add useEffect to request location when component mounts
  useEffect(() => {
    if (isLoaded) {
      handleLocationRequest();
    }
  }, [isLoaded, handleLocationRequest]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker: MarkerData) => {
    setSelectedMarker(marker);
  };

  const handleViewProfile = () => {
    if (selectedMarker && onViewProfile) {
      onViewProfile(selectedMarker.id);
    }
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  const circleOptions = {
    strokeColor: '#73DF77',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#73DF77',
    fillOpacity: 0.1,
  };

  if (!isLoaded) {
    return <LoadingContainer>Loading Maps...</LoadingContainer>;
  }

  return (
    <MapContainer width={width} height={height}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '12px' }}
        center={currentLocation}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          ...mapOptions,
          gestureHandling: 'greedy',
        }}
      >
        {/* Current location marker */}
        <Marker
          position={currentLocation}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        />
        
        {/* 20km radius circle */}
        <Circle
          center={currentLocation}
          radius={radiusInKm * 1000} // Convert km to meters
          options={circleOptions}
        />
        
        {/* Custom markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
              scaledSize: new window.google.maps.Size(36, 36)
            }}
          />
        ))}
      </GoogleMap>
      
      {/* Add Locate Me button */}
      <LocateButton 
        onClick={handleLocationRequest}
        disabled={isLocating}
        title="Locate me"
      >
        <Icon 
          icon={isLocating ? "eos-icons:loading" : "material-symbols:my-location"} 
          width="24" 
          height="24" 
          color={isLocating ? "#666" : "#2196F3"}
        />
      </LocateButton>

      {locationError && (
        <div style={{
          position: 'absolute',
          top: '60px', // Moved down to avoid overlap with locate button
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '8px 16px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          color: '#dc3545'
        }}>
          {locationError}
        </div>
      )}

      {/* Profile card at bottom of map when marker is selected */}
      {selectedMarker && (
        <BottomCardContainer>
          <CloseButton onClick={() => setSelectedMarker(null)}>✕</CloseButton>
          <ProfileCard
            name={selectedMarker.name}
            distance={selectedMarker.distance}
            rating={selectedMarker.rating}
            description={selectedMarker.description}
            imageUrl={selectedMarker.imageUrl}
            verified={selectedMarker.verified}
            onViewProfile={handleViewProfile}
          />
        </BottomCardContainer>
      )}
    </MapContainer>
  );
};

export default MapComponent;
