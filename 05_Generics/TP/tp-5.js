class HaloGeneric {
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

const hai = new HaloGeneric();
hai.SapaUser("Rosyid"); 

class DataGeneric {
    constructor(data) {
        this.data = data; 
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataNIM = new DataGeneric("2211104076"); 
dataNIM.PrintData();