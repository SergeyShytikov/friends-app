export function sortingByAge(friends, order) {
  const sortedFriends = [...friends];
  sortedFriends.sort((friendOne, friendTwo) => {
    return (order = "asc"
      ? friendTwo.dob.age - friendOne.dob.age
      : friendOne.dob.age - friendTwo.dob.age);
  });
  return sortedFriends;
}

export function sortingByName(friends, order) {
  const sortedFriends = [...friends];
  sortedFriends.sort((friendOne, friendTwo) => {
    return order === "asc"
      ? friendOne.name.first.localeCompare(friendTwo.name.first)
      : friendTwo.name.first.localeCompare(friendOne.name.first);
  });
  return sortedFriends;
}

export function filteringByGender(friends, gender) {
  const filteredFriends =
    gender === "male" || gender === "female"
      ? friends.filter((friend) => friend.gender === gender)
      : friends;
  return filteredFriends;
}
