// Declaración de variables globales y elementos del DOM para ambos juegos
let bottlePlayerNames = [], isSpinning = false, isSpicyModeBottle = false;
let vrPlayerNames = [], isRolling = false, isSpicyModeVR = false;
let customTruths = [], customDares = [];

// Elementos del menú principal
const mainMenu = document.getElementById('main-menu');
const selectBottleGameBtn = document.getElementById('select-bottle-game-btn');
const selectTruthDareBtn = document.getElementById('select-truth-dare-btn');

// Elementos de la pantalla del juego de la botella
const bottleGame = document.getElementById('bottle-game');
const playerSetupBottle = document.getElementById('player-setup');
const mainGameBottle = document.getElementById('main-game-bottle');
const playersListBottle = document.getElementById('players-list-bottle');
const addPlayerBtnBottle = document.getElementById('add-player-btn-bottle');
const startGameBtnBottle = document.getElementById('start-game-btn');
const errorMessageBottle = document.getElementById('error-message-bottle');
const bottleSvg = document.getElementById('bottle-svg');
const spinBtn = document.getElementById('spin-btn');
const gameStatusBottle = document.getElementById('game-status-bottle');
const toggleSpicyBtnBottle = document.getElementById('toggle-spicy-btn-bottle');
const backToSetupBtnBottle = document.getElementById('back-to-setup-btn-bottle');
const backToMainFromSetupBottleBtn = document.getElementById('back-to-main-from-setup-bottle');
const backToMainFromGameBottleBtn = document.getElementById('back-to-main-from-game-bottle');

// Elementos de la pantalla de Verdad o Reto
const verdadORetoScreen = document.getElementById('verdad-o-reto');
const playerSetupVR = document.getElementById('player-setup-vr');
const mainGameVR = document.getElementById('main-game-vr');
const playersListVR = document.getElementById('players-list-vr');
const addPlayerBtnVR = document.getElementById('add-player-btn-vr');
const startVRBtn = document.getElementById('start-vr-btn');
const errorMessageVR = document.getElementById('error-message-vr');
const toggleSpicyBtnVR = document.getElementById('toggle-spicy-btn-vr');
const diceSvg = document.getElementById('dice-svg');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const vrChallengeType = document.getElementById('vr-challenge-type');
const vrPlayerName = document.getElementById('vr-player-name');
const vrChallengeText = document.getElementById('vr-challenge-text');
const backToSetupBtnVR = document.getElementById('back-to-setup-btn-vr');
const backToMainFromVRSetupBtn = document.getElementById('back-to-main-from-vr-setup');

// NUEVOS ELEMENTOS DEL TEMPORIZADOR
const timerContainer = document.getElementById('timer-container');
const timerCountdown = document.getElementById('timer-countdown');
const timerBar = document.getElementById('timer-bar');
const startTimerBtn = document.getElementById('start-timer-btn');
const diceContainer = document.getElementById('dice-container');

// NUEVOS ELEMENTOS DEL MODAL DE PREGUNTAS PERSONALIZADAS
const customQuestionsModal = document.getElementById('custom-questions-modal');
const openCustomQuestionsBtn = document.getElementById('open-custom-questions-btn');
const openCustomQuestionsVRBtn = document.getElementById('open-custom-questions-vr-btn');
const customTruthInput = document.getElementById('custom-truth-input');
const addCustomTruthBtn = document.getElementById('add-custom-truth-btn');
const customDareInput = document.getElementById('custom-dare-input');
const addCustomDareBtn = document.getElementById('add-custom-dare-btn');
const customTruthsList = document.getElementById('custom-truths-list');
const customDaresList = document.getElementById('custom-dares-list');
const closeModalBtn = document.getElementById('close-modal-btn');
const customTruthsSection = document.getElementById('custom-truths-section');
const customDaresSection = document.getElementById('custom-dares-section');

const embersContainer = document.getElementById('embers-container');

