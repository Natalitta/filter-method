  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === "Paul"); //const paul = people.filter(p => p.name === "Paul"); also valid

const lianna = people.filter(p => p.name === "Lianna")[0]; //to get only an object
 
console.log(paul);
console.log(lianna)


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
})
console.log(candidates);

// or

const hasStrongSkills = student => {
  let strSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strSkills.length > 0;
};
const cands = students.filter(hasStrongSkills);
console.log(cands);

// or 
const has5yrsExp = skill => skill.yrsExperience >= 5;
const hasStrSkills = student => student.skills.filter(has5yrsExp).length > 0;

const candids = students.filter(hasStrSkills);
console.log(candids);

const candsNames = candids.map(candid => candid.name) // to get only names
console.log(candsNames);

/*Filter challenge*/

let studs = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];


const topMaths = studs.filter(itm => itm.results.maths >= 90);
console.log(topMaths);