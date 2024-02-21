
function initMap() {
  // Initialize the map

    // Set the componentRestrictions to restrict results to Ghana
const options = {
  componentRestrictions: { country: 'GH' } // 'GH' is the ISO 3166-1 alpha-2 code for Ghana
};

  // Initialize Autocomplete for Pick Up Location
  const pickupInput = document.getElementById('pickupLocation');
  const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput, options);

  // Initialize Autocomplete for Drop Location
  const dropInput = document.getElementById('dropoffLocation');
  const dropAutocomplete = new google.maps.places.Autocomplete(dropInput, options);

  
}



initMap() 