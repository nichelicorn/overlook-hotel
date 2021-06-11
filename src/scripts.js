// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './api-calls.js'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

window.addEventListener('load', loadAPIData);
console.log('apiCalls 👇');
console.log(apiCalls);

function loadAPIData() {
  // console.log('allGuestData 👇')
  apiCalls.getGuestData()
    .then(allGuestData => {
      console.log('hello all guests!')
      console.log(allGuestData)
      // still returns undefined ; with all console.logs in api-calls this works to log guest data in the console from the scripts file; fetch is weird
    })
  // console.log('allData 👇')
  // apiCalls.getAllData()
}
