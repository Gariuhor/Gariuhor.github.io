const REPO_OWNER = 'YOUR_GITHUB_USERNAME';
const REPO_NAME = 'YOUR_REPOSITORY_NAME';
const FILE_PATH = 'phrases.json';

const getPhrases = async () => {
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        headers: {
            'Authorization': `token ${process.env.GH_TOKEN}`
        }
    });
    const data = await response.json();
    return JSON.parse(atob(data.content));
};

const savePhrases = async (phrases) => {
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${process.env.GH_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Update phrases',
            content: btoa(JSON.stringify(phrases)),
            sha: (await getPhrases()).sha
        })
    });
    return response.json();
};

document.getElementById('encryptBtn').addEventListener('click', async () => {
    const phrase = prompt('Introduce la frase a encriptar:');
    if (phrase) {
        let phrases = await getPhrases();
        let code;
        do {
            code = Math.floor(1000000000 + Math.random() * 9000000000).toString();
        } while (phrases[code]);
        phrases[code] = phrase;
        await savePhrases(phrases);
        alert(`Frase encriptada. Código: ${code}`);
    }
});

document.getElementById('decryptBtn').addEventListener('click', async () => {
    const code = prompt('Introduce el código de 10 dígitos:');
    if (code) {
        const phrases = await getPhrases();
        if (phrases[code]) {
            alert(`Frase desencriptada: ${phrases[code]}`);
        } else {
            alert('Código no encontrado.');
        }
    }
});
