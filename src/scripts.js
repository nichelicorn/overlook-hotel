// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './api-calls.js'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

// 🌐 Global Variables

let allGuests, allRooms, allBookings;



window.addEventListener('load', loadAPIData);

function loadAPIData() {
  apiCalls.getGuestData()
    .then(allGuestData => {
      allGuests = allGuestData
      console.log('hello all guests!')
      console.log(allGuests)
    })
  apiCalls.getRoomData()
    .then(allRoomData => {
      console.log('let\'s check out these rooms! 👇')
      console.log(allRoomData)
    })
  apiCalls.getBookingData()
      .then(allBookingData => {
        console.log('so many bookings! 👇')
        console.log(allBookingData)
      })
  // console.log('allData 👇')
  // apiCalls.getAllData()
}
