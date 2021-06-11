import { testBookings, testRooms } from '../test/test-data';
// refactor these methods to expect the API data when connected to the DOM
// remove these when everything is connected in the scripts file
// reassign testBookings / testRooms to naming that will be used for the API data

class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.pastBookings = [];
    this.allBookings = [];
    this.pendingBookings = []; // these will be submitted for approval to the Hotel; hotel will approve request if the room is available and create a new Booking object
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

  viewAllBookings() {
    // all bookings will appear on pageload
    // the guest can make a selection on the dashboard to view past / future trips
    // this could be a DOM method that would then only display the data prior to / after the current date
    this.allBookings = testBookings.filter(booking => {
      return this.id === booking.userID;
    })
  }

  calcTotalSpent() {
    let updateBooking = testRooms.map(room => {
      let objAdjuster = this.allBookings.map(booking => {
      if (booking.userID === this.id && booking.roomNumber === room.number) {
        booking['nightlyRoomCharge'] = room.costPerNight; // fix the rounding errors in the DOM
        }
        return this.allBookings;
      })
    })
    let accumulatedSpending = this.allBookings.reduce((acc, booking) => {
      let roomCharge =  booking.nightlyRoomCharge;
      return acc + roomCharge;
    }, 0)
    this.totalSpent = accumulatedSpending;
  }
}

export default Guest;
