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
const totalFriends = friends.length;
console.log(totalFriends);
const friendsPerPage = 16;
const totalPages = Math.ceil(friends.length / friendsPerPage);
console.log(totalPages);
let currentPage = 1;

function paginateFriends(friends, currentPage) {
  const startIndex = (currentPage - 1) * friendsPerPage;
  const endIndex = startIndex + friendsPerPage;
  const pageFriends = friends.slice(startIndex, endIndex);
  return pageFriends;
}
let paginatedFriends = paginateFriends(friends, currentPage);

function createFriendCards(friends) {
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
createFriendCards(paginatedFriends);

function buttonsForPagination(totalPages, currentPage) {
  if (totalPages <= 1) return;
  let paginationHTML = `
  <div class="pagination">
    <button class="pagination-button pagination-left"></button>
    <button class="pagination-button pagination-right"></button>
  </div>`;
  const cardsList = document.querySelector(".cards-list");
  cardsList.insertAdjacentHTML("beforeend", paginationHTML);
  const prevPageButton = document.querySelector(".pagination-left");
  const nextPageButton = document.querySelector(".pagination-right");
  prevPageButton.style.visibility = currentPage === 1 ? "hidden" : "visible";
  nextPageButton.style.visibility =
    currentPage === totalPages ? "hidden" : "visible";
  const pagination = document.querySelector(".pagination");
  pagination.addEventListener("click", ({ target }) => {
    if (target.classList.contains("pagination-left")) {
      createFriendCards(paginateFriends(friends, currentPage - 1));
      currentPage -= 1;
      console.log(currentPage);
    } else if (target.classList.contains("pagination-right")) {
      createFriendCards(paginateFriends(friends, currentPage + 1));
      currentPage += 1;
      console.log(currentPage);
    }
  });
}
buttonsForPagination(totalPages, currentPage);
