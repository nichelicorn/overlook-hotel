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
    
  }

}

export default domUpdates;
