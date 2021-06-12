import chai from 'chai';
const expect = chai.expect;
import { testUsers , testRooms, testBookings} from '../test/test-data';

describe('The Hotel', () => {

  let guest1, guest2, guest3, room1, room2, room3, booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    guest1 = new Guest(testGuests[0].id, testGuests[0].name);
    guest2 = new Guest(testGuests[1].id, testGuests[1].name);
    guest3 = new Guest(testGuests[2].id, testGuests[2].name);
    guest4 = new Guest(testGuests[3].id, testGuests[3].name);
    room1 = new Room(testRooms[0].number, testRooms[0].roomType, testRooms[0].bidet, testRooms[0].bedSize, testRooms[0].numBeds, testRooms[0].costPerNight);
    room2 = new Room(testRooms[1].number, testRooms[1].roomType, testRooms[1].bidet, testRooms[1].bedSize, testRooms[1].numBeds, testRooms[1].costPerNight);
    room3 = new Room(testRooms[2].number, testRooms[2].roomType, testRooms[2].bidet, testRooms[2].bedSize, testRooms[2].numBeds, testRooms[2].costPerNight);
    booking1 = new Booking(testBookings[0].userID, testBookings[0].date, testBookings[0].roomNumber);
    booking2 = new Booking(testBookings[1].userID, testBookings[1].date, testBookings[1].roomNumber);
    booking3 = new Booking(testBookings[2].userID, testBookings[2].date, testBookings[2].roomNumber);
    booking4 = new Booking(testBookings[3].userID, testBookings[3].date, testBookings[3].roomNumber);
    booking5 = new Booking(testBookings[4].userID, testBookings[4].date, testBookings[4].roomNumber);
    booking6 = new Booking(testBookings[5].userID, testBookings[5].date, testBookings[5].roomNumber);
  })

  describe('Hotel methods', () => {

    // Hotel.filterRoomsByType
    it.skip('should return all rooms by type', () => {

    })

    it.skip('should not return room types that have not been selected', () => {

    })

    // Hotel.viewAvailRooms
    it.skip('should return all rooms available on a selected date', () => {

    })

    it.skip('should return a message if no rooms are available on the selected date', () => {

    })

    it.skip('should not return rooms that have been booked on the selected date', () => {

    })

    it.skip('should create a new booking when a valid selection has been made', () => {

    })

    it.skip('should not create a new booking if all fields are not completed', () => {

    })

    it.skip('should allow a user to log in', () => {

    })

    it.skip('should not grant log in access if credentials are invalid', () => {

    })


  })

})
