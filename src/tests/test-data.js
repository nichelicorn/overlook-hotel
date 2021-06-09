const testUsers = [
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

export { testUsers , testRooms }
