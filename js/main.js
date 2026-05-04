/* ============================================
   6NAPSE — Game Logic
   ============================================ */

// ── GAME DATA ──────────────────────────────
const CHARACTERS = [
  {
    id: 'valeria',
    name: 'Valeria',
    age: '21',
    role: 'La mean girl',
    subtitle: 'Representa la sensibilidad basada en la validación externa',
    fear: 'No ser suficiente',
    sensitivity: 'Necesita sentirse admirada y valorada',
    personality: ['Sarcástica y segura en apariencia', 'Controladora y perfeccionista', 'Mantiene imagen impecable como defensa'],
    avatar: 'assets/ilustraciones/Valeria (1).png',
    portrait: 'assets/ilustraciones/Valeria (2).png',
    scenario: 'assets/escenarios/Es_valeria.jpg',
    phases: [
      {
        intro: '«Ay, hola. Estaba pensando en algo y quería preguntarte una cosa… ¿puedo?»',
        question: '¿Tú crees que la gente me habla porque les caigo bien o solo porque les conviene?',
        answers: [
          { text: 'Creo que te hablan porque les gusta estar contigo. A veces la gente no lo demuestra bien, pero eso no significa que no les importe.', correct: true },
          { text: 'Puede ser por interés, nunca se sabe, así funciona todo el mundo.', correct: false },
          { text: 'Si te lo preguntas tanto, igual es porque te afecta demasiado lo que piensen.', correct: false }
        ]
      },
      {
        intro: '«No sé… supongo que me rayo por tonterías, pero igual sí que me importa.»',
        question: 'Hoy subí una foto y tuvo menos likes de lo normal. ¿Tú crees que es porque salgo mal?',
        answers: [
          { text: 'No creo que tenga que ver contigo. A veces el algoritmo hace lo que quiere. ¡La foto está bien!', correct: true },
          { text: 'Bueno… quizá no era tu mejor foto.', correct: false },
          { text: 'Si te afecta tanto, deberías dejar de subir cosas o eliminar la visualización de me gustas.', correct: false }
        ]
      },
      {
        intro: '«Ya… me lo tomo demasiado en serio.»',
        question: 'A veces siento que si no hago todo perfecto, la gente deja de tomarme en serio.',
        answers: [
          { text: 'No tienes que ser perfecta para que te respeten. La gente que te valora de verdad no te mide por eso.', correct: true },
          { text: 'Bueno, si bajas el nivel, algunos sí lo notan.', correct: false },
          { text: 'Eso es cosa tuya, nadie te obliga a exigirte tanto.', correct: false }
        ]
      }
    ]
  },
  {
    id: 'mateo',
    name: 'Mateo',
    age: '75',
    role: 'El abuelo inseguro',
    subtitle: 'Sensibilidad: ser una carga para los demás',
    fear: 'Molestar o ser inútil',
    sensitivity: 'Teme que le hieran haciéndole sentir torpe o innecesario',
    personality: ['Amable y educado', 'Duda antes de hablar', 'Se disculpa por todo'],
    avatar: 'assets/ilustraciones/Mateo (1).png',
    portrait: 'assets/ilustraciones/Mateo (2).png',
    scenario: 'assets/escenarios/Es_mateo.jpg',
    phases: [
      {
        intro: '«Hola… ¿te pillo en buen momento? A veces este coche tarda un poco en arrancar… JAJA»',
        question: 'Últimamente tardo más en entender las cosas… ¿No te importa tener que explicármelas?',
        answers: [
          { text: 'No. Cada uno tiene su ritmo y no pasa nada. Me gusta ayudarte.', correct: true },
          { text: 'A veces sí, pero tengo bastante paciencia.', correct: false },
          { text: 'No es que me moleste, pero a veces me cuesta seguirte.', correct: false }
        ]
      },
      {
        intro: '«Gracias… A veces me da cosa ser una carga.»',
        question: 'A veces siento que ya no sirvo para mucho… ¿Tú me ves así?',
        answers: [
          { text: 'Para mí sigues siendo importante. No tienes que demostrar nada.', correct: true },
          { text: 'No lo sé… supongo que es algo normal a tu edad.', correct: false },
          { text: 'Yo no me preocuparía por eso, no es tan grave.', correct: false }
        ]
      },
      {
        intro: '«Tienes razón, debería dar importancia a lo importante.»',
        question: 'Perdona si hablo demasiado… es que no tengo a mucha gente con quien conversar.',
        answers: [
          { text: 'No tienes que disculparte. Me gusta que compartas cosas conmigo.', correct: true },
          { text: 'Bueno sí, hablas bastante, pero no importa.', correct: false },
          { text: 'Bueno… quizá solo estabas hablando sin darte cuenta.', correct: false }
        ]
      }
    ]
  },
  {
    id: 'axel',
    name: 'Axel',
    age: '17',
    role: 'El chico duro',
    subtitle: 'Sensibilidad: parecer débil o vulnerable',
    fear: 'Ser vulnerable',
    sensitivity: 'Su actitud dura es una coraza que oculta soledad y miedo',
    personality: ['Impulsivo y a la defensiva', 'Reacciona rápido para protegerse', 'Teme que descubran sus emociones'],
    avatar: 'assets/ilustraciones/axel (1).png',
    portrait: 'assets/ilustraciones/axel (2).png',
    scenario: 'assets/escenarios/Es_axel.jpg',
    phases: [
      {
        intro: '«Oye tú, ¿me estabas mirando?»',
        question: '¿Por qué me miras así? Si tienes algo que decir, dilo.',
        answers: [
          { text: 'Solo estaba mirando, no iba con mala intención.', correct: true },
          { text: 'Relájate, siempre te lo tomas todo a mal.', correct: false },
          { text: 'Si te molesta que te mire, pues no te miro.', correct: false }
        ]
      },
      {
        intro: '«Ok, perdón por juzgarte solo por mirarme.»',
        question: 'Es que a veces siento que si bajo la guardia, la gente se aprovecha.',
        answers: [
          { text: 'No necesito que estés a la defensiva conmigo. No voy a usar nada en tu contra.', correct: true },
          { text: 'Depende… si me das motivos, supongo.', correct: false },
          { text: 'Pues no bajes la guardia y ya está.', correct: false }
        ]
      },
      {
        intro: '',
        question: 'Lo siento, sé que me enfado rápido… pero no quiero perder a la gente que me importa. ¿Crees que puedo cambiar?',
        answers: [
          { text: 'Si quieres cambiar, claro que puedes. Lo primero es darse cuenta.', correct: true },
          { text: 'Sinceramente no lo sé, eres bastante explosivo.', correct: false },
          { text: 'Eso depende de ti, yo no puedo hacer nada.', correct: false }
        ]
      }
    ]
  },
  {
    id: 'luna',
    name: 'Luna',
    age: '16',
    role: 'La adolescente reservada',
    subtitle: 'Sensibilidad: no ser entendida ni aceptada',
    fear: 'No ser entendida',
    sensitivity: 'Introvertida, evita abrirse por miedo a ser juzgada',
    personality: ['Silenciosa y muy observadora', 'Le cuesta confiar en la gente', 'Un comentario brusco la cierra más'],
    avatar: 'assets/ilustraciones/Luna (1).png',
    portrait: 'assets/ilustraciones/Luna (2).png',
    scenario: 'assets/escenarios/Es_luna.jpg',
    phases: [
      {
        intro: '«Hola… ¿podemos hablar un rato? Estoy aburrida y no hay ningún amigo.»',
        question: '¿De verdad quieres hablar conmigo?… normalmente la gente pasa de mí.',
        answers: [
          { text: 'Si hablo contigo es porque quiero, no porque me dé pena.', correct: true },
          { text: 'Bueno… a veces das esa impresión.', correct: false },
          { text: 'Si te sientes así, deberías esforzarte más.', correct: false }
        ]
      },
      {
        intro: '',
        question: 'Cuando cuento algo personal, siento que la gente piensa que exagero. ¿Tú también lo piensas?',
        answers: [
          { text: 'No. Si algo te afecta, es válido. No tengo por qué juzgarlo.', correct: true },
          { text: 'A veces sí parece que exageras o te obsesionas un poco, la verdad.', correct: false },
          { text: 'No sé, depende del día.', correct: false }
        ]
      },
      {
        intro: '',
        question: 'A veces me gustaría expresarme sin miedo a que me odien. Por eso me da miedo acercarme a los demás.',
        answers: [
          { text: 'Quien quiera estar contigo no va a odiarte por ser tú.', correct: true },
          { text: 'Si te da tanto miedo, igual sí es mejor mantenerse apartada.', correct: false },
          { text: 'Bueno… a veces la gente reacciona mal, es normal.', correct: false }
        ]
      }
    ]
  },
  {
    id: 'nico',
    name: 'Nico',
    age: '33',
    role: 'El adulto friki entusiasta',
    subtitle: 'Sensibilidad: ser ridiculizado por sus intereses',
    fear: 'No encajar como adulto',
    sensitivity: 'Se corta rápido por miedo a molestar o parecer infantil',
    personality: ['Creativo y muy entusiasta', 'Habla con emoción de sus hobbies', 'Inseguro de no encajar'],
    avatar: 'assets/ilustraciones/Nico (1).png',
    portrait: 'assets/ilustraciones/Nico (2).png',
    scenario: 'assets/escenarios/Es_nico.jpg',
    phases: [
      {
        intro: '',
        question: 'Eh… hola. Solo aviso que soy malísimo iniciando conversaciones, así que si digo algo raro, no me juzgues.',
        answers: [
          { text: 'Tranquilo, no tienes que esforzarte. Podemos hablar normal.', correct: true },
          { text: 'Bueno jajaj, ya veremos qué tan raro eres.', correct: false },
          { text: 'Si no sabes empezar una conversación, mejor no empieces.', correct: false }
        ]
      },
      {
        intro: '«Cierto, cuanto menos tenso mejor!»',
        question: 'A veces me pongo a hablar de mis cosas y no sé si debería callarme antes de que te canses.',
        answers: [
          { text: 'No, hablas como te sale. No tienes que medirlo.', correct: true },
          { text: 'Bueno… a veces sí te enrollas bastante.', correct: false },
          { text: 'Pues contrólalo un poco, no es difícil.', correct: false }
        ]
      },
      {
        intro: '«Cierto, cuanto menos tenso mejor!»',
        question: 'Prometo que no soy tan intenso como parezco… bueno, quizá un poco. ¿Es molesto?',
        answers: [
          { text: 'No me molesta. Es interesante ver a alguien hablar de lo que le gusta.', correct: true },
          { text: 'Sí, un poco intenso sí que eres pero no me molestas.', correct: false },
          { text: 'Mientras no te pongas pesado, todo bien!!', correct: false }
        ]
      }
    ]
  },
  {
    id: 'alma',
    name: 'Alma',
    age: '8',
    role: 'La niña pequeña sensible',
    subtitle: 'Sensibilidad: ser regañada o abandonada',
    fear: 'Hacer algo mal',
    sensitivity: 'Necesita seguridad constante y se asusta con tonos duros',
    personality: ['Dulce y muy emocional', 'Muy transparente', 'Vive el mundo con inocencia'],
    avatar: 'assets/ilustraciones/alma (1).png',
    portrait: 'assets/ilustraciones/alma (2).png',
    scenario: 'assets/escenarios/Es_alma.jpg',
    phases: [
      {
        intro: '«Hola… ¿está bien si hablamos un ratito?»',
        question: '¿Está bien si hablamos un ratito?',
        answers: [
          { text: '¡Claro que sí! Puedes hablar conmigo.', correct: true },
          { text: 'Ahora mismo estoy un poco ocupado.', correct: false },
          { text: 'Depende… ¿Qué necesitas?', correct: false }
        ]
      },
      {
        intro: '«Guay… no quiero molestar. Es que a veces hablo mucho y mis amigos me dicen que soy una pesada.»',
        question: 'Es que a veces hablo mucho y mis amigos me dicen que soy una pesada.',
        answers: [
          { text: '¡Que va! Puedes contarme cosas si quieres.', correct: true },
          { text: 'Bueno… a veces hablas un poquito mucho.', correct: false },
          { text: 'No sé, depende del día.', correct: false }
        ]
      },
      {
        intro: '«Ah… vale. Es que no quiero que nadie se enfade conmigo.»',
        question: 'A veces me pongo triste y no sé por qué… ¿eso está mal?',
        answers: [
          { text: 'No está mal. A veces pasa, y puedes decirlo.', correct: true },
          { text: 'Bueno… es un poco raro, pero supongo que pasa.', correct: false },
          { text: 'No sé, quizá solo estabas cansada y necesitabas descansar.', correct: false }
        ]
      }
    ]
  }
];

