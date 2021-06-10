class Guest {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.pastBookings = [];
    this.futureBookings = [];
    this.totalSpent = 0;
  }
}

export default Guest;
