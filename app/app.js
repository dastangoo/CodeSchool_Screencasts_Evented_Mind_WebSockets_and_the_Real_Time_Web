function updateCountElement(count) {
  // Find the count element
  var countElement = document.querySelector('#count');
  
  // Update the html with the new data
  countElement.innerHTML = count;
}

function connect() {
  var socket = io();  
  socket.on('count', function(count) {
    updateCountElement(count);
  });
}

// DOM is ready callback
function onStartup() {
  
  // Find the increment counter link
  var link = document.querySelector('#incrementCounterLink');
  
  // Add an event listener for the click event
  link.addEventListener('click', updateCountElement);

  // Connect to the ws server
  connect();
}

document.addEventListener('DOMContentLoaded', onStartup);