// ── STATE ──────────────────────────────────
const state = {
  completedLevels: [],
  currentChar: null,
  currentPhase: 0,
  score: 0,   // correct this level
  errors: 0,  // wrong this level
  totalScore: 0
};

// ── HELPERS ────────────────────────────────
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(`#${id}`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function flash() {
  const el = $('.flash-overlay');
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 120);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── SCREENS ────────────────────────────────

// HOME
function initHome() {
  $('#btn-jugar').addEventListener('click', () => {
    flash();
    setTimeout(() => {
      showScreen('screen-intro');
      startTypewriter();
    }, 150);
  });
}

// INTRO
const INTRO_LINES = [
  '6NAPSE es un juego sobre empatía.',
  '',
  'Vas a conversar con seis personas distintas.',
  'Cada una tiene su propia historia,',
  'sus miedos y su forma de ver el mundo.',
  '',
  'Tu misión es responder con cuidado.',
  'No se trata de acertar por suerte,',
  'sino de escuchar de verdad.',
  '',
  'Necesitas 2 aciertos para avanzar.',
  '2 fallos y la conversación se reinicia.',
  '',
  'Activa los seis vínculos.',
  'Aprende a conectar.',
];

function startTypewriter() {
  const el = $('#intro-text');
  const btn = $('#btn-intro-continue');
  btn.classList.remove('visible');

  const fullText = INTRO_LINES.join('\n');
  let i = 0;
  el.innerHTML = '<span class="intro-cursor"></span>';

  const interval = setInterval(() => {
    if (i >= fullText.length) {
      clearInterval(interval);
      btn.classList.add('visible');
      return;
    }
    const char = fullText[i];
    const cursor = el.querySelector('.intro-cursor');
    if (char === '\n') {
      cursor.insertAdjacentHTML('beforebegin', '<br>');
    } else {
      cursor.insertAdjacentText('beforebegin', char);
    }
    i++;
  }, 38);

  // click para saltar animación
  el.addEventListener('click', () => {
    clearInterval(interval);
    el.innerHTML = INTRO_LINES.map(l => l === '' ? '<br>' : l).join('<br>') + '<span class="intro-cursor"></span>';
    btn.classList.add('visible');
  }, { once: true });
}

function initIntro() {
  $('#btn-intro-continue').addEventListener('click', () => {
    flash();
    setTimeout(() => showScreen('screen-select'), 150);
    renderSelect();
  });
}

// SELECT
function renderSelect() {
  const grid = $('#char-grid');
  grid.innerHTML = '';
  CHARACTERS.forEach(char => {
    const done = state.completedLevels.includes(char.id);
    const card = document.createElement('div');
    card.className = 'char-card' + (done ? ' done' : '');
    card.innerHTML = `
      <img class="char-avatar" src="${char.avatar}" alt="${char.name}" onerror="this.style.opacity=0.3">
      <div class="char-name">${char.name}</div>
      <div class="char-age">[ ${char.age} años ]</div>
      <div class="char-fear">${char.fear}</div>
    `;
    if (!done) {
      card.addEventListener('click', () => {
        flash();
        state.currentChar = char;
        state.currentPhase = 0;
        state.score = 0;
        state.errors = 0;
        setTimeout(() => {
          renderBriefing(char);
          showScreen('screen-briefing');
        }, 150);
      });
    }
    grid.appendChild(card);
  });
}

// BRIEFING
function renderBriefing(char) {
  $('#briefing-name').textContent = char.name;
  $('#briefing-subtitle').textContent = char.subtitle;
  $('#briefing-portrait').src = char.portrait;
  $('#briefing-portrait').alt = char.name;

  // sections
  const sensEl = $('#briefing-sensitivity');
  sensEl.innerHTML = `<li>${char.sensitivity}</li>`;

  const persEl = $('#briefing-personality');
  persEl.innerHTML = char.personality.map(p => `<li>${p}</li>`).join('');

  const fearEl = $('#briefing-fear');
  fearEl.innerHTML = `<li>${char.fear}</li>`;
}

// GAME
function renderGame() {
  const char = state.currentChar;
  const phase = char.phases[state.currentPhase];

  // escenario en sidebar (en vez del avatar)
  $('#game-scenario').src = char.scenario;
  $('#game-scenario').alt = char.name;

  $('#game-char-name').textContent = char.name;
  $('#game-level-tag').textContent = `NIVEL: ${char.name.toUpperCase()}`;
  $('#game-phase-tag').textContent = `FASE ${state.currentPhase + 1} / 3`;

  // progress dots
  const dotsEl = $('#progress-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i < state.currentPhase) {
      // already answered — check previous results stored in state
      dot.classList.add(state.phaseResults && state.phaseResults[i] ? 'correct' : 'wrong');
    }
    dotsEl.appendChild(dot);
  }

  $('#score-info').textContent = `ACIERTOS: ${state.score} / FALLOS: ${state.errors}`;

  // dialogue
  const intro = phase.intro ? `<span style="color:var(--green);text-decoration:underline;text-underline-offset:3px;">${phase.intro}</span><br><br>` : '';
  $('#dialogue-text').innerHTML = intro + `«${phase.question}»`;

  // answers (shuffled but keep correct index)
  const answers = shuffle(phase.answers.map((a, i) => ({ ...a, idx: i })));
  const answersGrid = $('#answers-grid');
  answersGrid.innerHTML = '';
  const letters = ['A', 'B', 'C'];

  answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.setAttribute('data-letter', letters[i]);
    btn.textContent = ans.text;
    btn.addEventListener('click', () => handleAnswer(btn, ans.correct, answersGrid));
    answersGrid.appendChild(btn);
  });

  $('#feedback-bar').textContent = '';
  $('#feedback-bar').className = 'feedback-bar';
}

