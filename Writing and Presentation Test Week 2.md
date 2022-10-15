# Writing and Presentation Test Week 2 [26 sept s/d 29 sept]
## <h4>Nama     : Vania Sasikirana</h4><h4></h4>Group FE 2 - Kelompok 11</h4> <h4>Mentor : Thoriq Nur Faizal</h4>

<br>
<br>

### **1. JavaScript Dasar - Scope dan Function**

  <br><b>A. Scope</b><hr> Scope sendiri memiliki tugas untuk membatasi pengaksesan pada suatu variable, Scope terdiri dari 2 jenis yaitu :<br>
    
   - Global Scope : Lingkup global memiliki artian "everywhere" dimana variable yang memiliki ciri global scope ini dapat diakses dalam blok atau fungsi manapun(sifatnya tidak terbatas). Global scope ini dapat diletakkan di luar function yaa, jadi kita bisa memanggilnya dimana saja.

   ```
   let tahunLahir = 2001;
      {
         let tahun_sekarang = 2022;
         let umur_sekarang = tahun_sekarang - tahunLahir;

         console.log(umur_sekarang);
      }
   
   // tahun dapat digunakan di dalam ataupun diluar blok {}

   ```
    
   
   - Local Scope : Berbeda dengan global scope, Local scope ini hanya dapat diakses pada 1 blok nya itu sendiri(sangat terbatas). Jadi kita tidak bisa memanggil local variable ini di luar bloknya itu sendiri.

   ```
         {
            let tahunLahir = 2001;
            let tahun_sekarang = 2022;
         }
            let umur_sekarang = tahun_sekarang - tahunLahir;
            console.log(umur_sekarang);

      // tahun_sekarang dan tahun_lahir tidak dapat digunakan di dalam ataupun diluar blok {}
   ```
  

   <br><b>B. Function</b><hr>Fungsi merupakan sebuah blok kode yang dapat membungkus dan menjalankan perintah hanya dengan memanggil fungsinya itu sendiri.<br>


   ```
    var testFungsi = () => {

        console.log("Skilvul - Kampus Merdeka");
        return "Vania Sasikirana [Kelompok 11]";
    }

    console.log(testFungsi());
   ```
<br>
<br>

### **2. JavaScript Dasar - Data Type and Data Structure**

- Dalam Javascript terdapat beberapa yang masuk kedalam "Data Type dan Data Struktur" :
 ```
    1. String : Adalah tipe data yang tidak bisa diolah dalam bentuk aritmatika, namun tipe data ini dapat mengisi sebuah angka juga.
    2. Number : Pada Javascript tidak ada integer, float, dan lainnya. Melainkan adanya tipe data Number, tipe data ini dapat dilakukan proses aritmatika
    3. Math : Math ini menyediakan operasi aritmatika
    4. Primitive dan Non Primitive : Tipe data Primitive bersifat immutable, maksudnya dalam tipe data jenis ini nilai tidak dapat dirubah ataupun dimanipulasi. Begitu juga untuk Non-Primitive sebaliknya.
 ```


 ```
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "halooo" // "string"

typeof Math // "object"  (1)

typeof null // "object"  (2)

 ```

### **3. JavaScript Dasar - DOM Manipulation**

- DOM Manipulation merupakan sebuah Teknik, yang mana teknik ini sangatlah penting dalam dunia perwebsite-an apalagi jika kita menggunakan bahasa JavaScript. DOM Manipulation itu sendiri adalah teknik yang dapat membuat tampilan website menjadi lebih interaktif dan dinamis, disini kita juga bisa melakukan perubahan style pada HTML tanpa harus menggunakan CSS juga. Berikut adalah perintah untuk melakukan manipulasi DOM:


a. <b>innerHTML</b> : <hr> Merupakan perintah yang dapat menyisipkan sebuah value bertipe string pada sebuah variable. Dan unik nya lagi, pada DOM ini kita dapat menyisipkan element HTML lho.

```
    
    --html---------
    <body>
        <div id="vania"></div>
    </body>

    --js-----------
    let vania = document.getElementById("vania")
    console.log(vania)

    vania.innerHTML = ' <h1>Hai nama saya Vania</h1>
                  <p>Saya merupakan mahasiswa dari Studi
                  Independen Kampus Merdeka.</p>
          '

```
b. <b>innerText</b> : <hr> Mirip dengan innerHTML di atas. Perintah ini dapat menyisipkan sebuah value bertipe string pada sebuah variable, hanya saja pada innerText ini tidak bisa menyisipkan tag HTML.

```
    
    --html---------
    <body>
        <div id="vania"></div>
    </body>

    --js-----------
    let vania = document.getElementById("vania")
    console.log(vania)

    vania.innerText = 'Hai nama saya Vania. Saya merupakan mahasiswa dari Studi
                  Independen Kampus Merdeka.
          '

```

c. <b>.createElement</b> : <hr> Merupakan perintah manipulasi yang dapat menyisipkan sebuah element ke dalam tag HTML.

```

   let h1 = document.createElement("h1")
   h1.innerText = "FEBE-11"
   console.log(h1)

```
d. <b>.append</b> : <hr> Merupakan perintah manipulasi yang dapat menyisipkan sebuah element masuk ke dalam tag HTML seperti div.

```
   vania.append(h1)    -> "vania" adalah variable yang dideklarasikan untuk mendapatkan div dengan id="vania"
```
e. <b>.getAttribute</b> : <hr> Merupakan perintah manipulasi yang dapat melihat detail dari attribut.

```
let link = document.getElementsByClassName("link")[0]
console.log(link.getAttribute("href")); 
```
f. <b>.setAttribute</b> : <hr> Merupakan perintah manipulasi yang dapat menambahkan sebuah attribut.

```
link.setAttribute("id", "vania") // add attribute
console.log(link)
```
g. <b>.style.color/border/padding/backgroundColor</b> : <hr> Merupakan perintah manipulasi yang dapat menambahkan sebuah style kedalam element pada HTML.

```
link.style.color = "white"
link.style.border = "1px solid aqua"
link.style.padding = "5px 20px"
link.style.backgroundColor = "pink"
```

<b>Mengambil element HTML menggunakan DOM JS</b> dapat digunakan dengan cara di bawah ini :

1. Mengambil Element berdasarkan ID
```
  document.getElementById()
```

2. Mengambil Element berdasarkan Class
```
  document.getElementsByClassName()
```
3. Mengambil Element berdasarkan NamaTag
```
  document.getElementsByTagName()
```
4. Mengambil Element berdasarkan querySelector
```
  document.querySelector()
```
5. Mengambil Element berdasarkan querySelectorAll
```
  document.querySelectorAll()
```

### **4. JavaScript Dasar - Events dan Forms**

- Tahapan ini sangatlah berguna apabila website akan diaplikasikan dengan API yang telah dibuat oleh BackEnd nantinya. Karena tahapan ini akan menghubungkan antara user dan program untuk menyimpan dan mengolah data yang akan di input pada forms.

Contoh :
```
// contoh untuk FORM Submit event button

function logSubmit(event) {
    log.textContent = `Pesan telah Terkirim! Terimakasih.`;
    event.preventDefault();

}

form.addEventListener('submit', logSubmit)
```