import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Guest from '../src/Guest';
import Room from '../src/Room';
import Booking from '../src/Booking';

import { testGuests, testRooms, testBookings } from '../test/test-data';

describe.only('The Hotel', () => {

  let hotel, guests, rooms, bookings;

  beforeEach(() => {
    hotel = new Hotel();

    // Object { customers: (50) […] }
    // customers: Array(50) [ {…}, {…}, {…}, … ]
    // rooms: Array(25) [ {…}, {…}, {…}, … ]
    // bookings: Array(1004) [ {…}, {…}, {…}, … ]
    // <prototype>: Object { … }
    // scripts.js:32

    guests = { customers: [ testGuests[0], testGuests[1], testGuests[2], testGuests[3] ] };
    rooms = { rooms: [ testRooms[0], testRooms[1], testRooms[2] ] };
    bookings = { bookings: [ testBookings[0], testBookings[1], testBookings[2], testBookings[3], testBookings[4], testBookings[5] ] };
  })

  describe('Hotel properties', () => {

    it('should initialize with an empty array to store Guest data', () => {
      expect(hotel.allGuests).to.deep.equal([]);
    })

    it('should store all Guest data in an array', () => {
      expect(hotel.allGuests).to.be.an('array');
    })

    it('should initialize with an empty array to store Room data', () => {
      expect(hotel.allRooms).to.deep.equal([]);
    })

    it('should store Room data in an array', () => {
      expect(hotel.allRooms).to.be.an('array');
    })

    it('should initialize with an empty array to store Booking data', () => {
      expect(hotel.allBookings).to.deep.equal([]);
    })

    it('should store all Booking data in an array', () => {
      expect(hotel.allBookings).to.be.an('array');
    })

  })

  describe('Hotel methods', () => {

    // Hotel.createObjects
    it('should create a new Guest object if an array of customers is passed through', () => {
    // this will happen after the API data has been returned
    // make this a method
    // class will initialize with empty array
    // i think the hotel will need to be instantiating each new guest / room / booking
    // api data comes in
    // hotel will review each piece of data
    // create a new instance of the appropriate object
    // add it to the all.whatever array
    // console.log('guests <>>>', guests);
      hotel.createObjects(guests);
      // guests will come in as data objects matching the API
      // will expect data pushed into hotel.allGuests to be a new instance of a guest

      expect(hotel.allGuests[0]).to.be.an.instanceof(Guest);
    })

    it('should create a new Room object if an array of rooms is passed through', () => {
      hotel.createObjects(rooms);

      expect(hotel.allRooms[1]).to.be.an.instanceof(Room);
    })

    it('should create a new Booking object if an array of bookings is passed through', () => {
      hotel.createObjects(bookings);

      expect(hotel.allBookings[3]).to.be.an.instanceof(Booking);
    })

    it.skip('should store all Booking data', () => {
      // expect(hotel.allBookings).to.deep.equal(bookings);
    })

    // Hotel.filterRoomsByType
    it.skip('should return all rooms by type', () => {
      // expect(hotel.filterRoomsByType(['single room'])).to.deep.equal([room1]);
      // expect(hotel.filterRoomsByType['residential suite']).to.deep.equal([room3]);
    })

    it.skip('should not return room types that have not been selected', () => {
      // expect(hotel.filterRoomsByType(['suite'])).to.deep.equal([room1, room2]);
    })

    // Hotel.viewAvailRooms
    it.skip('should return all rooms available on a selected date', () => {
      // expect(hotel.viewAvailRooms('2021/12/31')).to.deep.equal([room1, room2, room3]);
    })

    it.skip('should return a message if no rooms are available on the selected date', () => {
      // expect(hotel.viewAvailRooms('2021/10/31')).to.equal('We regret to say, there are no rooms available that evening');
    })

    it.skip('should not return rooms that have been booked on the selected date', () => {
      // expect(hotel.viewAvailRooms('2021/10/31')).to.deep.equal([]);
    })

    // Hotel.createBooking
    it.skip('should create a new booking when a valid selection has been made', () => {
      // console.log('hotel <>>>', hotel)
      // guest will request a new booking
      // hotel will review guest pendingBookings
      // if the room in the pendingBookings is available
      // create a new Booking object
      // if the room is not available
      // return a message to the guests and request they update their booking request
      // guest1.requestBooking('2020/12/31', 217);

      // hotel.createBooking();
      // expect() // the last item in hotel.allBookings to equal { new booking object }
    })

    it.skip('should not create a new booking if all fields are not completed', () => {
      // this might be a DOM method - don't test these
    })

    // it.skip('should allow a user to log in', () => {
    //
    // })

    // it.skip('should not grant log in access if credentials are invalid', () => {
    //
    // })
  })
})
