//task 1
let list = document.getElementsByTagName("li");
for (let li of list) {
  console.log(li);
}

//task 2
console.log(document.getElementById(`ulId`).getElementsByTagName("li").length);

//task 3
let arrOfli = document.getElementsByTagName("li");
let arr = [];
for (let i = 0; i < arrOfli.length; i++) {
  arr.push(arrOfli[i].innerHTML);
}

console.log(arr);
