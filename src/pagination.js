import { createFriendCards } from "./app.js";

export function mappingFriends(friends, friendsPerPage) {
  const createSlice = (index, result) => {
    const sliceLength = Math.min(friendsPerPage, friends.length - index);
    const slice = friends.slice(index, index + sliceLength);
    result.set(result.size + 1, slice);
  };
  const mappedFriends = friends.reduce((result, element, index) => {
    if (index % friendsPerPage === 0) {
      createSlice(index, result);
    }
    return result;
  }, new Map());
  return mappedFriends;
}

export function buttonsForPagination(totalPages) {
  let paginationButtons = `
    <button class="pagination-button pagination-left hidden"></button>
    <button class="pagination-button pagination-right"></button>`;
  const pagination = document.querySelector(".pagination");
  pagination.insertAdjacentHTML("afterbegin", paginationButtons);
}

export function addingEvntListners(currentPage, mappedFriends, totalPages) {
  const pagination = document.querySelector(".pagination");
  pagination.addEventListener("click", ({ target }) => {
    if (target.classList.contains("pagination-left")) {
      createFriendCards(mappedFriends.get(currentPage - 1));
      currentPage -= 1;
    } else if (target.classList.contains("pagination-right")) {
      createFriendCards(mappedFriends.get(currentPage + 1));
      currentPage += 1;
    }
    hidingButton(currentPage, totalPages);
  });
}

function hidingButton(currentPage, totalPages) {
  const prevPageButton = document.querySelector(".pagination-left");
  const nextPageButton = document.querySelector(".pagination-right");
  if (currentPage > 1) {
    prevPageButton.classList.remove("hidden");
  } else {
    prevPageButton.classList.add("hidden");
  }

  if (currentPage < totalPages) {
    nextPageButton.classList.remove("hidden");
  } else {
    nextPageButton.classList.add("hidden");
  }
}
