// Quiz Data - 50 Fragen
const quizQuestions = [
    // Nomen Fragen (1-17)
    {
        question: 'welches wort ist ein nomen?',
        options: ['laufen', 'fisch', 'schnell', 'singen'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['rot', 'baum', 'springen', 'lebendig'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['schlafen', 'schule', 'groß', 'langsam'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['tanzen', 'freiheit', 'kalt', 'weich'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['lächeln', 'liebe', 'bitter', 'süß'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['rennen', 'stuhl', 'dünn', 'dicht'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['malen', 'kunstwerk', 'modern', 'klassisch'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['schwimmen', 'haus', 'alt', 'jung'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['kochen', 'abendessen', 'lecker', 'salzig'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['weinen', 'träne', 'traurig', 'freudig'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['schreiben', 'buch', 'interessant', 'langweilig'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['spielen', 'spiel', 'lustig', 'ernst'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['fahren', 'auto', 'schnell', 'langsam'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['essen', 'apfel', 'saftig', 'reif'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['sprechen', 'sprache', 'verständlich', 'unklar'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['laufen', 'marathon', 'anstrengend', 'entspannend'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['arbeiten', 'job', 'stressig', 'entspannend'],
        correct: 1,
        category: 'Nomen'
    },

    // Adjektive Fragen (18-34)
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['fenster', 'käse', 'blau', 'tanzen'],
        correct: 2,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['musik', 'schön', 'singen', 'telefon'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['hunger', 'hungrig', 'essen', 'gabel'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['heiß', 'feuer', 'brennen', 'flamme'],
        correct: 0,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['wald', 'grün', 'baum', 'pflanzen'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['nacht', 'dunkel', 'mond', 'scheinen'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['hart', 'stein', 'fallen', 'erde'],
        correct: 0,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['liebe', 'lieb', 'herz', 'fühlen'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['angst', 'mutig', 'fürchten', 'gefahr'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['klug', 'verstand', 'lernen', 'schule'],
        correct: 0,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['freude', 'fröhlich', 'grinsen', 'gesicht'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['schmerz', 'schmerzhaft', 'weinen', 'träne'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['kraft', 'stark', 'heben', 'gewicht'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['hoffnung', 'hoffnungsvoll', 'hoffen', 'traum'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['giftig', 'gift', 'vergiften', 'schlange'],
        correct: 0,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['sauberkeit', 'sauber', 'putzen', 'besen'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['wärme', 'warm', 'heizen', 'ofen'],
        correct: 1,
        category: 'Adjektiv'
    },

    // Verben Fragen (35-50)
    {
        question: 'welches wort ist ein verb?',
        options: ['vogel', 'fliegen', 'blau', 'himmel'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['denken', 'gedanke', 'klug', 'verstand'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['arbeit', 'arbeiten', 'fleißig', 'angestellter'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['blume', 'blühen', 'rosa', 'garten'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['lachen', 'lachen', 'lustig', 'freude'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['wasser', 'trinken', 'frisch', 'glas'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['hören', 'ohren', 'laut', 'musik'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['sehen', 'auge', 'farbe', 'bild'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['buch', 'lesen', 'interessant', 'geschichte'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['hoffnung', 'hoffen', 'hoffnungsvoll', 'zukunft'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['rad', 'rollen', 'rund', 'bewegung'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['brechen', 'bruch', 'zerbrechlich', 'glas'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['freund', 'singen', 'lied', 'schön'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['erfolg', 'gewinnen', 'siegreich', 'kampf'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['farbe', 'malen', 'bunt', 'kunstwerk'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['öffnen', 'tür', 'offen', 'schloss'],
        correct: 0,
        category: 'Verb'
    }
];

// State variables
let quizState = {
    currentQuestion: 0,
    score: 0,
    selectedAnswers: [],
    answers: [],
    difficulty: 'mixed',
    questions: []
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for difficulty selection
    document.querySelectorAll('input[name="difficulty"]').forEach(input => {
        input.addEventListener('change', (e) => {
            quizState.difficulty = e.target.value;
        });
    });
});

function startQuiz() {
    // Prepare questions
    quizState.questions = [...quizQuestions];
    
    if (quizState.difficulty === 'mixed') {
        // Shuffle questions
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5);
    } else if (quizState.difficulty === 'sorted') {
        // Keep sorted by category
        const nouns = quizState.questions.filter(q => q.category === 'Nomen');
        const adjectives = quizState.questions.filter(q => q.category === 'Adjektiv');
        const verbs = quizState.questions.filter(q => q.category === 'Verb');
        quizState.questions = [...nouns, ...adjectives, ...verbs];
    }
    
    // Reset state
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.selectedAnswers = [];
    quizState.answers = [];

    // Switch screens
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');

    showQuestion();
}

function showQuestion() {
    const question = quizState.questions[quizState.currentQuestion];
    
    // Update progress
    const progress = ((quizState.currentQuestion + 1) / quizState.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = 
        `Frage ${quizState.currentQuestion + 1} von ${quizState.questions.length}`;

    // Update score
    document.getElementById('score').textContent = quizState.score;

    // Display question
    document.getElementById('question').textContent = question.question;

    // Display options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-btn').disabled = true;
}

function selectAnswer(index) {
    const question = quizState.questions[quizState.currentQuestion];
    
    // Record answer
    quizState.selectedAnswers[quizState.currentQuestion] = index;

    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.classList.add('disabled');

        if (i === index) {
            option.classList.add('selected');
        }

        // Show correct answer
        if (i === question.correct) {
            option.classList.remove('selected');
            option.classList.add('correct');
        } else if (i === index && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    // Score handling
    if (index === question.correct) {
        quizState.score++;
    }

    // Store answer info
    quizState.answers.push({
        question: question.question,
        selected: question.options[index],
        correct: question.options[question.correct],
        isCorrect: index === question.correct,
        category: question.category
    });

    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    quizState.currentQuestion++;

    if (quizState.currentQuestion < quizState.questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    const accuracy = Math.round((quizState.score / quizState.questions.length) * 100);
    const wrong = quizState.questions.length - quizState.score;

    document.getElementById('final-score').textContent = quizState.score;
    document.getElementById('correct-count').textContent = quizState.score;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Determine message
    let title = 'Gratuliere!';
    let message = '';

    if (accuracy === 100) {
        title = '🎉 Perfekt!';
        message = 'Du hast alle Fragen richtig beantwortet! Ausgezeichnet!';
    } else if (accuracy >= 90) {
        title = '👏 Hervorragend!';
        message = 'Eine sehr gute Leistung! Du kennst die deutschen Wortarten sehr gut!';
    } else if (accuracy >= 80) {
        title = '😊 Gut gemacht!';
        message = 'Du hast eine gute Leistung erbracht. Mit etwas mehr Übung wirst du noch besser!';
    } else if (accuracy >= 70) {
        title = '📚 Gute Arbeit!';
        message = 'Du machst Fortschritte! Wiederhole die Grundlagen und versuche es erneut.';
    } else if (accuracy >= 50) {
        title = '💡 Nicht schlecht!';
        message = 'Es gibt noch Raum für Verbesserung. Lerne die Unterschiede zwischen Nomen, Adjektiven und Verben!';
    } else {
        title = '📖 Nächster Versuch!';
        message = 'Schau dir die Grundlagen an und versuche es erneut. Du schaffst das!';
    }

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-message').textContent = message;
}

function showResults() {
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('review-screen').classList.add('active');

    const reviewContent = document.getElementById('review-content');
    reviewContent.innerHTML = '';

    quizState.answers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

        const statusIcon = answer.isCorrect ? '✓' : '✗';
        const statusClass = answer.isCorrect ? 'correct' : 'incorrect';

        item.innerHTML = `
            <div class="review-question">Frage ${index + 1}: ${answer.question}</div>
            <div class="review-answer">
                <div class="review-answer-label">
                    <span>Deine Antwort:</span>
                    <span class="review-label-text review-your-answer">${answer.selected}</span>
                </div>
                ${!answer.isCorrect ? `
                    <div class="review-answer-label">
                        <span>Korrekte Antwort:</span>
                        <span class="review-label-text review-correct-answer">${answer.correct}</span>
                    </div>
                ` : ''}
            </div>
            <div class="review-status ${statusClass}">
                ${statusIcon} ${answer.isCorrect ? 'Richtig!' : 'Falsch!'}
            </div>
        `;

        reviewContent.appendChild(item);
    });
}

function backToResults() {
    document.getElementById('review-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
}

function restartQuiz() {
    quizState = {
        currentQuestion: 0,
        score: 0,
        selectedAnswers: [],
        answers: [],
        difficulty: 'mixed',
        questions: []
    };

    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('review-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}
