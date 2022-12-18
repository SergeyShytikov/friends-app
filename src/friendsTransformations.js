export function sortingByAge(friends, target) {
  const sortedFriends = [...friends];
  sortedFriends.sort((friendOne, friendTwo) => {
    return target.value === "age-up"
      ? friendTwo.dob.age - friendOne.dob.age
      : friendOne.dob.age - friendTwo.dob.age;
  });
  return sortedFriends;
}

export function sortingByName(friends, target) {
  const sortedFriends = [...friends];
  sortedFriends.sort((friendOne, friendTwo) => {
    return target.value === "from-a"
      ? friendOne.name.first.localeCompare(friendTwo.name.first)
      : friendTwo.name.first.localeCompare(friendOne.name.first);
  });
  return sortedFriends;
}

export function filteringByGender(friends, target) {
  const filteredFriends =
    target.value === "male" || target.value === "female"
      ? friends.filter((friend) => friend.gender === target.value)
      : friends;
  return filteredFriends;
}