function handleAnswer(btn, isCorrect, grid) {
  // disable all
  grid.querySelectorAll('.answer-btn').forEach(b => b.classList.add('disabled'));

  if (!state.phaseResults) state.phaseResults = [];

  const feedback = $('#feedback-bar');

  if (isCorrect) {
    btn.classList.remove('disabled');
    btn.classList.add('correct-answer');
    state.score++;
    state.phaseResults[state.currentPhase] = true;
    feedback.textContent = '> RESPUESTA EMPÁTICA — BIEN HECHO';
    feedback.className = 'feedback-bar ok';
  } else {
    btn.classList.remove('disabled');
    btn.classList.add('wrong-answer');
    // highlight correct
    grid.querySelectorAll('.answer-btn').forEach(b => {
      // we can't re-check correct here without data, so just mark
    });
    state.errors++;
    state.phaseResults[state.currentPhase] = false;
    feedback.textContent = '> RESPUESTA INCORRECTA — INTÉNTALO MEJOR';
    feedback.className = 'feedback-bar fail';
  }

  // check level end conditions
  const nextPhase = state.currentPhase + 1;
  const canStillWin  = (state.score + (3 - nextPhase)) >= 2;
  const alreadyFail  = state.errors >= 2;
  const alreadyWin   = state.score >= 2;

  setTimeout(() => {
    if (alreadyFail) {
      renderResult(false);
      showScreen('screen-result');
    } else if (alreadyWin && nextPhase === 3) {
      state.completedLevels.push(state.currentChar.id);
      renderResult(true);
      showScreen('screen-result');
    } else if (nextPhase >= 3) {
      // finished 3 phases
      if (state.score >= 2) {
        state.completedLevels.push(state.currentChar.id);
        renderResult(true);
      } else {
        renderResult(false);
      }
      showScreen('screen-result');
    } else {
      state.currentPhase = nextPhase;
      renderGame();
    }
  }, 1400);
}

