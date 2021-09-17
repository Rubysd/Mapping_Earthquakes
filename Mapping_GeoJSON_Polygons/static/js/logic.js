// Add console.log to check to see if our code is working.
console.log("working");
// Get data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level.
//let map = L.map('mymap').setView([36.1733, -120.1794],7); 

// Create the map object with center and zoom level.
//let map = L.map('mymap').setView([30, 30], 2);

/* // Add GeoJSON data.
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]}; */

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);


// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

/* // Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + "</h2>");
  }

}).addTo(map); */

/* L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2><hr></hr><h3> Airport name: " + feature.properties.name + "</h3>");
   }
}).addTo(map);
 */
// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { 
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {        
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //maxZoom: 1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);


// Create a base layer that holds both maps.
let baseMaps = {
  Dark: dark,
  Ligth: light
  
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mymap', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/cgzverduzco/Mapping_Earthquakes/main/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/cgzverduzco/Mapping_Earthquakes/main/torontoRoutes.json";


// Grabbing our GeoJSON data.
//L.geoJSON(airportData).addTo(map);

// Grabbing our GeoJSON data.
/* d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2><hr></hr><h3> Airport name: " + feature.properties.name + "</h3>");
   }
  }).addTo(map);
}); */

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
  //dashArray: "10",
  //opacity: 0.5,

}


// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data,{
    style : myStyle,
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2><hr></hr><h3> Destination: " + feature.properties.dst + "</h3>");
     }
    

}).addTo(map);
});

/* L.geoJson(airportData, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2><hr></hr><h3> Airport name: " + feature.properties.name + "</h3>");
   }
}).addTo(map); */
//streets.addTo(map);
