import chai from 'chai';
const expect = chai.expect;
import { testGuests , testRooms, testBookings} from '../test/test-data';
import Guest from '../src/Guest';

describe('The Guest', () => {

  let guest1, guest2, guest3, room1, room2, room3, booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    user1 = new Guest(testGuests[0]);
    user2 = new Guest(testGuests[1]);
    user3 = new Guest(testGuests[2]);
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

})
