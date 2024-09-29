document.getElementById('login-btn').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' && password === '') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
    } else {
        alert('Deja de estar cagando el palo piche pendejo.');
    }
};

function openApp(app) {
    document.querySelectorAll('.app').forEach(a => a.classList.add('hidden'));
    document.getElementById(app).classList.remove('hidden');
}

function closeApp() {
    document.querySelectorAll('.app').forEach(a => a.classList.add('hidden'));
    document.getElementById('main-screen').classList.remove('hidden');
}

function calculate() {
    const input = document.getElementById('calc-input').value;
    try {
        const result = eval(input);
        document.getElementById('calc-output').innerText = 'Resultado: ' + result;
    } catch {
        document.getElementById('calc-output').innerText = 'Error en la expresión';
    }
}

function openLink() {
    const url = document.getElementById('url-input').value;
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('Por favor, introduce un link válido.');
    }
}

function shutdown() {
    if (confirm('¿Estás seguro de que deseas apagar?')) {
        window.close(); // Esto puede no funcionar en todos los navegadores.
    }
}
