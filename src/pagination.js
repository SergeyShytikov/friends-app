const friendsPerPage = 16;
const totalPages = Math.ceil(allCards.length / friendsPerPage);

function paginateFriends(friends, pageNumber) {
  const startIndex = (pageNumber - 1) * friendsPerPage;
  const endIndex = startIndex + friendsPerPage;
  const pageFriends = friends.slice(startIndex, endIndex);
  return pageFriends;
}

let currentPage = 1;

function buttonsForPagination(totalPages, currentPage) {
  if (totalPages <= 1) return;
  //TODO change two event listeners for one on parent elem
  const prevPageButton = document.createElement("button");
  prevPageButton.textContent = "Previous";
  prevPageButton.addEventListener("click", () => {
    showPage(currentPage - 1);
  });
  const nextPageButton = document.createElement("button");
  nextPageButton.textContent = "Next";
  nextPageButton.addEventListener("click", () => {
    showPage(currentPage + 1);
  });

  prevPageButton.style.display = currentPage === 1 ? "none" : "block";
  nextPageButton.style.display = currentPage === totalPages ? "none" : "block";
}