// --- LISTAS DE RETOS PICANTES PARA GIRAR LA BOTELLA ---
const spicyBottleDares = [
    'Besa el cuello de la persona a quien apunte la botella durante 10 segundos… sin usar las manos!',
    'Siéntate en las piernas de alguien del grupo y susurra algo al oído que haría ruborizar a cualquiera.',
    'Deja que la persona a quien apunte la botella te dé un chupetón en el cuello o en el brazo (¡visible!).',
    'Imita un orgasmo exagerado durante 15 segundos… ¡como si estuvieras en una película para adultos!',
    'Elige a alguien para hacer un baile sensual de regazo (lap dance) por 30 segundos.',
    'Quítate una prenda de ropa… y entrégasela a quien apunte la botella.',
    'Muestra tu ropa interior sin decir de qué color es… ¡que los demás adivinen!',
    'Besa a la persona a tu izquierda en los labios… pero con los ojos cerrados y imaginando que es tu crush.',
    'Deja que alguien del grupo te ponga crema en la espalda… ¡pero solo usando los labios!',
    'Simula una posesión sexual con un cojín… y grábate para subirlo a redes sociales por 5 minutos!',
    'Envía un audio gemiendo a un contacto aleatorio de tu teléfono… y no borres el mensaje.',
    'Haz una llamada falsa a tu ex o a tu crush y di: “Anoche fue increíble… ¿repetimos?”.',
    'Pon hielo en la boca y recorre el cuello de alguien del grupo hasta derretirlo.',
    'Deja que la persona que apunte la botella te haga 3 preguntas sexuales… y responde con total honestidad.',
    'Baila al ritmo de una canción erótica… ¡mientras alguien del grupo te quita una prenda con los dientes!',
    'Simula una escena de seducción con la persona más tímida del grupo.',
    'Publica en tu estado: “Busco compañía para esta noche… que sepa lo que hace” y deja que comenten durante 10 minutos.',
    'Da un masaje en los hombros a alguien… pero solo usando tus labios.',
    'Elige a dos personas del grupo y recrea un trío… ¡pero solo con miradas y gestos!',
    'Cuenta tu fantasía sexual más oscura… pero actuándola con un voluntario/a.'
];

// --- LISTAS DE VERDADES Y RETOS (MODIFICADAS) ---
// Lista de Retos
const generalDares = [
    'Dale un abrazo a la persona de tu derecha.', 'Imita a alguien del grupo hasta que adivinen quién es.',
    'Haz un TikTok improvisado sin música.', 'Di un piropo inventado.',
    'Canta una canción infantil.', 'Ponte un zapato en la cabeza hasta tu próximo turno.',
    'Haz 10 saltos gritando “soy el mejor”.', 'Manda un emoji raro al último chat de tu WhatsApp.',
    'Habla como bebé por 3 minutos.', 'Haz una pasarela como modelo.',
    'Haz 20 abdominales en frente de todos.', 'Come una mezcla rara que el grupo prepare (que sea comestible).',
    'Haz tu mejor imitación de un animal.', 'Publica una historia con la cara más rara que puedas hacer.',
    'Llama a alguien y cántale “Las mañanitas” como si fuera su cumpleaños.',
    'Haz una declaración de amor falsa a alguien del grupo.',
    'Actúa como si fueras un camarero tomando pedidos durante 2 minutos.',
    'Haz reír al grupo en menos de 30 segundos (si no, castigo).',
    'Di el abecedario pero al revés sin equivocarte.',
    'Habla con acento español/argentino/mexicano hasta tu siguiente turno.',
    'Baila sin música durante 40 segundos.', 'Deja que alguien revise tu galería (solo la primera foto).',
    'Haz una cara graciosa y mantenla 15 segundos.',
    'Cuenta un chiste malo, y si nadie se ríe, haces otro reto.',
    'Déjate tomar una foto graciosa y que alguien la suba a sus estados.'
];
// Retos picantes (manteniendo algunos de la versión anterior como ejemplo)
const spicyDares = [
    "Bésala donde ella/él elija...", "Imita una pose sensual...", "Lame o chupa algo del cuerpo de otro jugador...",
    "Muerde suavemente el cuello o el muslo...", "Quítate una prenda y pásala por el cuerpo de otro...",
    "Susurra al oído de alguien lo que te gustaría hacerle...", "Haz un striptease de 30 segundos...",
    "Dale un masaje con los labios...", "Deja que alguien te ate las manos y te dé órdenes...",
    "Haz que dos jugadores se besen por 10 segundos...", "Simula un orgasmo en voz alta...",
    "Ponle un cubito de hielo en la boca y bésala/o...", "Juega a 'verdad o reto' solo con retos sexuales...",
    "Elige a alguien para un 'body shot'...", "Dale nalgadas a alguien del 1 al 10...",
    "Haz que dos personas se den un beso de 10 segundos...", "Déjate vendar los ojos y adivina quién te toca...",
    "Escribe con tu lengua una letra en la piel de alguien...", "Haz un baile erótico en el regazo de alguien...",
    "Juega a '7 minutos en el cielo' con retos calientes..."
];

