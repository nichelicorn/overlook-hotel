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
    let filteredRooms = this.allRooms.filter(room => room.roomType.includes(filters));

    return filteredRooms;
  }

  viewAvailRooms(date) {
    console.log('date <>>>', date);

    let availRooms = this.allRooms;


    let filteredBookings = this.allBookings.filter(booking => {

      // console.log('booking <>>>', booking);
      // console.log('booking.date <>>>', booking.date);
      // console.log('booking.roomNumber <>>>', booking.roomNumber);

      // if a room is booked on a particular date, remove it from availRooms

      // if date === booking.date
      // remove the room number of that booking from availRooms

      if (!(date === booking.date)) {
        console.log('💁‍♀️ the room is available that day!')
      } else {
        console.log('🙅‍♀️ already booked');
      }

      // return availRooms once the dates booked have been evaluated

    })

    // console.log('availRooms <>>>', availRooms);
    return availRooms;
  }
}

export default Hotel;
