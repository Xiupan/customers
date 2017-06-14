function fetchPerson(numberOfUsers){

  fetch(`https://randomuser.me/api/?nat=us`)
    .then( function(response){
      return response.json()
    })
    .then(function(json){
      console.log(json)

      const firstName = json.results[0].name.first;
      const lastName = json.results[0].name.last;
      const emailAddress = json.results[0].email;
      const address = json.results[0].location.street;
      const city = json.results[0].location.city;
      const state = json.results[0].location.state;
      const zip = json.results[0].location.postcode;
      const phone = json.results[0].phone;
      const ssn = json.results[0].id.value;
      const profilePic = json.results[0].picture.large;

      const html = `
        <div class="customer">
          <div class="profile-picture">
            <img class="profile-picture-img" src="${profilePic}">
          </div>
          <div class="full-name">${firstName} ${lastName}</div>
          <div class="email-address">${emailAddress}</div>
          <div class="address">${address}</div>
          <div class="address-line-2">${city}, ${state}, ${zip}</div>
          <div class="phone-number">${phone}</div>
          <div class="ssn">${ssn}</div>
        </div>`

      document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    })
}
for (var i = 1; i <= 12; i++) {
  fetchPerson(i)
}
