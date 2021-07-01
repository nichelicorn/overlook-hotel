import Hotel from './Hotel.js';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';

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
  // console.log('hotel <>>>', hotel);
}

function loadAPIData() {
  apiCalls.getAllData()
  .then(allData => {
    guestData = allData[0]; // need to build hotel data in these lines
    // hotel.allGuests = hotel.createObjects(allData[0]);
    roomData = allData[1];
    bookingData = allData[2];

  })
  // setTimeout(logPickleData, 100);
  setTimeout(populateHotelData, 100);
}

function logPickleData() {
  // console.log('pickle Guests <>>>', guestData);
  // console.log('pickle Rooms <>>>', roomData);
  // console.log('pickle Bookings <>>>', bookingData);
  // console.log('pickle guestData <>>>', guestData);
  hotel.createObjects(guestData);
  hotel.createObjects(roomData);
  hotel.createObjects(bookingData);
  // console.log('pickled hotel <>>>', hotel);
}

function populateHotelData() {
  hotel.createObjects(guestData);
  hotel.createObjects(roomData);
  hotel.createObjects(bookingData);
  // console.log('pickled hotel <>>>', hotel);

  loadUserData();
}

function loadUserData() {
  const randomNum = Math.floor(Math.random() * hotel.allGuests.length);

  hotel.activeUser = hotel.allGuests[randomNum];
  hotel.activeUser.viewAllBookings(hotel.allBookings);
  hotel.activeUser.calcTotalSpent(hotel.allRooms);
  // console.log('hotel <>>>', hotel);

  const spendings = hotel.activeUser.totalSpent;
  const name = hotel.activeUser.name;
  // const bookings = hotel.activeUser.allBookings;

  // console.log(' bookings <>>>', bookings);

  const sortedBookings = hotel.activeUser.allBookings.sort((a, b) => {
    // console.log('a.date <>>>', a.date);
    // console.log('b.date <>>>', b.date);
    return new Date(a.date) - new Date(b.date);
  });

  // console.log('sorted bookings <>>>', sortedBookings);

  domUpdates.guestWelcomeMsg(name);
  domUpdates.guestAmtSpent(spendings);
  domUpdates.latestGuestBooking(sortedBookings);
  domUpdates.allGuestBookings(sortedBookings);
}
