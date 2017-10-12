var CLIENT_ID = "JMRL0LMRP5KL2BKOT5MJGGADP4FGW1RB1NDY53ENOVEN5KR3";
var CLIENT_SECRET = "1D32DJ1AOTCPXDGR4VFWYQTFR2DEE24NYS1YQV41SLFGUBNL";
var location;
var current_date = new Date();
var dateString = current_date.toISOString().slice(0,10).replace(/-/g,"");





// var infoUrl = "https://api.foursquare.com/v2/venues/search?client_id=X3JOZJUYLFFFB22HKOYSX0FSX30LZFP0DRPUE2E2WP04MMFU&client_secret=I0L2CGALFX1S5DC0NWEUGKNMUUUTKHGGJXKPB2YSQJWBBDTB&section=trails&ll="
//             + String(location.lat) + "," + String(location.lng) + "&v=" + dateStr + "&query=" + marker.title;

function getDataTest() {
	location = locations[1];

	var query_url = 'https://api.foursquare.com/v2/venues/search?' + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET +
	'&section=trails&ll=' + String(location.lat) + ',' + String(location.lng) + '&v=' + dateString +'&query=' + location.title;

	$.ajax({
		type: "GET",
        url: query_url,
        dataType: "json",
        success: function(data) {
            console.log(data)
            var venue = data.response.venues[0];
            var venueInfo = {
                name: location.title,
                location: venue.location.city + ", " + venue.location.state,
                checkins: venue.stats.checkinsCount,
                length: location.distance,
                id: data.response.venues[0].id
            };
		}
	});
}