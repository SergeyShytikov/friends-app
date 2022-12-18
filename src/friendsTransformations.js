export function sortingByAge(friends, target) {
  const sortedFriends =
    target.value === "age-up"
      ? friends.sort((friendOne, friendTwo) => {
          return friendTwo.dob.age - friendOne.dob.age;
        })
      : friends.sort((friendOne, friendTwo) => {
          return friendOne.dob.age - friendTwo.dob.age;
        });
  return sortedFriends;
}

export function sortingByName(friends, target) {
  const sortedFriends =
    target.value === "from-a"
      ? friends.sort((friendOne, friendTwo) => {
          return friendOne.name.first.localeCompare(friendTwo.name.first);
        })
      : friends.sort((friendOne, friendTwo) => {
          return friendTwo.name.first.localeCompare(friendOne.name.first);
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
