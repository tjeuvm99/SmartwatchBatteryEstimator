# SmartwatchBatteryEstimator

Een kleine, interactieve demo-app waarmee je op basis van je smartwatch-type, batterijcapaciteit
en gebruiksgedrag een ruwe schatting krijgt van hoe lang de batterij van je horloge mee zal gaan.

## Over
De app is bedoeld als educatieve demo (HTML/CSS/JS). Vul je horlogetype in, geef de batterijcapaciteit
in milliampère-uur (mAh), stel de dagelijkse actieve gebruiksuren in en vink extra verbruikopties aan
zoals GPS, Always-on display en veel notificaties. De app berekent vervolgens een schatting van
de batterijduur en geeft eventueel een tip...

Let op: dit is een eenvoudige schatter — geen technische garantie.

## Belangrijkste bestanden
- `index.html` — hoofdpagina en formulier voor invoer
- `styles.css` — styling van de demo
- `app.js` — logica voor de schatting en interactie
- `logo.png` — optioneel logo weergegeven bovenaan (indien aanwezig)

## Gebruik
1. Open `index.html` in een moderne webbrowser.
2. Kies je `Smartwatch type` (Basic / Standard / Pro / Garmin Forerunner).
3. Vul `Batterij (mAh)` en `Actief gebruik (uren per dag)` in.
4. Vink extra verbruikopties aan: `GPS`, `Always-on display`, `Veel notificaties`.
5. Klik op **Bereken batterijduur** om de schatting en tips te zien.

## Velden uitgelegd
- `Smartwatch type`: bepaalt een basisverbruikprofiel (fitness tracker → lager verbruik).
- `Batterij (mAh)`: capaciteit van de batterij; typisch 250–600 mAh voor smartwatches.
- `Actief gebruik`: uren per dag dat het scherm/interaction actief is.
- Extra opties: verhogen het verbruik (workouts/GPS, AOD, notificaties).

## Ontwikkeling
- Wijzig `app.js` om de schattingslogica aan te passen of te verfijnen.
- Voeg afbeeldingen of aanvullende voorbeelden toe in de repo voor duidelijkere presentatie.

## Licentie
Deze demo bevat voorbeeldcode en is vrij te gebruiken voor educatieve doeleinden. Voeg een
licentie-bestand toe als je een specifieke licentie wilt kiezen.

---

Demo gemaakt voor GitHub training — geen medische of technische garantie.
