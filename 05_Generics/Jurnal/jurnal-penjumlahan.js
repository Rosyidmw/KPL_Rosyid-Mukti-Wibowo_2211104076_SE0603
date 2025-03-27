class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
      let numA = parseFloat(a);
      let numB = parseFloat(b);
      let numC = parseFloat(c);
      
      // Lakukan penjumlahan
      const total = numA + numB + numC;
      console.log(`Hasil penjumlahan: ${total}`);
    }
}

const penjumlahan = new Penjumlahan();
penjumlahan.JumlahTigaAngka("22", "11", "10"); // NIM saya 2211104076
penjumlahan.JumlahTigaAngka("10", "40", "76"); // NIM saya 2211104076