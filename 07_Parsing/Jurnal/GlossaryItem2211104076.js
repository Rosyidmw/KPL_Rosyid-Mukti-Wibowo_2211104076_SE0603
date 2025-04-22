const fs = require('fs');

class GlossaryItem2211104076 {
    constructor() {
        this.data = null;
    }

    ReadJSON() {
        try {
            // Membaca dan parsing file JSON
            const rawData = fs.readFileSync('./jurnal7_3_2211104076.json');
            this.data = JSON.parse(rawData);

            // Mengambil bagian GlossEntry
            const entry = this.data.glossary.GlossDiv.GlossList.GlossEntry;

            // Menampilkan informasi GlossEntry dengan format bebas
            console.log("=== Glossary Entry ===");
            console.log(`ID           : ${entry.ID}`);
            console.log(`SortAs       : ${entry.SortAs}`);
            console.log(`GlossTerm    : ${entry.GlossTerm}`);
            console.log(`Acronym      : ${entry.Acronym}`);
            console.log(`Abbreviation : ${entry.Abbrev}`);
            console.log(`Definition   : ${entry.GlossDef.para}`);
            console.log(`See Also     : ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
            console.log(`See          : ${entry.GlossSee}`);

            return entry;
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
            return null;
        }
    }
}

// Contoh penggunaan
const glossary = new GlossaryItem2211104076();
glossary.ReadJSON();

module.exports = GlossaryItem2211104076;
