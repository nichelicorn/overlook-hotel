// // This is the JavaScript entry file - your code begins here
// // Do not delete or rename this file ********
//
// // An example of how you tell webpack to use a CSS (SCSS) file
// import './css/base.scss';
// import apiCalls from './api-calls.js'
//
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


// 🌐 Global Variables

let allGuests, allRooms, allBookings;



window.addEventListener('load', loadAPIData);

function loadAPIData() {
  apiCalls.getAllData()
    .then(allData => {
      allGuests = allData[0];
      allRooms = allData[1];
      allBookings = allData[2];
    }
  )
  setTimeout(logPickleData, 5000);
}

function logPickleData() {
  console.log('pickle Guests <>>>', allGuests);
  console.log('pickle Rooms <>>>', allRooms);
  console.log('pickle Bookings <>>>', allBookings);
}
