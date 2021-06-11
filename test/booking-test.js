import chai from 'chai';
const expect = chai.expect;
import { testBookings } from '../test/test-data';

describe('The Booking', () => {

  let booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    booking1 = new Booking(testBookings[0]);
    booking2 = new Booking(testBookings[1]);
    booking3 = new Booking(testBookings[2]);
    booking4 = new Booking(testBookings[3]);
    booking5 = new Booking(testBookings[4]);
    booking6 = new Booking(testBookings[5]);
  })

  // Booking.constructor
  describe('Booking properties', () => {

    it.skip('should store an id', () => {

    })

    it.skip('should store the id as a string', () => {

    })

    it.skip('should store a user id', () => {

    })

    it.skip('should store the user id as a number', () => {

    })

    it.skip('should store a date', () => {

    })

    it.skip('should store the date as a string', () => {

    })

    it.skip('should store a room number', () => {

    })

    it.skip('should store the room number as a number', () => {

    })

    it.skip('should store room service charges', () => {

    })

    it.skip('should store room service charges in an array', () => {

    })

  })

})
