import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';
import { testBookings } from '../test/test-data';

describe.only('The Booking', () => {

  let booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    booking1 = new Booking(testBookings[0]);
    booking2 = new Booking(testBookings[1]);
    booking3 = new Booking(testBookings[2]);
    booking4 = new Booking(testBookings[3]);
    booking5 = new Booking(testBookings[4]);
    booking6 = new Booking(testBookings[5]);
    // booking1 = new Booking(testBookings[0].userID, testBookings[0].date, testBookings[0].roomNumber);
    // booking2 = new Booking(testBookings[1].userID, testBookings[1].date, testBookings[1].roomNumber);
    // booking3 = new Booking(testBookings[2].userID, testBookings[2].date, testBookings[2].roomNumber);
    // booking4 = new Booking(testBookings[3].userID, testBookings[3].date, testBookings[3].roomNumber);
    // booking5 = new Booking(testBookings[4].userID, testBookings[4].date, testBookings[4].roomNumber);
    // booking6 = new Booking(testBookings[5].userID, testBookings[5].date, testBookings[5].roomNumber);
  })

  // Booking.constructor
  describe('Booking properties', () => {

    it('should store an id', () => { // this string is generated by the API
      expect(booking2.id).to.equal('pickle234');
      expect(booking4.id).to.equal('pickle456');
      expect(booking6.id).to.equal('pickle678');
    })

    it('should store the id as a string', () => {
      expect(booking1.id).to.be.a('string');
      expect(booking3.id).to.be.a('string');
      expect(booking5.id).to.be.a('string');
    })

    it('should store a user id', () => {
      expect(booking1.userID).to.equal(3);
      expect(booking3.userID).to.equal(7);
      expect(booking5.userID).to.equal(13);
    })

    it('should store the user id as a number', () => {
      expect(booking1.userID).to.be.a('number');
      expect(booking3.userID).to.be.a('number');
      expect(booking5.userID).to.be.a('number');
    })

    it('should store a date', () => {
      expect(booking2.date).to.equal("2021/10/31");
      expect(booking4.date).to.equal("2021/10/31");
      expect(booking6.date).to.equal("2021/10/31");
    })

    it('should store the date as a string', () => {
      expect(booking1.date).to.be.a('string');
      expect(booking3.date).to.be.a('string');
      expect(booking5.date).to.be.a('string');
    })

    it('should store a room number', () => {
      expect(booking2.roomNumber).to.equal(217);
      expect(booking4.roomNumber).to.equal(42);
      expect(booking6.roomNumber).to.equal(237);
    })

    it('should store the room number as a number', () => {
      expect(booking1.roomNumber).to.be.a('number');
      expect(booking3.roomNumber).to.be.a('number');
      expect(booking5.roomNumber).to.be.a('number');
    })

    it('should store room service charges', () => {
      expect(booking2.roomServiceCharges).to.deep.equal([]);
      expect(booking4.roomServiceCharges).to.deep.equal([]);
      expect(booking6.roomServiceCharges).to.deep.equal([]);
    })

    it('should store room service charges in an array', () => {
      expect(booking1.roomServiceCharges).to.be.an('array');
      expect(booking3.roomServiceCharges).to.be.an('array');
      expect(booking5.roomServiceCharges).to.be.an('array');
    })
  })
})
