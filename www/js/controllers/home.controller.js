angular.module('starter')
  .controller('homeCtrl', homeCtrl);


    function homeCtrl($scope, $cordovaGeolocation, $ionicPlatform, $location, $ionicHistory) {

      function pollCurrentLocation() {
        var options = {enableHighAccuracy: true, maximumAge:3000, timeout: 5000};
        $scope.autocompleteOptions = {
          componentRestrictions: {country: 'fr'}
        }
        $cordovaGeolocation.getCurrentPosition(options).then(function(position){

          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          console.log('polling lat long', position.coords.latitude, position.coords.longitude);
          var mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
          google.maps.event.addListenerOnce($scope.map, 'idle', function(){

            var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng,
            });

            var infoWindow = new google.maps.InfoWindow({
              content: "Here I am!"
            });

            google.maps.event.addListener(marker, 'click', function () {
              infoWindow.open($scope.map, marker);
            });

          });

        }, function(error){
          console.log("Could not get location");
        });
      }
      $ionicPlatform.ready(function() {
/*          $cordovaKeyboard.isVisible()
            .then(function (res) {
              console.log(res)
            })
            .catch(function (err) {
              console.log(err)
            })
          $scope.test = 2;*/

        $ionicPlatform.registerBackButtonAction(function (event) {
          if($location.path() === "/home"){
          }
          else {
            $ionicHistory.goBack();
          }
        }, 100);

        pollCurrentLocation();
        });

        console.log('home controller');
    }
