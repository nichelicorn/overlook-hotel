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
    // room1 = new Room(testRooms[0].number, testRooms[0].roomType, testRooms[0].bidet, testRooms[0].bedSize, testRooms[0].numBeds, testRooms[0].costPerNight);
    // room2 = new Room(testRooms[1].number, testRooms[1].roomType, testRooms[1].bidet, testRooms[1].bedSize, testRooms[1].numBeds, testRooms[1].costPerNight);
    // room3 = new Room(testRooms[2].number, testRooms[2].roomType, testRooms[2].bidet, testRooms[2].bedSize, testRooms[2].numBeds, testRooms[2].costPerNight);
  })

  // Room.constructor
  describe('Room properties', () => {

    it('should store a room number', () => {
      expect(room1.number).to.equal(42);
      expect(room2.number).to.equal(217);
      expect(room3.number).to.equal(237);
    })

    it('should store the room number as a number', () => {
      expect(room1.number).to.be.a('number');
      expect(room2.number).to.be.a('number');
      expect(room3.number).to.be.a('number');
    })

    it('should store a room type', () => {
      expect(room1.roomType).to.equal('single room');
      expect(room2.roomType).to.equal('suite');
      expect(room3.roomType).to.equal('residential suite');
    })

    it('should store the room type as a string', () => {
      expect(room1.roomType).to.be.a('string');
      expect(room2.roomType).to.be.a('string');
      expect(room3.roomType).to.be.a('string');
    })

    it('should know if the room has a bidet', () => {
      expect(room1.bidet).to.equal(false);
      expect(room2.bidet).to.equal(true);
      expect(room3.bidet).to.equal(true);
    })

    it('should default to not having a bidet', () => {
      let room4 = new Room(13, 'suite', null, 'queen', 1, 777.77)

      expect(room4.bidet).to.equal(false);
    })

    it('should store the size of the bed', () => {
      expect(room1.bedSize).to.equal('full');
      expect(room2.bedSize).to.equal('queen');
      expect(room3.bedSize).to.equal('king');
    })

    it('should store the bed size as a string', () => {
      expect(room1.bedSize).to.be.a('string');
      expect(room2.bedSize).to.be.a('string');
      expect(room3.bedSize).to.be.a('string');
    })

    it('should store the number of beds in the room', () => {
      expect(room1.numBeds).to.equal(1);
      expect(room2.numBeds).to.equal(1);
      expect(room3.numBeds).to.equal(2);

    })

    it('store the number of beds as a number', () => {
      expect(room1.numBeds).to.be.a('number');
      expect(room2.numBeds).to.be.a('number');
      expect(room3.numBeds).to.be.a('number');
    })

    it('should store the cost per night', () => {
      expect(room1.costPerNight).to.equal(333.33);
      expect(room2.costPerNight).to.equal(444.44);
      expect(room3.costPerNight).to.equal(555.55);
    })

    it('should store the cost per night as a number', () => {
      expect(room1.costPerNight).to.be.a('number');
      expect(room2.costPerNight).to.be.a('number');
      expect(room3.costPerNight).to.be.a('number');
    })
  })
})
