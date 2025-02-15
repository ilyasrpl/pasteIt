# ShareText API

## Deskripsi

ShareText API adalah aplikasi web yang memungkinkan pengguna untuk membuat dan mengakses teks yang dapat dibagikan.

## Fitur

* Membuat teks baru dengan metode POST
* Mengakses teks yang sudah ada dengan metode GET

## Endpoint

### GET /:pasteId

* Mengakses teks yang sudah ada dengan ID yang diberikan
* Contoh: `GET /1234567890`

### POST /

* Membuat teks baru dengan data yang diberikan
* Contoh: `POST /` dengan data `{ "text": "Hello World!" }`

## Instalasi

1. Clone repository ini
2. Buat file `.env` di direktori root project dan isi dengan variabel-variabel yang diperlukan, seperti file .env_example
3. Jalankan `npm install` untuk menginstal dependencies
4. Jalankan `npm start` untuk memulai aplikasi

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request dengan perubahan yang Anda inginkan.