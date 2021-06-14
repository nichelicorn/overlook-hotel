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

  filterRoomsByType(rooms) {
    return this.allRooms.filter(room => {
      // console.log('filter results <>>>', room.type.includes(rooms)); // returns a boolean
      // console.log('room.type.includes(rooms) <>>>', room.type.includes(rooms)); // returns a boolean
      // console.log('filter results <>>>',       room.type.includes(rooms) ? room : 'That room is not available');
      return room.type.includes(rooms) ? room : 'That room is not available';
      // return room.type.includes(rooms);
    })
    console.log('filteredRooms <>>>', filteredRooms);
    // return filteredRooms;
  }

}

export default Hotel;
