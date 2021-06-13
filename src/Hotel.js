import Guest from '../src/Guest';
import Room from '../src/Room';

class Hotel {
  constructor() {
    this.allGuests = [];
    this.allRooms = [];
    this.allBookings = [];
  }

  createObjects(largeObject) {
    // if customers, create a Guest object
    // if rooms, create a Room object
    // if bookings, create a Booking object
    // console.log('largeObject <>>>', largeObject);
    let label = Object.keys(largeObject);
    // console.log('label <>>>', label);
    let largeArray = Object.values(largeObject); // an array of an array of objects
    // console.log('largeArray <>>>', largeArray);
    // iterate through the large array
    largeArray[0].forEach(element => {
      // console.log('label <>>>', label); // this is an array
      console.log('label[0] <>>>', label[0]);
      if (label[0] === 'customers') {
        // console.log('customer obj <>>>', element);
        // this is logging an array of objects
        let newObj = new Guest(element);
        this.allGuests.push(newObj);
      } else if (label[0] === 'rooms') {
        let newObj = new Room(element);
        this.allRooms.push(newObj);
      }
    })
    // for each element in the array, create a new object based on the object's original label;
  }

}

export default Hotel;
