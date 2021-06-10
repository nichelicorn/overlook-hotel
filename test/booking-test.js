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

})
