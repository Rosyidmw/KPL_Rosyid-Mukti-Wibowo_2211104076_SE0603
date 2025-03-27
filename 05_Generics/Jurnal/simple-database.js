class SimpleDatabase {
    constructor() {
        this.storedData = []; 
        this.inputDates = []; 
    }

    AddNewData(data) {
        this.storedData.push(data); 
        this.inputDates.push(new Date()); 
    }
    
    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu ${this.inputDates[index]}`);
        });
    }
}

const database = new SimpleDatabase();
database.AddNewData("11");
database.AddNewData("04");
database.AddNewData("76");

database.PrintAllData();