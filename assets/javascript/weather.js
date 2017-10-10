$(document).ready(function() { 



function weather(){

  var location = [
        {
        name: 'Joshua Tree', 
        longitude: 33.8734, 
        latitude: -115.9010
        },
        
        {
          name: 'Mount Pinos', 
          longitude: 34.8128, 
          latitude: -119.1454
        },

        {
          name: 'Mount Hollywood', 
          longitude: 34.0741, 
          latitude: -118.1804
        },

        {
          name: 'Mount Baldy',
          longitude: 34.2364, 
          latitude: -117.6590
        },

        {
          name: 'Mount Baden-Powell', 
          longitude: 34.3586, 
          latitude: -117.7645
        }
      ];

  for (i = 0; i < location.length; i++) {
    // console.log(markers[i]);

    console.log("Location name: " + location[i].name);

  // weather info
    var longitude = location[i].longitude;
     console.log("longitude: " + longitude);
    var latitude = location[i].latitude;
     console.log("latitude: " + latitude);
    var APIKey = "058e52fd52e54f1043d30a1ad70a482e";
    var queryURL = "https://api.darksky.net/forecast/058e52fd52e54f1043d30a1ad70a482e/33.87342,%20-115.90099";
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var apiLinkDS = "https://api.darksky.net/forecast/" + APIKey + "/" + longitude + "," + latitude;


    $("#location-name").html("<h1>Current Weather in " + location[0].name + "</h1>");
  }

      $.ajax({
      url: proxy + apiLinkDS,
      success:function(data) { 
        console.log(data);
        // console.log(data.currently);
        console.log("Current Temperature: " + data.currently.temperature + "F");
        console.log("Current Skies: " + data.currently.summary);
        console.log("Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F");
        console.log("Current alerts: " + data.alerts[0].title + " " + data.alerts[1].title);

        
        $("#current-temperature").html("<p>Current temperature: " + data.currently.temperature + "F</p>");
        $("#current-skies").html("<p>Current skies: " + data.currently.icon + " " + data.currently.summary);
        $("#tomorrow-high").html("<p>Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F</p>");
        $("#alerts").html("<p>Current alerts: " + "<span class='text-danger'>" + data.alerts[0].title + "</span> and " + " <span class='text-danger'>" + data.alerts[1].title + "</span></p>");
      } //end of success function
    })//end of ajax
  }// end of weather function

  weather();
}); //end of document function



    


// Skycon icon code. Taken from https://webdesign.tutsplus.com/tutorials/building-a-weather-app-with-the-darksky-api--cms-28678
// function skycons() {
//         var i,
//             icons = new Skycons({
//                 "color" : "#FFFFFF",
//                 "resizeClear": true // nasty android hack
//             }),
//             list  = [ // listing of all possible icons
//                 "clear-day",
//                 "clear-night",
//                 "partly-cloudy-day",
//                 "partly-cloudy-night",
//                 "cloudy",
//                 "rain",
//                 "sleet",
//                 "snow",
//                 "wind",
//                 "fog"
//             ];
 
//     // loop thru icon list array
//     for(i = list.length; i--;) {
//         var weatherType = list[i], // select each icon from list array
//                 // icons will have the name in the array above attached to the 
//                 // canvas element as a class so let's hook into them.
//                 elements    = document.getElementsByClassName( weatherType );
 
//         // loop thru the elements now and set them up
//         for (e = elements.length; e--;) {
//             icons.set(elements[e], weatherType);
//         }
//     }
     
//     // animate the icons
//     icons.play();
// }

