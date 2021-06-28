import Hotel from './Hotel.js';
import apiCalls from './api-calls.js';

// create new hotel
// Hotel.createObjects for guests, rooms, bookings
// hotel.activeUser.viewAllBookings
// hotel.activeUser.calcTotalSpent


// 🌐 Global Variables
let hotel;

// let allGuests, allRooms, allBookings;



// window.addEventListener('load', loadAPIData);
window.addEventListener('load', createHotel);

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

function createHotel() {
  console.log('hello?')
  hotel = new Hotel();
  console.log('hotel <>>>', hotel);
}
