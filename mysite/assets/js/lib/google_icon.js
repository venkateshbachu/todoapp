// JavaScript Document
// Google Map Custom Marker Maker 2011

// Please include the following credit in your code



// Sample custom marker code created with Google Map Custom Marker Maker

// http://www.powerhut.co.uk/googlemaps/custom_markers.php



var point = new google.maps.LatLng(50.875311, 0.351563);



var myMapOptions = {

  zoom: 5,

  center: point,

  mapTypeId: google.maps.MapTypeId.TERRAIN

};



var map = new google.maps.Map(document.getElementById("map"),myMapOptions);



var image = new google.maps.MarkerImage(

  'assets/img/marker-images/image.png',

  new google.maps.Size(60,52),

  new google.maps.Point(0,0),

  new google.maps.Point(30,52)

);



var shadow = new google.maps.MarkerImage(

  'assets/img/marker-images/shadow.png',

  new google.maps.Size(90,52),

  new google.maps.Point(0,0),

  new google.maps.Point(30,52)

);



var shape = {

  coord: [59,0,59,1,59,2,59,3,59,4,59,5,59,6,59,7,59,8,59,9,59,10,59,11,59,12,59,13,59,14,59,15,59,16,59,17,59,18,59,19,59,20,59,21,59,22,59,23,59,24,59,25,59,26,59,27,59,28,59,29,59,30,59,31,59,32,59,33,59,34,59,35,59,36,39,37,38,38,38,39,37,40,37,41,36,42,36,43,35,44,34,45,34,46,33,47,33,48,32,49,31,50,31,51,30,51,29,50,28,49,28,48,27,47,27,46,26,45,26,44,25,43,24,42,24,41,23,40,23,39,22,38,21,37,0,36,0,35,0,34,0,33,0,32,0,31,0,30,0,29,0,28,0,27,0,26,0,25,0,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,0,16,0,15,0,14,0,13,0,12,0,11,0,10,0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,0,1,0,0,59,0],

  type: 'poly'

};



var marker = new google.maps.Marker({

  draggable: true,

  raiseOnDrag: false,

  icon: image,

  shadow: shadow,

  shape: shape,

  map: map,

  position: point

});