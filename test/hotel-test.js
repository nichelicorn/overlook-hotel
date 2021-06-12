import chai from 'chai';
const expect = chai.expect;

import Guest from '../src/Guest';
import Room from '../src/Room';
import Booking from '../src/Booking';
import Hotel from '../src/Booking';
import { testGuests, testUsers , testRooms, testBookings } from '../test/test-data';

describe.only('The Hotel', () => {

  let guest1, guest2, guest3, guest4, guests, room1, room2, room3, booking1, booking2, booking3, booking4, booking5, booking6, hotel;

  beforeEach(() => {
    guest1 = new Guest(testGuests[0].id, testGuests[0].name);
    guest2 = new Guest(testGuests[1].id, testGuests[1].name);
    guest3 = new Guest(testGuests[2].id, testGuests[2].name);
    guest4 = new Guest(testGuests[3].id, testGuests[3].name);
    guests = [ guest1, guest2, guest3 ];
    room1 = new Room(testRooms[0].number, testRooms[0].roomType, testRooms[0].bidet, testRooms[0].bedSize, testRooms[0].numBeds, testRooms[0].costPerNight);
    room2 = new Room(testRooms[1].number, testRooms[1].roomType, testRooms[1].bidet, testRooms[1].bedSize, testRooms[1].numBeds, testRooms[1].costPerNight);
    room3 = new Room(testRooms[2].number, testRooms[2].roomType, testRooms[2].bidet, testRooms[2].bedSize, testRooms[2].numBeds, testRooms[2].costPerNight);
    rooms = [room1, room2, room3];
    booking1 = new Booking(testBookings[0].userID, testBookings[0].date, testBookings[0].roomNumber);
    booking2 = new Booking(testBookings[1].userID, testBookings[1].date, testBookings[1].roomNumber);
    booking3 = new Booking(testBookings[2].userID, testBookings[2].date, testBookings[2].roomNumber);
    booking4 = new Booking(testBookings[3].userID, testBookings[3].date, testBookings[3].roomNumber);
    booking5 = new Booking(testBookings[4].userID, testBookings[4].date, testBookings[4].roomNumber);
    booking6 = new Booking(testBookings[5].userID, testBookings[5].date, testBookings[5].roomNumber);
    bookings = [booking1, booking1, booking3, booking4, booking5, booking6 ];
    hotel = new Hotel(rooms, bookings, guests);
  })

  describe('Hotel properties', () => {
    it.skip('should store all Room data', () => {
      expect(hotel.allRooms).to.deep.equal(rooms);
    })

    it.skip('should store Room data in an array', () => {
      expect(hotel.allRooms).to.be.an('array');
    })

    it.skip('should store all Booking data', () => {
      expect(hotel.allBookings).to.deep.equal(bookings);
    })

    it.skip('should store all Booking data in an array', () => {
      expect(hotel.allBookings).to.be.an('array');
    })

    it.skip('should store all Guest data', () => {
      expect(hotel.allGuests).to.deep.equal(guests);
    })

    it.skip('should store all Guest data in an array', () => {
      expect(hotel.allGuests).to.be.an('array');
    })
  })

  describe('Hotel methods', () => {

    // Hotel.filterRoomsByType
    it.skip('should return all rooms by type', () => {
      expect(hotel.filterRoomsByType(['single room'])).to.deep.equal([room1]);
      expect(hotel.filterRoomsByType['residential suite']).to.deep.equal([room3]);
    })

    it.skip('should not return room types that have not been selected', () => {
      expect(hotel.filterRoomsByType(['suite'])).to.deep.equal([room1, room2]);
    })

    // Hotel.viewAvailRooms
    it.skip('should return all rooms available on a selected date', () => {
      expect(hotel.viewAvailRooms('2021/12/31')).to.deep.equal([room1, room2, room3]);
    })

    it.skip('should return a message if no rooms are available on the selected date', () => {
      expect(hotel.viewAvailRooms('2021/10/31')).to.equal('We regret to say, there are no rooms available that evening');
    })

    it.skip('should not return rooms that have been booked on the selected date', () => {
      expect(hotel.viewAvailRooms('2021/10/31')).to.deep.equal([]);
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
    })

    it.skip('should not create a new booking if all fields are not completed', () => {
      // this might be a DOM method - don't test these
    })

    it.skip('should allow a user to log in', () => {

    })

    it.skip('should not grant log in access if credentials are invalid', () => {

    })


  })

})
