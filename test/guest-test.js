import chai from 'chai';
const expect = chai.expect;
import { testGuests , testRooms, testBookings} from '../test/test-data';
import Guest from '../src/Guest';

describe.only('The Guest', () => {

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
      expect(guest1.id).to.equal(3);
      expect(guest2.id).to.equal(7);
      expect(guest3.id).to.equal(13);
    })

    it.skip('should store the id as a number', () => {
      expect(guest1.id).to.be.a('number');
      expect(guest2.id).to.be.a('number');
      expect(guest3.id).to.be.a('number');
    })

    it.skip('should store a name', () => {
      expect(guest1.name).to.equal("Wendy Torrance");
      expect(guest2.name).to.equal("Delbert Grady");
      expect(guest3.name).to.equal("Dick Hallorann");
    })

    it.skip('should store the name as a string', () => {
      expect(guest1.name).to.be.a('string');
      expect(guest2.name).to.be.a('string');
      expect(guest3.name).to.be.a('string');
    })

    it.skip('should store past bookings', () => { // this property is not stored in the API
      expect(guest1.pastBookings).to.deep.equal([]);
      expect(guest2.pastBookings).to.deep.equal([]);
      expect(guest3.pastBookings).to.deep.equal([]);
    })

    it.skip('should store past bookings in an array', () => {
      expect(guest1.pastBookings).to.be.an('array');
      expect(guest2.pastBookings).to.be.an('array');
      expect(guest3.pastBookings).to.be.an('array');
    })

    it.skip('should store future bookings', () => {
      expect(guest1.futureBookings).to.deep.equal([]);
      expect(guest2.futureBookings).to.deep.equal([]);
      expect(guest3.futureBookings).to.deep.equal([]);
    })

    it.skip('should store future bookings in an array', () => {
      expect(guest1.futureBookings).to.be.an('array');
      expect(guest2.futureBookings).to.be.an('array');
      expect(guest3.futureBookings).to.be.an('array');
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
