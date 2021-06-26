import chai from 'chai';
const expect = chai.expect;
import { testGuests, testBookings} from '../test/test-data';
import Guest from '../src/Guest';

describe('The Guest', () => {

  let guest1, guest2, guest3, guest4, booking1, booking2, booking3, booking4, booking5, booking6;

  beforeEach(() => {
    guest1 = new Guest(testGuests[0]);
    guest2 = new Guest(testGuests[1]);
    guest3 = new Guest(testGuests[2]);
    guest4 = new Guest(testGuests[3]);
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

    it('should store past bookings', () => {
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

    it('should store a user name', () => { // this will probably need a method to assign the username when the user is created on pageload
    expect(guest1.username).to.equal('customer3');
    expect(guest2.username).to.equal('customer7');
    expect(guest3.username).to.equal('customer13');
    })

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
      it('should be able to request a new booking', () => {
        guest1.requestBooking("2021/10/31", 217);

        expect(guest1.pendingBookings).to.deep.equal([{
          userID: 3,
          date: "2021/10/31",
          roomNumber: 217,
        }]);
      })

      // it.skip('should not be able to request a booking if no room number is included', () => { // this might be a DOM test
      //   expect(guest4.requestBooking("2021/10/31")).to.equal('Please choose a room number');
      // })
      //
      // it.skip('should not be able to request a booking if no date is selected', () => { // this might be a DOM test
      //   expect(guest4.requestBooking(217)).to.equal('Please select a date for your stay at the Overlook Hotel');
      // })

      // Guest.viewAllBookings
      it('should return all bookings', () => {
        guest1.viewAllBookings();
        guest2.viewAllBookings();
        guest3.viewAllBookings();

        expect(guest1.allBookings).to.deep.equal([booking1, booking2]);
        expect(guest2.allBookings).to.deep.equal([booking3, booking4]);
        expect(guest3.allBookings).to.deep.equal([booking5, booking6]);
      })

      it('should return an empty array if no bookings have been made', () => {
        guest4.viewAllBookings();

        expect(guest4.allBookings).to.deep.equal([]);
      })

      // Guest.calcTotalSpent
      it('should return the total spent at the hotel', () => {
        guest1.viewAllBookings();
        guest3.viewAllBookings();


        guest1.calcTotalSpent();
        guest3.calcTotalSpent();

        expect(guest1.totalSpent).to.equal(777.77);
        expect(guest3.totalSpent).to.equal(999.99);
      })

      it('should return zero if nothing has been spent', () => {
        guest4.calcTotalSpent();

        expect(guest4.totalSpent).to.equal(0);
      })
    })
  })
})