// Lista de Verdades
const generalTruths = [
    '¿Quién te gusta de aquí?', '¿Cuál ha sido tu mayor vergüenza en público?',
    '¿Cuál es tu secreto más raro?', '¿Has mentido en este juego?',
    '¿A quién del grupo besarías?', '¿Qué es lo más loco que has hecho por amor?',
    '¿Qué es lo que más miedo te da?', '¿Cuál fue tu peor cita?',
    '¿Has stalkeado a alguien en redes? ¿Quién?', 'Si pudieras cambiar algo de ti, ¿qué sería?',
    '¿Cuál es tu mayor miedo secreto?', '¿Qué es lo más vergonzoso que has buscado en internet?',
    '¿Con quién tuviste tu último sueño raro?',
    '¿Cuál es la mentira más grande que has dicho y no te han descubierto?',
    '¿Qué es lo que nunca le dirías a tus padres?', '¿Qué es lo más infantil que todavía haces?',
    '¿Qué cosa te daría mucha pena que alguien descubra de ti?', '¿Quién es tu “crush” famoso?',
    '¿Qué es lo más loco que harías por dinero?', 'A quién del grupo invitarías a salir primero?',
    '¿Qué es lo peor que has hecho en el colegio/trabajo?', '¿Cuál es tu apodo más vergonzoso?',
    '¿Cuál es tu peor hábito?', '¿Qué cosa harías si fueras invisible por un día?',
    '¿Quién es la persona más importante en tu vida ahora mismo?'
];
// Verdades picantes (manteniendo algunos de la versión anterior como ejemplo)
const spicyTruths = [
    "¿Cuál es la posición sexual que más te excita y por qué? (Detalles, ¡no te escapes!).",
    "¿Alguna vez has tenido sexo con alguien que no deberías? (Ej: jefe/a, amigo/a de tu pareja, etc.).",
    "¿Qué parte del cuerpo de alguien en esta habitación te gustaría explorar? (¡Di quién!).",
    "¿Has fingido un orgasmo? ¿Cuántas veces? (Y si nunca, ¿cómo lo lograste sin fingir?).",
    "¿Cuál es tu fantasía sexual más oscura o prohibida? (Sin juzgar, ¡confiesa!).",
    "¿Alguna vez te han cachado teniendo sexo o masturbándote? (Cuenta cómo reaccionaron).",
    "¿Qué es lo más loco que has hecho por calentura? (Ej: sexo en público, enviar nudes arriesgadas, etc.).",
    "¿Prefieres sexo salvaje y rápido o lento y romántico? (Y ¿por qué?).",
    "¿Has tenido un trío o un encuentro grupal? (Si no, ¿te gustaría?).",
    "¿Alguna vez has usado juguetes sexuales? (¿Cuál es tu favorito?).",
    "¿Qué es lo más raro que te ha excitado? (Algo que ni tú entiendas).",
    "¿Has tenido sexo con un desconocido/a? (¿Dónde y cómo pasó?).",
    "¿Alguna vez has grabado o tomado fotos hot? (¿Se filtraron alguna vez?).",
    "¿Qué app o red social has usado para ligar o encontrar sexo casual? (Tinder, Instagram, etc.).",
    "¿Has tenido sexo bajo los efectos del alcohol o drogas? (¿Te arrepientes?).",
    "¿Qué persona famosa o influencer te prendería aunque no sea tu tipo? (¡Nombra nombres!).",
    "¿Has fantaseado con alguien de este grupo? (Si es sí, ¡di quién!).",
    "¿Cuál es tu fetiche más raro? (Ej: pies, dominación, roleplay, etc.).",
    "¿Has rechazado a alguien por malo en la cama? (Cuenta cómo fue).",
    "Si tuvieras que elegir entre 'nunca más tener sexo' o 'tener sexo solo con la misma persona por el resto de tu vida', ¿qué elegirías?."
];

