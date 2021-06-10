import chai from 'chai';
const expect = chai.expect;
import { testGuests , testRooms, testBookings} from '../test/test-data';
import Guest from '../src/Guest';

describe.only('The Guest', () => {

  let guest1, guest2, guest3, guest4, room1, room2, room3, booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    guest1 = new Guest(testGuests[0].id, testGuests[0].name);
    guest2 = new Guest(testGuests[1].id, testGuests[1].name);
    guest3 = new Guest(testGuests[2].id, testGuests[2].name);
    guest4 = new Guest(testGuests[3].id, testGuests[3].name);
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

  // 🧪 Guest.constructor() tests
  describe('Guest properties', () => {

    it('should store an id', () => {
      expect(guest1.id).to.equal(3);
      expect(guest2.id).to.equal(7);
      expect(guest3.id).to.equal(13);
    })

    it('should store the id as a number', () => {
      expect(guest1.id).to.be.a('number');
      expect(guest2.id).to.be.a('number');
      expect(guest3.id).to.be.a('number');
    })

    it('should store a name', () => {
      expect(guest1.name).to.equal("Wendy Torrance");
      expect(guest2.name).to.equal("Delbert Grady");
      expect(guest3.name).to.equal("Dick Hallorann");
    })

    it('should store the name as a string', () => {
      expect(guest1.name).to.be.a('string');
      expect(guest2.name).to.be.a('string');
      expect(guest3.name).to.be.a('string');
    })

    it('should store past bookings', () => { // this property is not stored in the API
      expect(guest1.pastBookings).to.deep.equal([]);
      expect(guest2.pastBookings).to.deep.equal([]);
      expect(guest3.pastBookings).to.deep.equal([]);
    })

    it('should store past bookings in an array', () => {
      expect(guest1.pastBookings).to.be.an('array');
      expect(guest2.pastBookings).to.be.an('array');
      expect(guest3.pastBookings).to.be.an('array');
    })

    it('should store future bookings', () => {
      expect(guest1.futureBookings).to.deep.equal([]);
      expect(guest2.futureBookings).to.deep.equal([]);
      expect(guest3.futureBookings).to.deep.equal([]);
    })

    it('should store future bookings in an array', () => {
      expect(guest1.futureBookings).to.be.an('array');
      expect(guest2.futureBookings).to.be.an('array');
      expect(guest3.futureBookings).to.be.an('array');
    })

    it('should store the total amount spent', () => {
      expect(guest1.totalSpent).to.equal(0);
      expect(guest2.totalSpent).to.equal(0);
      expect(guest3.totalSpent).to.equal(0);
    })

    it('should store the total spent as a number', () => {
      expect(guest1.totalSpent).to.be.a('number');
      expect(guest2.totalSpent).to.be.a('number');
      expect(guest3.totalSpent).to.be.a('number');
    })

    // it.skip('should store a user name', () => { // this will probably need a method to assign the username when the user is created on pageload
    //
    // })

    // it.skip('should store the user name as a string', () => {
    //
    // })

    // it.skip('should store a password', () => {
    //
    // })

    // it.skip('should store the password as a string', () => {
    //
    // })

  describe('Guest methods', () => {
    // Guest.requestBooking
    // create new Booking object ?
    // create a data object that can be used in the Hotel class to create a new booking? 👈 going to try this one first
    it('should be able to request a new booking', () => {
      guest1.requestBooking("2021/10/31", 217); // need to pass through the date and room number

      // add a Guest.constructor property for pendingBookings = [{}]
      expect(guest1.pendingBookings).to.deep.equal({ // create a partial object
        date: "2020/10/31",
        roomNumber: 42
      });
      // expect(guest1.pendingBookings).to.deep.equal({ // create the full data object
      //   id: "5fwrgu4i7k55hl6sz", // this seems like the least likely to come from the Guest class, and would need to be part of the new Booking object created in the Hotel class
      //   userID: 3,
      //   date: "2020/10/31",
      //   roomNumber: 42,
      //   roomServiceCharges: [], // this is a default property of the Booking class; doesn't need to be set up in the object
      // });
    })

    it.skip('should not be able to request a booking if no room number is included', () => {
      expect(guest4.requestBooking("2021/10/31")).to.equal('Please choose a room number');
    })

    it.skip('should not be able to request a booking if no date is selected', () => {
      expect(guest4.requestBooking(217)).to.equal('Please select a date for your stay at the Overlook Hotel');
    })

    // Guest.viewAllBookings
    // iterate through testBookings
    // if the booking.userID === guest.id
    // return the booking object to the correct array in the guest constructor
    it.skip('should return all bookings', () => {
      guest1.viewAllBookings();

      expect(guest1.pastBookings).to.deep.equal({
        id: "5fwrgu4i7k55hl6sz",
        userID: 3,
        date: "2020/10/31",
        roomNumber: 42,
        roomServiceCharges: [],
      })
      expect(guest1.futureBookings).to.deep.equal({
        id: "5fwrgu4i7k55hl6sz",
        userID: 3,
        date: "2021/10/31",
        roomNumber: 217,
        roomServiceCharges: [],
      })
    })

    it.skip('should return bookings as an array of objects', () => {
      guest2.viewAllBookings();

      expect(guest2.pastBookings).to.be.an.array.of('objects'); // not sure if this one will work
      expect(guest2.futureBookings).to.be.an.array.of('objects');
    })

    it.skip('should return an empty array if no bookings have been made', () => {
      guest4.viewAllBookings();

      expect(guest4.futureBookings).to.deep.equal([]);
      expect(guest4.futureBookings).to.deep.equal([]);
    })

    // Guest.calcTotalSpent
    // what data is needed to calculate the total amt spent?
    // need room number
    // need room cost per night
    // need booking date
    // need booking roomServiceCharges
    // need data for pastBookings
    // need data for futureBookings
    it.skip('should return the total spent at the hotel', () => {
      guest1.calcTotalSpent();
      guest2.calcTotalSpent();
      guest3.calcTotalSpent();

      expect(guest1.totalSpent).to.equal(777.77);
      expect(guest2.totalSpent).to.equal(888.88);
      expect(guest3.totalSpent).to.equal(999.99);
    })

    it.skip('should return zero if nothing has been spent', () => {
      guest4.calcTotalSpent();

      expect(guest4.totalSpent).to.equal(0);
    })
  })
  })
})
