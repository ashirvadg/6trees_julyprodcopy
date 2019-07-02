function initMap() {

    var center = {lat: 17.423355, lng: 78.477156};
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: center
        });
    
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < storesDataSet.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(storesDataSet[count][4], storesDataSet[count][5]),
            map: map,
            title: storesDataSet[count][0]
        });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
            infowindow.setContent('<h1><b>6trees</b></h1><br><h4>' + storesDataSet[count][0] + '</h4><br><h6>' + storesDataSet[count][1] + '</h6><br>Conact Person: ' + storesDataSet[count][2] + ', Phone: ' + storesDataSet[count][3] + '.<br><br><a class="btn btn-primary btn-sm" href="' + storesDataSet[count][6] + '"'+ '>Get Directions</a>', storesDataSet[count][4] , storesDataSet[count][5]);
            infowindow.open(map, marker);
            }
        })(marker, count));
        }
    }