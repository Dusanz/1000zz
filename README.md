# 1000 zašto, 1000 zato

Interaktivna edukativna aplikacija na srpskom jeziku. Početna verzija: kategorije, pretraga pitanja, odgovor sa mini-kvizom i CSS animacija kruženja vode u papirnom stilu.

## Pokretanje

Potrebni su Python 3 i moderan browser. Nema instalacije paketa.

```sh
python -m http.server 5173
```

Otvori http://localhost:5173. Testovi: `node --test tests/content.test.mjs` (Node.js 18+).

## Struktura

- `src/content.mjs`: početna pitanja i kvizovi
- `src/app.mjs`: prikaz, pretraga, filteri i kviz
- `src/styles.css`: responsive papirni stil i animacija
- `docs/ROADMAP.md`: sledeće faze

Ovo je početni prototip, bez naloga, backend-a i video izvoza. Sadržaj je lokalni i potrebno ga je urednički proveriti pre objavljivanja za decu. Animacije su CSS/SVG, bez generisanja videa pomoću AI-ja.
