var mymap = L.map('mapid').setView([-6.228597, 107.078598], 14);
// var marker = L.marker([-6.238279,106.902439]).addTo(mymap);

var places= [ 
    {
        "lokasi": [-6.232466, 107.073999], "Laundry" : "N470 Laundry"
    },
    {
        "lokasi": [-6.225910, 107.080244], "Laundry" : "Griya Asri 2 Uap Laundry"
    },
    {
        "lokasi": [-6.232490, 107.074968], "Laundry" : "Trizayana Laundry"
    },
    {
        "lokasi": [-6.234081, 107.073262], "Laundry" : "Rizky Laundry"
    },
    {
        "lokasi": [-6.228597, 107.078598], "Laundry" : "Selaras Laundry"
    },
    {
        "lokasi": [-6.228953, 107.084311], "Laundry" : "Mamah Laundry & Toko Kelontong"
    },
    {
        "lokasi": [-6.233568, 107.077973], "Laundry" : "Barokah Laundry 354"
    },
    {
        "lokasi": [-6.232140, 107.076645], "Laundry" : "Berkah Laundry"
    },
    {
        "lokasi": [-6.226244, 107.079693], "Laundry" : "Gayo Laundry"
    },
    {
        "lokasi": [-6.235786, 107.080553], "Laundry" : "Wijaya Laundry"
    },
    {
        "lokasi": [-6.232791, 107.082196], "Laundry" : "Vira Laundry"
    },
    {
        "lokasi": [-6.237266, 107.080074], "Laundry" : "Dino Laundry"
    },
    {
        "lokasi": [-6.238738, 107.079965], "Laundry" : "Zahra Laundry"
    },
    {
        "lokasi": [-6.237315, 107.072183], "Laundry" : "Putri Laundry"
    },
    {
        "lokasi": [-6.236410, 107.081030], "Laundry" : "Lym Super Laundry"
    }
];

for (var p of places) {
    var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.Laundry);
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGJhZ2FzdGFtYSIsImEiOiJjam1qcjc2MWIwaDU4M3FwZnFsa2o0ejhoIn0.aoG9D3ST7bw8NHw_XeR4iQ'
}).addTo(mymap);

var circle = L.circle([-6.228597, 107.078598], {
    color: '#894C9E',
    fillColor: '#894C9E',
    fillOpacity: 0.3,
    radius: 1300
}).addTo(mymap);

// marker.bindPopup("<center><b> Hello Gaess !!! </b><br>Warung Makan Ayam Bakar Betawi Terbaik Ada Disini.</center>").openPopup();

// var polygon = L.polygon([
//     [-6.238279,106.902439],
//     [-6.238279,106.902439],
//     [-6.238279,106.902439],
// ]).addTo(mymap);

// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup().setLatLng([-6.238279,106.902439])
//     .setContent("Warung Makan Ayam Bakar Betawi Terbaik Ada Disini.")
//     .openOn(mymap);