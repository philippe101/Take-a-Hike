
var CLIENT_ID = "JMRL0LMRP5KL2BKOT5MJGGADP4FGW1RB1NDY53ENOVEN5KR3";
var CLIENT_SECRET = "1D32DJ1AOTCPXDGR4VFWYQTFR2DEE24NYS1YQV41SLFGUBNL";

	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(34.0522, -118.2437),
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map'),
			mapOptions);

		var locations = [
			['Joshua Tree', 33.8734, -115.9010, 4],
			['Mount Pinos', 34.8128, -119.1454, 5],
			['Mount Hollywood', 34.0741, -118.1804, 3],
			['Mount Baldy', 34.2364, -117.6590, 2],
			['Mount Baden-Powell', 34.3586, -117.7645, 1]
		];

		var contentString = '<div id="content">';

		//  var infowindow = new google.maps.infoWindow({
		//  	content: contentString
		// });

		var marker, i;

		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
			});
		}
		// var infowindow = new google.maps.infoWindow({
		// 	content: "Hello"
		// 	});
// 
			// google.maps.event.addListener(marker,'click,' function(){
			// infowindow.open(map,marker);
			// });

		

			// marker.addListener('click', function(){
			// 	infowindow.open(map, marker);
			// });

			// google.maps.event.addListener(map, 'click', function(event) {
   // 			InfoWindow(event);
  	// 		});

			// google.maps.event.addListener(marker,'click', (function(marker, i) {
			// return function() {
			// 	infowindow.contentString(locations[i][0]);
			// 	infowindow.open(map, marker);
			// }
			


		// })(marker, i));
			
	
		}	

		

	// function initMap() {
	// 	var Joshua Tree = {lat: 33.8734, lng: -115.9010};

	// 	var map = new google.maps.Map(document.getElementById('map'), {
	// 		zoom: 4,
	// 		center: Joshua Tree
	// 	});

	// 	var marker = new google.maps.Marker({
	// 		position: Joshua Tree,
	// 		map: map,
	// 		title: 'Joshua Tree'
	// 	});

	// }

		// var contentString = '<div id="content">' +
		// '<div id="siteNotice">'+
		// '</div>'+
		// '<h1 id="fistHeading"class="firstHeading">Joshua Tree</h1>'+
		// '<div id="bodyContent">'+
		// '<p><b>Joshua Tree</b>, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
		// 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
		// 'Northern Territory,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
		// '</p>'+
		// '</div>'+
		// '</div>';

		
		

		// marker.addListener('click', function() {
		// 	infoWindow.open(map,marker);
		// })
