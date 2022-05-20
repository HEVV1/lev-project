// GLOBALY ACCESSIBLE ----------------------------------------------------------------------------------
var initMap;
var map;
var marker_data_markets;
var marker_data_partners;
var updateInfoWindowPosition;
// ---------------------------------------------------------------------------------------------------------------
(function($) {

	initMap = function() {

		// setup brains
		map = new google.maps.Map($('.block-map .wrapper-map')[0], {
			zoom			: 4.9,
			center			: new google.maps.LatLng(54.5159, 20.3777),
			mapTypeId   	: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "featureType": "administrative.country",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					},
					{
					  "visibility": "on"
					},
					{
					  "weight": 1
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#bdbdbd"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#ffffff"
					},
					{
					  "visibility": "simplified"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dadada"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#c9c9c9"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				}
			],
		});

		var opt = {minZoom: 4.9, maxZoom: 17};
		map.setOptions(opt);

		// trigger resize because it was under display: none;
		google.maps.event.trigger(map, 'resize');
		
		marker_data_markets = [
			{
				lat: 61.4720,
				lng: 11.4689
			},
			{
				lat: 46.955057,
				lng: 26.099037
			},
			{
				lat: 50.955057,
				lng: 22.099037
			},
			{
				lat: 50.955057,
				lng: 28.099037
			},
			{
				lat: 48.855057,
				lng: 16.599037
			},
			{
				lat: 50.855057,
				lng: 8.599037
			},
			{
				lat: 45.855057,
				lng: 4.599037
			},
			{
				lat: 52.955057,
				lng: 38.099037
			}
		];
		marker_data_partners = [
			{
				lat: 60.4720,
				lng: 9.4689
			},
			{
				lat: 59.4953,
				lng: 27.0136
			},
			{
				lat: 53.9194,
				lng: 18.1451
			},
			{
				lat: 55.5194,
				lng: 30.1451
			},
			{
				lat: 46.5194,
				lng: 49.1451
			},
			{
				lat: 46.5194,
				lng: 49.1451
			}
		];
		
		for (let i = 0; i < marker_data_markets.length; i++) {
			createMarker(marker_data_markets[i]);
		}
		for (let i = 0; i < marker_data_partners.length; i++) {
			createMarker(marker_data_partners[i]);
		}

		$('.block-map').removeClass('loading');
	}

	$(document).ready(function(){
		var script = document.createElement('script');
		script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARPhnXtM36JaVv5ZMr8V17LqfWkbLn3nk&callback=initMap&v=3');
		script.setAttribute('defer', 'defer');
		script.setAttribute('async', '');
		document.head.appendChild(script);
	});

})(jQuery);

