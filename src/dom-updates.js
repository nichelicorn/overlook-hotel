console.log('hello DOM udpates!');



// Query Selectors
const allBookingsSec = document.getElementById('allBookingsSec');
const guestSpending = document.getElementById('guestSpending');
const welcomeMsg = document.getElementById('welcomeMsg');

const domUpdates = {

  guestWelcomeMsg(name) {
    let firstName = name.split(' ')[0];
    // console.log(firstName);
    welcomeMsg.innerText = `Welcome to the Overlook, ${firstName}.`;
  },

  guestAmtSpent(spendings) {
    // console.log('spendings DOM <>>>', spendings);
    // guestSpending.innerText = `Hi!`;
    guestSpending.innerText = `You have spent $${spendings.toFixed(2)} since your first stay at the Overlook.`
    // display hotel.activeUser.totalSpent
  },

}

export default domUpdates;
