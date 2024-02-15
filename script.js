// File JavaScript untuk situs web Kalkulator Suhu

// Mendapatkan elemen-elemen yang dibutuhkan
var form = document.getElementById("form");
var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");
var explanation = document.getElementById("explanation");

// Menambahkan event listener untuk form submit
form.addEventListener("submit", function (event) {
  // Mencegah perilaku default dari form submit
  event.preventDefault();

  // Mendapatkan nilai input dari pengguna
  var celsius = input.value;

  // Memvalidasi input pengguna
  if (celsius === "" || isNaN(celsius)) {
    // Jika input tidak valid, tampilkan pesan error
    output.textContent = "Input tidak valid";
    output.style.color = "red";
    explanation.textContent = "";
  } else {
    // Jika input valid, lakukan perhitungan konversi
    var fahrenheit = (celsius * 9) / 5 + 32;

    // Tampilkan hasil konversi
    output.textContent = celsius + "°C = " + fahrenheit + "°F";
    output.style.color = "#0099ff";

    // Tampilkan penjelasan hasil konversi
    explanation.textContent = "Suhu dalam derajat Fahrenheit (°F) sama dengan suhu dalam derajat Celsius (°C) dikali 9/5 dan ditambahkan dengan 32.";
  }
});
