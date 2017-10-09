var map;

function initMap() {
  	map = new google.maps.Map(document.getElementById('map'), {
       	center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function mapError() {
    window.alert("The map has failed to load because invalid parameters were" +
    "passed to Google Maps");
}
