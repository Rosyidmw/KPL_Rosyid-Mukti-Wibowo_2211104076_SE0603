const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    ubahState(stateBaru) {
        let nim = 2211104076;
        if (nim % 3 === 1) {
            if (stateBaru === "Berdiri") console.log("posisi standby");
            if (stateBaru === "Tengkurap") console.log("posisi istirahat");
        }
        if (nim % 3 === 2) {
            if (this.state === "Terbang" && stateBaru === "Jongkok") console.log("posisi landing");
            if (this.state === "Berdiri" && stateBaru === "Terbang") console.log("posisi take off");
        }
        this.state = stateBaru;
        console.log(`State sekarang: ${this.state}`);
    }

    tekanTombolS() {
        let nim = 2211104076;
        if (nim % 3 === 0) console.log("tombol arah bawah ditekan");
        if (this.state === "Berdiri") this.ubahState("Jongkok");
        else if (this.state === "Jongkok") this.ubahState("Tengkurap");
    }

    tekanTombolW() {
        let nim = 2211104076;
        if (nim % 3 === 0) console.log("tombol arah atas ditekan");
        if (this.state === "Jongkok") this.ubahState("Berdiri");
        else if (this.state === "Berdiri") this.ubahState("Terbang");
    }

    tekanTombolX() {
        if (this.state === "Tengkurap") this.ubahState("Jongkok");
    }
}

const karakter = new PosisiKarakterGame();
console.log(`State awal: ${karakter.state}`);

karakter.tekanTombolS();
karakter.tekanTombolS();
karakter.tekanTombolX();
karakter.tekanTombolW();
karakter.tekanTombolW();

console.log(`State akhir: ${karakter.state}`);

function tanyaUser() {
    readline.question('Masukkan state baru (Berdiri, Jongkok, Tengkurap, Terbang) atau ketik "exit" untuk keluar: ', (input) => {
        if (input === "exit") {
            console.log("Program selesai.");
            readline.close();
            return;
        }

        if (["Berdiri", "Jongkok", "Tengkurap", "Terbang"].includes(input)) {
            karakter.ubahState(input);
        } else {
            console.log("Input tidak valid!");
        }
        tanyaUser();
    });
}

tanyaUser();
