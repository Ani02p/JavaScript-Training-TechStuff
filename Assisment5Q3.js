//  3. Print all the keys and values of employee object used in first problem
let students= {// using for in loop 
    name: "Aniket",
    age: 22,
    address : "aamjjcdcdjn"
};
for (let key in students) {
    console.log(key, students[key]);
}
for (let key of Object.keys(students)) {
    console.log(key, students[key]);
}
