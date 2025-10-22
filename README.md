# Bookshelf API
Proyek Bookshelf API adalah backend sederhana berbasis Hapi.js yang memungkinkan pengguna untuk menambahkan, menampilkan, memperbarui, dan menghapus data buku.

## Fitur Utama
- Tambah buku baru
- Lihat semua buku
- Lihat detail buku berdasarkan ID
- Perbarui data buku
- Hapus buku

## Instalasi

#### Clone repositori ini
```bash
git clone https://github.com/Dryann151021/bookself-api.git
cd bookself-api-main
```
#### Instal dependensi
```bash
npm install
```
#### Jalankan server
```bash
npm run start
```

## Endpoint Utama
| Method | Endpoint      | Deskripsi          |
| ------ | ------------- | ------------------ |
| POST   | `/books`      | Tambah buku baru   |
| GET    | `/books`      | Ambil semua buku   |
| GET    | `/books/{id}` | Ambil detail buku  |
| PUT    | `/books/{id}` | Perbarui data buku |
| DELETE | `/books/{id}` | Hapus buku         |
