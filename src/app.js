// API's
//"https://reqres.in/api/users/"
//"https://randomuser.me/api/?results=10"

//results:
// Object { gender: "female", email: "aynz.khrymy@example.com", phone: "005-78896313", … }
// dob: Object { date: "1992-02-07T17:56:13.316Z", age: 30 }
// email: "aynz.khrymy@example.com"
// gender: "female"
// name: Object { title: "Miss", first: "آیناز", last: "کریمی" }
// phone: "005-78896313"
// picture: Object { large: "https://randomuser.me/api/portraits/women/62.jpg", medium: "https://randomuser.me/api/portraits/med/women/62.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg" }
import { toggleLoader } from "./loader.js";
import { handlerError } from "./handlerError.js";
// const spinner = document.querySelector(".loading-spinner");
export const mainWrapper = document.querySelector(".wrapper");

let friends = 10;
let friendsList;
const url = `https://randomuser.me/api/?results=${friends}&inc=gender,name,email,dob,phone,picture&seed=foobar`;
const getData = async () => {
  try {
    toggleLoader(true);
    return fetch(url)
      .then(handlerError)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        friendsList = data;
        toggleLoader(false);
      });
  } catch (err) {
    console.log("You got an error", err);
  }
};
await getData();
console.log(friendsList);
// const friends = [...friendsList];
// const root = document.querySelector("#root");
// let fragment = document.createDocumentFragment();
// friends.forEach((friend) => {
//   fragment += `
//   <div class="person">
//   <img src="${friend.picture.medium}" alt="${friend.name.first} photo"></img>
//     <h2>
//         ${friend.name.first}
//         ${friend.name.last}
//     </h2>
//     <p class="email">${friend.email}</p>
//   </div>
// `;
// });
// console.log(fragment);
// root.innerHTML = fragment;
// console.log(root);
// // поиск по имени или фамилии,
