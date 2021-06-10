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

})
