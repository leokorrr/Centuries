function initMap() {
        var castle = {lat: 48.801556, lng: 16.805744};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: castle
        });
        var marker = new google.maps.Marker({
          position: castle,
          map: map
        });
}
 
