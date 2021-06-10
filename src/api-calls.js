const apiCalls = () => {
  const allGuestData = fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .then(allGuestData => console.log(allGuestData))
  .then(allGuestData => { return allGuestData })


  // return Promise.all(allGuestData)
  //   .then(data => {
  //     const allData = {}
  //     // allData.allGuestData = data
  //     return allData
  //   })
    .catch(err => console.log('Error 🧟 ', err))
}

export { apiCalls }
