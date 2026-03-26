// Quiz Data - 68 Fragen
const quizQuestions = [
    // Nomen Fragen (1-21)
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
    // Neue Nomen Fragen
    {
        question: 'welches wort ist ein nomen?',
        options: ['miauen', 'katze', 'flauschig', 'springen'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['bellen', 'hund', 'treu', 'laufen'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['leben', 'stadt', 'groß', 'belebt'],
        correct: 1,
        category: 'Nomen'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['klettern', 'berg', 'hoch', 'steil'],
        correct: 1,
        category: 'Nomen'
    },

    // Adjektive Fragen (22-40)
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
    // Neue Adjektive Fragen
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['haus', 'klein', 'wohnen', 'zimmer'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['riese', 'groß', 'wachsen', 'hoch'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['schnecke', 'langsam', 'kriechen', 'weg'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['donner', 'laut', 'hören', 'ohr'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['flüstern', 'leise', 'sprechen', 'stimme'],
        correct: 1,
        category: 'Adjektiv'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['licht', 'hell', 'scheinen', 'sonne'],
        correct: 1,
        category: 'Adjektiv'
    },

    // Verben Fragen (41-60)
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
    },
    // Neue Verben Fragen
    {
        question: 'welches wort ist ein verb?',
        options: ['essen', 'nahrung', 'hungrig', 'mund'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['schlaf', 'schlafen', 'müde', 'bett'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['weg', 'gehen', 'schuh', 'straße'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['kommen', 'ankunft', 'spät', 'früh'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['ding', 'nehmen', 'hand', 'greifen'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['gabe', 'geben', 'großzügig', 'herz'],
        correct: 1,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['machen', 'arbeit', 'geschäftig', 'werkzeug'],
        correct: 0,
        category: 'Verb'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['tat', 'tun', 'aktiv', 'energie'],
        correct: 1,
        category: 'Verb'
    },

    // Thema: Tiere (15 Fragen)
    // Nomen Tiere
    {
        question: 'welches wort ist ein nomen?',
        options: ['miauen', 'katze', 'flauschig', 'springen'],
        correct: 1,
        category: 'Nomen',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['bellen', 'hund', 'treu', 'laufen'],
        correct: 1,
        category: 'Nomen',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['flattern', 'vogel', 'blau', 'fliegen'],
        correct: 1,
        category: 'Nomen',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['schwimmen', 'fisch', 'nass', 'wasser'],
        correct: 1,
        category: 'Nomen',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['nagen', 'maus', 'klein', 'loch'],
        correct: 1,
        category: 'Nomen',
        theme: 'animals'
    },
    // Adjektive Tiere
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['hase', 'schnell', 'rennen', 'wald'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['schildkröte', 'langsam', 'kriechen', 'panzer'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['löwe', 'laut', 'brüllen', 'mähne'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['katze', 'leise', 'schleichen', 'nacht'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['wolf', 'wild', 'heulen', 'mond'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'animals'
    },
    // Verben Tiere
    {
        question: 'welches wort ist ein verb?',
        options: ['hund', 'laufen', 'schnell', 'park'],
        correct: 1,
        category: 'Verb',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['vogel', 'fliegen', 'hoch', 'himmel'],
        correct: 1,
        category: 'Verb',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['fisch', 'schwimmen', 'wasser', 'see'],
        correct: 1,
        category: 'Verb',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['katze', 'springen', 'hoch', 'maus'],
        correct: 1,
        category: 'Verb',
        theme: 'animals'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['hund', 'fressen', 'fleisch', 'napf'],
        correct: 1,
        category: 'Verb',
        theme: 'animals'
    },

    // Thema: Essen (15 Fragen)
    // Nomen Essen
    {
        question: 'welches wort ist ein nomen?',
        options: ['essen', 'apfel', 'rot', 'baum'],
        correct: 1,
        category: 'Nomen',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['backen', 'brot', 'weich', 'mehl'],
        correct: 1,
        category: 'Nomen',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['trinken', 'milch', 'weiß', 'kuh'],
        correct: 1,
        category: 'Nomen',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['backen', 'kuchen', 'süß', 'zucker'],
        correct: 1,
        category: 'Nomen',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein nomen?',
        options: ['essen', 'salat', 'grün', 'blatt'],
        correct: 1,
        category: 'Nomen',
        theme: 'food'
    },
    // Adjektive Essen
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['bonbon', 'süß', 'lutschen', 'zucker'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['zitrone', 'sauer', 'pressen', 'saft'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['suppe', 'heiß', 'löffel', 'teller'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['eis', 'kalt', 'schmelzen', 'sommer'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein adjektiv?',
        options: ['gemüse', 'frisch', 'ernte', 'garten'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'food'
    },
    // Verben Essen
    {
        question: 'welches wort ist ein verb?',
        options: ['apfel', 'essen', 'mund', 'zahn'],
        correct: 1,
        category: 'Verb',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['wasser', 'trinken', 'glas', 'durst'],
        correct: 1,
        category: 'Verb',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['teig', 'kochen', 'topf', 'hitze'],
        correct: 1,
        category: 'Verb',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['kuchen', 'backen', 'ofen', 'mehl'],
        correct: 1,
        category: 'Verb',
        theme: 'food'
    },
    {
        question: 'welches wort ist ein verb?',
        options: ['brot', 'schneiden', 'messer', 'stück'],
        correct: 1,
        category: 'Verb',
        theme: 'food'
    },

    // Konjugation: Verben (15 Fragen)
    {
        question: 'konjugiere "fahren" in der 2. Person Singular (du):',
        options: ['fahre', 'fährst', 'fahrt', 'fahren'],
        correct: 1,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "geben" in der 3. Person Singular (er/sie/es):',
        options: ['gebe', 'gibst', 'gibt', 'geben'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "sprechen" in der 1. Person Plural (wir):',
        options: ['spreche', 'spricht', 'sprechen', 'sprecht'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "lessen" in der 3. Person Plural (sie):',
        options: ['liest', 'lesen', 'lesst', 'lest'],
        correct: 1,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "sehen" in der 2. Person Plural (ihr):',
        options: ['seht', 'seht', 'sehen', 'sehs'],
        correct: 0,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "trinken" in der 1. Person Singular (ich):',
        options: ['trinke', 'trinkst', 'trinkt', 'trinken'],
        correct: 0,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "nehmen" in der 3. Person Singular (er/sie/es):',
        options: ['nehme', 'nimmst', 'nimmt', 'nehmen'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "kommt" in der Infinitiv:',
        options: ['komme', 'kommst', 'kommt', 'kommen'],
        correct: 3,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "arbeiten" in der 2. Person Singular (du):',
        options: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten'],
        correct: 1,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "schreiben" in der 3. Person Singular (er/sie/es):',
        options: ['schreibe', 'schreibst', 'schreibt', 'schreiben'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "essen" in der 3. Person Singular (er/sie/es):',
        options: ['esse', 'isst', 'esst', 'essen'],
        correct: 1,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "schlafen" in der 3. Person Singular (er/sie/es):',
        options: ['schlaf', 'schläfst', 'schläft', 'schlafen'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "laufen" in der 2. Person Singular (du):',
        options: ['laufe', 'läufst', 'läuft', 'laufen'],
        correct: 1,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "tragen" in der 3. Person Singular (er/sie/es):',
        options: ['trage', 'trägst', 'trägt', 'tragen'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },
    {
        question: 'konjugiere "fallen" in der 3. Person Singular (er/sie/es):',
        options: ['falle', 'fällst', 'fällt', 'fallen'],
        correct: 2,
        category: 'Verb',
        theme: 'conjugation'
    },

    // Steigerung von Adjektiven (15 Fragen)
    {
        question: 'Wie heißt der Komparativ von "klein"?',
        options: ['klein', 'kleiner', 'kleinst', 'am kleinsten'],
        correct: 1,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "groß"?',
        options: ['groß', 'größer', 'größt', 'größten'],
        correct: 3,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Komparativ von "schnell"?',
        options: ['schneller', 'schnell', 'schnellst', 'am schnellsten'],
        correct: 0,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "schön"?',
        options: ['schön', 'schöner', 'schönst', 'schönsten'],
        correct: 2,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Komparativ von "alt"?',
        options: ['älter', 'alt', 'ältest', 'am ältesten'],
        correct: 0,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "jung"?',
        options: ['jung', 'jünger', 'jüngst', 'jüngsten'],
        correct: 2,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Komparativ von "warm"?',
        options: ['warmer', 'warm', 'wärmest', 'am wärmsten'],
        correct: 0,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "kalt"?',
        options: ['kalt', 'kälter', 'kältest', 'kältesten'],
        correct: 2,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Komparativ von "intelligent"?',
        options: ['intelligenter', 'intelligent', 'intelligentst', 'am intelligentesten'],
        correct: 0,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "hoch"?',
        options: ['hoch', 'höher', 'höchst', 'höchsten'],
        correct: 2,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Komparativ von "dünn"?',
        options: ['dünner', 'dünn', 'dünnst', 'am dünnsten'],
        correct: 0,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "dick"?',
        options: ['dick', 'dicker', 'dickst', 'dicksten'],
        correct: 2,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Komparativ von "weise"?',
        options: ['weiser', 'weise', 'weisest', 'am weisesten'],
        correct: 0,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },
    {
        question: 'Wie heißt der Superlativ von "töricht"?',
        options: ['töricht', 'törichter', 'törichtst', 'törichtesten'],
        correct: 2,
        category: 'Adjektiv',
        theme: 'adjective-comparison'
    },

    // Zeitformen (10 Fragen)
    {
        question: 'Welche Zeitform ist der Satz "Ich ging gestern in die Schule"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'],
        correct: 1,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Wir haben eine Pizza gegessen"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt'],
        correct: 2,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Morgen werde ich meine Hausaufgaben machen"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'],
        correct: 3,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Er hatte das Buch schon gelesen"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt'],
        correct: 3,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Ich esse jeden Tag Brot"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'],
        correct: 0,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Sie spielte früher Klavier"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt'],
        correct: 1,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Wir sind nach Berlin gefahren"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'],
        correct: 2,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Du wirst bald ankommen"?',
        options: ['Präsens', 'Präteritum', 'Futur I', 'Plusquamperfekt'],
        correct: 2,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Ich hatte das Fenster geöffnet"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt'],
        correct: 3,
        category: 'Grammatik',
        theme: 'tenses'
    },
    {
        question: 'Welche Zeitform ist der Satz "Er lernt gerade für die Prüfung"?',
        options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'],
        correct: 0,
        category: 'Grammatik',
        theme: 'tenses'
    },

    // Präpositionen (10 Fragen)
    {
        question: 'Welche Präposition passt? "Ich gehe ___ den Park."',
        options: ['in', 'an', 'über', 'zu'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Das Buch liegt ___ dem Tisch."',
        options: ['unter', 'neben', 'ohne', 'durch'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Wir fahren ___ die Stadt."',
        options: ['durch', 'gegen', 'ohne', 'seit'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Das Geschenk ist ___ dich."',
        options: ['für', 'mit', 'gegen', 'bei'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Er sitzt ___ dem Fenster."',
        options: ['hinter', 'während', 'bis', 'ohne'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Wir treffen uns ___ 18 Uhr."',
        options: ['um', 'seit', 'nach', 'von'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Sie kommt ___ dem Arzt."',
        options: ['vom', 'ins', 'am', 'für'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Ich arbeite ___ Montag bis Freitag."',
        options: ['von', 'auf', 'über', 'nach'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Er fährt ___ dem Auto."',
        options: ['mit', 'durch', 'gegen', 'aus'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },
    {
        question: 'Welche Präposition passt? "Wir sprechen ___ dem Lehrer."',
        options: ['mit', 'ohne', 'gegen', 'wider'],
        correct: 0,
        category: 'Grammatik',
        theme: 'prepositions'
    },

    // Lückentext (10 Fragen)
    {
        question: 'Ich ____ (sein) heute müde.',
        options: ['bin', 'bist', 'ist', 'sind'],
        correct: 0,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Wir ____ (gehen) morgen ins Kino.',
        options: ['gehe', 'gehst', 'gehen', 'geht'],
        correct: 2,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Er ____ (haben) viele Hausaufgaben.',
        options: ['habe', 'hast', 'hat', 'haben'],
        correct: 2,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Sie ____ (fahren) mit dem Fahrrad zur Schule.',
        options: ['fahre', 'fährst', 'fahren', 'fahrt'],
        correct: 2,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Ihr ____ (lernen) jeden Tag Deutsch.',
        options: ['lerne', 'lernst', 'lernen', 'lernt'],
        correct: 3,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Ich ____ (kaufen) ein neues Buch.',
        options: ['kaufe', 'kaufst', 'kauft', 'kaufen'],
        correct: 0,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Du ____ (spielen) heute Fußball.',
        options: ['spiele', 'spielst', 'spielt', 'spielen'],
        correct: 1,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Wir ____ (sind) sehr glücklich.',
        options: ['bin', 'bist', 'ist', 'sind'],
        correct: 3,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Er ____ (lesen) ein spannendes Buch.',
        options: ['lese', 'liest', 'lesen', 'lest'],
        correct: 1,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },
    {
        question: 'Wir ____ (essen) oft Pasta.',
        options: ['esse', 'isst', 'essen', 'esst'],
        correct: 2,
        category: 'Grammatik',
        theme: 'fill-in-the-blank'
    },

    {
        question: 'In welchem Fall steht "der Hund"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 0,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "den Hund"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 1,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "dem Hund"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 2,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "des Hundes"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 3,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "die Katze"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 0,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "die Katze" (direkt nach "ich sehe")?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 1,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "der Katze"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 2,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "der Katze" (Genitiv)?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 3,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "das Buch"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 0,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "das Buch" (nach "ich lese")?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 1,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "dem Buch"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 2,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "des Buches"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 3,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "ein Mann"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 0,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "einen Mann"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 1,
        category: 'Grammatik',
        theme: 'cases'
    },
    {
        question: 'In welchem Fall steht "eines Mannes"?',
        options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        correct: 3,
        category: 'Grammatik',
        theme: 'cases'
    },

    // Leseverstehen (10 Fragen)
    {
        question: 'In dem Satz "Der Hund läuft schnell", was ist die Hauptinformation?',
        options: ['Der Hund', 'läuft', 'schnell', 'in dem Satz'],
        correct: 2,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Die Katze schläft auf dem Sofa", worüber handelt der Satz?',
        options: ['Katze', 'schläft', 'Sofa', 'auf dem'],
        correct: 0,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Wir essen heute Abend Pizza", was wird gemacht?',
        options: ['Wir', 'essen', 'heute Abend', 'Pizza'],
        correct: 1,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Er liest ein Buch", welche Tätigkeit ist beschrieben?',
        options: ['Er', 'liest', 'ein', 'Buch'],
        correct: 1,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Sie geht in die Schule", welches Ziel wird angegeben?',
        options: ['Sie', 'geht', 'in die', 'Schule'],
        correct: 3,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Das Auto ist rot", was wird beschrieben?',
        options: ['Das Auto', 'ist', 'rot', 'das'],
        correct: 2,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Der Vogel fliegt hoch", worauf liegt der Fokus?',
        options: ['Der Vogel', 'fliegt', 'hoch', 'der'],
        correct: 2,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Ich trinke Wasser", was ist das Objekt?',
        options: ['Ich', 'trinke', 'Wasser', 'kein Objekt'],
        correct: 2,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Die Blumen sind schön", was ist die Eigenschaft?',
        options: ['Die Blumen', 'sind', 'schön', 'ist'],
        correct: 2,
        category: 'Leseverstehen',
        theme: 'reading'
    },
    {
        question: 'In dem Satz "Mein Bruder fährt Fahrrad", wer führt die Handlung aus?',
        options: ['Mein Bruder', 'fährt', 'Fahrrad', 'die Handlung'],
        correct: 0,
        category: 'Leseverstehen',
        theme: 'reading'
    }
];

// State variables
let quizState = {
    currentQuestion: 0,
    score: 0,
    selectedAnswers: [],
    answers: [],
    difficulty: 'mixed',
    questions: [],
    playerName: '',
    currentTab: 'all'
};

let timerInterval = null;
let remainingTime = 0;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function updateTimerText() {
    document.getElementById('timer-text').textContent = formatTime(remainingTime);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for difficulty selection
    document.querySelectorAll('input[name="difficulty"]').forEach(input => {
        input.addEventListener('change', (e) => {
            quizState.difficulty = e.target.value;
        });
    });

    // Navigation event listeners
    setupNavigation();
});

function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateToSection(section);
        });
    });
}

function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Show selected section
    if (sectionId === 'home') {
        document.getElementById('start-screen').classList.add('active');
    } else if (sectionId === 'quiz') {
        document.getElementById('start-screen').classList.add('active');
    } else if (sectionId === 'leaderboard') {
        document.getElementById('leaderboard-screen').classList.add('active');
        showLeaderboard();
    }
}

function backToHome() {
    navigateToSection('home');
}

function startQuiz() {
    // Get player name
    quizState.playerName = prompt('Wie heißt du?', 'Spieler') || 'Spieler';

    // Prepare questions
    quizState.questions = [...quizQuestions];
    
    if (quizState.difficulty === 'mixed') {
        // Shuffle questions and take 200
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5).slice(0, 200);
    } else if (quizState.difficulty === 'sorted') {
        // Keep sorted by category and take 200 total
        const nouns = quizState.questions.filter(q => q.category === 'Nomen');
        const adjectives = quizState.questions.filter(q => q.category === 'Adjektiv');
        const verbs = quizState.questions.filter(q => q.category === 'Verb');
        quizState.questions = [...nouns, ...adjectives, ...verbs].slice(0, 200);
    } else if (quizState.difficulty === 'conjugation') {
        // Conjugation mode: 15 questions
        quizState.questions = quizState.questions.filter(q => q.theme === 'conjugation');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5);
    } else if (quizState.difficulty === 'comparison') {
        // Adjective comparison mode: 15 questions
        quizState.questions = quizState.questions.filter(q => q.theme === 'adjective-comparison');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5);
    } else if (quizState.difficulty === 'cases') {
        // Cases mode: 15 questions
        quizState.questions = quizState.questions.filter(q => q.theme === 'cases');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5);
    } else if (quizState.difficulty === 'tenses') {
        // Zeitformen mode: 10 Fragen
        quizState.questions = quizState.questions.filter(q => q.theme === 'tenses');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5).slice(0, 10);
    } else if (quizState.difficulty === 'fill-in-the-blank') {
        // Lückentext mode: 10 Fragen
        quizState.questions = quizState.questions.filter(q => q.theme === 'fill-in-the-blank');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5).slice(0, 10);
    } else if (quizState.difficulty === 'prepositions') {
        // Präpositionen mode: 10 Fragen
        quizState.questions = quizState.questions.filter(q => q.theme === 'prepositions');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5).slice(0, 10);
    } else if (quizState.difficulty === 'reading') {
        // Reading comprehension mode: 10 questions
        quizState.questions = quizState.questions.filter(q => q.theme === 'reading');
        quizState.questions = quizState.questions.sort(() => Math.random() - 0.5).slice(0, 10);
    }
    
    // Reset state
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.selectedAnswers = [];
    quizState.answers = [];

    // Timer setup: 45 minutes
    clearInterval(timerInterval);
    remainingTime = 45 * 60;
    updateTimerText();
    timerInterval = setInterval(() => {
        remainingTime -= 1;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            remainingTime = 0;
            updateTimerText();
            alert('Die Zeit ist abgelaufen! Das Quiz wird beendet.');
            endQuiz();
        } else {
            updateTimerText();
        }
    }, 1000);

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
            if (index === question.correct) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
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
    clearInterval(timerInterval);

    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    const accuracy = Math.round((quizState.score / quizState.questions.length) * 100);
    const wrong = quizState.questions.length - quizState.score;

    document.getElementById('final-score').textContent = quizState.score;
    document.getElementById('total-score').textContent = `/ ${quizState.questions.length}`;
    document.getElementById('correct-count').textContent = quizState.score;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Save to leaderboard
    saveToLeaderboard(quizState.playerName, quizState.score, quizState.questions.length, quizState.difficulty);

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

    const resultLink = document.getElementById('result-link');
    resultLink.innerHTML = `
        <span>Noten ausrechnen hier:</span>
        <a href="https://notenberechnung.ch/" target="_blank" rel="noopener noreferrer">https://notenberechnung.ch/</a>
    `;
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
        questions: [],
        playerName: '',
        currentTab: 'all'
    };

    clearInterval(timerInterval);
    remainingTime = 45 * 60;
    updateTimerText();

    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('review-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}

// Leaderboard Functions
function saveToLeaderboard(name, score, totalQuestions, difficulty) {
    const leaderboard = getLeaderboard();
    const entry = {
        name: name,
        score: score,
        total: totalQuestions,
        accuracy: Math.round((score / totalQuestions) * 100),
        difficulty: difficulty,
        date: new Date().toISOString(),
        timestamp: Date.now()
    };

    leaderboard.push(entry);
    
    // Sort by score (descending), then by accuracy, then by date
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
        return b.timestamp - a.timestamp;
    });

    // Keep only top 100 entries
    if (leaderboard.length > 100) {
        leaderboard.splice(100);
    }

    localStorage.setItem('grammarQuizLeaderboard', JSON.stringify(leaderboard));
    
    // Store timestamp for highlighting current user
    quizState.lastEntryTimestamp = entry.timestamp;
}

function getLeaderboard() {
    const stored = localStorage.getItem('grammarQuizLeaderboard');
    return stored ? JSON.parse(stored) : [];
}

function showLeaderboard() {
    const leaderboard = getLeaderboard();
    const container = document.getElementById('leaderboard-list');
    
    if (leaderboard.length === 0) {
        container.innerHTML = '<div class="no-entries">Noch keine Einträge im Leaderboard</div>';
        return;
    }

    let filteredLeaderboard = leaderboard;

    // Filter based on current tab
    if (quizState.currentTab === 'today') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        filteredLeaderboard = leaderboard.filter(entry => {
            const entryDate = new Date(entry.date);
            entryDate.setHours(0, 0, 0, 0);
            return entryDate.getTime() === today.getTime();
        });
    } else if (quizState.currentTab === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        filteredLeaderboard = leaderboard.filter(entry => {
            return new Date(entry.date) >= weekAgo;
        });
    }

    container.innerHTML = '';

    filteredLeaderboard.slice(0, 20).forEach((entry, index) => {
        const rank = index + 1;
        const isCurrentUser = entry.timestamp === quizState.lastEntryTimestamp;
        
        const entryDiv = document.createElement('div');
        entryDiv.className = `leaderboard-entry rank-${rank}${isCurrentUser ? ' current-user' : ''}`;
        
        const rankDisplay = rank <= 3 ? 
            `<span class="rank-medal">${getMedal(rank)}</span>` : 
            `<span class="rank">${rank}</span>`;

        entryDiv.innerHTML = `
            <div class="rank">${rankDisplay}</div>
            <div class="player-info">
                <div class="player-name">${entry.name}</div>
                <div class="player-stats">${entry.score}/${entry.total} Punkte • ${entry.accuracy}% • ${getDifficultyName(entry.difficulty)}</div>
            </div>
            <div class="score">${entry.score}</div>
        `;

        container.appendChild(entryDiv);
    });
}

function getMedal(rank) {
    switch(rank) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return rank;
    }
}

function getDifficultyName(difficulty) {
    switch(difficulty) {
        case 'mixed': return 'Alle durcheinander';
        case 'sorted': return 'Sortiert';
        case 'conjugation': return 'Konjugieren von Verben';
        case 'comparison': return 'Adjektive Steigern';
        case 'cases': return 'Fälle Erraten';
        case 'reading': return 'Leseverstehen';
        default: return difficulty;
    }
}

function showLeaderboardTab(tab) {
    quizState.currentTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showLeaderboardTab('${tab}')"]`).classList.add('active');
    
    showLeaderboard();
}

function clearLeaderboard() {
    if (confirm('Möchtest du wirklich das gesamte Leaderboard löschen?')) {
        localStorage.removeItem('grammarQuizLeaderboard');
        showLeaderboard();
    }
}
