const apiKey = "pk.eyJ1IjoibWVydWVtOTIiLCJhIjoiY2xhNWRyN3JkMWJvbTNvcXZvYXU0cWl0aiJ9.pWdlzMRfATUD5FvD1fkOUA"

// const myMap = L.map('map').setView([48.848795, 2.242751], 6);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(myMap);


// // adding markers
// const marker = L.marker([48.86855929293761, 2.784103507725828]).addTo(myMap);

// // adding popup 
// // marker.bindPopup("Yo sekai !");
// // marker.bindPopup("<h1>Yo sekai !</h1>").openPopup();  // showing popup when load
// let template = `
//     <h1>Yo sekai !</h1>
//     <img src="images/disney.jpg" alt="" />
// `
// marker.bindPopup(template);

// //adding circle
// const circle = L.circle([48.86855929293761, 2.784103507725828], {
//     radius: 500,
//     color: "gray",
//     // fillColor: "red",
//     // fillOpacity: .2
// }).addTo(myMap)

// ------------------------------------------------
mapboxgl.accessToken = 'pk.eyJ1IjoibWVydWVtOTIiLCJhIjoiY2xhNWRyN3JkMWJvbTNvcXZvYXU0cWl0aiJ9.pWdlzMRfATUD5FvD1fkOUA';

const mapbx = new mapboxgl.Map({
  container: 'map',
//   style: 'mapbox://styles/mapbox/light-v10',
  style: 'mapbox://styles/meruem92/cla5pm8eh001814nse8f4922p',
  center: [2.5, 44],
  zoom: 4.4
});
let template = `
    <h1>Yo sekai !</h1>
    <img src="images/disney.jpg" alt="" />
`
const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3484063461432183, 48.857478354732855]
        },
        properties: {
          title: 'Mapbox',
          description: template
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-3.721208820629982, 40.72384968227116]
        },
        properties: {
          title: 'Mapbox',
          description: 'Spain, España'
        }
      }
    ]
  };

// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  console.log(el)
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(mapbx);

  //Add popoup
  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
  )
  .addTo(mapbx);
  }


  // Add a layer to use the image to represent the data.
    // mapbx.addLayer({
    //     'id': 'points',
    //     'type': 'symbol',
    //     'source': 'point', // reference the data source
    //     'layout': {
    //     'icon-image': 'cat', // reference the image
    //     'icon-size': 0.25
    //     }
    // });