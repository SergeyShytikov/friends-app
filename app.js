// API's
//"https://reqres.in/api/users/"
//"https://randomuser.me/api/?results=10"

const url =
  "https://randomuser.me/api/?results=10&inc=gender,name,email,dob,phone,picture&seed=foobar";
const getData = async () => {
  const request = await fetch(url);
  const json = await request.json();
  return json.results;
};
const friendsList = await getData();
let friends = [...friendsList];
const root = document.querySelector("#root");
let fragment = document.createDocumentFragment();
friends.forEach((friend) => {
  fragment += `
  <div class="person">
  <img src="${friend.picture.medium}" alt="${friend.name.first} photo"></img>
    <h2>
        ${friend.name.first}
        ${friend.name.last}
    </h2>
    <p class="email">${friend.email}</p>
  </div>
`;
});
root.innerHTML = fragment;
console.log(root);
