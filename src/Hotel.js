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
    // let availRooms = this.allRooms;
    let availRooms = [];
    let filterResults = this.allBookings.filter(booking => {
      // let bookingDate = booking.date;
      if (booking.date === date) {
        console.log('booking date <>>>', bookingDate)
        // console.log('if stmt availRooms <>>>', availRooms);

        // return 'We regret to say, there are no rooms available that evening';
      } else {
        console.log('does the if stmt even work? 🤨')
        return availRooms;
      }
    })

    console.log('availRooms <>>>', availRooms);
    return availRooms;
  }
}

export default Hotel;
