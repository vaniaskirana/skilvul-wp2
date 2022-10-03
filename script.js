let vania = document.getElementById("vania")
    console.log(vania)

    vania.innerText= " Halo perkenalkan nama saya Vania ";
    vania.innerHTML= " Halo perkenalkan nama saya Kirana ";

// Menambahkan element manipulasi

let h1 = document.createElement("h1")
h1.innerText = "FEBE-11"
console.log(h1)

vania.append(h1)


// Memberikan dan memasukkan Attribut
let link = document.getElementsByClassName("link")[0]
console.log(link.attributes) // [] list attribute

console.log(link.getAttribute("href")); // ambil isi attribute
link.setAttribute("id", "vania") // add attribute
console.log(link)


// Styling warna  DOM

link.style.color = "white"
link.style.border = "1px solid aqua"
link.style.padding = "5px 20px"
link.style.backgroundColor = "pink"


// DOM FORM

function logSubmit(event) {
    log.textContent = `Pesan telah Terkirim! Terimakasih.`;
    event.preventDefault();

}

form.addEventListener('submit', logSubmit)