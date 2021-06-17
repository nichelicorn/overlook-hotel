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
    let availRooms = this.allRooms;
    let filterResults = this.allBookings.filter(booking => {
      let bookingDate = booking.date;
      if (booking.date === date) {
        return 'We regret to say, there are no rooms available that evening';
      } else {
        return availRooms;
      }
    })

    return availRooms;
  }
}

export default Hotel;
