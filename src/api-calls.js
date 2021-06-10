const apiCalls = () => {
  const allGuestData = fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(allGuestData => console.log('Guests', allGuestData))
    .then(allGuestData => { return allGuestData })

  const allRoomData = fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .then(allRoomData => console.log('Rooms', allRoomData))
    .then(allRoomData => { return allRoomData })

  const allBookingData = fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(allBookingData => console.log('Bookings', allBookingData))


  return Promise.all([allGuestData, allRoomData, allBookingData])
    .then(data => {
      const allData = {}
      console.log()
      allData.allGuestData = data[0]
      allData.allRoomData = data[1]
      allData.allBookingData = data[2]
      return allData
    })

  .catch(err => console.log('Error 🧟 ', err))
}

export { apiCalls }
