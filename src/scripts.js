// 🗃 File Imports
import Hotel from './Hotel.js';
import apiCalls from './api-calls.js';
import domUpdates from './dom-updates.js';

// 🌐 Global Variables
let hotel;
let guestData, roomData, bookingData;
let availRooms = [];

// 🔎 Query Selectors
const viewAvailRoomsBtn = document.getElementById('viewAvailRoomsBtn');
const requestedDate = document.getElementById('requestedDate');


// 🪤 Event Listeners
window.addEventListener('load', createHotel);
viewAvailRoomsBtn.addEventListener('click', loadAvailRooms);

// 🎬 Scripting Functions
function createHotel() {
  hotel = new Hotel();
  loadAPIData();
}

function loadAPIData() {
  apiCalls.getAllData()
  .then(allData => {
    guestData = allData[0];
    roomData = allData[1];
    bookingData = allData[2];
  })

  setTimeout(populateHotelData, 100);
}

function populateHotelData() {
  hotel.createObjects(guestData);
  hotel.createObjects(roomData);
  hotel.createObjects(bookingData);

  loadUserData();
}

function loadUserData() {
  const randomNum = Math.floor(Math.random() * hotel.allGuests.length);

  hotel.activeUser = hotel.allGuests[randomNum];
  hotel.activeUser.viewAllBookings(hotel.allBookings);
  hotel.activeUser.calcTotalSpent(hotel.allRooms);

  const spendings = hotel.activeUser.totalSpent;
  const name = hotel.activeUser.name;

  const sortedBookings = hotel.activeUser.allBookings.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  domUpdates.guestWelcomeMsg(name);
  domUpdates.guestAmtSpent(spendings);
  domUpdates.latestGuestBooking(sortedBookings);
  domUpdates.allGuestBookings(sortedBookings);
}

function loadRoomSelection() {
  if (singleRadio.checked) {
    return 'single';
  } else if (jrSuiteRadio.checked) {
    return 'junior suite';
  } else if (suiteRadio.checked) {
    return 'suite'
  } else {
    return 'residential suite';
  }
}

function loadAvailRooms() {
  let date = requestedDate.value;
  let room = loadRoomSelection();
  availRooms = hotel.viewAvailRooms(date, room);

  domUpdates.availableRooms(availRooms);
}

function sendBookingReq() {
  console.log("booking request to come <>>>");
}

