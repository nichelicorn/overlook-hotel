import Guest from '../src/Guest';
import Room from '../src/Room';
import Booking from '../src/Booking';

class Hotel {
  constructor() {
    this.allGuests = [];
    this.allRooms = [];
    this.allBookings = [];
    this.activeUser = null;
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
    let roomSearch = this.allBookings.filter(booking => {
      let openRoom = availRooms.forEach(room => {
        if (date === booking.date && room.number === booking.roomNumber) {
          // console.log(`Room no. ${room.number} is booked on the selected date`);
          availRooms.shift(room);
        }
        // if (!availRooms.includes(room) && !(date === booking.date && room.number === booking.roomNumber)) {
        //   console.log(`Room no. ${room.number} should be available`);
        // }
      })
    })
    return availRooms;
  }

  createBooking(bookingObj) {
    let newBooking = new Booking(bookingObj);
    this.allBookings.push(newBooking);
  }

  login(username, password) {

    // console.log('username <>>>', username);
    // console.log('password <>>>', password);
    // console.log('this.allGuests <>>>', this.allGuests);

    // find the guest whose id matches the number included in the username

    let id = Number(username.slice(8)); // this will work if the username starts with the string 'customer'
    // let id = Number(username.slice(-2)); // this will only work if the id is over two numbers;
    // console.log('id <>>>', id);

    this.activeUser = this.allGuests.filter(guest => {
      // console.log('guest id <>>>', guest.id);
      if (guest.id === id && guest.password === password) {
        console.log('hello active user');
        return guest;
      }

    });

    console.log('this.activeUser <>>>', this.activeUser);


  }
}

export default Hotel;
