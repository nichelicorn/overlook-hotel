const testGuests = [
  { id: 3,
    name: "Wendy Torrance"
  },
  { id: 7,
    name: "Delbert Grady"
  },
  { id: 13,
    name: "Dick Hallorann"
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
  }
]

const testBookings = [
  { id: "5fwrgu4i7k55hl6sz",
    userID: 3,
    date: "2020/10/31",
    roomNumber: 42,
    roomServiceCharges: [],
  },
  { id: "5fwrgu4i7k55hl6sz",
    userID: 3,
    date: "2021/10/31",
    roomNumber: 217,
    roomServiceCharges: [],
  },
  { id: "5fwrgu4i7k55hl6t6",
    userID: 7,
    date: "2020/10/31",
    roomNumber: 237,
    roomServiceCharges: [],
  },
  { id: "5fwrgu4i7k55hl6t7",
    userID: 7,
    date: "2021/10/31",
    roomNumber: 42,
    roomServiceCharges: [],
  },
  { id: "5fwrgu4i7k55hl6t8",
    userID: 13,
    date: "2020/10/31",
    roomNumber: 217,
    roomServiceCharges: [],
  },
  { id: "5fwrgu4i7k55hl6t9",
    userID: 13,
    date: "2021/10/31",
    roomNumber: 237,
    roomServiceCharges: [],
  }
]

export { testGuests , testRooms, testBookings }
