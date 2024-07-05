import tt from '@tomtom-international/web-sdk-maps';
import x from '@tomtom-international/web-sdk-plugin-searchbox'
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
        var options = {
            searchOptions: {
                key: 'o0JA6AFfGiL8GFelg6TnTtH0zhwyfH8g',
                language: "en-GB",
                limit: 5,
              },
              autocompleteOptions: {
                key: 'o0JA6AFfGiL8GFelg6TnTtH0zhwyfH8g',
                language: "en-GB",
              },
        }
        var searc; 
    

    }, []);

    return (
        <>
            <div id="map"></div>
        </>
    )
}

export default Mapa;

