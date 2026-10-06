# Acropolis Campus Walk

Street-view style campus navigation built from your photos. Click the arrows to walk,
search for a place to get a guided route, or use the mini-map.

## Run it locally (Antigravity IDE or any editor)

1. Open this folder (`campus-navigator`) in Antigravity.
2. Start a local server in the IDE terminal (either one):
   - `python3 -m http.server 5500`  then open http://localhost:5500
   - `npx serve .`
   Or simply double-click `index.html` — it also works from the file system.
3. Fonts load from Google Fonts when online; offline it falls back to system fonts.

## Using it
- **Arrows** on the photo move you. **Search** (press `/`) starts guided navigation: the next arrow glows yellow.
- **Walk me there** auto-plays the route. **Places** lists everything. Click mini-map pins for details.
- Keyboard: arrow keys move, `Enter` goes through a door, `Esc` cancels, `/` searches.
- **Edit mode (press E):** drag arrows to the right spot on each photo, then **Copy JSON** and paste it
  into `ARROW_OVERRIDES` at the bottom of `js/data.js`.

## Changing places and links
Everything lives in `js/data.js`: names, descriptions, search keywords, mini-map positions and which
photo links to which. Reverse links are added automatically. To add a photo: put it in `photos/`,
add an entry, and link it from a neighbouring place.

## Notes
- The order and names are inferred from your photos' capture times and signboards. Fix any that are wrong in `data.js`.
- Two duplicate photos were removed (palm crosswalk, MSME block entrance).
