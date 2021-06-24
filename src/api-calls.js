const apiCalls = {

  getGuestData() {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(allGuestData => { return allGuestData })
    .catch(err => console.log('Error 🧟 ', err))
  },

  getRoomData() {
    return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .then(allRoomData => { return allRoomData })
    .catch(err => console.log('Error 🧟 : ', err))
  },

  getBookingData() {
    return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(allBookingData => { return allBookingData })
    .catch(err => console.log('Error 🧟 : ', err))
  },

  getAllData() {
    let promises = [ apiCalls.getGuestData(), apiCalls.getRoomData(), apiCalls.getBookingData() ]
    return Promise.all(promises)
    .then(allData => { return allData })
    .catch(err => console.log('Error 🧟 : ', err))
  },
}

export default apiCalls;