function createMarker(marker_data) {
	/*
	 * HTMLMapMarker Javascript class
	 * Extends the Google Maps OverlayView class
	 * Set up to accept our latlng, html for the div, and the map to attach it to as arguments
	 */
	class HTMLMapMarker extends google.maps.OverlayView
	{	
		// Constructor accepting args
		constructor(args) {
			super();
			this.latlng = args.latlng;
			this.html = args.html;
			this.setMap(args.map);
		}

		// Create the div with content and add a listener for click events
		createDiv() {
			this.div = document.createElement('div');
			this.div.style.position = 'absolute';
			if (this.html) {
				this.div.innerHTML = this.html;
			}
			google.maps.event.addDomListener(this.div, 'click', event => {
				google.maps.event.trigger(this, 'click');
			});

			google.maps.event.addDomListener(marker, 'click');

			
			$('.wrapper-marker', '.block-map').on('click', function(event) {	
				$('.wrapper-image').removeClass('show-image');
				$('.wrapper-image', $(this)).addClass('show-image');
				$('.wrapper-marker').removeClass('wrapper-marker-active');
				$(this).addClass('wrapper-marker-active');
				removeCirclePopUp();
				showPopupCircleLinesPopup($(this), map);
				disableMap();
			
			});

			$(document).on('click', function(e){
				if ( 
					!$(e.target).closest('.wrapper-marker', '.block-map').length &&
					!$(e.target).closest('.block-map-popup').length					
				){
					$('.wrapper-marker').removeClass('wrapper-marker-active');
					$('.wrapper-image').removeClass('show-image');
					removeCirclePopUp();
					enableMap();
				} 
			})
		}
		
		// Append to the overlay layer
		// Appending to both overlayLayer and overlayMouseTarget which should allow this to be clickable
		appendDivToOverlay() {
			const panes = this.getPanes();
			panes.overlayLayer.appendChild(this.div);
			panes.overlayMouseTarget.appendChild(this.div);
		}

		// Position the div according to the coordinates
		positionDiv() {
			const point = this.getProjection().fromLatLngToDivPixel(this.latlng);
			if (point) {
				this.div.style.left = `${point.x}px`;
				this.div.style.top = `${point.y}px`;
			}
		}

		// Create the div and append to map
		draw() {
			if (!this.div) {
				this.createDiv();
				this.appendDivToOverlay();
			}
			this.positionDiv();
		}

		// Remove this from map
		remove() {
			if (this.div) {
				this.div.parentNode.removeChild(this.div);
				this.div = null;
			}
		}

		// Return lat and long object
		getPosition() {
			return this.latlng;
		}

		// Return whether this is draggable
		getDraggable() {
			return false;
		}
	}

	for (let i = 0; i < marker_data_markets.length; i++) {
		if (marker_data_markets[i] == marker_data) {
			var marker = new HTMLMapMarker({
				latlng: new google.maps.LatLng(marker_data.lat, marker_data.lng),
				map: map,
				html: 
				'<div class=\'wrapper-marker markets\' id=market_'+i+' data='+i+'>'+
					'<div class=\'circle\'>'+
						'<div class=\'wrapper-image\'>'+
							'<img src=\'./assets/images/ic_marker_flower.svg\'>'+
						'</div>'+
					'</div>'+
				'</div>'
			});
		}
	}
	for (let i = 0; i < marker_data_partners.length - 1; i++) {
		if (marker_data_partners[i] == marker_data) {
			var marker = new HTMLMapMarker({
				latlng: new google.maps.LatLng(marker_data.lat, marker_data.lng),
				map: map,
				html:
				'<div class=\'wrapper-marker partners\' id=partner_'+i+' data='+i+'>'+
					'<div class=\'circle\'>'+
						'<div class=\'wrapper-image\'>'+
							'<img src=\'./assets/images/ic_marker_flower.svg\'>'+
						'</div>'+
					'</div>'+
				'</div>'
			});
			var marker = new HTMLMapMarker({
				latlng: new google.maps.LatLng(marker_data.lat, marker_data.lng),
				map: map,
				html:
				'<div class=\'wrapper-marker idle\' id=partner_'+marker_data_partners.length+' data='+marker_data_partners.length+'>'+
					'<div class=\'circle\'>'+
						'<div class=\'wrapper-image\'>'+
							'<img src=\'./assets/images/ic_marker_flower.svg\'>'+
						'</div>'+
					'</div>'+
				'</div>'
			});
		}
	}
	return marker;
	
}

function showPopupCircleLinesPopup(object, mapObj, wrapperObject) {
	removeCirclePopUp();
	if (object.hasClass('markets')) {
		mapObj.setCenter(marker_data_markets[$('.wrapper-marker.markets').index($(object))])		
		$('.block-map-popup', '.block-map').addClass('markets');
		$('.wrapper-circle-popup', '.block-map').addClass('markets');
		$('.wrapper-circle-popup.markets', '.block-map').addClass('show-all');
	}
	else{
		mapObj.setCenter(marker_data_partners[$('.wrapper-marker.partners').index($(object))])
		
		$('.block-map-popup', '.block-map').addClass('partners');	
		$('.wrapper-circle-popup', '.block-map').addClass('partners');
		$('.wrapper-circle-popup.partners.partners', '.block-map').addClass('show-all');
	}
}


function removeCirclePopUp(){
	$('.wrapper-circle-popup').removeClass('show-all');
	$('.wrapper-circle-popup').removeClass('markets');
	$('.wrapper-circle-popup').removeClass('partners');
	$('.block-map-popup', '.block-map').removeClass('markets');	
	$('.block-map-popup', '.block-map').removeClass('partners');	
}

function disableMap(){
	map.setOptions({
		gestureHandling: 'none'
	})
}
function enableMap(){
	map.setOptions({
		gestureHandling: 'greedy'
	})
}