// --- GESTIÓN DE PREGUNTAS PERSONALIZADAS ---
function loadCustomQuestions() {
    customTruths = JSON.parse(localStorage.getItem('customTruths')) || [];
    customDares = JSON.parse(localStorage.getItem('customDares')) || [];
    renderCustomQuestions();
}

function saveCustomQuestions() {
    localStorage.setItem('customTruths', JSON.stringify(customTruths));
    localStorage.setItem('customDares', JSON.stringify(customDares));
}

function renderCustomQuestions() {
    customTruthsList.innerHTML = '';
    customDaresList.innerHTML = '';

    customTruths.forEach((truth, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-slate-800 p-3 rounded-xl';
        li.innerHTML = `
            <span class="text-gray-300">${truth}</span>
            <button class="remove-btn text-red-400 hover:text-red-300 transition-colors" data-type="truth" data-index="${index}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        `;
        customTruthsList.appendChild(li);
    });

    customDares.forEach((dare, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-slate-800 p-3 rounded-xl';
        li.innerHTML = `
            <span class="text-gray-300">${dare}</span>
            <button class="remove-btn text-red-400 hover:text-red-300 transition-colors" data-type="dare" data-index="${index}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        `;
        customDaresList.appendChild(li);
    });
    // Añadir event listeners para los botones de eliminar
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.currentTarget.dataset.type;
            const index = parseInt(e.currentTarget.dataset.index);
            if (type === 'truth') {
                customTruths.splice(index, 1);
            } else {
                customDares.splice(index, 1);
            }
            saveCustomQuestions();
            renderCustomQuestions();
        });
    });
}

// --- GESTIÓN DE PANTALLAS Y ESTADO ---
function resetGameStates() {
    isSpinning = false;
    gameStatusBottle.textContent = 'Haz clic en la botella para girarla.';
    bottleSvg.classList.remove('spinning');
    bottleSvg.style.transform = 'rotate(0deg)';
    playerSetupBottle.classList.remove('hidden');
    mainGameBottle.classList.add('hidden');

    isRolling = false;
    vrChallengeType.textContent = '';
    vrPlayerName.textContent = '';
    vrChallengeText.textContent = '';
    diceSvg.classList.remove('dice-rolling');

    playerSetupVR.classList.remove('hidden');
    mainGameVR.classList.add('hidden');
    diceContainer.classList.remove('hidden');
    rollDiceBtn.classList.remove('hidden');

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerContainer.classList.remove('active');
        timerCountdown.classList.remove('palpitate');
    }

    const pulsatingPlayer = document.querySelector('.player-selected-pulse');
    if(pulsatingPlayer) {
         pulsatingPlayer.classList.remove('player-selected-pulse');
    }
}

