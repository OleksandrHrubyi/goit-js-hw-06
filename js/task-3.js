const getUsersWithGender = (array, gender) =>
  array.filter((player) => player.gender === gender).map(({ name }) => name);

console.log(getUsersWithGender(users, "female"));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
