var map = null;
  
function initialize() {

	map = new google.maps.Map(document.getElementById('map'), {
		center: defaultCenter,
		zoom: defaultZoom,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		gestureHandling: 'greedy',
		streetViewControl: false,
		fullscreenControl: false,
		zoomControl: false,
		mapTypeControl: false,
	});

}

google.maps.event.addDomListener(window, 'load', initialize);

