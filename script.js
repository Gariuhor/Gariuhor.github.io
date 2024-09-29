const phrases = {};
const generateRandomNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};

document.getElementById('encryptBtn').addEventListener('click', () => {
    const phrase = prompt('Introduce la frase a encriptar:');
    if (phrase) {
        let code;
        do {
            code = generateRandomNumber();
        } while (phrases[code]);
        phrases[code] = phrase;
        alert(`Frase encriptada. Código: ${code}`);
    }
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const code = prompt('Introduce el código de 10 dígitos:');
    if (code && phrases[code]) {
        alert(`Frase desencriptada: ${phrases[code]}`);
    } else {
        alert('Código no encontrado.');
    }
});
