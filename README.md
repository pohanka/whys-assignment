# Úloha pre Whys

Na spustenie projektu vykonajte následovné:

```
cd frontend
npm i
npm run dev
```

Keďže zadanie presne nešpecifikovalo o aký typ článkov a komentárov pôjde (rozsah, formát,..), tak som vytvorila veľmi jednoduchý dizajn, ktorý som najprv navrhla vo [Figme](https://www.figma.com/design/3EiZiMLZQN2phbDcWLyiNN/Untitled?node-id=1-2&t=pEBf18Vj0gJy8NMC-1).

Ešte som sa nestretla aby sa dáta ukladali vrámci HTML filu, v produkčnom kóde sú dáta uložené na serveri a načítavajú sa z API pomocou **fetch** alebo nejakej knižnice (napr. **axios**). Na lepšiu prácu s dátami je potom fajn použiť **TanStack Query**. Dáta získavame pomocou HTTP requestov. Každý HTTP request obsahuje URL adresu endpoitu a typ operácie.
