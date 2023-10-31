import {
    component$,
    useStyles$,
    useVisibleTask$,
} from '@builder.io/qwik'
import leafletStyles from 'leaflet/dist/leaflet.css?inline'
import L from 'leaflet'
import {
    merge,
    Navigation,
} from 'Base'

const Map = component$(({
    circle,
    containerClass,
    coordinates,
    hasNavigation,
    id,
    marker,
    polygon,
    zoom,
}) => {

    useStyles$(leafletStyles)

    useVisibleTask$(() => {

        const parsedCoordinates = coordinates.map(cord => parseFloat(cord))
        const map = L.map(id).setView(parsedCoordinates, zoom || 13)

        if (process.env.NODE_ENV === 'development' && !containerClass) {
            console.warn('Using the default styles for the <Map /> component!')
        }

        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map)

        if (circle) {
            if (!circle.coordinates) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(`No coordinates are set for the circle of the <Map /> component! It needs something like:
[51.505, -0.09]`)
                }
            } else {
                const mapCircle = L.circle(coordinates, {
                    color: circle.color || 'red',
                    fillColor: circle.fillColor || '#f03',
                    fillOpacity: circle.fillOpacity || 0.5,
                    radius: circle.radius || 500
                }).addTo(map)
            }
        }

        if (polygon) {
            if (!polygon?.coordinates) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(`No coordinates are set for the polygon of the <Map /> component! It needs something like:
[[51.509, -0.08],
[51.510, -0.06],
[51.505, -0.047]]`)
                }
            } else {
                const mapPolygon = L.polygon(polygon.coordinates, {
                    color: polygon.color || 'red',
                    fillColor: polygon.fillColor || '#f03',
                    fillOpacity: polygon.fillOpacity || 0.5,
                }).addTo(map)
            }
        }

        if (marker) {
            if (!marker?.coordinates) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(`No coordinates are set for the marker of the <Map /> component! It needs something like:
[51.505, -0.047]
                    `)
                }
            } else {
                const parsedMarkerCoordinates = marker.coordinates.map(cord => parseFloat(cord))

                var markerIcon = L.icon({
                    iconAnchor: [12, 41],
                    iconRetinaUrl: '/icons/marker-icon-2x.png',
                    iconSize: [25, 41],
                    iconUrl: '/icons/marker-icon.png',
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                    shadowUrl: '/icons/marker-shadow.png',
                    tooltipAnchor: [16, -28],
                })
                var mapMarker = L.marker(parsedMarkerCoordinates, { icon: markerIcon }).addTo(map)
            }
        }

    }, {
        strategy: 'document-ready'
    })

    return <>
        <div class={merge('relative', containerClass)}>
            <div
                class='w-full h-full'
                id={id}
            >
                {
                    hasNavigation && <>
                        <a
                            href={`geo:${coordinates?.[0]},${coordinates?.[1]}`}
                            target='_blank'
                            class='cursor-pointer shadow-md sm:hidden absolute z-[500] rounded-lg end-2 bottom-2 bg-white hover:bg-gray-300 transition-all duration-200'>
                            <Navigation class='w-8 h-8 p-1 fill-black' />
                        </a>
                        <a
                            target='_blank'
                            href={`https://maps.google.com/maps?daddr=${coordinates?.[0]},${coordinates?.[1]}&amp;ll=`}
                            class='cursor-pointer shadow-md hidden sm:block absolute z-[500] rounded-lg end-2 bottom-2 bg-white hover:bg-gray-300 transition-all duration-200'>
                            <Navigation class='w-8 h-8 p-1 fill-black' />
                        </a>
                    </>
                }
            </div>
        </div>
    </>
})

export default Map
