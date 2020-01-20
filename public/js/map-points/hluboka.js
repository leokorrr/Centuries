function initMap() {
        var castle = {lat: 49.051124, lng: 14.441594};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: castle
        });
        var marker = new google.maps.Marker({
          position: castle,
          map: map
        });
}

        
