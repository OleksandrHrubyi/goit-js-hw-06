const getSortedUniqueSkills = (array) =>
  array
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((el, index, array) => array.indexOf(el) === index)
    .sort();

//  console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
