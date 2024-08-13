/* problem 4 Create an object, then write a javascript function that checks whether an object contains the specified key.*/

const person = {
name: "Edward",
lastName: "Omopariola Jr",
age: 25,
weight: 200,
}
function keyExist (objectName, keyName) {
   return objectName.hasOwnProperty(keyName); //using the object.hasOwnProperty method
};

console.log(person.hasOwnProperty("name"));