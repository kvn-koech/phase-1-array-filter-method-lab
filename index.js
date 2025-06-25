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

console.log(findMatching(drivers, "Bobby")); // ["Bobby", "bobby"]
console.log(fuzzyMatch(drivers, "Sa")); // ["Sammy", "Sally", "Sarah"]
console.log(matchName(driverObjects, "Bobby")); // [{ name: "Bobby", hometown: "Pittsburgh" }]