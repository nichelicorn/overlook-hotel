class Booking {
  constructor(bookingData) {
    this.id = bookingData.id; // 📌 need to add method to create new booking id - this is not generated when a new booking is created
    this.userID = bookingData.userID;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumber;
    this.roomServiceCharges = bookingData.roomServiceCharges || [];
  }
}

export default Booking;
