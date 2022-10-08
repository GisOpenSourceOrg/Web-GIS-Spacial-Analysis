//layers

var cities = L.layerGroup();

var littleton = L.marker([19.171599, 73.031659]).bindPopup('This is Littleton, CO.').addTo(cities);
var denver    = L.marker([19.163249, 73.029213]).bindPopup('This is Denver, CO.').addTo(cities);
var aurora    = L.marker([19.185806, 73.022625]).bindPopup('This is Aurora, CO.').addTo(cities);
var golden    = L.marker([19.169836, 73.025544]).bindPopup('This is Golden, CO.').addTo(cities);

//green areas
// marker with icons
var greenIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
	var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
 
	var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

	var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		//attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	var map = L.map('map', {
		center: [19.179666, 73.024364],
		zoom: 14.5,
		layers: [osm, cities]
	});

	var baseLayers = {
		'OpenStreetMap': osm,
		'Streets': streets
	};

	var overlays = {
		'Cities': cities
	};

	var layerControl = L.control.layers(baseLayers, overlays).addTo(map);
	var crownHill = L.marker([19.174639, 73.024364]).bindPopup('This is Crown Hill Park.');
    var rubyHill = L.marker([19.170262, 73.025651]).bindPopup('This is Ruby Hill Park.');

	var parks = L.layerGroup([crownHill, rubyHill]);

   
    var gr1 = L.marker([19.184246, 73.026509], {icon: greenIcon}).bindPopup('This is Green area.');
    var gr2 = L.marker([19.174518, 73.029127], {icon: greenIcon}).bindPopup('This is Green area.');
    var gr3 = L.marker([19.1686, 73.020287], {icon: greenIcon}).bindPopup('This is Green area.');

    var green = L.layerGroup([gr1,gr2,gr3]);
    

	var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution:mbAttr});
	layerControl.addBaseLayer(satellite, 'Satellite');
	layerControl.addOverlay(parks, 'Parks');
    layerControl.addOverlay(green, 'Green Area');

    
    //map boundry
var polygon = L.polygon([
    [19.193619, 73.023012],
    [19.187002, 73.019943],
    [19.173221, 73.018012],
    [19.1611, 73.020909],
    [19.161769, 73.032732],
    [19.17016, 73.033912],
    [19.176605, 73.029964]

], {
    color: 'brown',
    fillColor: 'transparent'
}).addTo(map);

var mum = L.marker([19.183597, 73.024063], {color:"red"}).bindPopup('This is Mumbra City.').addTo(cities);

new L.Circle([19.171599, 73.031659], 400).addTo(map)
new L.Circle([19.163183, 73.029248], 400).addTo(map)
new L.Circle([19.185792, 73.022635], 400).addTo(map)

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("" + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var popup = L.popup()
    .setLatLng([19.179463, 73.02372])
    .setContent("<b>Welcome<br>to Mumbra.</b>")
    .openOn(map);






