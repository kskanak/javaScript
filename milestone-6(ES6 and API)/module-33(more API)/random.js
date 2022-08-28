const randomUserInfo = (userInfo) => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayInfo(data));
};

const displayInfo = (data) => {
  const infoArr = data.results;
  const userInfoSection = document.getElementById("userInfo-section");
  for (const object of infoArr) {
    console.log(object);
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add("user");
    userInfoContainer.innerHTML = `
    
    <img src="${object.picture.large}" alt="">
    <h3>Name : ${object.name.title} ${object.name.first} ${object.name.last}</h3>
    <h3>Email : ${object.email}</h3>
    <h3>Phone : ${object.phone}</h3>
    <h3>Gender :${object.gender} </h3>
    <h3>Age : ${object.registered.age}</h3>
    <h3>DOB : ${object.registered.date}</h3>
    <h3>Location : 
      <ul>
        <li>City : ${object.location.city}</li>
        <li> Country :  ${object.location.country}</li>
      </ul>
    </h3>
    
    `;
    userInfoSection.appendChild(userInfoContainer);
  }
};
randomUserInfo();