function showScreen(screenId) {
    if (screenId === 'main-menu') {
        resetGameStates();
        isSpicyModeBottle = false;
        isSpicyModeVR = false;
        localStorage.setItem('isSpicyModeBottle', 'false');
        localStorage.setItem('isSpicyModeVR', 'false');

        updateSpicyModeUI(isSpicyModeBottle, toggleSpicyBtnBottle, 'bottle');
        updateSpicyModeUI(isSpicyModeVR, toggleSpicyBtnVR, 'vr');
    }

    mainMenu.classList.add('hidden');
    bottleGame.classList.add('hidden');
    verdadORetoScreen.classList.add('hidden');
    customQuestionsModal.style.display = 'none';

    document.getElementById(screenId).classList.remove('hidden');
}

// --- GESTIÓN DE JUGADORES Y TEMAS PARA GIRAR LA BOTELLA ---
function loadPlayerNamesBottle() {
    const savedNames = localStorage.getItem('bottlePlayerNames');
    bottlePlayerNames = savedNames ? JSON.parse(savedNames) : ['', ''];
    renderPlayerInputsBottle();
}
function renderPlayerInputsBottle() {
    playersListBottle.innerHTML = '';
    bottlePlayerNames.forEach((name, index) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'flex items-center space-x-2';
        newDiv.innerHTML = `<input type="text" value="${name}" placeholder="Nombre del jugador ${index + 1}" class="player-name-input flex-grow bg-slate-800 text-white rounded-xl p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-colors">`;
        playersListBottle.appendChild(newDiv);
    });
}
function addPlayerInputBottle() {
    bottlePlayerNames = Array.from(playersListBottle.querySelectorAll('.player-name-input')).map(input => input.value);
    bottlePlayerNames.push('');
    renderPlayerInputsBottle();
}
function loadSpicyModeBottle() {
    isSpicyModeBottle = localStorage.getItem('isSpicyModeBottle') === 'true';
    updateSpicyModeUI(isSpicyModeBottle, toggleSpicyBtnBottle, 'bottle');
}

addPlayerBtnBottle.addEventListener('click', addPlayerInputBottle);
startGameBtnBottle.addEventListener('click', () => {
    bottlePlayerNames = Array.from(playersListBottle.querySelectorAll('.player-name-input')).map(input => input.value.trim()).filter(name => name);
    localStorage.setItem('bottlePlayerNames', JSON.stringify(bottlePlayerNames));
    if (bottlePlayerNames.length < 2) {
        errorMessageBottle.classList.remove('hidden');
    } else {
        errorMessageBottle.classList.add('hidden');
        playerSetupBottle.classList.add('hidden');
        mainGameBottle.classList.remove('hidden');
    }
});
toggleSpicyBtnBottle.addEventListener('click', () => {
    isSpicyModeBottle = !isSpicyModeBottle;
    localStorage.setItem('isSpicyModeBottle', String(isSpicyModeBottle));
    updateSpicyModeUI(isSpicyModeBottle, toggleSpicyBtnBottle, 'bottle');
});
backToSetupBtnBottle.addEventListener('click', () => {
    mainGameBottle.classList.add('hidden');
    playerSetupBottle.classList.remove('hidden');
    gameStatusBottle.textContent = 'Haz clic en la botella para girarla.';
});

// --- GESTIÓN DE JUGADORES Y TEMAS PARA VERDAD O RETO ---
function loadPlayerNamesVR() {
    const savedNames = localStorage.getItem('vrPlayerNames');
    vrPlayerNames = savedNames ? JSON.parse(savedNames) : ['', ''];
    renderPlayerInputsVR();
}
function renderPlayerInputsVR() {
    playersListVR.innerHTML = '';
    vrPlayerNames.forEach((name, index) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'flex items-center space-x-2';
        newDiv.innerHTML = `<input type="text" value="${name}" placeholder="Nombre del jugador ${index + 1}" class="player-name-input flex-grow bg-slate-800 text-white rounded-xl p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-colors">`;
        playersListVR.appendChild(newDiv);
    });
}
function addPlayerInputVR() {
    vrPlayerNames = Array.from(playersListVR.querySelectorAll('.player-name-input')).map(input => input.value);
    vrPlayerNames.push('');
    renderPlayerInputsVR();
}
function loadSpicyModeVR() {
    isSpicyModeVR = localStorage.getItem('isSpicyModeVR') === 'true';
    updateSpicyModeUI(isSpicyModeVR, toggleSpicyBtnVR, 'vr');
}

