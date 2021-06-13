import chai from 'chai';
const expect = chai.expect;

import Guest from '../src/Guest';
import Room from '../src/Room';
import Booking from '../src/Booking';
import Hotel from '../src/Booking';
import { testGuests, testUsers , testRooms, testBookings } from '../test/test-data';

describe.skip('The Hotel', () => {

  // let guest1, guest2, guest3, guest4, guests, room1, room2, room3, rooms,  booking1, booking2, booking3, booking4, booking5, booking6, bookings, hotel;

  beforeEach(() => {
    // guest1 = new Guest(testGuests[0]);
    // guest2 = new Guest(testGuests[1]);
    // guest3 = new Guest(testGuests[2]);
    // guest4 = new Guest(testGuests[3]);
    // guests = [ guest1, guest2, guest3, guest4 ];
    // room1 = new Room(testRooms[0]);
    // room2 = new Room(testRooms[1]);
    // room3 = new Room(testRooms[2]);
    // rooms = [ room1, room2, room3 ];
    // booking1 = new Booking(testBookings[0]);
    // booking2 = new Booking(testBookings[1]);
    // booking3 = new Booking(testBookings[2]);
    // booking4 = new Booking(testBookings[3]);
    // booking5 = new Booking(testBookings[4]);
    // booking6 = new Booking(testBookings[5]);
    // bookings = [ booking1, booking1, booking3, booking4, booking5, booking6 ];
    // hotel = new Hotel(guests, rooms, bookings);


  })

  describe('Hotel properties', () => {
    // it('should store all Guest data', () => {
    // this will happen after the API data has been returned
    // make this a method
    // class will initialize with empty array
      // console.log('hotel.allGuests <>>>', hotel.allGuests);
      // console.log('guests <>>>', guests)
      // i think the hotel will need to be instantiating each new guest / room / booking
      // api data comes in
      // hotel will review each piece of data
      // create a new instance of the appropriate object
      // add it to the all.whatever array


      // expect(hotel.allGuests).to.deep.equal(guests);
    // })

    it.skip('should store all Guest data in an array', () => {
      expect(hotel.allGuests).to.be.an('array');
    })

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
      guest1.requestBooking('2020/12/31', 217);

      hotel.createBooking();
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
