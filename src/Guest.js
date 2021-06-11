import { testBookings, testRooms } from '../test/test-data';
// refactor these methods to expect the API data when connected to the DOM
// remove these when everything is connected in the scripts file


class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.pastBookings = [];
    this.allBookings = [];
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
    // this.allBookings = testBookings.filter(booking => {
    //   // console.log('booking in question <>>>', booking.userID)
    //   // let bookingUserID = booking.userID;
    //   // if (this.id === booking.userID) {
    //   //   this.allBookings.push(booking);
    //   //   // console.log('allBookings <>>>', this.allBookings)
    //   // }
    //   console.log('this.allBookings <>>>', this.allBookings);
    //   return this.allBookings;
    // })
    this.allBookings = testBookings.filter(booking => {
      return this.id === booking.userID;
    })
  }

  calcTotalSpent() {
    // console.log('this.allBookings <>>>', this.allBookings);
    // add the costPerNight to the existing this.allBookings objects
    let updateBooking = testRooms.map(room => { // iterate through the rooms
    // want the room roomNumber
    // want the costPerNight
      // console.log('if? <>>>', room.userID === this.id); // ah! i'm looking at the room! i think i'm looking for the booking
      let objAdjuster = this.allBookings.map(booking => {
      // now i am inside my bookings, and i want to add the room cost to the existing object
      // if the room number is found in the booking object
      // add a new property to the object with the room cost per night
      if (booking.userID === this.id && booking.roomNumber === room.number) {
          // console.log('conditional <>>>', booking.roomNumber === room.number); // two `trues`
          // Number.parseFloat(x).toFixed(2)
          // booking['nightlyRoomCharge'] = Number.parseInt(room.costPerNight.toFixed(2));
          booking['nightlyRoomCharge'] = room.costPerNight; // fix the rounding errors in the DOM
          // booking['nightlyRoomCharge'] = parseInt(room.costPerNight.toFixed(2));
        }
        return this.allBookings;
      })
    })
    // console.log('this.allBookings <>>>', this.allBookings);
    // now i can do my calculation!
    let accumulatedSpending = this.allBookings.reduce((acc, booking) => {
      let roomCharge =  booking.nightlyRoomCharge;
      // add var for roomServiceCharges here
      // console.log('acc + roomCharge <>>>', acc + roomCharge);
      return acc + roomCharge;
    }, 0)
    // console.log('accumulatedSpending <>>>', accumulatedSpending);
    this.totalSpent = accumulatedSpending;
  }
}

export default Guest;
