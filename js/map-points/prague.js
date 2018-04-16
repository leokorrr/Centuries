function initMap() {
        var castle = {lat: 50.090216, lng: 14.399579};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: castle
        });
        var marker = new google.maps.Marker({
          position: castle,
          map: map
        });
}
