import Guest from '../src/Guest';
import Room from '../src/Room';
import Booking from '../src/Booking';

class Hotel {
  constructor() {
    this.allGuests = [];
    this.allRooms = [];
    this.allBookings = [];
  }

  createObjects(largeObject) {
    let label = Object.keys(largeObject);
    let largeArray = Object.values(largeObject);
    largeArray[0].forEach(element => {
      if (label[0] === 'customers') {
        let newObj = new Guest(element);
        this.allGuests.push(newObj);
      } else if (label[0] === 'rooms') {
        let newObj = new Room(element);
        this.allRooms.push(newObj);
      } else if (label[0] === 'bookings') {
        let newObj = new Booking(element);
        this.allBookings.push(newObj);
      }
    })
  }

  filterRoomsByType(filters) {
    let filterResults = this.allRooms.filter(room => room.roomType.includes(filters));

    return filterResults;
  }

  viewAvailRooms(date) {
    // iterate through all booking objects
    // if the booking date requested is found, remove that room number from available rooms for that date
    // if the booking date requested is not found, return the room object
    let availRooms = this.allRooms;
    // console.log('availRooms <>>>', availRooms);
    // console.log('date <>>>', date);
    let filterResults = this.allBookings.filter(booking => {
      // console.log('a booking <>>>', booking);
      // console.log('a booking.date <>>>', booking.date);
      let bookingDate = booking.date;
      if (booking.date === date) {
        console.log('🙅‍♀️ not available');
      } else {
        return availRooms;
      }
    })
    return availRooms;
    // console.log('filterResults <>>>', filterResults);
    // return filterResults;
  }

}

export default Hotel;