addPlayerBtnVR.addEventListener('click', addPlayerInputVR);
startVRBtn.addEventListener('click', () => {
    vrPlayerNames = Array.from(playersListVR.querySelectorAll('.player-name-input')).map(input => input.value.trim()).filter(name => name);
    localStorage.setItem('vrPlayerNames', JSON.stringify(vrPlayerNames));
    if (vrPlayerNames.length < 2) {
        errorMessageVR.classList.remove('hidden');
    } else {
        errorMessageVR.classList.add('hidden');
        playerSetupVR.classList.add('hidden');
        mainGameVR.classList.remove('hidden');
        vrChallengeType.textContent = '¡Presiona el dado para empezar!';
        vrPlayerName.textContent = '';
        vrChallengeText.textContent = '';
        rollDiceBtn.classList.remove('hidden');
        diceContainer.classList.remove('hidden');
        timerContainer.classList.remove('active');
    }
});
toggleSpicyBtnVR.addEventListener('click', () => {
    isSpicyModeVR = !isSpicyModeVR;
    localStorage.setItem('isSpicyModeVR', String(isSpicyModeVR));
    updateSpicyModeUI(isSpicyModeVR, toggleSpicyBtnVR, 'vr');
});
backToSetupBtnVR.addEventListener('click', () => {
    mainGameVR.classList.add('hidden');
    playerSetupVR.classList.remove('hidden');
});

// --- LÓGICA GENERAL Y DE TEMA ---
function createEmbers(count) {
    if (!embersContainer) return;
    embersContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const ember = document.createElement('div');
        ember.className = 'ember';
        const size = Math.random() * 5 + 2; // de 2 a 7px
        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        ember.style.left = `${Math.random() * 100}vw`;
        ember.style.animationDuration = `${Math.random() * 8 + 7}s`; // 7 a 15 segundos
        ember.style.animationDelay = `${Math.random() * 7}s`;
        ember.style.boxShadow = `0 0 ${size}px #ffca28, 0 0 ${size*2}px #ff8f00, 0 0 ${size*3}px #e65100`;
        embersContainer.appendChild(ember);
    }
}

function updateSpicyModeUI(isSpicy, button, gameId) {
    if (isSpicy) {
        if (button) {
            button.classList.replace('bg-slate-800', 'bg-red-600');
            button.classList.replace('hover:bg-slate-700', 'hover:bg-red-500');
        }
        document.body.classList.add('spicy-theme');
        createEmbers(30);
    } else {
        if (button) {
            button.classList.replace('bg-red-600', 'bg-slate-800');
            button.classList.replace('hover:bg-red-500', 'hover:bg-slate-700');
        }
        const isOtherSpicy = (gameId === 'bottle' && isSpicyModeVR) || (gameId === 'vr' && isSpicyModeBottle);
        if (!isOtherSpicy) {
            document.body.classList.remove('spicy-theme');
            if (embersContainer) embersContainer.innerHTML = '';
        }
    }
}

