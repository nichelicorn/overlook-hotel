// console.log('hello DOM udpates!');

// Query Selectors
const allBookingsSec = document.getElementById('allBookingsSec');
const guestSpending = document.getElementById('guestSpending');
const latestStay = document.getElementById('latestStay');
const welcomeMsg = document.getElementById('welcomeMsg');

const viewAvailRoomsBtn = document.getElementById('viewAvailRoomsBtn');
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

    // console.log("bookings[0] <>>>", bookings[0]);

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

    bookings.forEach(booking => {
      // console.log('booking <>>>', booking);

      allBookingsSec.insertAdjacentHTML("beforeend",
        `<article class="booking-card" id="${booking.id}">
          <p class="room-no">Room no. : ${booking.roomNumber}</p>
          <p class="room-no">Date : ${booking.date}</p>
          <img src="" alt="A posh hotel room">
          <p>Spent $${booking.nightlyRoomCharge} this visit</p>
        </article>`
      )
    })

  }

}

export default domUpdates;
