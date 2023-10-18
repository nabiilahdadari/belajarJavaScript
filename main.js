// console.log("Hai")
// alert("notifikasi")
// prompt("pinjam seratus")

// var promnet = "coding is easy"
// console.log(promnet)
// var promnet = "aku suka eskrim"
// console.log(promnet)

// let promnet = "coding is fun"
// console.log(promnet)
// let promnet = "coding is fun"
// console.log(promnet)

// const promnet = "coding"
// console.log(promnet);
// const promnet = "coding"
// console.log(promnet);

// let totalPoin = prompt("masukkan poin anda")
//     if(totalPoin >= 100) {
//         document.write("congrats")
//     }
//     else {
//         document.write("keep trying")
//     }

// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x == 5 || y == 5)
// console.log(x == 6 || y == 5)
// console.log(!(x == y))

// document.write(x < 10 && y > 1);
// document.write("<br>");
// document.write(x < 10 && y < 1)
// document.write("<br>");
// document.write(x == 5 || y == 5)
// document.write("<br>");
// document.write(x == 6 || y == 5)
// document.write("<br>");
// document.write(!(x == y))
// document.write("<br>");

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

// $(document).ready(function () {
//   $("#tombol").click(function () {
//     var nilai1 = $("#keren:checked").val();
//     var nilai2 = $("#ganteng:checked").val();
//     var nilai3 = $("#cool:checked").val();
//     alert(nilai1 + " " + nilai2 + " " + nilai3);
//   });
// });

const inputList = document.getElementById("input-list");
const listInput = document.getElementById("list");

function add() {
  if (inputList.value === "") 
  {
    alert("Isi terlebih dahulu!");
  } 
  else 
  {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "daftar-list";
    li.appendChild(checkbox);
    let namaData = document.createTextNode(inputList.value);
    li.appendChild(namaData);

    let clearButton = document.createElement("button");
    clearButton.textContent = "x";
    clearButton.className = "clear-button";
    li.appendChild(clearButton);
    list.appendChild(li);

    inputList.value = "";
    li.style.listStyleType = "none";
    clearButton.style.listStyleType = "none";

    clearButton.addEventListener("click", function () {
      li.remove();
    });

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) 
      {
        li.style.textDecoration = "line-through";
      } 
      else 
      {
        li.style.textDecoration = "none";
      }
    });
  }
}
