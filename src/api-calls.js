const apiCalls = () => {
  const allGuestData = fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .then(allGuestData => { return allGuestData })

  

}

export { apiCalls }
