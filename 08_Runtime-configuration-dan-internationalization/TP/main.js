const fs = require('fs');
const readline = require('readline');

// ==== CLASS DEFINITION ====
class CovidConfig {
  constructor(filename = 'covid_config.json') {
    this.filename = filename;
    this.defaultConfig = {
      satuan_suhu: 'celcius',
      batas_hari_deman: 14,
      pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
      pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini',
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.filename)) {
      const rawData = fs.readFileSync(this.filename);
      return JSON.parse(rawData);
    } else {
      return { ...this.defaultConfig };
    }
  }

  saveConfig() {
    fs.writeFileSync(this.filename, JSON.stringify(this.config, null, 2));
  }

  ubahSatuan() {
    if (this.config.satuan_suhu === 'celcius') {
      this.config.satuan_suhu = 'fahrenheit';
    } else {
      this.config.satuan_suhu = 'celcius';
    }
    this.saveConfig();
  }

  getConfig() {
    return this.config;
  }
}

// ==== PROGRAM UTAMA ====
const covid = new CovidConfig();

// Ubah satuan suhu saat program dijalankan
covid.ubahSatuan();
const config = covid.getConfig();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhu) => {
  rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? ', (hari) => {
    const suhuAngka = parseFloat(suhu);
    const hariAngka = parseInt(hari);

    let suhuValid = false;
    if (config.satuan_suhu === 'celcius') {
      suhuValid = suhuAngka >= 36.5 && suhuAngka <= 37.5;
    } else if (config.satuan_suhu === 'fahrenheit') {
      suhuValid = suhuAngka >= 97.7 && suhuAngka <= 99.5;
    }

    const hariValid = hariAngka < config.batas_hari_deman;

    if (suhuValid && hariValid) {
      console.log(config.pesan_diterima);
    } else {
      console.log(config.pesan_ditolak);
    }

    rl.close();
  });
});