// RESULT
function renderResult(win) {
  const char = state.currentChar;
  $('#result-portrait').src = char.avatar;

  const titleEl = $('#result-title');
  const msgEl   = $('#result-message');
  const scoreEl = $('#result-score');

  if (win) {
    titleEl.textContent = '[ Conexión establecida! ]';
    titleEl.className = 'result-title win';
    msgEl.textContent = `Has conseguido conectar con ${char.name}. Buen trabajo!`;
  } else {
    titleEl.textContent = '[ Conexión fallida.. ]';
    titleEl.className = 'result-title fail';
    msgEl.textContent = `${char.name} se ha cerrado. La comunicación requiere práctica. ¡Inténtalo de nuevo!`;
  }

  scoreEl.textContent = `ACIERTOS: ${state.score} / 3  |  FALLOS: ${state.errors} / 3`;

  // check if all levels done
  const allDone = CHARACTERS.every(c => state.completedLevels.includes(c.id));
  if (allDone) {
    setTimeout(() => {
      renderFinal();
      showScreen('screen-final');
    }, 2500);
  }
}

// FINAL
function renderFinal() {
  const charsEl = $('#final-chars');
  charsEl.innerHTML = CHARACTERS.map(c =>
    `<img src="${c.avatar}" alt="${c.name}">`
  ).join('');
}

// ── EVENT LISTENERS ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHome();
  initIntro();

  // briefing → game
  $('#btn-start-level').addEventListener('click', () => {
    flash();
    state.phaseResults = [];
    setTimeout(() => {
      renderGame();
      showScreen('screen-game');
    }, 150);
  });

  // result → retry
  $('#btn-retry').addEventListener('click', () => {
    flash();
    state.currentPhase = 0;
    state.score = 0;
    state.errors = 0;
    state.phaseResults = [];
    setTimeout(() => {
      renderGame();
      showScreen('screen-game');
    }, 150);
  });

  // result → select
  $('#btn-back-select').addEventListener('click', () => {
    flash();
    setTimeout(() => {
      renderSelect();
      showScreen('screen-select');
    }, 150);
  });

  // final → home
  $('#btn-final-home').addEventListener('click', () => {
    flash();
    setTimeout(() => showScreen('screen-home'), 150);
  });

  // show home
  showScreen('screen-home');
});