// --- LÓGICA DEL JUEGO DE LA BOTELLA (CORREGIDA) ---
function spinBottle() {
    if (isSpinning) return;
    if (bottlePlayerNames.length < 2) {
        gameStatusBottle.innerHTML = `¡Debes añadir al menos 2 jugadores!`;
        return;
    }
    isSpinning = true;
    gameStatusBottle.textContent = '¡Girando...!';

    const randomAngle = Math.random() * 360 + 7200;
    bottleSvg.style.setProperty('--spin-angle', `${randomAngle}deg`);
    bottleSvg.classList.add('spinning');

    const player1Index = Math.floor(Math.random() * bottlePlayerNames.length);
    let player2Index;
    do {
        player2Index = Math.floor(Math.random() * bottlePlayerNames.length);
    } while (player2Index === player1Index && bottlePlayerNames.length > 1);

    const player1 = bottlePlayerNames[player1Index];
    const player2 = bottlePlayerNames[player2Index];

    function onTransitionEnd() {
        bottleSvg.classList.remove('spinning');
        bottleSvg.removeEventListener('transitionend', onTransitionEnd);
        isSpinning = false;
        
        // Se elimina la lógica de "Verdad o Reto" en la botella
        if (isSpicyModeBottle) {
            // Obtiene los retos picantes y los retos personalizados
            const allSpicyDares = [...spicyBottleDares, ...customDares];
            const randomDare = allSpicyDares[Math.floor(Math.random() * allSpicyDares.length)];
            gameStatusBottle.innerHTML = `¡La botella apunta a <span class="font-extrabold dynamic-color player-selected-pulse">${player2}</span>!<br><span class="text-lg text-red-400 mt-2 font-bold">${randomDare}</span>`;
        } else {
            gameStatusBottle.innerHTML = `¡La botella apunta a <span class="font-extrabold dynamic-color player-selected-pulse">${player1}</span> y <span class="font-extrabold dynamic-color player-selected-pulse">${player2}</span>!<br>¡Se besan!`;
        }
    }

    bottleSvg.addEventListener('transitionend', onTransitionEnd);
}

spinBtn.addEventListener('click', spinBottle);
bottleSvg.addEventListener('click', spinBottle);

// --- LÓGICA DEL JUEGO DE VERDAD O RETO ---
let timerInterval;

function getQuestions(type) {
    let baseQuestions = [];
    let customQuestions = [];
    if (type === 'RETO') {
        baseQuestions = isSpicyModeVR ? spicyDares : generalDares;
        customQuestions = customDares;
    } else {
        baseQuestions = isSpicyModeVR ? spicyTruths : generalTruths;
        customQuestions = customTruths;
    }
    return [...baseQuestions, ...customQuestions];
}

function startChallengeTimer(duration) {
    let timeLeft = duration;
    timerCountdown.textContent = timeLeft;
    timerBar.style.width = '100%';

    timerContainer.classList.add('active');
    diceContainer.classList.add('hidden');
    rollDiceBtn.classList.add('hidden');
    startTimerBtn.classList.remove('hidden');

    startTimerBtn.onclick = () => {
        startTimerBtn.classList.add('hidden');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerCountdown.textContent = timeLeft;

            const progress = (timeLeft / duration) * 100;
            timerBar.style.width = `${progress}%`;

            if (timeLeft <= 3 && timeLeft > 0) {
                timerCountdown.classList.add('palpitate');
            } else if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerCountdown.textContent = '¡TIEMPO!';
                timerBar.style.width = '0%';
                timerCountdown.classList.remove('palpitate');
                setTimeout(() => {
                    timerContainer.classList.remove('active');
                    diceContainer.classList.remove('hidden');
                    rollDiceBtn.classList.remove('hidden');
                }, 2000);
            }
        }, 1000);
    };
}

