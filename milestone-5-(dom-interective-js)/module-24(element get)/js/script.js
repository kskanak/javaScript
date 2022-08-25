const firstSection = document.getElementById("section-1");
console.log(firstSection);
const firstHeader = document.getElementById("header-1");
console.log(firstHeader);
firstHeader.innerText = "red blue green";
firstHeader.style.color = "red";
firstHeader.style.fontSize = "52px";

// create new section

const mainContainer = document.getElementById("main-container");
console.log(mainContainer);
const newSection = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "hi hi eye majbori";
newSection.appendChild(h1);
const paragraph = document.createElement("p");
paragraph.innerText = "yeh mousam aur yeh duri";
newSection.appendChild(paragraph);
mainContainer.appendChild(newSection);

// creating a new section with innetHTML

const newsSection = document.createElement("section");
newsSection.innerHTML = `
  <h1> what' Up joey</h1>
  <p>how you doing</p>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
  </ul>
`;
mainContainer.appendChild(newsSection);
// section style
const allSections = document.getElementsByTagName("section");
for (const section of allSections) {
  section.style.border = "2px solid red";
  section.style.margin = "5px";
  section.style.paddingLeft = "20px";
  section.style.borderRadius = "15px";

  console.log(section);
}

const list = document.getElementById("list");
console.log(list);
list.classList;
console.log(list);
list.classList.add("okay");
console.log(list.parentNode);
console.log(list.childNodes);
