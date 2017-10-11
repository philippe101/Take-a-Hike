var CLIENT_ID = "JMRL0LMRP5KL2BKOT5MJGGADP4FGW1RB1NDY53ENOVEN5KR3";
var CLIENT_SECRET = "1D32DJ1AOTCPXDGR4VFWYQTFR2DEE24NYS1YQV41SLFGUBNL";
var location;
var query = 'trails';
var base_url = 'https://api.foursquare.com/v2/venues/explore?near=' + location + '&query=' + query + '&venuePhotos=1';
var query_url = base_url + '&v=20170101' + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET;