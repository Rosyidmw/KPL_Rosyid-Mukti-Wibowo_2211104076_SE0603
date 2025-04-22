const fs = require('fs');

class TeamMembers2211104076 {
    constructor() {
        this.data = null;
    }

    ReadJSON() {
        try {
            // Membaca file JSON
            const rawData = fs.readFileSync('./jurnal7_2_2211104076.json');

            // Parsing data menjadi object JavaScript
            this.data = JSON.parse(rawData);

            // Menampilkan hasil deserialisasi sesuai format
            console.log("Team member list:");
            this.data.members.forEach(member => {
                console.log(`${member.nim} ${member.firstName} ${member.lastName}  (${member.age} ${member.gender})`);
            });

            return this.data;
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
            return null;
        }
    }
}

// Contoh penggunaan
const team = new TeamMembers2211104076();
team.ReadJSON();

module.exports = TeamMembers2211104076;
