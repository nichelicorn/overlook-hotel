const testGuests = [
  { id: 3,
    name: "Wendy Torrance"
  },
  { id: 7,
    name: "Delbert Grady"
  },
  { id: 13,
    name: "Dick Hallorann"
  },
  { id: 42,
    name: "Danny Torrance"
  }
]

const testRooms = [
  { number: 42,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 333.33,
  },
  { number: 217,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 444.44,
  },
  { number: 237,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 555.55,
  },
  { number: 17,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 333.33,
  },
  { number: 17,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 333.33,
  }
]

const testBookings = [
  {
    id: "pickle123",
    userID: 3,
    date: "2020/10/31",
    roomNumber: 42,
    roomServiceCharges: []
  },
  {
    id: "pickle234",
    userID: 3,
    date: "2021/10/31",
    roomNumber: 217,
    roomServiceCharges: []
  },
  {
    id: "pickle345",
    userID: 7,
    date: "2020/10/31",
    roomNumber: 237,
    roomServiceCharges: []
  },
  {
    id: "pickle456",
    userID: 7,
    date: "2021/10/31",
    roomNumber: 42,
    roomServiceCharges: []
  },
  {
    id: "pickle567",
    userID: 13,
    date: "2020/10/31",
    roomNumber: 217,
    roomServiceCharges: []
  },
  {
    id: "pickle678",
    userID: 13,
    date: "2021/10/31",
    roomNumber: 237,
    roomServiceCharges: []
  }
]

export { testGuests , testRooms, testBookings }
