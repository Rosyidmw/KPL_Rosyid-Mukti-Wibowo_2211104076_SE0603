class KodePos {
    constructor() {
        this.kodePosTable = [
            { kelurahan: "Batununggal", kodePos: "40266" },
            { kelurahan: "Kujangsari", kodePos: "40287" },
            { kelurahan: "Mengger", kodePos: "40267" },
            { kelurahan: "Wates", kodePos: "40256" },
            { kelurahan: "Cijaura", kodePos: "40287" },
            { kelurahan: "Jatisari", kodePos: "40286" },
            { kelurahan: "Margasari", kodePos: "40286" },
            { kelurahan: "Sekejati", kodePos: "40286" },
            { kelurahan: "Kebonwaru", kodePos: "40272" },
            { kelurahan: "Maleer", kodePos: "40274" },
            { kelurahan: "Samoja", kodePos: "40273" }
        ];
    }

    
    getKodePos(kelurahan) {
        const result = this.kodePosTable.find(
            (item) => item.kelurahan.toLowerCase() === kelurahan.toLowerCase()
        );
        if (result) {
            return result.kodePos;
        } else {
            return "Kode pos tidak ditemukan!";
        }
    }
}


const kodePos = new KodePos(); 

console.log("Kode Pos Batununggal: " + kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Kujangsari: " + kodePos.getKodePos("Kujangsari"));
console.log("Kode Pos Mengger: " + kodePos.getKodePos("Mengger"));
console.log("Kode Pos Margasari: " + kodePos.getKodePos("Margasari"));
console.log("Kode Pos Tidak Ada: " + kodePos.getKodePos("Tidak Ada")); 
