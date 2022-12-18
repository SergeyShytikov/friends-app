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
export const mainWrapper = document.querySelector(".wrapper");
import { toggleLoader } from "./loader.js";
import { handlerError } from "./handlerError.js";
import {
  mappingFriends,
  buttonsForPagination,
  addingEvntListners,
  clearingPagination,
} from "./pagination.js";
import {
  filteringByGender,
  sortingByAge,
  sortingByName,
} from "./friendsTransformations.js";

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const countOfFriends = generateRandomNumber();

const url = `https://randomuser.me/api/?results=${countOfFriends}&inc=gender,name,email,dob,phone,picture&seed=foobar`;
const getData = async () => {
  try {
    toggleLoader(true);
    return fetch(url)
      .then(handlerError)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        toggleLoader(false);
        return data;
      });
  } catch (err) {
    console.log("You got an error", err);
  }
};

const data = await getData();
const friends = [...data];
console.log(`Total friends ${friends.length}`);

export function createFriendCards(friends) {
  const friendsList = document.querySelector(".friends-list");
  let fragment = "";
  friends.forEach((friend) => {
    fragment += `
    <div class="card">
      <div class="face">
        <img class="friend-photo"
          src="${friend.picture.large}"
          alt="${friend.name.first} photo"/>
      </div>
      <div class="info-slider">
        <div class="name">
          <h2>${friend.name.first}
          ${friend.name.last}</h2>
        </div>
        <span class="age">I'm ${friend.dob.age} years</span>
        <div class="contacts">
          <a href="mailto:${friend.email}">${friend.email}</a>
          <a href="tel:${friend.phone}"> call to me </a>
        </div>
      </div>
  </div>`;
  });
  friendsList.innerHTML = fragment;
}

function main(friends) {
  let currentPage = 1;
  const friendsPerPage = 16;
  clearingPagination();
  const mappedFriends = mappingFriends(friends, friendsPerPage);
  const totalPages = mappedFriends.size;
  createFriendCards(mappedFriends.get(currentPage));
  if (friends.length > friendsPerPage) {
    buttonsForPagination(totalPages);
    addingEvntListners(currentPage, mappedFriends, totalPages);
  }
}
main(friends);

const sortByAgeDiv = document.querySelector(".sort-by-age");
sortByAgeDiv.addEventListener("input", ({ target }) =>
  main(sortingByAge(friends, target))
);

const sortByNameDiv = document.querySelector(".sort-by-name");
sortByNameDiv.addEventListener("input", ({ target }) =>
  main(sortingByName(friends, target))
);

const filterByGenderDiv = document.querySelector(".filter-by-gender");
filterByGenderDiv.addEventListener("input", ({ target }) =>
  main(filteringByGender(friends, target))
);

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => main(friends));
// main(friends)
// ({ target }) => {console.log(target);
