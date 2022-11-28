import { mainWrapper } from "./app.js";
export function toggleLoader(isShowing) {
  if (isShowing === true) {
    const spinnerHtml = `<div class="loading-spinner">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`;
    mainWrapper.insertAdjacentHTML("afterbegin", spinnerHtml);
  } else {
    const spinner = document.querySelector(".loading-spinner");
    const remove = () => {
      spinner.remove();
    };
    setTimeout(remove, 3000);
  }
}
