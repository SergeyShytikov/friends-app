// API's
//"https://reqres.in/api/users/"
//"https://randomuser.me/api/?results=10"
// async function main() {
//   const fakeUsers = await fetchUsers(RANDOM_USERS_URL);
//   renderUsers(fakeUsers);
//   users = [...fakeUsers];
// }

const url = "https://randomuser.me/api/?results=10";
const getData = async () => {
  const request = await fetch(url);
  const json = await request.json();
  return json.results;
};
const friendsList = getData();
let friends = [...friendsList];
console.log(friends);

// let result = "";
// console.log(users);

// avatar: "https://reqres.in/img/faces/1-image.jpg"
// email: "george.bluth@reqres.in"
// first_name: "George"
// id: 1
// last_name: "Bluth"

// const usersList = document.createDocumentFragment();
//     users.forEach((user) => {
//       const markup = `
//   <div class="person">
//   <img src="user.avatar" alt="user photo"></img>
//     <h2>
//         ${user.first_name}
//         ${user.last_name}
//     </h2>
//     <p class="email">${user.email}</p>
//   </div>
// `;
//       usersList.innerHTML = markup;
//     });
// console.log(usersList);
// document.body.append(usersList);
// document.body.innerHTML =
// });
