import Hotel from './Hotel.js';
import apiCalls from './api-calls.js';

// create new hotel
// Hotel.createObjects for guests, rooms, bookings
// hotel.activeUser.viewAllBookings
// hotel.activeUser.calcTotalSpent


// 🌐 Global Variables
let hotel;

let guestData, roomData, bookingData;



// window.addEventListener('load', loadAPIData);
window.addEventListener('load', createHotel);

function createHotel() {
  // console.log('hello?')
  hotel = new Hotel();
  loadAPIData();
  console.log('hotel <>>>', hotel);
}

function loadAPIData() {
  apiCalls.getAllData()
  .then(allData => {
    guestData = allData[0];
    roomData = allData[1];
    bookingData = allData[2];
  }
)
setTimeout(logPickleData, 5000);
}

function logPickleData() {
  console.log('pickle Guests <>>>', guestData);
  console.log('pickle Rooms <>>>', roomData);
  console.log('pickle Bookings <>>>', bookingData);
}
