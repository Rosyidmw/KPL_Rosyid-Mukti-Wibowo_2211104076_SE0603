const fs = require('fs');

class DataMahasiswa2211104076 {
    constructor() {
        this.data = null;
    }

    ReadJSON() {
        try {
            // Membaca file JSON
            const rawData = fs.readFileSync('./jurnal7_1_2211104076.json');

            // Parsing data JSON menjadi object
            this.data = JSON.parse(rawData);

            // Menampilkan semua data dengan format bebas tapi lengkap
            console.log("===== Data Mahasiswa =====");
            console.log(`Nama Lengkap : ${this.data.firstName} ${this.data.lastName}`);
            console.log(`Jenis Kelamin: ${this.data.gender}`);
            console.log(`Usia         : ${this.data.age}`);
            console.log("Alamat       :");
            console.log(`  Jalan : ${this.data.address.streetAddress}`);
            console.log(`  Kota  : ${this.data.address.city}`);
            console.log(`  Prov  : ${this.data.address.state}`);
            console.log("Mata Kuliah  :");
            this.data.courses.forEach((course, index) => {
                console.log(`  MK ${index + 1}: ${course.code} - ${course.name}`);
            });

            return this.data;
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
            return null;
        }
    }
}

// Contoh penggunaan
const dataMhs = new DataMahasiswa2211104076();
dataMhs.ReadJSON();

module.exports = DataMahasiswa2211104076;
