// Query Selectors
const allBookingsSec = document.getElementById('allBookingsSec');
const availRoomsSection = document.getElementById('availRoomsSection');
const guestSpending = document.getElementById('guestSpending');
const latestStay = document.getElementById('latestStay');
const welcomeMsg = document.getElementById('welcomeMsg');
const roomSearchForm = document.getElementById('roomSearchForm');

// DOM Update Functions
const domUpdates = {

  guestWelcomeMsg(name) {
    const firstName = name.split(' ')[0];
    welcomeMsg.innerText = `Welcome back, ${firstName}!`;
  },

  guestAmtSpent(spendings) {
    guestSpending.innerText = `You have spent $${spendings.toFixed(2)} since your first stay at the Overlook.`
  },

  latestGuestBooking(bookings) {
    latestStay.innerHTML = "";
    const booking = bookings[0];

    latestStay.insertAdjacentHTML("beforeend", `
      <article class="latest-booking-card" id="${booking.id}">
        <p class="room-no">Room no. : ${booking.roomNumber}</p>
        <p class="room-no">Date : ${booking.date}</p>
        <img src="" alt="A posh hotel room">
        <p>Spent $${booking.nightlyRoomCharge} this visit</p>
      </article>
    `)
  },

  allGuestBookings(bookings) {
    allBookingsSec.innerHTML = "";

    bookings.map(booking => {
      allBookingsSec.insertAdjacentHTML("beforeend",
        `<article class="booking-card" id="${booking.id}">
          <p class="room-no">Room no. : ${booking.roomNumber}</p>
          <p class="room-no">Date : ${booking.date}</p>
          <img src="" alt="A posh hotel room">
          <p>Spent $${booking.nightlyRoomCharge} this visit</p>
        </article>`
      )
    })
  },

  availableRooms(rooms) {
    availRoomsSection.innerHTML = "";

    rooms.map(room => {
      availRoomsSection.insertAdjacentHTML("beforeend",
        // `<button class="booking-card" id=bookCard${room.number}>
        `<button class="booking-card" id="bookCard">
            <h2 class="room-no">Room no. : ${room.number}</h2>
            <p class="room-no">Room type : ${room.roomType}</p>
            <p>Bed Size : ${room.bedSize}</p>
            <p>No. Beds : ${room.numBeds}</p>
            <p>Bidet? ${true ? "yes" : "no"}</p>
            <p>Rate : $${room.costPerNight}</p>
        </button>`
      )
    });
  }

}

export default domUpdates;
