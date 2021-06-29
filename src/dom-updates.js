console.log('hello DOM udpates!');



// Query Selectors
const allBookingsSec = document.getElementById('allBookingsSec');
const guestSpending = document.getElementById('guestSpending');
const welcomeMsg = document.getElementById('welcomeMsg');

const domUpdates = {

  guestWelcomeMsg(name) {
    const firstName = name.split(' ')[0];
    welcomeMsg.innerText = `Welcome to the Overlook, ${firstName}.`;
  },

  guestAmtSpent(spendings) {
    guestSpending.innerText = `You have spent $${spendings.toFixed(2)} since your first stay at the Overlook.`
  },

  guestBookings(bookings) {
    allBookingsSec.innerHTML = "";

    bookings.forEach(booking => {
      console.log('booking <>>>', booking);
      allBookingsSec.insertAdjacentHTML("beforeend",
        `<article class="booking">
          <p>${booking.roomNumber}</p>
          <img src="https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="A posh hotel room">
          <p>$666.66</p>
        </article>`
      )
    })

  }

}

export default domUpdates;
