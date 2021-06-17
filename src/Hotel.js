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

    let availRooms = [];

    // what are we trying to do here?

    // we will receive a date inquiry from a guest
    // if a room IS NOT already booked on that day,
    // add that room to an array of objects to be returned

    // if a room IS already booked on that day
    // do not add that room object to the array

    // return the array


    // if (room is not booked) {
    //   add to availRooms array
    //
    // if (no rooms are available the selected day) {
    //   return a message to the guest
    // }

    // how can this be accomplished?

    let roomSearch = this.allBookings.filter(booking => {
      // compare dates booked to room numbers
      // console.log('booking <>>>', booking);
      let openRoom = this.allRooms.forEach(room => {
        if (date === booking.date && room.number === booking.roomNumber) {
          console.log('this room is booked on the selected date');
        } else if (!(date === booking.date && room.number === booking.roomNumber) && !availRooms.includes(room)){
          console.log('this room should be available');
          availRooms.push(room); // an array with 18 objects
          // only push unique rooms into the availRooms array

        // if (!date === booking.date && room.number === booking.roomNumber && !availRooms.includes(room)) {
        //   console.log('this room should be available');
        //   availRooms.push(room)
        }


        // }
        // console.log('room <>>>', room);
      })



    })

    console.log('availRooms <>>>', availRooms);
    return availRooms;


    // console.log('date <>>>', date);

    // let availRooms = this.allRooms;


    // let filteredBookings = this.allBookings.filter(booking => {

      // console.log('booking <>>>', booking);
      // console.log('booking.date <>>>', booking.date);
      // console.log('booking.roomNumber <>>>', booking.roomNumber);

      // if a room is booked on a particular date, remove it from availRooms

      // if date === booking.date
      // remove the room number of that booking from availRooms



      // if (!(date === booking.date)) {
        // console.log('💁‍♀️ the room is available that day!')
      // } else {
        // console.log('🙅‍♀️ already booked');
      // }

      // return availRooms once the dates booked have been evaluated

    // })

    // console.log('availRooms <>>>', availRooms);
    // return availRooms;
  }
}

export default Hotel;
