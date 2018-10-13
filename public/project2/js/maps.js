var mymap = L.map('mapid').setView([-6.238279,106.902439], 17);
var marker = L.marker([-6.238279,106.902439]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGJhZ2FzdGFtYSIsImEiOiJjam1qcjc2MWIwaDU4M3FwZnFsa2o0ejhoIn0.aoG9D3ST7bw8NHw_XeR4iQ'
}).addTo(mymap);

var circle = L.circle([-6.238279,106.902439], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(mymap);

// var polygon = L.polygon([
//     [-6.238279,106.902439],
//     [-6.238279,106.902439],
//     [-6.238279,106.902439],
// ]).addTo(mymap);

marker.bindPopup("<center><b> Hello Gaess !!! </b><br>Warung Makan Ayam Bakar Betawi Terbaik Ada Disini.</center>").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup().setLatLng([-6.238279,106.902439])
//     .setContent("Warung Makan Ayam Bakar Betawi Terbaik Ada Disini.")
//     .openOn(mymap);