import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Guest from '../src/Guest';
import Room from '../src/Room';
import Booking from '../src/Booking';

import { testGuests, testRooms, testBookings } from '../test/test-data';

describe('The Hotel', () => {

  let hotel, guests, rooms, bookings;

  beforeEach(() => {
    hotel = new Hotel();
    guests = { customers: [ testGuests[0], testGuests[1], testGuests[2], testGuests[3] ] };
    rooms = { rooms: [ testRooms[0], testRooms[1], testRooms[2], testRooms[3] ] };
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
      hotel.createObjects(guests);

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

    // Hotel.filterRoomsByType
    it('should return all rooms by type', () => {
      hotel.createObjects(rooms);

      expect(hotel.filterRoomsByType(['single room'])).to.deep.equal([testRooms[0], testRooms[3]]);
    })

    it('should not return room types that have not been selected', () => {
      hotel.createObjects(rooms);

      expect(hotel.filterRoomsByType(['suite'])).to.deep.equal([testRooms[1], testRooms[2]]);
    })

    // Hotel.viewAvailRooms
    it('should return all rooms available on a selected date', () => {
      hotel.createObjects(bookings);
      hotel.createObjects(rooms);

      expect(hotel.viewAvailRooms('2021/12/31', 'suite')).to.deep.equal([testRooms[1], testRooms[2]]);
      expect(hotel.viewAvailRooms('2021/12/31', 'single room')).to.deep.equal([testRooms[0], testRooms[3]]);
    })

    it('should not return rooms that have been booked on the selected date', () => {
      hotel.createObjects(bookings);
      hotel.createObjects(rooms);

      expect(hotel.viewAvailRooms('2021/10/31', 'single room')).to.deep.equal([testRooms[3]]);
    })

    // Hotel.createBooking
    it('should create a new booking when a valid selection has been made', () => {
      hotel.createObjects(guests);
      hotel.createObjects(rooms);
      hotel.createObjects(bookings);

      hotel.allGuests[0].requestBooking('2021/12/31', 217);

      let obj = hotel.allGuests[0].pendingBookings[0];

      hotel.createBooking(obj);

      expect(hotel.allBookings[6]).to.deep.equal({
        id: undefined,
        userID: 3,
        date: "2021/12/31",
        roomNumber: 217,
        roomServiceCharges: []
      })
    })

    // Hotel.login
    it('should allow a user to log in', () => {
      hotel.createObjects(guests);
      hotel.login('customer13', 'overlook2021');

      expect(hotel.activeUser[0].id).to.equal(13);
    })
  })
})
