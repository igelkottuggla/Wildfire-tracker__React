import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import { useGlobalContext } from '../context';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const { openModal } = useGlobalContext();

    const idGenerator = () => {
        let S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    };

    const markers = eventData.map((event) => {
        if (event.categories[0].id === 8) {
            return (
                <LocationMarker
                    key={idGenerator()}
                    lat={event.geometries[0].coordinates[1]}
                    lng={event.geometries[0].coordinates[0]}
                    onClick={() => {
                        openModal();
                        setLocationInfo({ id: event.id, title: event.title });
                    }}
                ></LocationMarker>
            );
        }

        return null;
    });
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP, language: 'en' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom: 6,
};

export default Map;
