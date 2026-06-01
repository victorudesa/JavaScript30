// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const born1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log('Born in the 1500s')
console.table(born1500s)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(inventor => {
    return inventor.first + ' ' + inventor.last;
})
console.log('Full name')
console.table(fullName)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('Sorting from oldest to youngest')
const sortBirthdate = [...inventors].sort((a, b) => a.year > b.year ? 1 : -1)
console.table(sortBirthdate)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);
console.log(`That's the total amount of years the inventors lived!`);
console.log(totalYearsLived)

// 5. Sort the inventors by years lived
const YearsLivedSorted = inventors.map(inventor => ({ ...inventor, age: inventor.passed - inventor.year }))
    .sort((a, b) => a.age > b.age ? 1 : -1)
console.log('Sort by years lived')
console.table(YearsLivedSorted)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const links = [...document.querySelectorAll('.mw-category a')];
// const linksText = links.map(link => {
//   return link.textContent;
// })
// console.log(linksText);
// const filteredLinksText = linksText.filter(streetName => streetName.includes('de'))
// console.log('Filtered Boulevard Names!')
// console.log(filteredLinksText);

// 7. sort Exercise
// Sort the people alphabetically by last name
// const sortLastName = [...people].sort((a, b) => a > b ? 1 : -1);
// sortLastName.forEach(name => console.log(name))
// console.log(sortLastName);

const sortLastName = [...people].sort((last, first) => {
    const [aLast, aFirst] = last.split(', ');
    const [bLast, bFirst] = last.split(', ');
    return aLast > bLast ? -1 : 1;
})
console.log('People with last name sorted:', sortLastName)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce((totalObject, item) => {
    if (!totalObject[item]) {
        totalObject[item] = 0;
    }
    totalObject[item]++;
    return totalObject;
}, {})
console.log(transportation)
