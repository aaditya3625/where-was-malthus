# Where was Malthus?


A map-guessing game for economic history. Each round gives you a place's **urbanisation rate, population and average adult male height** at some point between 1 CE and 1850. You drop a pin where you think it was. The score falls off with distance, the same way GeoGuessr's does.

The rounds are chosen so the numbers don't always point the obvious way. Tokugawa Japan was as urban as most of Europe but among the shortest populations ever measured. The United States in 1820 was almost entirely rural and the tallest population in the data. Abbasid Iraq in 900 was more urban than any Christian European territory until the Dutch Republic.

**Play:** open `index.html`, or the GitHub Pages site for this repo.

## How it plays

- 5 rounds per game, drawn from 43, with no region repeated within a game.
- A pin inside the target region scores 5,000 points. Otherwise the score is 5,000·e^(−d/1500 km), where d is the distance from the region's centre.
- There are two optional hints, and each one cuts the round score by a quarter.
  - **Today's stats** gives the same place's present-day urban share, population, male height and GDP per head.
  - **Clue** gives the size of the largest city or a one-line description.
- "Hide era" mode removes the date.
- After each guess you get the sources for every figure and a then-vs-today comparison.

## Data

Every figure comes from published work. Where a rate had to be computed from published data, the in-game card says so.

| Variable | Source |
|---|---|
| Urbanisation, Europe 1500–1800 (towns ≥10k) | de Vries (1984), *European Urbanization 1500–1800* |
| Urbanisation, Europe & MENA 800–1800 | Computed as towns ≥10k ÷ country population from Bosker, Buringh & van Zanden (2013, *REStat*), "From Baghdad to London" data. Country populations from McEvedy & Jones (1978), as used in that dataset |
| Urbanisation, 1850 | Computed as towns ≥10k in Buringh, *Urbanisation Hub* (Utrecht, 2021; interpolated city sizes) ÷ Maddison population |
| Urbanisation, non-European cases | China: Chao (1986), and Xu, van Leeuwen & van Zanden (2018). Japan: Rozman (1973), via Hanley (1987). Mexico: Dobado & Marrero (2011, *EHR*). Russia: Mironov, via Stanziani. Mughal India: Habib (CEHI), with the critics' lower estimate shown alongside. Roman Italy: de Ligt (2012), Scheidel (2008). US: Census Bureau (places ≥2,500) |
| Population | Maddison Project Database 2020 (Bolt & van Zanden), 1801 and 1820 censuses, Mironov (2000) |
| Height, 1810s–1850s birth cohorts | Baten & Blum, Tübingen height data hub / Clio Infra (2015) |
| Height, skeletal | Giannecchini & Moggi-Cecchi (2008, *AJPA*), central Italy. Hiramoto (1972), Edo-period Kantō |
| Today | UN World Urbanization Prospects 2018; NCD-RisC (2016) heights, men born 1996; Maddison 2020 GDP per capita, 2018, in 2011$ |

### Caveats

- **Thresholds differ.** The Clio Infra "Urbanization Ratio" series was deliberately *not* used. It divides **all** of Buringh's (partly interpolated) towns by population with no size cutoff, so for Europe it runs 1.2 to 2.5 times higher than de Vries. Spain in 1800 comes out at about 24%, against de Vries's 11%. The rates computed here use the ≥10k cutoff, and they land within about 1.5 points of de Vries wherever both exist.
- **Some computed rates were excluded.** Portugal 1850 came out at about 27%, against de Vries's 13%, apparently because of interpolated small towns. Burma, Java and India in 1850 rest on too few actual city counts to trust. Asian rates therefore use the published estimates instead.
- **Dates don't always line up.** Within a round, urbanisation, population and height can come from different years. For example, urbanisation is from 1800, population from 1820 and height from men born in the 1810s. Each figure is labelled with its own year.
- **Pre-1810 heights are mostly missing.** They exist only as scattered skeletal studies, so most medieval and early-modern rounds show no height.
- **"Today" urban shares use national definitions**, not the ≥10k cutoff, so they read higher than the historical figures.

## Build

```bash
npm install
npm run build   # inlines d3, topojson, the world map and data/rounds.json into index.html
```

Round data lives in `data/rounds.json`. The page template is `src/template.html`.

Map geometry: Natural Earth via `world-atlas`.
