// Code your solution here

function findMatching(drivers, query) {
  return drivers.filter(driver => 
    driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

function matchName(drivers, query) {
  return drivers.filter(driver =>
    driver.name.toLowerCase() === query.toLowerCase()
  );
}

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
const driverObjects = [
  { name: "Bobby", hometown: "Pittsburgh" },
  { name: "Sammy", hometown: "New York" },
  { name: "Sally", hometown: "Cleveland" },
];

console.log(findMatching(drivers, "Bobby"));
console.log(fuzzyMatch(drivers, "Sa")); 
console.log(matchName(driverObjects, "Bobby")); 
