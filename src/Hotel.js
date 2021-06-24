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

  viewAvailRooms(date, roomType) { // missing a ROOM for the booking 🤦‍♀️
    let availRooms = this.filterRoomsByType(roomType);

    console.log('filtered rooms <>>>', availRooms);

    // let availRooms = [];
    let roomSearch = this.allBookings.filter(booking => {
      let openRoom = availRooms.forEach(room => {
      // let openRoom = this.allRooms.forEach(room => {
      // let openRoom = this.allRooms.forEach(room => {
        // if (date === booking.date || room.number === booking.roomNumber) { // if the date requested is already booked  OR the room number requested is already booked =>
        if (date === booking.date && room.number === booking.roomNumber) { // if the date requested is already booked  AND the room number requested is already booked =>
          console.log(`Room no. ${room.number} is booked on the selected date`);
        };
        if (!availRooms.includes(room) && !(date === booking.date && room.number === booking.roomNumber)) { // if availRooms does NOT include the room  AND ( the date does not match the booking date  AND  the room.number does NOT match a booking for that date)
          console.log(`Room no. ${room.number} should be available`);
          // availRooms.push(room); // push the room into the array
        }
        // if (!(date === booking.date && room.number === booking.roomNumber) && !availRooms.includes(room)) {
        //   console.log(`Room no. ${room.number} should be available`);
        //   availRooms.push(room);
        // };
      })
      console.log('openRoom <>>>', openRoom);
    });

    return availRooms;
  }

}

export default Hotel;
