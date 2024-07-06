import tt, { Layer, LngLatLike } from '@tomtom-international/web-sdk-maps';
import { services } from '@tomtom-international/web-sdk-services';
import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import { useEffect } from 'react';

function Mapa() {

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const compoMap = tt.map({
            key: ' chave-api ',
            container: mapContainer? mapContainer : '',
        });
        var options = {
            searchOptions: {
                key: ' chave-api ',
                language: "pt-BR",
                limit: 5,
              },
              autocompleteOptions: {
                key: ' chave-api ',
                language: "pt-BR",
              },
        }
        const searc = new SearchBox(services,options); 
        const searchScreen = searc.getSearchBoxHTML();
        mapContainer?.appendChild(searchScreen);        
        
        services.calculateRoute({
            key: ' chave-api ',
            locations: '-43.1729,-22.9068:-46.6333,-23.5505'
        }).then((routeData) => {
            const geojson = routeData.toGeoJson();
            const routeLayer = {
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                paint: {
                    'line-color': '#FF0000',
                    'line-width': 6
                }
            };
            compoMap.addLayer(routeLayer as tt.LineLayer);
            const coordinates = geojson.features[0].geometry.coordinates;
            const bounds = coordinates.reduce((b, coord) => b.extend(coord as LngLatLike), new tt.LngLatBounds(coordinates[0] as LngLatLike, coordinates[0] as LngLatLike));
            compoMap.fitBounds(bounds, { padding: 50 });
        });

        new tt.Marker().setLngLat([-43.0759, -22.9065]).addTo(compoMap);

    }, []);

    return (
        <>
            <div id="map" style={{ width: '100%', height: '500px' }}></div>
        </>
    )
}

export default Mapa;

