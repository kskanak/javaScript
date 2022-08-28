function userInfo() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUserInfo(data));
}

function displayUserInfo(AllUserDetails) {
  const userInfoSection = document.getElementById("userInfo-section");
  for (const userInfo of AllUserDetails) {
    // user address destructuring
    const address = userInfo.address;
    const { street, city } = address;
    // user company
    const company = userInfo.company;
    const { name, catchPhrase } = company;
    const userInfoDiv = document.createElement("div");
    userInfoDiv.classList.add("userInfoDiv");
    userInfoDiv.innerHTML = `
    <ul>
    <li>User Id : <span>${userInfo.id}</span></li>
    <li>Full-Name : <span>${userInfo.name}</span></li>
    <li>User-Name : <span>${userInfo.username}</span></li>
    <li>User-Email :<span>${userInfo.email}</span></li>
    <li>
      Address :
      <ul>
      <li>street : <span>${street}</span></li>
      <li>city : <span>${city}</span></li>
      </ul>
    </li>
    <li>Phone-Number : <span>${userInfo.phone}</span></li>
    <li>Company Name : <span>${name}</span></li>
    <li>Company Moto : <span>${catchPhrase}</span></li>
  </ul>
    
    `;
    userInfoSection.appendChild(userInfoDiv);
  }
}
userInfo();
