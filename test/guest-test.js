import chai from 'chai';
const expect = chai.expect;
import { testGuests , testRooms, testBookings} from '../test/test-data';
import Guest from '../src/Guest';

describe('The Guest', () => {

  let guest1, guest2, guest3, room1, room2, room3, booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    guest1 = new Guest(testGuests[0]);
    guest2 = new Guest(testGuests[1]);
    guest3 = new Guest(testGuests[2]);
    room1 = testRooms[0];
    room2 = testRooms[1];
    room3 = testRooms[2];
    booking1 = testBookings[0];
    booking2 = testBookings[1];
    booking3 = testBookings[2];
    booking4 = testBookings[3];
    booking5 = testBookings[4];
    booking6 = testBookings[5];
  })

  // 🧪 Guest.constructor() tests
  describe('Guest properties', () => {

    it.skip('should store an id', () => {
      expect()
    })

    it.skip('should store the id as a number', () => {

    })

    it.skip('should store a name', () => {

    })

    it.skip('should store the name as a string', () => {

    })

    it.skip('should store past bookings', () => {

    })

    it.skip('should store past bookings in an array', () => {

    })

    it.skip('should store future bookings', () => {

    })

    it.skip('should store future bookings in an array', () => {

    })

    it.skip('should store the total amount spent', () => {

    })

    it.skip('should store the total spent as a number', () => {

    })

    // it.skip('should store a user name', () => { // this is part of sprint 3; not included in the API data
    //
    // })

    // it.skip('should store the user name as a string', () => {
    //
    // })

    // it.skip('should store a password', () => { // this is part of sprint 3; not included in the API data
    //
    // })

    // it.skip('should store the password as a string', () => {
    //
    // })

  describe('Guest methods', () => {

    // Guest.calcTotalSpent
    it.skip('should return the total spent at the hotel', () => {

    })

    it.skip('should return the total spent as a number', () => {

    })

    // Guest.viewAllBookings
    it.skip('should return all bookings', () => {

    })

    it.skip('should return bookings as an array of objects', () => {

    })

    // Guest.requestBooking
    it.skip('should be able to request a new booking', () => {

    })

    it.skip('should add the requested booking to future bookings', () => {

    })

  })


  })
})
