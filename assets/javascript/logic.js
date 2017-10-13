var weather_apikey = "5fea5bb7daa140b575bd56da497c455f";

var latitude = "";
var longitude = "";
var APIKey = "";
var queryURL = "";
var proxy = "";
var apiLinkDS = "";

	var weatherDiv = '</div><div id="current-temperature"></div><div id="current-skies"></div><div id="tomorrow-high"></div><div id="alerts"></div>';
	console.log(weatherDiv);


	function initMap(){

    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'terrain'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
      ['Joshua Tree', 33.8734, -115.9010],
      ['Mount Pinos', 34.8128, -119.1454] ,
      ['Mount Hollywood', 34.0741, -118.1804],
      ['Mount Baldy', 34.2364, -117.6590],
      ['Mount Baden-Powell', 34.3586, -117.7645]
    ];

    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Joshua Tree</h3>' + '<IMG BORDER="0" ALIGN="Left" SRC="https://www.rei.com/adventures/assets/adventures/images/trip/gallery/northamerica/jtb_01" height="150" width="auto">'
        + '<p class="location-image">Joshua Tree is an art museum located in the New York City borough of Brooklyn.</p></div>' + '<div id="location-name"></div><div id="current-temperature"></div><div id="current-skies"></div><div id="tomorrow-high"></div><div id="alerts"></div>' + weatherDiv],
        ['<div class="info_content">' +
        '<h3>Mount Pinos</h3>' +
        '<p>Mount Pinos is the public library system of the borough of Brooklyn, in New York City.</p>' + 
        '</div>' + weatherDiv],
        ['<div class="info_content">' +
        '<h3>Mount Hollywood</h3>' +
        '<p>Mount Hollywood is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
        '</div>' + weatherDiv],
        ['<div class="info_content">' +
        '<h3>Mount Baldy</h3>' +
        '<p>Mount Baldy is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>' + weatherDiv],
        ['<div class="info_content">' +
        '<h3>Mount Baden-Powell</h3>' +
        '<p>Mount Baden-Powell is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
        '</div>' + '<div class="weather-data"></div>'  + weatherDiv]
      ];


      var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < locations.length; i++ ) {
        console.log(locations[i])
        var position = new google.maps.LatLng(locations[i].lat, locations[i].lng);
        bounds.extend(position);
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: locations[i].name
        });

         google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
				weather();
                infoWindow.setContent('<div class="info_content"><h3>' + locations[i].name + '</h3> <IMG BORDER="0" ALIGN="Left" SRC="' + locations[i].photo + '" height=100px width=100px>'
                  + '<p>Joshua Tree is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'
                );
<<<<<<< HEAD
                
=======
>>>>>>> ebdbb8944672d42586eb5857d958a16646de5322

                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });
  // Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);  
}

<<<<<<< HEAD


function weather(){

      for (i = 0; i < locations.length; i++) {


      

    // weather info
      longitude = locations[i].lng;
       
      latitude = locations[i].lat;
       
      APIKey = "058e52fd52e54f1043d30a1ad70a482e";
          
      queryURL = "https://api.darksky.net/forecast/058e52fd52e54f1043d30a1ad70a482e/33.87342,-115.90099";
      
      proxy = 'https://cors-anywhere.herokuapp.com/';
      
      apiLinkDS = "https://api.darksky.net/forecast/" + APIKey + "/" + latitude + "," + longitude;

		console.log("Location name: " + locations[i].name);
		console.log("longitude: " + longitude);
		console.log("latitude: " + latitude);
		console.log(APIKey);
		console.log(queryURL);
		console.log(proxy);      
		console.log(apiLinkDS);
		console.log("apiLinkDS: " + apiLinkDS);
		console.log("queryURL: " + queryURL);

      // $("#location-name").html("<h1>Current Weather in " + location[i].name + "</h1>");

    }

    $.ajax({
      xhrFields: {
      withCredentials: true
    },
      url: proxy + apiLinkDS,
      method: "GET",
      success:function(data) { 
        console.log(data);
        // console.log(data.currently);
        console.log("Current Temperature: " + data.currently.temperature + "F");
        console.log("Current Skies: " + data.currently.summary);
        console.log("Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F");
        console.log("Current alerts: " + data.alerts[0].title);

   //    for (var j = 0; j < data.length; j++) {
   //    	if (name === location[0].name){
   //    		longitude = location[0].longitude;
			// latitude = location[0].latitude;
			//   $("#current-temperature-pinos").html("<p>Current temperature: " + data.currently.temperature + "F</p>");
			//   $("#current-skies-pinos").html("<p>Current skies: " + data.currently.summary + "</p>");
			//   $("#tomorrow-high-pinos").html("<p>Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F</p>");
			//   $("#alerts-pinos").html("<p>Current alerts: " + "<span class='text-danger'>" + data.alerts[0].title + "</p>");
   //    	}
   //    }


      $("#current-temperature").html("<p>Current temperature: " + data.currently.temperature + "F</p>");
      $("#current-skies").html("<p>Current skies: " + data.currently.summary + "</p>");
      $("#tomorrow-high").html("<p>Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F</p>");
      $("#alerts").html("<p>Current alerts: " + "<span class='text-danger'>" + data.alerts[0].title + "</p>");

      // $("#current-temperature").html("<p>Current temperature: " + data.currently.temperature + "F</p>");
      // $("#current-skies").html("<p>Current skies: " + data.currently.icon + " " + data.currently.summary);
      // $("#tomorrow-high").html("<p>Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F</p>");
      // $("#alerts").html("<p>Current alerts: " + "<span class='text-danger'>" + data.alerts[0].title + "</p>");
    }, //end of success function
  })//end of ajax
}// end of weather function

=======
>>>>>>> ebdbb8944672d42586eb5857d958a16646de5322
$(document).ready(function() { 

	initMap();
  makeRequest();
  weather();
  foursquare();
});