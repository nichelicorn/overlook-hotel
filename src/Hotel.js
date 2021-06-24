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

  viewAvailRooms(date, roomType) {
    let availRooms = this.filterRoomsByType(roomType);
    console.log('filtered rooms <>>>', availRooms);
    // let availRooms = [];
    let roomSearch = this.allBookings.filter(booking => {
      let openRoom = availRooms.forEach(room => {
      // let openRoom = this.allRooms.forEach(room => {
        if (date === booking.date && room.number === booking.roomNumber) {
          console.log(`Room no. ${room.number} is booked on the selected date`);
          // if the room is found to have a booking, remove it from the availRooms array
          availRooms.shift(room);
          // delete room from availRooms
        };
        if (!availRooms.includes(room) && !(date === booking.date && room.number === booking.roomNumber)) {
          console.log(`Room no. ${room.number} should be available`);
          // availRooms.push(room); // push the room into the array
        }
      })
      console.log('openRoom <>>>', openRoom);
    });
    console.log('availRooms after the ifs <>>>', availRooms); // if the room is found to have a booking, remove it from the availRooms array
    return availRooms;
  }

}

export default Hotel;
