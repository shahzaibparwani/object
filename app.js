//Q1
// var itemArray = [
// {name:"juice",price:50, quantity:3},
// {name:"cookie",price:30, quantity:9},
// {name:"shirt",price:880, quantity:1},
// {name:"pen",price:100, quantity:2}];


// var calculate0 = (itemArray[0].price * itemArray[0].quantity);
// var calculate1 = (itemArray[1].price * itemArray[1].quantity);
// var calculate2 = (itemArray[2].price * itemArray[2].quantity);
// var calculate3 = (itemArray[3].price * itemArray[3].quantity);

// console.log(calculate0);
// console.log(calculate1);
// console.log(calculate2);
// console.log(calculate3);

// console.log("all items price")
// //now all prices add
// console.log(calculate0 + calculate1 + calculate2 + calculate3)




//Q2

// var objShah = {
//         name: "shahzaib",
//         email: "shahzaibkhatri115@gmail.com",
//         password: "123456789",
//         age: 19,
//         gender: "Male",
//         city: "Karachi",
//         country: "pakistan",
//     }
    
//     if("age" in objShah && "country" in objShah == true){
//         console.log("age and country is exist");
//     } else {
//         console.log("firstname and lastname is not exist in objShah");
//     }





//Q3

// function Student(name, father, Class, section) {
//       this.name = name;
//       this.father = father;
//       this.Class = Class;
//       this.section = section;
//     }

// var student1 = new Student("shayan", "abdul razzak", 10, "A");
// var student2 = new Student("shanazwaz", "abdul razzak", 10, "A");
// var student3 = new Student("shahzaib", "abdul razzak", 10, "A");
// var student4 = new Student("saad", "khalid", 10, "A");
// var student5 = new Student("hamza", "imran", 10, "A");
// console.log(student1, student2, student3, student4, student5);

//Q4

// function Area(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// function myfun() {
//     var personName = document.getElementById("name").value;
//     var address = document.getElementById("address").value;
//     var education = document.getElementById("education").value;
//     var profession = document.getElementById("profession").value;

//     if ((personName.length && address.length && education.length && profession.length) == 0) {
//         console.log("Please fill all the field correctly");
//     } else {
//         var gender1 = document.getElementById("male");
//         var gender2 = document.getElementById("female");

//         if (gender1.checked) {
//             var a = "male";
//         } else if (gender2.checked) {
//             var a = "female";
//         }

//         const myArea = new Area(personName, a, address, education, profession);
//         console.log(myArea);
//     }
// }