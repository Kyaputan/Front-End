const button = document.querySelector(".main.btn");
const textElement = document.querySelector(".text");
const imge = document.querySelector(".cat");
const Pname = document.querySelector(".person");
const body = document.querySelector("body");
const paragraphs = document.querySelectorAll(".content-text p");

button.addEventListener("click", () => {
  textElement.textContent = "Hello JavaScript!";
  if (imge) {
    imge.style.display = "none";
  }
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  if (Pname) {
    Pname.textContent = "My father is " + myFather.fullName();
  }
});

