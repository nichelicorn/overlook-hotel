import chai from 'chai';
const expect = chai.expect;
import { testRooms } from '../test/test-data';
import Room from '../src/Room';

describe('The Room', () => {

  let room1, room2, room3;

  beforeEach(() => {
    room1 = new Room(testRooms[0]);
    room2 = new Room(testRooms[1]);
    room3 = new Room(testRooms[2]);
  })

  // Room.constructor
  describe('Room properties', () => {

    it.skip('should store a room number', () => {

    })

    it.skip('should store the room number as a number', () => {

    })

    it.skip('should store a room type', () => {

    })

    it.skip('should store the room type as a string', () => {

    })

    it.skip('should know if the room has a bidet', () => {

    })

    it.skip('should default to not having a bidet', () => {

    })

    it.skip('should store the size of the bed', () => {

    })

    it.skip('should store the bed size as a string', () => {

    })

    it.skip('should store the number of beds in the room', () => {

    })

    it.skip('store the number of beds as a number', () => {

    })

    it.skip('should store the cost per night', () => {

    })

    it.skip('should store the cost per night as a number', () => {

    })

    // it.skip('should store all dates the room is booked', () => { // this is not in the API data
    //
    // })

    // it.skip('should store the booked dates in an array', () => {
    //
    // })

    // it.skip('should store the dates as strings', () => {
    //
    // })

  })

})
