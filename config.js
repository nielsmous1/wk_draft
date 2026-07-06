// ═══════════════════════════════════════════════════════════════════
//  WK DRAFT — SCOREBORD-INSTELLINGEN
// ═══════════════════════════════════════════════════════════════════
//
//  Dit bestand bevat JOUW instellingen voor het gedeelde scorebord.
//  Vul het één keer in. Je hoeft het daarna nooit meer aan te raken —
//  ook niet als je een nieuwe versie van wk_draft_game.html krijgt.
//  Bewaar dit bestand naast wk_draft_game.html (zelfde map / zelfde host).
//
//  ── EENMALIG INSTELLEN ────────────────────────────────────────────
//  1. Maak een gratis account op https://jsonbin.io
//  2. Klik "Create Bin", zet als inhoud precies:   {"spelers": []}
//     Sla op. Kopieer het Bin ID (uit de URL of de bin-info; ziet
//     eruit als 65a1b2c3d4e5f6...).
//  3. Ga naar "API Keys" → "Access Keys". Maak een NIEUWE Access Key
//     met alleen READ + UPDATE aangevinkt (NIET delete/create).
//     Kopieer die key.
//  4. Vul BIN_ID en API_KEY hieronder in (laat de aanhalingstekens staan).
//  5. Sla dit bestand op. Klaar.
//
//  Geen zin om in te stellen? Zet MODE op "local" — dan werkt alles,
//  maar ieder ziet alleen zijn eigen scores (niets wordt gedeeld).
// ═══════════════════════════════════════════════════════════════════

window.WK_CONFIG = {
  MODE: "jsonbin",              // "jsonbin" (gedeeld) of "local" (alleen deze browser)
  BIN_ID: "6a4bdf4bda38895dfe365bb1",
  API_KEY: "$2a$10$KSsEyh0o6zI/6rnckXPPguhWAz4Tvp0sOGJ0ysIChOoheuarw5t.W",
};
