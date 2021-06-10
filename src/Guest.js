class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.pastBookings = [];
    this.pendingBookings = [];
    this.futureBookings = [];
    this.totalSpent = 0;
  }

  requestBooking(date, room) {
    let newBookingObj = {};

    this.pendingBookings.push(newBookingObj);
  }
}

export default Guest;
