class KodeBuah {
    constructor() {
        this.kodeBuahTable = [
            { namaBuah: "Apel", kodeBuah: "A00" },
            { namaBuah: "Aprikot", kodeBuah: "B00" },
            { namaBuah: "Alpukat", kodeBuah: "C00" },
            { namaBuah: "Pisang", kodeBuah: "D00" },
            { namaBuah: "Paprika", kodeBuah: "E00" },
            { namaBuah: "Blackberry", kodeBuah: "F00" },
            { namaBuah: "Ceri", kodeBuah: "H00" },
            { namaBuah: "Kelapa", kodeBuah: "I00" },
            { namaBuah: "Jagung", kodeBuah: "J00" },
            { namaBuah: "Kurma", kodeBuah: "K00" },
            { namaBuah: "Durian", kodeBuah: "L00" },
            { namaBuah: "Anggur", kodeBuah: "M00" },
            { namaBuah: "Melon", kodeBuah: "N00" },
            { namaBuah: "Semangka", kodeBuah: "O00" },
        ];
    }

    getKodeBuah(namaBuah) {
        const result = this.kodeBuahTable.find(
            (item) => item.namaBuah.toLowerCase() === namaBuah.toLowerCase()
        );
        if (result) {
            return result.kodeBuah;
        } else {
            return "Kode buah tidak ditemukan!";
        }
    }
}

// Main
const kodeBuah = new KodeBuah();

// Contoh pemanggilan method getKodeBuah
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));
console.log("Kode Buah Paprika: " + kodeBuah.getKodeBuah("Paprika"));
console.log("Kode Buah Jagung: " + kodeBuah.getKodeBuah("Jagung"));
console.log("Kode Buah Tidak Ada: " + kodeBuah.getKodeBuah("Tidak Ada"));
