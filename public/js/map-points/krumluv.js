function initMap() {
        var castle = {lat: 48.812956, lng: 14.315169};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: castle
        });
        var marker = new google.maps.Marker({
          position: castle,
          map: map
        });
}
 

        
