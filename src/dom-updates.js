console.log('hello DOM udpates!');



// Query Selectors
const allBookingsSec = document.getElementById('allBookingsSec');
const guestSpending = document.getElementById('guestSpending');
const welcomeMsg = document.getElementById('welcomeMsg');

const domUpdates = {

  guestAmtSpent(spendings) {
    console.log('spendings DOM <>>>', spendings);
    guestSpending.innerText = `Hi!`;
    // display hotel.activeUser.totalSpent
  },

}

export default domUpdates;
