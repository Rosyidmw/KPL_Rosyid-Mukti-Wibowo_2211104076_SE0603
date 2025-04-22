const fs = require('fs');

class KuliahMahasiswa2211104076 {
    constructor() {
        this.data = null;
    }

    ReadJSON() {
        try {
            // Membaca file JSON
            const rawData = fs.readFileSync('./tp7_2_2211104076.json');

            // Parsing JSON ke object
            this.data = JSON.parse(rawData);

            // Menampilkan hasil deserialisasi
            console.log("Daftar mata kuliah yang diambil:");
            this.data.courses.forEach((course, index) => {
                console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
            });

            return this.data;
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
            return null;
        }
    }
}

// Contoh penggunaan
const kuliah = new KuliahMahasiswa2211104076();
kuliah.ReadJSON();

module.exports = KuliahMahasiswa2211104076;
