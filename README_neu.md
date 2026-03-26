# Deutsches Grammatik-Quiz

Ein interaktives Quiz zum Erkennen von **Nomen**, **Adjektiven** und **Verben** in der deutschen Sprache mit **Leaderboard** und verschiedenen Spielmodi.

## Features

### 📝 Quiz-Modi
- **Alle durcheinander**: 50 Fragen zufällig gemischt
- **Sortiert**: 50 Fragen nach Kategorie (Nomen → Adjektive → Verben)
- **Thema: nomen, verben, adjektive**: 15 Fragen (5 aus jeder Kategorie)

### 🏆 Leaderboard-System
- **Lokale Speicherung** mit localStorage
- **Top 100 Spieler** werden gespeichert
- **Verschiedene Zeiträume**: Alle Zeiten, Heute, Diese Woche
- **Spielername** wird abgefragt
- **Medaillen** für Top 3 (🥇🥈🥉)
- **Eigener Eintrag** wird hervorgehoben

### ⭐ Punktesystem
- **1 Punkt** pro korrekt beantwortete Frage
- **Maximale Punktzahl**: 15-50 Punkte (je nach Modus)
- **Echtzeit-Anzeige** deines aktuellen Scores während des Quiz

### 📊 Detaillierte Ergebnisse
- Finale Punktzahl und Prozentgenauigkeit
- Übersicht aller Fragen mit deinen Antworten
- Richtige Antworten für falsch beantwortete Fragen
- Bewertungsnachricht basierend auf deiner Leistung

### 🎨 Modernes Design
- Responsive Layout (funktioniert auf allen Geräten)
- Farbliche Kennzeichnung (Grün ✓ = Richtig, Rot ✗ = Falsch)
- Animations- und Übergänge für besseres Nutzererlebnis
- Navigation zwischen verschiedenen Bereichen

## Verwendung

1. **index.html** im Browser öffnen
2. **Spielername eingeben** (wird für Leaderboard verwendet)
3. **Quiz-Modus wählen**:
   - Alle durcheinander (50 Fragen)
   - Sortiert (50 Fragen)
   - Thema: nomen, verben, adjektive (15 Fragen)
4. **Auf "Quiz starten" klicken**
5. **Für jede Frage eine Wortart auswählen**
6. **Die richtige Antwort wird sofort angezeigt**
7. **Nach dem Quiz:** Endergebnis ansehen und Leaderboard prüfen

## Navigation

- **Startseite**: Quiz-Modi auswählen und starten
- **Quiz**: Das eigentliche Quiz spielen
- **Leaderboard**: Beste Spieler ansehen und vergleichen

## Dateien

```
deutsch-grammar-quiz/
├── index.html      # Hauptstruktur und Layout
├── styles.css      # Styling und Responsive Design
├── script.js       # Quiz-Logik, Leaderboard und Fragenbank
└── README.md       # Diese Datei
```

## Fragen-Übersicht

### Nomen-Fragen (17 verfügbar)
- fisch, baum, schule, freiheit, liebe, stuhl, kunstwerk, haus, abendessen, träne, buch, spiel, auto, apfel, sprache, marathon, job

### Adjektiv-Fragen (17 verfügbar)
- blau, schön, hungrig, heiß, grün, dunkel, hart, lieb, mutig, klug, fröhlich, schmerzhaft, stark, hoffnungsvoll, giftig, sauber, warm

### Verb-Fragen (16 verfügbar)
- fliegen, denken, arbeiten, blühen, lachen, trinken, hören, sehen, lesen, hoffen, rollen, brechen, singen, gewinnen, malen, öffnen

## Bewertungssystem

| Genauigkeit | Bewertung |
|------------|-----------|
| 100% | 🎉 Perfekt! |
| 90-99% | 👏 Hervorragend! |
| 80-89% | 😊 Gut gemacht! |
| 70-79% | 📚 Gute Arbeit! |
| 50-69% | 💡 Nicht schlecht! |
| < 50% | 📖 Nächster Versuch! |

## Leaderboard

- **Speicherung**: Daten werden lokal im Browser gespeichert (localStorage)
- **Sortierung**: Nach Punkten, dann Genauigkeit, dann Datum
- **Filter**: Alle Zeiten / Heute / Diese Woche
- **Limit**: Top 100 Einträge werden behalten
- **Hervorhebung**: Dein letzter Eintrag wird markiert

## Browserunterstützung

Diese Website funktioniert in allen modernen Browsern:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Datenschutz

- **Keine Server**: Alle Daten werden lokal im Browser gespeichert
- **Keine Übertragung**: Keine Daten werden an Server gesendet
- **Lokale Speicherung**: Leaderboard-Daten bleiben nur auf deinem Gerät

## Lernziele

Nach diesem Quiz solltest du folgende Fähigkeiten haben:

✅ **Nomen erkennen** - Substantive, die Menschen, Dinge und Konzepte bezeichnen
✅ **Adjektive identifizieren** - Wörter, die Eigenschaften beschreiben
✅ **Verben unterscheiden** - Tätigkeitswörter und Vorgänge
✅ **Leaderboard nutzen** - Mit anderen Spielern vergleichen

## Viel Erfolg beim Quiz! 🎓

---
*Deutsches Grammatik-Quiz 2026 - Lerne deutsche Wortarten spielerisch mit Leaderboard!*