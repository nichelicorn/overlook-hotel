import chai from 'chai';
const expect = chai.expect;
import { testRooms } from '../test/test-data';
import Room from '../src/Room';

describe.only('The Room', () => {

  let room1, room2, room3;

  beforeEach(() => {
    room1 = new Room(testRooms[0].id, testRooms[0].roomType, testRooms[0].bidet, testRooms[0].bedSize, testRooms[0].numBeds, testRooms[0].costPerNight);
    room2 = new Room(testRooms[1].id, testRooms[1].roomType, testRooms[1].bidet, testRooms[1].bedSize, testRooms[1].numBeds, testRooms[1].costPerNight);
    room3 = new Room(testRooms[2].id, testRooms[2].roomType, testRooms[2].bidet, testRooms[2].bedSize, testRooms[2].numBeds, testRooms[2].costPerNight);
  })

  // Room.constructor
  describe('Room properties', () => {

    it.skip('should store a room number', () => {
      expect(room1.number).to.equal(42);
      expect(room2.number).to.equal(217);
      expect(room3.number).to.equal(237);
    })

    it.skip('should store the room number as a number', () => {
      expect(room1.number).to.be.a('number');
      expect(room2.number).to.be.a('number');
      expect(room3.number).to.be.a('number');
    })

    it.skip('should store a room type', () => {
      expect(room1.type).to.equal('single room');
      expect(room2.type).to.equal('suite');
      expect(room3.type).to.equal('residential suite');
    })

    it.skip('should store the room type as a string', () => {
      expect(room1.type).to.be.a('string');
      expect(room2.type).to.be.a('string');
      expect(room3.type).to.be.a('string');
    })

    it.skip('should know if the room has a bidet', () => {
      expect(room1.bidet).to.be(false);
      expect(room2.bidet).to.be(true);
      expect(room3.bidet).to.be(true);
    })

    it.skip('should default to not having a bidet', () => {
      let room4 = new Room(13, 'suite', 'queen', 1, 777.77)

      expect(room4.bidet).to.be(false);
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
