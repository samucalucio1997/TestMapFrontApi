import tt from '@tomtom-international/web-sdk-maps';
import { useEffect } from 'react';

function Mapa() {

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            tt.map({
                key: '',
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

