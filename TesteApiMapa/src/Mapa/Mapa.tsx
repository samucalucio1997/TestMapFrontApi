import tt from '@tomtom-international/web-sdk-maps';
import { useEffect } from 'react';

function Mapa() {

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            tt.map({
                key: 'o0JA6AFfGiL8GFelg6TnTtH0zhwyfH8g',
                container: mapContainer,
            });
        }
    }, []);

    return (
        <>
            <div id="map"></div>
        </>
    )
}

export default Mapa;

