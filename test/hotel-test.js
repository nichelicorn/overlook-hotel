import chai from 'chai';
const expect = chai.expect;
import { testUsers , testRooms, testBookings} from '../test/test-data';

describe('The Hotel', () => {

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

  describe('Hotel methods', () => {

    // Hotel.filterRoomsByType
    it('should return all rooms by type', () => {

    })

    it('should not return room types that have not been selected', () => {

    })

    // Hotel.viewAvailRooms
    it('should return all rooms available on a selected date', () => {

    })

    it('should return a message if no rooms are available on the selected date', () => {

    })

    it('should not return rooms that have been booked on the selected date', () => {

    })

    it('should create a new booking when a valid selection has been made', () => {

    })

    it('should not create a new booking if all fields are not completed', () => {

    })

    it('should allow a user to log in', () => {

    })

    it('should not grant log in access if credentials are invalid', () => {
      
    })


  })

})
