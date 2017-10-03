
	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(34.0522, -118.2437),
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map_canvas'),
			mapOptions);
		}

	

