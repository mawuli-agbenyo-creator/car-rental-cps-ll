function getDistance(pickupLocation, dropoffLocation) {
    // Ensure that the Google Maps JavaScript API is loaded
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('Google Maps API not loaded.');
        return null;
    }

    // Create instances of the LatLng class for pickup and dropoff locations
    var pickupLatLng = new google.maps.LatLng(pickupLocation.lat, pickupLocation.lng);
    var dropoffLatLng = new google.maps.LatLng(dropoffLocation.lat, dropoffLocation.lng);

    // Calculate the distance using the geometry library
    var distance = google.maps.geometry.spherical.computeDistanceBetween(pickupLatLng, dropoffLatLng);

    // Convert distance from meters to kilometers or miles as needed
    // For example, converting to kilometers
    var distanceInKm = distance / 1000;

    console.log(distanceInKm);
    return distanceInKm;
}