function rollDice() {
    if (isRolling) return;
    if (vrPlayerNames.length < 2) {
        vrChallengeType.innerHTML = `¡Debes añadir al menos 2 jugadores!`;
        return;
    }
    isRolling = true;
    vrChallengeType.textContent = 'Girando...';
    vrPlayerName.textContent = '';
    vrChallengeText.textContent = ''; // Limpiar texto anterior

    timerContainer.classList.remove('active');
    diceContainer.classList.remove('hidden');
    rollDiceBtn.classList.add('hidden');

    diceSvg.classList.add('dice-rolling');

    setTimeout(() => {
        diceSvg.classList.remove('dice-rolling');
        isRolling = false;
        rollDiceBtn.classList.remove('hidden');

        const randomPlayerIndex = Math.floor(Math.random() * vrPlayerNames.length);
        const randomPlayer = vrPlayerNames[randomPlayerIndex];

        vrPlayerName.textContent = randomPlayer;
        vrPlayerName.classList.add('player-selected-pulse');

        setTimeout(() => {
            vrPlayerName.classList.remove('player-selected-pulse');
        }, 3000);

        const challengeType = Math.random() > 0.5 ? 'RETO' : 'VERDAD';
        const questionsToUse = getQuestions(challengeType);
        const randomChallenge = questionsToUse[Math.floor(Math.random() * questionsToUse.length)];

        if (challengeType === 'RETO') {
            vrChallengeType.innerHTML = `<span class="challenge-red">RETO</span>`;
            vrChallengeText.textContent = randomChallenge;

            const match = randomChallenge.match(/(\d+) segundos/);
            if (match) {
                const duration = parseInt(match[1], 10);
                diceContainer.classList.add('hidden');
                rollDiceBtn.classList.add('hidden');
                startChallengeTimer(duration);
            } else {
                 diceContainer.classList.remove('hidden');
                 rollDiceBtn.classList.remove('hidden');
            }

        } else {
            vrChallengeType.textContent = 'VERDAD';
            vrChallengeType.classList.remove('challenge-red');
            vrChallengeText.textContent = randomChallenge;
        }

    }, 2000);
}

rollDiceBtn.addEventListener('click', rollDice);

// --- Eventos para el modal de preguntas personalizadas ---
function openCustomQuestionsModal(gameType) {
    if (gameType === 'bottle') {
        customTruthsSection.style.display = 'none';
        customDaresSection.style.display = 'block';
    } else {
        customTruthsSection.style.display = 'block';
        customDaresSection.style.display = 'block';
    }
    customQuestionsModal.style.display = 'flex';
}

openCustomQuestionsBtn.addEventListener('click', () => openCustomQuestionsModal('bottle'));
openCustomQuestionsVRBtn.addEventListener('click', () => openCustomQuestionsModal('vr'));

closeModalBtn.addEventListener('click', () => {
    customQuestionsModal.style.display = 'none';
});
addCustomTruthBtn.addEventListener('click', () => {
    const newTruth = customTruthInput.value.trim();
    if (newTruth) {
        customTruths.push(newTruth);
        saveCustomQuestions();
        renderCustomQuestions();
        customTruthInput.value = '';
    }
});
addCustomDareBtn.addEventListener('click', () => {
    const newDare = customDareInput.value.trim();
    if (newDare) {
        customDares.push(newDare);
        saveCustomQuestions();
        renderCustomQuestions();
        customDareInput.value = '';
    }
});

// Eventos para la navegación de pantallas
selectBottleGameBtn.addEventListener('click', () => {
    showScreen('bottle-game');
    loadPlayerNamesBottle();
    loadSpicyModeBottle();
});
selectTruthDareBtn.addEventListener('click', () => {
    showScreen('verdad-o-reto');
    loadPlayerNamesVR();
    loadSpicyModeVR();
});

// Eventos para los botones de flecha
backToMainFromSetupBottleBtn.addEventListener('click', () => showScreen('main-menu'));
backToMainFromGameBottleBtn.addEventListener('click', () => showScreen('main-menu'));
backToMainFromVRSetupBtn.addEventListener('click', () => showScreen('main-menu'));

// Cargar estado inicial al cargar la página
loadPlayerNamesBottle();
loadSpicyModeBottle();
loadPlayerNamesVR();
loadSpicyModeVR();
loadCustomQuestions();
