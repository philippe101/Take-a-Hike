var map;
var infowindow;
var bounds;
var markers = [];

  	
     
	
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: new google.maps.LatLng(34.0522, -118.2437),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	for (var i = 0; i < locations.length; i++) {
		var location = locations[i].location;
		var name = locations[i].name;
		var id = locations[i].id;
		var distance = locations[i].distance;

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			title: name,
			id: id,
			distance: distance,
			// animation: google.maps.Animation.DROP
		});
		console.log(marker)

		markers.push(marker);

		marker.addListener('click', function(){
        	infoWindowInit(this, createInfoWindow());
        });

        marker.addListener('mouseover', function(){
            this.setIcon(hoverMarker);
        });

        marker.addListener('mouseout', function(){
            this.setIcon(defaultMarker);
        });
	}
	console.log(markers)
}

function mapError() {
    window.alert("The map has failed to load because invalid parameters were" +
    "passed to Google Maps");
}
