var personalProfile = {
  firstName: "Ali",
  lastName: "Mammadov",
  age: "18",
  favoriteLang: "JavaScript",
  contactInfo: {
    email: "Aliw14ali@gmail.com",
    phone: "0504502434",
  },
};

personalProfile["speciality"] = ["Developer"];
personalProfile.contactInfo["adress"] = "Nerimanov";

console.log(personalProfile);
console.log(personalProfile.lastName);
console.log(personalProfile["contactInfo"].phone);
console.log(personalProfile.phone); //undefined da gormek ucun
