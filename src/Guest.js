import { testBookings } from '../test/test-data';

class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.pastBookings = [];
    this.pendingBookings = [];
    this.futureBookings = [];
    this.totalSpent = 0;
  }

  requestBooking(date, room) {
    let newBookingObj = {};
    newBookingObj['date'] = date;
    newBookingObj['roomNumber'] = room;
    newBookingObj['userID'] = this.id;
    this.pendingBookings.push(newBookingObj);
  }

  viewAllBookings() { // think this is going to need a date parameter to push into two separate arrays
    // could refactor the Guest to have only one array to hold all bookings
    // all bookings will appear on pageload
    // the guest can make a selection on the dashboard to view past / future trips
    // this could be a DOM method that would then only display the data prior to / after the current date
    let allBookings = testBookings.forEach(booking => {
      // console.log('booking in question <>>>', booking.userID)
      let bookingUserID = booking.userID;
      if (this.id === bookingUserID) {
        this.pendingBookings.push(booking);
        console.log('pendingBookings <>>>', this.pendingBookings)
      }
    })
  }
}

export default Guest;
