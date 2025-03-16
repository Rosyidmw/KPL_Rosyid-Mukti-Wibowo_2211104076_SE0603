const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const State = {
    TERKUNCI: 'TERKUNCI',
    TERBUKA: 'TERBUKA',
    EXIT: 'EXIT'
};

let state = State.TERKUNCI; 

const screenNames = {
    [State.TERKUNCI]: 'Pintu terkunci',
    [State.TERBUKA]: 'Pintu tidak terkunci',
    [State.EXIT]: 'Keluar'
};

function displayScreen() {
    console.log(`\nStatus: ${screenNames[state]}`);
    rl.question('Masukkan perintah (BUKA/KUNCI/EXIT): ', (command) => {
        handleCommand(command.toUpperCase());
    });
}

function handleCommand(command) {
    switch (state) {
        case State.TERKUNCI:
            if (command === 'BUKA') {
                state = State.TERBUKA;
            } else if (command === 'EXIT') {
                state = State.EXIT;
            } else {
                console.log('Perintah tidak valid saat pintu terkunci!');
            }
            break;

        case State.TERBUKA:
            if (command === 'KUNCI') {
                state = State.TERKUNCI;
            } else if (command === 'EXIT') {
                state = State.EXIT;
            } else {
                console.log('Perintah tidak valid saat pintu terbuka!');
            }
            break;
    }

    if (state !== State.EXIT) {
        displayScreen(); 
    } else {
        console.log('Program selesai. Bye!');
        rl.close(); 
    }
}

displayScreen();
