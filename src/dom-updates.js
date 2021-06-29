console.log('hello DOM udpates!');



// Query Selectors
const allBookingsSec = document.getElementById('allBookingsSec');
const guestSpending = document.getElementById('guestSpending');
const welcomeMsg = document.getElementById('welcomeMsg');

const domUpdates = {

  guestWelcomeMsg(name) {
    let firstName = name;
    console.log(firstName);
  },

  guestAmtSpent(spendings) {
    // console.log('spendings DOM <>>>', spendings);
    // guestSpending.innerText = `Hi!`;
    guestSpending.innerText = `You have spent $${spendings} since your first stay at the Overlook.`
    // display hotel.activeUser.totalSpent
  },

}

export default domUpdates;
