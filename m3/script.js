///membuat array biasa

let siswa = ["Vania", 21, true]

console.log(siswa);
console.log(siswa[0]);

///membuat array of object, kenapa bisa diakatakan object? karena terdapat
// {..} di dalam arraynya.
let anime = {
    judul : "kimi no nawa",
    "nama karakter" : "Mitsuha",
    tamat : 2021,
};

//menampilkan array dengan 2 cara dot dan bracket
console.log(anime);
console.log(anime.judul);
console.log(anime["nama karakter"]);

//menambahkan value pada parameter dengan 2 cara dot dan bracket.
anime.judul = "Black Clover";
anime["nama karakter"] = "Asta";
console.log(anime);

//Menambahkan method pada array of object :

const statTransaksi = {
    berhasil: function() {
        return "Selamat pembayaranmu berhasil!";
    },
    gagal: function() {
        return "Maaf saldo anda kurang";
    },
};

console.log(statTransaksi.berhasil());
console.log(statTransaksi.gagal());

//contoh objek
let anime1 = {
    judul : "kimi no nawa",
    "nama karakter" : "Mitsuha",
};

// ubah ke array
console.log(Object.keys(anime1));

// promise //

let liburanPromise = new Promise((resolve, reject) => {
setTimeout(() => {
        resolve("Otw Liburan ke Mekkah")
}, 2000)
})


// eksekusi proses
liburanPromise.then(result => {
    console.log(result)
})


// session dan local storage
localStorage.setItem("Front-End", "Vania Sasikirana")
