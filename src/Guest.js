import { testBookings, testRooms } from '../test/test-data';

class Guest {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.pastBookings = [];
    this.allBookings = [];
    this.pendingBookings = []; this.futureBookings = [];
    this.totalSpent = 0;
  }

  requestBooking(date, room) {
    let newBookingObj = {};
    newBookingObj['date'] = date;
    newBookingObj['roomNumber'] = room;
    newBookingObj['userID'] = this.id;
    this.pendingBookings.push(newBookingObj);

    return newBookingObj;
  }

  viewAllBookings() {
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
