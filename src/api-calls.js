// const apiCalls = () => {
const apiCalls = {

  getGuestData() {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(allGuestData => { return allGuestData })
    .catch(err => console.log('Error 🧟 ', err))
  },

  // const getRoomData = fetch('http://localhost:3001/api/v1/rooms')
  //   .then(response => response.json())
  //   // .then(allRoomData => console.log('Rooms', allRoomData))
  //   .then(allRoomData => { return allRoomData })
  //
  // const getBookingData = fetch('http://localhost:3001/api/v1/bookings')
  //   .then(response => response.json())
  //   // .then(allBookingData => console.log('Bookings', allBookingData))
  //   .then(allBookingData => { return allBookingData })

  // return Promise.all([allGuestData, allRoomData, allBookingData])
  //   .then(data => {
  //     // const allData = data
  //     const allData = {}
  //     allData.allGuestData = data[0]
  //     allData.allRoomData = data[1]
  //     allData.allBookingData = data[2]
  //     return allData
  //     // return data
  //   })

  getAllData() {
    let promises = [ apiCalls.getGuestData() ];
    return Promise.all(promises)
    .then(allData => { return allData })
    .catch(error => console.log(`Error : 🧟 : ${error}`))
  },

  // .catch(err => console.log('Error 🧟 ', err))
}

export default apiCalls;
