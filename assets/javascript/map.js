var map;
var infobox;
var bounds;
var markers = [];

// function myMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('googleMap'), {
//     zoom: 4,
//     center: uluru
//     mapTypeId: 'terrain'
//   });

  function mapError() {d
    window.alert("The map has failed to load because invalid parameters were" +
    "passed to Google Maps");
}