const OPENING_API = [
  {
    "name": "Alekhine Defense",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6"
  },
  {
    "name": "Alekhine Defense, 2. e5 Nd5 3. d4",
    "eco": "B03",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4"
  },
  {
    "name": "Alekhine Defense, 2. e5 Nd5 3. d4 d6",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6"
  },
  {
    "name": "Alekhine Defense, 3. d4 d6 4. c4",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4"
  },
  {
    "name": "Alekhine Defense: Balogh Variation",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/2BP4/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Bc4"
  },
  {
    "name": "Alekhine Defense: Brooklyn Variation",
    "eco": "B02",
    "fen": "rnbqkbnr/pppppppp/8/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Ng8"
  },
  {
    "name": "Alekhine Defense: Brooklyn Variation, Everglades Variation",
    "eco": "B02",
    "fen": "rnbqkbnr/ppppp1pp/8/4Pp2/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Ng8 3. d4 f5"
  },
  {
    "name": "Alekhine Defense: Buckley Attack",
    "eco": "B03",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/8/N7/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. Na3"
  },
  {
    "name": "Alekhine Defense: Exchange Variation",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/1n1P4/8/2PP4/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6"
  },
  {
    "name": "Alekhine Defense: Exchange Variation, Karpov Variation",
    "eco": "B03",
    "fen": "r2q1rk1/pp2ppbp/1nnp2p1/5b2/2PP1B2/2N2N1P/PP2BPP1/R2Q1RK1 b -",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6 cxd6 6. Nc3 g6 7. h3 Bg7 8. Nf3 O-O 9. Be2 Nc6 10. O-O Bf5 11. Bf4"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, 6... Nc6",
    "eco": "B03",
    "fen": "r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/8/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Cambridge Gambit",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pp1p/1n1p4/4P1p1/2PP1P2/8/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 g5"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Fianchetto Variation",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pp1p/1n1p2p1/4P3/2PP1P2/8/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 g6"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Ilyin-Zhenevsky Variation",
    "eco": "B03",
    "fen": "r2qkb1r/ppp1p1pp/1nn1p3/2P5/3P2b1/5N2/PP4PP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Nf3 Bg4 8. e6 fxe6 9. c5"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Korchnoi Variation",
    "eco": "B03",
    "fen": "rn1q1rk1/ppp1b1pp/1n2pp2/4Pb2/2PP4/2N2N2/PP2B1PP/R1BQ1RK1 w -",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Bf5 7. Nc3 e6 8. Nf3 Be7 9. Be2 O-O 10. O-O f6"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Main Line",
    "eco": "B03",
    "fen": "r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/4B3/PP4PP/RN1QKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Be3"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Tartakower Variation",
    "eco": "B03",
    "fen": "2kr3r/pppqbppp/1nn1p3/4Pb2/2PP4/2N1BN2/PP2B1PP/R2Q1RK1 w -",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Be3 Bf5 8. Nc3 e6 9. Nf3 Qd7 10. Be2 O-O-O 11. O-O Be7"
  },
  {
    "name": "Alekhine Defense: Four Pawns Attack, Trifunovic Variation",
    "eco": "B03",
    "fen": "rn1qkb1r/ppp1pppp/1n1p4/4Pb2/2PP1P2/8/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 Bf5"
  },
  {
    "name": "Alekhine Defense: Hunt Variation",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/1n1p4/2P1P3/3P4/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. c5"
  },
  {
    "name": "Alekhine Defense: Hunt Variation, Lasker Simul Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/pppp1ppp/4p3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Bc4 e6 6. Nc3"
  },
  {
    "name": "Alekhine Defense: Hunt Variation, Matsukevich Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/ppp1pppp/3p4/2P1P1B1/8/2P5/PP3PPP/R2QKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Nc3 Nxc3 6. dxc3 d6 7. Bg5"
  },
  {
    "name": "Alekhine Defense: Hunt Variation, Mikenas Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/ppp2ppp/3p4/2PBP3/8/8/PP1P1PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Bc4 e6 6. Nc3 d6 7. Nxd5 exd5 8. Bxd5"
  },
  {
    "name": "Alekhine Defense: Kmoch Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pp1ppppp/1n6/2p1P3/8/1B1P4/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. Bc4 Nb6 4. Bb3 c5 5. d3"
  },
  {
    "name": "Alekhine Defense: Krejcik Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. Bc4"
  },
  {
    "name": "Alekhine Defense: Krejcik Variation, Krejcik Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppBpp/8/8/4n3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. Bc4 Nxe4 3. Bxf7+"
  },
  {
    "name": "Alekhine Defense: Maroczy Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/5n2/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. d3"
  },
  {
    "name": "Alekhine Defense: Modern Variation",
    "eco": "B04",
    "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Alburt Variation",
    "eco": "B04",
    "fen": "rnbqkb1r/ppp1pp1p/3p2p1/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Alekhine Gambit",
    "eco": "B04",
    "fen": "rn1qkb1r/ppp1pppp/1n1p4/4P3/2PP2b1/5N2/PP2BPPP/RNBQK2R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. Nf3 Bg4 6. Be2"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Alekhine Variation",
    "eco": "B05",
    "fen": "rn1qkb1r/ppp1pppp/3p4/3nP3/2PP2b1/5N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. c4"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Keres Variation",
    "eco": "B04",
    "fen": "rnbqk2r/ppp1ppbp/1n1p2p1/4P3/P2P4/1B3N2/1PP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6 5. Bc4 Nb6 6. Bb3 Bg7 7. a4"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Larsen Variation",
    "eco": "B04",
    "fen": "rnbqkb1r/ppp1pppp/8/3np3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 dxe5"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Larsen-Haakert Variation",
    "eco": "B04",
    "fen": "r1bqkb1r/ppp1pppp/2np4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Nc6"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Main Line",
    "eco": "B05",
    "fen": "rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Panov Variation",
    "eco": "B05",
    "fen": "rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N1P/PPP2PP1/RNBQKB1R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. h3"
  },
  {
    "name": "Alekhine Defense: Modern Variation, Schmid Variation",
    "eco": "B04",
    "fen": "rnbqkb1r/ppp1pppp/1n1p4/4P3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Nb6"
  },
  {
    "name": "Alekhine Defense: Modern, Flohr Variation",
    "eco": "B05",
    "fen": "rn1qkb1r/pp2pppp/2pp4/3nP3/3P2b1/5N2/PPP1BPPP/RNBQK2R w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 c6"
  },
  {
    "name": "Alekhine Defense: Modern, Vitolins Attack",
    "eco": "B05",
    "fen": "rn1qkb1r/ppp1pppp/1n1p4/3PP3/2P3b1/5N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. c4 Nb6 6. d5"
  },
  {
    "name": "Alekhine Defense: Mokele Mbembe",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/8/4P3/4n3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Ne4"
  },
  {
    "name": "Alekhine Defense: Mokele Mbembe, Modern Line",
    "eco": "B02",
    "fen": "rnbqkb1r/ppppp1pp/5p2/4P3/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Ne4 3. d4 f6"
  },
  {
    "name": "Alekhine Defense: Mokele Mbembe, Vavra Defense",
    "eco": "B02",
    "fen": "rnbqkb1r/pppp1ppp/4p3/4P3/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Ne4 3. d4 e6"
  },
  {
    "name": "Alekhine Defense: Normal Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5"
  },
  {
    "name": "Alekhine Defense: O'Sullivan Gambit",
    "eco": "B03",
    "fen": "rnbqkb1r/p1pppppp/8/1p1nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 b5"
  },
  {
    "name": "Alekhine Defense: Saemisch Attack",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/8/2N5/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. Nc3"
  },
  {
    "name": "Alekhine Defense: Scandinavian Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. Nc3 d5"
  },
  {
    "name": "Alekhine Defense: Scandinavian Variation, Geschev Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3P4/8/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. Nc3 d5 3. exd5 c6"
  },
  {
    "name": "Alekhine Defense: Scandinavian Variation, Myers Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 Nf6 2. Nc3 d5 3. d3 dxe4 4. Bg5"
  },
  {
    "name": "Alekhine Defense: Spielmann Gambit",
    "eco": "B02",
    "fen": "rnbqkb1r/pppnpppp/4P3/3p4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. Nc3 d5 3. e5 Nfd7 4. e6"
  },
  {
    "name": "Alekhine Defense: Steiner Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/1n6/4P3/2P5/1P6/P2P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. b3"
  },
  {
    "name": "Alekhine Defense: The Squirrel",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/8/4P3/2P2n2/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nf4"
  },
  {
    "name": "Alekhine Defense: Two Pawn Attack",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/2P5/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4"
  },
  {
    "name": "Alekhine Defense: Two Pawn Attack, Lasker Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/1n6/2P1P3/8/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5"
  },
  {
    "name": "Alekhine Defense: Two Pawns Attack, Mikenas Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/ppp2ppp/3pp3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Bc4 e6 6. Nc3 d6"
  },
  {
    "name": "Alekhine Defense: Welling Variation",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/8/1P6/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. b3"
  },
  {
    "name": "Amar Gambit",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQK2R w KQkq",
    "moves": "1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4"
  },
  {
    "name": "Amar Opening",
    "eco": "E00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nh3"
  },
  {
    "name": "Amar Opening: Gent Gambit",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp2ppp/8/3p4/8/6PB/PPPPP3/RNBQ1RK1 b kq",
    "moves": "1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4 5. O-O fxg3 6. hxg3"
  },
  {
    "name": "Amar Opening: Paris Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/5P2/6PN/PPPPP2P/RNBQKB1R b KQkq",
    "moves": "1. Nh3 d5 2. g3 e5 3. f4"
  },
  {
    "name": "Amazon Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 d5 2. Qd3"
  },
  {
    "name": "Amazon Attack: Siberian Attack",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2NQ4/PPP1PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Qd3"
  },
  {
    "name": "Amsterdam Attack",
    "eco": "A00",
    "fen": "r1bqkb1r/ppp2ppp/2np1n2/4p3/2P5/1PN1P3/P2P1PPP/R1BQKBNR w KQkq",
    "moves": "1. e3 e5 2. c4 d6 3. Nc3 Nc6 4. b3 Nf6"
  },
  {
    "name": "Anderssen Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq",
    "moves": "1. a3"
  },
  {
    "name": "Anderssen Opening: Polish Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/1ppppppp/8/p7/1P6/P7/2PPPPPP/RNBQKBNR b KQkq",
    "moves": "1. a3 a5 2. b4"
  },
  {
    "name": "Australian Defense",
    "eco": "A40",
    "fen": "r1bqkbnr/pppppppp/n7/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Na6"
  },
  {
    "name": "Barnes Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/ppppp1pp/5p2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 f6"
  },
  {
    "name": "Barnes Opening: Fool's Mate",
    "eco": "A00",
    "fen": "rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq",
    "moves": "1. f3 e5 2. g4 Qh4#"
  },
  {
    "name": "Barnes Opening: Gedult Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp1pp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. f3 f5 2. e4 fxe4 3. Nc3"
  },
  {
    "name": "Barnes Opening: Gedult Gambit, 3. d4 dxe4 4. c3",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pp1p/6p1/8/3Pp3/2P2P2/PP4PP/RNBQKBNR b KQkq",
    "moves": "1. f3 d5 2. e4 g6 3. d4 dxe4 4. c3"
  },
  {
    "name": "Barnes Opening: Hammerschlag",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/5P2/PPPPPKPP/RNBQ1BNR b kq",
    "moves": "1. f3 e5 2. Kf2"
  },
  {
    "name": "Barnes Opening: Walkerling",
    "eco": "A00",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5P2/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. f3 e5 2. e4 Nf6 3. Bc4"
  },
  {
    "name": "Benko Gambit",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5"
  },
  {
    "name": "Benko Gambit, 8. Kxf1 d6 9. g3",
    "eco": "A59",
    "fen": "rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N3P1/PP3P1P/R1BQ1KNR b kq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. e4 Bxf1 8. Kxf1 d6 9. g3"
  },
  {
    "name": "Benko Gambit Accepted",
    "eco": "A57",
    "fen": "rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6"
  },
  {
    "name": "Benko Gambit Accepted, Central Storming Variation",
    "eco": "A57",
    "fen": "rn1qkb1r/3ppp1p/b4np1/2pP4/5P2/2N5/PP2P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. f4"
  },
  {
    "name": "Benko Gambit Accepted, Dlugy Variation",
    "eco": "A57",
    "fen": "rnbqkb1r/3ppppp/p4n2/1PpP4/8/5P2/PP2P1PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. f3"
  },
  {
    "name": "Benko Gambit Accepted, Fianchetto Variation",
    "eco": "A58",
    "fen": "rn1qk2r/4ppbp/b2p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. g3 d6 8. Bg2 Bg7 9. Nf3"
  },
  {
    "name": "Benko Gambit Accepted, Fully Accepted Variation",
    "eco": "A58",
    "fen": "rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6"
  },
  {
    "name": "Benko Gambit Accepted, King Walk Variation",
    "eco": "A59",
    "fen": "rn1q1rk1/4ppbp/3p1np1/2pP4/4P3/2N2NP1/PP3PKP/R1BQ3R b -",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. Nf3 d6 8. e4 Bxf1 9. Kxf1 Bg7 10. g3 O-O 11. Kg2"
  },
  {
    "name": "Benko Gambit Accepted, Modern Variation",
    "eco": "A57",
    "fen": "rnbqkb1r/3ppppp/p4n2/1PpP4/8/4P3/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. e3"
  },
  {
    "name": "Benko Gambit Accepted, Pawn Return Variation",
    "eco": "A57",
    "fen": "rnbqkb1r/3ppppp/pP3n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. b6"
  },
  {
    "name": "Benko Gambit Accepted, Yugoslav, with Bxf1 and Nge2",
    "eco": "A59",
    "fen": "rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N5/PP2NPPP/R1BQ1K1R b kq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. e4 Bxf1 8. Kxf1 d6 9. Nge2"
  },
  {
    "name": "Benko Gambit Accepted, Yugoslav, without 7... Bxf1",
    "eco": "A59",
    "fen": "rn1qkb1r/4pppp/b2p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. e4"
  },
  {
    "name": "Benko Gambit Declined, Bishop Attack",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP2B1/2P5/8/PP2PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. Bg5"
  },
  {
    "name": "Benko Gambit Declined, Hjoerring Countergambit",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P1P3/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. e4"
  },
  {
    "name": "Benko Gambit Declined, Main Line",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. Nf3"
  },
  {
    "name": "Benko Gambit Declined, Pseudo-Saemisch",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5P2/PP2P1PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. f3"
  },
  {
    "name": "Benko Gambit Declined, Quiet Line",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP1NPPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. Nd2"
  },
  {
    "name": "Benko Gambit Declined, Sosonko Variation",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/P1P5/8/1P2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. a4"
  },
  {
    "name": "Benko Gambit: Fianchetto Variation",
    "eco": "A58",
    "fen": "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6 8. g3"
  },
  {
    "name": "Benko Gambit: Mutkin Countergambit",
    "eco": "A57",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P3P1/8/PP2PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. g4"
  },
  {
    "name": "Benko Gambit: Nd2 Variation",
    "eco": "A58",
    "fen": "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6 8. Nd2"
  },
  {
    "name": "Benko Gambit: Nescafe Frappe Attack",
    "eco": "A57",
    "fen": "rnbqkb1r/4pppp/3p1n2/1NpP4/1pB1P3/8/PP3PPP/R1BQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3 axb5 6. e4 b4 7. Nb5 d6 8. Bc4"
  },
  {
    "name": "Benko Gambit: Zaitsev System",
    "eco": "A58",
    "fen": "rnbqkb1r/3ppppp/p4n2/1PpP4/8/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3"
  },
  {
    "name": "Benko Gambit: Zaitsev Variation, Nescafe Frappe Attack",
    "eco": "A57",
    "fen": "rnbqkb1r/3ppppp/5n2/1NpP4/1p2P3/8/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3 axb5 6. e4 b4 7. Nb5"
  },
  {
    "name": "Benoni Defense",
    "eco": "A56",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5"
  },
  {
    "name": "Benoni Defense, 5. cxd5 d6 6. Nc3 g6",
    "eco": "A61",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6"
  },
  {
    "name": "Benoni Defense: Benoni Gambit Accepted",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1ppppp/8/2P5/8/8/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 c5 2. dxc5"
  },
  {
    "name": "Benoni Defense: Benoni Gambit, Schlenker Defense",
    "eco": "A43",
    "fen": "r1bqkbnr/pp1ppppp/n7/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. dxc5 Na6"
  },
  {
    "name": "Benoni Defense: Benoni-Indian Defense",
    "eco": "A43",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 Nf6"
  },
  {
    "name": "Benoni Defense: Benoni-Indian Defense, Kingside Move Order",
    "eco": "A43",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2pP4/8/5N2/PPP1PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c5 3. d5"
  },
  {
    "name": "Benoni Defense: Benoni-Staunton Gambit",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1pp1pp/8/2pP1p2/4P3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 c5 2. d5 f5 3. e4"
  },
  {
    "name": "Benoni Defense: Classical Variation",
    "eco": "A70",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4"
  },
  {
    "name": "Benoni Defense: Classical Variation, Argentine Counterattack",
    "eco": "A75",
    "fen": "rn1q1rk1/1p3pbp/p2p1np1/2pP4/P3P1b1/2N2N2/1P2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Be2 O-O 9. O-O a6 10. a4 Bg4"
  },
  {
    "name": "Benoni Defense: Classical Variation, Averbakh-Grivas Attack",
    "eco": "A71",
    "fen": "rnbqk2r/pp3pbp/3p1np1/2pP2B1/4P3/2N2N2/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Bg5"
  },
  {
    "name": "Benoni Defense: Classical Variation, Czerniak Defense",
    "eco": "A76",
    "fen": "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8"
  },
  {
    "name": "Benoni Defense: Classical Variation, Czerniak Defense, 9. O-O Re8 10. Nd2 Na6",
    "eco": "A78",
    "fen": "r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2 Na6"
  },
  {
    "name": "Benoni Defense: Classical Variation, Czerniak Defense, 10. Nd2 Na6 11. f3",
    "eco": "A79",
    "fen": "r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N2P2/PP1NB1PP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2 Na6 11. f3"
  },
  {
    "name": "Benoni Defense: Classical Variation, Czerniak Defense, Tal Line",
    "eco": "A77",
    "fen": "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2"
  },
  {
    "name": "Benoni Defense: Classical Variation, Full Line",
    "eco": "A74",
    "fen": "rnbq1rk1/1p3pbp/p2p1np1/2pP4/P3P3/2N2N2/1P2BPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O a6 10. a4"
  },
  {
    "name": "Benoni Defense: Classical Variation, Main Line",
    "eco": "A73",
    "fen": "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O"
  },
  {
    "name": "Benoni Defense: Classical Variation, New York Variation",
    "eco": "A70",
    "fen": "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N1P/PP3PP1/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. h3"
  },
  {
    "name": "Benoni Defense: Classical Variation, Traditional Variation",
    "eco": "A72",
    "fen": "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Be2"
  },
  {
    "name": "Benoni Defense: Classical, without 9. O-O",
    "eco": "A72",
    "fen": "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O"
  },
  {
    "name": "Benoni Defense: Cormorant Gambit",
    "eco": "A43",
    "fen": "rnbqkbnr/p2ppppp/1p6/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. dxc5 b6"
  },
  {
    "name": "Benoni Defense: Czech Benoni Defense",
    "eco": "A56",
    "fen": "rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e5"
  },
  {
    "name": "Benoni Defense: Fianchetto Variation",
    "eco": "A61",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. g3"
  },
  {
    "name": "Benoni Defense: Fianchetto Variation, 7. Bg2 Bg7 8. Nf3 O-O",
    "eco": "A62",
    "fen": "rnbq1rk1/pp3pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O"
  },
  {
    "name": "Benoni Defense: Fianchetto Variation, Hastings Defense",
    "eco": "A63",
    "fen": "r1bq1rk1/pp1n1pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O 9. O-O Nbd7"
  },
  {
    "name": "Benoni Defense: Fianchetto Variation, Hastings Defense, Main Line",
    "eco": "A64",
    "fen": "r1bqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N3P1/1P1NPPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O 9. O-O a6 10. a4 Nbd7 11. Nd2 Re8"
  },
  {
    "name": "Benoni Defense: Four Pawns Attack",
    "eco": "A68",
    "fen": "rnbq1rk1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP4PP/R1BQKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. Nf3 O-O"
  },
  {
    "name": "Benoni Defense: Four Pawns Attack, Main Line",
    "eco": "A69",
    "fen": "rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8"
  },
  {
    "name": "Benoni Defense: Franco-Sicilian Hybrid",
    "eco": "A43",
    "fen": "rnbqk2r/pp2npbp/3p2p1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 e6 2. c4 c5 3. d5 exd5 4. cxd5 d6 5. Nc3 g6 6. e4 Bg7 7. Nf3 Ne7"
  },
  {
    "name": "Benoni Defense: Hawk Variation",
    "eco": "A43",
    "fen": "rnbqkb1r/pp1ppppp/5n2/3P4/2p5/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c5 3. d5 c4"
  },
  {
    "name": "Benoni Defense: Hromadka System",
    "eco": "A57",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 d6"
  },
  {
    "name": "Benoni Defense: King's Indian System",
    "eco": "A56",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e5 4. Nc3 d6 5. e4 g6"
  },
  {
    "name": "Benoni Defense: King's Pawn Line",
    "eco": "A65",
    "fen": "rnbqkb1r/pp3ppp/3p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4"
  },
  {
    "name": "Benoni Defense: Knight's Tour Variation",
    "eco": "A61",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Nd2"
  },
  {
    "name": "Benoni Defense: Mikenas Variation",
    "eco": "A66",
    "fen": "rnbqk2r/pp3pbp/3p1np1/2pPP3/5P2/2N5/PP4PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. e5"
  },
  {
    "name": "Benoni Defense: Modern Variation",
    "eco": "A60",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6"
  },
  {
    "name": "Benoni Defense: Modern Variation, Snake Variation",
    "eco": "A60",
    "fen": "rnbqk2r/pp1p1ppp/3b1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 Bd6"
  },
  {
    "name": "Benoni Defense: Old Benoni",
    "eco": "A43",
    "fen": "rnbqkbnr/pp2pppp/3p4/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 d6"
  },
  {
    "name": "Benoni Defense: Old Benoni, Schmid Variation",
    "eco": "A43",
    "fen": "rnbqkbnr/pp2pp1p/3p2p1/2pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 d6 3. Nc3 g6"
  },
  {
    "name": "Benoni Defense: Pawn Storm Variation",
    "eco": "A66",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4"
  },
  {
    "name": "Benoni Defense: Snail Variation",
    "eco": "A43",
    "fen": "r1bqkbnr/pp1ppppp/n7/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 Na6"
  },
  {
    "name": "Benoni Defense: Taimanov Variation",
    "eco": "A67",
    "fen": "rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. Bb5+"
  },
  {
    "name": "Benoni Defense: Uhlmann Variation",
    "eco": "A61",
    "fen": "rnbqkb1r/pp3p1p/3p1np1/2pP2B1/8/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg5"
  },
  {
    "name": "Benoni Defense: Weenink Variation",
    "eco": "A56",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/2P5/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. dxc5 e6"
  },
  {
    "name": "Benoni Defense: Woozle",
    "eco": "A43",
    "fen": "rnb1kb1r/pp1ppppp/5n2/q1pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 Nf6 3. Nc3 Qa5"
  },
  {
    "name": "Benoni Defense: Zilbermints-Benoni Gambit",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/1P1P4/8/P1P1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 c5 2. b4"
  },
  {
    "name": "Benoni Defense: Zilbermints-Benoni Gambit, 2. Nf3 cxd4 3. b4",
    "eco": "A56",
    "fen": "rnbqkbnr/pp1ppppp/8/8/1P1p4/5N2/P1P1PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 c5 2. Nf3 cxd4 3. b4"
  },
  {
    "name": "Benoni Defense: Zilbermints-Benoni Gambit, Tamarkin Countergambit",
    "eco": "A56",
    "fen": "rnbqkbnr/pp1p1ppp/8/4p3/1P1p4/5N2/P1P1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 c5 2. Nf3 cxd4 3. b4 e5"
  },
  {
    "name": "Bird Opening",
    "eco": "A02",
    "fen": "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq",
    "moves": "1. f4"
  },
  {
    "name": "Bird Opening, 1... Nf6",
    "eco": "A03",
    "fen": "rnbqkb1r/pppppppp/5n2/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 Nf6"
  },
  {
    "name": "Bird Opening: Batavo-Polish Attack",
    "eco": "A02",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/1P3P2/5N2/P1PPP1PP/RNBQKB1R b KQkq",
    "moves": "1. f4 Nf6 2. Nf3 g6 3. b4"
  },
  {
    "name": "Bird Opening: Dutch Variation",
    "eco": "A03",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 d5"
  },
  {
    "name": "Bird Opening: Dutch Variation, Batavo Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/4pP2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. f4 d5 3. Nf3 dxe4"
  },
  {
    "name": "Bird Opening: Dutch Variation, Dudweiler Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/5PP1/8/PPPPP2P/RNBQKBNR b KQkq",
    "moves": "1. f4 d5 2. g4"
  },
  {
    "name": "Bird Opening: From's Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 e5"
  },
  {
    "name": "Bird Opening: From's Gambit, Bahr Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/5P2/2N5/PPPPP1PP/R1BQKBNR b KQkq",
    "moves": "1. f4 e5 2. Nc3"
  },
  {
    "name": "Bird Opening: From's Gambit, Langheld Gambit",
    "eco": "A02",
    "fen": "rnbqkb1r/ppp2ppp/3P1n2/8/8/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 e5 2. fxe5 d6 3. exd6 Nf6"
  },
  {
    "name": "Bird Opening: From's Gambit, Lasker Variation",
    "eco": "A02",
    "fen": "rnbqk1nr/ppp2p1p/3b4/6p1/8/5N2/PPPPP1PP/RNBQKB1R w KQkq",
    "moves": "1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nf3 g5"
  },
  {
    "name": "Bird Opening: From's Gambit, Lipke Variation",
    "eco": "A02",
    "fen": "rnbqk2r/ppp2ppp/3b3n/8/3P4/5N2/PPP1P1PP/RNBQKB1R b KQkq",
    "moves": "1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nf3 Nh6 5. d4"
  },
  {
    "name": "Bird Opening: Hobbs Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 g5"
  },
  {
    "name": "Bird Opening: Hobbs-Zilbermints Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pppppp2/7p/6p1/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq",
    "moves": "1. f4 h6 2. Nf3 g5"
  },
  {
    "name": "Bird Opening: Horsefly Defense",
    "eco": "A03",
    "fen": "rnbqkb1r/pppppppp/7n/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 Nh6"
  },
  {
    "name": "Bird Opening: Lasker Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 e5 2. fxe5 f6"
  },
  {
    "name": "Bird Opening: Lasker Variation",
    "eco": "A03",
    "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/5P2/4PN2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. f4 d5 2. Nf3 Nf6 3. e3 c5"
  },
  {
    "name": "Bird Opening: Mujannah",
    "eco": "A03",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq",
    "moves": "1. f4 Nf6 2. c4"
  },
  {
    "name": "Bird Opening: Myers Defense",
    "eco": "A02",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/5P2/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 b5"
  },
  {
    "name": "Bird Opening: Platz Gambit",
    "eco": "A02",
    "fen": "rnbqkb1r/ppppnppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 e5 2. fxe5 Ne7"
  },
  {
    "name": "Bird Opening: Schlechter Gambit",
    "eco": "A02",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 e5 2. fxe5 Nc6"
  },
  {
    "name": "Bird Opening: Siegener Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/pp1p1ppp/8/2p5/3p1P2/2P2N2/PP2P1PP/RNBQKB1R b KQkq",
    "moves": "1. f4 e5 2. d4 exd4 3. Nf3 c5 4. c3"
  },
  {
    "name": "Bird Opening: Sturm Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq",
    "moves": "1. f4 d5 2. c4"
  },
  {
    "name": "Bird Opening: Swiss Gambit",
    "eco": "A02",
    "fen": "rnbqkb1r/ppppp1pp/5n2/8/4pPP1/2N5/PPPP3P/R1BQKBNR b KQkq",
    "moves": "1. f4 f5 2. e4 fxe4 3. Nc3 Nf6 4. g4"
  },
  {
    "name": "Bird Opening: Thomas Gambit",
    "eco": "A02",
    "fen": "rnbqkb1r/pp2pppp/5n2/2p5/3p1P2/1P2PN2/PBPP2PP/RN1QKB1R b KQkq",
    "moves": "1. f4 d5 2. b3 Nf6 3. Bb2 d4 4. Nf3 c5 5. e3"
  },
  {
    "name": "Bird Opening: Wagner-Zwitersch Gambit",
    "eco": "A02",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/4PP2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. f4 f5 2. e4"
  },
  {
    "name": "Bird Opening: Williams Gambit",
    "eco": "A03",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/4PP2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. f4 d5 2. e4"
  },
  {
    "name": "Bird Opening: Williams Gambit, 3. Nc3 Nf6 4. Qe2",
    "eco": "A02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPQ1PP/R1B1KBNR b KQkq",
    "moves": "1. f4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Qe2"
  },
  {
    "name": "Bird Opening: Williams-Zilbermints Gambit",
    "eco": "A02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPN1PP/R1BQKB1R b KQkq",
    "moves": "1. f4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Nge2"
  },
  {
    "name": "Bishop's Opening",
    "eco": "C23",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4"
  },
  {
    "name": "Bishop's Opening: Anderssen Gambit",
    "eco": "C23",
    "fen": "rnbqkbnr/p2p1ppp/2p5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 b5 3. Bxb5 c6"
  },
  {
    "name": "Bishop's Opening: Berlin Defense",
    "eco": "C24",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6"
  },
  {
    "name": "Bishop's Opening: Berlin Defense, Greco Gambit",
    "eco": "C23",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1PP2/8/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. f4"
  },
  {
    "name": "Bishop's Opening: Boden-Kieseritzky Gambit",
    "eco": "C27",
    "fen": "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Bc4 Nxe4 4. Nc3"
  },
  {
    "name": "Bishop's Opening: Boi Variation",
    "eco": "C20",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5"
  },
  {
    "name": "Bishop's Opening: Calabrese Countergambit",
    "eco": "C23",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 f5"
  },
  {
    "name": "Bishop's Opening: Calabrese Countergambit, Jaenisch Variation",
    "eco": "C23",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/3P4/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 f5 3. d3"
  },
  {
    "name": "Bishop's Opening: Four Pawns Gambit",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/8/2BPP2b/5N2/P1P4p/RNBQ1R1K b kq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. b4 Bxb4 4. f4 exf4 5. Nf3 Be7 6. d4 Bh4+ 7. g3 fxg3 8. O-O gxh2+ 9. Kh1"
  },
  {
    "name": "Bishop's Opening: Horwitz Gambit",
    "eco": "C23",
    "fen": "rnbqkb1r/p1pp1ppp/5n2/1p2p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. Nc3 b5"
  },
  {
    "name": "Bishop's Opening: Khan Gambit",
    "eco": "C23",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 d5"
  },
  {
    "name": "Bishop's Opening: Kitchener Folly",
    "eco": "C24",
    "fen": "rnbq1rk1/ppppbppp/5n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQ",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d3 Be7 4. Nf3 O-O"
  },
  {
    "name": "Bishop's Opening: Krejcik Gambit",
    "eco": "C24",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/5P2/P1PPN1PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. f3 Bc5 4. Ne2 Nc6 5. b4"
  },
  {
    "name": "Bishop's Opening: Lewis Countergambit",
    "eco": "C23",
    "fen": "rnbqk1nr/ppp2ppp/8/2bpp3/2B1P3/2P5/PP1P1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. c3 d5"
  },
  {
    "name": "Bishop's Opening: Lewis Countergambit, 3. c3 d5 4. Bxd5 Nf6",
    "eco": "C23",
    "fen": "rnbqk2r/ppp2ppp/5n2/2bBp3/4P3/2P5/PP1P1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. c3 d5 4. Bxd5 Nf6"
  },
  {
    "name": "Bishop's Opening: Lewis Countergambit, Walker Variation",
    "eco": "C23",
    "fen": "rnbqk2r/ppp2ppp/5n2/2bBp3/3PP3/2P5/PP3PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. c3 d5 4. Bxd5 Nf6 5. d4"
  },
  {
    "name": "Bishop's Opening: Lewis Gambit",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. d4"
  },
  {
    "name": "Bishop's Opening: Lisitsyn Variation",
    "eco": "C23",
    "fen": "r2qkbnr/pp3ppp/8/3pn3/8/8/PPP1NPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Bc4 c6 3. d4 d5 4. exd5 cxd5 5. Bb5+ Bd7 6. Bxd7+ Nxd7 7. dxe5 Nxe5 8. Ne2"
  },
  {
    "name": "Bishop's Opening: Lopez Gambit",
    "eco": "C23",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1PP2/2P5/PP1PQ1PP/RNB1K1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. Qe2 Nc6 4. c3 Nf6 5. f4"
  },
  {
    "name": "Bishop's Opening: Lopez Variation",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPPQPPP/RNB1K1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. Qe2"
  },
  {
    "name": "Bishop's Opening: Lopez Variation, Lopez Gambit",
    "eco": "C23",
    "fen": "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1PP2/8/PPPPQ1PP/RNB1K1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. Qe2 Nf6 4. f4"
  },
  {
    "name": "Bishop's Opening: McDonnell Gambit",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/1PB1P3/8/P1PP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. b4"
  },
  {
    "name": "Bishop's Opening: McDonnell Gambit, La Bourdonnais-Denker Gambit",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/4p3/1bB1P3/2P5/P2P1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. b4 Bxb4 4. c3"
  },
  {
    "name": "Bishop's Opening: McDonnell Gambit, McDonnell Double Gambit",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/4p3/1bB1PP2/8/P1PP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. b4 Bxb4 4. f4"
  },
  {
    "name": "Bishop's Opening: Pachman Gambit",
    "eco": "C23",
    "fen": "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. Ne2 Nxe4 4. Nec3"
  },
  {
    "name": "Bishop's Opening: Philidor Counterattack",
    "eco": "C23",
    "fen": "rnbqkbnr/pp1p1ppp/2p5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 c6"
  },
  {
    "name": "Bishop's Opening: Philidor Variation",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/2P5/PP1P1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. c3"
  },
  {
    "name": "Bishop's Opening: Ponziani Gambit",
    "eco": "C24",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d4"
  },
  {
    "name": "Bishop's Opening: Pratt Variation",
    "eco": "C23",
    "fen": "rnbq1rk1/ppp2ppp/5P2/2b4Q/2pp4/2P5/PP3PPP/RNB1K1NR w KQ",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. c3 Nf6 4. d4 exd4 5. e5 d5 6. exf6 dxc4 7. Qh5 O-O"
  },
  {
    "name": "Bishop's Opening: Stein Gambit",
    "eco": "C23",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/2B1PP2/8/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. f4"
  },
  {
    "name": "Bishop's Opening: Thorold Gambit",
    "eco": "C23",
    "fen": "rnbqkbnr/p1pp2pp/8/1B2pp2/4P3/8/PPPP1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 b5 3. Bxb5 f5"
  },
  {
    "name": "Bishop's Opening: Urusov Gambit",
    "eco": "C24",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. Nf3"
  },
  {
    "name": "Bishop's Opening: Urusov Gambit, Keidansky Gambit",
    "eco": "C24",
    "fen": "rnbqkb1r/pppp1ppp/8/8/2BQn3/5N2/PPP2PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. Nf3 Nxe4 5. Qxd4"
  },
  {
    "name": "Bishop's Opening: Urusov Gambit, Panov Variation",
    "eco": "C24",
    "fen": "rnb1k2r/ppp1qppp/5n2/3P4/1bBp4/2P2N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. Nf3 d5 5. exd5 Bb4+ 6. c3 Qe7+"
  },
  {
    "name": "Bishop's Opening: Vienna Hybrid",
    "eco": "C28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d3 Nc6 4. Nc3"
  },
  {
    "name": "Bishop's Opening: Vienna Hybrid, Hromadka Variation",
    "eco": "C28",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2NP4/PPP1NPPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6 4. d3 Bb4 5. Ne2"
  },
  {
    "name": "Bishop's Opening: Vienna Hybrid, Spielmann Attack",
    "eco": "C26",
    "fen": "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Bc5 4. d3"
  },
  {
    "name": "Bishop's Opening: Warsaw Gambit",
    "eco": "C24",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/2P5/PP3PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. c3"
  },
  {
    "name": "Bishop's Opening: del Rio Variation",
    "eco": "C23",
    "fen": "rnb1k1nr/pppp1ppp/8/2b1p1q1/2B1P3/2P5/PP1P1PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. Bc4 Bc5 3. c3 Qg5"
  },
  {
    "name": "Blackburne Shilling Gambit",
    "eco": "C50",
    "fen": "r1b1kbnr/pppp1Npp/8/8/4q3/5n2/PPPPBP1P/RNBQKR2 w Qkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5 Qg5 5. Nxf7 Qxg2 6. Rf1 Qxe4+ 7. Be2 Nf3#"
  },
  {
    "name": "Blackmar-Diemer Gambit",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. e4"
  },
  {
    "name": "Blackmar-Diemer Gambit, 2. Nc3 d5 3. e4",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, Brombacher Countergambit",
    "eco": "D00",
    "fen": "rnbqkb1r/pp2pppp/5n2/2p5/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 dxe4 4. f3 c5"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, Elbert Countergambit",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp2ppp/5n2/4p3/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 e5"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, Grosshans Defense",
    "eco": "D00",
    "fen": "rn1qkbnr/pppbpppp/8/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Bd7"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, Lamb Defense",
    "eco": "D00",
    "fen": "r1bqkb1r/ppp1pppp/2n2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 Nc6"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, Langeheinecke Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N1pP2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 dxe4 4. f3 e3"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, O'Kelly Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. f3 d5 3. e4 dxe4 4. Nc3 c6"
  },
  {
    "name": "Blackmar-Diemer Gambit Declined, Weinsbach Declination",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. f3 e6 4. e4 dxe4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Bogoljubov Defense, Mad Dog Attack",
    "eco": "D00",
    "fen": "rnbqk2r/ppp1ppbp/5np1/8/2BP3P/2N2N2/PPP3P1/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. h4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Bogoljubov Variation",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 dxe4 4. f3 exf3 5. Nxf3 g6"
  },
  {
    "name": "Blackmar-Diemer Gambit: Bogoljubov Variation, Kloss Attack",
    "eco": "D00",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1BQ1R1K b -",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. O-O O-O 8. Kh1"
  },
  {
    "name": "Blackmar-Diemer Gambit: Bogoljubov Variation, Nimzowitsch Attack",
    "eco": "D00",
    "fen": "rnbqk2r/ppp1ppbp/5np1/4N3/2BP4/2N5/PPP3PP/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. Ne5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Bogoljubov Variation, Studier Attack",
    "eco": "D00",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1B1QRK1 b -",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 dxe4 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. O-O O-O 8. Qe1"
  },
  {
    "name": "Blackmar-Diemer Gambit: Diemer-Rosenberg Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/3Pp3/4B3/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Be3"
  },
  {
    "name": "Blackmar-Diemer Gambit: Euwe Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 dxe4 4. f3 exf3 5. Nxf3 e6"
  },
  {
    "name": "Blackmar-Diemer Gambit: Euwe Defense, Zilbermints Gambit",
    "eco": "D00",
    "fen": "r1bqk2r/ppp1bppp/4pn2/6B1/3n4/2NB1N2/PPP3PP/R2Q1R1K b kq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 e6 6. Bg5 Be7 7. Bd3 Nc6 8. O-O Nxd4 9. Kh1"
  },
  {
    "name": "Blackmar-Diemer Gambit: Fritz Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2BPp3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Bc4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Gedult Gambit",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/3Pp3/5P2/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. f3"
  },
  {
    "name": "Blackmar-Diemer Gambit: Kaulich Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/pp2pppp/5n2/2p5/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 c5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Diemer Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N1B3/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Be3"
  },
  {
    "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Endgame Variation",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp2ppp/8/4P3/4p3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. dxe5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Rassmussen Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N5/PPP1NPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Nge2"
  },
  {
    "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Simple Variation",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Nxe4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Sneider Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p2Q/3Pp3/2N5/PPP2PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 d5 2. d4 dxe4 3. Nc3 e5 4. Qh5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Netherlands Variation",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1p1pp/8/5p2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 f5 2. Nc3 d5 3. e4 dxe4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Pietrowsky Defense",
    "eco": "D00",
    "fen": "r1bqkb1r/ppp1pppp/2n2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Nc6"
  },
  {
    "name": "Blackmar-Diemer Gambit: Rasa-Studier Gambit",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/3Pp3/2N1B3/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Be3"
  },
  {
    "name": "Blackmar-Diemer Gambit: Ritter Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/p1p1pppp/1p3n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 b6"
  },
  {
    "name": "Blackmar-Diemer Gambit: Rook Pawn Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1ppp1/5n2/7p/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 h5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Ryder Gambit",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N2Q2/PPP3PP/R1B1KBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Qxf3"
  },
  {
    "name": "Blackmar-Diemer Gambit: Schlutter Defense",
    "eco": "D00",
    "fen": "r1bqkb1r/pppnpppp/5n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Nbd7"
  },
  {
    "name": "Blackmar-Diemer Gambit: Tartakower Variation",
    "eco": "D00",
    "fen": "rn1qkb1r/ppp1pppp/5n2/5b2/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. e4 d5 2. d4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bf5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Teichmann Variation",
    "eco": "D00",
    "fen": "rn1qkb1r/ppp1pppp/5n2/8/3P2b1/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. e4 d5 2. d4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bg4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Vienna Variation",
    "eco": "D00",
    "fen": "rn1qkb1r/ppp1pppp/5n2/5b2/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 dxe4 4. f3 Bf5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Zeller Defense",
    "eco": "D00",
    "fen": "rn1qkbnr/ppp1pppp/8/5b2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Bf5"
  },
  {
    "name": "Blackmar-Diemer Gambit: Zeller Defense, Soller Attack",
    "eco": "D00",
    "fen": "rn1qkb1r/ppp1pppp/5n2/5b2/2BPp3/2N2P2/PPP3PP/R1BQK1NR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Bf5 4. f3 Nf6 5. Bc4"
  },
  {
    "name": "Blackmar-Diemer Gambit: Ziegler Defense",
    "eco": "D00",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 c6"
  },
  {
    "name": "Blackmar-Diemer Gambit: von Popiel Gambit",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Bg5"
  },
  {
    "name": "Blackmar-Diemer Gambit: von Popiel Gambit, Zilbermints Variation",
    "eco": "D00",
    "fen": "rn1qk2r/ppp2ppp/5pb1/1Q6/1b1Pp1P1/2N5/PPP2P1P/R3KBNR b KQkq",
    "moves": "1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Bg5 Bf5 5. Bxf6 exf6 6. g4 Bg6 7. Qe2 Bb4 8. Qb5+"
  },
  {
    "name": "Blackmar-Diemer, Lemberger Countergambit",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. Nc3 Nf6 3. e4 e5"
  },
  {
    "name": "Blumenfeld Countergambit",
    "eco": "E10",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5"
  },
  {
    "name": "Blumenfeld Countergambit, 3. Nf3 c5 4. d5 b5",
    "eco": "E10",
    "fen": "rnbqkb1r/p2p1ppp/4pn2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5"
  },
  {
    "name": "Blumenfeld Countergambit Accepted",
    "eco": "E10",
    "fen": "rnbqkb1r/p5pp/4pn2/1Ppp4/8/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. dxe6 fxe6 6. cxb5 d5"
  },
  {
    "name": "Blumenfeld Countergambit: Dus-Khotimirsky Variation",
    "eco": "E10",
    "fen": "rnbqkb1r/p2p1ppp/4pn2/1ppP2B1/2P5/5N2/PP2PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. Bg5"
  },
  {
    "name": "Blumenfeld Countergambit: Spielmann Variation",
    "eco": "E10",
    "fen": "rnbqkb1r/p2p1pp1/5n1p/1ppP2B1/8/5N2/PP2PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. c4 c5 4. d5 b5 5. Bg5 exd5 6. cxd5 h6"
  },
  {
    "name": "Boden-Kieseritzky Gambit, Lichtenhein Defense",
    "eco": "C27",
    "fen": "rnbqkb1r/ppp2ppp/8/3pp3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Bc4 Nxe4 4. Nc3 d5"
  },
  {
    "name": "Bogo-Indian Defense",
    "eco": "E11",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+"
  },
  {
    "name": "Bogo-Indian Defense: Exchange Variation",
    "eco": "E11",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP1bPPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Bxd2+"
  },
  {
    "name": "Bogo-Indian Defense: Gruenfeld Variation",
    "eco": "E11",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP1NPPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nbd2"
  },
  {
    "name": "Bogo-Indian Defense: Haiti Variation",
    "eco": "E11",
    "fen": "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Nc6"
  },
  {
    "name": "Bogo-Indian Defense: Monticelli Trap",
    "eco": "E11",
    "fen": "rn1q1rk1/pbpp1ppp/1p2p3/6N1/2PP4/2n3P1/PPQ1PPBP/R3K2R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+ 6. Bd2 Bxd2+ 7. Qxd2 O-O 8. Nc3 Ne4 9. Qc2 Nxc3 10. Ng5"
  },
  {
    "name": "Bogo-Indian Defense: New England Variation",
    "eco": "E11",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/8/PP1NPPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nfd2"
  },
  {
    "name": "Bogo-Indian Defense: Nimzowitsch Variation",
    "eco": "E11",
    "fen": "rnb1k2r/ppppqppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Qe7"
  },
  {
    "name": "Bogo-Indian Defense: Retreat Variation",
    "eco": "E11",
    "fen": "rnbqk2r/ppppbppp/4pn2/8/2PP4/5N2/PP1BPPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Be7"
  },
  {
    "name": "Bogo-Indian Defense: Vitolins Variation",
    "eco": "E11",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 c5"
  },
  {
    "name": "Bogo-Indian Defense: Wade-Smyslov Variation",
    "eco": "E11",
    "fen": "rnbqk2r/1ppp1ppp/4pn2/p7/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 a5"
  },
  {
    "name": "Bongcloud Attack",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR b kq",
    "moves": "1. e4 e5 2. Ke2"
  },
  {
    "name": "Borg Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g5"
  },
  {
    "name": "Borg Defense: Borg Gambit",
    "eco": "A40",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 g5"
  },
  {
    "name": "Borg Defense: Borg Gambit, 2. d4 Bg7",
    "eco": "B00",
    "fen": "rnbqk1nr/ppppppbp/8/6p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g5 2. d4 Bg7"
  },
  {
    "name": "Borg Defense: Langhorst Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/p2p1p1p/1p2p3/2P3p1/4P3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g5 2. d4 e6 3. c3 c5 4. dxc5 b6"
  },
  {
    "name": "Borg Defense: Troon Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/pppppp2/7p/8/3PP1pP/8/PPP2PP1/RNBQKBNR w KQkq",
    "moves": "1. e4 g5 2. d4 h6 3. h4 g4"
  },
  {
    "name": "Borg Opening: Zilbermints Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/pppp1p1p/8/4p1p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g5 2. d4 e5"
  },
  {
    "name": "Bronstein Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. g4"
  },
  {
    "name": "Budapest Defense",
    "eco": "A52",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ng4"
  },
  {
    "name": "Budapest Defense: Adler Variation",
    "eco": "A52",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Nf3"
  },
  {
    "name": "Budapest Defense: Alekhine Variation",
    "eco": "A52",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. e4"
  },
  {
    "name": "Budapest Defense: Alekhine Variation, Abonyi Variation",
    "eco": "A52",
    "fen": "rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/8/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. e4 Nxe5 5. f4 Nec6"
  },
  {
    "name": "Budapest Defense: Alekhine Variation, Tartakower Defense",
    "eco": "A52",
    "fen": "rnbqkb1r/ppp2ppp/3p4/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. e4 d6"
  },
  {
    "name": "Budapest Defense: Fajarowicz Defense, Bonsdorf Variation",
    "eco": "A51",
    "fen": "rnbqkb1r/p1pp1ppp/1p6/4P3/2P1n3/P7/1P2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ne4 4. a3 b6"
  },
  {
    "name": "Budapest Defense: Fajarowicz Variation",
    "eco": "A51",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ne4"
  },
  {
    "name": "Budapest Defense: Fajarowicz-Steiner Variation",
    "eco": "A51",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PPQ1PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ne4 4. Qc2"
  },
  {
    "name": "Budapest Defense: Rubinstein Variation",
    "eco": "A52",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Bf4"
  },
  {
    "name": "Canard Opening",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. f4"
  },
  {
    "name": "Caro-Kann Defense",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6"
  },
  {
    "name": "Caro-Kann Defense, 2. d4",
    "eco": "B12",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4"
  },
  {
    "name": "Caro-Kann Defense, 2. Nc3",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. Nc3"
  },
  {
    "name": "Caro-Kann Defense, 2. d4 d5",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5"
  },
  {
    "name": "Caro-Kann Defense, 2. Nc3 d5",
    "eco": "B11",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. Nc3 d5"
  },
  {
    "name": "Caro-Kann Defense, 2. d4 d5 3. Nc3",
    "eco": "B15",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3"
  },
  {
    "name": "Caro-Kann Defense: Accelerated Panov Attack",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. c4"
  },
  {
    "name": "Caro-Kann Defense: Accelerated Panov Attack, 2. c4 d5",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. c4 d5"
  },
  {
    "name": "Caro-Kann Defense: Accelerated Panov Attack, Modern Variation",
    "eco": "B10",
    "fen": "rnbqkb1r/pp2pppp/5n2/3P4/8/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. c4 d5 3. exd5 cxd5 4. cxd5 Nf6"
  },
  {
    "name": "Caro-Kann Defense: Accelerated Panov Attack, Open Variation",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1p1ppp/2p5/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. c4 e5"
  },
  {
    "name": "Caro-Kann Defense: Accelerated Panov Attack, Pseudo-Scandinavian",
    "eco": "B10",
    "fen": "rnb1kbnr/pp2pppp/2p5/3q4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. c4 d5 3. exd5 Qxd5"
  },
  {
    "name": "Caro-Kann Defense: Accelerated Panov Attack, Van Weersel Attack",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 c6 2. c4 d5 3. cxd5 cxd5 4. Qb3"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Bayonet Attack",
    "eco": "B12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P2P1/8/PPP2P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Botvinnik-Carls Defense",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/8/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 c5"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Bronstein Variation",
    "eco": "B12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP1NPPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. Ne2"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Prins Attack",
    "eco": "B12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/1P1P4/8/P1P2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. b4"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Short Variation",
    "eco": "B12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Tal Variation",
    "eco": "B12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P3P/8/PPP2PP1/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. h4"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Van der Wiel Attack",
    "eco": "B12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Van der Wiel Attack, 6. Nge2 c5 7. h4",
    "eco": "B12",
    "fen": "rn1qkbnr/pp3ppp/4p1b1/2ppP3/3P2PP/2N5/PPP1NP2/R1BQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 e6 5. g4 Bg6 6. Nge2 c5 7. h4"
  },
  {
    "name": "Caro-Kann Defense: Advance Variation, Van der Wiel Attack, Dreyev Defense",
    "eco": "B12",
    "fen": "rn2kbnr/pp2pppp/1qp5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 Qb6"
  },
  {
    "name": "Caro-Kann Defense: Advance, Short Variation",
    "eco": "B12",
    "fen": "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/2P5/PP2BPPP/RNBQK1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. e5 Bf5 4. c3 e6 5. Be2"
  },
  {
    "name": "Caro-Kann Defense: Alekhine Gambit",
    "eco": "B15",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/3PN3/3B4/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Bd3"
  },
  {
    "name": "Caro-Kann Defense: Breyer Variation",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d3"
  },
  {
    "name": "Caro-Kann Defense: Breyer Variation, Stein Attack",
    "eco": "B10",
    "fen": "rnbq1rk1/pp2npbp/2p3p1/3pp3/1P2P3/3P1NP1/P1PN1PBP/R1BQ1RK1 b -",
    "moves": "1. e4 c6 2. d3 d5 3. Nd2 g6 4. Ngf3 Bg7 5. g3 e5 6. Bg2 Ne7 7. O-O O-O 8. b4"
  },
  {
    "name": "Caro-Kann Defense: Bronstein-Larsen Variation",
    "eco": "B16",
    "fen": "rnbqkb1r/pp2pp1p/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ gxf6"
  },
  {
    "name": "Caro-Kann Defense: Classical Variation",
    "eco": "B18",
    "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5"
  },
  {
    "name": "Caro-Kann Defense: Classical Variation, Flohr Variation",
    "eco": "B18",
    "fen": "rn1qkbnr/pp2pppp/2p3b1/8/3P4/6NN/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nh3"
  },
  {
    "name": "Caro-Kann Defense: Classical Variation, Lobron System",
    "eco": "B19",
    "fen": "r2qk2r/pp1nbpp1/2p1pn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R w kq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7"
  },
  {
    "name": "Caro-Kann Defense: Classical Variation, Main Line",
    "eco": "B18",
    "fen": "rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4"
  },
  {
    "name": "Caro-Kann Defense: Classical Variation, Maroczy Attack",
    "eco": "B18",
    "fen": "rn1qkbnr/pp2pppp/2p3b1/8/3P1P2/6N1/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. f4"
  },
  {
    "name": "Caro-Kann Defense: Classical Variation, Seirawan Variation",
    "eco": "B19",
    "fen": "r2qk2r/pp1n1pp1/2pbpn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R w kq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 Ngf6 11. Bd2 e6 12. O-O-O Bd6"
  },
  {
    "name": "Caro-Kann Defense: Classical, 7... Nd7",
    "eco": "B19",
    "fen": "r2qkbnr/pp1nppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7"
  },
  {
    "name": "Caro-Kann Defense: Classical, Spassky Variation",
    "eco": "B19",
    "fen": "r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5"
  },
  {
    "name": "Caro-Kann Defense: De Bruycker Defense",
    "eco": "A40",
    "fen": "r1bqkbnr/pp1ppppp/n1p5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 Na6"
  },
  {
    "name": "Caro-Kann Defense: De Bruycker Defense, 2. d4 Na6 3. Nc3 Nc7",
    "eco": "B12",
    "fen": "r1bqkbnr/ppnppppp/2p5/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 Na6 3. Nc3 Nc7"
  },
  {
    "name": "Caro-Kann Defense: Edinburgh Variation",
    "eco": "B12",
    "fen": "rnb1kbnr/pp2pppp/1qp5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 Qb6"
  },
  {
    "name": "Caro-Kann Defense: Euwe Attack",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. b3"
  },
  {
    "name": "Caro-Kann Defense: Euwe Attack, Prins Gambit",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 c5 2. b3 d5 3. Bb2"
  },
  {
    "name": "Caro-Kann Defense: Exchange Variation",
    "eco": "B13",
    "fen": "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5"
  },
  {
    "name": "Caro-Kann Defense: Exchange Variation, Bulla Attack",
    "eco": "B13",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/3P2P1/8/PPP2P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. g4"
  },
  {
    "name": "Caro-Kann Defense: Exchange Variation, Rubinstein Variation",
    "eco": "B13",
    "fen": "r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2PB4/PP3PPP/RN1QK1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 Nf6 6. Bf4"
  },
  {
    "name": "Caro-Kann Defense: Finnish Variation",
    "eco": "B16",
    "fen": "rnbqkbnr/pp2ppp1/2p4p/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 h6"
  },
  {
    "name": "Caro-Kann Defense: Forgacs Variation",
    "eco": "B15",
    "fen": "rnbqkb1r/pp3ppp/2p2p2/8/2BP4/8/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Bc4"
  },
  {
    "name": "Caro-Kann Defense: Goldman Variation",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2Q2/PPPP1PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. Qf3"
  },
  {
    "name": "Caro-Kann Defense: Gurgenidze Counterattack",
    "eco": "B15",
    "fen": "rnbqkbnr/p3pppp/2p5/1p1p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 b5"
  },
  {
    "name": "Caro-Kann Defense: Gurgenidze System",
    "eco": "B15",
    "fen": "rnbqkbnr/pp2pp1p/2p3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 g6"
  },
  {
    "name": "Caro-Kann Defense: Hector Gambit",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/6N1/4p3/2N5/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. Nf3 dxe4 4. Ng5"
  },
  {
    "name": "Caro-Kann Defense: Hillbilly Attack",
    "eco": "B00",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 c6 2. Bc4"
  },
  {
    "name": "Caro-Kann Defense: Hillbilly Attack, Schaeffer Gambit",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/7Q/4p3/1B6/PPPP1PPP/RNB1K1NR b KQkq",
    "moves": "1. e4 c6 2. Bc4 d5 3. Bb3 dxe4 4. Qh5"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation",
    "eco": "B17",
    "fen": "r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Modern Main Line",
    "eco": "B17",
    "fen": "r1bqk2r/pp1n1pp1/2pbp2p/8/3PQ3/3B1N2/PPP2PPP/R1B1K2R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Ng5 Ngf6 6. Bd3 e6 7. N1f3 Bd6 8. Qe2 h6 9. Ne4 Nxe4 10. Qxe4"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Modern Variation",
    "eco": "B17",
    "fen": "r1bqkbnr/pp1npppp/2p5/6N1/3P4/8/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Ng5"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Modern Variation, Ivanchuk Defense",
    "eco": "B17",
    "fen": "r1bqkbnr/pp2pppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Ng5 Ndf6"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Modern Variation, Kasparov Attack",
    "eco": "B17",
    "fen": "r1bqkb1r/pp1npppp/2p2n2/8/3P4/5NN1/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Ng3"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Smyslov Variation",
    "eco": "B17",
    "fen": "r1bqkb1r/pp3ppp/1np1pn2/6N1/2BP4/8/PPP1QPPP/R1B1K1NR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Smyslov Variation, Main Line",
    "eco": "B17",
    "fen": "r1bqkb1r/pp3ppp/1np1pn2/6N1/3P4/1B6/PPP1QPPP/R1B1K1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6 8. Bb3"
  },
  {
    "name": "Caro-Kann Defense: Karpov Variation, Tiviakov-Fischer Attack",
    "eco": "B17",
    "fen": "r1bqkb1r/pp2pppp/2p2n2/8/2BP4/8/PPP2PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Nxf6+ Nxf6"
  },
  {
    "name": "Caro-Kann Defense: Labahn Attack",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. b4 c6 2. e4"
  },
  {
    "name": "Caro-Kann Defense: Labahn Attack, Double Gambit",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/1P1p4/4P3/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. b4 d5 3. b5"
  },
  {
    "name": "Caro-Kann Defense: Labahn Attack, Polish Variation",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1p1ppp/2p5/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 c6 2. b4 e5 3. Bb2"
  },
  {
    "name": "Caro-Kann Defense: Main Line",
    "eco": "B15",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4"
  },
  {
    "name": "Caro-Kann Defense: Maroczy Variation",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. f3"
  },
  {
    "name": "Caro-Kann Defense: Maroczy Variation, Maroczy Gambit",
    "eco": "B12",
    "fen": "rnbqkbnr/pp3ppp/2p5/8/2BpP3/5N2/PPP3PP/RNBQK2R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 exd4 6. Bc4"
  },
  {
    "name": "Caro-Kann Defense: Masi Variation",
    "eco": "B10",
    "fen": "rnbqkb1r/pp1ppppp/2p2n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 Nf6"
  },
  {
    "name": "Caro-Kann Defense: Massachusetts Defense",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1pp1pp/2p5/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 f5"
  },
  {
    "name": "Caro-Kann Defense: Mieses Attack, Landau Gambit",
    "eco": "B12",
    "fen": "rnbqkb1r/pp1npppp/2p1P3/3p4/3P4/3B4/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Bd3 Nf6 4. e5 Nfd7 5. e6"
  },
  {
    "name": "Caro-Kann Defense: Mieses Gambit",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Be3"
  },
  {
    "name": "Caro-Kann Defense: Modern Variation",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nd2"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack",
    "eco": "B13",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, 4. c4 Nf6 5. Nc3",
    "eco": "B13",
    "fen": "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, 4. c4 Nf6 5. Nc3 e6",
    "eco": "B14",
    "fen": "rnbqkb1r/pp3ppp/4pn2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Fianchetto Defense",
    "eco": "B14",
    "fen": "rnbqkb1r/pp2pp1p/5np1/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Fianchetto Defense, Fianchetto Gambit",
    "eco": "B13",
    "fen": "rnbqk2r/pp2ppbp/5np1/3P4/3P4/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6 6. cxd5 Bg7"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Gunderam Attack",
    "eco": "B13",
    "fen": "rnbqkb1r/pp2pppp/5n2/2Pp4/3P4/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. c5"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Modern Defense",
    "eco": "B13",
    "fen": "r1bqkb1r/pp2pppp/2n2n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Carlsbad Line",
    "eco": "B13",
    "fen": "r1bqkb1r/pp3ppp/2n1pn2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 e6"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Czerniak Line",
    "eco": "B13",
    "fen": "r1b1kb1r/pp2pppp/2n2n2/q2p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 Qa5"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Mieses Line",
    "eco": "B13",
    "fen": "r2qkb1r/pp2pppp/2n2n2/3p4/2PP2b1/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Nf3 Bg4"
  },
  {
    "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Reifir-Spielmann Line",
    "eco": "B13",
    "fen": "r1b1kb1r/pp2pppp/1qn2n2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 Qb6"
  },
  {
    "name": "Caro-Kann Defense: Panov-Botvinnik, Herzog Defense",
    "eco": "B13",
    "fen": "r1bqkb1r/pp2pppp/5n2/n2P2B1/2p5/2N5/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 dxc4 7. d5 Na5"
  },
  {
    "name": "Caro-Kann Defense: Rasa-Studier Gambit",
    "eco": "B15",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. f3"
  },
  {
    "name": "Caro-Kann Defense: Scorpion-Horus Gambit",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. d3 dxe4 4. Bg5"
  },
  {
    "name": "Caro-Kann Defense: Spike Variation",
    "eco": "B10",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. g4"
  },
  {
    "name": "Caro-Kann Defense: Spike Variation, Scorpion-Grob Gambit",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/4p1P1/2NP4/PPP2P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 c6 2. g4 d5 3. Nc3 dxe4 4. d3"
  },
  {
    "name": "Caro-Kann Defense: Tartakower Variation",
    "eco": "B15",
    "fen": "rnbqkb1r/pp3ppp/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6"
  },
  {
    "name": "Caro-Kann Defense: Toikkanen Gambit",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/2P5/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c6 2. c4 d5 3. e5"
  },
  {
    "name": "Caro-Kann Defense: Two Knights Attack",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. Nf3"
  },
  {
    "name": "Caro-Kann Defense: Two Knights Attack, Mindeno Variation",
    "eco": "B11",
    "fen": "rn1qkbnr/pp2pppp/2p5/3p4/4P1b1/2N2N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. Nf3 Bg4"
  },
  {
    "name": "Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Exchange Line",
    "eco": "B11",
    "fen": "rn1qkbnr/pp2pppp/2p5/3p4/4P3/2N2b1P/PPPP1PP1/R1BQKB1R w KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3"
  },
  {
    "name": "Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Retreat Line",
    "eco": "B11",
    "fen": "rn1qkbnr/pp2pppp/2p5/3p3b/4P3/2N2N1P/PPPP1PP1/R1BQKB1R w KQkq",
    "moves": "1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bh5"
  },
  {
    "name": "Caro-Kann Defense: Ulysses Gambit",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/6N1/3Pp3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nf3 dxe4 4. Ng5"
  },
  {
    "name": "Caro-Kann Defense: von Hennig Gambit",
    "eco": "B15",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/2BPp3/2N5/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Bc4"
  },
  {
    "name": "Carr Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/ppppppp1/7p/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 h6"
  },
  {
    "name": "Carr Defense: Zilbermints Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/pppp1pp1/7p/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 h6 2. d4 e5"
  },
  {
    "name": "Catalan Opening",
    "eco": "E00",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3"
  },
  {
    "name": "Catalan Opening, 2. c4 e6 3. g3 d5",
    "eco": "E01",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5"
  },
  {
    "name": "Catalan Opening: Closed Variation",
    "eco": "E01",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2"
  },
  {
    "name": "Catalan Opening: Closed Variation, 4. Bg2 Be7 5. Nf3",
    "eco": "E06",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3"
  },
  {
    "name": "Catalan Opening: Closed Variation, 5. Nf3 O-O 6. O-O Nbd7",
    "eco": "E07",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7"
  },
  {
    "name": "Catalan Opening: Closed Variation, 6. d4 Nbd7 7. Qc2",
    "eco": "E08",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PPQ1PPBP/RNB2RK1 b -",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. O-O O-O 6. d4 Nbd7 7. Qc2"
  },
  {
    "name": "Catalan Opening: Closed Variation, Botvinnik Variation",
    "eco": "E07",
    "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NQ1NP1/PP2PPBP/R1B2RK1 b -",
    "moves": "1. c4 e6 2. g3 d5 3. Bg2 Nf6 4. Nf3 Be7 5. d4 O-O 6. Nc3 c6 7. O-O Nbd7 8. Qd3"
  },
  {
    "name": "Catalan Opening: Closed Variation, Rabinovich Variation",
    "eco": "E09",
    "fen": "r1bq1rk1/p2nbppp/2p1pn2/1p1p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w -",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Qc2 e6 5. Nbd2 Be7 6. g3 Nbd7 7. Bg2 O-O 8. O-O b5"
  },
  {
    "name": "Catalan Opening: Closed Variation, Traditional Variation",
    "eco": "E09",
    "fen": "r1bq1rk1/p2nbppp/1pp1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2 b6"
  },
  {
    "name": "Catalan Opening: Closed, 7. Qc2 c6 8. b3",
    "eco": "E08",
    "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1P3NP1/P1Q1PPBP/RNB2RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. b3"
  },
  {
    "name": "Catalan Opening: Closed, Main Line",
    "eco": "E09",
    "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2"
  },
  {
    "name": "Catalan Opening: Closed, Sokolsky Variation",
    "eco": "E09",
    "fen": "r2q1rk1/3nbppp/bpp1pn2/p2p4/2PP4/1P3NP1/PBQNPPBP/R4RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2 b6 9. b3 a5 10. Bb2 Ba6"
  },
  {
    "name": "Catalan Opening: Closed, Spassky Gambit",
    "eco": "E08",
    "fen": "r2q1rk1/pb1nbppp/2p1pn2/1p1p4/2PP4/1PN2NP1/P1Q1PPBP/R1BR2K1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 Be7 4. Bg2 d5 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. b3 b6 9. Rd1 Bb7 10. Nc3 b5"
  },
  {
    "name": "Catalan Opening: Closed, Zagoryansky Variation",
    "eco": "E08",
    "fen": "r1bq1rk1/p2nbppp/1pp1pn2/3p4/P1PP4/5NP1/1PQ1PPBP/RNBR2K1 b -",
    "moves": "1. d4 e6 2. c4 Nf6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O Nbd7 7. Qc2 c6 8. Rd1 b6 9. a4"
  },
  {
    "name": "Catalan Opening: Hungarian Gambit",
    "eco": "E00",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 e5"
  },
  {
    "name": "Catalan Opening: Open Defense",
    "eco": "E04",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3"
  },
  {
    "name": "Catalan Opening: Open Defense, 4. Bg2 dxc4 5. Qa4+",
    "eco": "E02",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/Q1pP4/6P1/PP2PPBP/RNB1K1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Qa4+"
  },
  {
    "name": "Catalan Opening: Open Defense, 5. Qa4+ Nbd7 6. Qxc4",
    "eco": "E03",
    "fen": "r1bqkb1r/pppn1ppp/4pn2/8/2QP4/6P1/PP2PPBP/RNB1K1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Qa4+ Nbd7 6. Qxc4"
  },
  {
    "name": "Catalan Opening: Open Defense, Alekhine Variation",
    "eco": "E03",
    "fen": "r1bqkb1r/1ppn1ppp/p3pn2/8/3P4/6P1/PPQ1PPBP/RNB1K1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Qa4+ Nbd7 6. Qxc4 a6 7. Qc2"
  },
  {
    "name": "Catalan Opening: Open Defense, Classical Line",
    "eco": "E05",
    "fen": "rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3 Be7"
  },
  {
    "name": "Catalan Opening: Open Defense, Modern Sharp Variation",
    "eco": "E04",
    "fen": "r1bqk2r/ppp2ppp/2n1pn2/8/QbpP4/5NP1/PP2PPBP/RNB1K2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3 Nc6 6. Qa4 Bb4+"
  },
  {
    "name": "Catalan Opening: Open Defense, Tarrasch Defense",
    "eco": "E04",
    "fen": "r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 c5 5. Nf3 Nc6"
  },
  {
    "name": "Center Game",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. d4"
  },
  {
    "name": "Center Game, 2. d4 exd4 3. Qxd4",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3QP3/8/PPP2PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4"
  },
  {
    "name": "Center Game Accepted",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4"
  },
  {
    "name": "Center Game: Berger Variation",
    "eco": "C22",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Nf6"
  },
  {
    "name": "Center Game: Charousek Variation",
    "eco": "C22",
    "fen": "r1bqk1nr/ppppbppp/2n5/8/4P3/2P1Q3/PP3PPP/RNB1KBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Bb4+ 5. c3 Be7"
  },
  {
    "name": "Center Game: Halasz-McDonnell Gambit",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. f4"
  },
  {
    "name": "Center Game: Halasz-McDonnell Gambit, Crocodile Variation",
    "eco": "C21",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/3pPP2/2P2N2/PP4PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. f4 Bc5 4. Nf3 Nc6 5. c3"
  },
  {
    "name": "Center Game: Hall Variation",
    "eco": "C22",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/2Q1P3/8/PPP2PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qc4"
  },
  {
    "name": "Center Game: Kieseritzky Variation",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Nf3"
  },
  {
    "name": "Center Game: Kieseritzky Variation, 2. d4 exd4 3. Nf3 c5",
    "eco": "C21",
    "fen": "rnbqkbnr/pp1p1ppp/8/2p5/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Nf3 c5"
  },
  {
    "name": "Center Game: Kieseritzky Variation, 3. Nf3 c5 4. Bc4",
    "eco": "C21",
    "fen": "rnbqkbnr/pp1p1ppp/8/2p5/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Nf3 c5 4. Bc4"
  },
  {
    "name": "Center Game: Kieseritzky Variation, 3. Nf3 c5 4. Bc4 b5",
    "eco": "C21",
    "fen": "rnbqkbnr/p2p1ppp/8/1pp5/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Nf3 c5 4. Bc4 b5"
  },
  {
    "name": "Center Game: Kupr Variation",
    "eco": "C22",
    "fen": "r1bqr1k1/ppp2ppp/2np1n2/8/1bB1P3/2N1Q2N/PPPB1PPP/2KR3R b -",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Nf6 5. Nc3 Bb4 6. Bd2 O-O 7. O-O-O Re8 8. Bc4 d6 9. Nh3"
  },
  {
    "name": "Center Game: Lanc-Arnold Gambit",
    "eco": "C21",
    "fen": "rnbqk1nr/pppp1ppp/8/2b5/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Nf3 Bc5 4. c3"
  },
  {
    "name": "Center Game: Lanc-Arnold Gambit, Schippler Gambit",
    "eco": "C21",
    "fen": "rnbqk1nr/pppp1ppp/8/2b5/2B1P3/2p2N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Nf3 Bc5 4. c3 dxc3 5. Bc4"
  },
  {
    "name": "Center Game: Normal Variation",
    "eco": "C22",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/3QP3/8/PPP2PPP/RNB1KBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6"
  },
  {
    "name": "Center Game: Paulsen Attack Variation",
    "eco": "C22",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/4P3/4Q3/PPP2PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3"
  },
  {
    "name": "Center Game: Ross Gambit",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/3B4/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Bd3"
  },
  {
    "name": "Center Game: l'Hermet Variation",
    "eco": "C22",
    "fen": "r1bqkbnr/pppp2pp/2n5/5p2/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 f5"
  },
  {
    "name": "Center Game: von der Lasa Gambit",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. Bc4"
  },
  {
    "name": "Clemenz Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq",
    "moves": "1. h3"
  },
  {
    "name": "Clemenz Opening: Spike Lee Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppppp1/8/7p/6P1/7P/PPPPPP2/RNBQKBNR b KQkq",
    "moves": "1. h3 h5 2. g4"
  },
  {
    "name": "Colle System",
    "eco": "D05",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 e6"
  },
  {
    "name": "Colle System, 3. e3 e6 4. Bd3",
    "eco": "D05",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3"
  },
  {
    "name": "Colle System: Pterodactyl Variation",
    "eco": "D05",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. d4 g6 2. Nf3 Bg7 3. e3 c5 4. Bd3 Qa5+"
  },
  {
    "name": "Colle System: Rhamphorhynchus Variation",
    "eco": "D05",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1P5/8/4PN2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 c5 2. e3 g6 3. d4 Bg7 4. dxc5 Qa5+"
  },
  {
    "name": "Colle System: Siroccopteryx Variation",
    "eco": "D05",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q7/3N4/3BP3/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. d4 g6 2. Nf3 Bg7 3. e3 c5 4. Bd3 cxd4 5. Nxd4 Qa5+"
  },
  {
    "name": "Colle System: Traditional Colle",
    "eco": "D05",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/2PBPN2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. c3"
  },
  {
    "name": "Crab Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/P6P/8/1PPPPPP1/RNBQKBNR b KQkq",
    "moves": "1. a4 e5 2. h4"
  },
  {
    "name": "Creepy Crawly Formation: Classical Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR w KQkq",
    "moves": "1. h3 d5 2. a3 e5"
  },
  {
    "name": "Czech Defense",
    "eco": "B07",
    "fen": "rnbqkb1r/pp2pppp/2pp1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 c6"
  },
  {
    "name": "Danish Gambit",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3"
  },
  {
    "name": "Danish Gambit Accepted",
    "eco": "C21",
    "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR b KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2"
  },
  {
    "name": "Danish Gambit Accepted, Chigorin Defense",
    "eco": "C21",
    "fen": "rnb1kbnr/ppppqppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Qe7"
  },
  {
    "name": "Danish Gambit Accepted, Classical Defense",
    "eco": "C21",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Nf6"
  },
  {
    "name": "Danish Gambit Accepted, Copenhagen Defense",
    "eco": "C21",
    "fen": "rnbqk1nr/pppp1ppp/8/8/1bB1P3/8/PB3PPP/RN1QK1NR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Bb4+"
  },
  {
    "name": "Danish Gambit Accepted, Schlechter Defense",
    "eco": "C21",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 d5"
  },
  {
    "name": "Danish Gambit Accepted, Svenonius Defense",
    "eco": "C21",
    "fen": "rnbqkb1r/ppppnppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 Ne7"
  },
  {
    "name": "Danish Gambit Declined, Sorensen Defense",
    "eco": "C21",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d4 exd4 3. c3 d5"
  },
  {
    "name": "Doery Defense",
    "eco": "A46",
    "fen": "rnbqkb1r/pppppppp/8/8/3Pn3/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 Ne4"
  },
  {
    "name": "Dresden Opening: The Goblin",
    "eco": "C67",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4N3/2P1P3/8/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c4 Nf6 4. Nxe5"
  },
  {
    "name": "Duras Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 f5"
  },
  {
    "name": "Dutch Defense",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 f5"
  },
  {
    "name": "Dutch Defense, 2. c4",
    "eco": "A84",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/2PP4/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. c4"
  },
  {
    "name": "Dutch Defense: Alapin Variation",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 f5 2. Qd3"
  },
  {
    "name": "Dutch Defense: Alekhine Variation",
    "eco": "A92",
    "fen": "rnbq1rk1/ppppb1pp/4p3/5p2/2PPn3/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 O-O 6. O-O Ne4"
  },
  {
    "name": "Dutch Defense: Blackburne Variation",
    "eco": "A81",
    "fen": "rnbqkb1r/pppp2pp/4pn2/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 f5 2. g3 Nf6 3. Bg2 e6 4. Nh3"
  },
  {
    "name": "Dutch Defense: Blackmar's Second Gambit",
    "eco": "A80",
    "fen": "rnbqkb1r/ppppp1pp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. f3"
  },
  {
    "name": "Dutch Defense: Bladel Variation",
    "eco": "A84",
    "fen": "rnbqkb1r/ppppp2p/6pn/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 f5 2. c4 g6 3. Nc3 Nh6"
  },
  {
    "name": "Dutch Defense: Classical Variation",
    "eco": "A84",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e6 2. c4 f5"
  },
  {
    "name": "Dutch Defense: Classical Variation, 3. g3 Nf6 4. Bg2",
    "eco": "A90",
    "fen": "rnbqkb1r/pppp2pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2"
  },
  {
    "name": "Dutch Defense: Classical Variation, 3. g3 Nf6 4. Bg2 Be7",
    "eco": "A91",
    "fen": "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7"
  },
  {
    "name": "Dutch Defense: Classical Variation, 4. Bg2 Be7 5. Nf3 O-O",
    "eco": "A92",
    "fen": "rnbq1rk1/ppppb1pp/4pn2/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R w KQ",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 O-O"
  },
  {
    "name": "Dutch Defense: Classical Variation, 5. Nf3 O-O 6. O-O d6",
    "eco": "A96",
    "fen": "rnbq1rk1/ppp1b1pp/3ppn2/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6"
  },
  {
    "name": "Dutch Defense: Classical Variation, Blackburne Attack",
    "eco": "A91",
    "fen": "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6PN/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nh3"
  },
  {
    "name": "Dutch Defense: Classical Variation, Buenos Aires Variation",
    "eco": "A96",
    "fen": "rnbq1rk1/1pp1b1pp/3ppn2/p4p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 a5"
  },
  {
    "name": "Dutch Defense: Classical Variation, Huisl Variation",
    "eco": "A96",
    "fen": "rnbq1rk1/ppp1b1pp/3pp3/5p2/2PPn3/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Ne4"
  },
  {
    "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation",
    "eco": "A97",
    "fen": "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 f5 2. Nf3 Nf6 3. g3 e6 4. Bg2 Be7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8"
  },
  {
    "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Alatortsev-Lisitsyn Line",
    "eco": "A98",
    "fen": "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PPQ1PPBP/R1B2RK1 b -",
    "moves": "1. d4 f5 2. Nf3 Nf6 3. g3 e6 4. Bg2 Be7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 8. Qc2"
  },
  {
    "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Modern Main Line",
    "eco": "A99",
    "fen": "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Qe8 8. b3"
  },
  {
    "name": "Dutch Defense: Classical Variation, Stonewall Variation",
    "eco": "A95",
    "fen": "rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 d5 5. Nf3 Be7 6. O-O O-O 7. Nc3 c6"
  },
  {
    "name": "Dutch Defense: Classical Variation, Stonewall Variation, 7. b3 c6 8. Ba3",
    "eco": "A94",
    "fen": "rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/BP3NP1/P3PPBP/RN1Q1RK1 b -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 d5 6. O-O O-O 7. b3 c6 8. Ba3"
  },
  {
    "name": "Dutch Defense: Classical Variation, Stonewall Variation, Botvinnik Variation",
    "eco": "A93",
    "fen": "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 d5 6. O-O O-O 7. b3"
  },
  {
    "name": "Dutch Defense: Fianchetto Attack",
    "eco": "A81",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. g3"
  },
  {
    "name": "Dutch Defense: Fianchetto Variation",
    "eco": "A86",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. c4 Nf6 3. g3"
  },
  {
    "name": "Dutch Defense: Hevendehl Gambit",
    "eco": "A80",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 f5 2. g4 e5"
  },
  {
    "name": "Dutch Defense: Hopton Attack",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp1pp/8/5pB1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 f5 2. Bg5"
  },
  {
    "name": "Dutch Defense: Hort-Antoshin System",
    "eco": "A86",
    "fen": "rnb1kb1r/ppq1p1pp/2pp1n2/5p2/2PP4/2N3P1/PP2PPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 f5 2. g3 Nf6 3. Bg2 d6 4. Nc3 c6 5. d4 Qc7"
  },
  {
    "name": "Dutch Defense: Ilyin-Zhenevsky, Winter Variation",
    "eco": "A97",
    "fen": "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQR1K1 b -",
    "moves": "1. d4 f5 2. Nf3 Nf6 3. g3 e6 4. Bg2 Be7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 8. Re1"
  },
  {
    "name": "Dutch Defense: Janzen-Korchnoi Gambit",
    "eco": "A80",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/7P/PPP1PP2/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. h3 Nf6 3. g4"
  },
  {
    "name": "Dutch Defense: Kingfisher Gambit",
    "eco": "A80",
    "fen": "rnbqkbnr/ppp1p1pp/8/3p1p2/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. Nc3 d5 3. e4"
  },
  {
    "name": "Dutch Defense: Korchnoi Attack",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/7P/PPP1PPP1/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. h3"
  },
  {
    "name": "Dutch Defense: Krause Variation",
    "eco": "A84",
    "fen": "r1bqkb1r/ppp1p1pp/2np1n2/5p2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 f5 2. Nc3 Nf6 3. Nf3 Nc6 4. d4 d6"
  },
  {
    "name": "Dutch Defense: Krejcik Gambit",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. g4"
  },
  {
    "name": "Dutch Defense: Krejcik Gambit, Tate Gambit",
    "eco": "A80",
    "fen": "rnbqkbnr/ppp1p1pp/8/3p4/3PP1p1/2N5/PPP2P1P/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. g4 fxg4 3. e4 d5 4. Nc3"
  },
  {
    "name": "Dutch Defense: Leningrad Variation",
    "eco": "A86",
    "fen": "rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 f5 2. c4 Nf6 3. g3 g6"
  },
  {
    "name": "Dutch Defense: Leningrad Variation, 4. Bg2 Bg7 5. Nf3",
    "eco": "A87",
    "fen": "rnbqk2r/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 f5 2. c4 Nf6 3. g3 g6 4. Bg2 Bg7 5. Nf3"
  },
  {
    "name": "Dutch Defense: Leningrad Variation, Karlsbad Variation",
    "eco": "A81",
    "fen": "rnbqk1nr/ppppp1bp/6p1/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 f5 2. g3 g6 3. Bg2 Bg7 4. Nh3"
  },
  {
    "name": "Dutch Defense: Leningrad Variation, Matulovic Variation",
    "eco": "A89",
    "fen": "r1bq1rk1/ppp1p1bp/2np1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Nc6"
  },
  {
    "name": "Dutch Defense: Leningrad Variation, Warsaw Variation",
    "eco": "A88",
    "fen": "rnbq1rk1/pp2p1bp/2pp1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 c6"
  },
  {
    "name": "Dutch Defense: Leningrad, Basman System",
    "eco": "A81",
    "fen": "rnbqk2r/pp1pp1bp/2p3pn/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w kq",
    "moves": "1. d4 f5 2. g3 c6 3. Bg2 g6 4. Nf3 Bg7 5. O-O Nh6"
  },
  {
    "name": "Dutch Defense: Manhattan Gambit, Anti-Classical Line",
    "eco": "A80",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq",
    "moves": "1. d4 f5 2. Qd3 e6 3. g4"
  },
  {
    "name": "Dutch Defense: Manhattan Gambit, Anti-Leningrad",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp2p/6p1/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq",
    "moves": "1. d4 f5 2. Qd3 g6 3. g4"
  },
  {
    "name": "Dutch Defense: Manhattan Gambit, Anti-Modern",
    "eco": "A80",
    "fen": "rnbqkbnr/ppp1p1pp/3p4/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq",
    "moves": "1. d4 f5 2. Qd3 d6 3. g4"
  },
  {
    "name": "Dutch Defense: Manhattan Gambit, Anti-Stonewall",
    "eco": "A80",
    "fen": "rnbqkbnr/ppp1p1pp/8/3p1p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq",
    "moves": "1. d4 f5 2. Qd3 d5 3. g4"
  },
  {
    "name": "Dutch Defense: Nimzo-Dutch Variation",
    "eco": "A90",
    "fen": "rnbqk2r/pppp2pp/4pn2/5p2/1bPP4/6P1/PP2PPBP/RNBQK1NR w KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Bb4+"
  },
  {
    "name": "Dutch Defense: Nimzo-Dutch Variation, Alekhine Variation",
    "eco": "A90",
    "fen": "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP1BPPBP/RN1QK1NR w KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Bb4+ 5. Bd2 Be7"
  },
  {
    "name": "Dutch Defense: Normal Variation",
    "eco": "A84",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 f5 2. c4 Nf6"
  },
  {
    "name": "Dutch Defense: Omega-Isis Gambit",
    "eco": "A80",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 f5 2. Nf3 e5"
  },
  {
    "name": "Dutch Defense: Queen's Knight Variation",
    "eco": "A85",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. c4 Nf6 3. Nc3"
  },
  {
    "name": "Dutch Defense: Raphael Variation",
    "eco": "A80",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. Nc3"
  },
  {
    "name": "Dutch Defense: Rubinstein Variation",
    "eco": "A84",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. Nc3"
  },
  {
    "name": "Dutch Defense: Semi-Leningrad Variation",
    "eco": "A81",
    "fen": "rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq",
    "moves": "1. d4 f5 2. g3 Nf6 3. Bg2 g6"
  },
  {
    "name": "Dutch Defense: Senechaud Gambit",
    "eco": "A80",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/3P1BP1/8/PPP1PP1P/RN1QKBNR b KQkq",
    "moves": "1. d4 e6 2. Bf4 f5 3. g4"
  },
  {
    "name": "Dutch Defense: Spielmann Gambit",
    "eco": "A80",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/2N5/PPP1PP1P/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. Nc3 Nf6 3. g4"
  },
  {
    "name": "Dutch Defense: Staunton Gambit",
    "eco": "A82",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 f5 2. e4"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, 3. Nc3 Nf6 4. Bg5",
    "eco": "A83",
    "fen": "rnbqkb1r/ppppp1pp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5"
  },
  {
    "name": "Dutch Defense: Staunton Gambit Accepted",
    "eco": "A82",
    "fen": "rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 f5 2. e4 fxe4"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, Alekhine Variation",
    "eco": "A83",
    "fen": "rnbqkb1r/ppppp2p/5np1/6B1/3Pp2P/2N5/PPP2PP1/R2QKBNR b KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 g6 5. h4"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, American Attack",
    "eco": "A82",
    "fen": "rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPPN1PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nd2"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, Chigorin Variation",
    "eco": "A83",
    "fen": "rnbqkb1r/pp1pp1pp/2p2n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 c6"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, Lasker Variation",
    "eco": "A83",
    "fen": "rnbqkb1r/ppppp2p/5np1/6B1/3Pp3/2N2P2/PPP3PP/R2QKBNR b KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 g6 5. f3"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, Nimzowitsch Variation",
    "eco": "A83",
    "fen": "rnbqkb1r/p1ppp1pp/1p3n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 b6"
  },
  {
    "name": "Dutch Defense: Staunton Gambit, Tartakower Variation",
    "eco": "A82",
    "fen": "rnbqkb1r/ppppp1pp/5n2/8/3Pp1P1/2N5/PPP2P1P/R1BQKBNR b KQkq",
    "moves": "1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. g4"
  },
  {
    "name": "Dutch Defense: Stonewall Variation",
    "eco": "A92",
    "fen": "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 e6 2. c4 f5 3. g3 Nf6 4. Bg2 Be7 5. Nf3 d5 6. O-O O-O"
  },
  {
    "name": "Dutch Defense: Stonewall Variation, Modern Variation",
    "eco": "A90",
    "fen": "rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq",
    "moves": "1. d4 e6 2. Nf3 f5 3. g3 Nf6 4. Bg2 d5 5. O-O Bd6 6. c4 c6"
  },
  {
    "name": "Dutch Defense: Stonewall, with Nc3",
    "eco": "A92",
    "fen": "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 e6 2. Nf3 f5 3. g3 Nf6 4. Bg2 Be7 5. O-O O-O 6. c4 d5 7. Nc3"
  },
  {
    "name": "Dutch Defense: Stonewall: Chekhover Variation",
    "eco": "A95",
    "fen": "rnb1qrk1/pp2b1pp/2p1pn2/3p1pB1/2PP4/2N2NP1/PPQ1PPBP/R4RK1 b -",
    "moves": "1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5 7. Nc3 c6 8. Qc2 Qe8 9. Bg5"
  },
  {
    "name": "East Indian Defense",
    "eco": "A49",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6"
  },
  {
    "name": "Elephant Gambit",
    "eco": "C40",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d5"
  },
  {
    "name": "Elephant Gambit: Maroczy Gambit",
    "eco": "C40",
    "fen": "rnbqk1nr/ppp2ppp/3b4/3Pp3/8/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d5 3. exd5 Bd6"
  },
  {
    "name": "Elephant Gambit: Paulsen Countergambit",
    "eco": "C40",
    "fen": "rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d5 3. exd5 e4"
  },
  {
    "name": "Elephant Gambit: Wasp Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/ppp2ppp/8/4N1q1/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d5 3. Nxe5 dxe4 4. Bc4 Qg5"
  },
  {
    "name": "English Defense",
    "eco": "A40",
    "fen": "rnbqkbnr/p1pppppp/1p6/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 b6"
  },
  {
    "name": "English Defense, 2. c4 b6",
    "eco": "A40",
    "fen": "rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e6 2. c4 b6"
  },
  {
    "name": "English Defense: Blumenfeld-Hiva Gambit",
    "eco": "A50",
    "fen": "rnbqkbnr/p2p2pp/4p3/1PpP1p2/4P3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 b6 2. c4 c5 3. d5 e6 4. e4 b5 5. cxb5 f5"
  },
  {
    "name": "English Defense: Eastbourne Gambit",
    "eco": "A40",
    "fen": "rn1qkbnr/pbpp1ppp/1p6/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 b6 2. c4 Bb7 3. Nc3 e5"
  },
  {
    "name": "English Defense: Hartlaub Gambit Accepted",
    "eco": "A40",
    "fen": "rn1qkb1r/pbpp2pp/1p2pn2/5P2/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. c4 e6 2. d4 b6 3. Nc3 Bb7 4. e4 f5 5. exf5 Nf6"
  },
  {
    "name": "English Defense: Hartlaub Gambit Declined",
    "eco": "A40",
    "fen": "rn1qkbnr/pbpp2pp/1p2p3/3P1p2/2P1P3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. c4 e6 2. d4 b6 3. Nc3 Bb7 4. e4 f5 5. d5"
  },
  {
    "name": "English Defense: Perrin Variation",
    "eco": "A40",
    "fen": "r2qkbnr/pbpp1ppp/1pn1p3/8/2PPP3/3B4/PP3PPP/RNBQK1NR w KQkq",
    "moves": "1. d4 e6 2. c4 b6 3. e4 Bb7 4. Bd3 Nc6"
  },
  {
    "name": "English Defense: Poli Gambit",
    "eco": "A40",
    "fen": "rn1qkb1r/pbpp2pp/1p2p2n/5P2/2PP4/5P2/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. d4 e6 2. c4 b6 3. e4 Bb7 4. f3 f5 5. exf5 Nh6"
  },
  {
    "name": "English Opening",
    "eco": "A10",
    "fen": "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq",
    "moves": "1. c4"
  },
  {
    "name": "English Opening: 2. g4",
    "eco": "A10",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2P3P1/8/PP1PPP1P/RNBQKBNR b KQkq",
    "moves": "1. c4 Nf6 2. g4"
  },
  {
    "name": "English Opening: Achilles-Omega Gambit",
    "eco": "A10",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. c4"
  },
  {
    "name": "English Opening: Adorjan Defense",
    "eco": "A10",
    "fen": "rnbqkbnr/pppp1p1p/6p1/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. c4 g6 2. e4 e5"
  },
  {
    "name": "English Opening: Agincourt Defense",
    "eco": "A13",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 e6"
  },
  {
    "name": "English Opening: Agincourt Defense, 2. Nf3",
    "eco": "A13",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq",
    "moves": "1. c4 e6 2. Nf3"
  },
  {
    "name": "English Opening: Agincourt Defense, 2. Nf3 d5",
    "eco": "A13",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. c4 e6 2. Nf3 d5"
  },
  {
    "name": "English Opening: Agincourt Defense, Bogoljubov Defense",
    "eco": "A13",
    "fen": "rnbqk2r/ppp2ppp/3bpn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Bd6"
  },
  {
    "name": "English Opening: Agincourt Defense, Catalan Defense",
    "eco": "A13",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 e6 3. g3 c5"
  },
  {
    "name": "English Opening: Agincourt Defense, Catalan Defense, 4. Bg2 Bb7 5. O-O",
    "eco": "A14",
    "fen": "rn1qkbnr/pbp2ppp/1p2p3/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq",
    "moves": "1. Nf3 d5 2. c4 e6 3. g3 b6 4. Bg2 Bb7 5. O-O"
  },
  {
    "name": "English Opening: Agincourt Defense, Catalan Defense Accepted",
    "eco": "A13",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2p5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4"
  },
  {
    "name": "English Opening: Agincourt Defense, Catalan Defense, Semi-Slav Defense",
    "eco": "A13",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 c6"
  },
  {
    "name": "English Opening: Agincourt Defense, Keres Defense",
    "eco": "A14",
    "fen": "r1bqk2r/pp2bppp/2n1p3/2pn4/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq",
    "moves": "1. c4 c5 2. Nf3 Nf6 3. Nc3 e6 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Nc6 7. O-O Be7"
  },
  {
    "name": "English Opening: Agincourt Defense, Kurajica Defense",
    "eco": "A13",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 e6 3. g3 c6"
  },
  {
    "name": "English Opening: Agincourt Defense, Neo-Catalan Declined",
    "eco": "A14",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. O-O"
  },
  {
    "name": "English Opening: Agincourt Defense, Tarrasch Defense",
    "eco": "A14",
    "fen": "r1bqk2r/pp2bppp/2n1pn2/2pp4/2P5/1P3NP1/P2PPPBP/RNBQ1RK1 w kq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. b3 c5 5. Bg2 Nc6 6. O-O Be7"
  },
  {
    "name": "English Opening: Agincourt Defense, Wimpy System",
    "eco": "A13",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp4/2P5/1P2PN2/PB1P1PPP/RN1QKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. b3 d5 4. Bb2 c5 5. e3"
  },
  {
    "name": "English Opening: Anglo-Dutch Defense",
    "eco": "A10",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 f5"
  },
  {
    "name": "English Opening: Anglo-Dutch Defense, Hickmann Gambit",
    "eco": "A10",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. c4 f5 2. e4"
  },
  {
    "name": "English Opening: Anglo-Dutch Variation, Chabanon Gambit",
    "eco": "A10",
    "fen": "rnbqkbnr/ppp1p1pp/3p4/5p2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. c4 f5 2. Nf3 d6 3. e4"
  },
  {
    "name": "English Opening: Anglo-Dutch Variation, Ferenc Gambit",
    "eco": "A10",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq",
    "moves": "1. c4 f5 2. Nc3 Nf6 3. e4"
  },
  {
    "name": "English Opening: Anglo-Gruenfeld Defense",
    "eco": "A16",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 d5"
  },
  {
    "name": "English Opening: Anglo-Gruenfeld Defense: Korchnoi Variation",
    "eco": "A16",
    "fen": "rnbqk2r/ppp2pbp/6p1/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. g3 Bg7 6. Bg2 e5"
  },
  {
    "name": "English Opening: Anglo-Indian Defense",
    "eco": "A15",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 Nf6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Anglo-Gruenfeld Variation",
    "eco": "A16",
    "fen": "rnbqkb1r/ppp1pppp/8/3n4/8/2N2N2/PP1PPPPP/R1BQKB1R b KQkq",
    "moves": "1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. Nf3"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Anglo-Gruenfeld Variation, 4. g3 g6 5. Bg2 Nb6",
    "eco": "A16",
    "fen": "rnbqkb1r/ppp1pp1p/1n4p1/8/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. g3 g6 5. Bg2 Nb6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Anglo-Gruenfeld Variation, 4. g3 g6 5. Bg2 Nxc3",
    "eco": "A16",
    "fen": "rnbqkb1r/ppp1pp1p/6p1/8/8/2n3P1/PP1PPPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. g3 g6 5. Bg2 Nxc3"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Anti-Anti-Gruenfeld",
    "eco": "A17",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Flohr-Mikenas-Carls Variation, Nei Gambit",
    "eco": "A19",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p1P3/2P5/2N5/PP1P1PPP/R1BQKBNR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. e4 c5 4. e5 Ng8"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Gruenfeld Formation",
    "eco": "A15",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq",
    "moves": "1. g3 d5 2. Nf3 g6 3. c4 Nf6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Hedgehog System",
    "eco": "A17",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, King's Indian Formation",
    "eco": "A15",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 g6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, King's Indian Formation, Double Fianchetto",
    "eco": "A15",
    "fen": "rn1qkb1r/pbpppp1p/1p3np1/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 b6 3. g3 Bb7 4. Bg2 g6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, King's Knight Variation",
    "eco": "A15",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. c4"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Nimzo-English",
    "eco": "A17",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bP5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. Nc3 Bb4"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Old Indian Formation",
    "eco": "A15",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 d6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Queen's Indian Formation",
    "eco": "A15",
    "fen": "rnbqkb1r/p1pppppp/1p3n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 b6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Queen's Indian Formation, 2. Nc3 e6 3. Nf3 b6",
    "eco": "A17",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. Nf3 b6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Queen's Indian Formation, 3. g3 b6 4. Bg2 Bb7",
    "eco": "A13",
    "fen": "rn1qkb1r/pbpp1ppp/1p2pn2/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 b6 4. Bg2 Bb7"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Queen's Indian Variation",
    "eco": "A17",
    "fen": "rn1qkb1r/pbpp1ppp/1p2pn2/8/2P1P3/2NB1N2/PP1P1PPP/R1BQK2R b KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. Nf3 b6 4. e4 Bb7 5. Bd3"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Queen's Knight Variation",
    "eco": "A16",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq",
    "moves": "1. c4 Nf6 2. Nc3"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Romanishin Variation",
    "eco": "A11",
    "fen": "rnbqkb1r/1ppp1ppp/p3pn2/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 a6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Scandinavian Defense",
    "eco": "A15",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 d5"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Scandinavian Defense, Exchange Variation",
    "eco": "A15",
    "fen": "rnbqkb1r/ppp1pppp/8/3n4/8/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 d5 3. cxd5 Nxd5"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Slav Formation",
    "eco": "A15",
    "fen": "rnbqkb1r/pp1ppp1p/2p2np1/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. g3 c6"
  },
  {
    "name": "English Opening: Anglo-Indian Defense, Zvjaginsev-Krasenkow Attack",
    "eco": "A18",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bP3P1/2N2N2/PP1PPP1P/R1BQKB1R b KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. Nf3 Bb4 4. g4"
  },
  {
    "name": "English Opening: Anglo-Lithuanian Variation",
    "eco": "A10",
    "fen": "r1bqkbnr/pppppppp/2n5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 Nc6"
  },
  {
    "name": "English Opening: Anglo-Scandinavian Defense",
    "eco": "A10",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 d5"
  },
  {
    "name": "English Opening: Anglo-Scandinavian Defense, Loehn Gambit",
    "eco": "A10",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 d5 2. cxd5 e6"
  },
  {
    "name": "English Opening: Anglo-Scandinavian Defense, Malvinas Variation",
    "eco": "A10",
    "fen": "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 d5 2. cxd5 Qxd5 3. Nc3 Qa5"
  },
  {
    "name": "English Opening: Anglo-Scandinavian Defense, Schulz Gambit",
    "eco": "A10",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 d5 2. cxd5 Nf6"
  },
  {
    "name": "English Opening: Carls-Bremen System",
    "eco": "A22",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. g3"
  },
  {
    "name": "English Opening: Caro-Kann Defensive System",
    "eco": "A11",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 c6"
  },
  {
    "name": "English Opening: Closed, 5. Rb1 Taimanov Variation",
    "eco": "A25",
    "fen": "r1bqk2r/pppp1pbp/2n3pn/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR w Kkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Rb1 Nh6 5. Bg2 Bg7"
  },
  {
    "name": "English Opening: Closed, Taimanov Variation",
    "eco": "A25",
    "fen": "r1bqk2r/ppp2pbp/2np2pn/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e3 d6 6. Nge2 Nh6"
  },
  {
    "name": "English Opening: Drill Variation",
    "eco": "A20",
    "fen": "rnbqkbnr/pppp1pp1/8/4p2p/2P5/6P1/PP1PPP1P/RNBQKBNR w KQkq",
    "moves": "1. c4 e5 2. g3 h5"
  },
  {
    "name": "English Opening: Four Knights System, Nimzowitsch Variation",
    "eco": "A28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e4"
  },
  {
    "name": "English Opening: Great Snake Variation",
    "eco": "A10",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 g6"
  },
  {
    "name": "English Opening: Jaenisch Gambit",
    "eco": "A10",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 b5"
  },
  {
    "name": "English Opening: King's English Variation",
    "eco": "A20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 e5"
  },
  {
    "name": "English Opening: King's English Variation, 2. Nc3 d6 3. Nf3",
    "eco": "A21",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 d6 3. Nf3"
  },
  {
    "name": "English Opening: King's English Variation, Bellon Gambit",
    "eco": "A22",
    "fen": "rnbqkb1r/p1pp1ppp/5n2/1p4N1/2P1p3/2N5/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 e4 4. Ng5 b5"
  },
  {
    "name": "English Opening: King's English Variation, Botvinnik System",
    "eco": "A26",
    "fen": "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P1P3/2NP2P1/PP3PBP/R1BQK1NR b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. e4"
  },
  {
    "name": "English Opening: King's English Variation, Botvinnik System, Prickly Pawn Pass System",
    "eco": "A26",
    "fen": "rnbq1rk1/1p3pbp/p1pp1np1/4p3/2P1P3/2NP2P1/PP2NPBP/R1BQ1RK1 w -",
    "moves": "1. c4 g6 2. Nc3 Bg7 3. g3 Nf6 4. Bg2 O-O 5. e4 d6 6. Nge2 e5 7. O-O c6 8. d3 a6"
  },
  {
    "name": "English Opening: King's English Variation, Bremen-Hort Variation",
    "eco": "A25",
    "fen": "r2qk1nr/ppp2pbp/2npb1p1/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e3 d6 6. Nge2 Be6"
  },
  {
    "name": "English Opening: King's English Variation, Closed System",
    "eco": "A25",
    "fen": "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3"
  },
  {
    "name": "English Opening: King's English Variation, Closed System, Full Symmetry",
    "eco": "A26",
    "fen": "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation",
    "eco": "A28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, 7. Bh4 Bxc3+ 8. bxc3 Ne5",
    "eco": "A28",
    "fen": "r1bqk2r/pppp1pp1/5n1p/4n3/2PN3B/2P5/P3PPPP/R2QKB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d4 exd4 5. Nxd4 Bb4 6. Bg5 h6 7. Bh4 Bxc3+ 8. bxc3 Ne5"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Bradley Beach Variation",
    "eco": "A28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/2PPp3/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d4 e4"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Fianchetto Line",
    "eco": "A29",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Flexible Line",
    "eco": "A28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2NP1N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d3"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Korchnoi Line",
    "eco": "A28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/P1N2N2/1P1PPPPP/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. a3"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Quiet Line",
    "eco": "A28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N1PN2/PP1P1PPP/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Quiet Line, 4. e3 Bb4 5. Qc2 Bxc3",
    "eco": "A28",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/4p3/2P5/2b1PN2/PPQP1PPP/R1B1KB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3 Bb4 5. Qc2 Bxc3"
  },
  {
    "name": "English Opening: King's English Variation, Four Knights Variation, Quiet Line, 6. Nd5 Re8 7. Qf5",
    "eco": "A28",
    "fen": "r1bqr1k1/pppp1ppp/2n2n2/3NpQ2/1bP5/4PN2/PP1P1PPP/R1B1KB1R b KQ",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3 Bb4 5. Qc2 O-O 6. Nd5 Re8 7. Qf5"
  },
  {
    "name": "English Opening: King's English Variation, Hungarian Attack",
    "eco": "A25",
    "fen": "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR b Kkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Rb1"
  },
  {
    "name": "English Opening: King's English Variation, Keres Defense",
    "eco": "A21",
    "fen": "rnbqkbnr/pp3ppp/2pp4/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 d6 3. g3 c6"
  },
  {
    "name": "English Opening: King's English Variation, Kramnik-Shirov Counterattack",
    "eco": "A21",
    "fen": "rnbqk1nr/pppp1ppp/8/4p3/1bP5/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Bb4"
  },
  {
    "name": "English Opening: King's English Variation, Nimzowitsch Variation",
    "eco": "A20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nf3"
  },
  {
    "name": "English Opening: King's English Variation, Nimzowitsch-Flohr Variation",
    "eco": "A20",
    "fen": "rnbqkbnr/pppp1ppp/8/8/2P1p3/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. c4 e5 2. Nf3 e4"
  },
  {
    "name": "English Opening: King's English Variation, Reversed Closed Sicilian",
    "eco": "A25",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6"
  },
  {
    "name": "English Opening: King's English Variation, Reversed Sicilian",
    "eco": "A21",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq",
    "moves": "1. c4 e5 2. Nc3"
  },
  {
    "name": "English Opening: King's English Variation, Smyslov Defense",
    "eco": "A21",
    "fen": "rn1qkbnr/ppp2ppp/3p4/4p3/2P3b1/2N2N2/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 d6 3. Nf3 Bg4"
  },
  {
    "name": "English Opening: King's English Variation, Taimanov Variation",
    "eco": "A25",
    "fen": "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7"
  },
  {
    "name": "English Opening: King's English Variation, Three Knights System",
    "eco": "A27",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. Nf3"
  },
  {
    "name": "English Opening: King's English Variation, Troger Defense",
    "eco": "A21",
    "fen": "r2qkbnr/ppp2ppp/2npb3/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nc6 3. g3 d6 4. Bg2 Be6"
  },
  {
    "name": "English Opening: King's English Variation, Two Knights Variation",
    "eco": "A22",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6"
  },
  {
    "name": "English Opening: King's English Variation, Two Knights Variation, Fianchetto Line",
    "eco": "A24",
    "fen": "rnbqkb1r/pppp1p1p/5np1/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. g3 g6"
  },
  {
    "name": "English Opening: King's English Variation, Two Knights Variation, Keres Variation",
    "eco": "A23",
    "fen": "rnbqkb1r/pp1p1ppp/2p2n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. g3 c6"
  },
  {
    "name": "English Opening: King's English Variation, Two Knights Variation, Reversed Dragon",
    "eco": "A22",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. g3 d5"
  },
  {
    "name": "English Opening: King's English Variation, Two Knights Variation, Smyslov System",
    "eco": "A22",
    "fen": "rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. g3 Bb4"
  },
  {
    "name": "English Opening: King's English, Erbenheimer Gambit",
    "eco": "A22",
    "fen": "rnbqkb1r/pppp1ppp/8/6N1/2P1p1n1/2N5/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. Nf3 e4 4. Ng5 Ng4"
  },
  {
    "name": "English Opening: King's English, Mazedonisch",
    "eco": "A25",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P2P2/2N5/PP1PP1PP/R1BQKBNR b KQkq",
    "moves": "1. c4 e5 2. Nc3 Nf6 3. f4"
  },
  {
    "name": "English Opening: Mikenas-Carls Variation",
    "eco": "A18",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. e4"
  },
  {
    "name": "English Opening: Mikenas-Carls Variation, 2. Nc3 e6 3. e4 Nc6",
    "eco": "A18",
    "fen": "r1bqkb1r/pppp1ppp/2n1pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. e4 Nc6"
  },
  {
    "name": "English Opening: Mikenas-Carls Variation, 3. e4 d5 4. e5",
    "eco": "A18",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR b KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. e4 d5 4. e5"
  },
  {
    "name": "English Opening: Mikenas-Carls, Sicilian",
    "eco": "A19",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/2p5/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. e4 c5"
  },
  {
    "name": "English Opening: Myers Variation",
    "eco": "A10",
    "fen": "rnbqk1nr/ppppppbp/8/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 g5 2. d4 Bg7"
  },
  {
    "name": "English Opening: Neo-Catalan",
    "eco": "A13",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5"
  },
  {
    "name": "English Opening: Neo-Catalan Declined",
    "eco": "A14",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7"
  },
  {
    "name": "English Opening: Porcupine Variation",
    "eco": "A10",
    "fen": "rnbqkb1r/ppppp1pp/5n2/8/2P1p1P1/2N5/PP1P1P1P/R1BQKBNR b KQkq",
    "moves": "1. c4 f5 2. Nc3 Nf6 3. e4 fxe4 4. g4"
  },
  {
    "name": "English Opening: Romanishin Gambit",
    "eco": "A13",
    "fen": "rnbqkb1r/2pp1ppp/p3pn2/1p6/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 a6 4. Bg2 b5"
  },
  {
    "name": "English Opening: Symmetrical Variation",
    "eco": "A30",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 c5"
  },
  {
    "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation",
    "eco": "A31",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. Nf3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation, Geller Variation",
    "eco": "A33",
    "fen": "r1b1kb1r/pp1p1ppp/1qn1pn2/8/2PN4/2N3P1/PP2PP1P/R1BQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. d4 cxd4 5. Nxd4 e6 6. g3 Qb6"
  },
  {
    "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense",
    "eco": "A32",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/8/2PN4/8/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. Nf3 cxd4 4. Nxd4 e6"
  },
  {
    "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense, 4. d4 cxd4 5. Nxd4 e6",
    "eco": "A33",
    "fen": "r1bqkb1r/pp1p1ppp/2n1pn2/8/2PN4/2N5/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. d4 cxd4 5. Nxd4 e6"
  },
  {
    "name": "English Opening: Symmetrical Variation, Botvinnik System",
    "eco": "A36",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P1P3/2N3P1/PP1P1PBP/R1BQK1NR b KQkq",
    "moves": "1. e4 c5 2. c4 Nc6 3. Nc3 g6 4. g3 Bg7 5. Bg2"
  },
  {
    "name": "English Opening: Symmetrical Variation, Botvinnik System Reversed",
    "eco": "A36",
    "fen": "r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N1P1P1/PP1P1PBP/R1BQK1NR w KQkq",
    "moves": "1. c4 c5 2. Nc3 g6 3. g3 Bg7 4. Bg2 Nc6 5. e3 e5"
  },
  {
    "name": "English Opening: Symmetrical Variation, Botvinnik System Reversed, 4. g3 g6 5. Bg2 Bg7",
    "eco": "A37",
    "fen": "r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq",
    "moves": "1. Nf3 c5 2. c4 Nc6 3. Nc3 e5 4. g3 g6 5. Bg2 Bg7"
  },
  {
    "name": "English Opening: Symmetrical Variation, Double Fianchetto",
    "eco": "A38",
    "fen": "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/1PN2NP1/P2PPPBP/R1BQ1RK1 b -",
    "moves": "1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3 Nf6 6. O-O O-O 7. b3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Duchamp Variation",
    "eco": "A38",
    "fen": "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/2NP1NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. Nf3 Nf6 2. g3 g6 3. Bg2 Bg7 4. O-O O-O 5. c4 c5 6. Nc3 Nc6 7. d3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Fianchetto Variation",
    "eco": "A34",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq",
    "moves": "1. c4 Nf6 2. Nc3 c5 3. g3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Fianchetto Variation, 2. Nc3 Nc6 3. g3",
    "eco": "A36",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq",
    "moves": "1. c4 c5 2. Nc3 Nc6 3. g3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Four Knights Variation",
    "eco": "A35",
    "fen": "r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6"
  },
  {
    "name": "English Opening: Symmetrical Variation, Full Symmetry Line",
    "eco": "A38",
    "fen": "r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. g3 g6 5. Bg2 Bg7"
  },
  {
    "name": "English Opening: Symmetrical Variation, Hedgehog Defense",
    "eco": "A30",
    "fen": "rn1qk2r/pb1pbppp/1p2pn2/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 e6 4. g3 b6 5. Bg2 Bb7 6. O-O Be7"
  },
  {
    "name": "English Opening: Symmetrical Variation, Mecking Variation",
    "eco": "A39",
    "fen": "r1bq1rk1/pp1pppbp/2n2np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O O-O 7. d4"
  },
  {
    "name": "English Opening: Symmetrical Variation, Napolitano Gambit",
    "eco": "A30",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/1PP5/5N2/P2PPPPP/RNBQKB1R b KQkq",
    "moves": "1. c4 c5 2. Nf3 Nf6 3. b4"
  },
  {
    "name": "English Opening: Symmetrical Variation, Normal Variation",
    "eco": "A34",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq",
    "moves": "1. c4 c5 2. Nc3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Rubinstein Variation",
    "eco": "A34",
    "fen": "rnbqkb1r/ppn1pppp/8/2p5/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 Nf6 2. Nc3 c5 3. g3 d5 4. cxd5 Nxd5 5. Bg2 Nc7"
  },
  {
    "name": "English Opening: Symmetrical Variation, Symmetrical Variation",
    "eco": "A36",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq",
    "moves": "1. c4 c5 2. g3 g6 3. Bg2 Bg7 4. Nc3 Nc6"
  },
  {
    "name": "English Opening: Symmetrical Variation, Three Knights Variation",
    "eco": "A34",
    "fen": "rnbqkb1r/pp2pppp/8/2pn4/8/2N2N2/PP1PPPPP/R1BQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c5 3. Nc3 d5 4. cxd5 Nxd5"
  },
  {
    "name": "English Opening: Symmetrical Variation, Two Knights Line",
    "eco": "A37",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R b KQkq",
    "moves": "1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3"
  },
  {
    "name": "English Opening: Symmetrical Variation, Two Knights Variation",
    "eco": "A35",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq",
    "moves": "1. c4 c5 2. Nc3 Nc6"
  },
  {
    "name": "English Opening: Symmetrical, Hedgehog, Flexible Formation",
    "eco": "A30",
    "fen": "r2qk2r/1b1nbppp/pp1ppn2/8/2PQ4/1PN2NP1/P3PPBP/R1BR2K1 w kq",
    "moves": "1. Nf3 c5 2. c4 Nf6 3. Nc3 e6 4. g3 b6 5. Bg2 Bb7 6. O-O Be7 7. d4 cxd4 8. Qxd4 d6 9. Rd1 a6 10. b3 Nbd7"
  },
  {
    "name": "English Opening: The Whale",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. c4"
  },
  {
    "name": "English Opening: Wade Gambit",
    "eco": "A10",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/2P3P1/8/PP1PPP1P/RNBQKBNR b KQkq",
    "moves": "1. c4 f5 2. g4"
  },
  {
    "name": "English Opening: Wing Gambit",
    "eco": "A30",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/1PP5/8/P2PPPPP/RNBQKBNR b KQkq",
    "moves": "1. c4 c5 2. b4"
  },
  {
    "name": "English Opening: Zilbermints Gambit",
    "eco": "A10",
    "fen": "rnbqkbnr/pppp1p1p/8/4p1p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 g5 2. d4 e5"
  },
  {
    "name": "English Openings: King's English, Kahiko-Hula Gambit",
    "eco": "A20",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/2P2p2/4PN2/PP1P2PP/RNBQKB1R b KQkq",
    "moves": "1. c4 e5 2. e3 Nf6 3. f4 exf4 4. Nf3"
  },
  {
    "name": "English Orangutan",
    "eco": "A15",
    "fen": "rnbqkb1r/pppppppp/5n2/8/1PP5/8/P2PPPPP/RNBQKBNR b KQkq",
    "moves": "1. c4 Nf6 2. b4"
  },
  {
    "name": "English Rat: Pounds Gambit",
    "eco": "A41",
    "fen": "rn1qkbnr/ppp2ppp/3pb3/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d6 2. c4 e5 3. dxe5 Be6"
  },
  {
    "name": "Englund Gambit",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e5"
  },
  {
    "name": "Englund Gambit Complex Declined",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/3Pp3/8/8/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 e5 2. d5"
  },
  {
    "name": "Englund Gambit Complex Declined, Diemer Counterattack",
    "eco": "A40",
    "fen": "rnb1k1nr/pppp1ppp/8/2bPp3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e5 2. d5 Bc5 3. e4 Qh4"
  },
  {
    "name": "Englund Gambit Complex: Englund Gambit",
    "eco": "A40",
    "fen": "r1b1kbnr/ppppqppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 Qe7"
  },
  {
    "name": "Englund Gambit Complex: Felbecker Gambit",
    "eco": "A40",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 Bc5"
  },
  {
    "name": "Englund Gambit Complex: Hartlaub-Charlick Gambit",
    "eco": "A40",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e5 2. dxe5 d6"
  },
  {
    "name": "Englund Gambit Complex: Mosquito Gambit",
    "eco": "A40",
    "fen": "rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e5 2. dxe5 Qh4"
  },
  {
    "name": "Englund Gambit Complex: Soller Gambit",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e5 2. dxe5 f6"
  },
  {
    "name": "Englund Gambit Complex: Soller Gambit Deferred",
    "eco": "A40",
    "fen": "r1bqkbnr/pppp2pp/2n2p2/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 f6"
  },
  {
    "name": "Englund Gambit Complex: Stockholm Variation",
    "eco": "A40",
    "fen": "r1b1kbnr/ppppqppp/2n5/3QP3/8/5N2/PPP1PPPP/RNB1KB1R b KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 Qe7 4. Qd5"
  },
  {
    "name": "Englund Gambit Complex: Zilbermints Gambit",
    "eco": "A40",
    "fen": "r1bqkbnr/pppp1pp1/2n4p/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 h6"
  },
  {
    "name": "Englund Gambit Complex: Zilbermints Gambit, 2. dxe5 Nc6 3. Nf3 Nge7",
    "eco": "A40",
    "fen": "r1bqkb1r/ppppnppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 Nge7"
  },
  {
    "name": "Englund Gambit Declined, Reversed Alekhine",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 e5 2. Nf3"
  },
  {
    "name": "Englund Gambit Declined, Reversed Brooklyn",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3Pp3/8/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 e5 2. Nf3 e4 3. Ng1"
  },
  {
    "name": "Englund Gambit Declined, Reversed French",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e3 e5 2. d4"
  },
  {
    "name": "Englund Gambit Declined, Reversed Krebs",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3Pp3/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 e5 2. Nf3 e4"
  },
  {
    "name": "Englund Gambit Declined, Reversed Mokele Mbembe",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/4N3/3Pp3/8/PPP1PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 e5 2. Nf3 e4 3. Ne5"
  },
  {
    "name": "Formation: Cabbage Attack",
    "eco": "A00",
    "fen": "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/P7/1PP1P1P1/1B1P1P1P/RN1QKBNR b KQ",
    "moves": "1. c3 e5 2. a3 d5 3. b3 Nf6 4. Bb2 Nc6 5. a4 Bd6 6. g3 O-O 7. e3"
  },
  {
    "name": "Formation: Hippopotamus Attack",
    "eco": "A00",
    "fen": "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/PPPPPPP1/7P/RNBQKBNR b KQ",
    "moves": "1. a3 e5 2. b3 d5 3. c3 Nf6 4. d3 Nc6 5. e3 Bd6 6. f3 O-O 7. g3"
  },
  {
    "name": "Formation: Shy Attack",
    "eco": "A00",
    "fen": "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/P2PP1PP/1PPN1PB1/R1BQK1NR b KQ",
    "moves": "1. a3 e5 2. g3 d5 3. Bg2 Nf6 4. d3 Nc6 5. Nd2 Bd6 6. e3 O-O 7. h3"
  },
  {
    "name": "Four Knights Game",
    "eco": "C46",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6"
  },
  {
    "name": "Four Knights Game: Alatortsev Variation",
    "eco": "C49",
    "fen": "r1b2rk1/ppp1qppp/2n2n2/1B1pp3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Qe7 7. Ne2 d5"
  },
  {
    "name": "Four Knights Game: Bardeleben Variation",
    "eco": "C48",
    "fen": "r1bq1rk1/pppp1ppp/2n2n2/1B2P3/1b1P1P2/2N5/PPP3PP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bc5 5. O-O O-O 6. Nxe5 Nxe5 7. d4 Bd6 8. f4 Nc6 9. e5 Bb4"
  },
  {
    "name": "Four Knights Game: Double Spanish",
    "eco": "C49",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4"
  },
  {
    "name": "Four Knights Game: Double Spanish, with 5. O-O",
    "eco": "C49",
    "fen": "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3"
  },
  {
    "name": "Four Knights Game: Gunsberg Counterattack",
    "eco": "C49",
    "fen": "r1bq1rk1/pppp1ppp/2n5/1B1P4/1b2p3/5N2/PPPP1PPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Bb4 5. O-O O-O 6. Nd5 Nxd5 7. exd5 e4"
  },
  {
    "name": "Four Knights Game: Gunsberg Variation",
    "eco": "C46",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/P1N2N2/1PPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. a3"
  },
  {
    "name": "Four Knights Game: Halloween Gambit",
    "eco": "C46",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5"
  },
  {
    "name": "Four Knights Game: Halloween Gambit, Oldtimer Variation",
    "eco": "C46",
    "fen": "r1bqk1nr/pppp2pp/6n1/4Pp2/1bBP4/2N2Q2/PPP2PPP/R1B1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5 Nxe5 5. d4 Ng6 6. e5 Ng8 7. Bc4 Bb4 8. Qf3 f5"
  },
  {
    "name": "Four Knights Game: Halloween Gambit, Plasma Variation",
    "eco": "C46",
    "fen": "1rb1kbnr/pp1p1ppp/3P1qn1/1N6/5P2/8/PPP3PP/R1BQKB1R w KQk",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5 Nxe5 5. d4 Nc6 6. d5 Ne5 7. f4 Ng6 8. e5 Ng8 9. d6 cxd6 10. exd6 Qf6 11. Nb5 Rb8"
  },
  {
    "name": "Four Knights Game: Italian Variation",
    "eco": "C46",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Nc3"
  },
  {
    "name": "Four Knights Game: Italian Variation, 3. Bc4 Bc5 4. Nc3 Nf6",
    "eco": "C50",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Nc3 Nf6"
  },
  {
    "name": "Four Knights Game: Italian Variation, Noa Gambit",
    "eco": "C47",
    "fen": "r1bqkb1r/pppp1Bpp/2n5/4p3/4n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Nc3 Nxe4 5. Bxf7+"
  },
  {
    "name": "Four Knights Game: Janowski Variation",
    "eco": "C49",
    "fen": "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/4P3/2PP1N2/P1P2PPP/R1BQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Bxc3 7. bxc3 d6 8. Re1"
  },
  {
    "name": "Four Knights Game: Marshall Variation",
    "eco": "C48",
    "fen": "r1bq1rk1/pppp1ppp/5n2/1Bb1N3/3nP3/2N5/PPPP1PPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Nxe5 Bc5 6. O-O O-O"
  },
  {
    "name": "Four Knights Game: Nimzowitsch (Paulsen)",
    "eco": "C49",
    "fen": "r1bq1rk1/pppp1ppp/2B2n2/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. Bxc6"
  },
  {
    "name": "Four Knights Game: Ranken Variation",
    "eco": "C48",
    "fen": "r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 a6 5. Bxc6"
  },
  {
    "name": "Four Knights Game: Rubinstein Countergambit, 5. Be2",
    "eco": "C48",
    "fen": "r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPPPBPPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Be2"
  },
  {
    "name": "Four Knights Game: Rubinstein Countergambit, Henneberger Variation",
    "eco": "C48",
    "fen": "r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Nd4 5. O-O"
  },
  {
    "name": "Four Knights Game: Rubinstein Countergambit, Maroczy Variation",
    "eco": "C48",
    "fen": "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/N3P3/3P1B2/PPP2PPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Be2 Nxf3+ 6. Bxf3 Bc5 7. O-O O-O 8. d3 d6 9. Na4 Bb6"
  },
  {
    "name": "Four Knights Game: Scotch Variation",
    "eco": "C47",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4"
  },
  {
    "name": "Four Knights Game: Scotch Variation Accepted",
    "eco": "C47",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4"
  },
  {
    "name": "Four Knights Game: Scotch Variation, Belgrade Gambit",
    "eco": "C47",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nd5"
  },
  {
    "name": "Four Knights Game: Scotch Variation, Krause Gambit",
    "eco": "C47",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 Bb4 5. Nxe5"
  },
  {
    "name": "Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense",
    "eco": "C47",
    "fen": "r1b1k2r/ppppqppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 Bb4 5. Nxe5 Qe7"
  },
  {
    "name": "Four Knights Game: Scotch Variation, Oxford Gambit",
    "eco": "C47",
    "fen": "r1bqk2r/pppp1ppp/5n2/3Pp3/1b1nP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 Bb4 5. d5 Nd4"
  },
  {
    "name": "Four Knights Game: Scotch Variation, Schmid Defense",
    "eco": "C47",
    "fen": "r1bqkb1r/pppp1ppp/2n5/8/3Nn3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nxd4 Nxe4"
  },
  {
    "name": "Four Knights Game: Spanish Variation",
    "eco": "C48",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5"
  },
  {
    "name": "Four Knights Game: Spanish Variation, 5. O-O O-O 6. d3 Bxc3",
    "eco": "C49",
    "fen": "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/4P3/2bP1N2/PPP2PPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Bxc3"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Classical Variation",
    "eco": "C48",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bc5"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Classical Variation, Marshall Gambit",
    "eco": "C48",
    "fen": "r1bq1rk1/pppp1ppp/5n2/2b1N3/B2nP3/2N5/PPPP1PPP/R1BQK2R w KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Ba4 Bc5 6. Nxe5 O-O"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Rubinstein Variation",
    "eco": "C48",
    "fen": "r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Rubinstein Variation, 5. Nxe5 Qe7 6. f4",
    "eco": "C48",
    "fen": "r1b1kb1r/ppppqppp/5n2/1B2N3/3nPP2/2N5/PPPP2PP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Nd4 5. Nxe5 Qe7 6. f4"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Rubinstein Variation Accepted",
    "eco": "C48",
    "fen": "r1bqkb1r/pppp1ppp/5n2/1B2p3/3NP3/2N5/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Nxd4"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Symmetrical Variation",
    "eco": "C49",
    "fen": "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Symmetrical Variation, 6. d3 d6 7. Ne2",
    "eco": "C49",
    "fen": "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Ne2"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Symmetrical Variation, 6. d3 d6 7. Bg5 Ne7",
    "eco": "C49",
    "fen": "r1bq1rk1/ppp1nppp/3p1n2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Ne7"
  },
  {
    "name": "Four Knights Game: Spanish Variation, Symmetrical Variation, 9. Re1 Nd8 10. d4 Bg4",
    "eco": "C49",
    "fen": "r2n1rk1/ppp1qppp/3p1n2/1B2p1B1/3PP1b1/2P2N2/P1P2PPP/R2QR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Qe7 9. Re1 Nd8 10. d4 Bg4"
  },
  {
    "name": "Four Knights Game: Spielmann Variation",
    "eco": "C48",
    "fen": "r3kb1r/1pp2ppp/p1p1b3/3q4/3PN3/8/PPP2PPP/R1BQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 a6 5. Bxc6 dxc6 6. Nxe5 Nxe4 7. Nxe4 Qd4 8. O-O Qxe5 9. Re1 Be6 10. d4 Qd5"
  },
  {
    "name": "Four Knights Game: Svenonius Variation",
    "eco": "C49",
    "fen": "r1bq1rk1/ppp2ppp/2n2n2/1B1pp3/4P3/2PP1N2/P1P2PPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Bxc3 7. bxc3 d5"
  },
  {
    "name": "Four Knights Game: Symmetrical, Blake Variation",
    "eco": "C49",
    "fen": "r1b2rk1/pp2nppp/2pq1n2/3pp1B1/1b2P2N/1BNP4/PPP2PPP/R2Q1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Ne7 8. Nh4 c6 9. Bc4 d5 10. Bb3 Qd6"
  },
  {
    "name": "Four Knights Game: Symmetrical, Metger Unpin",
    "eco": "C49",
    "fen": "r1b2rk1/ppp1qppp/2np1n2/1B2p1B1/4P3/2PP1N2/P1P2PPP/R2Q1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Qe7"
  },
  {
    "name": "Four Knights Game: Symmetrical, Tarrasch Variation",
    "eco": "C49",
    "fen": "r2q1rk1/ppp2ppp/2npbn2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Be6"
  },
  {
    "name": "Four Knights: Scotch Variation, Belgrade Gambit, Modern Defense",
    "eco": "C47",
    "fen": "r1bqkb1r/pppp2pp/2n5/3N1p2/3pn3/5N2/PPP1QPPP/R1B1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nd5 Nxe4 6. Qe2 f5"
  },
  {
    "name": "Franco-Benoni Defense",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2pP4/4P3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 c5 3. d5"
  },
  {
    "name": "French Defense",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6"
  },
  {
    "name": "French Defense, 2. d4 d5",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5"
  },
  {
    "name": "French Defense: Advance Variation",
    "eco": "C02",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5"
  },
  {
    "name": "French Defense: Advance Variation, 2. d4 d5 3. e5 c5",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5"
  },
  {
    "name": "French Defense: Advance Variation, 3. e5 c5 4. c3",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3"
  },
  {
    "name": "French Defense: Advance Variation, 3. e5 c5 4. c3 Nc6",
    "eco": "C02",
    "fen": "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6"
  },
  {
    "name": "French Defense: Advance Variation, Euwe Variation",
    "eco": "C02",
    "fen": "r2qkbnr/pp1b1ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Bd7"
  },
  {
    "name": "French Defense: Advance Variation, Extended Bishop Swap",
    "eco": "C02",
    "fen": "rn1qkbnr/pppb1ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 Bd7"
  },
  {
    "name": "French Defense: Advance Variation, Frenkel Gambit",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/1P1P4/8/P1P2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. b4"
  },
  {
    "name": "French Defense: Advance Variation, Lputian Variation",
    "eco": "C02",
    "fen": "r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 Nh6"
  },
  {
    "name": "French Defense: Advance Variation, Main Line",
    "eco": "C02",
    "fen": "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3"
  },
  {
    "name": "French Defense: Advance Variation, Milner-Barry Gambit",
    "eco": "C02",
    "fen": "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. Bd3"
  },
  {
    "name": "French Defense: Advance Variation, Nimzowitsch Attack",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P2Q1/8/PPP2PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. Qg4"
  },
  {
    "name": "French Defense: Advance Variation, Nimzowitsch Gambit",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/3pP3/3p2Q1/5N2/PPP2PPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. Qg4 cxd4 5. Nf3"
  },
  {
    "name": "French Defense: Advance Variation, Nimzowitsch System",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. Nf3"
  },
  {
    "name": "French Defense: Advance Variation, Paulsen Attack",
    "eco": "C02",
    "fen": "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3"
  },
  {
    "name": "French Defense: Advance Variation, Ruisdonk Gambit",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/3pP3/3p4/3B1N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. Nf3 cxd4 5. Bd3"
  },
  {
    "name": "French Defense: Advance Variation, Wade Variation",
    "eco": "C02",
    "fen": "rn2kbnr/pp1b1ppp/1q2p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Qb6 5. Nf3 Bd7"
  },
  {
    "name": "French Defense: Advance, Steinitz Variation",
    "eco": "C02",
    "fen": "rnbqkbnr/pp3ppp/4p3/2PpP3/8/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. e5 c5 4. dxc5"
  },
  {
    "name": "French Defense: Alapin Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Be3"
  },
  {
    "name": "French Defense: Alekhine-Chatard Attack",
    "eco": "C13",
    "fen": "rnbqk2r/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4"
  },
  {
    "name": "French Defense: Alekhine-Chatard Attack, Albin-Chatard Gambit",
    "eco": "C13",
    "fen": "rnb1k2r/pppn1ppp/4p3/3pP1q1/3P4/2N5/PPP2PP1/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 Bxg5 7. hxg5 Qxg5"
  },
  {
    "name": "French Defense: Alekhine-Chatard Attack, Breyer Variation",
    "eco": "C13",
    "fen": "rnbqk2r/pp1nbppp/4p3/2ppP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 c5"
  },
  {
    "name": "French Defense: Alekhine-Chatard Attack, Maroczy Variation",
    "eco": "C13",
    "fen": "rnbqk2r/1ppnbppp/p3p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 a6"
  },
  {
    "name": "French Defense: Alekhine-Chatard Attack, Spielmann Variation",
    "eco": "C13",
    "fen": "rnbq1rk1/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQ",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 O-O"
  },
  {
    "name": "French Defense: Alekhine-Chatard Attack, Teichmann Variation",
    "eco": "C13",
    "fen": "rnbqk2r/pppnb1pp/4pp2/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 f6"
  },
  {
    "name": "French Defense: Baeuerle Gambit",
    "eco": "C01",
    "fen": "rnbqkbnr/p1pp1ppp/4p3/1p6/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 b5"
  },
  {
    "name": "French Defense: Banzai-Leong Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. b4"
  },
  {
    "name": "French Defense: Banzai-Leong Gambit, Pinova Gambit",
    "eco": "C00",
    "fen": "rnbqk1nr/pppp1ppp/4p3/4P3/1b6/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. b4 Bxb4 3. e5"
  },
  {
    "name": "French Defense: Bird Invitation",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/1B6/4P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e6 2. Bb5"
  },
  {
    "name": "French Defense: Burn Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5"
  },
  {
    "name": "French Defense: Carlson Gambit",
    "eco": "C01",
    "fen": "rnbqkbnr/ppp2ppp/4p3/4N3/3Pp3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nf3 dxe4 4. Ne5"
  },
  {
    "name": "French Defense: Chigorin Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPPQPPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e6 2. Qe2"
  },
  {
    "name": "French Defense: Classical Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6"
  },
  {
    "name": "French Defense: Classical Variation, 5. e5 Nfd7 6. Bxe7 Qxe7",
    "eco": "C14",
    "fen": "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7"
  },
  {
    "name": "French Defense: Classical Variation, Alapin Variation",
    "eco": "C14",
    "fen": "rnb1k2r/pppnqppp/4p3/1N1pP3/3P4/8/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Nb5"
  },
  {
    "name": "French Defense: Classical Variation, Burn Variation, Main Line",
    "eco": "C11",
    "fen": "rnbq1rk1/ppp2ppp/4pb2/8/3PN3/5N2/PPP2PPP/R2QKB1R w KQ",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 dxe4 5. Nxe4 Be7 6. Bxf6 Bxf6 7. Nf3 O-O"
  },
  {
    "name": "French Defense: Classical Variation, Burn Variation, Morozevich Line",
    "eco": "C11",
    "fen": "rnbqk2r/ppp1bp1p/4pp2/8/3PN3/8/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 dxe4 5. Nxe4 Be7 6. Bxf6 gxf6"
  },
  {
    "name": "French Defense: Classical Variation, Delayed Exchange Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. exd5"
  },
  {
    "name": "French Defense: Classical Variation, Frankfurt Variation",
    "eco": "C13",
    "fen": "rnbqk1nr/p1p1bppp/1p2p3/3pP3/3P4/2N1B3/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Ng8 6. Be3 b6"
  },
  {
    "name": "French Defense: Classical Variation, Normal Variation",
    "eco": "C13",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7"
  },
  {
    "name": "French Defense: Classical Variation, Pollock Variation",
    "eco": "C14",
    "fen": "rnb1k2r/pppnqppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Qg4"
  },
  {
    "name": "French Defense: Classical Variation, Richter Attack",
    "eco": "C13",
    "fen": "rnbqk2r/ppp1bppp/4pB2/3p4/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6"
  },
  {
    "name": "French Defense: Classical Variation, Richter Attack, 6. e5 Be7 7. Qg4",
    "eco": "C13",
    "fen": "rnbqk2r/ppp1bppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6 Bxf6 6. e5 Be7 7. Qg4"
  },
  {
    "name": "French Defense: Classical Variation, Rubinstein Variation",
    "eco": "C14",
    "fen": "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2N5/PPPQ1PPP/R3KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Qd2"
  },
  {
    "name": "French Defense: Classical Variation, Steinitz Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5"
  },
  {
    "name": "French Defense: Classical Variation, Steinitz Variation, 6. Bxe7 Qxe7 7. f4",
    "eco": "C14",
    "fen": "rnb1k2r/pppnqppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. f4"
  },
  {
    "name": "French Defense: Classical Variation, Svenonius Variation",
    "eco": "C10",
    "fen": "r1bqkbnr/ppp2ppp/2n1p3/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nc6 4. exd5"
  },
  {
    "name": "French Defense: Classical Variation, Swiss Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2NB4/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bd3"
  },
  {
    "name": "French Defense: Classical Variation, Tarrasch Variation",
    "eco": "C14",
    "fen": "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2NB4/PPP2PPP/R2QK1NR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Bd3"
  },
  {
    "name": "French Defense: Classical Variation, Tartakower Variation",
    "eco": "C13",
    "fen": "rnbqk2r/ppp1bppp/4p3/3pP1B1/3Pn3/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Ne4"
  },
  {
    "name": "French Defense: Classical Variation, Vistaneckis (Nimzowitsch) Variation",
    "eco": "C13",
    "fen": "rnbqk1nr/ppp1bppp/4p3/3pP1B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Ng8"
  },
  {
    "name": "French Defense: Classical, Stahlberg Variation",
    "eco": "C14",
    "fen": "r1b2rk1/pp1nqppp/2n1p3/3pP3/2pP1P2/2N2N2/PPPQ2PP/2KR1B1R w -",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. f4 O-O 8. Nf3 c5 9. Qd2 Nc6 10. O-O-O c4"
  },
  {
    "name": "French Defense: Diemer-Duhm Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/8/2PPp3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. e4 dxe4"
  },
  {
    "name": "French Defense: Exchange Variation",
    "eco": "C01",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. exd5"
  },
  {
    "name": "French Defense: Exchange Variation, Monte Carlo Variation",
    "eco": "C01",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. exd5 exd5 4. c4"
  },
  {
    "name": "French Defense: Exchange Variation, Svenonius Variation",
    "eco": "C01",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. exd5 exd5 5. Bg5"
  },
  {
    "name": "French Defense: Exchange, Bogoljubov Variation",
    "eco": "C01",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. exd5 exd5 4. Nc3 Nf6 5. Bg5 Nc6"
  },
  {
    "name": "French Defense: Franco-Hiva Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d3 f5"
  },
  {
    "name": "French Defense: Franco-Hiva Gambit, 2. e4 e6",
    "eco": "C01",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 f5 2. e4 e6"
  },
  {
    "name": "French Defense: Franco-Hiva Gambit, 2. Nf3 f5",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e6 2. Nf3 f5"
  },
  {
    "name": "French Defense: Franco-Hiva Gambit Accepted",
    "eco": "C01",
    "fen": "rnbqkb1r/pppp2pp/4pn2/5P2/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 f5 3. exf5 Nf6"
  },
  {
    "name": "French Defense: Guimard Variation, Thunderbunny Variation",
    "eco": "C03",
    "fen": "r1bqkbnr/ppp2ppp/2n5/4p3/3PN3/2P5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nc6 4. c3 dxe4 5. Nxe4 e5"
  },
  {
    "name": "French Defense: Henneberger Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Be3"
  },
  {
    "name": "French Defense: Hoffmann Gambit",
    "eco": "C01",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/3PPp2/8/PPP1Q1PP/RNB1KBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Qe2 e5 4. f4 exf4"
  },
  {
    "name": "French Defense: Horwitz Attack",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. b3"
  },
  {
    "name": "French Defense: Horwitz Attack, Papa-Ticulat Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 e6 2. b3 d5 3. Bb2"
  },
  {
    "name": "French Defense: King's Indian Attack",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d3"
  },
  {
    "name": "French Defense: Knight Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. Nf3"
  },
  {
    "name": "French Defense: La Bourdonnais Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4PP2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. f4"
  },
  {
    "name": "French Defense: La Bourdonnais Variation, Reuter Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/8/4pP2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e6 2. f4 d5 3. Nf3 dxe4"
  },
  {
    "name": "French Defense: MacCutcheon Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP2PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Bernstein Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P3B/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bh4"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Chigorin Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2pp1/4pP1p/3p2B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. exf6"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Dr. Olland (Dutch) Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bc1"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Duras Variation",
    "eco": "C12",
    "fen": "rnbq1k1r/ppp2pp1/4p2p/3pP3/3Pn1Q1/2P5/P1P2PPP/R1B1KBNR b KQ",
    "moves": "1. e4 e6 2. Nc3 d5 3. d4 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Bxc3 7. bxc3 Ne4 8. Qg4 Kf8 9. Bc1"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Exchange Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3P2B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. exd5"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Grigoriev Variation",
    "eco": "C12",
    "fen": "rnbqk1r1/ppp2pP1/4p3/3p4/1b1P2Qp/2N5/PPP2PP1/R3KBNR b KQq",
    "moves": "1. d4 d5 2. Nc3 Nf6 3. Bg5 e6 4. e4 Bb4 5. e5 h6 6. exf6 hxg5 7. fxg7 Rg8 8. h4 gxh4 9. Qg4"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Janowski Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N1B3/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Be3"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Lasker Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2pp1/4pn1p/3pP3/3P4/2b5/PPPB1PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Bxc3"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Lasker Variation, 7. bxc3 Ne4 8. Qg4 g6",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2p2/4p1pp/3pP3/3Pn1Q1/2P5/P1PB1PPP/R3KBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Bxc3 7. bxc3 Ne4 8. Qg4 g6"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Tartakower Variation",
    "eco": "C12",
    "fen": "rnbqk2r/pppn1pp1/4p2p/3pP3/1b1P4/2N5/PPPB1PPP/R2QKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Nfd7"
  },
  {
    "name": "French Defense: MacCutcheon Variation, Wolf Gambit",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP1NPPP/R2QKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 Nf6 5. Bg5"
  },
  {
    "name": "French Defense: MacCutcheon, Advance Variation",
    "eco": "C12",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3pP1B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5"
  },
  {
    "name": "French Defense: MacCutcheon, Bogoljubov Variation",
    "eco": "C12",
    "fen": "rnb1k2r/ppp2p1p/4pp2/q7/1b1P4/2N5/PPPQ1PPP/R3KBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. exd5 Qxd5 6. Bxf6 gxf6 7. Qd2 Qa5"
  },
  {
    "name": "French Defense: Mediterranean Defense",
    "eco": "C01",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 Nf6"
  },
  {
    "name": "French Defense: Morphy Gambit",
    "eco": "C01",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/7N/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nh3"
  },
  {
    "name": "French Defense: Normal Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4"
  },
  {
    "name": "French Defense: Orthoschnapp Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e6 2. c4 d5 3. cxd5 exd5 4. Qb3"
  },
  {
    "name": "French Defense: Paulsen Variation",
    "eco": "C10",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3"
  },
  {
    "name": "French Defense: Pelikan Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. Nc3 d5 3. f4"
  },
  {
    "name": "French Defense: Perseus Gambit",
    "eco": "C01",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nf3"
  },
  {
    "name": "French Defense: Queen's Knight",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. Nc3"
  },
  {
    "name": "French Defense: Reti-Spielmann Attack",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. g3"
  },
  {
    "name": "French Defense: Reversed Philidor Formation",
    "eco": "C00",
    "fen": "r1bqkb1r/ppp2ppp/2n1pn2/3p4/4P3/3P1N2/PPPNBPPP/R1BQK2R b KQkq",
    "moves": "1. e4 e6 2. d3 d5 3. Nd2 Nf6 4. Ngf3 Nc6 5. Be2"
  },
  {
    "name": "French Defense: Rubinstein Variation",
    "eco": "C10",
    "fen": "rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 dxe4"
  },
  {
    "name": "French Defense: Rubinstein Variation, Blackburne Defense",
    "eco": "C10",
    "fen": "r1bqkbnr/pppn1ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7"
  },
  {
    "name": "French Defense: Rubinstein Variation, Capablanca Line",
    "eco": "C10",
    "fen": "r1bqkb1r/ppp2ppp/4pn2/4N3/3P4/8/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Nxf6+ Nxf6 7. Ne5"
  },
  {
    "name": "French Defense: Rubinstein Variation, Ellis Gambit",
    "eco": "C10",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 e5"
  },
  {
    "name": "French Defense: Rubinstein Variation, Fort Knox Variation",
    "eco": "C10",
    "fen": "rn1qkbnr/ppp2ppp/2b1p3/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bd7 5. Nf3 Bc6"
  },
  {
    "name": "French Defense: Rubinstein Variation, Kasparov Attack",
    "eco": "C10",
    "fen": "r1bqkb1r/ppp2ppp/4pn2/8/3P4/2P2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Nxf6+ Nxf6 7. c3"
  },
  {
    "name": "French Defense: Rubinstein Variation, Maric Variation",
    "eco": "C10",
    "fen": "rnb1kbnr/ppp2ppp/4p3/3q4/3PN3/8/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Qd5"
  },
  {
    "name": "French Defense: Schlechter Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Bd3"
  },
  {
    "name": "French Defense: Steiner Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. c4"
  },
  {
    "name": "French Defense: Steinitz Attack",
    "eco": "C00",
    "fen": "rnbqkbnr/pppp1ppp/4p3/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. e5"
  },
  {
    "name": "French Defense: Steinitz Variation",
    "eco": "C11",
    "fen": "rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3"
  },
  {
    "name": "French Defense: Steinitz Variation, 5. f4 c5 6. dxc5 Nc6",
    "eco": "C11",
    "fen": "r1bqkb1r/pp1n1ppp/2n1p3/2PpP3/5P2/2N5/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. dxc5 Nc6"
  },
  {
    "name": "French Defense: Steinitz Variation, Boleslavsky Variation",
    "eco": "C11",
    "fen": "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3 Nc6 7. Be3"
  },
  {
    "name": "French Defense: Steinitz Variation, Bradford Attack Variation",
    "eco": "C11",
    "fen": "rnbqk2r/pp1n1ppp/4p3/2bpP3/5PQ1/2N5/PPP3PP/R1B1KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. dxc5 Bxc5 7. Qg4"
  },
  {
    "name": "French Defense: Steinitz Variation, Gledhill Attack",
    "eco": "C11",
    "fen": "rnbqkb1r/pppn1ppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. Qg4"
  },
  {
    "name": "French Defense: Steinitz, Brodsky-Jones Variation",
    "eco": "C11",
    "fen": "r1bq1rk1/pp1n2pp/2n1pp2/2bpP3/5PQ1/P1N2N2/1PP3PP/R1B1KB1R w KQ",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. dxc5 Nc6 7. a3 Bxc5 8. Qg4 O-O 9. Nf3 f6"
  },
  {
    "name": "French Defense: Tarrasch Variation",
    "eco": "C03",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2"
  },
  {
    "name": "French Defense: Tarrasch Variation, Botvinnik Variation",
    "eco": "C05",
    "fen": "rnbqkb1r/p2n1ppp/1p2p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 b6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Chistyakov Defense",
    "eco": "C07",
    "fen": "rnb1kbnr/pp3ppp/4p3/2pq4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5"
  },
  {
    "name": "French Defense: Tarrasch Variation, Chistyakov Defense, Modern Line",
    "eco": "C07",
    "fen": "r1b1kb1r/1p3ppp/p2qpn2/8/2BN4/8/PPP2PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5 5. Ngf3 cxd4 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Closed Variation",
    "eco": "C05",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nf6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Closed Variation, 5. Bd3 c5 6. c3 Nc6",
    "eco": "C05",
    "fen": "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Closed Variation, Main Line",
    "eco": "C06",
    "fen": "r1bqkb1r/pp1n1ppp/2n1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6 7. Ne2 cxd4 8. cxd4"
  },
  {
    "name": "French Defense: Tarrasch Variation, Guimard Defense",
    "eco": "C03",
    "fen": "r1bqkbnr/ppp2ppp/2n1p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nc6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Guimard Defense, Main Line",
    "eco": "C04",
    "fen": "r1bqkb1r/ppp2ppp/2n1pn2/3p4/3PP3/5N2/PPPN1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nc6 4. Ngf3 Nf6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Haberditz Variation",
    "eco": "C03",
    "fen": "rnbqkbnr/ppp3pp/4p3/3p1p2/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 f5"
  },
  {
    "name": "French Defense: Tarrasch Variation, Leningrad Variation",
    "eco": "C06",
    "fen": "r1bqkb1r/pp3ppp/1nn1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6 7. Ne2 cxd4 8. cxd4 Nb6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Modern System",
    "eco": "C03",
    "fen": "rnbqkbnr/1pp2ppp/p3p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 a6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Morozevich Variation",
    "eco": "C03",
    "fen": "rnbqk1nr/ppp1bppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Be7"
  },
  {
    "name": "French Defense: Tarrasch Variation, Open System",
    "eco": "C07",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5"
  },
  {
    "name": "French Defense: Tarrasch Variation, Open System, Advance Line",
    "eco": "C08",
    "fen": "rnbqkbnr/pp3ppp/8/3p4/2pP4/5N2/PPPN1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 c4"
  },
  {
    "name": "French Defense: Tarrasch Variation, Open System, Euwe-Keres Line",
    "eco": "C07",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPPN1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. Ngf3"
  },
  {
    "name": "French Defense: Tarrasch Variation, Open System, Main Line",
    "eco": "C09",
    "fen": "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/5N2/PPPN1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 Nc6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Open System, Shaposhnikov Gambit",
    "eco": "C07",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Nf6"
  },
  {
    "name": "French Defense: Tarrasch Variation, Open System, Suechting Line",
    "eco": "C07",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2P5/PP1N1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. c3"
  },
  {
    "name": "French Defense: Tarrasch Variation, Pawn Center Variation",
    "eco": "C05",
    "fen": "rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/8/PPPN2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. f4"
  },
  {
    "name": "French Defense: Tarrasch, Eliskases Variation",
    "eco": "C07",
    "fen": "rnbqkbnr/pp3ppp/4p3/8/2Bp4/5N2/PPPN1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5 5. Ngf3 cxd4 6. Bc4 Qd8"
  },
  {
    "name": "French Defense: Tarrasch, Open, 4. exd5 exd5",
    "eco": "C08",
    "fen": "rnbqkbnr/pp3ppp/8/2pp4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5"
  },
  {
    "name": "French Defense: Two Knights Variation",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. Nf3 d5 3. Nc3"
  },
  {
    "name": "French Defense: Winawer Variation",
    "eco": "C15",
    "fen": "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation",
    "eco": "C16",
    "fen": "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, 3. Nc3 Bb4 4. e5 c5",
    "eco": "C17",
    "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, 4. e5 c5 5. a3",
    "eco": "C17",
    "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, 5. a3 Bxc3+ 6. bxc3",
    "eco": "C18",
    "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, 5. a3 Bxc3+ 6. bxc3 Ne7",
    "eco": "C18",
    "fen": "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, 6. bxc3 Ne7 7. a4",
    "eco": "C19",
    "fen": "rnbqk2r/pp2nppp/4p3/2ppP3/P2P4/2P5/2P2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. a4"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, 6. axb4 dxc3 7. Nf3",
    "eco": "C17",
    "fen": "rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p2N2/1PP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 cxd4 6. axb4 dxc3 7. Nf3"
  },
  {
    "name": "French Defense: Winawer Variation, Advance Variation, Moscow Variation",
    "eco": "C17",
    "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P2Q1/2N5/PPP2PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. Qg4"
  },
  {
    "name": "French Defense: Winawer Variation, Alekhine Gambit Accepted",
    "eco": "C15",
    "fen": "rnbqk1nr/ppp2ppp/4p3/8/3Pp3/P1b5/1PP1NPPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 dxe4 5. a3 Bxc3+"
  },
  {
    "name": "French Defense: Winawer Variation, Alekhine Gambit, Kan Variation",
    "eco": "C15",
    "fen": "r1bqk1nr/ppp2ppp/2n1p3/8/3Pp3/P1N5/1PP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 dxe4 5. a3 Bxc3+ 6. Nxc3 Nc6"
  },
  {
    "name": "French Defense: Winawer Variation, Alekhine-Maroczy Gambit",
    "eco": "C15",
    "fen": "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP1NPPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2"
  },
  {
    "name": "French Defense: Winawer Variation, Bogoljubov Variation",
    "eco": "C17",
    "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPPB1PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. Bd2"
  },
  {
    "name": "French Defense: Winawer Variation, Bogoljubov Variation, Icelandic Defense",
    "eco": "C17",
    "fen": "rnbqk2r/pp2nppp/4p3/2ppP3/1b1P1P2/2N5/PPPB2PP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. Bd2 Ne7 6. f4"
  },
  {
    "name": "French Defense: Winawer Variation, Classical Variation",
    "eco": "C18",
    "fen": "rnb1k1nr/ppq2ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Qc7"
  },
  {
    "name": "French Defense: Winawer Variation, Delayed Exchange Variation",
    "eco": "C01",
    "fen": "rnbqk1nr/ppp2ppp/4p3/3P4/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. exd5"
  },
  {
    "name": "French Defense: Winawer Variation, Exchange Variation, Canal Attack",
    "eco": "C01",
    "fen": "rnbqk2r/ppp1nppp/8/3p3Q/1b1P4/2NB4/PPP2PPP/R1B1K1NR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. exd5 exd5 5. Bd3 Ne7 6. Qh5"
  },
  {
    "name": "French Defense: Winawer Variation, Fingerslip Variation",
    "eco": "C15",
    "fen": "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPPB1PPP/R2QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2"
  },
  {
    "name": "French Defense: Winawer Variation, Fingerslip Variation, Kunin Double Gambit",
    "eco": "C15",
    "fen": "rnb1k1nr/ppp2ppp/4p3/8/1b1qp1Q1/2N5/PPPB1PPP/R3KBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2 dxe4 5. Qg4 Qxd4"
  },
  {
    "name": "French Defense: Winawer Variation, Fingerslip Variation, Main Line",
    "eco": "C15",
    "fen": "rnbqk1r1/ppp2p1p/4pn1Q/8/1b1Pp3/2N5/PPPB1PPP/R3KBNR b KQq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2 dxe4 5. Qg4 Nf6 6. Qxg7 Rg8 7. Qh6"
  },
  {
    "name": "French Defense: Winawer Variation, Fingerslip Variation, Schwarz's Line",
    "eco": "C15",
    "fen": "rnbqk2r/ppp1nppp/4p3/3p4/1b1PP3/8/PPPB1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2 Ne7 5. Nb1"
  },
  {
    "name": "French Defense: Winawer Variation, Kondratiyev Variation",
    "eco": "C15",
    "fen": "rnb1k1nr/pp3ppp/4p3/2pq4/1b1P4/2NB4/PPPB1PPP/R2QK1NR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd3 c5 5. exd5 Qxd5 6. Bd2"
  },
  {
    "name": "French Defense: Winawer Variation, Maroczy-Wallis Variation",
    "eco": "C18",
    "fen": "rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p5/1PP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 cxd4 6. axb4 dxc3"
  },
  {
    "name": "French Defense: Winawer Variation, Petrosian Variation",
    "eco": "C16",
    "fen": "rnb1k1nr/pppq1ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 Qd7"
  },
  {
    "name": "French Defense: Winawer Variation, Poisoned Pawn Variation",
    "eco": "C18",
    "fen": "rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4"
  },
  {
    "name": "French Defense: Winawer Variation, Poisoned Pawn Variation, Main Line",
    "eco": "C18",
    "fen": "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P1NPPP/R1B1KB1R b KQq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 Qc7 8. Qxg7 Rg8 9. Qxh7 cxd4 10. Ne2"
  },
  {
    "name": "French Defense: Winawer Variation, Poisoned Pawn Variation, Paoli Variation",
    "eco": "C18",
    "fen": "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1BK1BNR b q",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 Qc7 8. Qxg7 Rg8 9. Qxh7 cxd4 10. Kd1"
  },
  {
    "name": "French Defense: Winawer Variation, Positional Variation",
    "eco": "C19",
    "fen": "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P2N2/2P2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Nf3"
  },
  {
    "name": "French Defense: Winawer Variation, Retreat Variation",
    "eco": "C18",
    "fen": "rnbqk1nr/pp3ppp/4p3/b1ppP3/3P4/P1N5/1PP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Ba5"
  },
  {
    "name": "French Defense: Winawer Variation, Retreat Variation, Armenian Line",
    "eco": "C18",
    "fen": "rnbqk1nr/pp3ppp/4p3/b2pP3/1P1p4/P1N5/2P2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Ba5 6. b4 cxd4"
  },
  {
    "name": "French Defense: Winawer Variation, Winckelmann-Riemer Gambit",
    "eco": "C15",
    "fen": "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/P1N5/1PP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. a3"
  },
  {
    "name": "French Defense: Winawer, Alekhine Gambit, Alatortsev Variation",
    "eco": "C15",
    "fen": "r1bq1rk1/ppp1bppp/2n1pn2/8/3PN3/P5N1/1PP1BPPP/R1BQK2R w KQ",
    "moves": "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 dxe4 5. a3 Be7 6. Nxe4 Nf6 7. N2g3 O-O 8. Be2 Nc6"
  },
  {
    "name": "French Defense: Wing Gambit",
    "eco": "C00",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/1P6/5N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e6 2. Nf3 d5 3. e5 c5 4. b4"
  },
  {
    "name": "Fried Fox Defense",
    "eco": "B00",
    "fen": "rnbq1bnr/pppppkpp/5p2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQ",
    "moves": "1. e4 f6 2. d4 Kf7"
  },
  {
    "name": "Gedult's Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq",
    "moves": "1. f3"
  },
  {
    "name": "Giuoco Piano",
    "eco": "C50",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5"
  },
  {
    "name": "Global Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/P6P/1PPPPPP1/RNBQKBNR b KQkq",
    "moves": "1. h3 e5 2. a3"
  },
  {
    "name": "Goldsmith Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/ppppppp1/8/7p/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 h5"
  },
  {
    "name": "Goldsmith Defense: Picklepuss Defense",
    "eco": "B00",
    "fen": "rnbqkb1r/ppppppp1/5n2/7p/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 h5 2. d4 Nf6"
  },
  {
    "name": "Grob Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq",
    "moves": "1. g4"
  },
  {
    "name": "Grob Opening: Alessi Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/6P1/8/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g4 f5"
  },
  {
    "name": "Grob Opening: Double Grob",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/6P1/8/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g4 g5"
  },
  {
    "name": "Grob Opening: Double Grob, Coca-Cola Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/5PP1/8/PPPPP2P/RNBQKBNR b KQkq",
    "moves": "1. g4 g5 2. f4"
  },
  {
    "name": "Grob Opening: Grob Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 d5 2. Bg2"
  },
  {
    "name": "Grob Opening: Grob Gambit Declined",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/6P1/8/PPPPPPBP/RNBQK1NR w KQkq",
    "moves": "1. g4 d5 2. Bg2 c6"
  },
  {
    "name": "Grob Opening: Grob Gambit, Basman Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1ppp1/8/3p3P/8/8/PPPPPPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 d5 2. Bg2 h5 3. gxh5"
  },
  {
    "name": "Grob Opening: Grob Gambit, Fritz Gambit",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp1pppp/8/3p4/2P3b1/8/PP1PPPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 d5 2. Bg2 Bxg4 3. c4"
  },
  {
    "name": "Grob Opening: Grob Gambit, Fritz Gambit, Romford Countergambit",
    "eco": "A00",
    "fen": "q3kbnr/p1pnpppp/8/8/2Pp2b1/8/PP1PPP1P/RNBQK1NR w KQk",
    "moves": "1. g4 d5 2. Bg2 Bxg4 3. c4 d4 4. Bxb7 Nd7 5. Bxa8 Qxa8"
  },
  {
    "name": "Grob Opening: Grob Gambit, Keres Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/3p2P1/2P5/PP2PPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 d5 2. Bg2 e5 3. d4 exd4 4. c3"
  },
  {
    "name": "Grob Opening: Grob Gambit, Richter-Grob Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/2p3P1/1P6/P2PPPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 d5 2. Bg2 c6 3. c4 dxc4 4. b3"
  },
  {
    "name": "Grob Opening: Keene Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/pp3ppp/2p5/3pp3/6P1/7P/PPPPPPB1/RNBQK1NR w KQkq",
    "moves": "1. g4 d5 2. h3 e5 3. Bg2 c6"
  },
  {
    "name": "Grob Opening: Keene Defense, Main Line",
    "eco": "A00",
    "fen": "rnbqk2r/pp2nppp/2pb4/3p4/2PPp1P1/2N4P/PP2PPB1/R1BQK1NR w KQkq",
    "moves": "1. g4 d5 2. h3 e5 3. Bg2 c6 4. d4 e4 5. c4 Bd6 6. Nc3 Ne7"
  },
  {
    "name": "Grob Opening: London Defense",
    "eco": "A00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/6P1/7P/PPPPPP2/RNBQKBNR w KQkq",
    "moves": "1. g4 e5 2. h3 Nc6"
  },
  {
    "name": "Grob Opening: Romford Countergambit",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp1pppp/8/8/2Pp2b1/8/PP1PPPBP/RNBQK1NR w KQkq",
    "moves": "1. g4 d5 2. Bg2 Bxg4 3. c4 d4"
  },
  {
    "name": "Grob Opening: Spike Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p2P1/8/8/PPPPPPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 d5 2. Bg2 c6 3. g5"
  },
  {
    "name": "Grob Opening: Spike, Hurst Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR b KQkq",
    "moves": "1. g4 e5 2. Bg2 d5 3. c4"
  },
  {
    "name": "Grob Opening: Zilbermints Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/4p1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq",
    "moves": "1. g4 d5 2. e4 dxe4 3. Nc3"
  },
  {
    "name": "Grob Opening: Zilbermints Gambit, Schiller Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1ppp1/8/7p/4p1P1/2N5/PPPP1P1P/R1BQKBNR w KQkq",
    "moves": "1. g4 d5 2. e4 dxe4 3. Nc3 h5"
  },
  {
    "name": "Grob Opening: Zilbermints Gambit, Zilbermints-Hartlaub Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/4p1P1/2NP4/PPP2P1P/R1BQKBNR b KQkq",
    "moves": "1. g4 d5 2. e4 dxe4 3. Nc3 e5 4. d3"
  },
  {
    "name": "Gruenfeld Defense",
    "eco": "D80",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5"
  },
  {
    "name": "Gruenfeld Defense: Botvinnik Variation",
    "eco": "D95",
    "fen": "rnbq1rk1/ppp2pbp/4pnp1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Qb3 e6"
  },
  {
    "name": "Gruenfeld Defense: Brinckmann Attack",
    "eco": "D82",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4"
  },
  {
    "name": "Gruenfeld Defense: Brinckmann Attack, Gruenfeld Gambit",
    "eco": "D83",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/R2QKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O"
  },
  {
    "name": "Gruenfeld Defense: Brinckmann Attack, Gruenfeld Gambit Accepted",
    "eco": "D84",
    "fen": "rnb2rk1/ppB1ppbp/6p1/3q4/3P4/4P3/PP3PPP/R2QKBNR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. cxd5 Nxd5 7. Nxd5 Qxd5 8. Bxc7"
  },
  {
    "name": "Gruenfeld Defense: Brinckmann Attack, Gruenfeld Gambit, Botvinnik Variation",
    "eco": "D83",
    "fen": "rn1q1rk1/pp2ppbp/4bnp1/2Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR w K",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Rc1 c5 7. dxc5 Be6"
  },
  {
    "name": "Gruenfeld Defense: Brinckmann Attack, Gruenfeld Gambit, Capablanca Variation",
    "eco": "D83",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/2RQKBNR b K",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Rc1"
  },
  {
    "name": "Gruenfeld Defense: Brinckmann Attack, Reshevsky Gambit",
    "eco": "D83",
    "fen": "rnb2rk1/pp2ppbp/5np1/q1Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR w K",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. Rc1 O-O 6. e3 c5 7. dxc5 Qa5"
  },
  {
    "name": "Gruenfeld Defense: Counterthrust Variation",
    "eco": "E60",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 d5"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation",
    "eco": "D85",
    "fen": "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Classical Variation",
    "eco": "D86",
    "fen": "rnbqk2r/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Larsen Variation",
    "eco": "D86",
    "fen": "rnb2rk1/pppqppbp/6p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 Qd7"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Modern Exchange Variation",
    "eco": "D85",
    "fen": "rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P2N2/P4PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Modern Exchange Variation, Kramnik's Line",
    "eco": "D85",
    "fen": "rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N1P/P4PP1/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. Nc3 d5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 c5 8. h3"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Modern Exchange Variation, Pawn Grab Line",
    "eco": "D85",
    "fen": "r1bq1rk1/pp2pp1p/2n3p1/2pP4/4P3/2b2N2/P3BPPP/1RBQK2R w K",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Rb1 O-O 9. Be2 Nc6 10. d5 Bxc3+"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Nadanian Attack",
    "eco": "D85",
    "fen": "rnbqkb1r/ppp1pp1p/6p1/3n4/N2P4/8/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Na4"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Seville Variation",
    "eco": "D87",
    "fen": "r2q1rk1/pp2pBbp/6p1/n1p5/3PP1b1/2P1BP2/P3N1PP/R2Q1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 11. f3 Na5 12. Bxf7+"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Simagin's Improved Variation",
    "eco": "D86",
    "fen": "r1bq1rk1/ppp1ppbp/2n3p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 Nc6"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Sokolsky Variation",
    "eco": "D89",
    "fen": "r2q1rk1/pp2ppbp/4b1p1/n2P4/4P3/3BBP2/P3N1PP/R2Q1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Bg4 11. f3 Na5 12. Bd3 cxd4 13. cxd4 Be6 14. d5"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Spassky Variation",
    "eco": "D87",
    "fen": "rnbq1rk1/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Spassky Variation, 10. O-O cxd4 11. cxd4",
    "eco": "D88",
    "fen": "r1bq1rk1/pp2ppbp/2n3p1/8/2BPP3/4B3/P3NPPP/R2Q1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O cxd4 11. cxd4"
  },
  {
    "name": "Gruenfeld Defense: Exchange Variation, Spassky Variation, 12. Bd3 cxd4 13. cxd4 Be6",
    "eco": "D89",
    "fen": "r2q1rk1/pp2ppbp/4b1p1/n7/3PP3/3BBP2/P3N1PP/R2Q1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 11. f3 Na5 12. Bd3 cxd4 13. cxd4 Be6"
  },
  {
    "name": "Gruenfeld Defense: Exchange, Larsen Variation",
    "eco": "D86",
    "fen": "rnb2rk1/p1pqppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 Qd7 9. O-O b6"
  },
  {
    "name": "Gruenfeld Defense: Exchange, Simagin's Lesser Variation",
    "eco": "D86",
    "fen": "rnbq1rk1/p1p1ppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 b6"
  },
  {
    "name": "Gruenfeld Defense: Flohr Defense",
    "eco": "D94",
    "fen": "rn1q1rk1/pp2ppbp/2p2np1/3p1b2/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 g6 5. Nf3 Bg7 6. Bd3 O-O 7. O-O Bf5"
  },
  {
    "name": "Gruenfeld Defense: Flohr Variation",
    "eco": "D90",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/Q1PP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qa4+"
  },
  {
    "name": "Gruenfeld Defense: Gibbon Gambit",
    "eco": "D80",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP2P1/2N5/PP2PP1P/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. g4"
  },
  {
    "name": "Gruenfeld Defense: Lundin Variation",
    "eco": "D80",
    "fen": "rnbqkb1r/pp2pp1p/6p1/2p3B1/2PPp3/8/PP1QPPPP/R3KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Nxe4 dxe4 6. Qd2 c5"
  },
  {
    "name": "Gruenfeld Defense: Lutikov Variation",
    "eco": "D70",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. f3"
  },
  {
    "name": "Gruenfeld Defense: Lutikov Variation, Murrey Attack",
    "eco": "D70",
    "fen": "rnbqkb1r/pp2pp1p/6p1/2pn4/N2P4/5P2/PP2P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. f3 c5 5. cxd5 Nxd5 6. Na4"
  },
  {
    "name": "Gruenfeld Defense: Makogonov Variation",
    "eco": "D94",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/1PPP4/2N1PN2/P4PPP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. b4"
  },
  {
    "name": "Gruenfeld Defense: Opocensky Variation",
    "eco": "D94",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP1B1PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Bd2"
  },
  {
    "name": "Gruenfeld Defense: Pachman Variation",
    "eco": "D95",
    "fen": "r1bq1rk1/pppnppbp/5np1/6N1/2BP4/1QN1P3/PP3PPP/R1B1K2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. e3 Bg7 5. Qb3 dxc4 6. Bxc4 O-O 7. Nf3 Nbd7 8. Ng5"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation",
    "eco": "D96",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/1QN2N2/PP2PPPP/R1B1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Accelerated Variation",
    "eco": "D81",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Qb3"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Byrne (Simagin) Variation",
    "eco": "D97",
    "fen": "r1bq1rk1/ppp1ppbp/2n2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Nc6"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Hungarian Variation",
    "eco": "D97",
    "fen": "rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Levenfish Variation",
    "eco": "D97",
    "fen": "rnbq1rk1/p1p1ppbp/1p3np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 b6"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Prins Variation",
    "eco": "D97",
    "fen": "r1bq1rk1/ppp1ppbp/n4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Na6"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Smyslov Variation",
    "eco": "D98",
    "fen": "rn1q1rk1/ppp1ppbp/5np1/8/2QPP1b1/2N2N2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Smyslov Variation, 8. Be3 Nfd7 9. Qb3",
    "eco": "D99",
    "fen": "rn1q1rk1/pppnppbp/6p1/8/3PP1b1/1QN1BN2/PP3PPP/R3KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Qb3"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Szabo (Boleslavsky)",
    "eco": "D97",
    "fen": "rnbq1rk1/pp2ppbp/2p2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 c6"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, Yugoslav Variation",
    "eco": "D99",
    "fen": "rn1q1rk1/pp1nppbp/6p1/2p5/3PP1b1/1QN1BN2/PP3PPP/R3KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Qb3 c5"
  },
  {
    "name": "Gruenfeld Defense: Russian Variation, with e4",
    "eco": "D97",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4"
  },
  {
    "name": "Gruenfeld Defense: Russian, Keres Variation",
    "eco": "D98",
    "fen": "r2q1rk1/ppp1ppbp/1nn3p1/8/3PP1b1/2NQBN2/PP2BPPP/2KR3R b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Be2 Nb6 10. Qd3 Nc6 11. O-O-O"
  },
  {
    "name": "Gruenfeld Defense: Smyslov Defense",
    "eco": "D94",
    "fen": "rn1q1rk1/pp2ppbp/2p2np1/3p4/2PP2b1/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 g6 5. Nf3 Bg7 6. Bd3 O-O 7. O-O Bg4"
  },
  {
    "name": "Gruenfeld Defense: Stockholm Variation",
    "eco": "D80",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation",
    "eco": "D90",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, 3. Nc3 d5 4. Nf3 Bg7",
    "eco": "D90",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Burille Variation",
    "eco": "D94",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Burille Variation, Reversed Tarrasch",
    "eco": "D94",
    "fen": "r1bq1rk1/pp2ppbp/2n2np1/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 c5 3. e3 g6 4. Nc3 Bg7 5. Nf3 O-O 6. Be2 cxd4 7. exd4 d5 8. O-O Nc6"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Hungarian Attack",
    "eco": "D92",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bf4"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Hungarian Variation",
    "eco": "D93",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bf4 O-O 6. e3"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Paris Variation",
    "eco": "D94",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Bd3"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Petrosian System",
    "eco": "D91",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bg5"
  },
  {
    "name": "Gruenfeld Defense: Three Knights Variation, Vienna Variation",
    "eco": "D95",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Qb3"
  },
  {
    "name": "Gruenfeld Defense: Zaitsev Gambit",
    "eco": "D80",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP3P/2N5/PP2PPP1/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. h4"
  },
  {
    "name": "Guatemala Defense",
    "eco": "B00",
    "fen": "rn1qkbnr/p1pppppp/bp6/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 b6 2. d4 Ba6"
  },
  {
    "name": "Gunderam Defense",
    "eco": "C40",
    "fen": "rnb1kbnr/ppppqppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Qe7"
  },
  {
    "name": "Hippopotamus Defense",
    "eco": "B00",
    "fen": "rnbqkb1r/pppppppp/7n/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nh6"
  },
  {
    "name": "Hippopotamus Defense, 2. d4 g6 3. c4 f6",
    "eco": "B00",
    "fen": "rnbqkb1r/ppppp2p/5ppn/8/2PPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nh6 2. d4 g6 3. c4 f6"
  },
  {
    "name": "Horwitz Defense",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e6"
  },
  {
    "name": "Horwitz Defense: Dutch Defense, Bellon Gambit",
    "eco": "A84",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/2PPP3/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 e6 2. c4 f5 3. e4"
  },
  {
    "name": "Horwitz Defense: Zilbermints Gambit",
    "eco": "A40",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. c4 e6 2. d4 e5"
  },
  {
    "name": "Hungarian Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq",
    "moves": "1. g3"
  },
  {
    "name": "Hungarian Opening: Asten Gambit",
    "eco": "A00",
    "fen": "r1bqkbnr/ppp3pp/2n5/4Pp2/3pN3/6P1/PPP1PP1P/R1BQKBNR w KQkq",
    "moves": "1. g3 Nc6 2. Nc3 d5 3. d4 e5 4. dxe5 d4 5. Ne4 f5"
  },
  {
    "name": "Hungarian Opening: Buecker Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/1P6/6P1/P1PPPPBP/RNBQK1NR b KQkq",
    "moves": "1. g3 d5 2. Bg2 e5 3. b4"
  },
  {
    "name": "Hungarian Opening: Burk Gambit",
    "eco": "A00",
    "fen": "rnbqk1nr/ppp1bppp/8/3p4/4p2N/P2P2P1/1PP1PP1P/RNBQKB1R b KQkq",
    "moves": "1. g3 e5 2. a3 d5 3. Nf3 e4 4. Nh4 Be7 5. d3"
  },
  {
    "name": "Hungarian Opening: Catalan Formation",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq",
    "moves": "1. g3 d5 2. Bg2 e6"
  },
  {
    "name": "Hungarian Opening: Dutch Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/8/6P1/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g3 f5"
  },
  {
    "name": "Hungarian Opening: Indian Defense",
    "eco": "A00",
    "fen": "rnbqkb1r/pppppppp/5n2/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g3 Nf6"
  },
  {
    "name": "Hungarian Opening: Myers Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/8/6P1/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g3 g5"
  },
  {
    "name": "Hungarian Opening: Pachman Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp2p/6p1/7Q/4p3/6P1/PPPP1P1P/RNB1KBNR w KQkq",
    "moves": "1. g3 f5 2. e4 fxe4 3. Qh5+ g6"
  },
  {
    "name": "Hungarian Opening: Paris Gambit",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQ1RK1 b kq",
    "moves": "1. g3 e5 2. Nh3 d5 3. f4 Bxh3 4. Bxh3 exf4 5. O-O"
  },
  {
    "name": "Hungarian Opening: Reversed Alekhine",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq",
    "moves": "1. g3 e5 2. Nf3"
  },
  {
    "name": "Hungarian Opening: Reversed Brooklyn Defense, Brooklyn Benko Gambit",
    "eco": "A00",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/1P2p3/6P1/P1PPPP1P/RNBQKBNR b KQkq",
    "moves": "1. g3 e5 2. Nf3 e4 3. Ng1 Nf6 4. b4"
  },
  {
    "name": "Hungarian Opening: Reversed Modern Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq",
    "moves": "1. g3 d5 2. Bg2 c5"
  },
  {
    "name": "Hungarian Opening: Reversed Norwegian Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4p2N/6P1/PPPPPP1P/RNBQKB1R b KQkq",
    "moves": "1. g3 e5 2. Nf3 e4 3. Nh4"
  },
  {
    "name": "Hungarian Opening: Sicilian Invitation",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/8/6P1/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g3 c5"
  },
  {
    "name": "Hungarian Opening: Slav Formation",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq",
    "moves": "1. g3 d5 2. Bg2 c6"
  },
  {
    "name": "Hungarian Opening: Symmetrical Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g3 g6"
  },
  {
    "name": "Hungarian Opening: Van Kuijk Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppppp1/8/8/7p/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. g3 h5 2. Nf3 h4"
  },
  {
    "name": "Hungarian Opening: Wiedenhagen-Beta Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pp1p/8/3p2p1/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. g3 d5 2. Nf3 g5"
  },
  {
    "name": "Hungarian Opening: Winterberg Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/2p5/1P4P1/P2PPPBP/RNBQK1NR b KQkq",
    "moves": "1. g3 d5 2. Bg2 e5 3. c4 dxc4 4. b3"
  },
  {
    "name": "Indian Game",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6"
  },
  {
    "name": "Indian Game: 3. Qb3",
    "eco": "E10",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Qb3"
  },
  {
    "name": "Indian Game: Anti-Gruenfeld, Adorjan Gambit",
    "eco": "E60",
    "fen": "rnbqkb1r/p1pppp1p/5np1/1p1P4/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. d5 b5"
  },
  {
    "name": "Indian Game: Anti-Gruenfeld, Advance Variation",
    "eco": "E60",
    "fen": "rnbqkb1r/pppppp1p/5np1/3P4/2P5/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. d5"
  },
  {
    "name": "Indian Game: Anti-Gruenfeld, Alekhine Variation",
    "eco": "D70",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/5P2/PP2P1PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. f3"
  },
  {
    "name": "Indian Game: Anti-Gruenfeld, Alekhine Variation, Leko Gambit",
    "eco": "D70",
    "fen": "rnbqkb1r/pppp1p1p/5np1/4p3/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. f3 e5"
  },
  {
    "name": "Indian Game: Anti-Nimzo-Indian",
    "eco": "E10",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3"
  },
  {
    "name": "Indian Game: Budapest Defense",
    "eco": "A51",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e5"
  },
  {
    "name": "Indian Game: Colle System, King's Indian Variation",
    "eco": "A48",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e3 d6 2. d4 g6 3. Nf3 Bg7 4. Bd3 Nf6"
  },
  {
    "name": "Indian Game: Czech-Indian",
    "eco": "A46",
    "fen": "rnbqkb1r/pp1ppppp/2p2n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c6"
  },
  {
    "name": "Indian Game: Devin Gambit",
    "eco": "E00",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. g4"
  },
  {
    "name": "Indian Game: Doery Indian",
    "eco": "E10",
    "fen": "rnbqkb1r/pppp1ppp/4p3/8/2PPn3/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Ne4"
  },
  {
    "name": "Indian Game: Dzindzi-Indian Defense",
    "eco": "E10",
    "fen": "rnbqkb1r/1ppp1ppp/p3pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 a6"
  },
  {
    "name": "Indian Game: East Indian Defense",
    "eco": "E00",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6"
  },
  {
    "name": "Indian Game: Gedult Attack, Gedult Attack",
    "eco": "A45",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P2P1/5P2/PPP1P2P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. f3 d5 3. g4"
  },
  {
    "name": "Indian Game: Gibbins-Wiedenhagen Gambit Accepted",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/8/8/3P2n1/8/PPP1PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. g4 Nxg4"
  },
  {
    "name": "Indian Game: Gibbins-Wiedenhagen Gambit, Maltese Falcon",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3PP3/5P2/PPP4P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. g4 Nxg4 3. f3 Nf6 4. e4"
  },
  {
    "name": "Indian Game: Gibbins-Wiedenhagen Gambit, Oshima Defense",
    "eco": "A45",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. g4 e5"
  },
  {
    "name": "Indian Game: Gibbins-Wiedenhagen Gambit, Stummer Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP1BP1P/R1BQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. g4 Nxg4 3. e4 d6 4. Be2 Nf6 5. Nc3"
  },
  {
    "name": "Indian Game: King's Indian Variation, Fianchetto Variation",
    "eco": "A49",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2"
  },
  {
    "name": "Indian Game: Knights Variation, Alburt-Miles Variation",
    "eco": "A46",
    "fen": "rnbqkb1r/1ppppppp/p4n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 a6"
  },
  {
    "name": "Indian Game: Lazard Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPPNPPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nd2 e5"
  },
  {
    "name": "Indian Game: London System",
    "eco": "A46",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Bf4"
  },
  {
    "name": "Indian Game: Maddigan Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 e5"
  },
  {
    "name": "Indian Game: Medusa Gambit",
    "eco": "A50",
    "fen": "rnbqkb1r/pppppp1p/5n2/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g5"
  },
  {
    "name": "Indian Game: Normal Variation",
    "eco": "A50",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4"
  },
  {
    "name": "Indian Game: Omega Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. e4"
  },
  {
    "name": "Indian Game: Omega Gambit, Arafat Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/6B1/3P4/3B4/PPP2PPP/RN1QK1NR b KQkq",
    "moves": "1. d4 Nf6 2. e4 Nxe4 3. Bd3 Nf6 4. Bg5"
  },
  {
    "name": "Indian Game: Paleface Attack, Blackmar-Diemer Gambit Deferred",
    "eco": "A45",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. f3 d5 3. e4"
  },
  {
    "name": "Indian Game: Pawn Push Variation",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/3P4/8/8/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. d5"
  },
  {
    "name": "Indian Game: Polish Variation",
    "eco": "A46",
    "fen": "rnbqkb1r/p1pppppp/5n2/1p6/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 b5"
  },
  {
    "name": "Indian Game: Przepiorka Variation",
    "eco": "A49",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. g3"
  },
  {
    "name": "Indian Game: Pseudo-Benko",
    "eco": "A46",
    "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/8/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c5 3. d5 b5"
  },
  {
    "name": "Indian Game: Pyrenees Gambit",
    "eco": "A50",
    "fen": "rnbqkb1r/p1pppppp/5n2/1p6/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 b5"
  },
  {
    "name": "Indian Game: Reversed Chigorin Defense",
    "eco": "A45",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 c5"
  },
  {
    "name": "Indian Game: Schnepper Gambit",
    "eco": "A47",
    "fen": "rnbqkb1r/p1pp1ppp/1p3n2/4p3/3P4/2P2N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 b6 3. c3 e5"
  },
  {
    "name": "Indian Game: Seirawan Attack",
    "eco": "E00",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/6B1/2PP4/8/PP2PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Bg5"
  },
  {
    "name": "Indian Game: Spielmann-Indian",
    "eco": "A46",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c5"
  },
  {
    "name": "Indian Game: Tartakower Attack",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. g3"
  },
  {
    "name": "Indian Game: Wade-Tartakower Defense",
    "eco": "A46",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 d6"
  },
  {
    "name": "Indian Game: West Indian Defense",
    "eco": "E61",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6"
  },
  {
    "name": "Irish Gambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nxe5"
  },
  {
    "name": "Italian Game",
    "eco": "C50",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4"
  },
  {
    "name": "Italian Game: Anti-Fried Liver Defense",
    "eco": "C55",
    "fen": "r1bqkbnr/pppp1pp1/2n4p/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 h6"
  },
  {
    "name": "Italian Game: Bird's Attack",
    "eco": "C53",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. b4"
  },
  {
    "name": "Italian Game: Classical Variation",
    "eco": "C53",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3"
  },
  {
    "name": "Italian Game: Classical Variation, 3. Bc4 Bc5 4. c3 Nf6",
    "eco": "C53",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6"
  },
  {
    "name": "Italian Game: Classical Variation, Albin Gambit",
    "eco": "C53",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. c3"
  },
  {
    "name": "Italian Game: Classical Variation, Alexandre Gambit",
    "eco": "C53",
    "fen": "r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 f5"
  },
  {
    "name": "Italian Game: Classical Variation, Center Attack",
    "eco": "C53",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4"
  },
  {
    "name": "Italian Game: Classical Variation, Center Holding Variation",
    "eco": "C53",
    "fen": "r1b1k1nr/ppppqppp/1bn5/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6"
  },
  {
    "name": "Italian Game: Classical Variation, Closed Variation",
    "eco": "C53",
    "fen": "r1b1k1nr/ppppqppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7"
  },
  {
    "name": "Italian Game: Classical Variation, Giuoco Pianissimo",
    "eco": "C53",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3"
  },
  {
    "name": "Italian Game: Classical Variation, Giuoco Pianissimo, Main Line",
    "eco": "C53",
    "fen": "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O 7. Re1 a6 8. Bb3 Ba7 9. h3"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit",
    "eco": "C53",
    "fen": "r1bqk2r/ppp2ppp/2n2n2/2bpP3/2Bp4/2P2N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. c3 Nf6 6. e5 d5"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit, Anderssen Variation",
    "eco": "C54",
    "fen": "r1bqk2r/ppp2ppp/2n5/1B1pP3/1b1Pn3/5N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb4+"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit, Greco Variation",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit, Main Line",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit, Moeller-Bayonet Attack",
    "eco": "C54",
    "fen": "r1bqk2r/ppp1nppp/3p1b2/3P4/2B1R1P1/5N2/PP3P1P/R1BQ2K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. g4"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit, Moeller-Therkatz Attack",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n5/3P4/2B1n3/2b2N2/PP3PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5"
  },
  {
    "name": "Italian Game: Classical Variation, Greco Gambit, Traditional Line",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4"
  },
  {
    "name": "Italian Game: Classical Variation, La Bourdonnais Variation",
    "eco": "C53",
    "fen": "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 d6 5. d4 exd4 6. cxd4 Bb6"
  },
  {
    "name": "Italian Game: Classical Variation, Tarrasch Variation",
    "eco": "C53",
    "fen": "r1b1k2r/1pp1qppp/pbnp1n2/4p3/P1BPP3/2P2N1P/1P3PP1/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. O-O d6 7. a4 a6 8. h3 Nf6 9. Re1"
  },
  {
    "name": "Italian Game: Deutz Gambit",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d4"
  },
  {
    "name": "Italian Game: Evans Gambit",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4"
  },
  {
    "name": "Italian Game: Evans Gambit, 5. c3 Ba5 6. O-O d6",
    "eco": "C52",
    "fen": "r1bqk1nr/ppp2ppp/2np4/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6"
  },
  {
    "name": "Italian Game: Evans Gambit, 8. cxd4 Bb6 9. Nc3 Bg4",
    "eco": "C51",
    "fen": "r2qk1nr/ppp2ppp/1bnp4/8/2BPP1b1/2N2N2/P4PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4"
  },
  {
    "name": "Italian Game: Evans Gambit Accepted",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4"
  },
  {
    "name": "Italian Game: Evans Gambit Declined",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, 5. a4",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/1bn5/4p3/PPB1P3/5N2/2PP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Cordel Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/PBPP1PPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. Bb2"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Hicken Variation",
    "eco": "C51",
    "fen": "r1bk2nr/pppp1Qpp/1b6/nP2q3/2B1P3/8/PBPP1PPP/RN2K2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Qg5 7. Qf3 Qxe5 8. Qxf7+ Kd8 9. Bb2"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Hirschbach Variation",
    "eco": "C51",
    "fen": "r1b1k1nr/pppp1ppp/1b6/nP2N1q1/2B1P3/8/P1PP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Qg5"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Lange Variation",
    "eco": "C51",
    "fen": "r1bqk2r/pppp1ppp/1b5n/nP2N3/2B1P3/8/P1PP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Nh6"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Pavlov Variation",
    "eco": "C51",
    "fen": "r1b3r1/ppp2k1p/1b6/nP2B1q1/3PP3/8/P1PN1PPP/R2QK2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Nh6 7. d4 d6 8. Bxh6 dxe5 9. Bxg7 Rg8 10. Bxf7+ Kxf7 11. Bxe5 Qg5 12. Nd2"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Showalter Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/1ppp1ppp/pbn5/4p3/PPB1P3/2N2N2/2PP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a6 6. Nc3"
  },
  {
    "name": "Italian Game: Evans Gambit Declined, Vasquez Variation",
    "eco": "C51",
    "fen": "r1b3nr/ppppkBpp/1b6/nP2N1qQ/4P3/8/P1PP1PPP/RNB1K2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Qg5 7. Bxf7+ Ke7 8. Qh5"
  },
  {
    "name": "Italian Game: Evans Gambit, Alapin-Steinitz Variation",
    "eco": "C52",
    "fen": "r2qk1nr/ppp2ppp/2np4/b3p3/2BPP1b1/2P2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6 7. d4 Bg4"
  },
  {
    "name": "Italian Game: Evans Gambit, Anderssen Defense",
    "eco": "C52",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O Nf6 7. d4 exd4"
  },
  {
    "name": "Italian Game: Evans Gambit, Anderssen Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7"
  },
  {
    "name": "Italian Game: Evans Gambit, Anderssen Variation, Cordel Line",
    "eco": "C51",
    "fen": "r1bqk1nr/ppppbppp/8/n3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 Na5"
  },
  {
    "name": "Italian Game: Evans Gambit, Bronstein Defense",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6"
  },
  {
    "name": "Italian Game: Evans Gambit, Compromised Defense",
    "eco": "C52",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2p2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3"
  },
  {
    "name": "Italian Game: Evans Gambit, Compromised Defense, Main Line",
    "eco": "C52",
    "fen": "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/BQN2N2/P4PPP/R4RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3"
  },
  {
    "name": "Italian Game: Evans Gambit, Compromised Defense, Potter Variation",
    "eco": "C52",
    "fen": "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1BR2K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Rd1"
  },
  {
    "name": "Italian Game: Evans Gambit, Dufresne Defense",
    "eco": "C52",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2Pp1N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d3"
  },
  {
    "name": "Italian Game: Evans Gambit, Fontaine Countergambit",
    "eco": "C51",
    "fen": "r1bqk1nr/p1pp1ppp/2n5/1pb1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 b5"
  },
  {
    "name": "Italian Game: Evans Gambit, Fraser Attack",
    "eco": "C51",
    "fen": "r2qk1nr/ppp2ppp/1bnp4/8/Q1BPP1b1/2N2N2/P4PPP/R1B2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Qa4"
  },
  {
    "name": "Italian Game: Evans Gambit, Fraser-Mortimer Attack",
    "eco": "C51",
    "fen": "r2q1knr/pppb1Bpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Qa4 Bd7 11. Qb3 Na5 12. Bxf7+ Kf8 13. Qc2"
  },
  {
    "name": "Italian Game: Evans Gambit, Goering Attack",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp2ppp/1b1p4/n5B1/2BPP3/2N2N2/P4PPP/R2Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Na5 10. Bg5"
  },
  {
    "name": "Italian Game: Evans Gambit, Harding Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/1bBPP3/5N2/P2B1PPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. cxd4 Bb4+ 8. Bd2"
  },
  {
    "name": "Italian Game: Evans Gambit, Hein Countergambit",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp2ppp/2n5/2bpp3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 d5"
  },
  {
    "name": "Italian Game: Evans Gambit, Johner Defense",
    "eco": "C51",
    "fen": "r1bqk1nr/p1pp1ppp/2n5/bp6/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O b5"
  },
  {
    "name": "Italian Game: Evans Gambit, Laroche Variation",
    "eco": "C52",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 Nf6"
  },
  {
    "name": "Italian Game: Evans Gambit, Lasker Defense",
    "eco": "C52",
    "fen": "r1bqk1nr/ppp2ppp/1bnp4/4p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6 7. d4 Bb6"
  },
  {
    "name": "Italian Game: Evans Gambit, Leonhardt Countergambit",
    "eco": "C52",
    "fen": "r1bqk1nr/p1pp1ppp/2n5/bp2p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 b5"
  },
  {
    "name": "Italian Game: Evans Gambit, Levenfish Variation",
    "eco": "C52",
    "fen": "r1b1k1nr/pppq1ppp/1b6/n3N3/2B1P3/BQP5/P4PPP/RN3RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qb3 Qd7 8. dxe5 dxe5 9. O-O Bb6 10. Ba3 Na5 11. Nxe5"
  },
  {
    "name": "Italian Game: Evans Gambit, Main Line",
    "eco": "C52",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5"
  },
  {
    "name": "Italian Game: Evans Gambit, Mayet Defense",
    "eco": "C51",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bf8"
  },
  {
    "name": "Italian Game: Evans Gambit, McDonnell Defense",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5"
  },
  {
    "name": "Italian Game: Evans Gambit, McDonnell Defense, Main Line",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6"
  },
  {
    "name": "Italian Game: Evans Gambit, Mieses Defense",
    "eco": "C52",
    "fen": "r1bqk2r/ppppnppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Nge7"
  },
  {
    "name": "Italian Game: Evans Gambit, Morphy Attack",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/2N2N2/P4PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3"
  },
  {
    "name": "Italian Game: Evans Gambit, Mortimer-Evans Gambit",
    "eco": "C51",
    "fen": "r2q2nr/pppb1kpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Qa4 Bd7 11. Qb3 Na5 12. Bxf7+ Kf8 13. Qc2 Kxf7"
  },
  {
    "name": "Italian Game: Evans Gambit, Paulsen Variation",
    "eco": "C51",
    "fen": "r1bqk2r/ppp1nppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. d5 Na5 10. Bb2 Ne7"
  },
  {
    "name": "Italian Game: Evans Gambit, Pierce Defense",
    "eco": "C52",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4"
  },
  {
    "name": "Italian Game: Evans Gambit, Richardson Attack",
    "eco": "C52",
    "fen": "r1bq1rk1/pppp1ppp/2n2n2/b3N3/2BPP3/2P5/P4PPP/RNBQ1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O Nf6 7. d4 O-O 8. Nxe5"
  },
  {
    "name": "Italian Game: Evans Gambit, Sanders-Alapin Variation",
    "eco": "C52",
    "fen": "r2qk1nr/pppb1ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6 7. d4 Bd7"
  },
  {
    "name": "Italian Game: Evans Gambit, Slow Variation",
    "eco": "C52",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O"
  },
  {
    "name": "Italian Game: Evans Gambit, Sokolsky Variation",
    "eco": "C52",
    "fen": "r1bqk1nr/ppp2ppp/2np4/b3p1B1/2BPP3/2P2N2/P4PPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Bg5"
  },
  {
    "name": "Italian Game: Evans Gambit, Steinitz Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp3pp/1b1p1p2/n7/2BPP3/2N1BN2/P4PPP/R2Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Na5 10. Bg5 f6 11. Be3"
  },
  {
    "name": "Italian Game: Evans Gambit, Stone-Ware Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1ppp/2nb4/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bd6"
  },
  {
    "name": "Italian Game: Evans Gambit, Tartakower Attack",
    "eco": "C52",
    "fen": "r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/1QP2N2/P4PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qb3"
  },
  {
    "name": "Italian Game: Evans Gambit, Ulvestad Variation",
    "eco": "C51",
    "fen": "r1bqk1nr/ppp2ppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. d5 Na5 10. Bb2"
  },
  {
    "name": "Italian Game: Evans Gambit, Waller Attack",
    "eco": "C52",
    "fen": "r1bqk1nr/ppp2ppp/2np4/b7/2BpP3/1QP2N2/P4PPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d6 8. Qb3"
  },
  {
    "name": "Italian Game: Giuoco Pianissimo",
    "eco": "C50",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3"
  },
  {
    "name": "Italian Game: Giuoco Pianissimo, Canal Variation",
    "eco": "C50",
    "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5"
  },
  {
    "name": "Italian Game: Giuoco Pianissimo, Dubois Variation",
    "eco": "C50",
    "fen": "r1bqk1nr/pppp2pp/2n5/2b1p1N1/2B1Pp2/3P4/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Ng5 f4"
  },
  {
    "name": "Italian Game: Giuoco Pianissimo, Italian Four Knights Variation",
    "eco": "C50",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3"
  },
  {
    "name": "Italian Game: Giuoco Pianissimo, Lucchini Gambit",
    "eco": "C50",
    "fen": "r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5"
  },
  {
    "name": "Italian Game: Giuoco Pianissimo, Normal",
    "eco": "C50",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5"
  },
  {
    "name": "Italian Game: Giuoco Piano",
    "eco": "C55",
    "fen": "r1bqk2r/ppp2ppp/3p1n2/4p1B1/2BnP3/8/PPP2PPP/RN1Q1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. d4 Bxd4 6. Nxd4 Nxd4 7. Bg5 d6"
  },
  {
    "name": "Italian Game: Giuoco Piano, Aitken Variation",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n5/8/2BP4/B1b2N2/P4PPP/R2Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3 9. bxc3 Bxc3 10. Ba3"
  },
  {
    "name": "Italian Game: Giuoco Piano, Bernstein Variation",
    "eco": "C54",
    "fen": "r1bqk2r/ppp2ppp/2n5/3p4/2BP4/1Qb2N2/P4PPP/R1B2RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3 9. bxc3 Bxc3 10. Qb3 d5"
  },
  {
    "name": "Italian Game: Giuoco Piano, Cracow Variation",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQ1K1R b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Kf1"
  },
  {
    "name": "Italian Game: Giuoco Piano, Eisinger Variation",
    "eco": "C53",
    "fen": "rnb1k1nr/ppppqppp/1b1P4/4p3/2B1P3/2P2N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. d5 Nb8 7. d6"
  },
  {
    "name": "Italian Game: Giuoco Piano, Ghulam-Kassim Variation",
    "eco": "C53",
    "fen": "r1bqk2r/pppp1ppp/2n5/2bBP3/8/2p2NK1/PP4PP/RNBQ3R b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 Ne4 7. Bd5 Nxf2 8. Kxf2 dxc3+ 9. Kg3"
  },
  {
    "name": "Italian Game: Giuoco Piano, Greco's Attack",
    "eco": "C54",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/2N2N2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3"
  },
  {
    "name": "Italian Game: Giuoco Piano, Holzhausen Attack",
    "eco": "C55",
    "fen": "r1b1k2r/ppp1qppp/5n2/4p1B1/2BnP3/2N5/PPP3PP/R2Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. d4 Bxd4 6. Nxd4 Nxd4 7. Bg5 d6 8. f4 Qe7 9. fxe5 dxe5 10. Nc3"
  },
  {
    "name": "Italian Game: Giuoco Piano, Krause Variation",
    "eco": "C54",
    "fen": "r1bq3r/ppp3pp/5k2/3pN3/1n1Pn3/1Q3P2/PP4PP/RN2K2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4 8. Bxb4 Nxb4 9. Bxf7+ Kxf7 10. Qb3+ d5 11. Ne5+ Kf6 12. f3"
  },
  {
    "name": "Italian Game: Giuoco Piano, Mestel Variation",
    "eco": "C53",
    "fen": "r1b1k1nr/ppppqppp/1bn5/4p1B1/2BPP3/2P2N2/PP3PPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. Bg5"
  },
  {
    "name": "Italian Game: Giuoco Piano, Rosentreter Variation",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1p2/5n1p/4p1p1/2BnPP1B/8/PPP3PP/RN1Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. d4 Bxd4 6. Nxd4 Nxd4 7. Bg5 h6 8. Bh4 g5 9. f4"
  },
  {
    "name": "Italian Game: Giuoco Piano, Steinitz Variation",
    "eco": "C54",
    "fen": "r1bqk2r/ppp2ppp/2n5/3p4/2BPn3/B1P2N2/P4PPP/R2Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. bxc3 d5 10. Ba3"
  },
  {
    "name": "Italian Game: Giuoco Piano, Therkatz-Herzog Variation",
    "eco": "C54",
    "fen": "r1bq1rk1/ppp1nppN/3p4/3P4/2B1R3/8/PP3PPP/R2Q2K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 O-O 14. Nxh7"
  },
  {
    "name": "Italian Game: Hungarian Defense",
    "eco": "C50",
    "fen": "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7"
  },
  {
    "name": "Italian Game: Hungarian Defense, Tartakower Variation",
    "eco": "C50",
    "fen": "r1bqk2r/ppppbppp/2n5/4P3/2Bpn3/2P2N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4 5. c3 Nf6 6. e5 Ne4"
  },
  {
    "name": "Italian Game: Jerome Gambit",
    "eco": "C51",
    "fen": "r1bqk1nr/pppp1Bpp/2n5/2b1p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Bxf7+"
  },
  {
    "name": "Italian Game: Rosentreter Gambit",
    "eco": "C50",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d4"
  },
  {
    "name": "Italian Game: Rousseau Gambit",
    "eco": "C50",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 f5"
  },
  {
    "name": "Italian Game: Schilling-Kostic Gambit",
    "eco": "C50",
    "fen": "r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4"
  },
  {
    "name": "Italian Game: Scotch Gambit",
    "eco": "C55",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O"
  },
  {
    "name": "Italian Game: Scotch Gambit Declined",
    "eco": "C55",
    "fen": "r1bqkb1r/ppp2ppp/2np1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 d6"
  },
  {
    "name": "Italian Game: Scotch Gambit Declined, 3. Bc4 Nf6 4. d4 Bd6",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1ppp/2nb1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 Bd6"
  },
  {
    "name": "Italian Game: Scotch Gambit, Anderssen Attack",
    "eco": "C56",
    "fen": "r1b1kb1r/ppp2ppp/2n5/3q4/3pn3/2N2N2/PPP2PPP/R1BQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3"
  },
  {
    "name": "Italian Game: Scotch Gambit, Anderssen Attack, Main Line",
    "eco": "C56",
    "fen": "r3kb1r/ppp2ppp/2n1b3/3q2B1/3pN3/5N2/PPP2PPP/R2QR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3 Qa5 9. Nxe4 Be6 10. Bd2 Qd5 11. Bg5"
  },
  {
    "name": "Italian Game: Scotch Gambit, Canal Variation",
    "eco": "C56",
    "fen": "r1bqkb1r/ppp2ppp/2n5/3p4/2Bpn3/2N2N2/PPP2PPP/R1BQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Nxe4 6. Re1 d5 7. Nc3"
  },
  {
    "name": "Italian Game: Scotch Gambit, Double Gambit Accepted",
    "eco": "C56",
    "fen": "r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4"
  },
  {
    "name": "Italian Game: Scotch Gambit, Janowski Defense",
    "eco": "C55",
    "fen": "r1bqkb1r/ppp2ppp/2np1n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O d6"
  },
  {
    "name": "Italian Game: Scotch Gambit, Max Lange Attack",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5"
  },
  {
    "name": "Italian Game: Scotch Gambit, Max Lange Attack Accepted",
    "eco": "C56",
    "fen": "r2qk2r/ppp2pPp/2n1b3/2b5/2pp4/5N2/PPP2PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d4 exd4 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. fxg7"
  },
  {
    "name": "Italian Game: Scotch Gambit, Max Lange Attack, Long Variation",
    "eco": "C55",
    "fen": "r3k2r/ppp2ppp/2n1bP2/2b2qN1/2ppN3/8/PPP2PPP/R1BQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. Nce4"
  },
  {
    "name": "Italian Game: Scotch Gambit, Max Lange Attack, Spielmann Defense",
    "eco": "C56",
    "fen": "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5 6. e5 Ng4"
  },
  {
    "name": "Italian Game: Scotch Gambit, Nakhmanson Gambit",
    "eco": "C56",
    "fen": "r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/2N2N2/PPP2PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Nc3"
  },
  {
    "name": "Italian Game: Scotch Gambit, Walbrodt-Baird Gambit",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. O-O"
  },
  {
    "name": "Italian Game: Scotch Gambit, de Riviere Defense",
    "eco": "C55",
    "fen": "r1bqk2r/ppppbppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Be7"
  },
  {
    "name": "Italian Game: Two Knights Defense",
    "eco": "C55",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6"
  },
  {
    "name": "Italian Game: Two Knights Defense, 3. Bc4 Nf6 4. d4 Nxe4",
    "eco": "C55",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p3/2BPn3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 Nxe4"
  },
  {
    "name": "Italian Game: Two Knights Defense, 7. dxc6 bxc6 8. Be2",
    "eco": "C58",
    "fen": "r1bqkb1r/p4ppp/2p2n2/n3p1N1/8/8/PPPPBPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2"
  },
  {
    "name": "Italian Game: Two Knights Defense, Blackburne Variation",
    "eco": "C58",
    "fen": "r1bqkb1r/p4ppp/5n2/np2p1N1/8/5Q2/PPPP1PPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 cxb5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Colman Variation",
    "eco": "C58",
    "fen": "1rbqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R w KQk",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 Rb8"
  },
  {
    "name": "Italian Game: Two Knights Defense, Fegatello Attack, Leonhardt Variation",
    "eco": "C57",
    "fen": "r1bq1b1r/ppn3pp/2p1k3/3np3/2BPQ3/P1N5/1PP2PPP/R1B1K2R w KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4 9. Qe4 c6 10. a3 Na6 11. d4 Nc7"
  },
  {
    "name": "Italian Game: Two Knights Defense, Fried Liver Attack",
    "eco": "C57",
    "fen": "r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7"
  },
  {
    "name": "Italian Game: Two Knights Defense, Fritz Variation",
    "eco": "C57",
    "fen": "r1bqkb1r/ppp2ppp/5n2/3Pp1N1/2Bn4/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Fritz, Gruber Variation",
    "eco": "C57",
    "fen": "r1bqkb1r/p1p2ppp/8/1p1np3/3nN3/2P5/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4 6. c3 b5 7. Bf1 Nxd5 8. Ne4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Keidansky Variation",
    "eco": "C55",
    "fen": "r1b1k2r/ppp2ppp/2N5/1B1pP3/4n2q/8/PPP2bPP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 d5 6. Bb5 Ne4 7. Nxd4 Bc5 8. Nxc6 Bxf2+ 9. Kf1 Qh4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Kloss Gambit",
    "eco": "C57",
    "fen": "r1bqkb1r/ppp2ppp/5n2/3Pp1N1/1nB5/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nb4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Knight Attack",
    "eco": "C57",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Knight Attack, Normal Variation",
    "eco": "C57",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Knorre Variation",
    "eco": "C59",
    "fen": "r1b1k2r/p1q2pp1/2pb1n1p/n3N3/3Pp3/8/PPPBBPPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Bd6 11. d4 Qc7 12. Bd2"
  },
  {
    "name": "Italian Game: Two Knights Defense, Lolli Attack",
    "eco": "C57",
    "fen": "r1bqkb1r/ppp2ppp/2n5/3np1N1/2BP4/8/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. d4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Maroczy Variation",
    "eco": "C58",
    "fen": "r1bqk2r/ppp1bpp1/5n1p/3P4/2P1p3/5N2/PPP1QPPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. d3 h6 7. Nf3 e4 8. Qe2 Nxc4 9. dxc4 Be7"
  },
  {
    "name": "Italian Game: Two Knights Defense, Max Lange Attack",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1P3/2Bp4/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5 6. e5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Max Lange Attack, Berger Variation",
    "eco": "C55",
    "fen": "2kr3r/ppp2ppp/1bn1bPq1/6N1/2ppNPP1/8/PPP4P/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. g4 Qg6 12. Nce4 Bb6 13. f4 O-O-O"
  },
  {
    "name": "Italian Game: Two Knights Defense, Max Lange Attack, Krause Variation",
    "eco": "C55",
    "fen": "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/2P2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 Ng4 7. c3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Max Lange Attack, Loman Defense",
    "eco": "C55",
    "fen": "r2qk2r/ppp2p1p/2n1bPp1/2b3N1/2pp4/8/PPP2PPP/RNBQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. O-O Nf6 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 g6"
  },
  {
    "name": "Italian Game: Two Knights Defense, Max Lange Attack, Rubinstein Variation",
    "eco": "C55",
    "fen": "r3kb1r/ppp2ppp/2n1bP2/5qN1/2ppN3/8/PPP2PPP/R1BQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. Nce4 Bf8"
  },
  {
    "name": "Italian Game: Two Knights Defense, Modern Bishop's Opening",
    "eco": "C55",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Open Variation",
    "eco": "C55",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Paoli Variation",
    "eco": "C58",
    "fen": "r1b1kb1r/p1q2ppp/2p2n2/n3p1N1/8/3B1Q2/PPPP1PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 Qc7 9. Bd3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Perreux Variation",
    "eco": "C55",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/6N1/2BpP3/8/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. Ng5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Pincus Variation",
    "eco": "C57",
    "fen": "r1bqk2r/ppp2ppp/2n5/3np1N1/1bBP4/8/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. d4 Bb4+"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense",
    "eco": "C57",
    "fen": "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense, Bishop Check Line",
    "eco": "C58",
    "fen": "r1bqkb1r/ppp2ppp/5n2/nB1Pp1N1/8/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense, Bogoljubov Variation",
    "eco": "C58",
    "fen": "r1bqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense, Goering Variation",
    "eco": "C59",
    "fen": "r1b1kb1r/p1q2pp1/2p2n1p/n3N3/4p3/8/PPPPBPPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Qc7"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense, Kieseritzky Variation",
    "eco": "C58",
    "fen": "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/3P4/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. d3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense, Suhle Defense",
    "eco": "C59",
    "fen": "r1bqkb1r/p4pp1/2p2n1p/n3p1N1/8/8/PPPPBPPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6"
  },
  {
    "name": "Italian Game: Two Knights Defense, Polerio Defense, Yankovich Variation",
    "eco": "C58",
    "fen": "r1bqk2r/ppp2pp1/5n1p/2bP4/2P1p3/8/PPPNQPPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. d3 h6 7. Nf3 e4 8. Qe2 Nxc4 9. dxc4 Bc5 10. Nfd2"
  },
  {
    "name": "Italian Game: Two Knights Defense, Ponziani-Steinitz Gambit",
    "eco": "C57",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p1N1/2B1n3/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Nxe4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Steinitz Variation",
    "eco": "C59",
    "fen": "r1bqkb1r/p4pp1/2p2n1p/n3p3/8/7N/PPPPBPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nh3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Traxler Counterattack",
    "eco": "C57",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Traxler Counterattack, Bishop Sacrifice Line",
    "eco": "C57",
    "fen": "r1bqk2r/pppp1Bpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+"
  },
  {
    "name": "Italian Game: Two Knights Defense, Traxler Counterattack, King March Line",
    "eco": "C57",
    "fen": "r1bqk2r/pppp1Npp/2n5/4p3/2B1n3/4K3/PPPP2PP/RNBQ3R b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Nxf7 Bxf2+ 6. Kxf2 Nxe4+ 7. Ke3"
  },
  {
    "name": "Italian Game: Two Knights Defense, Traxler Counterattack, Knight Sacrifice Line",
    "eco": "C57",
    "fen": "r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Nxf7"
  },
  {
    "name": "Italian Game: Two Knights Defense, Traxler Variation, Trencianske-Teplice Gambit",
    "eco": "C57",
    "fen": "r1bq3r/ppppkBpp/2n2n2/2b1p1N1/3PP3/8/PPP2PPP/RNBQK2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. d4"
  },
  {
    "name": "Italian Game: Two Knights Defense, Ulvestad Variation",
    "eco": "C57",
    "fen": "r1bqkb1r/p1p2ppp/2n2n2/1p1Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5"
  },
  {
    "name": "Italian Game: Two Knights Defense, Ulvestad Variation, Kurkin Gambit",
    "eco": "C57",
    "fen": "r1bqkb1r/p1p2Np1/2n2n1p/1p1Pp3/8/8/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bf1 h6 7. Nxf7"
  },
  {
    "name": "Italian Game: Two Knights Defense, Yurdansky Attack",
    "eco": "C56",
    "fen": "r4b1r/ppp1kp2/2n1bN1p/q5p1/1P1p3B/5N2/P1P2PPP/R2QR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3 Qa5 9. Nxe4 Be6 10. Bg5 h6 11. Bh4 g5 12. Nf6+ Ke7 13. b4"
  },
  {
    "name": "Kadas Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq",
    "moves": "1. h4"
  },
  {
    "name": "Kadas Opening: Beginner's Trap",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/7P/7R/PPPPPPP1/RNBQKBN1 b Qkq",
    "moves": "1. h4 d5 2. Rh3"
  },
  {
    "name": "Kadas Opening: Kadas Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/1P5P/8/P1PPPPP1/RNBQKBNR b KQkq",
    "moves": "1. h4 c5 2. b4"
  },
  {
    "name": "Kadas Opening: Kadas Gambit, 2. d4 exd4 3. c3",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3p3P/2P5/PP2PPP1/RNBQKBNR b KQkq",
    "moves": "1. h4 e5 2. d4 exd4 3. c3"
  },
  {
    "name": "Kadas Opening: Kadas Gambit, 3. Nf3 cxd4 4. c3",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/3p3P/2P2N2/PP2PPP1/RNBQKB1R b KQkq",
    "moves": "1. h4 d5 2. d4 c5 3. Nf3 cxd4 4. c3"
  },
  {
    "name": "Kadas Opening: Myers Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/3PP2P/8/PPP2PP1/RNBQKBNR b KQkq",
    "moves": "1. h4 d5 2. d4 c5 3. e4"
  },
  {
    "name": "Kadas Opening: Schneider Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/7P/8/PPPPPPP1/RNBQKBNR w KQkq",
    "moves": "1. h4 g5"
  },
  {
    "name": "Kadas Opening: Steinbok Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp1pp/8/8/4p2P/3P4/PPP2PP1/RNBQKBNR b KQkq",
    "moves": "1. h4 f5 2. e4 fxe4 3. d3"
  },
  {
    "name": "Kangaroo Defense",
    "eco": "E00",
    "fen": "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e6 2. c4 Bb4+"
  },
  {
    "name": "Kangaroo Defense: Keres Defense, Transpositional Variation",
    "eco": "E00",
    "fen": "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 e6 2. c4 Bb4+ 3. Nc3"
  },
  {
    "name": "King's Gambit",
    "eco": "C30",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4"
  },
  {
    "name": "King's Gambit Accepted",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4"
  },
  {
    "name": "King's Gambit Accepted, Abbazia Defense",
    "eco": "C36",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3P4/5p2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Abbazia Defense, Main Line",
    "eco": "C36",
    "fen": "rnbqkb1r/p4ppp/2p5/3n4/2B2p2/5N2/PPPP2PP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Nf6 5. Bb5+ c6 6. dxc6 bxc6 7. Bc4 Nd5"
  },
  {
    "name": "King's Gambit Accepted, Allgaier Gambit",
    "eco": "C39",
    "fen": "rnbqkbnr/pppp1p1p/8/6N1/4PppP/8/PPPP2P1/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5"
  },
  {
    "name": "King's Gambit Accepted, Allgaier Gambit, Thorold Attack",
    "eco": "C39",
    "fen": "rnbq1bnr/pppp1k2/7p/8/3PPppP/8/PPP3P1/RNBQKB1R b KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. d4"
  },
  {
    "name": "King's Gambit Accepted, Allgaier Gambit, Urusov Attack",
    "eco": "C39",
    "fen": "rnbq1bnr/pppp1k2/7p/8/2B1PppP/8/PPPP2P1/RNBQK2R b KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Bc4+"
  },
  {
    "name": "King's Gambit Accepted, Australian Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/2B1PppP/5N2/PPPP2P1/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. h4"
  },
  {
    "name": "King's Gambit Accepted, Basman Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPQ1PP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Qe2"
  },
  {
    "name": "King's Gambit Accepted, Becker Defense",
    "eco": "C34",
    "fen": "rnbqkbnr/pppp1pp1/7p/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 h6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit (see: Jaenisch Variation)",
    "eco": "C33",
    "fen": "rnb1kbnr/pppp1ppp/5q2/8/2B1Pp2/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Qf6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Anderssen Defense",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 g5"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Bledow Countergambit",
    "eco": "C33",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3B4/4Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 d5 4. Bxd5 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Boden Variation",
    "eco": "C33",
    "fen": "r1b1kbnr/pppp1ppp/2n5/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Nc6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Bogoljubov Defense",
    "eco": "C33",
    "fen": "rnbqkb1r/pp1p1ppp/2p2n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Nf6 4. Nc3 c6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Bogoljubov Variation",
    "eco": "C33",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Nf6 4. Nc3"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Bryan Countergambit",
    "eco": "C33",
    "fen": "rnb1kbnr/p1pp1ppp/8/1p6/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Cozio Defense",
    "eco": "C33",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Cozio Variation",
    "eco": "C33",
    "fen": "rnb1kbnr/ppp2ppp/3p4/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 d6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, First Jaenisch Variation",
    "eco": "C33",
    "fen": "rnb1kb1r/pppp1ppp/5n2/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Gianutio Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp2pp/8/5p2/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 f5"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Greco Variation",
    "eco": "C33",
    "fen": "rnb1k1nr/pppp1ppp/8/2b5/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Bc5"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Kieseritzky Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/p1pp1ppp/8/1p6/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 b5"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Lopez Defense",
    "eco": "C33",
    "fen": "rnbqkbnr/pp1p1ppp/2p5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 c6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Lopez Variation",
    "eco": "C33",
    "fen": "rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, Maurian Defense",
    "eco": "C33",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Nc6"
  },
  {
    "name": "King's Gambit Accepted, Bishop's Gambit, McDonnell Attack",
    "eco": "C33",
    "fen": "rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N3P1/PPP4P/R1BQ1KNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. d4 Ne7 7. g3"
  },
  {
    "name": "King's Gambit Accepted, Blachly Gambit",
    "eco": "C37",
    "fen": "r1bqkbnr/pppp1p1p/2n5/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Nc6 4. Bc4 g5"
  },
  {
    "name": "King's Gambit Accepted, Bonsch-Osmolovsky Variation",
    "eco": "C34",
    "fen": "rnbqkb1r/ppppnppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Ne7"
  },
  {
    "name": "King's Gambit Accepted, Breyer Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/5Q2/PPPP2PP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Qf3"
  },
  {
    "name": "King's Gambit Accepted, Carrera Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/7Q/4Pp2/8/PPPP2PP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Qh5"
  },
  {
    "name": "King's Gambit Accepted, Cunningham Defense",
    "eco": "C35",
    "fen": "rnbqk1nr/ppppbppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Be7"
  },
  {
    "name": "King's Gambit Accepted, Cunningham Defense, Bertin Gambit",
    "eco": "C35",
    "fen": "rnbqk1nr/pppp1ppp/8/8/2B1P2b/5N2/PPPP3p/RNBQ1R1K b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Be7 4. Bc4 Bh4+ 5. g3 fxg3 6. O-O gxh2+ 7. Kh1"
  },
  {
    "name": "King's Gambit Accepted, Cunningham Defense, McCormick Defense",
    "eco": "C35",
    "fen": "rnbqk2r/ppppbppp/5n2/8/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Be7 4. Bc4 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Dodo Variation",
    "eco": "C30",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4PpQ1/8/PPPP2PP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Qg4"
  },
  {
    "name": "King's Gambit Accepted, Double Muzio Gambit",
    "eco": "C37",
    "fen": "rnb1kbnr/pppp1B1p/8/4q3/5p2/5Q2/PPPP2PP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. e5 Qxe5 8. Bxf7+"
  },
  {
    "name": "King's Gambit Accepted, Double Muzio Gambit, Baldwin Gambit",
    "eco": "C37",
    "fen": "rnb1kbnr/pppp1p1p/8/3N4/2q1Pp2/5Q2/PPPP2PP/R1B2R1K b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. Nc3 Qd4+ 8. Kh1 Qxc4 9. Nd5"
  },
  {
    "name": "King's Gambit Accepted, Double Muzio Gambit, Bello Gambit",
    "eco": "C37",
    "fen": "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/2N2Q2/PPPP2PP/R1B2RK1 b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. Nc3"
  },
  {
    "name": "King's Gambit Accepted, Double Muzio Gambit, Paulsen Defense",
    "eco": "C37",
    "fen": "r1b1k2r/ppppnp1p/2n4b/4q3/2B2p2/2NP1Q2/PPPB2PP/4RRK1 b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. e5 Qxe5 8. d3 Bh6 9. Nc3 Ne7 10. Bd2 Nbc6 11. Rae1"
  },
  {
    "name": "King's Gambit Accepted, Double Muzio Gambit, Young Gambit",
    "eco": "C37",
    "fen": "rnb2bnr/pppp1k1p/5q2/8/4P3/2N1pQ2/PPP3PP/R4RK1 w -",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. Bxf7+ Kxf7 8. d4 Qxd4+ 9. Be3 Qf6 10. Nc3 fxe3"
  },
  {
    "name": "King's Gambit Accepted, Eisenberg Variation",
    "eco": "C30",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/7N/PPPP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nh3"
  },
  {
    "name": "King's Gambit Accepted, Fischer Defense",
    "eco": "C34",
    "fen": "rnbqkbnr/ppp2ppp/3p4/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d6"
  },
  {
    "name": "King's Gambit Accepted, Fischer Defense, Schulder Gambit",
    "eco": "C34",
    "fen": "rnbqkbnr/ppp2ppp/3p4/8/1P2Pp2/5N2/P1PP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d6 4. b4"
  },
  {
    "name": "King's Gambit Accepted, Fischer Defense, Spanish Variation",
    "eco": "C34",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/3PPp2/3B1N2/PPP3PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d6 4. d4 Nf6 5. Bd3"
  },
  {
    "name": "King's Gambit Accepted, Gaga Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/6P1/PPPP3P/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. g3"
  },
  {
    "name": "King's Gambit Accepted, Ghulam-Kassim Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/2BPPp2/5Q2/PPP3PP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. d4 gxf3 6. Qxf3"
  },
  {
    "name": "King's Gambit Accepted, Gianutio Countergambit",
    "eco": "C34",
    "fen": "rnbqkbnr/pppp2pp/8/5p2/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 f5"
  },
  {
    "name": "King's Gambit Accepted, Greco Gambit",
    "eco": "C38",
    "fen": "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/5N2/PPP3P1/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d6 4. Bc4 h6 5. d4 g5 6. h4 Bg7"
  },
  {
    "name": "King's Gambit Accepted, Hanstein Gambit",
    "eco": "C38",
    "fen": "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. O-O"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Anderssen Defense",
    "eco": "C39",
    "fen": "rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Anderssen-Cordel Gambit",
    "eco": "C39",
    "fen": "rnbqk2r/ppp2p1p/3b4/3PN3/2BP1npP/8/PPP3P1/RN1QK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. d4 Nh5 9. Bxf4 Nxf4"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Berlin Defense",
    "eco": "C39",
    "fen": "rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Berlin Defense, 5. Ne5 Nf6 6. Bc4",
    "eco": "C39",
    "fen": "rnbqkb1r/pppp1p1p/5n2/4N3/2B1PppP/8/PPPP2P1/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Brentano Defense",
    "eco": "C39",
    "fen": "rnbqkbnr/ppp2p1p/8/3pN3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Cotter Gambit",
    "eco": "C39",
    "fen": "rnbqkbnr/pppp1N2/7p/8/4PppP/8/PPPP2P1/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Kolisch Defense",
    "eco": "C39",
    "fen": "rnbqkbnr/ppp2p1p/3p4/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d6"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Long Whip",
    "eco": "C39",
    "fen": "rnbqkbnr/pppp1p2/8/4N2p/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 h5"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Neumann Defense",
    "eco": "C39",
    "fen": "r1bqkbnr/pppp1p1p/2n5/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nc6"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Paulsen Defense",
    "eco": "C39",
    "fen": "rnbqk1nr/pppp1pbp/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Bg7"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Paulsen Defense Deferred",
    "eco": "C39",
    "fen": "rnbqk2r/ppp2pbp/5n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bg7"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Rice Gambit",
    "eco": "C39",
    "fen": "rnbqk2r/ppp2p1p/5n2/3Pb3/2B2ppP/8/PPPP2P1/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. O-O Bxe5"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Rosenthal Defense",
    "eco": "C39",
    "fen": "rnb1kbnr/ppppqp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Qe7"
  },
  {
    "name": "King's Gambit Accepted, Kieseritzky Gambit, Rubinstein Variation",
    "eco": "C39",
    "fen": "rnbqkb1r/pppp1p1p/5n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. d4"
  },
  {
    "name": "King's Gambit Accepted, King's Knight Gambit",
    "eco": "C34",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3"
  },
  {
    "name": "King's Gambit Accepted, King's Knight Gambit, 3. Nf3 g5 4. Bc4",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4"
  },
  {
    "name": "King's Gambit Accepted, Kotov Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/2BPPB2/5p2/PPP3PP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. d4 gxf3 6. Bxf4"
  },
  {
    "name": "King's Gambit Accepted, Lolli Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1B1p/8/8/4Ppp1/5N2/PPPP2PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Bxf7+"
  },
  {
    "name": "King's Gambit Accepted, MacLeod Defense",
    "eco": "C34",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Nc6"
  },
  {
    "name": "King's Gambit Accepted, Mayet Gambit",
    "eco": "C38",
    "fen": "rnbqk1nr/ppp2pbp/3p4/6p1/2BPPp2/2P2N2/PP4PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. d4 d6 6. c3"
  },
  {
    "name": "King's Gambit Accepted, McDonnell Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Nc3"
  },
  {
    "name": "King's Gambit Accepted, Middleton Countergambit",
    "eco": "C37",
    "fen": "rn1qkbnr/ppp2p2/3p4/6p1/2B1Ppp1/5N2/PPPP2P1/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 d6 5. O-O Bg4 6. h3 h5 7. hxg4 hxg4"
  },
  {
    "name": "King's Gambit Accepted, Modern Defense",
    "eco": "C36",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d5"
  },
  {
    "name": "King's Gambit Accepted, Muzio Gambit Accepted, From's Defense",
    "eco": "C37",
    "fen": "rnb1kbnr/ppppqp1p/8/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qe7"
  },
  {
    "name": "King's Gambit Accepted, Muzio Gambit, Brentano Defense",
    "eco": "C37",
    "fen": "rnbqkbnr/ppp2p1p/8/3p4/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O d5"
  },
  {
    "name": "King's Gambit Accepted, Muzio Gambit, Sarratt Defense",
    "eco": "C37",
    "fen": "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6"
  },
  {
    "name": "King's Gambit Accepted, Muzio Gambit, Wild Muzio Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O"
  },
  {
    "name": "King's Gambit Accepted, Orsini Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/1P6/P1PP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. b3"
  },
  {
    "name": "King's Gambit Accepted, Paris Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPN1PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Ne2"
  },
  {
    "name": "King's Gambit Accepted, Philidor Gambit",
    "eco": "C38",
    "fen": "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp1P/5N2/PPPP2P1/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. h4"
  },
  {
    "name": "King's Gambit Accepted, Philidor Gambit, Schultz Variation",
    "eco": "C38",
    "fen": "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/3Q1N2/PPP3P1/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 h6 4. Bc4 d6 5. d4 g5 6. h4 Bg7 7. Qd3"
  },
  {
    "name": "King's Gambit Accepted, Polerio Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/3PPp2/8/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. d4"
  },
  {
    "name": "King's Gambit Accepted, Quade Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/2N2N2/PPPP2PP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Nc3"
  },
  {
    "name": "King's Gambit Accepted, Rosentreter Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/6p1/3PPp2/5N2/PPP3PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4"
  },
  {
    "name": "King's Gambit Accepted, Rosentreter Gambit, Bird Gambit",
    "eco": "C37",
    "fen": "rnb1kbnr/pppp1p1p/8/4N3/3PPppq/6P1/PPP4P/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Ne5 Qh4+ 6. g3"
  },
  {
    "name": "King's Gambit Accepted, Rosentreter Gambit, Soerensen Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/3PPpp1/2N2N2/PPP3PP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Nc3"
  },
  {
    "name": "King's Gambit Accepted, Rosentreter-Testa Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/3PPBp1/5N2/PPP3PP/RN1QKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Bxf4"
  },
  {
    "name": "King's Gambit Accepted, Salvio Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/4N3/2B1Ppp1/8/PPPP2PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5"
  },
  {
    "name": "King's Gambit Accepted, Salvio Gambit, Cochrane Gambit",
    "eco": "C37",
    "fen": "rnb1kbnr/pppp1p1p/8/4N3/2B1P1pq/5p2/PPPP2PP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 f3"
  },
  {
    "name": "King's Gambit Accepted, Salvio Gambit, Santa Maria Defense",
    "eco": "C37",
    "fen": "rnb1kb1r/pppp1p1p/5n2/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Salvio Gambit, Silberschmidt Defense",
    "eco": "C37",
    "fen": "rnb1kb1r/pppp1p1p/7n/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nh6"
  },
  {
    "name": "King's Gambit Accepted, Salvio Gambit, Viennese Variation",
    "eco": "C37",
    "fen": "r1b1kbnr/pppp1p1p/2n5/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nc6"
  },
  {
    "name": "King's Gambit Accepted, Schallopp Defense",
    "eco": "C34",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Nf6"
  },
  {
    "name": "King's Gambit Accepted, Schallopp Defense, Tashkent Attack",
    "eco": "C34",
    "fen": "rnbqkb1r/pppp1ppp/8/4P2n/5pP1/5N2/PPPP3P/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Nf6 4. e5 Nh5 5. g4"
  },
  {
    "name": "King's Gambit Accepted, Schurig Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/1B6/4Pp2/8/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bb5"
  },
  {
    "name": "King's Gambit Accepted, Stamma Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp1P/8/PPPP2P1/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. h4"
  },
  {
    "name": "King's Gambit Accepted, Tartakower Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPB1PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Be2"
  },
  {
    "name": "King's Gambit Accepted, Tartakower Gambit, Weiss Defense",
    "eco": "C33",
    "fen": "rnbqkbnr/ppp3pp/3p4/5P2/5p2/8/PPPPB1PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Be2 f5 4. exf5 d6"
  },
  {
    "name": "King's Gambit Accepted, Traditional Variation",
    "eco": "C38",
    "fen": "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7"
  },
  {
    "name": "King's Gambit Accepted, Tumbleweed",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP1KPP/RNBQ1BNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Kf2"
  },
  {
    "name": "King's Gambit Accepted: Allgaier, Blackburne Gambit",
    "eco": "C39",
    "fen": "rnbq1bnr/pppp1k2/7p/8/4PppP/2N5/PPPP2P1/R1BQKB1R b KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Nc3"
  },
  {
    "name": "King's Gambit Accepted: Allgaier, Cook Variation",
    "eco": "C39",
    "fen": "rnbq1bnr/ppp3k1/7p/4B3/2BPp1pP/8/PPP3P1/RN1QK2R b KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. d4 d5 8. Bxf4 dxe4 9. Bc4+ Kg7 10. Be5+"
  },
  {
    "name": "King's Gambit Accepted: Allgaier, Horny Defense",
    "eco": "C39",
    "fen": "rnbq3r/pppp1k2/3b1n1p/8/4PQ1P/8/PPPP2P1/RNB1KB1R w KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Qxg4 Nf6 8. Qxf4 Bd6"
  },
  {
    "name": "King's Gambit Accepted: Allgaier, Schlechter Defense",
    "eco": "C39",
    "fen": "rnbqkb1r/pppp1p1p/5n2/6N1/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 Nf6"
  },
  {
    "name": "King's Gambit Accepted: Allgaier, Urusov Attack",
    "eco": "C39",
    "fen": "rnbq1bnr/ppp3k1/7p/3B4/3PPppP/8/PPP3P1/RNBQK2R b KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Bc4+ d5 8. Bxd5+ Kg7 9. d4"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Anderssen Variation",
    "eco": "C33",
    "fen": "rnbqkbnr/pp3ppp/2p5/3B4/4Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 d5 4. Bxd5 c6"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Bledow Variation",
    "eco": "C33",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 d5"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Boren-Svenonius Variation",
    "eco": "C33",
    "fen": "rnb1k1nr/ppp2ppp/3b4/3B4/4Pp1q/8/PPPP2PP/RNBQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 d5 4. Bxd5 Qh4+ 5. Kf1 Bd6"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Chigorin's Attack",
    "eco": "C33",
    "fen": "rnb1kbnr/ppp2p1p/8/3B2p1/4Pp1q/6P1/PPPP3P/RNBQ1KNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 d5 5. Bxd5 g5 6. g3"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Classical Defense",
    "eco": "C33",
    "fen": "rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N5/PPP3PP/R1BQ1KNR w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Ne7 5. Nc3 g5 6. d4 Bg7"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Classical Defense: Cozio Attack",
    "eco": "C33",
    "fen": "rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/5Q2/PPPP2PP/RNB2KNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Qf3"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Fraser Variation",
    "eco": "C33",
    "fen": "rnb1k1nr/pppp1pbp/8/6p1/2B1P2q/2N2Qp1/PPPP3P/R1B2KNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. g3 fxg3 7. Qf3"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Grimm Attack",
    "eco": "C33",
    "fen": "rnb1k1nr/ppp2pbp/3p4/4P1p1/2BP1p1q/2N5/PPP3PP/R1BQ1KNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. d4 d6 7. e5"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, McDonnell Attack",
    "eco": "C33",
    "fen": "rnb1k1nr/pppp1pbp/8/6p1/2B1Pp1q/2N3P1/PPPP3P/R1BQ1KNR b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. g3"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Paulsen Attack",
    "eco": "C33",
    "fen": "rnbqk2r/pppp1ppp/5n2/4P3/1bB2p2/2N5/PPPP2PP/R1BQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Nf6 4. Nc3 Bb4 5. e5"
  },
  {
    "name": "King's Gambit Accepted: Bishop's Gambit, Steinitz Defense",
    "eco": "C33",
    "fen": "rnbqkb1r/ppppnppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 Ne7"
  },
  {
    "name": "King's Gambit Accepted: Cunningham, Bertin Gambit",
    "eco": "C35",
    "fen": "rnbqk1nr/pppp1ppp/8/8/2B1Pp1b/5NP1/PPPP3P/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Be7 4. Bc4 Bh4+ 5. g3"
  },
  {
    "name": "King's Gambit Accepted: Ghulam-Kassim Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/8/2BPPpp1/5N2/PPP3PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. d4"
  },
  {
    "name": "King's Gambit Accepted: Greco Gambit",
    "eco": "C38",
    "fen": "rnbqk1nb/pp3p2/2pp4/4N1p1/2BPPp2/2N5/PPP3P1/R1BQK3 b Qq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. h4 h6 6. d4 d6 7. Nc3 c6 8. hxg5 hxg5 9. Rxh8 Bxh8 10. Ne5"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Berlin Defense: de Riviere Variation",
    "eco": "C39",
    "fen": "rnbqkb1r/ppp2p1p/5n2/3p4/4PpNP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Nxg4 d5"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Brentano Defense",
    "eco": "C39",
    "fen": "rnbqkb1r/ppp2p1p/5n2/3pN3/3PPBpP/8/PPP3P1/RN1QKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5 6. d4 Nf6 7. Bxf4"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Brentano Defense: Caro Variation",
    "eco": "C39",
    "fen": "rnbqkb1r/ppp2p1p/8/3pN3/3PnBpP/8/PPPN2P1/R2QKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5 6. d4 Nf6 7. Bxf4 Nxe4 8. Nd2"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Brentano Defense: Kaplanek Variation",
    "eco": "C39",
    "fen": "rnb1k2r/ppp2p1p/5n2/3qN3/1b1P1ppP/2N5/PPP2KP1/R1BQ1B1R b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5 6. d4 Nf6 7. exd5 Qxd5 8. Nc3 Bb4 9. Kf2"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Long Whip Defense: Jaenisch Variation",
    "eco": "C39",
    "fen": "rnbqk1n1/pppp1p1r/7b/4N2p/2BPPppP/2N5/PPP3P1/R1BQK2R b KQq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 h5 6. Bc4 Rh7 7. d4 Bh6 8. Nc3"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Polerio Defense",
    "eco": "C39",
    "fen": "rnbqk1nr/ppppbp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Be7"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Rice Gambit",
    "eco": "C39",
    "fen": "rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. O-O"
  },
  {
    "name": "King's Gambit Accepted: Kieseritzky, Salvio Defense: Cozio Variation",
    "eco": "C39",
    "fen": "rnb1kbnr/ppppq2p/8/4Np2/2BPPppP/8/PPP3P1/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Qe7 6. d4 f5 7. Bc4"
  },
  {
    "name": "King's Gambit Accepted: King Knight's Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5"
  },
  {
    "name": "King's Gambit Accepted: King Knight's Gambit, 3. Nf3 g5 4. h4",
    "eco": "C39",
    "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4"
  },
  {
    "name": "King's Gambit Accepted: Lolli Gambit, Young Variation",
    "eco": "C37",
    "fen": "rnb2bnr/pppp1k1p/5q2/8/4Pp2/2N1BQ2/PPP3PP/R4RK1 b -",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Bxf7+ Kxf7 6. O-O gxf3 7. Qxf3 Qf6 8. d4 Qxd4+ 9. Be3 Qf6 10. Nc3"
  },
  {
    "name": "King's Gambit Accepted: Lopez-Gianutio Countergambit, Hein Variation",
    "eco": "C33",
    "fen": "rnbk1bnr/pppp2pp/8/8/2B1pp1q/2N5/PPPPQ1PP/R1BK2NR w -",
    "moves": "1. e4 e5 2. f4 exf4 3. Bc4 f5 4. Qe2 Qh4+ 5. Kd1 fxe4 6. Nc3 Kd8"
  },
  {
    "name": "King's Gambit Accepted: Modern Defense",
    "eco": "C36",
    "fen": "rnbqkbnr/ppp2ppp/8/3P4/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5"
  },
  {
    "name": "King's Gambit Accepted: Muzio Gambit, Holloway Defense",
    "eco": "C37",
    "fen": "r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Nc6"
  },
  {
    "name": "King's Gambit Accepted: Muzio Gambit, Kling and Horwitz Counterattack",
    "eco": "C37",
    "fen": "rnb1kbnr/ppppqp1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O Qe7"
  },
  {
    "name": "King's Gambit Accepted: Salvio Gambit, Anderssen Counterattack",
    "eco": "C37",
    "fen": "rnb1kb1r/ppp2p1p/3p3n/4N3/2BPPppq/8/PPP3PP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nh6 7. d4 d6"
  },
  {
    "name": "King's Gambit Accepted: Schurig Gambit",
    "eco": "C33",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/3B4/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Bd3"
  },
  {
    "name": "King's Gambit Accepted: Silberschmidt Gambit",
    "eco": "C37",
    "fen": "rnb1kb1r/pppp1p1p/7n/4N3/2BPP1pq/5p2/PPP3PP/RNBQ1K1R w kq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nh6 7. d4 f3"
  },
  {
    "name": "King's Gambit Accepted: Soerensen Gambit",
    "eco": "C37",
    "fen": "rnbqkbnr/pppp1p1p/8/4N3/3PPpp1/8/PPP3PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Ne5"
  },
  {
    "name": "King's Gambit Declined, Classical Variation",
    "eco": "C30",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 Bc5"
  },
  {
    "name": "King's Gambit Declined, Classical Variation, 3. Nf3 d6 4. c3",
    "eco": "C30",
    "fen": "rnbqk1nr/ppp2ppp/3p4/2b1p3/4PP2/2P2N2/PP1P2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3"
  },
  {
    "name": "King's Gambit Declined, Classical Variation, Euwe Attack",
    "eco": "C30",
    "fen": "rn1qk1nr/ppp2ppp/8/2b1p3/Q3P1b1/2P2N2/PP1P2PP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3 Bg4 5. fxe5 dxe5 6. Qa4+"
  },
  {
    "name": "King's Gambit Declined, Classical Variation, Rotlewi Countergambit",
    "eco": "C30",
    "fen": "rnbqk1nr/ppp2ppp/3p4/2b1p3/1P2PP2/5N2/P1PP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. b4"
  },
  {
    "name": "King's Gambit Declined, Classical Variation, Rubinstein Countergambit",
    "eco": "C30",
    "fen": "rnbqk1nr/ppp3pp/3p4/2b1pp2/4PP2/2P2N2/PP1P2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3 f5"
  },
  {
    "name": "King's Gambit Declined, Hobbs-Zilbermints Gambit",
    "eco": "C30",
    "fen": "r1bqkbnr/pppp1p2/2n4p/4p1P1/4P3/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 Nc6 3. Nf3 g5 4. fxg5 h6"
  },
  {
    "name": "King's Gambit Declined, Keene Defense",
    "eco": "C30",
    "fen": "rnb1kbnr/ppppqppp/8/4p3/4PP2/6P1/PPPP3P/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 Qh4+ 3. g3 Qe7"
  },
  {
    "name": "King's Gambit Declined, Mafia Defense",
    "eco": "C30",
    "fen": "rnbqkbnr/pp1p1ppp/8/2p1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. f4 e5"
  },
  {
    "name": "King's Gambit Declined, Miles Defense",
    "eco": "C30",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pp2/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 Nc6 3. Nf3 f5"
  },
  {
    "name": "King's Gambit Declined, Norwalde Variation",
    "eco": "C30",
    "fen": "rnb1kbnr/pppp1ppp/5q2/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 Qf6"
  },
  {
    "name": "King's Gambit Declined, Norwalde Variation, Schubert Variation",
    "eco": "C30",
    "fen": "rnb1kbnr/pppp1ppp/8/4p3/3PPq2/2N5/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 Qf6 3. Nc3 Qxf4 4. d4"
  },
  {
    "name": "King's Gambit Declined, Petrov's Defense",
    "eco": "C30",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 Nf6"
  },
  {
    "name": "King's Gambit Declined, Queen's Knight Defense",
    "eco": "C30",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 Nc6"
  },
  {
    "name": "King's Gambit Declined, Senechaud Countergambit",
    "eco": "C30",
    "fen": "rnbqk1nr/pppp1p1p/8/2b1p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 g5"
  },
  {
    "name": "King's Gambit Declined, Soller-Zilbermints Gambit",
    "eco": "C30",
    "fen": "r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 f6 3. fxe5 Nc6"
  },
  {
    "name": "King's Gambit Declined, Zilbermints Double Gambit",
    "eco": "C30",
    "fen": "r1bqkbnr/pppp1p1p/2n5/4p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 Nc6 3. Nf3 g5"
  },
  {
    "name": "King's Gambit Declined: Classical, Hanham Variation",
    "eco": "C30",
    "fen": "r1bqk1nr/pppn1ppp/3p4/2b1p3/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. Nc3 Nd7"
  },
  {
    "name": "King's Gambit Declined: Classical, Reti Variation",
    "eco": "C30",
    "fen": "rnbqk1nr/ppp3pp/8/2b2p2/2BpP3/2P2N2/PP4PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3 f5 5. fxe5 dxe5 6. d4 exd4 7. Bc4"
  },
  {
    "name": "King's Gambit Declined: Classical, Soldatenkov Variation",
    "eco": "C30",
    "fen": "rnbqk1nr/ppp2ppp/3p4/2b1P3/4P3/5N2/PPPP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. fxe5"
  },
  {
    "name": "King's Gambit Declined: Classical, Svenonius Variation",
    "eco": "C30",
    "fen": "r2qk2r/ppp2ppp/2np1n2/2b5/2B1Pp2/2NP1Q1P/PPP3P1/R1B1K2R w KQkq",
    "moves": "1. e4 e5 2. Bc4 Nc6 3. Nc3 Nf6 4. d3 Bc5 5. f4 d6 6. Nf3 Bg4 7. h3 Bxf3 8. Qxf3 exf4"
  },
  {
    "name": "King's Gambit Declined: Falkbeer Countergambit",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 d5"
  },
  {
    "name": "King's Gambit Declined: Falkbeer, Alapin Variation",
    "eco": "C32",
    "fen": "rnb1k2r/ppp2ppp/8/3q4/4nP2/8/PPPNQbPP/RNBK1B1R b kq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 Bf2+ 8. Kd1 Qxd5+ 9. Nfd2"
  },
  {
    "name": "King's Gambit Declined: Falkbeer, Charousek Gambit",
    "eco": "C32",
    "fen": "rnbqkb1r/ppp2ppp/8/3P4/4nP2/8/PPP1Q1PP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Qe2"
  },
  {
    "name": "King's Gambit Declined: Falkbeer, Charousek Variation",
    "eco": "C32",
    "fen": "rnb1kb1r/ppp3pp/8/3q1p2/4nPP1/8/PPPNQ2P/R1B1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Qe2 Qxd5 7. Nd2 f5 8. g4"
  },
  {
    "name": "King's Gambit Declined: Falkbeer, Milner-Barry Variation",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. Nc3"
  },
  {
    "name": "King's Gambit Declined: Falkbeer, Rubinstein Variation",
    "eco": "C31",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/2N5/PPPPQ1PP/R1B1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. Nc3 Nf6 5. Qe2"
  },
  {
    "name": "King's Gambit Declined: Falkbeer, Tarrasch Variation",
    "eco": "C32",
    "fen": "rn1q1rk1/ppp2ppp/8/2bP1b2/4nPP1/5N2/PPP1Q2P/RNB1KB1R w KQ",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 Bf5 8. g4 O-O"
  },
  {
    "name": "King's Gambit Declined: Keene's Defense",
    "eco": "C30",
    "fen": "rnb1kbnr/pppp1ppp/8/4p3/4PP1q/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 Qh4+"
  },
  {
    "name": "King's Gambit Declined: Keene's Defense, 2. f4 Qh4+ 3. g3",
    "eco": "C30",
    "fen": "rnb1kbnr/pppp1ppp/8/4p3/4PP1q/6P1/PPPP3P/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 Qh4+ 3. g3"
  },
  {
    "name": "King's Gambit Declined: Norwalde Variation, Buecker Gambit",
    "eco": "C30",
    "fen": "rnb1k1nr/pppp1ppp/8/4p3/1bB1Pq2/2N2N2/PPPP2PP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 Qf6 3. Nc3 Qxf4 4. Nf3 Bb4 5. Bc4"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit Accepted",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3Pp3/5P2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Anderssen Attack",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/1B1P4/4pP2/8/PPPP2PP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. Bb5+"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Blackburne Attack",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/5N2/PPPP2PP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. Nf3"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Charousek Gambit",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3P4/4pP2/3P4/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Charousek Gambit Accepted",
    "eco": "C32",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3P4/4PP2/8/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Charousek Gambit, Keres Variation",
    "eco": "C32",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPPN2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. Nd2"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Charousek Gambit, Main Line",
    "eco": "C32",
    "fen": "rn1qk2r/ppp2ppp/8/2bP1b2/4nP2/5N2/PPP1Q1PP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 Bf5"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Charousek Gambit, Morphy Defense",
    "eco": "C31",
    "fen": "rnbqk2r/ppp2ppp/5n2/3P4/1b3P2/2NPp3/PPPB2PP/R2QKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. exd5 e4 5. d3 Bb4 6. Bd2 e3"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Charousek Gambit, Old Line",
    "eco": "C32",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPP1Q1PP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. Qe2"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Hinrichsen Gambit",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/3PPP2/8/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. d4"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Miles Gambit",
    "eco": "C31",
    "fen": "rnbqk1nr/ppp2ppp/8/2bPp3/5P2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 Bc5"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Modern Transfer",
    "eco": "C32",
    "fen": "rnbqkbnr/ppp2ppp/8/3P4/5p2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 exf4"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Nimzowitsch-Marshall Countergambit",
    "eco": "C31",
    "fen": "rnbqkbnr/pp3ppp/2p5/3Pp3/5P2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 c6"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Pickler Gambit",
    "eco": "C31",
    "fen": "rnbqk1nr/pp3ppp/2P5/2b1p3/5P2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 c6 4. dxc6 Bc5"
  },
  {
    "name": "King's Gambit, Falkbeer Countergambit, Staunton Line",
    "eco": "C31",
    "fen": "rnbqkbnr/ppp2ppp/8/3P4/4pP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. exd5 e4"
  },
  {
    "name": "King's Gambit: Panteldakis Countergambit",
    "eco": "C30",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 f5"
  },
  {
    "name": "King's Gambit: Panteldakis Countergambit, Greco Variation",
    "eco": "C30",
    "fen": "rnb1kbnr/pppp2pp/8/4pP2/5P1q/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 f5 3. exf5 Qh4+"
  },
  {
    "name": "King's Gambit: Panteldakis Countergambit, Pawn Sacrifice Line",
    "eco": "C30",
    "fen": "rnb1kbnr/ppppq2p/6P1/7Q/5p2/8/PPPP2PP/RNBK1BNR b kq",
    "moves": "1. e4 e5 2. f4 f5 3. exf5 exf4 4. Qh5+ g6 5. fxg6 Qe7+ 6. Kd1"
  },
  {
    "name": "King's Gambit: Panteldakis Countergambit, Schiller's Defense",
    "eco": "C30",
    "fen": "rnbqk1nr/pppp2pp/8/2b1pP2/5P2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 f5 3. exf5 Bc5"
  },
  {
    "name": "King's Gambit: Panteldakis Countergambit, Shirazi Line",
    "eco": "C30",
    "fen": "rnbq1bnr/ppppk1pp/8/5P1Q/5p2/8/PPPP2PP/RNB1KBNR w KQ",
    "moves": "1. e4 e5 2. f4 f5 3. exf5 exf4 4. Qh5+ Ke7"
  },
  {
    "name": "King's Gambit: Panteldakis Countergambit, Symmetrical Variation",
    "eco": "C30",
    "fen": "rnbqk1nr/ppp3pp/3b4/3p1P2/3P1p2/3B1N2/PPP3PP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. f4 f5 3. exf5 exf4 4. Nf3 d5 5. d4 Bd6 6. Bd3"
  },
  {
    "name": "King's Gambit: Zilbermints Double Countergambit",
    "eco": "C30",
    "fen": "rnbqkbnr/pppp1p1p/8/4p1p1/4PP2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. f4 g5"
  },
  {
    "name": "King's Indian Attack",
    "eco": "A07",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. g3"
  },
  {
    "name": "King's Indian Attack, 2. g3 d5",
    "eco": "A08",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. g3 d5"
  },
  {
    "name": "King's Indian Attack: Double Fianchetto",
    "eco": "A07",
    "fen": "rnbqkbnr/ppp1pp1p/6p1/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. g3 g6"
  },
  {
    "name": "King's Indian Attack: French Variation",
    "eco": "A08",
    "fen": "r1bqkbnr/pp2pppp/2n5/2pp4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 d5 2. g3 c5 3. Bg2 Nc6"
  },
  {
    "name": "King's Indian Attack: Keres Variation",
    "eco": "A07",
    "fen": "rn1qkbnr/ppp1pppp/8/3p4/6b1/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. g3 Bg4"
  },
  {
    "name": "King's Indian Attack: Keres Variation, 2. g3 Bg4 3. Bg2 Nd7",
    "eco": "A07",
    "fen": "r2qkbnr/pppnpppp/8/3p4/6b1/5NP1/PPPPPPBP/RNBQK2R w KQkq",
    "moves": "1. Nf3 d5 2. g3 Bg4 3. Bg2 Nd7"
  },
  {
    "name": "King's Indian Attack: Omega-Delta Gambit",
    "eco": "A07",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. g3 e5"
  },
  {
    "name": "King's Indian Attack: Pachman System",
    "eco": "A07",
    "fen": "rnbqk2r/ppp1npbp/6p1/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq",
    "moves": "1. Nf3 d5 2. g3 g6 3. Bg2 Bg7 4. O-O e5 5. d3 Ne7"
  },
  {
    "name": "King's Indian Attack: Sicilian Variation",
    "eco": "A07",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. g3 c5"
  },
  {
    "name": "King's Indian Attack: Sicilian Variation, 2. g3 c5 3. Bg2",
    "eco": "A08",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq",
    "moves": "1. Nf3 d5 2. g3 c5 3. Bg2"
  },
  {
    "name": "King's Indian Attack: Sicilian Variation, 7. O-O O-O 8. Re1",
    "eco": "A08",
    "fen": "r1bq1rk1/pp2bppp/2n1pn2/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQR1K1 b -",
    "moves": "1. e4 e6 2. d3 d5 3. Nd2 Nf6 4. Ngf3 c5 5. g3 Nc6 6. Bg2 Be7 7. O-O O-O 8. Re1"
  },
  {
    "name": "King's Indian Attack: Smyslov Variation",
    "eco": "A05",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/1P6/5NP1/P1PPPP1P/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. g3 g6 3. b4"
  },
  {
    "name": "King's Indian Attack: Spassky Variation",
    "eco": "A05",
    "fen": "rnbqkb1r/p1pppppp/5n2/1p6/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. g3 b5"
  },
  {
    "name": "King's Indian Attack: Symmetrical Defense",
    "eco": "A05",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. g3 g6"
  },
  {
    "name": "King's Indian Attack: Wahls Defense",
    "eco": "A05",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w -",
    "moves": "1. Nf3 Nf6 2. g3 g6 3. Bg2 Bg7 4. O-O O-O 5. d3 d5"
  },
  {
    "name": "King's Indian Attack: Yugoslav Variation",
    "eco": "A07",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1 w kq",
    "moves": "1. Nf3 Nf6 2. g3 d5 3. Bg2 c6 4. O-O Bg4"
  },
  {
    "name": "King's Indian Defense",
    "eco": "E61",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7"
  },
  {
    "name": "King's Indian Defense: 3. Nc3",
    "eco": "E61",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3"
  },
  {
    "name": "King's Indian Defense: Accelerated Averbakh Variation",
    "eco": "E70",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP3PPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Bg5"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation",
    "eco": "E73",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Benoni Defense",
    "eco": "E74",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2p3B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Benoni Defense, Advance Variation",
    "eco": "E75",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Benoni Defense, Exchange Variation",
    "eco": "E74",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2P3B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. dxc5"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Flexible Defense",
    "eco": "E73",
    "fen": "rnbq1rk1/ppp1ppb1/3p1npp/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 h6"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Geller Defense",
    "eco": "E73",
    "fen": "r1bq1rk1/pppnppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Nbd7"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Modern Defense",
    "eco": "E73",
    "fen": "r1bq1rk1/ppp1ppbp/n2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Na6"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Modern Defense, Burgess Line",
    "eco": "E73",
    "fen": "r1bq1rk1/pp2ppbp/n1pp1np1/6B1/2PPP3/2N5/PP1QBPPP/R3K1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Na6 7. Qd2 c6"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Nc6 Defense",
    "eco": "E73",
    "fen": "r1bq1rk1/ppp1ppbp/2np1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Nc6"
  },
  {
    "name": "King's Indian Defense: Averbakh Variation, Spanish Defense",
    "eco": "E73",
    "fen": "rnbq1rk1/1pp1ppbp/p2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 a6"
  },
  {
    "name": "King's Indian Defense: Exchange Variation",
    "eco": "E92",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/4P3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. dxe5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Benjamin Defense",
    "eco": "E61",
    "fen": "rnb2rk1/pp2ppbp/1qpp1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. c4 c6 7. Nc3 Qb6"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Classical Fianchetto",
    "eco": "E67",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Classical Main Line",
    "eco": "E69",
    "fen": "r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 c6 9. h3"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Debrecen Defense",
    "eco": "E67",
    "fen": "r1bq1rk1/pppnppbp/3p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nbd7"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Delayed Fianchetto",
    "eco": "E62",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 d6 5. g3"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Double Fianchetto Attack",
    "eco": "E64",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. c4 Nbd7 7. Nc3 e5 8. b3"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Hungarian Variation",
    "eco": "E64",
    "fen": "r1bq1rk1/1ppnppbp/p2p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. c4 Nf6 2. Nc3 g6 3. g3 Bg7 4. Bg2 O-O 5. d4 d6 6. Nf3 Nbd7 7. O-O a6"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Immediate Fianchetto",
    "eco": "E60",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Karlsbad Variation",
    "eco": "E62",
    "fen": "r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nc6"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Kavalek Defense",
    "eco": "E62",
    "fen": "rnb2rk1/pp2ppbp/2pp1np1/q7/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c6 7. Nc3 Qa5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Larsen Defense",
    "eco": "E62",
    "fen": "rn1q1rk1/pp2ppbp/2pp1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c6 7. Nc3 Bf5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Lesser Simagin (Spassky)",
    "eco": "E62",
    "fen": "r2q1rk1/ppp1ppbp/2np1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nc6 7. O-O Bf5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Long Variation",
    "eco": "E68",
    "fen": "r1bqr1k1/1pp2pbp/3p1np1/p1n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 exd4 9. Nxd4 Re8 10. h3 Nc5 11. Re1 a5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Panno Variation",
    "eco": "E63",
    "fen": "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Panno Variation, Blockade Line",
    "eco": "E63",
    "fen": "r1bq1rk1/1p3pbp/p2p1np1/n1pPp3/2P5/2N3P1/PPQNPPBP/R1B2RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 e5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Panno Variation, Donner Line",
    "eco": "E63",
    "fen": "1rbq1rk1/4pp1p/p2p1npb/n1pP4/2P5/2N3P1/PBQNPPBP/R4RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 12. Bb2 bxc4 13. bxc4 Bh6"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Panno Variation, Korchnoi Line",
    "eco": "E63",
    "fen": "1rbq1rk1/2p1ppbp/p1np1np1/1p6/2PP4/2N1B1PP/PP1NPPB1/R2Q1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6 8. h3 Rb8 9. Be3 b5 10. Nd2"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Pterodactyl Variation",
    "eco": "E64",
    "fen": "rnb1k2r/pp1pppbp/5np1/q1p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 c5 5. Bg2 Qa5+"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Simagin Variation",
    "eco": "E62",
    "fen": "r2q1rk1/ppp1ppbp/2np1np1/8/2PP2b1/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. d4 Nc6 7. Nc3 Bg4"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Uhlmann-Szabo System",
    "eco": "E62",
    "fen": "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 e5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Yugoslav System, without Nc3",
    "eco": "E64",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation",
    "eco": "E65",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5 7. Nc3"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Advance Line",
    "eco": "E66",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/2pP4/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5 7. Nc3 Nc6 8. d5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line",
    "eco": "E66",
    "fen": "r1bq1rk1/pp2ppbp/2n2np1/2p5/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O c5 6. d4 d6 7. Nc3 Nc6 8. dxc5 dxc5"
  },
  {
    "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Rare Line",
    "eco": "E64",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 c5"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack",
    "eco": "E76",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, 5. Be2 O-O 6. f4",
    "eco": "E77",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP2B1PP/R1BQK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. f4"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, Dynamic Attack",
    "eco": "E76",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1PP2/2N2N2/PP4PP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, Exchange Variation",
    "eco": "E79",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/2PNPP2/2N1B3/PP2B1PP/R2QK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. Be2 cxd4 8. Nxd4 Nc6 9. Be3"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, Florentine Gambit",
    "eco": "E77",
    "fen": "rnbq1rk1/pp3pbp/3p1np1/2ppP3/2P2P2/2N2N2/PP2B1PP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. e5"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, Fluid Attack",
    "eco": "E78",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPPP2/2N2N2/PP2B1PP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. Be2"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, Modern Defense",
    "eco": "E76",
    "fen": "r1bqk2r/ppp1ppbp/n2p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 Na6"
  },
  {
    "name": "King's Indian Defense: Four Pawns Attack, Normal Attack",
    "eco": "E77",
    "fen": "rnbq1rk1/pp3pbp/3ppnp1/2pP4/2P1PP2/2N2N2/PP2B1PP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2"
  },
  {
    "name": "King's Indian Defense: Kazakh Variation",
    "eco": "E91",
    "fen": "r1bq1rk1/ppp1ppbp/n2p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 Na6"
  },
  {
    "name": "King's Indian Defense: Kramer Variation",
    "eco": "E70",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2NPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nge2"
  },
  {
    "name": "King's Indian Defense: Larsen Variation",
    "eco": "E90",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BN2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be3"
  },
  {
    "name": "King's Indian Defense: Makogonov Variation",
    "eco": "E71",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N4P/PP3PP1/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. h3"
  },
  {
    "name": "King's Indian Defense: Normal Variation",
    "eco": "E70",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4"
  },
  {
    "name": "King's Indian Defense: Normal Variation, Deferred Fianchetto",
    "eco": "E72",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N3P1/PP3P1P/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. g3"
  },
  {
    "name": "King's Indian Defense: Normal Variation, King's Knight Variation",
    "eco": "E60",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4"
  },
  {
    "name": "King's Indian Defense: Normal Variation, Rare Defenses",
    "eco": "E90",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3"
  },
  {
    "name": "King's Indian Defense: Normal Variation, Standard Development",
    "eco": "E73",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation",
    "eco": "E91",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, 5. Nf3 O-O 6. Be2 e5",
    "eco": "E92",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, 6. Be2 e5 7. O-O",
    "eco": "E94",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Aronin-Taimanov Defense",
    "eco": "E97",
    "fen": "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Bayonet Attack",
    "eco": "E97",
    "fen": "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Bayonet Attack, Sokolov's Line",
    "eco": "E97",
    "fen": "r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQR1K1 b -",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 O-O 5. d4 d6 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. Re1"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Bayonet Attack, Yepishin's Line",
    "eco": "E97",
    "fen": "r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P1Q1BPPP/R1B2RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. Qc2"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Classical System",
    "eco": "E98",
    "fen": "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Benko Attack",
    "eco": "E99",
    "fen": "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P1P1/2N2P2/PP2B2P/R1BQNRK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. f3 f5 11. g4"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Kozul Gambit",
    "eco": "E99",
    "fen": "r1bq1rk1/pppn2bp/3p2n1/2PPp1p1/4Pp2/2N2P2/PP2BBPP/2RQNRK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Be3 f5 11. f3 f4 12. Bf2 g5 13. Rc1 Ng6 14. c5"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Neo-Classical Line",
    "eco": "E99",
    "fen": "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Be3"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Classical System, Traditional Line",
    "eco": "E99",
    "fen": "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N2P2/PP2B1PP/R1BQNRK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. f3 f5"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Donner Defense",
    "eco": "E94",
    "fen": "rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O c6"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Glek Defense",
    "eco": "E94",
    "fen": "r1bq1rk1/ppp2pbp/n2p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Na6"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Gligoric-Taimanov System",
    "eco": "E92",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BN2/PP2BPPP/R2QK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. Be3"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Korchnoi Attack",
    "eco": "E97",
    "fen": "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP1BBPPP/R2Q1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bd2"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Modern System",
    "eco": "E97",
    "fen": "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP1NBPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Positional Defense",
    "eco": "E94",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Nbd7 4. e4 e5 5. Nf3 g6 6. Be2 Bg7 7. O-O O-O"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Positional Defense, Closed Line",
    "eco": "E94",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 Nbd7 7. O-O e5 8. d5"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Positional Defense, Main Line",
    "eco": "E96",
    "fen": "r1bq1rk1/1p1n1pbp/2pp1np1/p3p3/2PPP3/2N2N2/PP3PPP/R1BQRBK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nbd7 8. Re1 c6 9. Bf1 a5"
  },
  {
    "name": "King's Indian Defense: Orthodox Variation, Ukrainian Defense",
    "eco": "E94",
    "fen": "rnbq1rk1/1pp2pbp/3p1np1/p3p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O a5"
  },
  {
    "name": "King's Indian Defense: Petrosian Variation",
    "eco": "E92",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5"
  },
  {
    "name": "King's Indian Defense: Petrosian Variation, Keres Defense",
    "eco": "E93",
    "fen": "r1bq1rk1/pppn1pb1/3p3p/3Pp1pn/2P1P2P/2N2NB1/PP2BPP1/R2QK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 Nbd7 8. Bg5 h6 9. Bh4 g5 10. Bg3 Nh5 11. h4"
  },
  {
    "name": "King's Indian Defense: Petrosian Variation, Normal Defense",
    "eco": "E93",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 Nbd7"
  },
  {
    "name": "King's Indian Defense: Petrosian Variation, Stein Defense",
    "eco": "E92",
    "fen": "rnbq1rk1/1pp2pbp/3p1np1/p2Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 a5"
  },
  {
    "name": "King's Indian Defense: Pomar System",
    "eco": "E72",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N3P1/PP2NPBP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. g3 O-O 6. Bg2 e5 7. Nge2"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation",
    "eco": "E80",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, 6. Be3 e5 7. Nge2 c6",
    "eco": "E86",
    "fen": "rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Bobotsov-Korchnoi-Petrosian Variation",
    "eco": "E81",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP2N1PP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Nge2"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Bronstein Defense",
    "eco": "E87",
    "fen": "rnb2rk1/ppp2pbp/3p2p1/3Pp3/2P1P2Q/2N1nP2/PP2K2P/R5NR b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 Qh4+ 9. g3 Nxg3 10. Qf2 Nxf1 11. Qxh4 Nxe3 12. Ke2"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Byrne Defense",
    "eco": "E81",
    "fen": "rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2NBBP2/PP4PP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c6 7. Bd3 a6"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Closed Variation",
    "eco": "E87",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N1BP2/PP4PP/R2QKBNR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Closed Variation, 7... c6",
    "eco": "E88",
    "fen": "rnbq1rk1/pp3pbp/2pp1np1/3Pp3/2P1P3/2N1BP2/PP4PP/R2QKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 c6"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Closed Variation, Main Line",
    "eco": "E89",
    "fen": "rnbq1rk1/pp3pbp/3p1np1/3pp3/2P1P3/2N1BP2/PP2N1PP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6 8. d5 cxd5"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Double Fianchetto",
    "eco": "E82",
    "fen": "rnbq1rk1/p1p1ppbp/1p1p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 b6"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Normal Defense",
    "eco": "E81",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Orthodox Variation",
    "eco": "E85",
    "fen": "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Panno Formation",
    "eco": "E83",
    "fen": "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6"
  },
  {
    "name": "King's Indian Defense: Saemisch Variation, Yates Defense",
    "eco": "E83",
    "fen": "r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6"
  },
  {
    "name": "King's Indian Defense: Santasiere Variation",
    "eco": "E60",
    "fen": "rnbqk2r/ppppppbp/5np1/8/1PPP4/5N2/P3PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. b4"
  },
  {
    "name": "King's Indian Defense: Semi-Averbakh System",
    "eco": "E73",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Be3"
  },
  {
    "name": "King's Indian Defense: Semi-Classical Variation",
    "eco": "E61",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e3 d6 6. Be2"
  },
  {
    "name": "King's Indian Defense: Semi-Classical Variation, Benoni Variation",
    "eco": "E61",
    "fen": "rnbq1rk1/pp2ppbp/2pp1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. c4 Nf6 2. Nf3 g6 3. d4 Bg7 4. Nc3 O-O 5. e3 d6 6. Be2 c6"
  },
  {
    "name": "King's Indian Defense: Semi-Classical Variation, Exchange Variation",
    "eco": "E61",
    "fen": "r1bq1rk1/pppn1pbp/5np1/4p3/2P5/2N1PN2/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. c4 g6 2. Nc3 Bg7 3. e3 Nf6 4. d4 O-O 5. Nf3 d6 6. Be2 Nbd7 7. O-O e5 8. dxe5 dxe5"
  },
  {
    "name": "King's Indian Defense: Semi-Classical Variation, Hollywood Variation",
    "eco": "E61",
    "fen": "r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. Nc3 O-O 5. e3 d6 6. Be2 Nc6"
  },
  {
    "name": "King's Indian Defense: Semi-Classical Variation, Queenside Storm Line",
    "eco": "E61",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/4p3/1PPP4/2N1PN2/P3BPPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e3 d6 6. Be2 Nbd7 7. O-O e5 8. b4"
  },
  {
    "name": "King's Indian Defense: Six Pawns Attack",
    "eco": "E77",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6"
  },
  {
    "name": "King's Indian Defense: Smyslov Variation",
    "eco": "E61",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/6B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 d6 5. Bg5"
  },
  {
    "name": "King's Indian Defense: Steiner Attack",
    "eco": "E76",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2P2/PP4PP/R2QKBNR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Bg5"
  },
  {
    "name": "King's Indian Defense: Zinnowitz Variation",
    "eco": "E90",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. d4 O-O 6. Bg5"
  },
  {
    "name": "King's Indian, Averbakh, Main Line",
    "eco": "E75",
    "fen": "rnbq1rk1/pp3pbp/3ppnp1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 e6"
  },
  {
    "name": "King's Indian, Fianchetto, Classical Variation, 8. e4",
    "eco": "E68",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2NP1/PP3PBP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4"
  },
  {
    "name": "King's Indian, Orthodox, 7... Nbd7 8. Re1",
    "eco": "E95",
    "fen": "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQR1K1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nbd7 8. Re1"
  },
  {
    "name": "King's Indian, Saemisch, Orthodox, Bronstein Variation",
    "eco": "E87",
    "fen": "rnb2rk1/ppp2pbp/3p2p1/3Pp3/2n1P2Q/2N2P2/PP2K2P/R5NR w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 Qh4+ 9. g3 Nxg3 10. Qf2 Nxf1 11. Qxh4 Nxe3 12. Ke2 Nxc4"
  },
  {
    "name": "King's Indian, Saemisch, Panno Main Line",
    "eco": "E84",
    "fen": "1rbq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP1QN1PP/R3KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6 8. Qd2 Rb8"
  },
  {
    "name": "King's Indian, Saemisch, Ruban Variation",
    "eco": "E83",
    "fen": "1rbq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 Rb8"
  },
  {
    "name": "King's Indian, Six Pawns Attack",
    "eco": "E77",
    "fen": "r1bq1rk1/pp4bp/2nppnp1/2p5/2P1PPPP/2N5/PP2B3/R1BQK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Be2 c5 7. d5 e6 8. dxe6 fxe6 9. g4 Nc6 10. h4"
  },
  {
    "name": "King's Knight Opening",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3"
  },
  {
    "name": "King's Knight Opening: Konstantinopolsky",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5NP1/PPPP1P1P/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. g3"
  },
  {
    "name": "King's Knight Opening: Normal Variation",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6"
  },
  {
    "name": "King's Pawn",
    "eco": "B00",
    "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4"
  },
  {
    "name": "King's Pawn Game",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5"
  },
  {
    "name": "King's Pawn Game: Alapin Opening",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPNPPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Ne2"
  },
  {
    "name": "King's Pawn Game: Bavarian Gambit",
    "eco": "C20",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. c4 d5"
  },
  {
    "name": "King's Pawn Game: Beyer Gambit",
    "eco": "C21",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d4 d5"
  },
  {
    "name": "King's Pawn Game: Busch-Gass Gambit",
    "eco": "C40",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Bc5"
  },
  {
    "name": "King's Pawn Game: Busch-Gass Gambit, Chiodini Gambit",
    "eco": "C40",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Bc5 3. Nxe5 Nc6"
  },
  {
    "name": "King's Pawn Game: Clam Variation, King's Gambit Reversed",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d3 f5"
  },
  {
    "name": "King's Pawn Game: Clam Variation, Radisch Gambit",
    "eco": "C20",
    "fen": "rnbqk2r/pppp1ppp/5n2/2b1p3/4PP2/3P4/PPP3PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. d3 e5 3. f4 Bc5"
  },
  {
    "name": "King's Pawn Game: Damiano Defense",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/5p2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f6"
  },
  {
    "name": "King's Pawn Game: Damiano Defense, Damiano Gambit",
    "eco": "C20",
    "fen": "rnb1kbnQ/ppppq2p/6p1/8/4P3/8/PPPP1PPP/RNB1KB1R b KQq",
    "moves": "1. e4 e5 2. Nf3 f6 3. Nxe5 fxe5 4. Qh5+ g6 5. Qxe5+ Qe7 6. Qxh8"
  },
  {
    "name": "King's Pawn Game: Damiano Defense, Damiano Gambit, Chigorin Gambit",
    "eco": "C20",
    "fen": "rnb1kbnr/ppp1q1pp/5p2/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f6 3. Nxe5 Qe7 4. Nf3 d5"
  },
  {
    "name": "King's Pawn Game: Dresden Opening",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c4"
  },
  {
    "name": "King's Pawn Game: Gunderam Defense, Gunderam Gambit",
    "eco": "C40",
    "fen": "rnb1kbnr/ppppq1pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Qe7 3. Bc4 f5"
  },
  {
    "name": "King's Pawn Game: Gunderam Gambit",
    "eco": "C40",
    "fen": "rnbqkbnr/pp1p1ppp/2p5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 c6"
  },
  {
    "name": "King's Pawn Game: King's Head Opening",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5P2/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. f3"
  },
  {
    "name": "King's Pawn Game: King's Head Opening, 2. f3 Nf6 3. Nc3",
    "eco": "C20",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2P2/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. f3 Nf6 3. Nc3"
  },
  {
    "name": "King's Pawn Game: La Bourdonnais Gambit",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp1ppp/6q1/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Qf6 3. Bc4 Qg6 4. O-O"
  },
  {
    "name": "King's Pawn Game: Leonardis Variation",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. d3"
  },
  {
    "name": "King's Pawn Game: Macleod Attack",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. c3"
  },
  {
    "name": "King's Pawn Game: Macleod Attack, Lasa Gambit",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. c3 f5"
  },
  {
    "name": "King's Pawn Game: Macleod Attack, Norwalde Gambit",
    "eco": "C20",
    "fen": "rnbqk1nr/ppp2ppp/3b4/3pp2Q/4P3/2P5/PP1P1PPP/RNB1KBNR w KQkq",
    "moves": "1. e4 e5 2. c3 d5 3. Qh5 Bd6"
  },
  {
    "name": "King's Pawn Game: Maroczy Defense",
    "eco": "B07",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d6 2. e4 e5"
  },
  {
    "name": "King's Pawn Game: McConnell Defense",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp1ppp/5q2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Qf6"
  },
  {
    "name": "King's Pawn Game: Mengarini's Opening",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/P7/1PPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. a3"
  },
  {
    "name": "King's Pawn Game: Napoleon Attack",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5Q2/PPPP1PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. Qf3"
  },
  {
    "name": "King's Pawn Game: Nimzowitsch Defense",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/2n5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4"
  },
  {
    "name": "King's Pawn Game: Nimzowitsch Defense: Wheeler Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/2n5/8/3PP3/2P5/P4PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. b4 Nxb4 3. c3 Nc6 4. d4"
  },
  {
    "name": "King's Pawn Game: Pachman Wing Gambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. b4"
  },
  {
    "name": "King's Pawn Game: Philidor Gambit",
    "eco": "B07",
    "fen": "rn1qkbnr/pppb1ppp/3p4/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d4 d6 3. dxe5 Bd7"
  },
  {
    "name": "King's Pawn Game: Schulze-Mueller Gambit",
    "eco": "C40",
    "fen": "r1bqkbnr/pppp1ppp/8/4n3/3PP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nxe5 Nxe5 4. d4"
  },
  {
    "name": "King's Pawn Game: Tayler Opening",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Be2"
  },
  {
    "name": "King's Pawn Game: Tayler Opening, Basman Gambit",
    "eco": "C44",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4P3/3p4/5N2/PPP1BPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d4 exd4 5. e5"
  },
  {
    "name": "King's Pawn Game: Tayler Opening, Inverted Hanham",
    "eco": "C44",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp3/4P3/3P1N2/PPPNBPPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d3 d5 5. Nbd2"
  },
  {
    "name": "King's Pawn Game: Tortoise Opening",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/3B4/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bd3"
  },
  {
    "name": "King's Pawn Game: Wayward Queen Attack",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. Qh5"
  },
  {
    "name": "King's Pawn Game: Wayward Queen Attack, Kiddie Countergambit",
    "eco": "C20",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq",
    "moves": "1. e4 e5 2. Qh5 Nf6"
  },
  {
    "name": "King's Pawn Game: Wayward Queen Attack, Mellon Gambit",
    "eco": "C20",
    "fen": "r1bqkb1r/ppp4p/2n2ppn/3pp3/2B1P3/3P1Q2/PPP1NPPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Qh5 Nc6 3. Bc4 Nh6 4. d3 g6 5. Qf3 f6 6. Ne2 d5"
  },
  {
    "name": "King's Pawn Game: Weber Gambit",
    "eco": "C20",
    "fen": "r1bqkbnr/pp3ppp/2n5/4p3/8/3P4/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e5 2. d3 d5 3. exd5 c6 4. dxc6 Nxc6"
  },
  {
    "name": "King's Pawn Opening: 2. b3",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e5 2. b3"
  },
  {
    "name": "King's Pawn Opening: Speers",
    "eco": "B20",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4pQ2/4P3/8/PPPP1PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 e5 2. Qg4 Nf6 3. Qf5"
  },
  {
    "name": "King's Pawn Opening: Van Hooydoon Gambit",
    "eco": "B20",
    "fen": "r1bqk2r/pppp1ppp/5n2/2b5/3nP3/5N2/PP2QPPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Qe2 Nc6 3. c3 Nf6 4. Nf3 Bc5 5. d4 exd4 6. cxd4 Nxd4"
  },
  {
    "name": "Lasker Simul Special",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppppp1/8/7p/8/6P1/PPPPPP1P/RNBQKBNR w KQkq",
    "moves": "1. g3 h5"
  },
  {
    "name": "Latvian Gambit",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5"
  },
  {
    "name": "Latvian Gambit Accepted",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pP2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. exf5"
  },
  {
    "name": "Latvian Gambit Accepted, Bilguer Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/ppp3pp/3p1q2/5p2/2NPP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4"
  },
  {
    "name": "Latvian Gambit Accepted, Bronstein Attack",
    "eco": "C40",
    "fen": "rnb1kbnr/ppp3pp/3p1q2/8/2NPp3/8/PPP1BPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4 fxe4 6. Be2"
  },
  {
    "name": "Latvian Gambit Accepted, Bronstein Gambit",
    "eco": "C40",
    "fen": "rnb1kbnr/ppp4p/3p1qp1/8/2NPp3/8/PPP1QPPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4 fxe4 6. Qh5+ g6 7. Qe2"
  },
  {
    "name": "Latvian Gambit Accepted, Foltys Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp2pp/5q2/8/2N1p3/3P4/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. Nc4 fxe4 5. d3"
  },
  {
    "name": "Latvian Gambit Accepted, Foltys-Leonhardt Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp2pp/5q2/5p2/2N1P3/8/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. Nc4"
  },
  {
    "name": "Latvian Gambit Accepted, Leonhardt Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp2pp/5q2/8/2N1p3/2N5/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. Nc4 fxe4 5. Nc3"
  },
  {
    "name": "Latvian Gambit Accepted, Main Line",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp2pp/5q2/4Np2/3PP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4"
  },
  {
    "name": "Latvian Gambit Accepted, Nimzowitsch Attack",
    "eco": "C40",
    "fen": "rnb1kbnr/ppp3pp/3p1q2/8/3Pp3/4N3/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4 fxe4 6. Ne3"
  },
  {
    "name": "Latvian Gambit: Behting Variation",
    "eco": "C40",
    "fen": "rnb1kb1N/ppp3pp/5n2/3p4/2B1p3/8/PPPP1PqP/RNBQKR2 w Qq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 Qg5 5. Nf7 Qxg2 6. Rf1 d5 7. Nxh8 Nf6"
  },
  {
    "name": "Latvian Gambit: Clam Gambit",
    "eco": "C40",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pP2/8/3P1N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d3 f5 4. exf5"
  },
  {
    "name": "Latvian Gambit: Corkscrew Countergambit",
    "eco": "C40",
    "fen": "rnbqkb1r/pppp2pp/5n2/4N3/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 Nf6"
  },
  {
    "name": "Latvian Gambit: Corkscrew Gambit",
    "eco": "C40",
    "fen": "rnb1kb1N/ppp1q1pp/5n2/3p4/2B1p3/8/PPPP1PPP/RNBQK2R w KQq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Nf6 4. Bc4 fxe4 5. Nf7 Qe7 6. Nxh8 d5"
  },
  {
    "name": "Latvian Gambit: Diepstraten Countergambit",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. c4"
  },
  {
    "name": "Latvian Gambit: Fraser Defense",
    "eco": "C40",
    "fen": "r1bqkbnr/pppp2pp/2n5/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Nc6"
  },
  {
    "name": "Latvian Gambit: Greco Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/ppppq1pp/8/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nxe5 Qe7"
  },
  {
    "name": "Latvian Gambit: Lobster Gambit",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/4P1P1/5N2/PPPP1P1P/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. g4"
  },
  {
    "name": "Latvian Gambit: Mason Countergambit",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. d4"
  },
  {
    "name": "Latvian Gambit: Mayet Attack",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4"
  },
  {
    "name": "Latvian Gambit: Mayet Attack, Morgado Defense",
    "eco": "C40",
    "fen": "rnbqkb1r/pppp2pp/5n2/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4 Nf6"
  },
  {
    "name": "Latvian Gambit: Mayet Attack, Poisoned Pawn Variation",
    "eco": "C40",
    "fen": "rnb1kbnr/pppp2pp/8/4N3/2BPp3/8/PPP2PqP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 Qg5 5. d4 Qxg2"
  },
  {
    "name": "Latvian Gambit: Mayet Attack, Polerio-Svedenborg Variation",
    "eco": "C40",
    "fen": "rnbqkbnr/ppp3pp/8/3pN3/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 d5"
  },
  {
    "name": "Latvian Gambit: Mayet Attack, Strautins Gambit",
    "eco": "C40",
    "fen": "rnbqkbnr/p1pp2pp/8/1p2pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Bc4 b5"
  },
  {
    "name": "Latvian Gambit: Mlotkowski Variation",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. Nc3"
  },
  {
    "name": "Latvian Gambit: Senechaud Gambit",
    "eco": "C40",
    "fen": "rnbqkbnr/pppp2pp/8/4pp2/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 f5 3. b4"
  },
  {
    "name": "Lemming Defense",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/n7/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Na6"
  },
  {
    "name": "Lion Defense: Anti-Philidor",
    "eco": "B07",
    "fen": "r1bqkb1r/pppnpppp/3p1n2/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. f4"
  },
  {
    "name": "Lion Defense: Anti-Philidor, Lion's Cave",
    "eco": "B07",
    "fen": "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. f4 e5"
  },
  {
    "name": "Lion Defense: Anti-Philidor, Lion's Cave, Lion Claw Gambit",
    "eco": "B07",
    "fen": "r1bqkb1r/pp1n1ppp/2p2n2/3p4/2BQPP2/2N2N2/PPP3PP/R1B1K2R w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. f4 e5 5. Nf3 exd4 6. Qxd4 c6 7. Bc4 d5"
  },
  {
    "name": "Lion Defense: Bayonet Attack",
    "eco": "B07",
    "fen": "r1bqkb1r/pppnpppp/3p1n2/8/3PP1P1/2N5/PPP2P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. g4"
  },
  {
    "name": "Lion Defense: Lion's Jaw",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. f3"
  },
  {
    "name": "London System",
    "eco": "A48",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. Bf4"
  },
  {
    "name": "London System: Poisoned Pawn Variation",
    "eco": "D02",
    "fen": "rnb1kb1r/pp2pppp/1q3n2/2pp4/3P1B2/2N1PN2/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 d5 3. Bf4 c5 4. e3 Qb6 5. Nc3"
  },
  {
    "name": "Marienbad System",
    "eco": "A47",
    "fen": "rn1qkb1r/pb1ppppp/1p3n2/2p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 b6 3. g3 Bb7 4. Bg2 c5"
  },
  {
    "name": "Mexican Defense",
    "eco": "A50",
    "fen": "r1bqkb1r/pppppppp/2n2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 Nc6"
  },
  {
    "name": "Mexican Defense: Horsefly Gambit",
    "eco": "A50",
    "fen": "r1bqkb1r/pppppppp/5n2/3Pn3/2P2P2/8/PP2P1PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 Nc6 3. d5 Ne5 4. f4"
  },
  {
    "name": "Mieses Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d3"
  },
  {
    "name": "Mieses Opening: Myers Spike Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/6P1/3P4/PPP1PP1P/RNBQKBNR b KQkq",
    "moves": "1. d3 g6 2. g4"
  },
  {
    "name": "Mieses Opening: Reversed Rat",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d3 e5"
  },
  {
    "name": "Mikenas Defense",
    "eco": "A40",
    "fen": "r1bqkbnr/pppppppp/2n5/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nc6"
  },
  {
    "name": "Mikenas Defense: Cannstatter Variation",
    "eco": "A40",
    "fen": "r1bqkbnr/pppp1ppp/8/3Pp3/2Pn4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nc6 2. c4 e5 3. d5 Nd4"
  },
  {
    "name": "Mikenas Defense: Lithuanian Variation",
    "eco": "A40",
    "fen": "r1bqkbnr/ppppnppp/8/3Pp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nc6 2. c4 e5 3. d5 Nce7"
  },
  {
    "name": "Mikenas Defense: Pozarek Gambit",
    "eco": "A40",
    "fen": "r1bqkbnr/pppp1ppp/8/8/2n5/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nc6 2. c4 e5 3. dxe5 Nxe5 4. Nc3 Nxc4"
  },
  {
    "name": "Modern Defense",
    "eco": "B06",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g6"
  },
  {
    "name": "Modern Defense, 1... g6",
    "eco": "A40",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 g6"
  },
  {
    "name": "Modern Defense, 2. c4 Bg7 3. Nc3 d6",
    "eco": "A41",
    "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 d6"
  },
  {
    "name": "Modern Defense: Anti-Modern",
    "eco": "B06",
    "fen": "rnbqk1nr/pp2ppbp/2pp2p1/8/2BPP3/2N5/PPP1QPPP/R1B1K1NR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c6 4. Bc4 d6 5. Qe2"
  },
  {
    "name": "Modern Defense: Averbakh System",
    "eco": "A41",
    "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 d6 4. e4"
  },
  {
    "name": "Modern Defense: Averbakh Variation, Pseudo-Saemisch",
    "eco": "A42",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/4BP2/PP4PP/RN1QKBNR b KQkq",
    "moves": "1. c4 g6 2. e4 Bg7 3. d4 d6 4. Be3 Nf6 5. f3"
  },
  {
    "name": "Modern Defense: Beefeater Variation",
    "eco": "A40",
    "fen": "rnbqk1nr/pp1pp2p/6p1/2pP1p2/2P5/2P5/P3PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 Bxc3+ 5. bxc3 f5"
  },
  {
    "name": "Modern Defense: Bishop Attack",
    "eco": "B06",
    "fen": "rnbqk1nr/ppppppbp/6p1/8/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Bc4"
  },
  {
    "name": "Modern Defense: Bishop Attack, Buecker Gambit",
    "eco": "B06",
    "fen": "rnbqk1nr/p1ppppbp/6p1/1p6/2BPP3/8/PPP2PPP/RNBQK1NR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Bc4 b5"
  },
  {
    "name": "Modern Defense: Bishop Attack, Monkey's Bum",
    "eco": "B06",
    "fen": "rnbqk1nr/pppp1p1p/4p1p1/8/2BbP3/5Q2/PPP2PPP/RNB1K1NR w KQkq",
    "moves": "1. e4 g6 2. Bc4 Bg7 3. Qf3 e6 4. d4 Bxd4"
  },
  {
    "name": "Modern Defense: Dunworthy Variation",
    "eco": "A40",
    "fen": "rnbqk1nr/pp2pp1p/2P3p1/8/2Pb4/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. c4 d5 4. exd5 c6 5. dxc6 Bxd4"
  },
  {
    "name": "Modern Defense: Fianchetto Gambit",
    "eco": "B06",
    "fen": "rnbqkbnr/ppppp2p/6p1/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 f5"
  },
  {
    "name": "Modern Defense: Geller's System",
    "eco": "B06",
    "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nf3 d6 4. c3"
  },
  {
    "name": "Modern Defense: Gurgenidze Defense",
    "eco": "B06",
    "fen": "rnbqk1nr/pp2ppb1/2p3p1/3pP2p/3P1P2/2N5/PPP3PP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c6 4. f4 d5 5. e5 h5"
  },
  {
    "name": "Modern Defense: Kotov Variation",
    "eco": "A41",
    "fen": "r1bqk1nr/ppp1ppbp/2np2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 d6 4. e4 Nc6"
  },
  {
    "name": "Modern Defense: Lizard Defense, Mittenberger Gambit",
    "eco": "B06",
    "fen": "rnbqk1nr/ppp1ppbp/6p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 d5"
  },
  {
    "name": "Modern Defense: Lizard Defense, Pirc-Diemer Gambit",
    "eco": "A40",
    "fen": "rnbqkb1r/pppppp1p/5np1/7P/3P4/8/PPP1PPP1/RNBQKBNR b KQkq",
    "moves": "1. d4 g6 2. h4 Nf6 3. h5"
  },
  {
    "name": "Modern Defense: Masur Gambit",
    "eco": "B06",
    "fen": "rnbq1rk1/ppppp2p/6pb/5P2/3P4/2N5/PPP2PPP/R2QKBNR w KQ",
    "moves": "1. e4 g6 2. d4 Nh6 3. Nc3 f5 4. Bxh6 Bxh6 5. exf5 O-O"
  },
  {
    "name": "Modern Defense: Modern Pterodactyl",
    "eco": "B06",
    "fen": "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5"
  },
  {
    "name": "Modern Defense: Mongredien Defense",
    "eco": "B06",
    "fen": "rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nf3 b6"
  },
  {
    "name": "Modern Defense: Mongredien Defense, 2. d4 Bg7 3. Nc3 b6",
    "eco": "B06",
    "fen": "rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 b6"
  },
  {
    "name": "Modern Defense: Neo-Modern Defense",
    "eco": "A41",
    "fen": "rnbqk1nr/pppp1pbp/6p1/4p3/2PPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. c4 g6 2. e4 Bg7 3. d4 e5"
  },
  {
    "name": "Modern Defense: Norwegian Defense",
    "eco": "B06",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Nf6"
  },
  {
    "name": "Modern Defense: Norwegian Defense, Norwegian Gambit",
    "eco": "B06",
    "fen": "rnbqkb1r/ppp1pp1p/3p2p1/4P2n/3P4/8/PPP1BPPP/RNBQK1NR w KQkq",
    "moves": "1. e4 g6 2. d4 Nf6 3. e5 Nh5 4. Be2 d6"
  },
  {
    "name": "Modern Defense: Pseudo-Austrian Attack",
    "eco": "B06",
    "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. f4"
  },
  {
    "name": "Modern Defense: Pterodactyl Variation",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5"
  },
  {
    "name": "Modern Defense: Randspringer Variation",
    "eco": "A41",
    "fen": "rnbqk1nr/ppp1p1bp/3p2p1/5p2/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 d6 4. e4 f5"
  },
  {
    "name": "Modern Defense: Semi-Averbakh Variation, Polish Variation",
    "eco": "A40",
    "fen": "rnb1k1nr/pp1pppbp/1q4p1/2p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. e4 Qb6"
  },
  {
    "name": "Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation",
    "eco": "A40",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. e4 Qa5+"
  },
  {
    "name": "Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Accepted",
    "eco": "A40",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/5N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 g6 2. d4 Bg7 3. e4 d6 4. c4 c5 5. dxc5 Qa5+"
  },
  {
    "name": "Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Declined",
    "eco": "A40",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/5N2/PP2BPPP/RNBQK2R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. c4 c5 4. Nf3 d6 5. Be2 Qa5+"
  },
  {
    "name": "Modern Defense: Standard Defense",
    "eco": "B06",
    "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 d6"
  },
  {
    "name": "Modern Defense: Standard Line",
    "eco": "B06",
    "fen": "rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3"
  },
  {
    "name": "Modern Defense: Three Pawns Attack",
    "eco": "B06",
    "fen": "rnbqk1nr/ppppppbp/6p1/8/3PPP2/8/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. f4"
  },
  {
    "name": "Modern Defense: Two Knights Variation",
    "eco": "B06",
    "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Nf3"
  },
  {
    "name": "Modern Defense: Two Knights Variation, Suttles Variation",
    "eco": "B06",
    "fen": "rnbqk1nr/pp2ppbp/2pp2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c6 4. Nf3 d6"
  },
  {
    "name": "Modern Defense: Two Knights Variation, Suttles Variation, Tal Gambit",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2ppbp/2pp2p1/6B1/3PP3/2N2N2/PqPQ1PPP/R3KB1R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Nf3 c6 5. Bg5 Qb6 6. Qd2 Qxb2"
  },
  {
    "name": "Modern Defense: Westermann Gambit",
    "eco": "B06",
    "fen": "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPPB1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Bd2"
  },
  {
    "name": "Modern Defense: Wind Gambit",
    "eco": "B06",
    "fen": "rnbqk1nr/ppppppbp/6p1/8/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Bd3"
  },
  {
    "name": "Montevideo Defense",
    "eco": "A40",
    "fen": "rnbqkbnr/pppppppp/8/3P4/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nc6 2. d5 Nb8"
  },
  {
    "name": "Neo-Gruenfeld Defense",
    "eco": "D70",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 d5"
  },
  {
    "name": "Neo-Gruenfeld Defense, with 5. Nf3",
    "eco": "D73",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 d5 5. Nf3"
  },
  {
    "name": "Neo-Gruenfeld Defense: Classical Variation",
    "eco": "D77",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d5 6. c4"
  },
  {
    "name": "Neo-Gruenfeld Defense: Classical Variation, Modern Defense",
    "eco": "D78",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d5 6. c4 dxc4"
  },
  {
    "name": "Neo-Gruenfeld Defense: Classical Variation, Original Defense",
    "eco": "D78",
    "fen": "rnbq1rk1/pp2ppbp/2p2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 c6 6. O-O d5"
  },
  {
    "name": "Neo-Gruenfeld Defense: Classical Variation, Polgar Variation",
    "eco": "D78",
    "fen": "r1bq1rk1/ppp1ppbp/2n2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d5 6. c4 Nc6"
  },
  {
    "name": "Neo-Gruenfeld Defense: Delayed Exchange Variation",
    "eco": "D74",
    "fen": "rnbq1rk1/ppp1ppbp/6p1/3n4/3P4/5NP1/PP2PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d5 6. cxd5 Nxd5 7. O-O"
  },
  {
    "name": "Neo-Gruenfeld Defense: Delayed Exchange Variation, 6. cxd5 Nxd5 7. O-O Nb6",
    "eco": "D76",
    "fen": "rnbq1rk1/ppp1ppbp/1n4p1/8/3P4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d5 6. cxd5 Nxd5 7. O-O Nb6"
  },
  {
    "name": "Neo-Gruenfeld Defense: Delayed Exchange Variation, 7. Bg2 c5 8. O-O",
    "eco": "D75",
    "fen": "rnbq1rk1/pp2ppbp/6p1/2pn4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. g3 d5 6. cxd5 Nxd5 7. Bg2 c5 8. O-O"
  },
  {
    "name": "Neo-Gruenfeld Defense: Delayed Exchange Variation, 7. O-O c5 8. dxc5",
    "eco": "D75",
    "fen": "rnbq1rk1/pp2ppbp/6p1/2Pn4/8/5NP1/PP2PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 O-O 5. Bg2 d5 6. cxd5 Nxd5 7. O-O c5 8. dxc5"
  },
  {
    "name": "Neo-Gruenfeld Defense: Exchange Variation",
    "eco": "D71",
    "fen": "rnbqk2r/ppp1ppbp/6p1/3n4/3P4/6P1/PP2PPBP/RNBQK1NR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 d5 5. cxd5 Nxd5"
  },
  {
    "name": "Neo-Gruenfeld Defense: Exchange Variation, with 6. e4",
    "eco": "D72",
    "fen": "rnbqk2r/ppp1ppbp/1n4p1/8/3PP3/6P1/PP2NPBP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 d5 5. cxd5 Nxd5 6. e4 Nb6 7. Ne2"
  },
  {
    "name": "Neo-Gruenfeld Defense: Goglidze Attack",
    "eco": "D70",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. f3 d5"
  },
  {
    "name": "Neo-Gruenfeld Defense: Non- or Delayed Fianchetto",
    "eco": "D70",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. c4 d5"
  },
  {
    "name": "Neo-Gruenfeld Defense: Ultra-delayed Exchange Variation",
    "eco": "D79",
    "fen": "rnbq1rk1/pp2ppbp/5np1/3p4/3P4/5NP1/PP2PPBP/RNBQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 c6 6. O-O d5 7. cxd5 cxd5"
  },
  {
    "name": "Nimzo-Indian Defense",
    "eco": "E20",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3"
  },
  {
    "name": "Nimzo-Indian Defense, 2. c4 e6 3. Nc3 Bb4",
    "eco": "E20",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4"
  },
  {
    "name": "Nimzo-Indian Defense: 4. e3 O-O 5. Nf3, without ... d5",
    "eco": "E50",
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nf3"
  },
  {
    "name": "Nimzo-Indian Defense: 4. e3, Main Line, with 8... dxc4 and 9... cxd4",
    "eco": "E57",
    "fen": "r1bq1rk1/pp3ppp/2n1pn2/8/1bBp4/P1N1PN2/1P3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 dxc4 9. Bxc4 cxd4"
  },
  {
    "name": "Nimzo-Indian Defense: 4. e3, Ragozin Variation",
    "eco": "E51",
    "fen": "r1bq1rk1/ppp2ppp/2n1pn2/8/1bpP4/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 Nc6 7. O-O dxc4"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation",
    "eco": "E32",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Belyavsky Gambit",
    "eco": "E34",
    "fen": "rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 Qxd5 6. Nf3 Qf5 7. Qd1 e5"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation",
    "eco": "E38",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation, Macieja System",
    "eco": "E39",
    "fen": "rnbq1rk1/p2p1ppp/1p2pn2/2b5/2P2B2/P1N2N2/1PQ1PPPP/R3KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O 6. a3 Bxc5 7. Nf3 b6 8. Bf4"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation, Pirc Variation",
    "eco": "E39",
    "fen": "rnbq1rk1/pp1p1ppp/4pn2/2P5/1bP5/2N5/PPQ1PPPP/R1B1KBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation, Steiner Variation",
    "eco": "E39",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2P5/2P5/2b5/PPQ1PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 Bxc3+"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Keres Defense",
    "eco": "E32",
    "fen": "rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b6"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation",
    "eco": "E33",
    "fen": "r1bqk2r/ppp2ppp/2nppn2/8/1bPP4/2N2N2/PPQ1PPPP/R1B1KB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 Nc6 5. Nf3 d6"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation",
    "eco": "E34",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, 4. Qc2 d5 5. a3",
    "eco": "E36",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, 6. Qxc3 Ne4 7. Qc2",
    "eco": "E37",
    "fen": "rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P7/1PQ1PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Ne4 7. Qc2"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, Botvinnik Variation",
    "eco": "E36",
    "fen": "r1bqk2r/ppp2ppp/2n1pn2/3p4/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Nc6"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, San Remo Variation",
    "eco": "E37",
    "fen": "r1bqk2r/ppp2ppp/2n5/3pp3/2PPn3/P3P3/1PQ2PPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Ne4 7. Qc2 Nc6 8. e3 e5"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Vitolins-Adorjan Gambit",
    "eco": "E32",
    "fen": "rnbq1rk1/p1pp1ppp/4pn2/1p6/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b5"
  },
  {
    "name": "Nimzo-Indian Defense: Classical Variation, Zurich Variation",
    "eco": "E33",
    "fen": "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 Nc6"
  },
  {
    "name": "Nimzo-Indian Defense: Classical, Noa Variation, 5. cxd5 exd5",
    "eco": "E35",
    "fen": "rnbqk2r/ppp2ppp/5n2/3p4/1b1P4/2N5/PPQ1PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 exd5"
  },
  {
    "name": "Nimzo-Indian Defense: Classical, Noa Variation, Main Line",
    "eco": "E36",
    "fen": "rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P1Q5/1P2PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Ne4"
  },
  {
    "name": "Nimzo-Indian Defense: Fischer Variation",
    "eco": "E44",
    "fen": "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Ne2"
  },
  {
    "name": "Nimzo-Indian Defense: Huebner Variation",
    "eco": "E41",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5"
  },
  {
    "name": "Nimzo-Indian Defense: Huebner Variation, Main Line",
    "eco": "E41",
    "fen": "r1bqk2r/pp3ppp/2nppn2/2p5/2PP4/2PBPN2/P4PPP/R1BQK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6"
  },
  {
    "name": "Nimzo-Indian Defense: Huebner Variation, Rubinstein Variation",
    "eco": "E42",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Ne2"
  },
  {
    "name": "Nimzo-Indian Defense: Huebner Variation, Rubinstein Variation, Main Line",
    "eco": "E42",
    "fen": "rnbq1rk1/pp1p1ppp/4pn2/8/1bPP4/P1N5/1P2NPPP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Ne2 cxd4 6. exd4 O-O 7. a3"
  },
  {
    "name": "Nimzo-Indian Defense: Huebner Variation, Rubinstein Variation, Sherbakov Attack",
    "eco": "E42",
    "fen": "rnbq1rk1/pp1p1ppp/4pn2/2P5/1b1P4/2N5/PP2NPPP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Ne2 cxd4 6. exd4 O-O 7. c5"
  },
  {
    "name": "Nimzo-Indian Defense: Kmoch Variation",
    "eco": "E20",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3"
  },
  {
    "name": "Nimzo-Indian Defense: Leningrad Variation",
    "eco": "E30",
    "fen": "rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5"
  },
  {
    "name": "Nimzo-Indian Defense: Leningrad Variation, Averbakh Gambit",
    "eco": "E30",
    "fen": "rnbqk2r/p2p1pp1/4pn1p/1ppP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 b5"
  },
  {
    "name": "Nimzo-Indian Defense: Leningrad Variation, Benoni Defense",
    "eco": "E31",
    "fen": "rnbqk2r/pp3pp1/3ppn1p/2pP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 d6"
  },
  {
    "name": "Nimzo-Indian Defense: Mikenas Attack",
    "eco": "E20",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2NQ4/PP2PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qd3"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Line",
    "eco": "E40",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation",
    "eco": "E46",
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Bernstein Defense",
    "eco": "E59",
    "fen": "r1bq1rk1/pp3ppp/2n1pn2/2p5/2BP4/P1P1PN2/5PPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Bernstein Defense, Exchange Line",
    "eco": "E57",
    "fen": "r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1PBPN2/5PPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Bishop Attack",
    "eco": "E47",
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Bishop Attack, Classical Defense",
    "eco": "E48",
    "fen": "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBP3/PP3PPP/R1BQK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Botvinnik System",
    "eco": "E49",
    "fen": "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1PBP3/5PPP/R1BQK1NR b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. a3 Bxc3+ 7. bxc3"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Bronstein (Byrne) Variation",
    "eco": "E45",
    "fen": "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Ne2 Ba6"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System",
    "eco": "E53",
    "fen": "rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, 6. Nf3 c5 7. O-O Nbd7",
    "eco": "E53",
    "fen": "r1bq1rk1/pp1n1ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nbd7"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Bernstein Defense",
    "eco": "E56",
    "fen": "r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Bronstein Variation",
    "eco": "E55",
    "fen": "r1bq1rk1/pp1n1ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O dxc4 8. Bxc4 Nbd7"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange at c4",
    "eco": "E54",
    "fen": "rnbq1rk1/pp3ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O dxc4 8. Bxc4"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Keres Variation",
    "eco": "E53",
    "fen": "rnbq1rk1/p4ppp/1p2pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O b6"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Smyslov Variation",
    "eco": "E54",
    "fen": "rnb2rk1/pp2qppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O dxc4 8. Bxc4 Qe7"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Huebner Deferred",
    "eco": "E50",
    "fen": "rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Nf3 O-O"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Ragozin Variation",
    "eco": "E51",
    "fen": "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nf3 d5"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Saemisch Deferred",
    "eco": "E51",
    "fen": "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/P1N1PN2/1P3PPP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nf3 d5 6. a3"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Schlechter Defense",
    "eco": "E52",
    "fen": "rnbq1rk1/p1p2ppp/1p2pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 b6"
  },
  {
    "name": "Nimzo-Indian Defense: Normal Variation, Taimanov Variation",
    "eco": "E40",
    "fen": "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 Nc6"
  },
  {
    "name": "Nimzo-Indian Defense: Panov Attack, Main Line",
    "eco": "E54",
    "fen": "rnbqk2r/pp3ppp/4pn2/3p4/1bPP4/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. Nf3 Bb4"
  },
  {
    "name": "Nimzo-Indian Defense: Ragozin Defense",
    "eco": "E46",
    "fen": "r1bq1rk1/ppp2ppp/2n1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 Nc6 7. O-O"
  },
  {
    "name": "Nimzo-Indian Defense: Reshevsky Variation",
    "eco": "E46",
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2"
  },
  {
    "name": "Nimzo-Indian Defense: Romanishin Variation",
    "eco": "E20",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. g3"
  },
  {
    "name": "Nimzo-Indian Defense: Romanishin Variation, 5. g3 O-O 6. Bg2",
    "eco": "E20",
    "fen": "rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N2NP1/PP2PPBP/R1BQK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 O-O 6. Bg2"
  },
  {
    "name": "Nimzo-Indian Defense: Romanishin Variation, English Hybrid",
    "eco": "E20",
    "fen": "rnbq1rk1/pp3ppp/4p3/3n4/1b1N4/2N3P1/PP2PPBP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation",
    "eco": "E27",
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 O-O"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, 5. bxc3 c5 6. e3",
    "eco": "E26",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, 5. a3 Bxc3+ 6. bxc3",
    "eco": "E28",
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P1P3/5PPP/R1BQKBNR b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. a3 Bxc3+ 6. bxc3"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, 6. bxc3 c5 7. cxd5",
    "eco": "E25",
    "fen": "rnbqk2r/pp3ppp/4pn2/2pP4/3P4/P1P2P2/4P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, 6. a3 Bxc3+ 7. bxc3 O-O",
    "eco": "E29",
    "fen": "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. a3 Bxc3+ 7. bxc3 O-O"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, Accelerated",
    "eco": "E24",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, Capablanca Variation",
    "eco": "E29",
    "fen": "r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. a3 Bxc3+ 7. bxc3 O-O 8. Ne2 b6 9. e4 Ne8"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, Keres Variation",
    "eco": "E25",
    "fen": "rnbqk2r/pp3ppp/4p3/2Pn4/8/P1P2P2/4P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 Nxd5 8. dxc5"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch Variation, O'Kelly Variation",
    "eco": "E26",
    "fen": "rnbqk2r/p2p1ppp/1p2pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch, Botvinnik Variation",
    "eco": "E24",
    "fen": "rnbq1rk1/pp3ppp/4p3/2pn4/3P4/P1P1PP2/6PP/R1BQKBNR w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. e3 O-O 8. cxd5 Nxd5"
  },
  {
    "name": "Nimzo-Indian Defense: Saemisch, Romanovsky Variation",
    "eco": "E25",
    "fen": "rnbqk2r/pp4pp/4p3/2Pn1p2/8/P1P2P2/4P1PP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 Nxd5 8. dxc5 f5"
  },
  {
    "name": "Nimzo-Indian Defense: Simagin Variation",
    "eco": "E46",
    "fen": "rnbq1rk1/ppp2ppp/3bpn2/3p4/2PP4/P1N1P3/1P2NPPP/R1BQKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2 d5 6. a3 Bd6"
  },
  {
    "name": "Nimzo-Indian Defense: Spielmann Variation",
    "eco": "E22",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/1QN5/PP2PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3"
  },
  {
    "name": "Nimzo-Indian Defense: Spielmann Variation, Karlsbad Variation",
    "eco": "E23",
    "fen": "r1bqk2r/pp1p1ppp/2n1p3/2P5/1bP5/1QN2N2/PP1nPPPP/R3KB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxd2"
  },
  {
    "name": "Nimzo-Indian Defense: Spielmann Variation, Romanovsky Gambit",
    "eco": "E23",
    "fen": "r1bqk2r/pp1p1ppp/2n1pn2/2P5/1bP5/1QN5/PP2PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6"
  },
  {
    "name": "Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation",
    "eco": "E23",
    "fen": "r1bqk2r/pp1p1ppp/2n1p3/2n5/1bP5/1QN2N2/PP1BPPPP/R3KB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxc5"
  },
  {
    "name": "Nimzo-Indian Defense: Spielmann, Stahlberg Variation",
    "eco": "E23",
    "fen": "r1bqk2r/pp1p2pp/2n1p3/2n2p2/1bP5/2N2NP1/PPQBPP1P/R3KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxc5 8. Qc2 f5 9. g3"
  },
  {
    "name": "Nimzo-Indian Defense: St. Petersburg Variation",
    "eco": "E43",
    "fen": "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6"
  },
  {
    "name": "Nimzo-Indian Defense: Three Knights Variation",
    "eco": "E21",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3"
  },
  {
    "name": "Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation",
    "eco": "E21",
    "fen": "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4"
  },
  {
    "name": "Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation, Modern Line",
    "eco": "E21",
    "fen": "rn1qk2r/pbpp1ppp/1p2pn2/6B1/1bPP4/2N5/PP1NPPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4 5. Bg5 Bb7 6. Nd2"
  },
  {
    "name": "Nimzo-Indian Defense: Three Knights Variation, Korchnoi Variation",
    "eco": "E21",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/2pP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. d5"
  },
  {
    "name": "Nimzo-Indian Defense: Three Knights Variation, Shocron Gambit",
    "eco": "E21",
    "fen": "rnbqk2r/p2p1ppp/4pn2/1ppP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nc3 c5 5. d5 b5"
  },
  {
    "name": "Nimzo-Indian Defense: Three Knights, Euwe Variation",
    "eco": "E21",
    "fen": "rnbqk2r/pp1p1ppp/4p3/2pP4/1bP1n3/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. d5 Ne4"
  },
  {
    "name": "Nimzo-Larsen Attack",
    "eco": "A01",
    "fen": "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq",
    "moves": "1. b3"
  },
  {
    "name": "Nimzo-Larsen Attack: Classical Variation",
    "eco": "A01",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 d5"
  },
  {
    "name": "Nimzo-Larsen Attack: Classical Variation, 2. b3",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. b3"
  },
  {
    "name": "Nimzo-Larsen Attack: Dutch Variation",
    "eco": "A01",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 f5"
  },
  {
    "name": "Nimzo-Larsen Attack: English Variation",
    "eco": "A01",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 c5"
  },
  {
    "name": "Nimzo-Larsen Attack: Graz Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/BP6/P1PPPPPP/RN1QKBNR b KQkq",
    "moves": "1. b3 d5 2. Ba3"
  },
  {
    "name": "Nimzo-Larsen Attack: Indian Variation",
    "eco": "A01",
    "fen": "rnbqkb1r/pppppppp/5n2/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 Nf6"
  },
  {
    "name": "Nimzo-Larsen Attack: Modern Variation",
    "eco": "A01",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 e5"
  },
  {
    "name": "Nimzo-Larsen Attack: Modern Variation, 2. Bb2",
    "eco": "A01",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/PBPPPPPP/RN1QKBNR b KQkq",
    "moves": "1. b3 e5 2. Bb2"
  },
  {
    "name": "Nimzo-Larsen Attack: Modern Variation, 2. Bb2 Nc6",
    "eco": "A01",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P6/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b3 e5 2. Bb2 Nc6"
  },
  {
    "name": "Nimzo-Larsen Attack: Modern Variation, 2. Bb2 Nc6 3. e3",
    "eco": "A01",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. b3 e5 2. Bb2 Nc6 3. e3"
  },
  {
    "name": "Nimzo-Larsen Attack: Norfolk Gambit",
    "eco": "A01",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. b3 c5 3. e4"
  },
  {
    "name": "Nimzo-Larsen Attack: Norfolk Gambit, 3. Bb2 c5 4. e4",
    "eco": "A01",
    "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/4P3/1P3N2/PBPP1PPP/RN1QKB1R b KQkq",
    "moves": "1. Nf3 d5 2. b3 Nf6 3. Bb2 c5 4. e4"
  },
  {
    "name": "Nimzo-Larsen Attack: Pachman Gambit",
    "eco": "A01",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/5P2/1P6/PBPPP1PP/RN1QKBNR b KQkq",
    "moves": "1. b3 e5 2. Bb2 Nc6 3. f4"
  },
  {
    "name": "Nimzo-Larsen Attack: Ringelbach Gambit",
    "eco": "A01",
    "fen": "rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. b3 f5 2. Bb2 e6 3. e4"
  },
  {
    "name": "Nimzo-Larsen Attack: Spike Variation",
    "eco": "A01",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/6P1/1P6/PBPPPP1P/RN1QKBNR b KQkq",
    "moves": "1. b3 Nf6 2. Bb2 g6 3. g4"
  },
  {
    "name": "Nimzo-Larsen Attack: Symmetrical Variation",
    "eco": "A01",
    "fen": "rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 b6"
  },
  {
    "name": "Nimzowitsch Defense",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6"
  },
  {
    "name": "Nimzowitsch Defense, Declined Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/2n5/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nc6 2. Nf3"
  },
  {
    "name": "Nimzowitsch Defense: Breyer Variation",
    "eco": "B00",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. Nc3 Nf6 3. d4 e5"
  },
  {
    "name": "Nimzowitsch Defense: El Columpio Defense",
    "eco": "B00",
    "fen": "r1bqkb1r/pppppppp/2n5/4P3/6n1/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4"
  },
  {
    "name": "Nimzowitsch Defense: El Columpio Defense, El Columpio Gambit",
    "eco": "B00",
    "fen": "r1bqkb1r/ppp1pppp/2npP2n/8/3P4/5N1P/PPP2PP1/RNBQKB1R b KQkq",
    "moves": "1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4 4. d4 d6 5. h3 Nh6 6. e6"
  },
  {
    "name": "Nimzowitsch Defense: El Columpio Defense, Exchange Variation",
    "eco": "B00",
    "fen": "r1bqkb1r/ppp1pppp/2nP3n/8/3P4/5N1P/PPP2PP1/RNBQKB1R b KQkq",
    "moves": "1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4 4. d4 d6 5. h3 Nh6 6. exd6"
  },
  {
    "name": "Nimzowitsch Defense: El Columpio Defense, Pin Variation",
    "eco": "B00",
    "fen": "r1bqkb1r/ppp1pppp/2np3n/1B2P3/3P4/5N1P/PPP2PP1/RNBQK2R b KQkq",
    "moves": "1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4 4. d4 d6 5. h3 Nh6 6. Bb5"
  },
  {
    "name": "Nimzowitsch Defense: Franco-Hiva Gambit",
    "eco": "B00",
    "fen": "r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nc6 2. d4 e6 3. Nf3 f5 4. exf5 Nf6"
  },
  {
    "name": "Nimzowitsch Defense: Franco-Hiva Gambit, 3. Nc3 f5 4. exf5 Nf6",
    "eco": "B00",
    "fen": "r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e6 3. Nc3 f5 4. exf5 Nf6"
  },
  {
    "name": "Nimzowitsch Defense: Franco-Nimzowitsch Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/2n1p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nc6 2. Nf3 e6"
  },
  {
    "name": "Nimzowitsch Defense: French Connection",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/2n1p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. Nc3 e6"
  },
  {
    "name": "Nimzowitsch Defense: Hornung Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Be3"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Bielefelder Gambit",
    "eco": "B00",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 Bc5"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Hammer Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 f6"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Herford Gambit",
    "eco": "B00",
    "fen": "r1b1kbnr/pppp1ppp/2n5/4P3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 Qh4"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Keres Attack",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/8/4n3/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. Nc3"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Linksspringer Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/3Pp3/4P3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. d5"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Main Line",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/6n1/8/4PP2/8/PPP3PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. f4 Ng6"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Paulsen Attack",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/8/4n3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. Nf3"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, Riemann Defense",
    "eco": "B00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/4PP2/8/PPP3PP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. f4 Nc6"
  },
  {
    "name": "Nimzowitsch Defense: Kennedy Variation, de Smet Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp2ppp/2np4/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 e5 3. dxe5 d6"
  },
  {
    "name": "Nimzowitsch Defense: Lean Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/ppppp1pp/2n5/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nc6 2. Nf3 f5"
  },
  {
    "name": "Nimzowitsch Defense: Lean Variation, Colorado Counter Accepted",
    "eco": "B00",
    "fen": "r1bqkbnr/ppppp1pp/2n5/5P2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 Nc6 2. Nf3 f5 3. exf5"
  },
  {
    "name": "Nimzowitsch Defense: Mikenas Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/2np4/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d6"
  },
  {
    "name": "Nimzowitsch Defense: Neo-Mongoloid Defense",
    "eco": "B00",
    "fen": "r1bqkbnr/ppppp1pp/2n2p2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 f6"
  },
  {
    "name": "Nimzowitsch Defense: Pirc Connection",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppp1p/2n3p1/8/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. Nc3 g6"
  },
  {
    "name": "Nimzowitsch Defense: Pseudo-Spanish Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/2n5/1B6/4P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 Nc6 2. Bb5"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Aachen Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/8/3P4/1n1P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. exd5 Nb4"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Advance Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. e5"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Brandics Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/1pp1pppp/p1n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 a6"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Erben Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pp1p/2n3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 g6"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Heinola-Deppe Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp2ppp/2n5/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 e5"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Nimzowitsch Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/8/3Pn3/4p3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 dxe4 4. d5 Ne5"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Richter Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/ppp1pppp/8/3P4/4p3/2N2P2/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 dxe4 4. d5 Nb8 5. f3"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Vehre Variation",
    "eco": "B00",
    "fen": "r1bqkb1r/ppp1pppp/2n2n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 Nf6"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Exchange Variation",
    "eco": "B00",
    "fen": "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. exd5 Qxd5"
  },
  {
    "name": "Nimzowitsch Defense: Scandinavian Variation, Exchange Variation, Marshall Gambit",
    "eco": "B00",
    "fen": "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. exd5 Qxd5 4. Nc3"
  },
  {
    "name": "Nimzowitsch Defense: Wheeler Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/pppppppp/2n5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. b4"
  },
  {
    "name": "Nimzowitsch Defense: Williams Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/ppp1pppp/2np4/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Nc6 2. Nf3 d6"
  },
  {
    "name": "Nimzowitsch Defense: Woodchuck Variation",
    "eco": "B00",
    "fen": "r1bqkbnr/1ppppppp/p1n5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nc6 2. d4 a6"
  },
  {
    "name": "Nimzowitsch-Larsen Attack: Polish Variation",
    "eco": "A01",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/8/1P6/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b3 b5"
  },
  {
    "name": "Norwegian Defense",
    "eco": "B06",
    "fen": "rnbqkb1r/ppppppnp/6p1/4P3/3P2P1/8/PPP2P1P/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Nf6 3. e5 Nh5 4. g4 Ng7"
  },
  {
    "name": "Old Benoni Defense",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5"
  },
  {
    "name": "Old Benoni Defense, 2. d5",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1ppppp/8/2pP4/8/8/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 c5 2. d5"
  },
  {
    "name": "Old Benoni Defense, 2. d5 e5",
    "eco": "A44",
    "fen": "rnbqkbnr/pp1p1ppp/8/2pPp3/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 e5"
  },
  {
    "name": "Old Benoni Defense: Mujannah Formation",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1pp1pp/8/2pP1p2/8/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 f5"
  },
  {
    "name": "Old Indian Defense",
    "eco": "A41",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d6 2. c4"
  },
  {
    "name": "Old Indian Defense, 2. c4 d6",
    "eco": "A53",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 d6"
  },
  {
    "name": "Old Indian Defense: Dus-Khotimirsky Variation",
    "eco": "A54",
    "fen": "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PP4/2NBP3/PP3PPP/R1BQK1NR b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 e5 4. e3 Nbd7 5. Bd3"
  },
  {
    "name": "Old Indian Defense: Janowski Variation",
    "eco": "A53",
    "fen": "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Bf5"
  },
  {
    "name": "Old Indian Defense: Janowski Variation, Fianchetto Variation",
    "eco": "A53",
    "fen": "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. g3"
  },
  {
    "name": "Old Indian Defense: Janowski Variation, Fianchetto Variation, 3. Nc3 Bf5 4. Nf3",
    "eco": "A53",
    "fen": "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. Nf3"
  },
  {
    "name": "Old Indian Defense: Janowski Variation, Grinberg Gambit",
    "eco": "A53",
    "fen": "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. e4"
  },
  {
    "name": "Old Indian Defense: Janowski Variation, Main Line",
    "eco": "A53",
    "fen": "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. f3"
  },
  {
    "name": "Old Indian Defense: Normal Variation",
    "eco": "A55",
    "fen": "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 Nbd7 4. e4 e5 5. Nf3"
  },
  {
    "name": "Old Indian Defense: Tartakower-Indian",
    "eco": "A54",
    "fen": "rn1qkb1r/ppp1pppp/3p1n2/8/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 d6 3. c4 Bg4"
  },
  {
    "name": "Old Indian Defense: Two Knights Variation",
    "eco": "A54",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 e5 4. Nf3"
  },
  {
    "name": "Old Indian Defense: Ukrainian Variation",
    "eco": "A54",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 e5"
  },
  {
    "name": "Old Indian: Aged Gibbon Gambit",
    "eco": "A53",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. g4"
  },
  {
    "name": "Old Indian: Czech Variation",
    "eco": "A53",
    "fen": "rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c6 3. c4 d6 4. Nc3"
  },
  {
    "name": "Old Indian: Czech Variation, with Nc3",
    "eco": "A53",
    "fen": "rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 d6 3. Nc3 c6"
  },
  {
    "name": "Old Indian: Czech Variation, with Nf3",
    "eco": "A53",
    "fen": "rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 c6 3. c4 d6"
  },
  {
    "name": "Owen Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/p1pppppp/1p6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 b6"
  },
  {
    "name": "Owen Defense: Hekili-Loa Gambit",
    "eco": "B00",
    "fen": "r1bqkbnr/p2ppppp/1pn5/2P5/4P3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 b6 2. d4 c5 3. dxc5 Nc6"
  },
  {
    "name": "Owen Defense: Matovinsky Gambit",
    "eco": "B00",
    "fen": "rn1qkbnr/p1ppp2p/1p4p1/5P1Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq",
    "moves": "1. e4 b6 2. d4 Bb7 3. Bd3 f5 4. exf5 Bxg2 5. Qh5+ g6"
  },
  {
    "name": "Owen Defense: Naselwaus Gambit",
    "eco": "B00",
    "fen": "rn1qkbnr/pbpppppp/1p6/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 b6 2. d4 Bb7 3. Bg5"
  },
  {
    "name": "Owen Defense: Smith Gambit",
    "eco": "B00",
    "fen": "rn1qkbnr/pbpppppp/1p6/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 b6 2. d4 Bb7 3. Nf3"
  },
  {
    "name": "Owen Defense: Unicorn Variation",
    "eco": "B00",
    "fen": "rn1qkbnr/pbppp1pp/1p3p2/8/2PPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 f6 2. d4 b6 3. c4 Bb7"
  },
  {
    "name": "Owen Defense: Wind Gambit",
    "eco": "B00",
    "fen": "rn1qkbnr/pbpp1ppp/1p6/4p3/3PP3/5P2/PPP3PP/RNBQKBNR w KQkq",
    "moves": "1. e4 b6 2. d4 Bb7 3. f3 e5"
  },
  {
    "name": "Paleface Attack",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/5P2/PPP1P1PP/RNBQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. f3"
  },
  {
    "name": "Petrov's Defense",
    "eco": "C42",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6"
  },
  {
    "name": "Petrov's Defense, 2. Nf3 Nf6 3. Nxe5",
    "eco": "C42",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5"
  },
  {
    "name": "Petrov's Defense, 2. Nf3 Nf6 3. Nxe5 d6",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6"
  },
  {
    "name": "Petrov's Defense, 3. Nxe5 d6 4. Nf3",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3"
  },
  {
    "name": "Petrov's Defense, 3. Nxe5 d6 4. Nf3 Nxe4",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4"
  },
  {
    "name": "Petrov: Modern Attack",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 exd4"
  },
  {
    "name": "Philidor Defense",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6"
  },
  {
    "name": "Philidor Defense, 2. Nf3 d6 3. d4",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4"
  },
  {
    "name": "Philidor Defense, 2. Nf3 d6 3. Bc4",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. Bc4"
  },
  {
    "name": "Philidor Defense, 2. Nf3 d6 3. Bc4 Be7",
    "eco": "C41",
    "fen": "rnbqk1nr/ppp1bppp/3p4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. Bc4 Be7"
  },
  {
    "name": "Philidor Defense: Alapin-Blackburne Gambit",
    "eco": "C41",
    "fen": "r2qkbnr/pppn1ppp/3p4/4P3/4P1b1/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Nd7"
  },
  {
    "name": "Philidor Defense: Berger Variation",
    "eco": "C41",
    "fen": "r2q1rk1/pp2bppp/2npbn2/2p3B1/4P3/2N2N2/PPP1BPPP/R2QR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 Nf6 5. Nc3 Be7 6. Be2 O-O 7. O-O c5 8. Nf3 Nc6 9. Bg5 Be6 10. Re1"
  },
  {
    "name": "Philidor Defense: Bird Gambit",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. c3"
  },
  {
    "name": "Philidor Defense: Boden Variation",
    "eco": "C41",
    "fen": "rn1qkbnr/pppb1ppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Qxd4 Bd7"
  },
  {
    "name": "Philidor Defense: Exchange Variation",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4"
  },
  {
    "name": "Philidor Defense: Exchange Variation, 3. d4 exd4 4. Nxd4",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4"
  },
  {
    "name": "Philidor Defense: Exchange Variation, 3. d4 exd4 4. Nxd4 Nf6",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 Nf6"
  },
  {
    "name": "Philidor Defense: Hanham Variation",
    "eco": "C41",
    "fen": "r1bqkbnr/pppn1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7"
  },
  {
    "name": "Philidor Defense: Hanham Variation, Delmar Variation",
    "eco": "C41",
    "fen": "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. c3"
  },
  {
    "name": "Philidor Defense: Hanham Variation, Krause Variation",
    "eco": "C41",
    "fen": "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. O-O"
  },
  {
    "name": "Philidor Defense: Hanham Variation, Schlechter Variation",
    "eco": "C41",
    "fen": "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. Nc3"
  },
  {
    "name": "Philidor Defense: Hanham Variation, Sharp Variation",
    "eco": "C41",
    "fen": "r1bqkbnr/ppp2ppp/1n1p4/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 Nb6"
  },
  {
    "name": "Philidor Defense: Hanham Variation, Steiner Variation",
    "eco": "C41",
    "fen": "r1bqk1nr/pp1nbppp/2pp4/4P3/2B1P3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. O-O Be7 6. dxe5"
  },
  {
    "name": "Philidor Defense: Hanham, Berger Variation",
    "eco": "C41",
    "fen": "r1bq1rk1/pp1nbppp/2p4n/3pp1N1/2BPPP2/2P5/PP4PP/RNBQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. Ng5 Nh6 6. f4 Be7 7. O-O O-O 8. c3 d5"
  },
  {
    "name": "Philidor Defense: Hanham, Kmoch Variation",
    "eco": "C41",
    "fen": "r1bqkbnr/pp1n1ppp/2pp4/4p1N1/2BPP3/8/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. Ng5"
  },
  {
    "name": "Philidor Defense: Larsen Variation",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2p1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 g6"
  },
  {
    "name": "Philidor Defense: Lion Variation",
    "eco": "C41",
    "fen": "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7"
  },
  {
    "name": "Philidor Defense: Lion Variation, Bishop Sacrifice",
    "eco": "C41",
    "fen": "r1bqk2r/pppnbBpp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. Bxf7+"
  },
  {
    "name": "Philidor Defense: Lion Variation, Delayed Bishop Sacrifice",
    "eco": "C41",
    "fen": "r1bqk2r/pppnbBpp/5n2/4p3/4P3/2N2N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. Nf3 e5 5. Bc4 Be7 6. dxe5 dxe5 7. Bxf7+"
  },
  {
    "name": "Philidor Defense: Lion Variation, Forcing Line",
    "eco": "C41",
    "fen": "r1bq2k1/pppnbrpp/3pNn2/4p3/3PP3/2N5/PPP2PPP/R1BQK2R b KQ",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. Ng5 O-O 7. Bxf7+ Rxf7 8. Ne6"
  },
  {
    "name": "Philidor Defense: Lion Variation, Lion's Claw",
    "eco": "C41",
    "fen": "r1bqk2r/pp1nbppp/2pp1n2/4p3/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w kq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Be2 Nbd7 5. Nf3 e5 6. O-O Be7"
  },
  {
    "name": "Philidor Defense: Lion Variation, Lion's Claw, 5. Bc4 h6 6. O-O Be7",
    "eco": "C41",
    "fen": "r1bqk2r/pppnbpp1/3p1n1p/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 h6 6. O-O Be7"
  },
  {
    "name": "Philidor Defense: Lion Variation, Shirov Gambit",
    "eco": "C41",
    "fen": "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP1P1/2N2N2/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Nc3 Ngf6 5. g4"
  },
  {
    "name": "Philidor Defense: Lion Variation, Sozin Variation",
    "eco": "C41",
    "fen": "r1bq1rk1/pp1nbppp/2pp1n2/8/P1BpP3/2N2N2/1PP1QPPP/R1B2RK1 w -",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 e5 4. Nf3 Nbd7 5. Bc4 Be7 6. O-O O-O 7. Qe2 c6 8. a4 exd4"
  },
  {
    "name": "Philidor Defense: Lopez Countergambit",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp3pp/3p4/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. Bc4 f5"
  },
  {
    "name": "Philidor Defense: Lopez Countergambit, Jaenisch Variation",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp3pN/3p3n/5p2/2BpP3/8/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 f5 4. Bc4 exd4 5. Ng5 Nh6 6. Nxh7"
  },
  {
    "name": "Philidor Defense: Morphy Gambit",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Bc4"
  },
  {
    "name": "Philidor Defense: Nimzowitsch Variation",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6"
  },
  {
    "name": "Philidor Defense: Nimzowitsch Variation, 3. d4 Nf6 4. dxe5",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4P3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. dxe5"
  },
  {
    "name": "Philidor Defense: Nimzowitsch Variation, Klein Variation",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Bc4"
  },
  {
    "name": "Philidor Defense: Nimzowitsch Variation, Rellstab Variation",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p4/3QP3/4n3/5N2/PPP2PPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. dxe5 Nxe4 5. Qd5"
  },
  {
    "name": "Philidor Defense: Nimzowitsch Variation, Sokolsky Variation",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p4/4P3/4n3/5N2/PPPN1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. dxe5 Nxe4 5. Nbd2"
  },
  {
    "name": "Philidor Defense: Nimzowitsch, Larobok Variation",
    "eco": "C41",
    "fen": "r1bq1rk1/pppnbBpp/3p1n2/4p1N1/3PP3/2N5/PPP2PPP/R1BQK2R b KQ",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. Ng5 O-O 7. Bxf7+"
  },
  {
    "name": "Philidor Defense: Nimzowitsch, Locock Variation",
    "eco": "C41",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p1N1/3PP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Ng5"
  },
  {
    "name": "Philidor Defense: Paulsen Attack",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp2ppp/8/3P4/3N4/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 d5 5. exd5"
  },
  {
    "name": "Philidor Defense: Philidor Countergambit",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 f5"
  },
  {
    "name": "Philidor Defense: Philidor Countergambit, Berger Variation",
    "eco": "C41",
    "fen": "rnbqk1nr/ppp3pp/4P3/2bp2N1/4p3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 f5 4. dxe5 fxe4 5. Ng5 d5 6. e6 Bc5 7. Nc3"
  },
  {
    "name": "Philidor Defense: Philidor Countergambit, Zukertort Variation",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 f5 4. Nc3"
  },
  {
    "name": "Philidor Defense: Philidor Countergambit, del Rio Attack",
    "eco": "C41",
    "fen": "rnbqkbnr/ppp3pp/4P3/3p2N1/4p3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 f5 4. dxe5 fxe4 5. Ng5 d5 6. e6"
  },
  {
    "name": "Philidor Defense: Philidor Gambit",
    "eco": "C41",
    "fen": "rn1qkbnr/pppb1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. d4 Bd7"
  },
  {
    "name": "Philidor Defense: Steinitz Variation",
    "eco": "C41",
    "fen": "rnbqk1nr/ppp1bppp/3p4/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 d6 3. Bc4 Be7 4. c3"
  },
  {
    "name": "Pirc Defense",
    "eco": "B07",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d6"
  },
  {
    "name": "Pirc Defense, 2. d4",
    "eco": "B07",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4"
  },
  {
    "name": "Pirc Defense, 2. d4 Nf6",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6"
  },
  {
    "name": "Pirc Defense, 2. d4 Nf6 3. Nc3",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3"
  },
  {
    "name": "Pirc Defense, 2. d4 Nf6 3. Nc3 g6",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6"
  },
  {
    "name": "Pirc Defense: 150 Attack",
    "eco": "B07",
    "fen": "rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2"
  },
  {
    "name": "Pirc Defense: 150 Attack, Inner Doll Defense",
    "eco": "B07",
    "fen": "rn1qkb1r/pp2pp1p/2pp1np1/8/3PP1b1/2N1B3/PPPQ1PPP/R3KBNR w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 Bg4"
  },
  {
    "name": "Pirc Defense: 150 Attack, Sveshnikov-Jansa Attack",
    "eco": "B07",
    "fen": "rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B2P/PPP2PP1/R2QKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. h3"
  },
  {
    "name": "Pirc Defense: Austrian Attack",
    "eco": "B09",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4"
  },
  {
    "name": "Pirc Defense: Austrian Attack, 4. f4 Bg7 5. Nf3 O-O",
    "eco": "B09",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQ",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O"
  },
  {
    "name": "Pirc Defense: Austrian Attack, Dragon Formation",
    "eco": "B09",
    "fen": "rnbqk2r/pp2ppbp/3p1np1/2p5/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 c5"
  },
  {
    "name": "Pirc Defense: Austrian Attack, Kurajica Variation",
    "eco": "B09",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N1BN2/PPP3PP/R2QKB1R b KQ",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Be3"
  },
  {
    "name": "Pirc Defense: Austrian Attack, Ljubojevic Variation",
    "eco": "B09",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2BPPP2/2N5/PPP3PP/R1BQK1NR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Bc4"
  },
  {
    "name": "Pirc Defense: Austrian Attack, Unzicker Attack",
    "eco": "B09",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/4P3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQ",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5"
  },
  {
    "name": "Pirc Defense: Austrian Attack, Unzicker Attack, Bronstein Variation",
    "eco": "B09",
    "fen": "rnbq1rk1/pppnppbp/3p2p1/4P3/3P1P1P/2N2N2/PPP3P1/R1BQKB1R b KQ",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. h4"
  },
  {
    "name": "Pirc Defense: Austrian Attack, Weiss Variation",
    "eco": "B09",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R b KQ",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3"
  },
  {
    "name": "Pirc Defense: Bayonet Attack",
    "eco": "B07",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PP2P/2N5/PPP1BPP1/R1BQK1NR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be2 Bg7 5. h4"
  },
  {
    "name": "Pirc Defense: Byrne Variation",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/6B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bg5"
  },
  {
    "name": "Pirc Defense: Chinese Variation",
    "eco": "B07",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PP1P1/2N5/PPP1BP1P/R1BQK1NR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be2 Bg7 5. g4"
  },
  {
    "name": "Pirc Defense: Classical Variation",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP1BPPP/R1BQK1NR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be2"
  },
  {
    "name": "Pirc Defense: Classical Variation, 3. Nc3 g6 4. Nf3",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3"
  },
  {
    "name": "Pirc Defense: Classical Variation, 3. Nc3 g6 4. Nf3 Bg7",
    "eco": "B08",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7"
  },
  {
    "name": "Pirc Defense: Classical Variation, Quiet System",
    "eco": "B08",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2"
  },
  {
    "name": "Pirc Defense: Classical Variation, Quiet System, Chigorin Line",
    "eco": "B08",
    "fen": "r1bq1rk1/ppp1ppbp/2np1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w -",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Nc6"
  },
  {
    "name": "Pirc Defense: Classical Variation, Quiet System, Czech Defense",
    "eco": "B08",
    "fen": "rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w -",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O c6"
  },
  {
    "name": "Pirc Defense: Classical Variation, Quiet System, Parma Defense",
    "eco": "B08",
    "fen": "rn1q1rk1/ppp1ppbp/3p1np1/8/3PP1b1/2N2N2/PPP1BPPP/R1BQ1RK1 w -",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Bg4"
  },
  {
    "name": "Pirc Defense: Classical Variation, Schlechter Variation",
    "eco": "B08",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N1P/PPP2PP1/R1BQKB1R b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. h3"
  },
  {
    "name": "Pirc Defense: Kholmov System",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/2BPP3/2N5/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bc4"
  },
  {
    "name": "Pirc Defense: Roscher Gambit",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nf3"
  },
  {
    "name": "Pirc Defense: Sveshnikov System",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N3P1/PPP2P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3"
  },
  {
    "name": "Polish Defense",
    "eco": "A40",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 b5"
  },
  {
    "name": "Polish Defense: Spassky Gambit Accepted",
    "eco": "A40",
    "fen": "rn1qkbnr/pbpppppp/8/1B6/3PP3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. d4 b5 2. e4 Bb7 3. Bxb5"
  },
  {
    "name": "Polish Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq",
    "moves": "1. b4"
  },
  {
    "name": "Polish Opening: Baltic Defense",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp1pppp/8/3p1b2/1P6/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 d5 2. Bb2 Bf5"
  },
  {
    "name": "Polish Opening: Birmingham Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/1P6/8/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b4 c5"
  },
  {
    "name": "Polish Opening: Bugayev Advance Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp2pp/5p2/1P2p3/8/8/PBPPPPPP/RN1QKBNR b KQkq",
    "moves": "1. b4 e5 2. Bb2 f6 3. b5"
  },
  {
    "name": "Polish Opening: Bugayev Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/1P6/P7/2PPPPPP/RNBQKBNR b KQkq",
    "moves": "1. b4 e5 2. a3"
  },
  {
    "name": "Polish Opening: Czech Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 e5 2. Bb2 d6"
  },
  {
    "name": "Polish Opening: Dutch Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b4 f5"
  },
  {
    "name": "Polish Opening: German Defense",
    "eco": "A00",
    "fen": "rnb1kbnr/ppp1pppp/3q4/3p4/1P6/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 d5 2. Bb2 Qd6"
  },
  {
    "name": "Polish Opening: Grigorian Variation",
    "eco": "A00",
    "fen": "r1bqkbnr/pppppppp/2n5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b4 Nc6"
  },
  {
    "name": "Polish Opening: Karniewski Variation",
    "eco": "A00",
    "fen": "rnbqkb1r/pppppppp/7n/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b4 Nh6"
  },
  {
    "name": "Polish Opening: King's Indian Variation",
    "eco": "A00",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/1P6/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 Nf6 2. Bb2 g6"
  },
  {
    "name": "Polish Opening: King's Indian Variation, Schiffler Attack",
    "eco": "A00",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. b4 Nf6 2. Bb2 g6 3. e4"
  },
  {
    "name": "Polish Opening: King's Indian Variation, Sokolsky Attack",
    "eco": "A00",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/1PPP4/4PN2/PB3PPP/RN1QKB1R b KQ",
    "moves": "1. Nf3 Nf6 2. c4 g6 3. b4 Bg7 4. Bb2 O-O 5. e3 d6 6. d4"
  },
  {
    "name": "Polish Opening: Myers Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/PP6/8/1BPPPPPP/RN1QKBNR b KQkq",
    "moves": "1. b4 d5 2. Bb2 c6 3. a4"
  },
  {
    "name": "Polish Opening: Orangutan-Diemer Gambit",
    "eco": "A00",
    "fen": "rnb1kbnr/ppp2ppp/3q4/4p3/1P2p3/P4P2/1BPP2PP/RN1QKBNR b KQkq",
    "moves": "1. b4 d5 2. Bb2 Qd6 3. a3 e5 4. e4 dxe4 5. f3"
  },
  {
    "name": "Polish Opening: Orangutan-Hartlaub Gambit",
    "eco": "A00",
    "fen": "rnbqkb1r/1p3ppp/2p1pn2/P2p4/4P3/P2P4/1BP2PPP/RN1QKBNR b KQkq",
    "moves": "1. b4 Nf6 2. Bb2 e6 3. a3 c6 4. d3 a5 5. bxa5 d5 6. e4"
  },
  {
    "name": "Polish Opening: Outflank Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b4 c6"
  },
  {
    "name": "Polish Opening: Queen's Indian Variation",
    "eco": "A00",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 e6 2. Bb2 Nf6 3. b5 b6"
  },
  {
    "name": "Polish Opening: Queenside Defense",
    "eco": "A00",
    "fen": "rnbqkb1r/1ppp1ppp/p3pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 e6 2. Bb2 Nf6 3. b5 a6"
  },
  {
    "name": "Polish Opening: Rooks Swap Line",
    "eco": "A00",
    "fen": "1nbqkb1r/1ppp1ppp/4pn2/1P6/8/8/2PPPPPP/BN1QKBNR b Kk",
    "moves": "1. b4 e6 2. Bb2 Nf6 3. b5 a6 4. a4 axb5 5. axb5 Rxa1 6. Bxa1"
  },
  {
    "name": "Polish Opening: Schiffler-Sokolsky Variation",
    "eco": "A00",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/1P1p4/8/4P3/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. b4 e6 2. Bb2 Nf6 3. b5 d5 4. e3"
  },
  {
    "name": "Polish Opening: Schuehler Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/1p1ppppp/8/pp6/4P3/8/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. b4 c6 2. Bb2 a5 3. b5 cxb5 4. e4"
  },
  {
    "name": "Polish Opening: Symmetrical Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq",
    "moves": "1. b4 b5"
  },
  {
    "name": "Polish Opening: Tartakower Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp2pp/5p2/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. b4 e5 2. Bb2 f6 3. e4"
  },
  {
    "name": "Polish Opening: Tartakower Gambit, Brinckmann Variation",
    "eco": "A00",
    "fen": "r1b1k1nr/ppppq2p/2n2pp1/4pP2/1bB1P3/8/PBPP2PP/RN1QK1NR w KQkq",
    "moves": "1. b4 e5 2. Bb2 f6 3. e4 Bxb4 4. Bc4 Nc6 5. f4 Qe7 6. f5 g6"
  },
  {
    "name": "Polish Opening: Wolferts Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1p1ppp/8/2p1p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq",
    "moves": "1. b4 e5 2. Bb2 c5"
  },
  {
    "name": "Polish Opening: Zukertort System",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppppp/5n2/8/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. b4"
  },
  {
    "name": "Ponziani Opening",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3"
  },
  {
    "name": "Ponziani Opening: Caro Gambit",
    "eco": "C44",
    "fen": "r2qkbnr/pppb1ppp/2n5/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Qa4 Bd7"
  },
  {
    "name": "Ponziani Opening: Jaenisch Counterattack",
    "eco": "C44",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 Nf6"
  },
  {
    "name": "Ponziani Opening: Leonhardt Variation",
    "eco": "C44",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Qa4 Nf6"
  },
  {
    "name": "Ponziani Opening: Neumann Gambit",
    "eco": "C44",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 Nf6 4. Bc4"
  },
  {
    "name": "Ponziani Opening: Ponziani Countergambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 f5"
  },
  {
    "name": "Ponziani Opening: Ponziani Countergambit, Cordel Variation",
    "eco": "C44",
    "fen": "rnbqk2r/ppp1b1pp/3p1n2/3Pp3/4N3/2PB4/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 f5 4. d4 d6 5. d5 fxe4 6. Ng5 Nb8 7. Nxe4 Nf6 8. Bd3 Be7"
  },
  {
    "name": "Ponziani Opening: Ponziani Countergambit, Schmidt Attack",
    "eco": "C44",
    "fen": "r1bqkbnr/ppp3pp/2np4/3Ppp2/4P3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 f5 4. d4 d6 5. d5"
  },
  {
    "name": "Ponziani Opening: Reti Variation",
    "eco": "C44",
    "fen": "r1bqkb1r/ppppnppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 Nge7"
  },
  {
    "name": "Ponziani Opening: Romanishin Variation",
    "eco": "C44",
    "fen": "r1bqk1nr/ppppbppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 Be7"
  },
  {
    "name": "Ponziani Opening: Spanish Variation",
    "eco": "C44",
    "fen": "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Bb5"
  },
  {
    "name": "Ponziani Opening: Spanish Variation, Harrwitz Attack, Nikitin Gambit",
    "eco": "C44",
    "fen": "r1b1kbnr/ppp2ppp/2n5/1B1qN3/Q3p3/2P5/PP1P1PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Bb5 dxe4 5. Nxe5 Qd5 6. Qa4"
  },
  {
    "name": "Ponziani Opening: Steinitz Variation",
    "eco": "C44",
    "fen": "r1bqkbnr/ppp3pp/2n2p2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Qa4 f6"
  },
  {
    "name": "Ponziani Opening: Vukovic Gambit",
    "eco": "C44",
    "fen": "r1bqk2r/pppp1ppp/2n5/2bPp3/4n3/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. c3 Nf6 4. d4 Nxe4 5. d5 Bc5"
  },
  {
    "name": "Portuguese Opening",
    "eco": "C20",
    "fen": "rnbqkbnr/pppp1ppp/8/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bb5"
  },
  {
    "name": "Portuguese Opening: Miguel Gambit",
    "eco": "C20",
    "fen": "rnbqk1nr/pppp1ppp/8/1Bb1p3/1P2P3/8/P1PP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bb5 Bc5 3. b4"
  },
  {
    "name": "Portuguese Opening: Portuguese Gambit",
    "eco": "C20",
    "fen": "rnbqkb1r/pppp1ppp/5n2/1B2p3/3PP3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 e5 2. Bb5 Nf6 3. d4"
  },
  {
    "name": "Pterodactyl Defense",
    "eco": "A41",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. e4 Qa5+ 5. Nc3 d6"
  },
  {
    "name": "Pterodactyl Defense: Austrian, Austriadactylus Western",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/5N2/PPP3PP/RNBQKB1R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. f4 c5 4. Nf3 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Austrian, Grand Prix Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq",
    "moves": "1. e4 g6 2. Nc3 Bg7 3. f4 c5 4. Nf3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Austrian, Pteranodon",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/2P5/PP4PP/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. f4 c5 4. c3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Central, Anhanguera",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N1B3/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. c4 c5 4. Nc3 d6 5. Be3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Central, Benoni Beefeater Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2pp1p/3p2p1/q1pP4/2P1P3/2P5/P4PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 d6 5. e4 Bxc3+ 6. bxc3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Central, Benoni Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. e4 c5 4. d5 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Central, Benoni Quetzalcoatlus",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1pP4/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. c4 c5 4. d5 d6 5. Nc3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Central, Bogolubovia",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N5/PP2NPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. e4 d6 4. Nc3 c5 5. Nge2 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Central, Quetzalcoatlus Gambit",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. c4 c5 4. Nc3 d6 5. dxc5 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Anhanguera",
    "eco": "B06",
    "fen": "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. Be3"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Benoni",
    "eco": "B06",
    "fen": "rnbqk1nr/pp1pppbp/6p1/2pP4/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 g6 2. e4 Bg7 3. Nc3 c5 4. d5"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Benoni Pteranodon",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1ppp1p/6p1/q1pP4/4P3/2P5/P1P2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. d5 Bxc3+ 5. bxc3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Benoni Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. Nc3 Bg7 3. e4 c5 4. d5 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Pteranodon",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P5/P1P2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5 Bxc3+ 5. bxc3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Eastern, Rhamphorhynchus",
    "eco": "B06",
    "fen": "rnbqk1nr/pp1pppbp/6p1/2P5/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5"
  },
  {
    "name": "Pterodactyl Defense: Fianchetto, King Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/5NP1/PPP2P1P/RNBQKB1R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. g3 c5 4. Nf3 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Fianchetto, Queen Benoni Pterodactyl",
    "eco": "A40",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1pP4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Fianchetto, Queen Pteranodon",
    "eco": "A40",
    "fen": "rnb1k1nr/pp1ppp1p/6p1/q1pP4/2P5/2P5/P3PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 Bxc3+ 5. bxc3 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Fianchetto, Queen Pterodactyl",
    "eco": "A40",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 g6 2. Nf3 Bg7 3. g3 c5 4. Bg2 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Fianchetto, Rhamphorhynchus",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/6P1/PPP2P1P/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. g3 c5 4. dxc5 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Queen Pterodactyl, Quiet Line",
    "eco": "A40",
    "fen": "rnbqk1nr/pp1pppbp/6p1/2p5/2PP4/2N1P3/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. e3"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Anhanguera",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N1BN2/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5 5. Be3"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Benoni Gambit",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5 5. d5"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Pteranodon",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P2N2/P1P2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ 5. Nc3 Bxc3+ 6. bxc3"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Quetzalcoatlus",
    "eco": "B06",
    "fen": "rnb1k1nr/pp2ppbp/3p2p1/q1p5/3PP3/2N2N2/PPP1BPPP/R1BQK2R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. Nf3 Qa5 5. Be2 d6"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Rhamporhynchus",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ 5. Nc3"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Siroccopteryx",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. Nf3 Qa5 5. Bc4"
  },
  {
    "name": "Pterodactyl Defense: Sicilian, Unpin",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPPB1PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5 5. Bd2"
  },
  {
    "name": "Pterodactyl Defense: Western, Anhanguera",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/4BN2/PPP2PPP/RN1QKB1R w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7 3. Nf3 c5 4. Be3 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Western, Pterodactyl",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. c3 Bg7 4. d4 Qa5"
  },
  {
    "name": "Pterodactyl Defense: Western, Rhamphorhynchus",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+"
  },
  {
    "name": "Pterodactyl Defense: Western, Siroccopteryx",
    "eco": "B06",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q7/2BNP3/8/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 g6 2. Nf3 Bg7 3. d4 c5 4. Bc4 cxd4 5. Nxd4 Qa5+"
  },
  {
    "name": "Queen's Gambit",
    "eco": "D06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4"
  },
  {
    "name": "Queen's Gambit Accepted",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4"
  },
  {
    "name": "Queen's Gambit Accepted, 2. c4 dxc4 3. Nf3 Nf6",
    "eco": "D23",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6"
  },
  {
    "name": "Queen's Gambit Accepted: Accelerated Mannheim Variation",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp1pppp/8/8/Q1pP4/8/PP2PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Qa4+"
  },
  {
    "name": "Queen's Gambit Accepted: Alekhine Defense",
    "eco": "D22",
    "fen": "rnbqkbnr/1pp1pppp/p7/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 a6"
  },
  {
    "name": "Queen's Gambit Accepted: Alekhine Defense, Borisenko-Furman Variation",
    "eco": "D21",
    "fen": "rnbqkbnr/1pp1pppp/p7/8/2pPP3/5N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 a6 4. e4"
  },
  {
    "name": "Queen's Gambit Accepted: Alekhine Defense, Haberditz Variation",
    "eco": "D22",
    "fen": "rnbqkbnr/2p1pppp/p7/1p6/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 a6 4. e3 b5"
  },
  {
    "name": "Queen's Gambit Accepted: Alekhine Defense: Alatortsev Variation",
    "eco": "D22",
    "fen": "rn1qkbnr/1pp2ppp/p3p3/3P4/2B3b1/4PN2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 a6 4. e3 Bg4 5. Bxc4 e6 6. d5"
  },
  {
    "name": "Queen's Gambit Accepted: Bogoljubov Defense",
    "eco": "D24",
    "fen": "rnbqkb1r/1pp1pppp/p4n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Nc3 a6 5. e4"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, Alekhine System",
    "eco": "D20",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/2pPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 Nf6"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, Greco Variation",
    "eco": "D20",
    "fen": "rnbqkbnr/p1p1pppp/8/1p6/2pPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 b5"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, McDonnell Defense",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/2pPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 e5"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, McDonnell Defense, Somov Gambit",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/2BPP3/8/PP3PPP/RNBQK1NR b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 e5 4. Bxc4"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, Modern Defense",
    "eco": "D20",
    "fen": "r1bqkbnr/ppp1pppp/2n5/8/2pPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 Nc6"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, Rubinstein Defense",
    "eco": "D20",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/2pPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 c5"
  },
  {
    "name": "Queen's Gambit Accepted: Central Variation, Rubinstein Defense, Yefimov Gambit",
    "eco": "D20",
    "fen": "rnbqkbnr/p3pppp/8/1ppP4/2p1P3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 c5 4. d5 b5"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense",
    "eco": "D26",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System",
    "eco": "D28",
    "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1 b kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System (Except Main Line)",
    "eco": "D28",
    "fen": "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/4PN2/PP2QPPP/RNB2RK1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System, Main Line",
    "eco": "D29",
    "fen": "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Bb7"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System, Smyslov Variation",
    "eco": "D29",
    "fen": "r2qk2r/1b1n1ppp/p2bpn2/1pp5/3P4/1BN1PN2/PP2QPPP/R1BR2K1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Bb7 9. Rd1 Nbd7 10. Nc3 Bd6"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Main Line",
    "eco": "D27",
    "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Normal Line",
    "eco": "D26",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Rubinstein Variation",
    "eco": "D27",
    "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/P1BP4/4PN2/1P3PPP/RNBQ1RK1 b kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. a4"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Russian Gambit",
    "eco": "D27",
    "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/2BPP3/5N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e3 Nf6 4. Bxc4 e6 5. Nf3 c5 6. O-O a6 7. e4"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Development Variation",
    "eco": "D26",
    "fen": "r1bqkb1r/pp3ppp/2n1pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O Nc6"
  },
  {
    "name": "Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Exchange Variation",
    "eco": "D26",
    "fen": "rnbqkb1r/pp3ppp/4pn2/8/2Bp4/4PN2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O cxd4"
  },
  {
    "name": "Queen's Gambit Accepted: Classical, Flohr Variation",
    "eco": "D28",
    "fen": "r3kb1r/1bq2ppp/p3pn2/1p1P4/2p5/2N1PN2/PPQ2PPP/R1BR2K1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Nc6 9. Rd1 c4 10. Bc2 Nb4 11. Nc3 Nxc2 12. Qxc2 Bb7 13. d5 Qc7"
  },
  {
    "name": "Queen's Gambit Accepted: Classical, Furman Variation",
    "eco": "D26",
    "fen": "r1bqk2r/5ppp/p1n1pn2/1pb1P3/2B5/5N2/PP2QPPP/RNB2RK1 b kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. Qe2 a6 7. dxc5 Bxc5 8. O-O Nc6 9. e4 b5 10. e5"
  },
  {
    "name": "Queen's Gambit Accepted: Furman Variation",
    "eco": "D27",
    "fen": "rnbqk2r/1p3ppp/p3pn2/2b5/2B5/4PN2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. dxc5 Bxc5"
  },
  {
    "name": "Queen's Gambit Accepted: Godes Variation",
    "eco": "D21",
    "fen": "r1bqkbnr/pppnpppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nd7"
  },
  {
    "name": "Queen's Gambit Accepted: Gunsberg Defense",
    "eco": "D21",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 c5"
  },
  {
    "name": "Queen's Gambit Accepted: Gunsberg Defense, Prianishenmo Gambit",
    "eco": "D24",
    "fen": "rnbqkb1r/pp3ppp/5n2/2ppP3/2p5/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Nc3 c5 5. d5 e6 6. e4 exd5 7. e5"
  },
  {
    "name": "Queen's Gambit Accepted: Janowski-Larsen Variation",
    "eco": "D25",
    "fen": "rn1qkb1r/ppp1pppp/5n2/8/2pP2b1/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Bg4"
  },
  {
    "name": "Queen's Gambit Accepted: Linares Variation",
    "eco": "D20",
    "fen": "rnbqkb1r/p3pppp/5n2/1ppP4/2p1P3/2N5/PP3PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 c5 4. d5 Nf6 5. Nc3 b5"
  },
  {
    "name": "Queen's Gambit Accepted: Mannheim Variation",
    "eco": "D23",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/Q1pP4/5N2/PP2PPPP/RNB1KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Qa4+"
  },
  {
    "name": "Queen's Gambit Accepted: Normal Variation",
    "eco": "D21",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3"
  },
  {
    "name": "Queen's Gambit Accepted: Normal Variation, 3. Nf3 Nf6 4. e3",
    "eco": "D25",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3"
  },
  {
    "name": "Queen's Gambit Accepted: Normal Variation, Traditional System",
    "eco": "D26",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6"
  },
  {
    "name": "Queen's Gambit Accepted: Old Variation",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/4P3/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e3"
  },
  {
    "name": "Queen's Gambit Accepted: Old Variation, Billinger Gambit",
    "eco": "D20",
    "fen": "rnb1kbnr/ppp1qppp/8/8/2Bp4/PQ2P3/1P3PPP/RNB1K1NR b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. a3"
  },
  {
    "name": "Queen's Gambit Accepted: Old Variation, Christensen Gambit",
    "eco": "D20",
    "fen": "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2PN2/PP3PPP/RNB1K2R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. Nf3"
  },
  {
    "name": "Queen's Gambit Accepted: Old Variation, Korchnoi Gambit",
    "eco": "D20",
    "fen": "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP3PPP/RNB2KNR b kq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. Kf1"
  },
  {
    "name": "Queen's Gambit Accepted: Old Variation, Novikov Gambit",
    "eco": "D20",
    "fen": "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP1N1PPP/R1B1K1NR b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. Nd2"
  },
  {
    "name": "Queen's Gambit Accepted: Rosenthal Variation",
    "eco": "D21",
    "fen": "rnbqkbnr/ppp2ppp/4p3/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 e6 3. c4 dxc4"
  },
  {
    "name": "Queen's Gambit Accepted: Saduleto Variation",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4"
  },
  {
    "name": "Queen's Gambit Accepted: Schwartz Defense",
    "eco": "D20",
    "fen": "rnbqkbnr/ppp1p1pp/8/5p2/2pPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. e4 f5"
  },
  {
    "name": "Queen's Gambit Accepted: Showalter Variation",
    "eco": "D24",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Nc3"
  },
  {
    "name": "Queen's Gambit Accepted: Slav Gambit",
    "eco": "D21",
    "fen": "rnbqkbnr/p1p1pppp/8/1p6/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 b5"
  },
  {
    "name": "Queen's Gambit Accepted: Smyslov Variation",
    "eco": "D25",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 g6"
  },
  {
    "name": "Queen's Gambit Accepted: Winawer Defense",
    "eco": "D25",
    "fen": "rn1qkb1r/ppp1pppp/4bn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Be6"
  },
  {
    "name": "Queen's Gambit Declined",
    "eco": "D30",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6"
  },
  {
    "name": "Queen's Gambit Declined, 5. Bg5 Nbd7 6. e3",
    "eco": "D52",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3"
  },
  {
    "name": "Queen's Gambit Declined: 4. Bg5 Be7",
    "eco": "D53",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7"
  },
  {
    "name": "Queen's Gambit Declined: 4. Bg5 Be7, 5. e3 O-O",
    "eco": "D53",
    "fen": "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O"
  },
  {
    "name": "Queen's Gambit Declined: Alapin Variation",
    "eco": "D31",
    "fen": "rnbqkbnr/p1p2ppp/1p2p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 e6 2. c4 b6 3. Nc3 d5"
  },
  {
    "name": "Queen's Gambit Declined: Albin Countergambit, Balogh Variation",
    "eco": "D08",
    "fen": "r1b1kbnr/ppp1qppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 Qe7"
  },
  {
    "name": "Queen's Gambit Declined: Albin Countergambit, Janowski Variation",
    "eco": "D08",
    "fen": "r1bqkbnr/ppp3pp/2n2p2/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 f6"
  },
  {
    "name": "Queen's Gambit Declined: Albin Countergambit, Krenosz Variation",
    "eco": "D08",
    "fen": "r3k1nr/ppp1qppp/2n5/4P3/1bPp4/5N1P/PP1BPPP1/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 Bg4 6. h3 Bxf3 7. Nxf3 Bb4+ 8. Bd2 Qe7"
  },
  {
    "name": "Queen's Gambit Declined: Alekhine Variation",
    "eco": "D51",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. c4 e6 2. Nc3 d5 3. d4 Nf6 4. Bg5 Nbd7 5. Nf3 c6 6. e4"
  },
  {
    "name": "Queen's Gambit Declined: Anti-Tartakower Variation",
    "eco": "D55",
    "fen": "rnbq1rk1/ppp1bpp1/4pB1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bxf6"
  },
  {
    "name": "Queen's Gambit Declined: Anti-Tartakower Variation, Petrosian Variation",
    "eco": "D55",
    "fen": "r1bq1rk1/pp1n1pp1/2p1pb1p/8/2BP4/2N1PN2/PP3PPP/2RQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bxf6 Bxf6 7. e3 O-O 8. Rc1 c6 9. Bd3 Nd7 10. O-O dxc4 11. Bxc4"
  },
  {
    "name": "Queen's Gambit Declined: Barmen Variation",
    "eco": "D37",
    "fen": "r1bqkb1r/pppn1ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Nbd7"
  },
  {
    "name": "Queen's Gambit Declined: Been-Koomen Variation",
    "eco": "D50",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Defense: 7. cxd5",
    "eco": "D52",
    "fen": "r1b1kb1r/pp1n1ppp/2p1pn2/q2P2B1/3P4/2N1PN2/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Defense: Argentine Variation",
    "eco": "D52",
    "fen": "r1b2rk1/pp1n1ppp/2p1pn2/q2p4/1bPP3B/2N1P3/PPQN1PPP/R3KB1R b KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. Nf3 Qa5 7. Nd2 Bb4 8. Qc2 O-O 9. Bh4"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Defense: Bogoljubov Variation",
    "eco": "D52",
    "fen": "r1b1k2r/pp1n1ppp/2p1pn2/q2p2B1/1bPP4/2N1P3/PPQN1PPP/R3KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. Nd2 Bb4 8. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Defense: Capablanca Variation",
    "eco": "D52",
    "fen": "r1b1kb1r/pp1n1ppp/2p1pB2/q2p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. Nf3 Qa5 7. Bxf6"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Defense: Rubinstein Variation",
    "eco": "D52",
    "fen": "r1b1kb1r/pp1n1ppp/2p1pn2/q5B1/2pP4/2N1P3/PP1N1PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. Nd2 dxc4"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Defense: Yugoslav Variation",
    "eco": "D52",
    "fen": "r1b1kb1r/pp1n1ppp/2p1p3/q2n2B1/3P4/2N1PN2/PP3PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. cxd5 Nxd5"
  },
  {
    "name": "Queen's Gambit Declined: Cambridge Springs Variation",
    "eco": "D52",
    "fen": "r1b1kb1r/pp1n1ppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5"
  },
  {
    "name": "Queen's Gambit Declined: Capablanca",
    "eco": "D30",
    "fen": "rnbqkb1r/ppp2pp1/4pn1p/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Bg5 h6"
  },
  {
    "name": "Queen's Gambit Declined: Capablanca Variation",
    "eco": "D30",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/4PN2/PP1N1PPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. c4 d5 4. Bg5 c6 5. Nbd2 Nbd7 6. e3"
  },
  {
    "name": "Queen's Gambit Declined: Capablanca, Anti-Cambridge Springs Variation",
    "eco": "D51",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/P1N1P3/1P3PPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. a3"
  },
  {
    "name": "Queen's Gambit Declined: Charousek (Petrosian) Variation",
    "eco": "D31",
    "fen": "rnbqk1nr/ppp1bppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7"
  },
  {
    "name": "Queen's Gambit Declined: Charousek (Petrosian) Variation, Miladinovic Gambit",
    "eco": "D31",
    "fen": "rnbqk1nr/ppp1bppp/4p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. e4 dxe4 5. f3"
  },
  {
    "name": "Queen's Gambit Declined: Exchange Variation",
    "eco": "D35",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Exchange Variation, Positional Variation",
    "eco": "D35",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5"
  },
  {
    "name": "Queen's Gambit Declined: Exchange Variation, Positional Variation, 4. cxd5 exd5 5. Bg5 c6",
    "eco": "D35",
    "fen": "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 c6"
  },
  {
    "name": "Queen's Gambit Declined: Exchange Variation, Reshevsky Variation",
    "eco": "D36",
    "fen": "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PPQ1PPPP/R3KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 c6 6. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Exchange Variation, Saemisch Variation",
    "eco": "D35",
    "fen": "r1bqkb1r/pppn1ppp/5n2/3p4/3P1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Nbd7 5. cxd5 exd5 6. Bf4"
  },
  {
    "name": "Queen's Gambit Declined: Exchange, Chameleon Variation",
    "eco": "D35",
    "fen": "r1bqrnk1/ppp1bppp/5n2/3p2B1/3P4/2NBP3/PPQ1NPPP/2KR3R b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 Nbd7 8. Qc2 Re8 9. Nge2 Nf8 10. O-O-O"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack",
    "eco": "D35",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bf4"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, 4. Nc3 Be7 5. Bf4",
    "eco": "D37",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, 9. Rd1 Qa5 10. a3",
    "eco": "D37",
    "fen": "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/3RKB1R b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2 Nc6 9. Rd1 Qa5 10. a3"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, 9. a3 Qa5 10. O-O-O",
    "eco": "D37",
    "fen": "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/2KR1B1R b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2 Nc6 9. a3 Qa5 10. O-O-O"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, Fianchetto Defense",
    "eco": "D37",
    "fen": "rnbq1rk1/p1p1bppp/1p2pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bf4 O-O 6. e3 b6"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, Main Line",
    "eco": "D37",
    "fen": "rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, Orthodox Defense",
    "eco": "D37",
    "fen": "rnbq1rk1/pp2bppp/2p1pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bf4 O-O 6. e3 c6"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense",
    "eco": "D37",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 Nbd7"
  },
  {
    "name": "Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense, Blockade Line",
    "eco": "D37",
    "fen": "r1bq1rk1/pppnbppp/4pn2/2Pp4/3P1B2/2N1PN2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Nf3 Be7 5. Bf4 O-O 6. e3 Nbd7 7. c5"
  },
  {
    "name": "Queen's Gambit Declined: Hastings Variation",
    "eco": "D30",
    "fen": "rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/1QN2N2/PP2PPPP/R3KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bxf6 Qxf6 7. Qb3"
  },
  {
    "name": "Queen's Gambit Declined: Janowski Variation",
    "eco": "D31",
    "fen": "rnbqkbnr/1pp2ppp/p3p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 a6"
  },
  {
    "name": "Queen's Gambit Declined: Knight Defense, Alekhine Gambit",
    "eco": "D51",
    "fen": "r1bqkb1r/pppn1pp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Nbd7 5. Bg5 h6 6. Bh4 dxc4"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense",
    "eco": "D53",
    "fen": "rnbqk2r/ppp1bppp/4p3/3p2B1/2PPn3/2N1P3/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 Ne4"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense, 6. Bh4 O-O 7. e3 Ne4",
    "eco": "D56",
    "fen": "rnbq1rk1/ppp1bpp1/4p2p/3p4/2PPn2B/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 Ne4"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense, Bernstein Variation",
    "eco": "D57",
    "fen": "rnb2rk1/ppp2pp1/3q3p/3p4/3P4/1QP1PN2/P4PPP/R3KB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 h6 6. Bh4 O-O 7. Nf3 Ne4 8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3 exd5 11. Qb3 Qd6"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense, Bernstein Variation, Mar del Plata Gambit",
    "eco": "D57",
    "fen": "rn1r2k1/ppp1qpp1/4b2p/3p4/2PP4/1Q2PN2/P4PPP/R3KB1R w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 Ne4 8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3 exd5 11. Qb3 Rd8 12. c4 Be6"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense, Main Line",
    "eco": "D57",
    "fen": "rnb2rk1/ppp1qpp1/4p2p/3P4/3P4/2P1PN2/P4PPP/R2QKB1R b KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 Ne4 8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense, Teichmann Variation",
    "eco": "D56",
    "fen": "rnb2rk1/ppp1qpp1/4p2p/3p4/2PPn3/2N1PN2/PPQ2PPP/R3KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3 Ne4 8. Bxe7 Qxe7 9. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Lasker Defense: Russian Variation",
    "eco": "D56",
    "fen": "r4rk1/pp1bqpp1/2n1pn1p/2p5/2BP4/2N1PN2/PPQ2PPP/R2R2K1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 Ne4 8. Bxe7 Qxe7 9. Qc2 Nf6 10. Bd3 dxc4 11. Bxc4 c5 12. O-O Nc6 13. Rfd1 Bd7"
  },
  {
    "name": "Queen's Gambit Declined: Manhattan Variation",
    "eco": "D51",
    "fen": "r1bqk2r/pppn1ppp/4pn2/3p2B1/1bPP4/2N1P3/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 Bb4"
  },
  {
    "name": "Queen's Gambit Declined: Miles Variation",
    "eco": "D53",
    "fen": "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N2N2/PPQ1PPPP/R3KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Modern Variation",
    "eco": "D50",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5"
  },
  {
    "name": "Queen's Gambit Declined: Modern Variation, Heral Variation",
    "eco": "D53",
    "fen": "rnbqk2r/ppp1bppp/4pB2/3p4/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6"
  },
  {
    "name": "Queen's Gambit Declined: Modern Variation, Normal Line",
    "eco": "D55",
    "fen": "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3"
  },
  {
    "name": "Queen's Gambit Declined: Modern, Knight Defense",
    "eco": "D51",
    "fen": "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7"
  },
  {
    "name": "Queen's Gambit Declined: Modern, Knight Defense, 4. Bg5 Nbd7 5. e3",
    "eco": "D51",
    "fen": "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3"
  },
  {
    "name": "Queen's Gambit Declined: Modern, Knight Defense, 4. Bg5 Nbd7 5. e3 c6",
    "eco": "D51",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6"
  },
  {
    "name": "Queen's Gambit Declined: Neo-Orthodox Variation",
    "eco": "D54",
    "fen": "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/2RQKBNR b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 O-O 6. Rc1"
  },
  {
    "name": "Queen's Gambit Declined: Neo-Orthodox Variation, 5. Bg5 O-O 6. e3 h6",
    "eco": "D55",
    "fen": "rnbq1rk1/ppp1bpp1/4pn1p/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6"
  },
  {
    "name": "Queen's Gambit Declined: Neo-Orthodox Variation, Main Line",
    "eco": "D55",
    "fen": "rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3"
  },
  {
    "name": "Queen's Gambit Declined: Normal Defense",
    "eco": "D35",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense",
    "eco": "D60",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Alekhine Variation",
    "eco": "D67",
    "fen": "r1b2rk1/pp1nqppp/2p1p3/3n4/2BPN3/4PN2/PP3PPP/2RQK2R b K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. Ne4"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Botvinnik Variation",
    "eco": "D60",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2NBPN2/PP3PPP/R2QK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Bd3"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Capablanca System",
    "eco": "D67",
    "fen": "r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP4/2N1PN2/PP3PPP/2RQK2R w K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Capablanca Variation",
    "eco": "D63",
    "fen": "r1bq1rk1/p1pnbppp/1p3n2/1B1p2B1/3P4/2N1PN2/PP3PPP/2RQK2R b K",
    "moves": "1. Nf3 d5 2. d4 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 b6 8. cxd5 exd5 9. Bb5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation",
    "eco": "D68",
    "fen": "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/3Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation, 12. Rxc3 e5 13. Qc2",
    "eco": "D68",
    "fen": "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PPQ2PPP/5RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation, 12. Rxc3 e5 13. Qb1",
    "eco": "D68",
    "fen": "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/1Q3RK1 b -",
    "moves": "1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. Qb1"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation, 13. dxe5 Nxe5 14. Nxe5 Qxe5",
    "eco": "D69",
    "fen": "r1b2rk1/pp3ppp/2p5/4q3/2B5/2R1P3/PP3PPP/3Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. dxe5 Nxe5 14. Nxe5 Qxe5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Fianchetto Variation",
    "eco": "D66",
    "fen": "r1bq1rk1/p2nbppp/2p1pn2/1p4B1/2BP4/2N1PN2/PP3PPP/2RQK2R w K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c6 5. Nf3 Be7 6. e3 Nbd7 7. Rc1 O-O 8. Bd3 dxc4 9. Bxc4 b5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Henneberger Variation",
    "eco": "D63",
    "fen": "r1bq1rk1/1ppnbppp/p3pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 a6"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Janowski Variation",
    "eco": "D67",
    "fen": "r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP3P/2N1PN2/PP3PP1/2RQK2R b K",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. h4"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Main Line",
    "eco": "D63",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Main Line, 6. e3 Nbd7 7. Rc1 c6",
    "eco": "D63",
    "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Main Line, 10. Bxe7 Qxe7 11. O-O",
    "eco": "D67",
    "fen": "r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQ1RK1 b -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Pillsbury Variation",
    "eco": "D63",
    "fen": "r1bq1rk1/p1pnbppp/1p3n2/3p2B1/3P4/2NBPN2/PP3PPP/2RQK2R b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 b6 8. cxd5 exd5 9. Bd3"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rauzer Variation",
    "eco": "D60",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/1QN1PN2/PP3PPP/R3KB1R b KQ",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Qb3"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack",
    "eco": "D64",
    "fen": "r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R w K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2 a6"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack, 7. Rc1 c6 8. Qc2 Ne4",
    "eco": "D64",
    "fen": "r1bq1rk1/pp1nbppp/2p1p3/3p2B1/2PPn3/2N1PN2/PPQ2PPP/2R1KB1R w K",
    "moves": "1. Nf3 d5 2. d4 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2 Ne4"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack, 8. a3 a6 9. Qc2",
    "eco": "D64",
    "fen": "r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/P1N1PN2/1PQ2PPP/2R1KB1R b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Nf3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. a3 a6 9. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack, 8. Qc2 a6 9. cxd5",
    "eco": "D65",
    "fen": "r1bq1rk1/1p1nbppp/p1p1pn2/3P2B1/3P4/2N1PN2/PPQ2PPP/2R1KB1R b K",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2 a6 9. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation",
    "eco": "D61",
    "fen": "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/R3KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation, Flohr Line",
    "eco": "D62",
    "fen": "r1bq1rk1/pp1nbppp/4pn2/2pP2B1/3P4/2N1PN2/PPQ2PPP/R3KB1R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Qc2 c5 8. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense: Bd3 Line",
    "eco": "D66",
    "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2NBPN2/PP3PPP/2RQK2R b K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense: Bd3 Line, 9. Bxc4 Nd5 10. Bxe7 Qxe7",
    "eco": "D67",
    "fen": "r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQK2R w K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense: Rubinstein Attack, with Rc1",
    "eco": "D64",
    "fen": "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2"
  },
  {
    "name": "Queen's Gambit Declined: Orthodox Defense: Swiss, Karlsbad Variation",
    "eco": "D63",
    "fen": "r1bq1rk1/1ppnbppp/p3pn2/3P2B1/3P4/2N1PN2/PP3PPP/2RQKB1R b K",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 a6 8. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Pillsbury Attack",
    "eco": "D55",
    "fen": "rn1q1rk1/pbp1bppp/1p3n2/3pN1B1/3P4/2NBP3/PP3PPP/R2QK2R b KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 d5 5. cxd5 exd5 6. Bg5 Be7 7. e3 O-O 8. Bd3 Bb7 9. Ne5"
  },
  {
    "name": "Queen's Gambit Declined: Pseudo-Tarrasch Variation",
    "eco": "D50",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Pseudo-Tarrasch Variation, Canal Variation",
    "eco": "D50",
    "fen": "rnb1kb1r/pp3ppp/1q2pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. cxd5 Qb6"
  },
  {
    "name": "Queen's Gambit Declined: Pseudo-Tarrasch Variation, Primitive Pillsbury Variation",
    "eco": "D50",
    "fen": "rnbqkb1r/pp3ppp/4pn2/3p2B1/2PQ4/2N2N2/PP2PPPP/R3KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. Nf3 cxd4 6. Qxd4"
  },
  {
    "name": "Queen's Gambit Declined: Queen's Knight Variation",
    "eco": "D31",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3"
  },
  {
    "name": "Queen's Gambit Declined: Ragozin Defense",
    "eco": "D38",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4"
  },
  {
    "name": "Queen's Gambit Declined: Ragozin Defense, Alekhine Variation",
    "eco": "D38",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p4/QbPP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Qa4+"
  },
  {
    "name": "Queen's Gambit Declined: Ragozin Defense, Vienna Variation",
    "eco": "D39",
    "fen": "rnbqk2r/ppp2ppp/4pn2/6B1/1bpP4/2N2N2/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Bg5 dxc4"
  },
  {
    "name": "Queen's Gambit Declined: Rochlin Variation",
    "eco": "D51",
    "fen": "r1b1kb1r/pp1n1ppp/2p1pn2/q2p4/2PP4/2N2N2/PP1BPPPP/2RQKB1R b Kkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. Nf3 c6 6. Rc1 Qa5 7. Bd2"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Slav, Abrahams Variation",
    "eco": "D31",
    "fen": "rnbqk1nr/5ppp/2p1p3/pp6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. a4 Bb4 6. e3 b5 7. Bd2 a5"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Slav, Junge Variation",
    "eco": "D31",
    "fen": "rnb1k1nr/p4ppp/1qp1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nf3 c6 4. Nc3 dxc4 5. a4 Bb4 6. e3 b5 7. Bd2 Qb6"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Slav, Koomen Variation",
    "eco": "D31",
    "fen": "rnb1k1nr/p3qppp/2p1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. e3 b5 6. a4 Bb4 7. Bd2 Qe7"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Slav, Meran",
    "eco": "D48",
    "fen": "r1bqkb1r/3n1ppp/p3pn2/1pp5/3PP3/2NB1N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch Defense",
    "eco": "D40",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Exchange Variation",
    "eco": "D41",
    "fen": "rnbqkb1r/pp3ppp/4p3/2pn4/3PP3/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e4"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Main Line",
    "eco": "D42",
    "fen": "r1bqkb1r/pp3ppp/2n1p3/2pn4/3P4/2NBPN2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e3 Nc6 7. Bd3"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation",
    "eco": "D40",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. Bg5"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation, 5. cxd5 Nxd5 6. e3",
    "eco": "D41",
    "fen": "rnbqkb1r/pp3ppp/4p3/2pn4/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e3"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Symmetrical Variation",
    "eco": "D40",
    "fen": "r1bq1rk1/pp3ppp/2nbpn2/2pp4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w -",
    "moves": "1. c4 Nf6 2. Nc3 e6 3. Nf3 d5 4. e3 c5 5. d4 Nc6 6. Bd3 Bd6 7. O-O O-O"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch, 5. cxd5",
    "eco": "D41",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch, Kmoch Variation",
    "eco": "D41",
    "fen": "rnbq1rk1/pp3ppp/4p3/1B6/3PP3/5N2/P2Q1PPP/R3K2R b KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 cxd4 8. cxd4 Bb4+ 9. Bd2 Bxd2+ 10. Qxd2 O-O 11. Bb5"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch, Krause Variation",
    "eco": "D50",
    "fen": "rnbqkb1r/1p3ppp/p4n2/1N1pp1B1/Q1P5/2N5/PP2PPPP/R3KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. Nf3 cxd4 6. Nxd4 e5 7. Ndb5 a6 8. Qa4"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch, Levenfish Variation",
    "eco": "D40",
    "fen": "r1b2rk1/pp2qppp/2n1pn2/2bp4/2P1P3/2NB1N2/PP2QPPP/R1B2RK1 b -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. e3 Nc6 6. Bd3 Bd6 7. O-O O-O 8. Qe2 Qe7 9. dxc5 Bxc5 10. e4"
  },
  {
    "name": "Queen's Gambit Declined: Semi-Tarrasch, San Sebastian Variation",
    "eco": "D41",
    "fen": "rnb1k2r/pp3ppp/4p3/q7/1b1PP3/5N2/P2B1PPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 c5 7. Nf3 cxd4 8. cxd4 Bb4+ 9. Bd2 Qa5"
  },
  {
    "name": "Queen's Gambit Declined: Semmering Variation",
    "eco": "D30",
    "fen": "r1bqkb1r/pp1n1ppp/4pn2/2pp4/2PP4/3BPN2/PP1N1PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2 Nbd7 6. Bd3 c5"
  },
  {
    "name": "Queen's Gambit Declined: Slav, Amsterdam Variation",
    "eco": "D12",
    "fen": "rn1qkb1r/pp1n1ppp/4p3/3pNb2/3P4/2N1P3/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 Bf5 4. c4 c6 5. cxd5 cxd5 6. Nc3 e6 7. Ne5 Nfd7"
  },
  {
    "name": "Queen's Gambit Declined: Slav, Dutch Variation",
    "eco": "D19",
    "fen": "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 b kq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O"
  },
  {
    "name": "Queen's Gambit Declined: Slav, Dutch, Saemisch Variation",
    "eco": "D19",
    "fen": "rn1q1rk1/pp3ppp/2p1p3/5b2/PbBPn1P1/2N1PN2/1P2QP1P/R1B2RK1 b -",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2 Ne4 10. g4"
  },
  {
    "name": "Queen's Gambit Declined: Slav, Landau Variation",
    "eco": "D12",
    "fen": "rnq1kb1r/pp3ppp/4pn2/3p1b2/3P4/NQ2PN2/PP1B1PPP/R3KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Qb3 Qc8 7. Bd2 e6 8. Na3"
  },
  {
    "name": "Queen's Gambit Declined: Slav, Smyslov Variation",
    "eco": "D16",
    "fen": "r2qkb1r/pp2pppp/n1p2n2/8/P1pPP1b1/2N2N2/1P3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Na6 6. e4 Bg4"
  },
  {
    "name": "Queen's Gambit Declined: Spielmann Variation",
    "eco": "D30",
    "fen": "rnbqkb1r/pp3p1p/2p1pnp1/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. e3 c6 5. Nbd2 g6"
  },
  {
    "name": "Queen's Gambit Declined: Stonewall Variation",
    "eco": "D30",
    "fen": "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/3BPN2/PP1N1PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2 Ne4 6. Bd3 f5"
  },
  {
    "name": "Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch",
    "eco": "D30",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nf3 c5"
  },
  {
    "name": "Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch Bishop Attack",
    "eco": "D30",
    "fen": "rnbqkbnr/pp3ppp/8/2pp2B1/3P4/5N2/PP2PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nf3 c5 4. cxd5 exd5 5. Bg5"
  },
  {
    "name": "Queen's Gambit Declined: Tarrasch Defense: 4. cxd5 exd5",
    "eco": "D32",
    "fen": "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5"
  },
  {
    "name": "Queen's Gambit Declined: Tarrasch, Stoltz Variation",
    "eco": "D34",
    "fen": "r2q1rk1/p3bppp/1pn1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/2RQ1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nf3 c5 4. cxd5 exd5 5. g3 Nc6 6. Bg2 Nf6 7. O-O Be7 8. Nc3 O-O 9. Bg5 Be6 10. Rc1 b6"
  },
  {
    "name": "Queen's Gambit Declined: Tartakower Defense",
    "eco": "D58",
    "fen": "rnbq1rk1/p1p1bpp1/1p2pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3 b6"
  },
  {
    "name": "Queen's Gambit Declined: Tartakower Defense, Makogonov Exchange Variation",
    "eco": "D59",
    "fen": "rnbq1rk1/p1p1bpp1/1p2p2p/3n4/3P3B/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. cxd5 Nxd5"
  },
  {
    "name": "Queen's Gambit Declined: Tartakower Variation",
    "eco": "D59",
    "fen": "rn3rk1/p1p1qpp1/1p2b2p/3p4/3P4/4PN2/PP3PPP/2RQKB1R w K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6"
  },
  {
    "name": "Queen's Gambit Declined: Tartakower Variation, Exchange Variation",
    "eco": "D57",
    "fen": "rnbq1rk1/p1p1bpp1/1p3n1p/3p4/3P3B/2N1PN2/PP3PPP/R2QKB1R w KQ",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. cxd5 exd5"
  },
  {
    "name": "Queen's Gambit Declined: Three Knights Variation",
    "eco": "D37",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3"
  },
  {
    "name": "Queen's Gambit Declined: Traditional Variation",
    "eco": "D30",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Bg5"
  },
  {
    "name": "Queen's Gambit Declined: Uhlmann Variation",
    "eco": "D30",
    "fen": "rnbq1rk1/ppp1bpp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/2RQKB1R w K",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. Rc1 dxc4"
  },
  {
    "name": "Queen's Gambit Declined: Vienna Variation",
    "eco": "D44",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 dxc4"
  },
  {
    "name": "Queen's Gambit Declined: Vienna Variation, 3. Nf3 d5 4. Bg5 Bb4+",
    "eco": "D30",
    "fen": "rnbqk2r/ppp2ppp/4pn2/3p2B1/1bPP4/5N2/PP2PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Bg5 Bb4+"
  },
  {
    "name": "Queen's Gambit Declined: Vienna Variation, Quiet Variation",
    "eco": "D44",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 dxc4 5. e3"
  },
  {
    "name": "Queen's Gambit Declined: Westphalian Variation",
    "eco": "D51",
    "fen": "r1bqk2r/pp1n1ppp/4pn2/2pp2B1/1bPP4/2N1PN2/PP3PPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Bg5 Nbd7 6. e3 c5"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit",
    "eco": "D08",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e5"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Fianchetto Variation",
    "eco": "D09",
    "fen": "r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Fianchetto Variation, Be6 Line",
    "eco": "D09",
    "fen": "r2qkbnr/ppp2ppp/2n1b3/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Be6"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Fianchetto Variation, Bf5 Line",
    "eco": "D09",
    "fen": "r2qkbnr/ppp2ppp/2n5/4Pb2/2Pp4/5NP1/PP2PP1P/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Bf5"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Fianchetto Variation, Bg4 Line",
    "eco": "D09",
    "fen": "r2qkbnr/ppp2ppp/2n5/4P3/2Pp2b1/5NP1/PP2PP1P/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Bg4"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Lasker Trap",
    "eco": "D08",
    "fen": "rnbqk1nr/ppp2ppp/8/4P3/1bP5/4p3/PP1B1PPP/RN1QKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. e3 Bb4+ 5. Bd2 dxe3"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Modern Line",
    "eco": "D09",
    "fen": "r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Normal Line",
    "eco": "D08",
    "fen": "rnbqkbnr/ppp2ppp/8/4P3/2Pp4/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3"
  },
  {
    "name": "Queen's Gambit Refused: Albin Countergambit, Tartakower Defense",
    "eco": "D08",
    "fen": "rnbqkbnr/pp3ppp/8/2p1P3/2Pp4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 c5"
  },
  {
    "name": "Queen's Gambit Refused: Austrian Attack, Salvio Countergambit",
    "eco": "D06",
    "fen": "rnbqkbnr/pp2pppp/8/2P5/2Pp4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c5 3. dxc5 d4"
  },
  {
    "name": "Queen's Gambit Refused: Austrian Defense",
    "eco": "D06",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c5"
  },
  {
    "name": "Queen's Gambit Refused: Austrian Defense, Gusev Countergambit",
    "eco": "D06",
    "fen": "rnbqkb1r/pp2pppp/5n2/2pP4/3P4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c5 3. cxd5 Nf6"
  },
  {
    "name": "Queen's Gambit Refused: Austrian Defense, Haberditz Variation",
    "eco": "D06",
    "fen": "rnb1kb1r/pp2pppp/8/q1PP4/4n3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c5 3. cxd5 Nf6 4. e4 Nxe4 5. dxc5 Qa5+"
  },
  {
    "name": "Queen's Gambit Refused: Baltic Defense",
    "eco": "D02",
    "fen": "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Bf5"
  },
  {
    "name": "Queen's Gambit Refused: Baltic Defense, Argentinian Gambit",
    "eco": "D31",
    "fen": "r2qkbnr/pp2pppp/2n5/8/Q2P4/8/PP2PPPP/RbB1KBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Bf5 3. cxd5 Bxb1 4. Qa4+ c6 5. dxc6 Nxc6"
  },
  {
    "name": "Queen's Gambit Refused: Baltic Defense, Pseudo-Chigorin",
    "eco": "D02",
    "fen": "r2qkbnr/ppp2ppp/2n1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 Bf5 3. Nc3 e6 4. Nf3 Nc6"
  },
  {
    "name": "Queen's Gambit Refused: Baltic Defense, Pseudo-Slav",
    "eco": "D02",
    "fen": "rn1qkbnr/pp3ppp/2p1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Bf5 3. c4 e6 4. Nc3 c6"
  },
  {
    "name": "Queen's Gambit Refused: Baltic Defense, Queen Attack",
    "eco": "D02",
    "fen": "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 d5 2. c4 Bf5 3. Qb3"
  },
  {
    "name": "Queen's Gambit Refused: Baltic Defense, Queen Attack Deferred",
    "eco": "D02",
    "fen": "rn1qkbnr/ppp2ppp/4p3/3p1b2/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq",
    "moves": "1. d4 d5 2. c4 Bf5 3. Nc3 e6 4. Qb3"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense",
    "eco": "D07",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, 2. c4 Nc6 3. Nc3",
    "eco": "D07",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nc3"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, 2. c4 Nc6 3. Nc3 dxc4",
    "eco": "D07",
    "fen": "r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nc3 dxc4"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Exchange Variation",
    "eco": "D07",
    "fen": "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. cxd5 Qxd5"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Exchange Variation, Costa's Line",
    "eco": "D07",
    "fen": "r1b1k1nr/ppp2ppp/2n5/3q4/3p4/2B1P3/PP2NPPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. cxd5 Qxd5 4. e3 e5 5. Nc3 Bb4 6. Bd2 Bxc3 7. Bxc3 exd4 8. Ne2"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Janowski Variation",
    "eco": "D07",
    "fen": "r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nc3 dxc4 4. Nf3"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Lazard Gambit",
    "eco": "D06",
    "fen": "r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nf3 e5"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Main Line",
    "eco": "D07",
    "fen": "r2qkbnr/ppp1pppp/2n5/3p4/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nf3 Bg4"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Main Line, Alekhine Variation",
    "eco": "D07",
    "fen": "r2qkbnr/ppp1pppp/2n5/3p4/Q1PP2b1/5N2/PP2PPPP/RNB1KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nf3 Bg4 4. Qa4"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Modern Gambit",
    "eco": "D06",
    "fen": "r1bqkb1r/ppp1pppp/2n2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nc3 dxc4 4. Nf3 Nf6"
  },
  {
    "name": "Queen's Gambit Refused: Chigorin Defense, Tartakower Gambit",
    "eco": "D06",
    "fen": "r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Nc6 3. Nc3 e5"
  },
  {
    "name": "Queen's Gambit Refused: Marshall Defense",
    "eco": "D06",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Nf6"
  },
  {
    "name": "Queen's Gambit Refused: Marshall Defense, Tan Gambit",
    "eco": "D06",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3P4/3P4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 Nf6 3. cxd5 c6"
  },
  {
    "name": "Queen's Gambit Refused: Zilbermints Gambit",
    "eco": "D06",
    "fen": "rnbqkbnr/p1p1pppp/8/1p1p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 b5"
  },
  {
    "name": "Queen's Indian Accelerated",
    "eco": "A50",
    "fen": "rnbqkb1r/p1pppppp/1p3n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 b6"
  },
  {
    "name": "Queen's Indian Defense",
    "eco": "A47",
    "fen": "rnbqkb1r/p1pppppp/1p3n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 b6"
  },
  {
    "name": "Queen's Indian Defense, 2. c4 e6 3. Nf3 b6",
    "eco": "E12",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6"
  },
  {
    "name": "Queen's Indian Defense: Anti-Queen's Indian System",
    "eco": "E17",
    "fen": "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. Nc3"
  },
  {
    "name": "Queen's Indian Defense: Capablanca Variation",
    "eco": "E16",
    "fen": "rn1qk2r/pbpp1ppp/1p2pn2/8/1bPP4/5NP1/PP2PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation",
    "eco": "E17",
    "fen": "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation, Polugaevsky Gambit",
    "eco": "E17",
    "fen": "rn1q1rk1/pbppbppp/1p3n2/3p4/2P4N/6P1/PP2PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. d5 exd5 8. Nh4"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation, Taimanov Gambit",
    "eco": "E17",
    "fen": "rn1q1rk1/pbppbppp/1p3n2/3p4/2PN4/6P1/PP2PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. d5 exd5 8. Nd4"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation, Tiviakov Defense",
    "eco": "E17",
    "fen": "r2q1rk1/pbppbppp/np2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. Nf3 Nf6 2. c4 e6 3. g3 b6 4. Bg2 Bb7 5. O-O Be7 6. Nc3 O-O 7. d4 Na6"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation, Traditional Variation",
    "eco": "E17",
    "fen": "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation, Traditional Variation, Main Line",
    "eco": "E19",
    "fen": "rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 Ne4 8. Qc2 Nxc3 9. Qxc3"
  },
  {
    "name": "Queen's Indian Defense: Classical Variation, Traditional Variation, Nimzowitsch Line",
    "eco": "E18",
    "fen": "rn1q1rk1/pbp1bppp/1p2pn2/3p4/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 d5"
  },
  {
    "name": "Queen's Indian Defense: Euwe Variation",
    "eco": "E17",
    "fen": "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. b3"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Traditional",
    "eco": "E15",
    "fen": "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation",
    "eco": "E15",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Check Variation",
    "eco": "E15",
    "fen": "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P3PP1P/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Check Variation, Intermezzo Line",
    "eco": "E15",
    "fen": "rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Check Variation, Modern Line",
    "eco": "E15",
    "fen": "rn2k2r/p1ppqppp/bp2pn2/8/1bPP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Qe7"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Kramnik Variation",
    "eco": "E17",
    "fen": "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQR1K1 b -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Re1"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation",
    "eco": "E15",
    "fen": "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Nimzowitsch Attack",
    "eco": "E15",
    "fen": "rn1qkb1r/p1pp1ppp/bp2pn2/8/Q1PP4/5NP1/PP2PP1P/RNB1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. Qa4"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Quiet Line",
    "eco": "E15",
    "fen": "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1P3NP1/P3PP1P/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Timman's Line",
    "eco": "E15",
    "fen": "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1Q3NP1/PP2PP1P/RNB1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. Qb3"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Rubinstein Variation",
    "eco": "E16",
    "fen": "rn1qkb1r/pb1p1ppp/1p3n2/2pp4/2P4N/6P1/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 c5 6. d5 exd5 7. Nh4"
  },
  {
    "name": "Queen's Indian Defense: Fianchetto Variation, Saemisch Variation",
    "eco": "E15",
    "fen": "rn1qkb1r/pb1p1ppp/1p2pn2/2p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 c5"
  },
  {
    "name": "Queen's Indian Defense: Kasparov Variation",
    "eco": "E12",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3"
  },
  {
    "name": "Queen's Indian Defense: Kasparov Variation, 5. Bg5 h6 6. Bh4 Bb7",
    "eco": "E13",
    "fen": "rn1qk2r/pbpp1pp1/1p2pn1p/8/1bPP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4 5. Bg5 h6 6. Bh4 Bb7"
  },
  {
    "name": "Queen's Indian Defense: Kasparov Variation, Botvinnik Attack",
    "eco": "E12",
    "fen": "rn1qkb1r/pbpp1p2/1p2p2p/6pn/2PP4/2N2NB1/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb7 5. Bg5 h6 6. Bh4 g5 7. Bg3 Nh5"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation",
    "eco": "E17",
    "fen": "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Andersson Variation",
    "eco": "E12",
    "fen": "rn1qkb1r/pbpp1ppp/1p2p3/8/2PPn3/P1N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 Ne4"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Classical Variation",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p3n2/3p4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 exd5"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Hedgehog Variation",
    "eco": "E17",
    "fen": "rn1qkb1r/pbpp1p1p/1p2pnp1/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 g6"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Kasparov Attack",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. Qc2"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Main Line",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Marco Defense",
    "eco": "E12",
    "fen": "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 Be7"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Modern Variation",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Petrosian Attack",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N1PN2/1P3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. e3"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Polovodin Gambit",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2p3/3n4/3PP3/P1N2N2/1P3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb7 5. a3 d5 6. cxd5 Nxd5 7. e4"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Rashkovsky Attack",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2p3/3n4/Q2P4/P1N2N2/1P2PPPP/R1B1KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. Qa4+"
  },
  {
    "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Romanishin Attack",
    "eco": "E12",
    "fen": "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P1BPPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. Bd2"
  },
  {
    "name": "Queen's Indian Defense: Marienbad System, Berg Variation",
    "eco": "A47",
    "fen": "rn1qkb1r/pb1ppppp/1p3n2/8/2PQ4/5NP1/PP2PPBP/RNB1K2R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 b6 3. g3 Bb7 4. Bg2 c5 5. c4 cxd4 6. Qxd4"
  },
  {
    "name": "Queen's Indian Defense: Miles Variation",
    "eco": "E12",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP1B2/5N2/PP2PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Bf4"
  },
  {
    "name": "Queen's Indian Defense: Opocensky Variation",
    "eco": "E17",
    "fen": "rn1qk2r/pbppbppp/1p2p3/8/2PPn3/2N2NP1/PP1BPPBP/R2QK2R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. Nc3 Ne4 7. Bd2"
  },
  {
    "name": "Queen's Indian Defense: Petrosian Variation",
    "eco": "E12",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3"
  },
  {
    "name": "Queen's Indian Defense: Petrosian Variation, Farago Defense",
    "eco": "E11",
    "fen": "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1PQ1PPPP/RNB1KB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Ba6 5. Qc2 Bb7"
  },
  {
    "name": "Queen's Indian Defense: Riumin Variation",
    "eco": "E16",
    "fen": "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP1BPPBP/RN1QK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+ 6. Bd2 Be7"
  },
  {
    "name": "Queen's Indian Defense: Spassky System",
    "eco": "E14",
    "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. e3"
  },
  {
    "name": "Queen's Indian Defense: Traditional Variation",
    "eco": "E17",
    "fen": "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7"
  },
  {
    "name": "Queen's Indian Defense: Yates Variation",
    "eco": "E16",
    "fen": "rn1qk2r/1bpp1ppp/1p2pn2/p7/1bPP4/5NP1/PP1BPPBP/RN1QK2R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 a5 5. g3 b6 6. Bg2 Bb7"
  },
  {
    "name": "Queen's Indian, Averbakh Variation",
    "eco": "E14",
    "fen": "rn1q1rk1/pb1pbppp/1p2pn2/8/2PN4/1P1BP3/PB3PPP/RN1Q1RK1 b -",
    "moves": "1. Nf3 c5 2. b3 Nf6 3. Bb2 e6 4. e3 Be7 5. d4 O-O 6. Bd3 b6 7. O-O Bb7 8. c4 cxd4 9. Nxd4"
  },
  {
    "name": "Queen's Indian, Buerger Variation",
    "eco": "E15",
    "fen": "rn1qkb1r/pb1p1ppp/1p3n2/2pp2N1/2P5/6P1/PP2PPBP/RNBQK2R b KQkq",
    "moves": "1. Nf3 Nf6 2. c4 b6 3. d4 e6 4. g3 Bb7 5. Bg2 c5 6. d5 exd5 7. Ng5"
  },
  {
    "name": "Queen's Pawn",
    "eco": "A40",
    "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4"
  },
  {
    "name": "Queen's Pawn, 1... d6",
    "eco": "A41",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d6"
  },
  {
    "name": "Queen's Pawn Game",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5"
  },
  {
    "name": "Queen's Pawn Game, 2. e3",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. e3"
  },
  {
    "name": "Queen's Pawn Game, 2. e3 Nf6",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4P3/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. e3 Nf6"
  },
  {
    "name": "Queen's Pawn Game, Zukertort Variation",
    "eco": "D05",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P2PN2/P1PN1PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3 c5 3. e3 Nf6 4. Nbd2 e6 5. b3"
  },
  {
    "name": "Queen's Pawn Game: Anglo-Slav Opening",
    "eco": "A41",
    "fen": "rnbqkbnr/pp2pppp/2pp4/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c6 2. c4 d6"
  },
  {
    "name": "Queen's Pawn Game: Anti-Torre",
    "eco": "D02",
    "fen": "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. d4 Bg4"
  },
  {
    "name": "Queen's Pawn Game: Barry Attack, Gruenfeld Variation",
    "eco": "D02",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p4/3P1B2/2N1PN2/PPP1BPPP/R2QK2R b KQ",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Be2"
  },
  {
    "name": "Queen's Pawn Game: Chandler Gambit",
    "eco": "D02",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/3p4/5NP1/PPP1PPBP/RNBQK2R b KQkq",
    "moves": "1. d4 d5 2. Nf3 c5 3. g3 cxd4 4. Bg2"
  },
  {
    "name": "Queen's Pawn Game: Chigorin Variation",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. Nc3"
  },
  {
    "name": "Queen's Pawn Game: Chigorin Variation, 2. Nf3 Nc6",
    "eco": "D02",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nc6"
  },
  {
    "name": "Queen's Pawn Game: Chigorin Variation, 2. Nc3 d5",
    "eco": "D01",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5"
  },
  {
    "name": "Queen's Pawn Game: Colle System",
    "eco": "D04",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3"
  },
  {
    "name": "Queen's Pawn Game: Colle System, Anti-Colle",
    "eco": "D04",
    "fen": "rn1qkb1r/ppp1pppp/5n2/3p1b2/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 Bf5"
  },
  {
    "name": "Queen's Pawn Game: Colle System, Gruenfeld Formation",
    "eco": "A48",
    "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 g6 4. Bd3 Bg7"
  },
  {
    "name": "Queen's Pawn Game: Englund Gambit",
    "eco": "A40",
    "fen": "r1b1kb1r/ppppq1pp/2n2n2/3Q4/8/5N2/PPP1PPPP/RNB1KB1R w KQkq",
    "moves": "1. d4 e5 2. dxe5 Nc6 3. Nf3 Qe7 4. Qd5 f6 5. exf6 Nxf6"
  },
  {
    "name": "Queen's Pawn Game: Franco-Sicilian Defense",
    "eco": "C00",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 c5"
  },
  {
    "name": "Queen's Pawn Game: Huebsch Gambit",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/8/3p4/3Pn3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. e4 Nxe4"
  },
  {
    "name": "Queen's Pawn Game: Krause Variation",
    "eco": "D02",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 c5"
  },
  {
    "name": "Queen's Pawn Game: Levitsky Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p2B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 d5 2. Bg5"
  },
  {
    "name": "Queen's Pawn Game: Levitsky Attack, Euwe Variation, Modern Line",
    "eco": "D00",
    "fen": "rnb1kbnr/pp2ppp1/1qp4p/3p4/3P3B/5N2/PPP1PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 c6 3. Bg5 h6 4. Bh4 Qb6"
  },
  {
    "name": "Queen's Pawn Game: Levitsky Attack, Welling Variation",
    "eco": "D00",
    "fen": "rn1qkbnr/ppp1pppp/8/3p2B1/3P2b1/8/PPP1PPPP/RN1QKBNR w KQkq",
    "moves": "1. d4 d5 2. Bg5 Bg4"
  },
  {
    "name": "Queen's Pawn Game: Liedmann Gambit",
    "eco": "A43",
    "fen": "rnbqkbnr/pp1ppppp/8/8/2Pp4/4P3/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. d4 c5 2. c4 cxd4 3. e3"
  },
  {
    "name": "Queen's Pawn Game: London System",
    "eco": "D02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. Bf4"
  },
  {
    "name": "Queen's Pawn Game: London System, Pterodactyl Variation",
    "eco": "D02",
    "fen": "rnb1k1nr/pp1pppbp/6p1/q7/3P1B2/5N2/PP2PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 g6 2. Nf3 Bg7 3. Bf4 c5 4. c3 cxd4 5. cxd4 Qa5+"
  },
  {
    "name": "Queen's Pawn Game: Mason Attack",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 d5 2. Bf4"
  },
  {
    "name": "Queen's Pawn Game: Morris Countergambit",
    "eco": "D00",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/3PPB2/8/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. d4 d5 2. Bf4 c5 3. e4"
  },
  {
    "name": "Queen's Pawn Game: Steinitz Countergambit",
    "eco": "D00",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq",
    "moves": "1. d4 d5 2. Bf4 c5"
  },
  {
    "name": "Queen's Pawn Game: Stonewall Attack",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. d4 d5 2. e3 Nf6 3. Bd3"
  },
  {
    "name": "Queen's Pawn Game: Symmetrical Variation",
    "eco": "D02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6"
  },
  {
    "name": "Queen's Pawn Game: Symmetrical Variation, Pseudo-Catalan",
    "eco": "D02",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. g3"
  },
  {
    "name": "Queen's Pawn Game: Torre Attack",
    "eco": "D03",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. Bg5"
  },
  {
    "name": "Queen's Pawn Game: Torre Attack, Breyer Variation",
    "eco": "D03",
    "fen": "rnb1kb1r/pp3ppp/1q2pn2/2pp2B1/3P4/2P1PN2/PP3PPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Bg5 d5 4. e3 c5 5. c3 Qb6"
  },
  {
    "name": "Queen's Pawn Game: Torre Attack, Gossip Variation",
    "eco": "D03",
    "fen": "rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/5N2/PPP1PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. Bg5 Ne4"
  },
  {
    "name": "Queen's Pawn Game: Torre Attack, Gruenfeld Variation",
    "eco": "D03",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. Bg5 g6"
  },
  {
    "name": "Queen's Pawn Game: Torre Attack, Gruenfeld Variation, Main Line",
    "eco": "D03",
    "fen": "rnbq1rk1/ppp1ppbp/5np1/3p2B1/3P4/4PN2/PPPN1PPP/R2QKB1R w KQ",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. Nbd2 d5 5. e3 O-O"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Alburt Defense",
    "eco": "D00",
    "fen": "rn1qkbnr/ppp1pppp/8/3p1b2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. Nc3 Bf5"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Anti-Veresov",
    "eco": "D00",
    "fen": "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. Nc3 Bg4"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Boyce Defense",
    "eco": "D01",
    "fen": "rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/2N5/PPP1PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 Ne4"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Classical Defense",
    "eco": "D01",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Nc3 d5 4. Bg5"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Dutch System",
    "eco": "A80",
    "fen": "rnbqkbnr/ppp1p1pp/8/3p1p2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 f5 2. Nc3 d5"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Fianchetto Defense",
    "eco": "D00",
    "fen": "rnbqk1nr/ppp1ppbp/6p1/3p4/3P4/2N2N2/PPP1PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 g6 2. Nf3 Bg7 3. Nc3 d5"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Richter Variation",
    "eco": "D01",
    "fen": "rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N2P2/PPP1P1PP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 Bf5 4. f3"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Shaviliuk Gambit",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. Nc3 e5"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Shropshire Defense",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1ppp1/8/3p3p/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. Nc3 h5"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Two Knights System",
    "eco": "D01",
    "fen": "r1bqkb1r/pppnpppp/5n2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 Nbd7 4. Nf3"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Two Knights System, Gruenfeld Defense",
    "eco": "D01",
    "fen": "r1bqkb1r/pppnpp1p/5np1/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 Nbd7 4. Nf3 g6"
  },
  {
    "name": "Queen's Pawn Game: Veresov Attack, Veresov Variation",
    "eco": "D01",
    "fen": "rn1qkb1r/ppp1pppp/5B2/3p1b2/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 Bf5 4. Bxf6"
  },
  {
    "name": "Queen's Pawn Game: Zilbermints Countergambit",
    "eco": "D02",
    "fen": "rnbqkb1r/p1p1pppp/5n2/1p1p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. c4 b5"
  },
  {
    "name": "Queen's Pawn Game: Zukertort Variation",
    "eco": "D02",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3"
  },
  {
    "name": "Queen's Pawn Game: Zurich Gambit",
    "eco": "D00",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. g4"
  },
  {
    "name": "Queen's Pawn Opening: Veresov Attack, Irish Gambit",
    "eco": "D00",
    "fen": "rnbqkbnr/pp2pppp/8/2pp4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. Nc3 c5"
  },
  {
    "name": "Queen's Pawn Opening: Veresov, Richter Attack",
    "eco": "D00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N2P2/PPP1P1PP/R1BQKBNR b KQkq",
    "moves": "1. d4 Nf6 2. f3 d5 3. Nc3"
  },
  {
    "name": "Queen's Pawn, Mengarini Attack",
    "eco": "E60",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PPQ1PPPP/RNB1KBNR b KQkq",
    "moves": "1. d4 Nf6 2. c4 g6 3. Qc2"
  },
  {
    "name": "Rat Defense: Accelerated Gurgenidze",
    "eco": "B07",
    "fen": "rnbqkbnr/pp2pp1p/2pp2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 d6 3. Nc3 c6"
  },
  {
    "name": "Rat Defense: Antal Defense",
    "eco": "B07",
    "fen": "r1bqkbnr/pppnpppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d6 2. d4 Nd7"
  },
  {
    "name": "Rat Defense: Balogh Defense",
    "eco": "B07",
    "fen": "rnbqkbnr/ppp1p1pp/3p4/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d6 2. d4 f5"
  },
  {
    "name": "Rat Defense: English Rat",
    "eco": "A41",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d6 2. c4 e5"
  },
  {
    "name": "Rat Defense: English Rat, Lisbon Gambit",
    "eco": "A41",
    "fen": "r1bqkbnr/ppp2ppp/2np4/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d6 2. c4 e5 3. dxe5 Nc6"
  },
  {
    "name": "Rat Defense: Fuller Gambit",
    "eco": "B07",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3P4/5P2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 d6 2. f4 d5 3. exd5 Nf6"
  },
  {
    "name": "Rat Defense: Harmonist",
    "eco": "B07",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/4PP2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 d6 2. f4"
  },
  {
    "name": "Rat Defense: Petruccioli Attack",
    "eco": "B07",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/4P2P/8/PPPP1PP1/RNBQKBNR b KQkq",
    "moves": "1. e4 d6 2. h4"
  },
  {
    "name": "Rat Defense: Small Center Defense",
    "eco": "C00",
    "fen": "rnbqkbnr/ppp2ppp/3pp3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 e6 2. e4 d6"
  },
  {
    "name": "Rat Defense: Spike Attack",
    "eco": "B06",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 d6 2. g4"
  },
  {
    "name": "Reti Opening",
    "eco": "A04",
    "fen": "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3"
  },
  {
    "name": "Reti Opening, 1... d5",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5"
  },
  {
    "name": "Reti Opening, 1... Nf6",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nf6"
  },
  {
    "name": "Reti Opening, 2. c4",
    "eco": "A09",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. c4"
  },
  {
    "name": "Reti Opening: Advance Variation",
    "eco": "A09",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 d4"
  },
  {
    "name": "Reti Opening: Advance Variation, Michel Gambit",
    "eco": "A09",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/1PPp4/5N2/P2PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 d4 3. b4 c5"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Bled Variation",
    "eco": "A12",
    "fen": "rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq",
    "moves": "1. Nf3 d5 2. b3 Nf6 3. Bb2 g6 4. c4 c6"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Bogoljubov Variation",
    "eco": "A12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2P5/1P3N2/P2PPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. c4 c6 3. b3"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Bogoljubov Variation, 2. c4 c6 3. b3 Bg4",
    "eco": "A12",
    "fen": "rn1qkbnr/pp2pppp/2p5/3p4/2P3b1/1P3N2/P2PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 c6 3. b3 Bg4"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Bogoljubov Variation, 3. b3 d5 4. Bb2",
    "eco": "A12",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c6 3. b3 d5 4. Bb2"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Bogoljubov Variation, Stonewall Line",
    "eco": "A12",
    "fen": "rnbq1rk1/pp2bppp/2p1pn2/3p4/2P5/1P3NP1/PB1PPPBP/RN1Q1RK1 b -",
    "moves": "1. Nf3 d5 2. c4 e6 3. g3 Nf6 4. Bg2 Be7 5. O-O O-O 6. b3 c6 7. Bb2"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Capablanca Variation",
    "eco": "A12",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3N2/PB1PPPPP/RN1QKB1R w KQkq",
    "moves": "1. c4 Nf6 2. Nf3 c6 3. b3 d5 4. Bb2 Bg4"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, London Defensive System",
    "eco": "A12",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3NP1/P2PPP1P/RNBQKB1R w KQkq",
    "moves": "1. c4 Nf6 2. g3 c6 3. Nf3 d5 4. b3 Bf5"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, New York System",
    "eco": "A12",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. c4 c6 3. b3 d5 4. Bb2 Bf5"
  },
  {
    "name": "Reti Opening: Anglo-Slav Variation, Torre System",
    "eco": "A12",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3NP1/P2PPP1P/RNBQKB1R w KQkq",
    "moves": "1. c4 Nf6 2. g3 c6 3. Nf3 d5 4. b3 Bg4"
  },
  {
    "name": "Reti Opening: Penguin Variation",
    "eco": "A09",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKBR1 b Qkq",
    "moves": "1. Nf3 d5 2. c4 d4 3. Rg1"
  },
  {
    "name": "Reti Opening: Reti Accepted",
    "eco": "A09",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 dxc4"
  },
  {
    "name": "Reti Opening: Reti Gambit, Keres Variation",
    "eco": "A09",
    "fen": "rn1qkbnr/ppp1pppp/4b3/8/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 dxc4 3. e3 Be6"
  },
  {
    "name": "Reti Opening: Reversed Blumenfeld Gambit",
    "eco": "A09",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/1PPp4/4PN2/P2P1PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. c4 d4 3. e3 c5 4. b4"
  },
  {
    "name": "Reti Opening: Zilbermints Gambit",
    "eco": "A09",
    "fen": "rnbqkbnr/p1p1pppp/8/1p1p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d5 2. c4 b5"
  },
  {
    "name": "Richter-Veresov Attack",
    "eco": "D01",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5"
  },
  {
    "name": "Richter-Veresov Attack, 2. Nc3 d5 3. Bg5 Bf5",
    "eco": "D01",
    "fen": "rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N5/PPP1PPPP/R2QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 Bf5"
  },
  {
    "name": "Robatsch (Modern) Defense",
    "eco": "B06",
    "fen": "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 g6 2. d4 Bg7"
  },
  {
    "name": "Robatsch Defense",
    "eco": "A41",
    "fen": "rn1qk1nr/ppp1ppbp/3p2p1/8/2PPP1b1/5N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d6 2. Nf3 g6 3. c4 Bg7 4. e4 Bg4"
  },
  {
    "name": "Rubinstein Opening",
    "eco": "D05",
    "fen": "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P1BPN2/P1P2PPP/RNBQK2R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. b3"
  },
  {
    "name": "Rubinstein Opening: Bogoljubov Defense",
    "eco": "D05",
    "fen": "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 w -",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. b3 Nc6 6. O-O Bd6 7. Bb2 O-O"
  },
  {
    "name": "Rubinstein Opening: Classical Defense",
    "eco": "D05",
    "fen": "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 w -",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. b3 Nc6 6. O-O Be7 7. Bb2 O-O"
  },
  {
    "name": "Rubinstein Opening: Semi-Slav Defense",
    "eco": "D05",
    "fen": "r1bq1rk1/pppn1ppp/3bpn2/3p4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 b -",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3 Bd6 5. O-O O-O 6. b3 Nbd7 7. Bb2"
  },
  {
    "name": "Russian Game: Classical Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4"
  },
  {
    "name": "Russian Game: Classical Attack, Berger Variation",
    "eco": "C42",
    "fen": "r2qk2r/ppp1b1pp/2n5/3p1p2/3Pn1b1/2PB1N2/PP1N1PPP/R1BQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O Nc6 8. Re1 Bg4 9. c3 f5 10. Nbd2"
  },
  {
    "name": "Russian Game: Classical Attack, Chigorin Variation",
    "eco": "C42",
    "fen": "r1bqk2r/ppp1bppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O Nc6 8. Re1"
  },
  {
    "name": "Russian Game: Classical Attack, Chigorin Variation, Browne Attack",
    "eco": "C42",
    "fen": "r1bqk2r/ppp1bppp/8/3P4/1n1Pn3/3B1N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nb4 9. cxd5"
  },
  {
    "name": "Russian Game: Classical Attack, Chigorin Variation, Main Line",
    "eco": "C42",
    "fen": "r1bqk2r/ppp1bppp/8/3p4/1nPPn3/5N2/PP2BPPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nb4 9. Be2"
  },
  {
    "name": "Russian Game: Classical Attack, Closed Variation",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 Nf6"
  },
  {
    "name": "Russian Game: Classical Attack, Jaenisch Variation",
    "eco": "C42",
    "fen": "r1bqk2r/ppp1bppp/2n5/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4"
  },
  {
    "name": "Russian Game: Classical Attack, Krause Variation",
    "eco": "C42",
    "fen": "r2qk2r/ppp1b1pp/2n5/3p1p2/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. Re1 Bg4 9. c3 f5 10. c4"
  },
  {
    "name": "Russian Game: Classical Attack, Maroczy Variation",
    "eco": "C42",
    "fen": "r2qk2r/ppp3pp/2n5/3p1p2/2PPn1bb/3B1N2/PP3PPP/RNBQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O Nc6 8. Re1 Bg4 9. c3 f5 10. c4 Bh4"
  },
  {
    "name": "Russian Game: Classical Attack, Marshall Trap",
    "eco": "C42",
    "fen": "rn1q1rk1/ppp3pp/8/3P1p2/3Pn1b1/3B1N2/PP3PPb/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 Bg4 9. cxd5 f5 10. Re1 Bxh2+"
  },
  {
    "name": "Russian Game: Classical Attack, Marshall Variation",
    "eco": "C42",
    "fen": "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6"
  },
  {
    "name": "Russian Game: Classical Attack, Marshall Variation, Chinese Gambit",
    "eco": "C42",
    "fen": "rn1q1rk1/pp3ppp/2pb4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6 9. Re1 Bg4"
  },
  {
    "name": "Russian Game: Classical Attack, Mason Variation",
    "eco": "C42",
    "fen": "rnbq1rk1/ppp1bppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O O-O"
  },
  {
    "name": "Russian Game: Classical Attack, Mason-Showalter Variation",
    "eco": "C42",
    "fen": "r1bqkb1r/ppp2ppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6"
  },
  {
    "name": "Russian Game: Classical Attack, Staunton Variation",
    "eco": "C42",
    "fen": "rnbq1rk1/pp3ppp/2pb4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6"
  },
  {
    "name": "Russian Game: Classical Attack, Tarrasch Variation",
    "eco": "C42",
    "fen": "rn1q1rk1/ppp2ppp/3b4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 Bg4"
  },
  {
    "name": "Russian Game: Cochrane Gambit",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2Npp/3p1n2/8/4P3/8/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7"
  },
  {
    "name": "Russian Game: Cochrane Gambit, Bishop Check Line",
    "eco": "C42",
    "fen": "rnbq1b1r/ppp2kpp/3p1n2/8/2B1P3/8/PPPP1PPP/RNBQK2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7 Kxf7 5. Bc4+"
  },
  {
    "name": "Russian Game: Cochrane Gambit, Center Variation",
    "eco": "C42",
    "fen": "rnbq1b1r/ppp2kpp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKB1R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7 Kxf7 5. d4"
  },
  {
    "name": "Russian Game: Cozio (Lasker) Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPPQPPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Qe2"
  },
  {
    "name": "Russian Game: Damiano Variation",
    "eco": "C42",
    "fen": "rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nxe4"
  },
  {
    "name": "Russian Game: Damiano Variation, Kholmov Gambit",
    "eco": "C42",
    "fen": "rnb1kb1r/ppppqppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nxe4 4. Qe2 Qe7"
  },
  {
    "name": "Russian Game: French Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/4n3/3P1N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d3"
  },
  {
    "name": "Russian Game: Karklins-Martinovsky Variation",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/3N4/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nd3"
  },
  {
    "name": "Russian Game: Kaufmann Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/2P1n3/5N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. c4"
  },
  {
    "name": "Russian Game: Millennium Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/4n3/3B1N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Bd3"
  },
  {
    "name": "Russian Game: Modern Attack",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4"
  },
  {
    "name": "Russian Game: Modern Attack, Bardeleben Variation",
    "eco": "C43",
    "fen": "r1bqkb1r/pppp1ppp/2n5/2n1P3/3N4/8/PPP1QPPP/RNB1KB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Qe2 Nc5 6. Nxd4 Nc6"
  },
  {
    "name": "Russian Game: Modern Attack, Center Attack",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/3Qn3/5N2/PPP2PPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Qxd4"
  },
  {
    "name": "Russian Game: Modern Attack, Center Variation",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/8/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. Bd3"
  },
  {
    "name": "Russian Game: Modern Attack, Murrey Variation",
    "eco": "C43",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. Bd3 Nc6"
  },
  {
    "name": "Russian Game: Modern Attack, Steinitz Variation",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/8/4P3/3pn3/5N2/PPP1QPPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Qe2"
  },
  {
    "name": "Russian Game: Modern Attack, Symmetrical Variation",
    "eco": "C43",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 d5"
  },
  {
    "name": "Russian Game: Modern Attack, Symmetrical Variation, 2. Nf3 Nf6 3. d4 Nxe4",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/8/4p3/3Pn3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4"
  },
  {
    "name": "Russian Game: Modern Attack, Tal Gambit",
    "eco": "C43",
    "fen": "rnbqkb1r/pppp1ppp/8/1B2P3/3pn3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Bb5"
  },
  {
    "name": "Russian Game: Modern Attack, Trifunovic Variation",
    "eco": "C43",
    "fen": "rnbq1rk1/ppp2ppp/8/3pb3/2PPn3/3B4/PP3PPP/RNBQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. Bd3 d5 5. Nxe5 Bd6 6. O-O O-O 7. c4 Bxe5"
  },
  {
    "name": "Russian Game: Moody Gambit",
    "eco": "C42",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1QPPP/RNB1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Qe2 Nc6 4. d4"
  },
  {
    "name": "Russian Game: Nimzowitsch Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p4/8/4n3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Nc3"
  },
  {
    "name": "Russian Game: Paulsen Attack",
    "eco": "C42",
    "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/2N1P3/8/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nc4"
  },
  {
    "name": "Russian Game: Stafford Gambit",
    "eco": "C42",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6"
  },
  {
    "name": "Russian Game: Three Knights Game",
    "eco": "C42",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Nc3"
  },
  {
    "name": "Russian Game: Urusov Gambit",
    "eco": "C42",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nf6 3. Bc4"
  },
  {
    "name": "Ruy Lopez",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5"
  },
  {
    "name": "Ruy Lopez, 2. Nf3 Nc6 3. Bb5 a6",
    "eco": "C70",
    "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6"
  },
  {
    "name": "Ruy Lopez Defense, Halloween Attack",
    "eco": "C65",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2N3/4P3/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. Nxe5"
  },
  {
    "name": "Ruy Lopez: Alapin Defense",
    "eco": "C60",
    "fen": "r1bqk1nr/pppp1ppp/2n5/1B2p3/1b2P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bb4"
  },
  {
    "name": "Ruy Lopez: Alapin Defense, Alapin Gambit",
    "eco": "C60",
    "fen": "r1bqk1nr/ppp2ppp/2p5/b3p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bb4 4. c3 Ba5 5. Bxc6 dxc6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense",
    "eco": "C65",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, 3. Bb5 Nf6 4. O-O",
    "eco": "C65",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Anderssen Variation",
    "eco": "C65",
    "fen": "r1bqkb1r/ppp2ppp/2Bp1n2/4p3/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 d6 5. Bxc6+"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Berlin Wall",
    "eco": "C67",
    "fen": "r2k1b1r/pppb1ppp/2p5/4Pn2/8/2N2N2/PPP2PPP/R1B2RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Bd7"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Beverwijk Variation",
    "eco": "C65",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Closed Bernstein Variation",
    "eco": "C66",
    "fen": "r2qk2r/pppbbppp/2np1n2/1B2p1B1/3PP3/2N2N2/PPP2PPP/R2Q1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bg5"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Closed Showalter Variation",
    "eco": "C66",
    "fen": "r2qk2r/pppbbppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bxc6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Closed Wolf Variation",
    "eco": "C66",
    "fen": "r2qkb1r/pppb1ppp/2np1n2/1B6/3pP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 exd4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Cordel Variation",
    "eco": "C67",
    "fen": "r1bqk2r/p1ppbppp/2p5/4Pn2/8/5N2/PPP1QPPP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nf5"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Duras Variation",
    "eco": "C65",
    "fen": "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/2P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 d6 5. c4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Fishing Pole Variation",
    "eco": "C65",
    "fen": "r1bqkb1r/pppp1ppp/2n5/1B2p3/4P1n1/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Ng4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Hedgehog Variation",
    "eco": "C66",
    "fen": "r2qk2r/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Improved Steinitz Defense",
    "eco": "C66",
    "fen": "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Minckwitz Variation",
    "eco": "C67",
    "fen": "r1bqk2r/ppppbppp/2n5/1B2P3/4n3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. dxe5"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Nyholm Attack",
    "eco": "C65",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d4 exd4 5. O-O"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Pillsbury Variation",
    "eco": "C67",
    "fen": "r1bqk2r/pnppbppp/2p5/4P3/8/1P3N2/P1P1QPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. b3"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Rio Gambit Accepted",
    "eco": "C67",
    "fen": "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Rio de Janeiro Variation",
    "eco": "C67",
    "fen": "r1bqk2r/ppppbppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Rosenthal Variation",
    "eco": "C67",
    "fen": "r1bqkb1r/1ppp1ppp/p1n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 a6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Tarrasch Trap",
    "eco": "C66",
    "fen": "r2q1rk1/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1 O-O"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Trifunovic Variation",
    "eco": "C67",
    "fen": "r1bqk2r/ppp1bppp/2n5/1B1pp3/3Pn3/5N2/PPP1QPPP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 d5"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Winawer Attack",
    "eco": "C67",
    "fen": "r1bqk2r/pnppbppp/2p5/4P3/3N4/8/PPP1QPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. Nd4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, Zukertort Variation",
    "eco": "C67",
    "fen": "r1bqk2r/pnppbppp/2p5/4P3/2P5/5N2/PP2QPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. c4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, l'Hermet Variation",
    "eco": "C67",
    "fen": "r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, l'Hermet Variation, Berlin Wall Defense",
    "eco": "C67",
    "fen": "r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8"
  },
  {
    "name": "Ruy Lopez: Berlin Defense, l'Hermet Variation, Westerinen Line",
    "eco": "C67",
    "fen": "r1bqkb1r/ppp2ppp/2p5/4P3/4n3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Ne4"
  },
  {
    "name": "Ruy Lopez: Berlin Defense: Kaufmann Variation",
    "eco": "C65",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/3PBN2/PPP2PPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. Be3"
  },
  {
    "name": "Ruy Lopez: Berlin Defense: Mortimer Trap",
    "eco": "C65",
    "fen": "r1bqkb1r/pp1pnppp/2p2n2/1B2N3/4P3/3P4/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Ne7 5. Nxe5 c6"
  },
  {
    "name": "Ruy Lopez: Berlin Defense: Mortimer Variation",
    "eco": "C65",
    "fen": "r1bqkb1r/ppppnppp/5n2/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Ne7"
  },
  {
    "name": "Ruy Lopez: Berlin Defense: Rio de Janeiro Variation",
    "eco": "C67",
    "fen": "r1bq1rk1/p1ppbppp/8/2p1P3/3B4/2N5/PPP1QPPP/R3R1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. Nc3 O-O 10. Re1 Nc5 11. Nd4 Ne6 12. Be3 Nxd4 13. Bxd4 c5"
  },
  {
    "name": "Ruy Lopez: Bird Variation",
    "eco": "C61",
    "fen": "r1bqkbnr/pppp1ppp/8/1B2p3/3nP3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nd4"
  },
  {
    "name": "Ruy Lopez: Bird Variation, Paulsen Variation",
    "eco": "C61",
    "fen": "r1bqkb1r/ppppnppp/8/1B6/3pP3/8/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nd4 4. Nxd4 exd4 5. O-O Ne7"
  },
  {
    "name": "Ruy Lopez: Bird's Defense Deferred",
    "eco": "C70",
    "fen": "r1bqkbnr/1ppp1ppp/p7/4p3/B2nP3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nd4"
  },
  {
    "name": "Ruy Lopez: Brentano Gambit",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp1p1p/2n5/1B2p1p1/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 g5"
  },
  {
    "name": "Ruy Lopez: Brix Variation",
    "eco": "C79",
    "fen": "r1bqkb1r/1ppp1p1p/p1n2np1/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O g6"
  },
  {
    "name": "Ruy Lopez: Bulgarian Variation",
    "eco": "C60",
    "fen": "r1bqkbnr/1ppp1ppp/2n5/pB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a5"
  },
  {
    "name": "Ruy Lopez: Central Countergambit",
    "eco": "C79",
    "fen": "r1bqkb1r/1pp2ppp/p1n2n2/3pp3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d5"
  },
  {
    "name": "Ruy Lopez: Classical Defense: Benelux Variation",
    "eco": "C64",
    "fen": "r1bq1rk1/pppp1ppp/1bn2n2/1B2p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6"
  },
  {
    "name": "Ruy Lopez: Classical Defense: Boden Variation",
    "eco": "C64",
    "fen": "r1b1k1nr/ppppqppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 Qe7"
  },
  {
    "name": "Ruy Lopez: Classical Defense: Zaitsev Variation",
    "eco": "C64",
    "fen": "r1bqk1nr/pppp1ppp/8/1Bb1p3/1P1nP3/5N2/P1PP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. O-O Nd4 5. b4"
  },
  {
    "name": "Ruy Lopez: Classical Variation",
    "eco": "C64",
    "fen": "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Central Variation",
    "eco": "C64",
    "fen": "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Charousek Variation",
    "eco": "C64",
    "fen": "r1bqk1nr/pppp1ppp/1bn5/1B2p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 Bb6"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Cordel Gambit",
    "eco": "C64",
    "fen": "r1bqk1nr/pppp2pp/2n5/1Bb1pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 f5"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Konikowski Gambit",
    "eco": "C64",
    "fen": "r1bqk1nr/ppp2ppp/2n5/1Bbpp3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 d5"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Modern Main Line",
    "eco": "C64",
    "fen": "r1bq1rk1/pppp1ppp/1bn2n2/1B2p1B1/3PP3/2P2N2/PP3PPP/RN1Q1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Spanish Wing Gambit",
    "eco": "C64",
    "fen": "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/1P2P3/5N2/P1PP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. b4"
  },
  {
    "name": "Ruy Lopez: Classical Variation, Zukertort Gambit",
    "eco": "C64",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3"
  },
  {
    "name": "Ruy Lopez: Closed",
    "eco": "C88",
    "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3"
  },
  {
    "name": "Ruy Lopez: Closed Berlin Defense: Chigorin Variation",
    "eco": "C66",
    "fen": "r1bqkb1r/pppn1ppp/2np4/1B2p3/3PP3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Nd7"
  },
  {
    "name": "Ruy Lopez: Closed Defense, Alekhine Gambit",
    "eco": "C90",
    "fen": "r4rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P1NQ2/PPB2PPP/R1B1R1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Na5 9. Bc2 c5 10. d4 Qc7 11. Nbd2 O-O 12. Nf1 Bg4 13. Ne3 Bxf3 14. Qxf3"
  },
  {
    "name": "Ruy Lopez: Closed Variations",
    "eco": "C84",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7"
  },
  {
    "name": "Ruy Lopez: Closed Variations, 8. c3 O-O 9. h3",
    "eco": "C92",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Averbakh Variation",
    "eco": "C87",
    "fen": "r1bqk2r/1pp1bppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 d6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Balla Variation",
    "eco": "C88",
    "fen": "r1b1k2r/2q1bppp/p2p1n2/npp1p3/P2PP3/2P2N2/1PB2PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Na5 9. Bc2 c5 10. d4 Qc7 11. a4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Bogoljubov Variation",
    "eco": "C91",
    "fen": "r2q1rk1/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP3PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 Bg4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Borisenko Variation",
    "eco": "C96",
    "fen": "r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nc6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Breyer Defense",
    "eco": "C95",
    "fen": "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP2N/1BP4P/PP3PP1/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nh4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Breyer Defense, 11. Nbd2 Bb7 12. Bc2 c5",
    "eco": "C95",
    "fen": "r2q1rk1/1b1nbppp/p2p1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 c5"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Center Attack",
    "eco": "C84",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Center Attack, Basque Gambit",
    "eco": "C84",
    "fen": "r1bqk2r/1pppbppp/p1n5/4P3/B3n3/2p2N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d4 exd4 7. e5 Ne4 8. c3 dxc3"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Chigorin Defense",
    "eco": "C97",
    "fen": "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Chigorin Defense, 11. d4 Qc7 12. Nbd2 Nc6",
    "eco": "C98",
    "fen": "r1b2rk1/2q1bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Nc6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Chigorin Defense, 12. Nbd2 Nc6 13. dxc5",
    "eco": "C98",
    "fen": "r1b2rk1/2q1bppp/p1np1n2/1pP1p3/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Nc6 13. dxc5"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Closed Defense",
    "eco": "C90",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Closed Defense, 9. h3 Na5 10. Bc2",
    "eco": "C96",
    "fen": "r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Closed Defense, 9. h3 Na5 10. Bc2 c5",
    "eco": "C96",
    "fen": "r1bq1rk1/4bppp/p2p1n2/npp1p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Delayed Exchange",
    "eco": "C85",
    "fen": "r1bqk2r/1pppbppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Bxc6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Flohr System",
    "eco": "C92",
    "fen": "r2q1rk1/1bp1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Bb7"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Kecskemet Variation",
    "eco": "C79",
    "fen": "r2qbrk1/1pp1bppp/p1np1n2/4p3/B2PP3/2P2N2/PP1N1PPP/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. O-O Bd7 6. c3 Nf6 7. d4 Be7 8. Nbd2 O-O 9. Re1 Be8"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Keres Defense",
    "eco": "C92",
    "fen": "r1bq1rk1/2p1bppp/2np1n2/pp2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. h3 a5"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Keres Defense, 8. c3 O-O 9. h3 Nd7",
    "eco": "C92",
    "fen": "r1bq1rk1/2pnbppp/p1np4/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nd7"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Keres Defense, 10. Bc2 c5 11. d4 Nd7",
    "eco": "C96",
    "fen": "r1bq1rk1/3nbppp/p2p4/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nd7"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Kholmov Variation",
    "eco": "C92",
    "fen": "r2q1rk1/2p1bppp/p1npbn2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Be6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Lutikov Variation",
    "eco": "C90",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/2P2N2/PPBP1PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. Bc2"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Martinez Variation",
    "eco": "C78",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d3"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Morphy Attack",
    "eco": "C78",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Nc3"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Pilnik Variation",
    "eco": "C90",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. d3 d6 9. c3"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Rosen Attack",
    "eco": "C88",
    "fen": "r1bqk2r/2p1bppp/p1np1n2/1p2p3/3PP3/1B3N2/PPP2PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. d4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Smyslov Defense",
    "eco": "C93",
    "fen": "r1bq1rk1/2p1bpp1/p1np1n1p/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 h6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Smyslov-Breyer-Zaitsev Hybrid",
    "eco": "C93",
    "fen": "r2qrbk1/1bp2pp1/p1np1n1p/1p2p3/3PP3/PBP2N1P/1P1N1PP1/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Bb7 10. d4 Re8 11. Nbd2 Bf8 12. a3 h6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Suetin Variation",
    "eco": "C90",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/PBP2N2/1P1P1PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. a3"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Trajkovic Counterattack",
    "eco": "C88",
    "fen": "r2qk2r/1bppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 Bb7"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Worrall Attack",
    "eco": "C86",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Qe2"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Worrall Attack, Castling Line",
    "eco": "C86",
    "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Qe2 b5 7. Bb3 O-O"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Worrall Attack, Delayed Castling Line",
    "eco": "C86",
    "fen": "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Qe2 b5 7. Bb3 d6"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Yates Variation",
    "eco": "C91",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/3PP3/1BP2N2/PP3PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Yates Variation, Short Attack",
    "eco": "C91",
    "fen": "r2q1rk1/2p1bppp/p1np1n2/1p2p3/P2PP1b1/1BP2N2/1P3PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 Bg4 10. a4"
  },
  {
    "name": "Ruy Lopez: Closed Variations, Zaitsev System",
    "eco": "C92",
    "fen": "r1bqr1k1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Re8"
  },
  {
    "name": "Ruy Lopez: Closed, 7... O-O",
    "eco": "C88",
    "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O"
  },
  {
    "name": "Ruy Lopez: Closed, 8. c3",
    "eco": "C88",
    "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3"
  },
  {
    "name": "Ruy Lopez: Closed, Anti-Marshall 8. a4",
    "eco": "C88",
    "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4"
  },
  {
    "name": "Ruy Lopez: Closed, Basque Gambit (North Spanish Variation)",
    "eco": "C84",
    "fen": "r1bqk2r/1pppbppp/p1n5/4P3/B2pn3/2P2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d4 exd4 7. e5 Ne4 8. c3"
  },
  {
    "name": "Ruy Lopez: Closed, Breyer, 10. d4",
    "eco": "C95",
    "fen": "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4"
  },
  {
    "name": "Ruy Lopez: Closed, Chigorin, Yugoslav System",
    "eco": "C97",
    "fen": "r3r1k1/2qbbp1p/p2p1np1/npp1p3/3PP3/2P1NN1P/PPB2PP1/R1BQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Bd7 13. Nf1 Rfe8 14. Ne3 g6"
  },
  {
    "name": "Ruy Lopez: Closed, Leonhardt Variation",
    "eco": "C88",
    "fen": "rnb1k2r/2q1bp1p/p2p1n2/1ppPp1p1/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Na5 9. Bc2 c5 10. d4 Qc7 11. h3 Nc6 12. d5 Nb8 13. Nbd2 g5"
  },
  {
    "name": "Ruy Lopez: Closed, Rossolimo Defense",
    "eco": "C96",
    "fen": "r1b2rk1/2q1bppp/p1pp1n2/np2p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. h3 Na5 10. Bc2 c6 11. d4 Qc7"
  },
  {
    "name": "Ruy Lopez: Columbus Variation",
    "eco": "C68",
    "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4"
  },
  {
    "name": "Ruy Lopez: Cozio Defense",
    "eco": "C60",
    "fen": "r1bqkb1r/ppppnppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7"
  },
  {
    "name": "Ruy Lopez: Cozio Defense, Paulsen Variation",
    "eco": "C60",
    "fen": "r1bqkb1r/ppppnp1p/2n3p1/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. Nc3 g6"
  },
  {
    "name": "Ruy Lopez: Cozio Defense, Tartakower Gambit",
    "eco": "C60",
    "fen": "r1bq1rk1/ppp1npbp/2n3p1/1B1p4/3NP3/2N1B3/PPPQ1PPP/R3K2R w KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. d4 exd4 5. Nxd4 Bg7 6. Be3 Nge7 7. Nc3 O-O 8. Qd2 d5"
  },
  {
    "name": "Ruy Lopez: Exchange Variation",
    "eco": "C68",
    "fen": "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Alapin Gambit",
    "eco": "C69",
    "fen": "r2qkbnr/1pp2pp1/p1p5/4p2p/4P1b1/5N1P/PPPP1PP1/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Alekhine Variation",
    "eco": "C68",
    "fen": "r1b1k1nr/1pp2ppp/p1pb4/8/3NP3/8/PPP2PPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd6"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Bronstein Variation",
    "eco": "C69",
    "fen": "r1b1kbnr/1pp2ppp/p1pq4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Qd6"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Gligoric Variation",
    "eco": "C69",
    "fen": "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Keres Variation",
    "eco": "C68",
    "fen": "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nc3"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, King's Bishop Variation",
    "eco": "C68",
    "fen": "r1bqk1nr/1pp2ppp/p1pb4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bd6"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Lutikov Variation",
    "eco": "C68",
    "fen": "r1bqkbnr/2pp1ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 bxc6"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Normal Variation",
    "eco": "C69",
    "fen": "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O"
  },
  {
    "name": "Ruy Lopez: Exchange Variation, Romanovsky Variation",
    "eco": "C68",
    "fen": "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nc3 f6 6. d3"
  },
  {
    "name": "Ruy Lopez: Exchange, Alekhine Variation",
    "eco": "C68",
    "fen": "r3kbnr/1ppb1ppp/p1p5/8/3NP3/8/PPP2PPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd7"
  },
  {
    "name": "Ruy Lopez: Fianchetto Defense",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp1p1p/2n3p1/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 g6"
  },
  {
    "name": "Ruy Lopez: Lucena Variation",
    "eco": "C60",
    "fen": "r1bqk1nr/ppppbppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Be7"
  },
  {
    "name": "Ruy Lopez: Marshall Attack",
    "eco": "C89",
    "fen": "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5"
  },
  {
    "name": "Ruy Lopez: Marshall Attack, Main Line",
    "eco": "C89",
    "fen": "r1bq1rk1/4bppp/p1p5/1p1nR3/3P4/1BP5/PP3PPP/RNBQ2K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4"
  },
  {
    "name": "Ruy Lopez: Marshall Attack, Modern Main Line",
    "eco": "C89",
    "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3"
  },
  {
    "name": "Ruy Lopez: Marshall Attack, Modern Variation",
    "eco": "C89",
    "fen": "r1bq1rk1/4bppp/p1p5/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6"
  },
  {
    "name": "Ruy Lopez: Marshall Attack, Original Marshall Attack",
    "eco": "C89",
    "fen": "r1bq1rk1/2p1bppp/p4n2/1p2R3/8/1BP5/PP1P1PPP/RNBQ2K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6"
  },
  {
    "name": "Ruy Lopez: Marshall Attack, Re3 Variation",
    "eco": "C89",
    "fen": "r1bq1rk1/5ppp/p2b4/1p1p4/3P4/2P1R3/PP3PPP/RNBQ2K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. Bxd5 cxd5 13. d4 Bd6 14. Re3"
  },
  {
    "name": "Ruy Lopez: Marshall Attack, Steiner Variation",
    "eco": "C89",
    "fen": "r1bq1rk1/2p1bppp/p1n2n2/1p1P4/4p3/1BP2N2/PP1P1PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4"
  },
  {
    "name": "Ruy Lopez: Marshall, Main Line, Spassky Variation",
    "eco": "C89",
    "fen": "5rk1/5ppp/p1pbr3/1p1n3q/P2P2b1/1BPQB1P1/1P1N1P1P/R3R1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3 Rae8 17. Nd2 Re6 18. a4 Qh5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense",
    "eco": "C78",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, 5. O-O b5 6. Bb3 d6",
    "eco": "C78",
    "fen": "r1bqkb1r/2p2ppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 d6"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Alapin's Defense Deferred",
    "eco": "C70",
    "fen": "r1bqk1nr/1ppp1ppp/p1n5/4p3/Bb2P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Bb4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Anderssen Variation",
    "eco": "C77",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d3"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Arkhangelsk Variation",
    "eco": "C78",
    "fen": "r2qkb1r/1bpp1ppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Bb7"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Bayreuth Variation",
    "eco": "C77",
    "fen": "r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Bxc6"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Breyer Defense",
    "eco": "C94",
    "fen": "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Breyer Defense, Quiet Variation",
    "eco": "C94",
    "fen": "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d3"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Breyer Defense, Zaitsev Hybrid",
    "eco": "C95",
    "fen": "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Caro Variation",
    "eco": "C70",
    "fen": "r1bqkbnr/2pp1ppp/p1n5/1p2p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Chigorin Defense, Panov System",
    "eco": "C99",
    "fen": "r1b2rk1/2q1bppp/p2p1n2/np2p3/3PP3/5N1P/PPBN1PP1/R1BQR1K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Classical Defense Deferred",
    "eco": "C70",
    "fen": "r1bqk1nr/1ppp1ppp/p1n5/2b1p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Bc5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Cozio Defense",
    "eco": "C70",
    "fen": "r1bqkb1r/1pppnppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nge7"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Duras Variation",
    "eco": "C77",
    "fen": "r1bqkb1r/1pp2ppp/p1np1n2/4p3/B1P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d3 d6 6. c4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Fianchetto Defense Deferred",
    "eco": "C70",
    "fen": "r1bqkbnr/1ppp1p1p/p1n3p1/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 g6"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Graz Variation",
    "eco": "C70",
    "fen": "r1bqk1nr/2pp1ppp/p1n5/1pb1p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 Bc5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Jaffe Gambit",
    "eco": "C74",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. c3"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Mackenzie Variation",
    "eco": "C77",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense",
    "eco": "C71",
    "fen": "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 4. Ba4 d6 5. c3",
    "eco": "C74",
    "fen": "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 4. Ba4 d6 5. c4",
    "eco": "C71",
    "fen": "r1bqkbnr/1pp2ppp/p1np4/4p3/B1P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 4. Ba4 d6 5. Nc3",
    "eco": "C71",
    "fen": "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Nc3"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 4. Ba4 d6 5. O-O",
    "eco": "C72",
    "fen": "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. O-O"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 4. Ba4 d6 5. c3 Bd7",
    "eco": "C75",
    "fen": "r2qkbnr/1ppb1ppp/p1np4/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 Bd7"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 5. Bxc6+ bxc6 6. d4",
    "eco": "C73",
    "fen": "r1bqkbnr/2p2ppp/p1pp4/4p3/3PP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Bxc6+ bxc6 6. d4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 5. c3 Bd7 6. d4 Nge7",
    "eco": "C75",
    "fen": "r2qkb1r/1ppbnppp/p1np4/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 Bd7 6. d4 Nge7"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 5. Bxc6+ bxc6 6. d4 f6",
    "eco": "C73",
    "fen": "r1bqkbnr/2p3pp/p1pp1p2/4p3/3PP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Bxc6+ bxc6 6. d4 f6"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, 6. exf5 Bxf5 7. O-O",
    "eco": "C74",
    "fen": "r2qkbnr/1pp3pp/p1np4/4pb2/B7/2P2N2/PP1P1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 f5 6. exf5 Bxf5 7. O-O"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Fianchetto Variation",
    "eco": "C76",
    "fen": "r2qkbnr/1ppb1p1p/p1np2p1/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. c3 a6 5. Ba4 d6 6. d4 Bd7"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Siesta Variation",
    "eco": "C74",
    "fen": "r1bqkbnr/1pp3pp/p1np4/4pp2/B3P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 f5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Neo-Arkhangelsk Variation",
    "eco": "C78",
    "fen": "r1bqk2r/1ppp1ppp/p1n2n2/2b1p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Bc5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Norwegian Variation",
    "eco": "C70",
    "fen": "r1bqkbnr/2pp1ppp/p7/np2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 Na5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Norwegian Variation, Nightingale Gambit",
    "eco": "C70",
    "fen": "r1bqkbnr/2pp1Bpp/p7/np2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 Na5 6. Bxf7+"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Schliemann Defense Deferred",
    "eco": "C70",
    "fen": "r1bqkbnr/1ppp2pp/p1n5/4pp2/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 f5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Schliemann Defense Deferred, Jaenisch Gambit Deferred",
    "eco": "C70",
    "fen": "r1bqkbnr/1ppp2pp/p1n5/4pP2/B7/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 f5 5. exf5"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Steinitz Deferred",
    "eco": "C79",
    "fen": "r1bqkb1r/1pp2ppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Steinitz Deferred, 6. Bxc6+ bxc6 7. d4 Nxe4",
    "eco": "C79",
    "fen": "r1bqkb1r/2p2ppp/p1pp4/4p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6 6. Bxc6+ bxc6 7. d4 Nxe4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Tarrasch Variation",
    "eco": "C77",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Nc3"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Tartakower Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPPQPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. Qe2"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Wing Attack",
    "eco": "C78",
    "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Be7 7. a4"
  },
  {
    "name": "Ruy Lopez: Morphy Defense, Wormald Attack",
    "eco": "C77",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Qe2"
  },
  {
    "name": "Ruy Lopez: Noah's Ark Trap",
    "eco": "C71",
    "fen": "r1bqkbnr/5ppp/p2p4/1pp5/3QP3/1B6/PPP2PPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 d6 6. d4 Nxd4 7. Nxd4 exd4 8. Qxd4 c5"
  },
  {
    "name": "Ruy Lopez: Noah's Ark Trap, 9. Nxd4 exd4 10. Qxd4 c5",
    "eco": "C88",
    "fen": "r1bqk2r/4bppp/p2p1n2/1pp5/3QP3/1B6/PPP2PPP/RNB1R1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. d4 Nxd4 9. Nxd4 exd4 10. Qxd4 c5"
  },
  {
    "name": "Ruy Lopez: Nuernberg Variation",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp2pp/2n2p2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f6"
  },
  {
    "name": "Ruy Lopez: Old Steinitz Defense: Semi-Duras Variation",
    "eco": "C62",
    "fen": "r2qkbnr/pppb1ppp/2np4/1B2p3/2PPP3/5N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. c4"
  },
  {
    "name": "Ruy Lopez: Open Berlin Defense: Showalter Variation",
    "eco": "C67",
    "fen": "r1bqkb1r/pppp1ppp/2nn4/4p3/B2P4/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Ba4"
  },
  {
    "name": "Ruy Lopez: Open Berlin Defense: l'Hermet Variation",
    "eco": "C67",
    "fen": "r1bqkb1r/pppp1ppp/2nn4/1B2P3/8/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. dxe5"
  },
  {
    "name": "Ruy Lopez: Open Variation, Skipworth Gambit",
    "eco": "C80",
    "fen": "r1bqkb1r/1pp2ppp/p1n5/3pp3/B3n3/5N2/PPPP1PPP/RNBQR1K1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. Re1 d5"
  },
  {
    "name": "Ruy Lopez: Open Variations",
    "eco": "C80",
    "fen": "r1bqkb1r/2pp1ppp/p1n5/1p2p3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3"
  },
  {
    "name": "Ruy Lopez: Open Variations, 7. Bb3 d5 8. dxe5",
    "eco": "C80",
    "fen": "r1bqkb1r/2p2ppp/p1n5/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Berlin Variation",
    "eco": "C82",
    "fen": "r2qkb1r/2p2ppp/p1n1b3/1pnpP3/8/1BP2N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Nc5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Bernstein Variation",
    "eco": "C80",
    "fen": "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPPN1PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2"
  },
  {
    "name": "Ruy Lopez: Open Variations, Bernstein Variation, Luther Line",
    "eco": "C80",
    "fen": "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1B3N2/PPPN1PPP/R1B1QRK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2 Bc5 10. Qe1"
  },
  {
    "name": "Ruy Lopez: Open Variations, Breslau Variation",
    "eco": "C83",
    "fen": "r2q1rk1/2p1bppp/p3b3/1p1pn3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Re1 O-O 11. Nd4 Nxe5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Classical Defense",
    "eco": "C83",
    "fen": "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7"
  },
  {
    "name": "Ruy Lopez: Open Variations, Classical Defense, Main Line",
    "eco": "C83",
    "fen": "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 Be7 7. Re1 b5 8. Bb3 d5 9. dxe5 Be6 10. c3"
  },
  {
    "name": "Ruy Lopez: Open Variations, Dilworth Variation",
    "eco": "C82",
    "fen": "r2q1rk1/2p2ppp/p1n1b3/1pbpP3/8/2P2N2/PPBN1nPP/R1BQ1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Nbd2 O-O 11. Bc2 Nxf2"
  },
  {
    "name": "Ruy Lopez: Open Variations, Friess Attack",
    "eco": "C80",
    "fen": "r1bqkb1r/2pp1ppp/p1n5/1p2N3/B2Pn3/8/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Nxe5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Harksen Gambit",
    "eco": "C80",
    "fen": "r1bqkb1r/2p2ppp/p1n5/1p1pp3/2PPn3/1B3N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. c4"
  },
  {
    "name": "Ruy Lopez: Open Variations, Howell Attack",
    "eco": "C81",
    "fen": "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP1QPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Qe2"
  },
  {
    "name": "Ruy Lopez: Open Variations, Howell Attack, 9. Qe2 Be7 10. c4",
    "eco": "C81",
    "fen": "r2qk2r/2p1bppp/p1n1b3/1p1pP3/2P1n3/1B3N2/PP2QPPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Qe2 Be7 10. c4"
  },
  {
    "name": "Ruy Lopez: Open Variations, Italian Variation",
    "eco": "C82",
    "fen": "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Karpov Gambit",
    "eco": "C80",
    "fen": "r2qkb1r/2p2ppp/p1n1b3/1pn1P1N1/3p4/1BP5/PP1N1PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2 Nc5 10. c3 d4 11. Ng5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Main Line",
    "eco": "C80",
    "fen": "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6"
  },
  {
    "name": "Ruy Lopez: Open Variations, Malkin Variation",
    "eco": "C83",
    "fen": "r2q1rk1/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1NQPPP/R1B2RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Nbd2 O-O 11. Qe2"
  },
  {
    "name": "Ruy Lopez: Open Variations, Motzko Attack",
    "eco": "C82",
    "fen": "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Qd3"
  },
  {
    "name": "Ruy Lopez: Open Variations, Open Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4"
  },
  {
    "name": "Ruy Lopez: Open Variations, Richter Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/2pp1ppp/p1n5/1p1Pp3/B3n3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. d5"
  },
  {
    "name": "Ruy Lopez: Open Variations, Riga Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/1ppp1ppp/p1n5/8/B2pn3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 exd4"
  },
  {
    "name": "Ruy Lopez: Open Variations, Schlechter Defense",
    "eco": "C80",
    "fen": "r1bqkb1r/2p2ppp/p7/1p1pp3/P2nn3/1B3N2/1PP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. a4 Nxd4"
  },
  {
    "name": "Ruy Lopez: Open Variations, St. Petersburg Variation",
    "eco": "C82",
    "fen": "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Nbd2"
  },
  {
    "name": "Ruy Lopez: Open Variations, Zukertort Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/2p1nppp/p7/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Ne7"
  },
  {
    "name": "Ruy Lopez: Open, 6. d4",
    "eco": "C80",
    "fen": "r1bqkb1r/1ppp1ppp/p1n5/4p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4"
  },
  {
    "name": "Ruy Lopez: Open, 6. d4 b5",
    "eco": "C80",
    "fen": "r1bqkb1r/2pp1ppp/p1n5/1p2p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5"
  },
  {
    "name": "Ruy Lopez: Open, 9. c3",
    "eco": "C82",
    "fen": "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3"
  },
  {
    "name": "Ruy Lopez: Open, Berger Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/2p2ppp/p7/1p1p4/P2pn3/1BN5/1PP2PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. a4 Nxd4 9. Nxd4 exd4 10. Nc3"
  },
  {
    "name": "Ruy Lopez: Open, Howell Attack, Ekstrom Variation",
    "eco": "C81",
    "fen": "r4rk1/2pqbppp/p1n1b3/3pP3/2B1n3/5N2/PP2QPPP/RNBR2K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Qe2 Be7 10. Rd1 O-O 11. c4 bxc4 12. Bxc4 Qd7"
  },
  {
    "name": "Ruy Lopez: Open, Knorre Variation",
    "eco": "C80",
    "fen": "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. Nc3"
  },
  {
    "name": "Ruy Lopez: Open, Motzko Attack, Nenarokov Variation",
    "eco": "C82",
    "fen": "r2qk2r/2p1nppp/p3b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Qd3 Ne7"
  },
  {
    "name": "Ruy Lopez: Open, Tarrasch Trap",
    "eco": "C83",
    "fen": "r4rk1/2pqb1pp/p1n1p3/1p1pP3/4R3/1BP5/PP3PPP/RNBQ2K1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Re1 O-O 11. Nd4 Qd7 12. Nxe6 fxe6 13. Rxe4"
  },
  {
    "name": "Ruy Lopez: Pollock Defense",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp1ppp/8/nB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Na5"
  },
  {
    "name": "Ruy Lopez: Rabinovich Variation",
    "eco": "C78",
    "fen": "r1bq1k1r/2p2ppp/p4n2/1pbPR1N1/3n4/1B6/PPPP1PPP/RNBQ2K1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 d6 7. Ng5 d5 8. exd5 Nd4 9. Re1 Bc5 10. Rxe5+ Kf8"
  },
  {
    "name": "Ruy Lopez: Retreat Variation",
    "eco": "C60",
    "fen": "rnbqkbnr/pppp1ppp/8/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nb8"
  },
  {
    "name": "Ruy Lopez: Rotary-Albany Gambit",
    "eco": "C60",
    "fen": "r1bqkbnr/p1pp1ppp/1pn5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 b6"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense",
    "eco": "C63",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Classical Variation",
    "eco": "C63",
    "fen": "r1b1kbnr/ppp3pp/2N5/1B4q1/4p3/8/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qg5"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Dyckhoff Variation",
    "eco": "C63",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Exchange Variation",
    "eco": "C63",
    "fen": "r1bqkbnr/pppp2pp/2B5/4pp2/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Bxc6"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Jaenisch Gambit Accepted",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2pP2/8/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. exf5"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Kostic Defense",
    "eco": "C63",
    "fen": "r1bqk1nr/ppppb1pp/2n5/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 Be7"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Moehring Variation",
    "eco": "C63",
    "fen": "r1b1kbnr/ppp3pp/2N5/1B1q4/4p3/8/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qd5"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Schoenemann Attack",
    "eco": "C63",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2pp2/3PP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. d4"
  },
  {
    "name": "Ruy Lopez: Schliemann Defense, Tartakower Variation",
    "eco": "C63",
    "fen": "r1bqkb1r/pppp2pp/2n2n2/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 Nf6"
  },
  {
    "name": "Ruy Lopez: Spanish Countergambit",
    "eco": "C60",
    "fen": "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d5"
  },
  {
    "name": "Ruy Lopez: Spanish Countergambit, Harding Countergambit, Fricke Gambit",
    "eco": "C60",
    "fen": "r1b1kbnr/ppp2ppp/2n5/1B1pN1q1/4P3/8/PPPP1PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d5 4. Nxe5 Qg5 5. O-O"
  },
  {
    "name": "Ruy Lopez: Spanish Countergambit, Harding Gambit",
    "eco": "C60",
    "fen": "r1b1kbnr/ppp2ppp/2N5/1B1p2q1/4P3/8/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d5 4. Nxe5 Qg5 5. Nxc6"
  },
  {
    "name": "Ruy Lopez: Steinitz Defense",
    "eco": "C62",
    "fen": "r1bqkbnr/ppp2ppp/2np4/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d6"
  },
  {
    "name": "Ruy Lopez: Steinitz Defense Deferred, Boleslavsky Variation",
    "eco": "C79",
    "fen": "r1bqkb1r/2p3pp/p1p5/3pPp2/4n3/2N2N2/PPP2PPP/R1BQR1K1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6 6. Bxc6+ bxc6 7. d4 Nxe4 8. Re1 f5 9. dxe5 d5 10. Nc3"
  },
  {
    "name": "Ruy Lopez: Steinitz Defense Deferred, Lipnitsky Variation",
    "eco": "C79",
    "fen": "r2qkb1r/2p2ppp/p1pp1n2/4p3/3PP1b1/5N2/PPP2PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6 6. Bxc6+ bxc6 7. d4 Bg4"
  },
  {
    "name": "Ruy Lopez: Steinitz Defense, Center Gambit",
    "eco": "C62",
    "fen": "r1bqkbnr/ppp2ppp/2np4/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 exd4 5. O-O"
  },
  {
    "name": "Ruy Lopez: Steinitz Defense, Nimzowitsch Attack",
    "eco": "C62",
    "fen": "r2qkb1r/pppb1ppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. Bxc6"
  },
  {
    "name": "Ruy Lopez: Vinogradov Variation",
    "eco": "C60",
    "fen": "r1b1kbnr/ppppqppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 Qe7"
  },
  {
    "name": "Ruy Lopez: Wormald Attack, Gruenfeld Variation",
    "eco": "C77",
    "fen": "r2qk2r/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP2QPPP/RNB1K2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Qe2 b5 6. Bb3 Be7 7. d4 d6 8. c3 Bg4"
  },
  {
    "name": "Saragossa Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq",
    "moves": "1. c3"
  },
  {
    "name": "Scandinavian Defense",
    "eco": "B01",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5"
  },
  {
    "name": "Scandinavian Defense: 2. b3",
    "eco": "B01",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 d5 2. b3"
  },
  {
    "name": "Scandinavian Defense: Anderssen Counterattack",
    "eco": "B01",
    "fen": "rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5"
  },
  {
    "name": "Scandinavian Defense: Anderssen Counterattack, Collijn Variation",
    "eco": "B01",
    "fen": "rn2kbnr/ppp2ppp/8/q3p3/3P2b1/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. Nf3 Bg4"
  },
  {
    "name": "Scandinavian Defense: Anderssen Counterattack, Goteborg System",
    "eco": "B01",
    "fen": "rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. Nf3"
  },
  {
    "name": "Scandinavian Defense: Anderssen Counterattack, Orthodox Attack",
    "eco": "B01",
    "fen": "r1b1k1nr/ppp2ppp/2n5/q3P3/1b6/2N2N2/PPPB1PPP/R2QKB1R b KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. dxe5 Nc6 6. Nf3 Bb4 7. Bd2"
  },
  {
    "name": "Scandinavian Defense: Blackburne Gambit",
    "eco": "B01",
    "fen": "r1bqkbnr/pp2pppp/2n5/8/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 c6 3. dxc6 Nxc6"
  },
  {
    "name": "Scandinavian Defense: Blackburne-Kloosterboer Gambit",
    "eco": "B01",
    "fen": "rnbqkbnr/pp2pppp/2p5/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 c6"
  },
  {
    "name": "Scandinavian Defense: Boehnke Gambit",
    "eco": "B01",
    "fen": "rn1qkbnr/ppp2ppp/4b3/8/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 e5 3. dxe6 Bxe6"
  },
  {
    "name": "Scandinavian Defense: Bronstein Variation",
    "eco": "B01",
    "fen": "rnb1kb1r/1pp1pppp/p2q1n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 a6"
  },
  {
    "name": "Scandinavian Defense: Classical Variation",
    "eco": "B01",
    "fen": "rn2kb1r/ppp1pppp/5n2/q4b2/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5"
  },
  {
    "name": "Scandinavian Defense: Gruenfeld Variation",
    "eco": "B01",
    "fen": "rn2kb1r/pp2pppp/2p2n2/q3Nb2/3P2P1/2N5/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5 6. Ne5 c6 7. g4"
  },
  {
    "name": "Scandinavian Defense: Gubinsky-Melts Defense",
    "eco": "B01",
    "fen": "rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6"
  },
  {
    "name": "Scandinavian Defense: Icelandic-Palme Gambit",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. c4 e6"
  },
  {
    "name": "Scandinavian Defense: Kadas Gambit",
    "eco": "B01",
    "fen": "rnbqkb1r/pp3ppp/2P2n2/4p3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 c6 4. dxc6 e5"
  },
  {
    "name": "Scandinavian Defense: Kiel Variation",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp1pppp/8/8/1nPP4/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. c4 Nb4"
  },
  {
    "name": "Scandinavian Defense: Kloosterboer Gambit",
    "eco": "B01",
    "fen": "rnbqkbnr/pp3ppp/2P5/4p3/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 c6 3. dxc6 e5"
  },
  {
    "name": "Scandinavian Defense: Lasker Variation",
    "eco": "B01",
    "fen": "rn2kb1r/ppp1pppp/5n2/q7/3P2b1/2N2N1P/PPP2PP1/R1BQKB1R b KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bg4 6. h3"
  },
  {
    "name": "Scandinavian Defense: Main Line",
    "eco": "B01",
    "fen": "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5"
  },
  {
    "name": "Scandinavian Defense: Main Line, Leonhardt Gambit",
    "eco": "B01",
    "fen": "rnb1kbnr/ppp1pppp/8/q7/1P6/2N5/P1PP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. b4"
  },
  {
    "name": "Scandinavian Defense: Main Line, Mieses Variation",
    "eco": "B01",
    "fen": "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6"
  },
  {
    "name": "Scandinavian Defense: Marshall Variation",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp1pppp/8/3n4/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 Nxd5"
  },
  {
    "name": "Scandinavian Defense: Mieses-Kotroc Variation",
    "eco": "B01",
    "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5"
  },
  {
    "name": "Scandinavian Defense: Modern Variation",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6"
  },
  {
    "name": "Scandinavian Defense: Modern Variation, 2. exd5 Nf6 3. d4",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4"
  },
  {
    "name": "Scandinavian Defense: Modern Variation, Gipslis Variation",
    "eco": "B01",
    "fen": "rn1qkb1r/ppp1pppp/8/3n4/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. Nf3 Bg4"
  },
  {
    "name": "Scandinavian Defense: Modern Variation, Wing Gambit",
    "eco": "B01",
    "fen": "rnbqkb1r/p1p1pp1p/5np1/1p1P4/2PP4/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 g6 4. c4 b5"
  },
  {
    "name": "Scandinavian Defense: Panov Transfer",
    "eco": "B01",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. c4 c6"
  },
  {
    "name": "Scandinavian Defense: Portuguese Variation",
    "eco": "B01",
    "fen": "rn1qkb1r/ppp1pppp/5n2/3P4/3P2b1/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 Bg4"
  },
  {
    "name": "Scandinavian Defense: Portuguese Variation, Portuguese Gambit",
    "eco": "B01",
    "fen": "r2qkb1r/pppnpppp/5n2/1B1P1b2/3P4/5P2/PPP3PP/RNBQK1NR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. Bb5+ Nbd7 5. f3 Bf5"
  },
  {
    "name": "Scandinavian Defense: Richter Variation",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 g6"
  },
  {
    "name": "Scandinavian Defense: Richter Variation, 3. d4 Nxd5 4. Nf3 g6",
    "eco": "B01",
    "fen": "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. Nf3 g6"
  },
  {
    "name": "Scandinavian Defense: Schiller-Pytel Variation",
    "eco": "B01",
    "fen": "rnb1kbnr/pp2pppp/2pq4/8/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 c6"
  },
  {
    "name": "Scandinavian Defense: Schiller-Pytel Variation, Modern Variation",
    "eco": "B01",
    "fen": "rn2kb1r/pp2pppp/2p2n2/5b2/1qBP1B2/2N5/PPP1NPPP/R2QK2R w KQkq",
    "moves": "1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Bc4 c6 6. Nge2 Bf5 7. Bf4 Qb4"
  },
  {
    "name": "Scandinavian Defense: Zilbermints Gambit",
    "eco": "B01",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 d5 2. b4"
  },
  {
    "name": "Scotch Gambit",
    "eco": "C44",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/1bB1P3/2P2N2/P4PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. bxc3"
  },
  {
    "name": "Scotch Game",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4"
  },
  {
    "name": "Scotch Game, 2. Nf3 Nc6 3. d4 exd4",
    "eco": "C45",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4"
  },
  {
    "name": "Scotch Game, 3. d4 exd4 4. Nxd4",
    "eco": "C45",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4"
  },
  {
    "name": "Scotch Game, 5. Nb5 Bb4+ 6. Bd2",
    "eco": "C45",
    "fen": "r1b1k1nr/pppp1ppp/2n5/1N6/1b2P2q/8/PPPB1PPP/RN1QKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2"
  },
  {
    "name": "Scotch Game: Alekhine Gambit",
    "eco": "C45",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4P3/3N4/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. e5"
  },
  {
    "name": "Scotch Game: Benima Defense",
    "eco": "C44",
    "fen": "r1bqk1nr/ppppbppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4"
  },
  {
    "name": "Scotch Game: Berger Variation",
    "eco": "C45",
    "fen": "N1bk3r/pp1p1ppp/2n2n2/8/1b6/P4B1q/1PPN1P1P/R1BQK2R b KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Nd2 Qxe4+ 7. Be2 Qxg2 8. Bf3 Qh3 9. Nxc7+ Kd8 10. Nxa8 Nf6 11. a3"
  },
  {
    "name": "Scotch Game: Blumenfeld Attack",
    "eco": "C45",
    "fen": "r1b1k1nr/pppp1ppp/2n2q2/1Nb5/4P3/4B3/PPP2PPP/RN1QKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. Nb5"
  },
  {
    "name": "Scotch Game: Braune Variation",
    "eco": "C45",
    "fen": "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/4B3/PPP2PPP/RN1QKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Be3"
  },
  {
    "name": "Scotch Game: Classical Variation",
    "eco": "C45",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5"
  },
  {
    "name": "Scotch Game: Classical Variation, Blackburne Attack",
    "eco": "C45",
    "fen": "r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP1Q1PPP/RN2KB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Qd2"
  },
  {
    "name": "Scotch Game: Classical Variation, Intermezzo Variation",
    "eco": "C45",
    "fen": "r1b1k1nr/pppp1ppp/2N2q2/2b5/4P3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 Qf6"
  },
  {
    "name": "Scotch Game: Classical Variation, Millennium Variation",
    "eco": "C45",
    "fen": "r1b1k1nr/pppp1ppp/2n3q1/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Qg6"
  },
  {
    "name": "Scotch Game: Cochrane Variation",
    "eco": "C44",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b3P3/2B5/2P2N2/P4PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. bxc3 Ba5 7. e5"
  },
  {
    "name": "Scotch Game: Cochrane-Shumov Defense",
    "eco": "C44",
    "fen": "r1bq3r/ppp2k1p/2n3p1/2Qp4/3pP3/8/PPP2PPP/RNB1K2R w KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 Nh6 6. Nxf7 Nxf7 7. Bxf7+ Kxf7 8. Qh5+ g6 9. Qxc5 d5"
  },
  {
    "name": "Scotch Game: Fraser Variation",
    "eco": "C45",
    "fen": "r1b1kbnr/pppp1ppp/2n5/8/4P2q/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nf3"
  },
  {
    "name": "Scotch Game: Ghulam-Kassim Variation",
    "eco": "C45",
    "fen": "r1bqkbnr/ppp2ppp/3p4/8/3QP3/3B4/PPP2PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nxd4 5. Qxd4 d6 6. Bd3"
  },
  {
    "name": "Scotch Game: Goering Gambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3"
  },
  {
    "name": "Scotch Game: Goering Gambit, Bardeleben Variation",
    "eco": "C44",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Bc4 Nf6 6. Nxc3 Bb4"
  },
  {
    "name": "Scotch Game: Goering Gambit, Double Pawn Sacrifice",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/2B1P3/2p2N2/PP3PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Bc4"
  },
  {
    "name": "Scotch Game: Goering Gambit, Main Line",
    "eco": "C44",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/1b2P3/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 Bb4"
  },
  {
    "name": "Scotch Game: Gottschall Variation",
    "eco": "C45",
    "fen": "1rb2rk1/pp3ppp/5q2/3P4/1n6/2P1Q3/PP3PPP/RN2KB1R w KQ",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Qd2 d5 8. Nb5 Bxe3 9. Qxe3 O-O 10. Nxc7 Rb8 11. Nxd5 Nxd5 12. exd5 Nb4"
  },
  {
    "name": "Scotch Game: Hanneken Variation",
    "eco": "C44",
    "fen": "r1bq1rk1/pppp1ppp/5n2/4n1N1/1bB5/8/PB3PPP/RN1Q1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. O-O cxb2 7. Bxb2 Nf6 8. Ng5 O-O 9. e5 Nxe5"
  },
  {
    "name": "Scotch Game: Haxo Gambit",
    "eco": "C45",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5"
  },
  {
    "name": "Scotch Game: Horwitz Attack",
    "eco": "C45",
    "fen": "r1b1kbnr/pppp1ppp/2n5/1N6/4P2q/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5"
  },
  {
    "name": "Scotch Game: Horwitz Attack, Blackburne Variation",
    "eco": "C45",
    "fen": "r1bk2nr/pppp1ppp/2n5/1N6/4q3/8/PPPQBPPP/RN3RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Qxd2"
  },
  {
    "name": "Scotch Game: Horwitz Attack, McDonnell Variation",
    "eco": "C45",
    "fen": "r1bk2nr/pppp1ppp/2n5/1N6/P4q2/8/1PPNBPPP/R2Q1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Nxd2 Qf4 10. a4"
  },
  {
    "name": "Scotch Game: Horwitz Attack, Vienna Variation",
    "eco": "C45",
    "fen": "r1bk2nr/pppp1ppp/2n5/1N6/2P2q2/8/PP1NBPPP/R2Q1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Nxd2 Qf4 10. c4"
  },
  {
    "name": "Scotch Game: Lolli Variation",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/8/4p3/3nP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 Nxd4"
  },
  {
    "name": "Scotch Game: Malaniuk Variation",
    "eco": "C45",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bb4+"
  },
  {
    "name": "Scotch Game: Meitner Variation",
    "eco": "C45",
    "fen": "r1b1k2r/ppppnppp/2n2q2/2b5/4P3/2P1B3/PPN2PPP/RN1QKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Nc2"
  },
  {
    "name": "Scotch Game: Mieses Variation",
    "eco": "C45",
    "fen": "r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5"
  },
  {
    "name": "Scotch Game: Modern Defense",
    "eco": "C45",
    "fen": "r1b1k1nr/pppp1ppp/2n5/8/1b1NP2q/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3 Bb4"
  },
  {
    "name": "Scotch Game: Napoleon Gambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 Nxd4 4. Nxd4 exd4 5. Bc4"
  },
  {
    "name": "Scotch Game: Paulsen Attack",
    "eco": "C45",
    "fen": "r1b1k2r/ppppnppp/2n2q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bb5"
  },
  {
    "name": "Scotch Game: Paulsen Variation",
    "eco": "C45",
    "fen": "r1b1kbnr/pppp1ppp/2n5/5N2/4P2q/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nf5"
  },
  {
    "name": "Scotch Game: Paulsen, Gunsberg Defense",
    "eco": "C45",
    "fen": "r1bnk2r/ppppnppp/5q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bb5 Nd8"
  },
  {
    "name": "Scotch Game: Potter Variation",
    "eco": "C45",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/4P3/1N6/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3"
  },
  {
    "name": "Scotch Game: Relfsson Gambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/1B6/3pP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bb5"
  },
  {
    "name": "Scotch Game: Romanishin Variation",
    "eco": "C45",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/1b2P3/1N6/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3 Bb4+"
  },
  {
    "name": "Scotch Game: Rosenthal Variation",
    "eco": "C45",
    "fen": "r1bk2nr/pppp1ppp/2n3q1/1N6/8/8/PPPNBPPP/R2Q1RK1 w -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Nxd2 Qg6"
  },
  {
    "name": "Scotch Game: Schmidt Variation",
    "eco": "C45",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6"
  },
  {
    "name": "Scotch Game: Scotch Gambit",
    "eco": "C44",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4"
  },
  {
    "name": "Scotch Game: Scotch Gambit, Advance Variation",
    "eco": "C45",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4P3/2Bp4/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. e5"
  },
  {
    "name": "Scotch Game: Scotch Gambit, Cochrane-Anderssen Variation",
    "eco": "C44",
    "fen": "r2qk1nr/ppp2ppp/2np4/2b5/2BpP1b1/2P2N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. O-O d6 6. c3 Bg4"
  },
  {
    "name": "Scotch Game: Scotch Gambit, Dubois Reti Defense",
    "eco": "C44",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4"
  },
  {
    "name": "Scotch Game: Scotch Gambit, Goering Gambit Declined",
    "eco": "C44",
    "fen": "r1bqkbnr/ppp2ppp/2n5/3p4/3pP3/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 d5"
  },
  {
    "name": "Scotch Game: Scotch Gambit, Kingside Variation",
    "eco": "C45",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4P3/2Bp2n1/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 Ng4"
  },
  {
    "name": "Scotch Game: Scotch Gambit, London Defense",
    "eco": "C44",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/1bBpP3/5N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+"
  },
  {
    "name": "Scotch Game: Scotch Gambit, Sarratt Variation",
    "eco": "C44",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b3N1/2BpP3/8/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5"
  },
  {
    "name": "Scotch Game: Steinitz Variation",
    "eco": "C45",
    "fen": "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4"
  },
  {
    "name": "Scotch Game: Steinitz Variation, 4. Nxd4 Qh4 5. Nc3",
    "eco": "C45",
    "fen": "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3"
  },
  {
    "name": "Scotch Game: Tartakower Variation",
    "eco": "C45",
    "fen": "r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPPN1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. Nd2"
  },
  {
    "name": "Scotch Game: Vitzthum Attack",
    "eco": "C44",
    "fen": "r1bqk2r/pppp1ppp/2n4n/2b3NQ/2BpP3/8/PPP2PPP/RNB1K2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 Nh6 6. Qh5"
  },
  {
    "name": "Scotch, Cochrane Variation",
    "eco": "C44",
    "fen": "r1bqkb1r/pp1p1Npp/2p1nn2/8/2B1P3/8/PPP2PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 Nxd4 4. Nxe5 Ne6 5. Bc4 c6 6. O-O Nf6 7. Nxf7"
  },
  {
    "name": "Scotch, Sea-cadet Mate",
    "eco": "C44",
    "fen": "r2q1bnr/ppp1kBpp/3p4/3NN3/4P3/8/PP3PPP/R1Bb1RK1 b -",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 d6 6. Bc4 Bg4 7. O-O Ne5 8. Nxe5 Bxd1 9. Bxf7+ Ke7 10. Nd5#"
  },
  {
    "name": "Semi-Bononi",
    "eco": "A44",
    "fen": "rnbqkbnr/pp3ppp/3p4/2pPp3/4P3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 c5 2. d5 e5 3. e4 d6"
  },
  {
    "name": "Semi-Slav Defense",
    "eco": "D43",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6"
  },
  {
    "name": "Semi-Slav Defense Accepted",
    "eco": "D44",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4"
  },
  {
    "name": "Semi-Slav Defense: Accelerated Meran Variation",
    "eco": "D45",
    "fen": "rnbqkb1r/1p3ppp/p1p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 a6"
  },
  {
    "name": "Semi-Slav Defense: Accelerated Move Order",
    "eco": "D31",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6"
  },
  {
    "name": "Semi-Slav Defense: Anti-Moscow Gambit",
    "eco": "D44",
    "fen": "rnbqkb1r/pp3pp1/2p1pn1p/3p4/2PP3B/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bh4"
  },
  {
    "name": "Semi-Slav Defense: Anti-Noteboom, Stonewall Variation, Portisch Gambit",
    "eco": "D31",
    "fen": "rnbqkbnr/pp4pp/2p1p3/3p1p2/2PP2P1/2N1P3/PP3P1P/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e3 f5 5. g4"
  },
  {
    "name": "Semi-Slav Defense: Bogoljubov Variation",
    "eco": "D46",
    "fen": "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 Be7"
  },
  {
    "name": "Semi-Slav Defense: Botvinnik System",
    "eco": "D44",
    "fen": "rnbqkb1r/p4p2/2p1pn1p/1p2P1N1/2pP3B/2N5/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5"
  },
  {
    "name": "Semi-Slav Defense: Botvinnik System, Alatortsev System",
    "eco": "D44",
    "fen": "rnbqkb1r/p4p2/2p1p2p/1p1nP1N1/2pP3B/2N5/PP3PPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 Nd5"
  },
  {
    "name": "Semi-Slav Defense: Botvinnik System, Ekstrom Variation",
    "eco": "D44",
    "fen": "rnbqkb1r/p4p2/2p1pP1p/1p2N3/2pP3p/2N5/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. exf6 gxh4 10. Ne5"
  },
  {
    "name": "Semi-Slav Defense: Botvinnik System, Lilienthal Variation",
    "eco": "D44",
    "fen": "r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N3P1/PP3P1P/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. g3"
  },
  {
    "name": "Semi-Slav Defense: Botvinnik System, Szabo Variation",
    "eco": "D44",
    "fen": "r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N2Q2/PP3PPP/R3KB1R b KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. Qf3"
  },
  {
    "name": "Semi-Slav Defense: Botvinnik Variation",
    "eco": "D44",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/6B1/2pPP3/2N2N2/PP3PPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4"
  },
  {
    "name": "Semi-Slav Defense: Chigorin Defense",
    "eco": "D46",
    "fen": "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 Bd6"
  },
  {
    "name": "Semi-Slav Defense: Gunderam Gambit",
    "eco": "D31",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. f3"
  },
  {
    "name": "Semi-Slav Defense: Main Line",
    "eco": "D45",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3"
  },
  {
    "name": "Semi-Slav Defense: Main Line, 5. Nf3 Nbd7 6. Bd3",
    "eco": "D46",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3"
  },
  {
    "name": "Semi-Slav Defense: Marshall Gambit",
    "eco": "D31",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/3p4/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4"
  },
  {
    "name": "Semi-Slav Defense: Marshall Gambit, Forgotten Variation",
    "eco": "D31",
    "fen": "rnbqk1nr/pp3ppp/2p1p3/8/1bPP4/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Nc3"
  },
  {
    "name": "Semi-Slav Defense: Marshall Gambit, Main Line",
    "eco": "D31",
    "fen": "rnbqk1nr/pp3ppp/2p1p3/8/1bPPN3/8/PP1B1PPP/R2QKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Bd2"
  },
  {
    "name": "Semi-Slav Defense: Marshall Gambit, Tolush Variation",
    "eco": "D31",
    "fen": "rnb1k1nr/pp3ppp/4p3/2B5/2P5/8/PP2BPqP/R2QK1NR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Bd2 Qxd4 7. Bxb4 Qxe4+ 8. Be2 c5 9. Bxc5 Qxg2"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation",
    "eco": "D47",
    "fen": "r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, 7. Bxc4 b5 8. Bd3 a6",
    "eco": "D48",
    "fen": "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Blumenfeld Variation",
    "eco": "D49",
    "fen": "r1bqkb1r/3n1ppp/p3pn2/1N2P3/3p4/3B1N2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Lundin Variation",
    "eco": "D47",
    "fen": "r1bqkb1r/p2n1ppp/2p1pn2/8/1p1P4/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 b4"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Old Variation",
    "eco": "D48",
    "fen": "r1bqkb1r/3n1ppp/p3pn2/1pp1P3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Pirc Variation",
    "eco": "D48",
    "fen": "r1bqkb1r/3n1ppp/p1p1pn2/8/1p1PP3/2NB1N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. e3 Nf6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 b4"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Rabinovich Variation",
    "eco": "D49",
    "fen": "r1bqkb1r/3n1ppp/p3p3/1N2P3/3p2n1/3B1N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Ng4"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Rellstab Attack",
    "eco": "D49",
    "fen": "r3kb1r/5ppp/b3pn2/1p1qN1B1/3p4/3B4/PP2QPPP/R4RK1 b kq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5 13. O-O Qd5 14. Qe2 Ba6 15. Bg5"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Reynolds' Variation",
    "eco": "D48",
    "fen": "r1bqkb1r/3n1ppp/p3pn2/1ppP4/4P3/2NB1N2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. d5"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Sozin Variation",
    "eco": "D49",
    "fen": "r1bqkb1r/5ppp/p3pn2/1N2n3/3p4/3B1N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Sozin Variation, 12. Nxe5 axb5 13. O-O",
    "eco": "D49",
    "fen": "r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B4/PP3PPP/R1BQ1RK1 b kq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. c4 c6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5 13. O-O"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Stahlberg Variation",
    "eco": "D49",
    "fen": "r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B1Q2/PP3PPP/R1B1K2R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5 13. Qf3"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Wade Variation",
    "eco": "D47",
    "fen": "r2qkb1r/pb1n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Wade Variation, Kaidanov Gambit",
    "eco": "D47",
    "fen": "r2qkb1r/pb1n1ppp/4p3/3nP3/Np1N4/3B4/PP3PPP/R1BQ1RK1 b kq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. e4 b4 10. Na4 c5 11. e5 Nd5 12. O-O cxd4 13. Nxd4"
  },
  {
    "name": "Semi-Slav Defense: Meran Variation, Wade Variation, Larsen Variation",
    "eco": "D47",
    "fen": "r2qkb1r/pb1n1ppp/4p3/2pnP3/Np1P4/3B1N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. e4 b4 10. Na4 c5 11. e5 Nd5"
  },
  {
    "name": "Semi-Slav Defense: Normal Variation",
    "eco": "D45",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7"
  },
  {
    "name": "Semi-Slav Defense: Noteboom Variation",
    "eco": "D31",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4"
  },
  {
    "name": "Semi-Slav Defense: Noteboom Variation, Abrahams Variation",
    "eco": "D31",
    "fen": "rnbqk1nr/p4ppp/4p3/1p6/2pP4/2P1PN2/5PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. a4 Bb4 6. e3 Bxc3+ 7. bxc3 b5 8. axb5 cxb5"
  },
  {
    "name": "Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Gambit",
    "eco": "D31",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. g3"
  },
  {
    "name": "Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation",
    "eco": "D31",
    "fen": "rnbqkbnr/pp3ppp/2p1p3/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. Bg5"
  },
  {
    "name": "Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation, Belyavsky Line",
    "eco": "D31",
    "fen": "rnbqkbnr/pp4pp/2p1pp2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. Bg5 f6"
  },
  {
    "name": "Semi-Slav Defense: Quiet Variation",
    "eco": "D30",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2"
  },
  {
    "name": "Semi-Slav Defense: Quiet Variation, 4. e3 e6 5. Nbd2 Nbd7",
    "eco": "D30",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2 Nbd7"
  },
  {
    "name": "Semi-Slav Defense: Romih Variation",
    "eco": "D46",
    "fen": "r1bqk2r/pp1n1ppp/2p1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 Bb4"
  },
  {
    "name": "Semi-Slav Defense: Rubinstein (Anti-Meran) System",
    "eco": "D45",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3pN3/2PP4/2N1P3/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 Nf6 5. e3 Nbd7 6. Ne5"
  },
  {
    "name": "Semi-Slav Defense: Semi-Meran Variation",
    "eco": "D47",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/8/2BP4/2N1PN2/PP3PPP/R1BQK2R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4"
  },
  {
    "name": "Semi-Slav Defense: Stoltz Variation",
    "eco": "D45",
    "fen": "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Qc2"
  },
  {
    "name": "Semi-Slav Defense: Stoltz Variation, Center Variation",
    "eco": "D45",
    "fen": "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PPP3/2N2N2/PPQ2PPP/R1B1KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. e4"
  },
  {
    "name": "Semi-Slav Defense: Stoltz Variation, Center Variation, Mikhalchishin Line",
    "eco": "D45",
    "fen": "r1bqk2r/pp1n1ppp/2pb4/4P3/2P1Q3/5N2/PP3PPP/R1B1KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. e4 dxe4 8. Nxe4 Nxe4 9. Qxe4 e5 10. dxe5"
  },
  {
    "name": "Semi-Slav Defense: Stoltz Variation, Shabalov Attack",
    "eco": "D45",
    "fen": "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP2P1/2N1PN2/PPQ2P1P/R1B1KB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. g4"
  },
  {
    "name": "Semi-Slav Defense: Stonewall Defense",
    "eco": "D45",
    "fen": "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/2NBPN2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. c4 c6 4. Nc3 e6 5. e3 Ne4 6. Bd3 f5"
  },
  {
    "name": "Sicilian Defense",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5"
  },
  {
    "name": "Sicilian Defense, 2. Nf3",
    "eco": "B27",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3"
  },
  {
    "name": "Sicilian Defense, 2. Nf3 d6",
    "eco": "B50",
    "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6"
  },
  {
    "name": "Sicilian Defense, 2. Nf3 d6 3. d4",
    "eco": "B54",
    "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4"
  },
  {
    "name": "Sicilian Defense, 2. Nf3 d6 3. d4 cxd4",
    "eco": "B54",
    "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4"
  },
  {
    "name": "Sicilian Defense: 2. c3, Heidenfeld Variation",
    "eco": "B22",
    "fen": "r1bqkb1r/pp1ppppp/2n5/2pnP3/8/N1P2N2/PP1P1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Na3"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon",
    "eco": "B34",
    "fen": "rnbqkbnr/pp2pp1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 g6"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, 3. d4 cxd4 4. Nxd4 g6",
    "eco": "B36",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Exchange Variation",
    "eco": "B34",
    "fen": "r1bqkbnr/pp1ppp1p/2N3p1/8/4P3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nxc6"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Maroczy Bind",
    "eco": "B36",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Maroczy Bind, 5. c4 Bg7 6. Be3",
    "eco": "B38",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/8/2PNP3/4B3/PP3PPP/RN1QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 6. Be3"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Maroczy Bind, Breyer Variation",
    "eco": "B39",
    "fen": "r1bqk2r/pp1pppbp/2n3p1/8/2PNP1n1/2N1B3/PP3PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 6. Be3 Nf6 7. Nc3 Ng4"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Maroczy Bind, Gurgenidze Variation",
    "eco": "B36",
    "fen": "r1bqkb1r/pp2pp1p/3p1np1/8/2PQP3/2N5/PP3PPP/R1B1KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Nf6 6. Nc3 Nxd4 7. Qxd4 d6"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Modern Bc4 Variation",
    "eco": "B35",
    "fen": "r1bqk2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Bc4"
  },
  {
    "name": "Sicilian Defense: Accelerated Dragon, Modern Variation",
    "eco": "B34",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3"
  },
  {
    "name": "Sicilian Defense: Accelerated Fianchetto, Maroczy Bind, 5... Bg7",
    "eco": "B37",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7"
  },
  {
    "name": "Sicilian Defense: Accelerated Fianchetto, Simagin Variation",
    "eco": "B37",
    "fen": "r1bqk2r/pp2ppbp/2np2pn/8/2P1P3/8/PPN1BPPP/RNBQK2R w KQkq",
    "moves": "1. Nf3 c5 2. c4 g6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc2 Bg7 6. e4 d6 7. Be2 Nh6"
  },
  {
    "name": "Sicilian Defense: Acton Extension",
    "eco": "B27",
    "fen": "rnbqk1nr/pp1ppp1p/6pb/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. c4 Bh6"
  },
  {
    "name": "Sicilian Defense: Alapin Variation",
    "eco": "B22",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. c3"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Barmen Defense",
    "eco": "B22",
    "fen": "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. c3 d5 3. exd5 Qxd5"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Central Exchange",
    "eco": "B22",
    "fen": "r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 cxd4 5. cxd4 Nc6 6. Nf3 Bg4"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Endgame Variation",
    "eco": "B22",
    "fen": "r3kbnr/pp2pppp/8/8/3n4/2N2P2/PP3P1P/R1B1KB1R w KQkq",
    "moves": "1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 cxd4 5. cxd4 Nc6 6. Nf3 Bg4 7. Nc3 Bxf3 8. gxf3 Qxd4 9. Qxd4 Nxd4"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Milner-Barry Attack",
    "eco": "B22",
    "fen": "r1b1k1nr/pp3ppp/2n5/3qp3/1b1P4/2N2N2/PP2BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nc6 5. Nf3 cxd4 6. cxd4 e5 7. Nc3 Bb4 8. Be2"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Modern Line",
    "eco": "B22",
    "fen": "rn2kb1r/pp2pppp/5n2/2pq4/3P2b1/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Sherzer Variation",
    "eco": "B22",
    "fen": "r1bqkb1r/pp1p1ppp/2n1p3/2pnP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. c3 Nf6 4. e5 Nd5 5. d4 Nc6"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Smith-Morra Declined",
    "eco": "B22",
    "fen": "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. d4 cxd4"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Stoltz Attack",
    "eco": "B22",
    "fen": "r1bqkb1r/pp1ppppp/1nn5/2p1P3/8/1BP2N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Bc4 Nb6 6. Bb3"
  },
  {
    "name": "Sicilian Defense: Alapin Variation, Stoltz Attack, Ivanchuk Line",
    "eco": "B22",
    "fen": "r1b1kb1r/ppqppp1p/1nn5/4P1p1/2p5/2P2N2/PPBPQPPP/RNB1K2R w KQkq",
    "moves": "1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Bc4 Nb6 6. Bb3 c4 7. Bc2 Qc7 8. Qe2 g5"
  },
  {
    "name": "Sicilian Defense: Amazon Attack",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P1Q1/8/PPPP1PPP/RNB1KBNR b KQkq",
    "moves": "1. e4 c5 2. Qg4"
  },
  {
    "name": "Sicilian Defense: Big Clamp Formation",
    "eco": "B20",
    "fen": "r1bqkbnr/pp2pppp/2np4/2p5/4PP2/2PP4/PP4PP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. d3 Nc6 3. c3 d6 4. f4"
  },
  {
    "name": "Sicilian Defense: Boleslavsky Variation",
    "eco": "B58",
    "fen": "r1bqkb1r/pp3ppp/2np1n2/4p3/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Be2 e5"
  },
  {
    "name": "Sicilian Defense: Boleslavsky Variation, 6. Be2 e5 7. Nb3",
    "eco": "B59",
    "fen": "r1bqkb1r/pp3ppp/2np1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 e5 7. Nb3"
  },
  {
    "name": "Sicilian Defense: Boleslavsky Variation, Louma Variation",
    "eco": "B58",
    "fen": "r1bqkb1r/pp3ppp/2Np1n2/4p3/4P3/2N5/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 e5 7. Nxc6"
  },
  {
    "name": "Sicilian Defense: Bowdler Attack",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 c5 2. Bc4"
  },
  {
    "name": "Sicilian Defense: Brick Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/7N/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nh3"
  },
  {
    "name": "Sicilian Defense: Brussels Gambit",
    "eco": "B27",
    "fen": "rnbqkbnr/pp1pp1pp/8/2p2p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 f5"
  },
  {
    "name": "Sicilian Defense: Buecker Variation",
    "eco": "B27",
    "fen": "rnbqkbnr/pp1pppp1/7p/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 h6"
  },
  {
    "name": "Sicilian Defense: Canal Attack, Dorfman Gambit",
    "eco": "B52",
    "fen": "r2qkbnr/pp1bpp1p/2np2p1/1Bp1P3/8/5N2/PPPPQPPP/RNB2RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. Bb5+ Nc6 4. O-O Bd7 5. Qe2 g6 6. e5"
  },
  {
    "name": "Sicilian Defense: Canal Attack, Haag Gambit",
    "eco": "B51",
    "fen": "r3kb1r/pp1qpppp/2np1n2/2p5/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. O-O Nc6 6. c3 Nf6 7. d4"
  },
  {
    "name": "Sicilian Defense: Canal Attack, Main Line",
    "eco": "B52",
    "fen": "rn1qkbnr/pp1bpppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7"
  },
  {
    "name": "Sicilian Defense: Canal Attack, Moscow Gambit",
    "eco": "B51",
    "fen": "r2qkb1r/1p2pppp/p2p1n2/2p3B1/3Pb3/2P2N2/PP3PPP/RN1QR1K1 b kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. Bb5+ Nc6 4. O-O Bd7 5. c3 Nf6 6. Re1 a6 7. Bxc6 Bxc6 8. d4 Bxe4 9. Bg5"
  },
  {
    "name": "Sicilian Defense: Canal-Sokolsky Attack",
    "eco": "B51",
    "fen": "rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. Bb5+"
  },
  {
    "name": "Sicilian Defense: Canal-Sokolsky Attack, Sokolsky Variation",
    "eco": "B52",
    "fen": "rn2kbnr/pp1qpppp/3p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4"
  },
  {
    "name": "Sicilian Defense: Chekhover Variation",
    "eco": "B53",
    "fen": "rnbqkbnr/pp2pppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4"
  },
  {
    "name": "Sicilian Defense: Chekhover Variation, Zaitsev Defense",
    "eco": "B53",
    "fen": "r1b1kbnr/pp1qpppp/2np4/1B6/3QP3/5N2/PPP2PPP/RNB1K2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4 Nc6 5. Bb5 Qd7"
  },
  {
    "name": "Sicilian Defense: Classical Variation",
    "eco": "B56",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6"
  },
  {
    "name": "Sicilian Defense: Classical Variation, 5. Nc3 Nc6 6. Be2",
    "eco": "B58",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Be2"
  },
  {
    "name": "Sicilian Defense: Classical Variation, Anti-Sozin Variation",
    "eco": "B57",
    "fen": "r1b1kb1r/pp2pppp/1qnp1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 Qb6"
  },
  {
    "name": "Sicilian Defense: Classical Variation, Dragon Transfer",
    "eco": "B58",
    "fen": "r1bqkb1r/pp2pp1p/3p1np1/8/3QP3/2N5/PPP1BPPP/R1B1K2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Be2 Nxd4 7. Qxd4 g6"
  },
  {
    "name": "Sicilian Defense: Classical Variation, Fianchetto Variation",
    "eco": "B58",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. g3"
  },
  {
    "name": "Sicilian Defense: Closed",
    "eco": "B23",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c5 2. Nc3 e6"
  },
  {
    "name": "Sicilian Defense: Closed, 2. Nc3 e6 3. g3",
    "eco": "B23",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 c5 2. Nc3 e6 3. g3"
  },
  {
    "name": "Sicilian Defense: Closed, 2. Nc3 Nc6 3. g3 g6",
    "eco": "B24",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6"
  },
  {
    "name": "Sicilian Defense: Closed, 3. g3 g6 4. Bg2 Bg7",
    "eco": "B24",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/4P3/2N3P1/PPPP1PBP/R1BQK1NR w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7"
  },
  {
    "name": "Sicilian Defense: Closed, 4. Bg2 Bg7 5. d3 d6",
    "eco": "B25",
    "fen": "r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6"
  },
  {
    "name": "Sicilian Defense: Closed Sicilian, Anti-Sveshnikov Variation, Kharlov-Kramnik Line",
    "eco": "B30",
    "fen": "r1bqk1nr/pp3ppp/2np4/2p1p1b1/2B1P3/2NP4/PPPN1PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Nc3 e5 4. Bc4 Be7 5. d3 d6 6. Nd2 Bg5"
  },
  {
    "name": "Sicilian Defense: Closed Variation",
    "eco": "B23",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c5 2. Nc3"
  },
  {
    "name": "Sicilian Defense: Closed Variation, 5. d3 d6 6. f4",
    "eco": "B25",
    "fen": "r1bqk1nr/pp2ppbp/2np2p1/2p5/4PP2/2NP2P1/PPP3BP/R1BQK1NR b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4"
  },
  {
    "name": "Sicilian Defense: Closed Variation, 5. d3 d6 6. Be3",
    "eco": "B26",
    "fen": "r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NPB1P1/PPP2PBP/R2QK1NR b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. Be3"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Botvinnik Defense",
    "eco": "B25",
    "fen": "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4PP2/2NP2P1/PPP3BP/R1BQK1NR w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4 e5"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Botvinnik Defense, 5. d3 d6 6. Nge2 e5",
    "eco": "B25",
    "fen": "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4P3/2NP2P1/PPP1NPBP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. Nge2 e5"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Botvinnik Defense, Edge Variation",
    "eco": "B25",
    "fen": "r1bqk2r/pp2npbp/2np2p1/2p1p3/4PP2/2NP2PN/PPP3BP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4 e5 7. Nh3 Nge7"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Chameleon Variation",
    "eco": "B23",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPPNPPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. Nge2"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Fianchetto Variation",
    "eco": "B24",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Grob Attack",
    "eco": "B23",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g4"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Korchnoi Defense",
    "eco": "B23",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/4P3/2N3P1/PPPP1P1P/R1BQKBNR w KQkq",
    "moves": "1. e4 c5 2. Nc3 e6 3. g3 d5"
  },
  {
    "name": "Sicilian Defense: Closed Variation, Traditional",
    "eco": "B25",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6"
  },
  {
    "name": "Sicilian Defense: Closed, Smyslov Variation",
    "eco": "B24",
    "fen": "r1bqk1nr/pp1p1pbp/4p1p1/2p5/3nP3/3PB1P1/PPP1NPBP/R2QK1NR b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 e6 6. Be3 Nd4 7. Nce2"
  },
  {
    "name": "Sicilian Defense: Coles Sicilian Gambit",
    "eco": "B21",
    "fen": "r1bqkb1r/pp1ppppp/2n2n2/8/2B1P3/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. Qxd4 Nc6 4. Qd1 Nf6 5. Bc4"
  },
  {
    "name": "Sicilian Defense: Delayed Alapin",
    "eco": "B50",
    "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. c3"
  },
  {
    "name": "Sicilian Defense: Delayed Alapin Variation",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. c3"
  },
  {
    "name": "Sicilian Defense: Delayed Alapin, Basman-Palatnik Double Gambit",
    "eco": "B50",
    "fen": "r1b1kb1r/pp2pppp/2np4/q2P4/8/2P2N2/P3BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. c3 Nf6 4. Be2 Nc6 5. d4 cxd4 6. cxd4 Nxe4 7. d5 Qa5+ 8. Nc3 Nxc3 9. bxc3"
  },
  {
    "name": "Sicilian Defense: Delayed Alapin, Basman-Palatnik Gambit",
    "eco": "B50",
    "fen": "r1bqkb1r/pp2pppp/2np4/8/3Pn3/5N2/PP2BPPP/RNBQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. c3 Nf6 4. Be2 Nc6 5. d4 cxd4 6. cxd4 Nxe4"
  },
  {
    "name": "Sicilian Defense: Double-Dutch Gambit",
    "eco": "B28",
    "fen": "rnbqkb1r/pp1pp1pp/7n/2p2P2/8/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 f5 3. exf5 Nh6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation",
    "eco": "B70",
    "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation",
    "eco": "B72",
    "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, 6. Be3 Bg7 7. Be2 Nc6",
    "eco": "B73",
    "fen": "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2 Nc6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, 7. O-O Nc6 8. Be3",
    "eco": "B73",
    "fen": "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O Nc6 8. Be3"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, 7. Be2 Nc6 8. Nb3",
    "eco": "B72",
    "fen": "r1bqk2r/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2 Nc6 8. Nb3"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, Alekhine Line",
    "eco": "B74",
    "fen": "r1bq1rk1/1p2ppbp/2np1np1/p7/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Be2 O-O 8. O-O d6 9. Nb3 a5"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, Battery Variation",
    "eco": "B73",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R4RK1 b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Qd2"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, Maroczy Line",
    "eco": "B74",
    "fen": "r2q1rk1/pp2ppbp/3pbnp1/n7/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Na5"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, Normal Line",
    "eco": "B74",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, Stockholm Attack",
    "eco": "B74",
    "fen": "r4rk1/pp2ppbp/3p1np1/q4P2/4P1P1/2N1B3/PPP1Q2P/R4RK1 b -",
    "moves": "1. e4 c5 2. Nc3 d6 3. f4 Nc6 4. Nf3 g6 5. d4 cxd4 6. Nxd4 Bg7 7. Be3 Nf6 8. Be2 O-O 9. Nb3 Be6 10. O-O Na5 11. f5 Bc4 12. Nxa5 Bxe2 13. Qxe2 Qxa5 14. g4"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Classical Variation, Tartakower Line",
    "eco": "B74",
    "fen": "r1q2rk1/pp2ppbp/2npbnp1/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Qc8"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Fianchetto Variation",
    "eco": "B70",
    "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. g3"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Levenfish Variation",
    "eco": "B71",
    "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Levenfish Variation, Main Line",
    "eco": "B71",
    "fen": "r1bqkb1r/pp1npp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4 Nbd7"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Modern Bc4 Variation",
    "eco": "B35",
    "fen": "r1bqk2r/pp2ppbp/2np1np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Bc4 d6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack",
    "eco": "B76",
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, 7. f3 O-O 8. Qd2 Nc6",
    "eco": "B77",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, 8. Qd2 Nc6 9. Bc4 Bd7",
    "eco": "B77",
    "fen": "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, 9. Bc4 Bd7 10. O-O-O",
    "eco": "B78",
    "fen": "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Belezky Line",
    "eco": "B76",
    "fen": "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Czerniak Variation",
    "eco": "B77",
    "fen": "r2q1rk1/pp2ppbp/3pbnp1/8/2BBP3/2N2P2/PPPQ2PP/R3K2R w KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. Bc4 Nxd4 10. Bxd4 Be6"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Early Deviations",
    "eco": "B75",
    "fen": "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Main Line",
    "eco": "B77",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R b KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Modern Line",
    "eco": "B76",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. O-O-O"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Old Line",
    "eco": "B78",
    "fen": "2rq1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Panov Variation",
    "eco": "B76",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/3NP1P1/2N1BP2/PPPQ3P/R3KB1R b KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. g4"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Soltis Variation",
    "eco": "B79",
    "fen": "r1r3k1/pp1bppb1/2np1np1/q6p/3NP2P/1BN1BP2/PPPQ2P1/2KR3R w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Qa5 11. h4 Rfc8 12. Bb3 h5"
  },
  {
    "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Sosonko Variation",
    "eco": "B77",
    "fen": "r1bq1rk1/pp1nppbp/2np2p1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. Bc4 Nd7"
  },
  {
    "name": "Sicilian Defense: Dragon, 6. Be3",
    "eco": "B72",
    "fen": "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3"
  },
  {
    "name": "Sicilian Defense: Dragon, Classical Attack",
    "eco": "B72",
    "fen": "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2"
  },
  {
    "name": "Sicilian Defense: Dragon, Classical, Amsterdam Variation",
    "eco": "B72",
    "fen": "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R3K2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 g6 7. Be3 Bg7 8. Qd2"
  },
  {
    "name": "Sicilian Defense: Dragon, Classical, Bernard Defense",
    "eco": "B74",
    "fen": "r2q1rk1/pp2ppbp/5np1/n2p1P2/4P3/1NNPB3/PP4PP/R2Q1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Na5 11. f5 Bc4 12. Bd3 Bxd3 13. cxd3 d5"
  },
  {
    "name": "Sicilian Defense: Dragon, Classical, Grigoriev Variation",
    "eco": "B72",
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/2KR3R b -",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 g6 7. Be3 Bg7 8. Qd2 O-O 9. O-O-O"
  },
  {
    "name": "Sicilian Defense: Dragon, Classical, Spielmann Variation",
    "eco": "B74",
    "fen": "r2q1rk1/pp2ppbp/3p1np1/n4P2/2b1P3/1NNBB3/PPP3PP/R2Q1RK1 b -",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Be2 O-O 8. Nb3 d6 9. O-O Be6 10. f4 Na5 11. f5 Bc4 12. Bd3"
  },
  {
    "name": "Sicilian Defense: Dragon, Classical, Zollner Gambit",
    "eco": "B73",
    "fen": "r1b2rk1/pp2ppbp/1qnp1np1/4P3/3N1P2/2N1B3/PPP1B1PP/R2Q1RK1 b -",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Be3 Bg7 6. Be2 Nf6 7. Nc3 O-O 8. O-O d6 9. f4 Qb6 10. e5"
  },
  {
    "name": "Sicilian Defense: Dragon, Yugoslav Attack, 12. h4",
    "eco": "B79",
    "fen": "r1r3k1/pp1bppbp/2np1np1/q7/3NP2P/1BN1BP2/PPPQ2P1/2KR3R b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. h4 Qa5 11. O-O-O Rfc8 12. Bb3"
  },
  {
    "name": "Sicilian Defense: Dragon, Yugoslav Attack, Byrne Variation",
    "eco": "B77",
    "fen": "r1bq1rk1/1p2ppbp/2np1np1/p7/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 a5"
  },
  {
    "name": "Sicilian Defense: Drazic Variation",
    "eco": "B40",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 e6 2. d4 c5 3. Nf3 a6"
  },
  {
    "name": "Sicilian Defense: Flohr Variation",
    "eco": "B32",
    "fen": "r1b1kbnr/ppqppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qc7"
  },
  {
    "name": "Sicilian Defense: Four Knights Variation",
    "eco": "B45",
    "fen": "r1bqkb1r/pp1p1ppp/2n1pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6"
  },
  {
    "name": "Sicilian Defense: Four Knights Variation, Cobra Variation",
    "eco": "B45",
    "fen": "r1bqk2r/pp1p1ppp/2n1pn2/1Nb5/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6 6. Ndb5 Bc5"
  },
  {
    "name": "Sicilian Defense: Four Knights Variation, Exchange Variation",
    "eco": "B45",
    "fen": "r1bqkb1r/pp1p1ppp/2N1pn2/8/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Nxc6"
  },
  {
    "name": "Sicilian Defense: Franco-Sicilian Variation",
    "eco": "B32",
    "fen": "r1bqkbnr/pp1p1ppp/2n1p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 e6"
  },
  {
    "name": "Sicilian Defense: Frederico Variation",
    "eco": "B27",
    "fen": "rnbqkbnr/pp1pp2p/6p1/2p2p2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 f5"
  },
  {
    "name": "Sicilian Defense: French Variation",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6"
  },
  {
    "name": "Sicilian Defense: French Variation, Normal",
    "eco": "B40",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6"
  },
  {
    "name": "Sicilian Defense: French Variation, Open",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4"
  },
  {
    "name": "Sicilian Defense: French Variation, Westerinen Attack",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. b3"
  },
  {
    "name": "Sicilian Defense: Gaw-Paw Variation",
    "eco": "B40",
    "fen": "rnb1kb1r/pp1p1ppp/1q2pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Qb6"
  },
  {
    "name": "Sicilian Defense: Gloria Variation",
    "eco": "B20",
    "fen": "r1bqkbnr/pp2ppp1/2np4/2p4p/2P1P3/2N3P1/PP1P1P1P/R1BQKBNR w KQkq",
    "moves": "1. e4 c5 2. c4 d6 3. Nc3 Nc6 4. g3 h5"
  },
  {
    "name": "Sicilian Defense: Godiva Variation",
    "eco": "B32",
    "fen": "r1b1kbnr/pp1ppppp/1qn5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qb6"
  },
  {
    "name": "Sicilian Defense: Grand Prix Attack",
    "eco": "B23",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. f4"
  },
  {
    "name": "Sicilian Defense: Grand Prix Attack, Schofman Variation",
    "eco": "B23",
    "fen": "r1bqk1nr/pp1p1pbp/2n1p1p1/2p2P2/2B1P3/2N2N2/PPPP2PP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. f5"
  },
  {
    "name": "Sicilian Defense: Grob Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. g4"
  },
  {
    "name": "Sicilian Defense: Halasz Gambit",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. f4"
  },
  {
    "name": "Sicilian Defense: Hyperaccelerated Dragon",
    "eco": "B27",
    "fen": "rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6"
  },
  {
    "name": "Sicilian Defense: Hyperaccelerated Fianchetto",
    "eco": "A42",
    "fen": "rnbqkbnr/pp1ppp1p/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4"
  },
  {
    "name": "Sicilian Defense: Hyperaccelerated Pterodactyl",
    "eco": "B27",
    "fen": "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7"
  },
  {
    "name": "Sicilian Defense: Hyperaccelerated Pterodactyl, Exchange Variation",
    "eco": "B27",
    "fen": "rnb1k1nr/pp1ppp1p/6p1/2P5/4P3/2q2N2/P1P2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ 5. Nc3 Bxc3+ 6. bxc3 Qxc3+"
  },
  {
    "name": "Sicilian Defense: Jalalabad Variation",
    "eco": "B27",
    "fen": "rnbqkbnr/pp1p1ppp/8/2p1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e5"
  },
  {
    "name": "Sicilian Defense: Kalashnikov Variation",
    "eco": "B32",
    "fen": "r1bqkbnr/pp3ppp/2np4/1N2p3/4P3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5 5. Nb5 d6"
  },
  {
    "name": "Sicilian Defense: Kan Variation",
    "eco": "B41",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Knight Variation",
    "eco": "B43",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Maroczy Bind, Bronstein Variation",
    "eco": "B41",
    "fen": "r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2NB4/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 6. Nc3 Bb4 7. Bd3 Nc6"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Maroczy Bind, Hedgehog Variation",
    "eco": "B41",
    "fen": "rnbqkbnr/1p1p1p1p/p3p1p1/8/2PNP3/8/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 g6"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Maroczy Bind, Reti Variation",
    "eco": "B41",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Modern Variation",
    "eco": "B42",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Polugaevsky Variation",
    "eco": "B42",
    "fen": "rnbqk1nr/1p1p1ppp/p3p3/2b5/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Bc5"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Swiss Cheese Variation",
    "eco": "B42",
    "fen": "rnbqkbnr/1p1p1p1p/p3p1p1/8/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 g6"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Wing Attack",
    "eco": "B43",
    "fen": "rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Wing Attack, Christiansen's Dream",
    "eco": "B43",
    "fen": "rnb1k1nr/3p1ppp/pq2p3/1pb5/3NP1Q1/2NBB3/PPP2PPP/R3K2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5 6. Bd3 Qb6 7. Be3 Bc5 8. Qg4"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Wing Attack, Fianchetto Variation",
    "eco": "B43",
    "fen": "rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. Nc3 a6 4. g3 b5 5. d4 cxd4 6. Nxd4"
  },
  {
    "name": "Sicilian Defense: Kan Variation, Wing Attack, Spraggett Attack",
    "eco": "B43",
    "fen": "rnb1kbnr/3p1ppp/pq2p3/1p6/4P3/2NB1N2/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5 6. Bd3 Qb6 7. Nf3"
  },
  {
    "name": "Sicilian Defense: Kan, Gipslis Variation",
    "eco": "B42",
    "fen": "rnbqkb1r/1p3p1p/p2ppnp1/8/2PNP3/3B4/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nf6 6. O-O d6 7. c4 g6"
  },
  {
    "name": "Sicilian Defense: Kan, Maroczy Bind, Bronstein Variation",
    "eco": "B41",
    "fen": "r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2N5/PPB2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 6. Nc3 Bb4 7. Bd3 Nc6 8. Bc2"
  },
  {
    "name": "Sicilian Defense: Katalimov Variation",
    "eco": "B27",
    "fen": "rnbqkbnr/p2ppppp/1p6/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 b6"
  },
  {
    "name": "Sicilian Defense: Keres Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPNPPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Ne2"
  },
  {
    "name": "Sicilian Defense: King David's Opening",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPKPPP/RNBQ1BNR b kq",
    "moves": "1. e4 c5 2. Ke2"
  },
  {
    "name": "Sicilian Defense: Kotov Gambit",
    "eco": "B50",
    "fen": "rnbqkbnr/p3pppp/3p4/1pp5/4P3/5NP1/PPPP1P1P/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. g3 b5"
  },
  {
    "name": "Sicilian Defense: Kramnik Variation",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. c4"
  },
  {
    "name": "Sicilian Defense: Kronberger Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/N7/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 c5 2. Na3"
  },
  {
    "name": "Sicilian Defense: Kronberger Variation, Nemeth Gambit",
    "eco": "B20",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/2BpP3/N7/PPP2PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 c5 2. Na3 Nc6 3. d4 cxd4 4. Bc4"
  },
  {
    "name": "Sicilian Defense: Kupreichik Variation",
    "eco": "B56",
    "fen": "rn1qkb1r/pp1bpppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bd7"
  },
  {
    "name": "Sicilian Defense: Kveinis Variation",
    "eco": "B40",
    "fen": "rnb1kbnr/pp1p1ppp/1q2p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Qb6"
  },
  {
    "name": "Sicilian Defense: Lasker-Dunne Attack",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. g3"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation",
    "eco": "B33",
    "fen": "r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Bird Variation",
    "eco": "B33",
    "fen": "r2qkb1r/1p3ppp/p1npbn2/4p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 Be6"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Exchange Variation",
    "eco": "B33",
    "fen": "r1bqkb1r/pp1p1ppp/2N2n2/4p3/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Nxc6"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Retreat Variation",
    "eco": "B33",
    "fen": "r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Nf3"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Schlechter Variation",
    "eco": "B33",
    "fen": "r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/1NN5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Nb3"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation",
    "eco": "B33",
    "fen": "r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, 9. Bxf6 gxf6 10. Nd5 f5",
    "eco": "B33",
    "fen": "r1bqkb1r/5p1p/p1np4/1p1Npp2/4P3/N7/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 f5"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Chelyabinsk Variation",
    "eco": "B33",
    "fen": "r1bqkb1r/5ppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Novosibirsk Variation",
    "eco": "B33",
    "fen": "r1bqk2r/5pbp/p1np1p2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 Bg7"
  },
  {
    "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Peresypkin's Sacrifice",
    "eco": "B33",
    "fen": "r1bqkb1r/5p1p/p1np4/1B1Npp2/4P3/N7/PPP2PPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 f5 11. Bxb5"
  },
  {
    "name": "Sicilian Defense: Loewenthal Variation",
    "eco": "B32",
    "fen": "r1bqkbnr/pp1p1ppp/2n5/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5"
  },
  {
    "name": "Sicilian Defense: Magnus Smith Trap",
    "eco": "B57",
    "fen": "r1bqkb1r/p3pp1p/2pp1np1/4P3/2B5/2N5/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 g6 7. Nxc6 bxc6 8. e5"
  },
  {
    "name": "Sicilian Defense: Marshall Counterattack",
    "eco": "B40",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 d5"
  },
  {
    "name": "Sicilian Defense: Marshall Gambit",
    "eco": "B23",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 c5 2. Nc3 e6 3. d4 d5"
  },
  {
    "name": "Sicilian Defense: McDonnell Attack",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4PP2/8/PPPP2PP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. f4"
  },
  {
    "name": "Sicilian Defense: McDonnell Attack, Tal Gambit",
    "eco": "B21",
    "fen": "rnbqkb1r/pp2pppp/5n2/2pP4/5P2/8/PPPP2PP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. f4 d5 3. exd5 Nf6"
  },
  {
    "name": "Sicilian Defense: Mengarini Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/P7/1PPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. a3"
  },
  {
    "name": "Sicilian Defense: Modern Variations",
    "eco": "B56",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3"
  },
  {
    "name": "Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order",
    "eco": "B50",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 Nf6"
  },
  {
    "name": "Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order Accepted",
    "eco": "B50",
    "fen": "rnbqkb1r/pp2pppp/3p4/2P5/4n3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 Nf6 4. dxc5 Nxe4"
  },
  {
    "name": "Sicilian Defense: Modern Variations, Main Line",
    "eco": "B57",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6"
  },
  {
    "name": "Sicilian Defense: Modern Variations, Tartakower",
    "eco": "B53",
    "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. c3"
  },
  {
    "name": "Sicilian Defense: Mongoose Variation",
    "eco": "B27",
    "fen": "rnb1kbnr/pp1ppppp/8/q1p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Qa5"
  },
  {
    "name": "Sicilian Defense: Morphy Gambit",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 c5 2. e4 cxd4 3. Nf3"
  },
  {
    "name": "Sicilian Defense: Morphy Gambit, Andreaschek Gambit",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 c5 2. e4 cxd4 3. Nf3 e5 4. c3"
  },
  {
    "name": "Sicilian Defense: Myers Attack",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P2P/8/PPPP1PP1/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. h4"
  },
  {
    "name": "Sicilian Defense: Myers Attack, 2. a4",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/P3P3/8/1PPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. a4"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, 5. Nc3 a6 6. Bg5",
    "eco": "B94",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, 5. Nc3 a6 6. Bg5 e6",
    "eco": "B95",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, 6. Bg5 e6 7. f4",
    "eco": "B96",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, 6. Bg5 e6 7. f4 Be7",
    "eco": "B98",
    "fen": "rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Adams Attack",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N4P/PPP2PP1/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. h3"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Amsterdam Variation",
    "eco": "B93",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Browne Variation",
    "eco": "B98",
    "fen": "rnb1k2r/1pq1bpp1/p2ppn1p/8/3NPP1B/2N2Q2/PPP3PP/R3KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 h6 9. Bh4 Qc7"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Dekker Gambit",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. g4"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, English Attack",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, English Attack, Anti-English",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p4/8/3NP1n1/2N1B3/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 Ng4"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Freak Attack",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKBR1 b Qkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Rg1"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Goteborg (Argentine)",
    "eco": "B98",
    "fen": "rnbqk2r/1p2bp2/p2ppn1p/6p1/3NPP1B/2N2Q2/PPP3PP/R3KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 h6 9. Bh4 g5"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Main Line",
    "eco": "B99",
    "fen": "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R w kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7 9. O-O-O Nbd7"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Neo-Classical Defense",
    "eco": "B96",
    "fen": "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Nc6"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Opocensky Variation",
    "eco": "B92",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Opocensky Variation, Modern Line",
    "eco": "B92",
    "fen": "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be7 8. O-O Be6"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Opocensky Variation, Traditional Line",
    "eco": "B92",
    "fen": "rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be7 8. O-O O-O"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted",
    "eco": "B97",
    "fen": "rnb1kb1r/1p3ppp/p2ppn2/6B1/3NPP2/q1N5/P1PQ2PP/1R2KB1R w Kkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Qd2 Qxb2 9. Rb1 Qa3"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Poisoned Pawn Variation",
    "eco": "B97",
    "fen": "rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Polugaevsky Variation",
    "eco": "B96",
    "fen": "rnbqkb1r/5ppp/p2ppn2/1p4B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 b5"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Polugaevsky Variation, Simagin Line",
    "eco": "B96",
    "fen": "rnb1kb1r/2q2ppp/p3pn2/1p2P1B1/3N4/2N5/PPP1Q1PP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 b5 8. e5 dxe5 9. fxe5 Qc7 10. Qe2"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Scheveningen Variation",
    "eco": "B84",
    "fen": "r1bqkb1r/1p1n1ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6 7. O-O Nbd7"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Traditional Line",
    "eco": "B98",
    "fen": "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7"
  },
  {
    "name": "Sicilian Defense: Najdorf Variation, Zagreb (Fianchetto) Variation",
    "eco": "B91",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. g3"
  },
  {
    "name": "Sicilian Defense: Najdorf, Ivkov Variation",
    "eco": "B94",
    "fen": "r3kb1r/1b3ppp/p2ppn2/qpn1P1B1/3N4/1BN5/PPPQ1PPP/2KRR3 b kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 Nbd7 7. Bc4 Qa5 8. Qd2 e6 9. O-O-O b5 10. Bb3 Bb7 11. Rhe1 Nc5 12. e5"
  },
  {
    "name": "Sicilian Defense: Najdorf, Lipnitsky Attack",
    "eco": "B90",
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4"
  },
  {
    "name": "Sicilian Defense: Nimzo-American Variation",
    "eco": "B32",
    "fen": "r1bqkbnr/pp2pppp/2n5/3p4/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 d5"
  },
  {
    "name": "Sicilian Defense: Nimzowitsch Variation",
    "eco": "B29",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nf6"
  },
  {
    "name": "Sicilian Defense: Nimzowitsch Variation, Advance Variation",
    "eco": "B29",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nf6 3. e5"
  },
  {
    "name": "Sicilian Defense: Nimzowitsch Variation, Closed Variation",
    "eco": "B29",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nf6 3. Nc3"
  },
  {
    "name": "Sicilian Defense: Nimzowitsch Variation, Exchange Variation",
    "eco": "B29",
    "fen": "rnbqkb1r/pp1ppppp/8/2p1P3/8/2n2N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nf6 3. e5 Nd5 4. Nc3 Nxc3"
  },
  {
    "name": "Sicilian Defense: Nimzowitsch Variation, Main Line",
    "eco": "B29",
    "fen": "r1bqkb1r/pp1p1ppp/2n5/2ppP3/3P4/5N2/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nf6 3. e5 Nd5 4. Nc3 e6 5. Nxd5 exd5 6. d4 Nc6"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack",
    "eco": "B30",
    "fen": "r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation",
    "eco": "B31",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 g6"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Gufeld Gambit",
    "eco": "B31",
    "fen": "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. c3 e5 6. d4"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Lutikov Gambit",
    "eco": "B31",
    "fen": "r1bqk2r/pp1pppbp/2n2np1/1Bp5/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. c3 Nf6 6. d4"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Totsky Attack",
    "eco": "B31",
    "fen": "r1bqk2r/pp1pppbp/2n2np1/1Bp5/Q3P3/2P2N2/PP1P1PPP/RNB2RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. c3 Nf6 6. Qa4"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Gurgenidze Variation",
    "eco": "B31",
    "fen": "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/1P2P3/5N2/P1PP1PPP/RNBQR1K1 b kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. Re1 e5 6. b4"
  },
  {
    "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, San Francisco Gambit",
    "eco": "B31",
    "fen": "r1bqkbnr/pp1ppppp/8/nBp5/1P2P3/5N2/P1PP1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 Na5 4. b4"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Aronin System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPPBPPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. Be2"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Kieseritzky System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. b3"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Maroczy Bind",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c4"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Maroczy Bind, Geller Line",
    "eco": "B28",
    "fen": "r1bqkbnr/1p1p1ppp/p1n5/4p3/2PNP3/8/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 a6 5. c4 e5"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Maroczy Bind, Paulsen Line",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c4 e6"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Maroczy Bind, Robatsch Line",
    "eco": "B28",
    "fen": "rnbqkbnr/1p2pppp/p2p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c4 d6"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Normal System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. d4"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Normal System, Cortlever Gambit",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. Bc4"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Normal System, Smith-Morra Line",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. c3"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Normal System, Taimanov Line",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1p1ppp/p7/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. Nxd4 e5"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Normal System, Zagorovsky Line",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. Qxd4"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Quiet System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. d3"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Reti System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5NP1/PPPP1P1P/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. g3"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Venice System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c3"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Venice System, Barcza Line",
    "eco": "B28",
    "fen": "rnbqkb1r/1p1ppppp/p4n2/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c3 Nf6"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Venice System, Gambit Line",
    "eco": "B28",
    "fen": "rnbqkb1r/1p2pppp/p4n2/2pP4/8/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c3 d5 4. exd5 Nf6"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Venice System, Ljubojevic Line",
    "eco": "B28",
    "fen": "rnbqkbnr/3ppppp/p7/1pp5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c3 b5"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Venice System, Steiner Line",
    "eco": "B28",
    "fen": "rnbqkbnr/1p2pppp/p2p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. c3 d6"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Wing Gambit",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. b4"
  },
  {
    "name": "Sicilian Defense: O'Kelly Variation, Yerevan System",
    "eco": "B28",
    "fen": "rnbqkbnr/1p1ppppp/p7/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 a6 3. Nc3"
  },
  {
    "name": "Sicilian Defense: Old Sicilian",
    "eco": "B30",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6"
  },
  {
    "name": "Sicilian Defense: Open",
    "eco": "B32",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4"
  },
  {
    "name": "Sicilian Defense: Open, 2. Nf3 Nc6 3. d4 cxd4",
    "eco": "B32",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4"
  },
  {
    "name": "Sicilian Defense: Open, 3. d4 cxd4 4. Nxd4",
    "eco": "B32",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4"
  },
  {
    "name": "Sicilian Defense: Open, 3. d4 cxd4 4. Nxd4 Nf6",
    "eco": "B33",
    "fen": "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation",
    "eco": "B44",
    "fen": "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, 4. Nxd4 Nc6 5. Nc3 a6",
    "eco": "B46",
    "fen": "r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 a6"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, American Attack",
    "eco": "B45",
    "fen": "r1bqk2r/pp1p1ppp/2nNpn2/8/1b2P3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Ndb5 Bb4 7. Nd6+"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation",
    "eco": "B47",
    "fen": "r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, 5. Nc3 Qc7 6. Be3",
    "eco": "B48",
    "fen": "r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, 6. Be3 a6 7. Be2",
    "eco": "B49",
    "fen": "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPP1BPPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3 a6 7. Be2"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, English Attack",
    "eco": "B49",
    "fen": "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qc7 5. Nc3 e6 6. Be3 a6 7. f3"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, English Attack, 6. Be3 a6 7. Qd2",
    "eco": "B48",
    "fen": "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3 a6 7. Qd2"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, Ponomariov Gambit",
    "eco": "B48",
    "fen": "rqb1kbnr/1p1p1ppp/pBn1p3/1N6/4P3/2N5/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Ndb5 Qb8 7. Be3 a6 8. Bb6"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Gary Gambit",
    "eco": "B44",
    "fen": "r1bqkb1r/1p3ppp/p1n1pn2/3p4/2P1P3/N1N5/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Modern Line",
    "eco": "B44",
    "fen": "r1bq1rk1/4bppp/ppnppn2/8/2P1P3/N1N5/PP2BPPP/R1BQ1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 Be7 9. Be2 O-O 10. O-O b6"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Normal Variation",
    "eco": "B45",
    "fen": "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Szen Variation",
    "eco": "B44",
    "fen": "r1bqkbnr/pp1p1ppp/2n1p3/1N6/4P3/8/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5"
  },
  {
    "name": "Sicilian Defense: Paulsen Variation, Taimanov Variation",
    "eco": "B46",
    "fen": "r1bqkb1r/1p1pnppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 a6 6. Be2 Nge7"
  },
  {
    "name": "Sicilian Defense: Paulsen-Basman Defense",
    "eco": "B40",
    "fen": "rnbqk1nr/pp1p1ppp/4p3/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Bc5"
  },
  {
    "name": "Sicilian Defense: Pin Variation",
    "eco": "B40",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bb4"
  },
  {
    "name": "Sicilian Defense: Pin Variation, Jaffe Variation",
    "eco": "B40",
    "fen": "rnbqk2r/pp1p1ppp/5n2/4p3/1b1NP3/2NB4/PPP2PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bb4 6. Bd3 e5"
  },
  {
    "name": "Sicilian Defense: Pin Variation, Koch Variation",
    "eco": "B40",
    "fen": "rnbqk2r/pp1p1ppp/4pn2/4P3/1b1N4/2N5/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bb4 6. e5"
  },
  {
    "name": "Sicilian Defense: Polish Gambit",
    "eco": "B27",
    "fen": "rnbqkbnr/p2ppppp/8/1pp5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 b5"
  },
  {
    "name": "Sicilian Defense: Prins Variation",
    "eco": "B54",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/5P2/PPP3PP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. f3"
  },
  {
    "name": "Sicilian Defense: Prins Variation, Venice Attack",
    "eco": "B55",
    "fen": "rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/5P2/PPP3PP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. f3 e5 6. Bb5+"
  },
  {
    "name": "Sicilian Defense: Quinteros Variation",
    "eco": "B27",
    "fen": "rnb1kbnr/ppqppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Qc7"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation",
    "eco": "B60",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, 6. Bg5 e6 7. Qd3",
    "eco": "B62",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2NQ4/PPP2PPP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd3"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation",
    "eco": "B63",
    "fen": "r1bqk2r/pp2bppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation, 8. O-O-O O-O 9. f4",
    "eco": "B64",
    "fen": "r1bq1rk1/pp2bppp/2nppn2/6B1/3NPP2/2N5/PPPQ2PP/2KR1B1R b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation, 8. O-O-O O-O 9. f4 e5",
    "eco": "B64",
    "fen": "r1bq1rk1/pp2bppp/2np1n2/4p1B1/3NPP2/2N5/PPPQ2PP/2KR1B1R w -",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4 e5"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation, 9. f4 Nxd4 10. Qxd4",
    "eco": "B65",
    "fen": "r1bq1rk1/pp2bppp/3ppn2/6B1/3QPP2/2N5/PPP3PP/2KR1B1R b -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4 Nxd4 10. Qxd4"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation, Kantscher Line",
    "eco": "B66",
    "fen": "r1bqk2r/4bppp/p2ppn2/1p4B1/3QPP2/2N5/PPP3PP/2KR1B1R w kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O Nxd4 9. Qxd4 a6 10. f4 b5"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Dragon Variation",
    "eco": "B60",
    "fen": "r1bqkb1r/pp2pp1p/2np1np1/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 g6"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Exchange Variation",
    "eco": "B62",
    "fen": "r1bqkb1r/pp3ppp/2Nppn2/6B1/4P3/2N5/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Nxc6"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Ivanov Variation",
    "eco": "B63",
    "fen": "r1b1kb1r/pp3ppp/1qnppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Qb6"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Modern Variation",
    "eco": "B60",
    "fen": "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 Bd7"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Modern Variation, 6. Bg5 Bd7 7. Qd2",
    "eco": "B61",
    "fen": "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 Bd7 7. Qd2"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation",
    "eco": "B67",
    "fen": "r2qkb1r/1p1b1ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R w kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, 8. O-O-O Bd7 9. f4 Be7",
    "eco": "B68",
    "fen": "r2qk2r/1p1bbppp/p1nppn2/6B1/3NPP2/2N5/PPPQ2PP/2KR1B1R w kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7 9. f4 Be7"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Early Deviations",
    "eco": "B62",
    "fen": "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 a6"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Nyezhmetdinov Attack",
    "eco": "B69",
    "fen": "r2qk2r/3bbppp/p1nppB2/1p6/4PP2/2N2N2/PPPQ2PP/2KR1B1R b kq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7 9. f4 Be7 10. Nf3 b5 11. Bxf6"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Podebrady Variation",
    "eco": "B62",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/6B1/4P3/1NN5/PPP2PPP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Nb3"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Traditional Variation",
    "eco": "B63",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer Variation, Vitolins Variation",
    "eco": "B62",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/1B4B1/3NP3/2N5/PPP2PPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Bb5"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer, 6... e6",
    "eco": "B62",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6"
  },
  {
    "name": "Sicilian Defense: Richter-Rauzer, Rauzer Attack, 7... Be7 Defense: 9... Nxd4",
    "eco": "B65",
    "fen": "r1bq1rk1/pp2bppp/3ppn2/6B1/3nPP2/2N5/PPPQ2PP/2KR1B1R w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4 Nxd4"
  },
  {
    "name": "Sicilian Defense: Rossolimo Variation, Brooklyn Retreat Defense",
    "eco": "B31",
    "fen": "rnbqkbnr/pp1ppppp/8/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. Bb5 Nb8"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation",
    "eco": "B80",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Classical Variation",
    "eco": "B83",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, 5. Nc3 a6 6. Be2 e6",
    "eco": "B84",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, 6. Be2 e6 7. O-O Qc7",
    "eco": "B84",
    "fen": "rnb1kb1r/1pq2ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6 7. O-O Qc7"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation",
    "eco": "B85",
    "fen": "r1b1kb1r/1pq2ppp/p1nppn2/8/3NPP2/2N5/PPP1B1PP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 e6 7. Be2 Qc7 8. O-O Nc6"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation, 8. Be3 d6 9. f4",
    "eco": "B85",
    "fen": "r1b1kb1r/1pq2ppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1 b kq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be2 a6 7. O-O Nf6 8. Be3 d6 9. f4"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation, 9. f4 d6 10. a4",
    "eco": "B85",
    "fen": "r1b1k2r/1pq1bppp/p1nppn2/8/P2NPP2/2N5/1PP1B1PP/R1BQ1R1K b kq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be2 a6 7. O-O Nf6 8. Kh1 Be7 9. f4 d6 10. a4"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Delayed Keres Attack",
    "eco": "B81",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/3NP1P1/2N1B3/PPP2P1P/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Delayed Keres Attack, Perenyi Gambit",
    "eco": "B81",
    "fen": "rnbqkb1r/1p3p1p/p2p1np1/4pNP1/4P3/2N1B3/PPP2P1P/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 e5 8. Nf5 g6 9. g5"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, English Attack",
    "eco": "B80",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. f3"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, English Attack, 6. Be3 e6 7. Qd2",
    "eco": "B80",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. Qd2"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Fianchetto Variation",
    "eco": "B80",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g3"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Keres Attack",
    "eco": "B81",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Matanovic Attack",
    "eco": "B82",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. f4"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Modern Variation",
    "eco": "B83",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 d6 6. Be2 Nf6"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Modern Variation, 8. f4 Nc6 9. Be3",
    "eco": "B83",
    "fen": "r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1 b -",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 Be7 7. O-O O-O 8. f4 Nc6 9. Be3"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Modern Variation, 9. Be3 Bd7 10. Nb3",
    "eco": "B83",
    "fen": "r2q1rk1/pp1bbppp/2nppn2/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 b -",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 Be7 7. O-O O-O 8. f4 Nc6 9. Be3 Bd7 10. Nb3"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Tal Variation",
    "eco": "B82",
    "fen": "r1bqk2r/pp2bppp/2nppn2/8/3NPP2/2N1BQ2/PPP3PP/R3KB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. f4 Nc6 7. Be3 Be7 8. Qf3"
  },
  {
    "name": "Sicilian Defense: Scheveningen Variation, Vitolins Variation",
    "eco": "B80",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/1B6/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bb5+"
  },
  {
    "name": "Sicilian Defense: Scheveningen, Classical Main Line",
    "eco": "B85",
    "fen": "r1b2rk1/1pq1bppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R3QRK1 w -",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be2 a6 7. O-O Nf6 8. Be3 Be7 9. f4 d6 10. Qe1 O-O"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. d4"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit, 2. d4 cxd4 3. c3",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Chicago Defense",
    "eco": "B21",
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 d6 5. Nf3 e6 6. Bc4 Nf6 7. O-O a6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Classical Formation",
    "eco": "B21",
    "fen": "r1bqkb1r/1p2pppp/p1np1n2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 d6 6. Bc4 a6 7. O-O Nf6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Fianchetto Defense",
    "eco": "B21",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 g6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Kan Formation",
    "eco": "B21",
    "fen": "rnbqkbnr/1p1p1ppp/p3p3/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 e6 5. Nf3 a6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Larsen Defense",
    "eco": "B21",
    "fen": "r1b1k1nr/1pqp1ppp/p1nbp3/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Qc7 7. Qe2 a6 8. O-O Bd6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense",
    "eco": "B21",
    "fen": "r1bqk1nr/pp1p1ppp/2n1p3/2b5/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Bc5"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense Deferred",
    "eco": "B21",
    "fen": "r1bqk1nr/3p1ppp/p1n1p3/1pb5/4P3/1BN2N2/PP3PPP/R1BQ1RK1 w kq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 a6 7. O-O b5 8. Bb3 Bc5"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Paulsen Formation",
    "eco": "B21",
    "fen": "r1bqkbnr/1p1p1ppp/p1n1p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 a6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Pin Defense",
    "eco": "B21",
    "fen": "r1bqk1nr/pp1p1ppp/2n1p3/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Bb4"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Scheveningen Formation",
    "eco": "B21",
    "fen": "r1bqkbnr/pp3ppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 d6 6. Bc4 e6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Sozin Formation",
    "eco": "B21",
    "fen": "r1bqkbnr/5ppp/p1npp3/1p6/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Bc4 e6 6. Nf3 d6 7. O-O a6 8. Qe2 b5"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Taimanov Formation",
    "eco": "B21",
    "fen": "rnbqkb1r/1p1pnppp/p3p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 e6 5. Bc4 a6 6. Nf3 Ne7"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Declined, Alapin Formation",
    "eco": "B21",
    "fen": "rnbqkb1r/pp1ppppp/5n2/8/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 Nf6"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Declined, Center Formation",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. c3 e5 3. d4 cxd4"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Declined, Dubois Variation",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/8/2P1P3/3p4/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 d3 4. c4"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Declined, Push Variation",
    "eco": "B21",
    "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2Pp4/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 d3"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Declined, Scandinavian Formation",
    "eco": "B21",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 d5"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Declined, Wing Formation",
    "eco": "B21",
    "fen": "rnb1kbnr/pp1ppppp/8/q7/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 Qa5"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit Deferred",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. c3"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit, Chicago Defense",
    "eco": "B21",
    "fen": "2bqkbnr/r4ppp/p1npp3/1p6/4P3/1BN2N2/PP2QPPP/R1B2RK1 w k",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Bc4 e6 6. Nf3 d6 7. O-O a6 8. Qe2 b5 9. Bb3 Ra7"
  },
  {
    "name": "Sicilian Defense: Smith-Morra Gambit, Danish Variation",
    "eco": "C21",
    "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2p2N2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nf3"
  },
  {
    "name": "Sicilian Defense: Snyder Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. b3"
  },
  {
    "name": "Sicilian Defense: Snyder Variation, Queen Fianchetto Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/p2ppppp/1p6/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. b3 b6"
  },
  {
    "name": "Sicilian Defense: Sozin Attack",
    "eco": "B86",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4"
  },
  {
    "name": "Sicilian Defense: Sozin Attack, Flank Variation",
    "eco": "B87",
    "fen": "rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5"
  },
  {
    "name": "Sicilian Defense: Sozin Attack, Leonhardt Variation",
    "eco": "B88",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6"
  },
  {
    "name": "Sicilian Defense: Sozin Attack, Main Line",
    "eco": "B89",
    "fen": "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6 7. Be3"
  },
  {
    "name": "Sicilian Defense: Sozin Attack, Main Line, Sherbakov Variation",
    "eco": "B89",
    "fen": "r1bq1rk1/p3bppp/1p1ppn2/n7/3NPP2/1BN1B3/PPP3PP/R2Q1RK1 w -",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bc4 e6 7. Be3 Be7 8. Bb3 O-O 9. O-O Na5 10. f4 b6"
  },
  {
    "name": "Sicilian Defense: Sozin, Fischer Variation",
    "eco": "B88",
    "fen": "r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/1BN1B3/PPP3PP/R2QK2R b KQ",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6 7. Bb3 Be7 8. Be3 O-O 9. f4"
  },
  {
    "name": "Sicilian Defense: Sozin, not Scheveningen",
    "eco": "B57",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4"
  },
  {
    "name": "Sicilian Defense: Spielmann Variation",
    "eco": "B56",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/8/4P3/2N5/PPP1NPPP/R1BQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Nde2"
  },
  {
    "name": "Sicilian Defense: Staunton-Cochrane Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. c4"
  },
  {
    "name": "Sicilian Defense: Velimirovic Attack",
    "eco": "B89",
    "fen": "r1bqk2r/pp2bppp/2nppn2/8/2BNP3/2N1B3/PPP1QPPP/R3K2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6 7. Be3 Be7 8. Qe2"
  },
  {
    "name": "Sicilian Defense: Venice Attack",
    "eco": "B56",
    "fen": "rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Bb5+"
  },
  {
    "name": "Sicilian Defense: Wing Gambit",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. b4"
  },
  {
    "name": "Sicilian Defense: Wing Gambit Deferred",
    "eco": "B40",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 e6 3. b4"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Abrahams Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/8/1p2P3/8/PBPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. Bb2"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Carlsbad Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/p7/2PP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. a3 bxa3"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Deferred Variation",
    "eco": "B50",
    "fen": "rnbqkbnr/pp2pppp/3p4/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 c5 2. Nf3 d6 3. b4"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Marienbad Variation",
    "eco": "B20",
    "fen": "rnb1kbnr/pp2pppp/8/3q4/1p6/P7/1BPP1PPP/RN1QKBNR b KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. a3 d5 4. exd5 Qxd5 5. Bb2"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Marshall Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/8/1p2P3/P7/2PP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. a3"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Nanu Gambit",
    "eco": "B20",
    "fen": "rnb1kbnr/pp3ppp/4q3/4p3/1pP5/P2B1N2/3P1PPP/RNBQK2R b KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. a3 d5 4. exd5 Qxd5 5. Nf3 e5 6. c4 Qe6 7. Bd3"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Romanian Defense",
    "eco": "B20",
    "fen": "r1b1kbnr/pp3ppp/2n1q3/4p3/1pP5/P4N2/1B1P1PPP/RN1QKB1R w KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. a3 d5 4. exd5 Qxd5 5. Nf3 e5 6. Bb2 Nc6 7. c4 Qe6"
  },
  {
    "name": "Sicilian Defense: Wing Gambit, Santasiere Variation",
    "eco": "B20",
    "fen": "rnbqkbnr/pp1ppppp/8/8/1pP1P3/8/P2P1PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 c5 2. b4 cxb4 3. c4"
  },
  {
    "name": "Sicilian Defense: Yates Variation",
    "eco": "B56",
    "fen": "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2NB4/PPP2PPP/R1BQK2R b KQkq",
    "moves": "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bd3"
  },
  {
    "name": "Slav Defense",
    "eco": "D10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c6"
  },
  {
    "name": "Slav Defense, 2. c4 c6 3. Nc3",
    "eco": "D10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3"
  },
  {
    "name": "Slav Defense, 2. c4 c6 3. Nc3 dxc4",
    "eco": "D10",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/2pP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 dxc4"
  },
  {
    "name": "Slav Defense: Alapin Variation",
    "eco": "D16",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4"
  },
  {
    "name": "Slav Defense: Alekhine Variation",
    "eco": "D15",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e3"
  },
  {
    "name": "Slav Defense: Bonet Gambit",
    "eco": "D11",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Bg5"
  },
  {
    "name": "Slav Defense: Breyer Variation",
    "eco": "D11",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP1NPPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nbd2"
  },
  {
    "name": "Slav Defense: Chameleon Variation",
    "eco": "D15",
    "fen": "rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6"
  },
  {
    "name": "Slav Defense: Chameleon Variation, Advance System",
    "eco": "D15",
    "fen": "rnbqkb1r/1p2pppp/p1p2n2/2Pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. c5"
  },
  {
    "name": "Slav Defense: Czech Variation",
    "eco": "D17",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5"
  },
  {
    "name": "Slav Defense: Czech Variation, Bled Attack",
    "eco": "D17",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP3N/2N5/1P2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Nh4"
  },
  {
    "name": "Slav Defense: Czech Variation, Carlsbad Variation",
    "eco": "D17",
    "fen": "r3kb1r/ppqn1ppp/2p2n2/4pb2/P1NP4/2N3P1/1P2PP1P/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5"
  },
  {
    "name": "Slav Defense: Czech Variation, Carlsbad Variation, Morozevich Variation",
    "eco": "D17",
    "fen": "r3kb1r/ppqn1p1p/2p5/4nbp1/P1N2B2/2N3P1/1P2PPBP/R2QK2R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5 9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 g5"
  },
  {
    "name": "Slav Defense: Czech Variation, Classical System",
    "eco": "D18",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3"
  },
  {
    "name": "Slav Defense: Czech Variation, Classical System, Main Line",
    "eco": "D19",
    "fen": "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 b -",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2"
  },
  {
    "name": "Slav Defense: Czech Variation, Krause Attack",
    "eco": "D17",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5"
  },
  {
    "name": "Slav Defense: Czech Variation, Krause Attack, Fazekas Gambit",
    "eco": "D17",
    "fen": "r2qkb1r/pp2pppp/n1p2n2/4Nb2/P1pPP3/2N5/1P3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Na6 7. e4"
  },
  {
    "name": "Slav Defense: Czech Variation, Lasker Variation",
    "eco": "D18",
    "fen": "r2qkb1r/pp2pppp/n1p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 Na6"
  },
  {
    "name": "Slav Defense: Czech Variation, Wiesbaden Variation",
    "eco": "D17",
    "fen": "rn1qkb1r/pp3ppp/2p1pn2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6"
  },
  {
    "name": "Slav Defense: Czech Variation, Wiesbaden Variation, Sharp Line",
    "eco": "D17",
    "fen": "rn1qk2r/pp3ppp/2p1pn2/4Nb2/PbpPP3/2N2P2/1P4PP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 Bb4 8. e4"
  },
  {
    "name": "Slav Defense: Diemer Gambit",
    "eco": "B12",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PPP3/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. c4 c6 2. e4 d5 3. d4"
  },
  {
    "name": "Slav Defense: Exchange Variation",
    "eco": "D10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PP2PPPP/RNBQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. cxd5"
  },
  {
    "name": "Slav Defense: Exchange Variation, 3. Nf3 Nf6 4. cxd5 cxd5",
    "eco": "D13",
    "fen": "rnbqkb1r/pp2pppp/5n2/3p4/3P4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. cxd5 cxd5"
  },
  {
    "name": "Slav Defense: Exchange Variation, Schallopp Variation",
    "eco": "D12",
    "fen": "rn1qkb1r/pp2pppp/5n2/3p1b2/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. Nf3 Nf6 3. e3 Bf5 4. c4 c6 5. cxd5 cxd5 6. Nc3"
  },
  {
    "name": "Slav Defense: Exchange Variation, Symmetrical Line",
    "eco": "D14",
    "fen": "r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5"
  },
  {
    "name": "Slav Defense: Exchange Variation, Trifunovic Variation",
    "eco": "D14",
    "fen": "r2qk2r/pp3ppp/2n1pn2/3p1b2/1b1P1B2/1QN1PN2/PP3PPP/R3KB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. cxd5 cxd5 5. Nc3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Qb3 Bb4"
  },
  {
    "name": "Slav Defense: Geller Gambit",
    "eco": "D15",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4"
  },
  {
    "name": "Slav Defense: Geller Gambit, 5. e4 b5 6. e5",
    "eco": "D15",
    "fen": "rnbqkb1r/p3pppp/2p2n2/1p2P3/2pP4/2N2N2/PP3PPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5"
  },
  {
    "name": "Slav Defense: Modern",
    "eco": "D11",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6"
  },
  {
    "name": "Slav Defense: Modern Line",
    "eco": "D11",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3"
  },
  {
    "name": "Slav Defense: Quiet Variation",
    "eco": "D11",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3"
  },
  {
    "name": "Slav Defense: Quiet Variation, Pin Defense",
    "eco": "D12",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p4/2PP2b1/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bg4"
  },
  {
    "name": "Slav Defense: Quiet Variation, Schallopp Defense",
    "eco": "D12",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5"
  },
  {
    "name": "Slav Defense: Schlechter Variation",
    "eco": "D15",
    "fen": "rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 g6"
  },
  {
    "name": "Slav Defense: Slav Gambit, Alekhine Attack",
    "eco": "D10",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/2pPP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 dxc4 4. e4"
  },
  {
    "name": "Slav Defense: Smyslov Variation",
    "eco": "D16",
    "fen": "r1bqkb1r/pp2pppp/n1p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Na6"
  },
  {
    "name": "Slav Defense: Soultanbeieff Variation",
    "eco": "D16",
    "fen": "rnbqkb1r/pp3ppp/2p1pn2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 e6"
  },
  {
    "name": "Slav Defense: Steiner Variation",
    "eco": "D16",
    "fen": "rn1qkb1r/pp2pppp/2p2n2/8/P1pP2b1/2N2N2/1P2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bg4"
  },
  {
    "name": "Slav Defense: Suechting Variation",
    "eco": "D15",
    "fen": "rnb1kb1r/pp2pppp/1qp2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 Qb6"
  },
  {
    "name": "Slav Defense: Three Knights Variation",
    "eco": "D15",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3"
  },
  {
    "name": "Slav Defense: Two Knights Attack",
    "eco": "D15",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4"
  },
  {
    "name": "Slav Defense: Winawer Countergambit",
    "eco": "D10",
    "fen": "rnbqkbnr/pp3ppp/2p5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 e5"
  },
  {
    "name": "Slav Defense: Winawer Countergambit, Anti-Winawer Gambit",
    "eco": "D10",
    "fen": "rnbqkbnr/pp3ppp/2p5/3pp3/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 c6 3. Nc3 e5 4. e4"
  },
  {
    "name": "Slav Indian",
    "eco": "A50",
    "fen": "rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c6"
  },
  {
    "name": "Slav Indian: Kudischewitsch Gambit",
    "eco": "A50",
    "fen": "rnbqkb1r/p2ppppp/2p2n2/1p6/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 c6 2. Nf3 Nf6 3. c4 b5"
  },
  {
    "name": "Sodium Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR b KQkq",
    "moves": "1. Na3"
  },
  {
    "name": "Sodium Attack: Celadon Variation",
    "eco": "A00",
    "fen": "rnbqk1nr/pp3ppp/8/2ppp3/8/P2PP3/P1P2PPP/1RBQKBNR b Kkq",
    "moves": "1. Na3 e5 2. d3 Bxa3 3. bxa3 d5 4. e3 c5 5. Rb1"
  },
  {
    "name": "Sodium Attack: Chenoboskion Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/6P1/N7/PPPPPP1P/R1BQKBNR b KQkq",
    "moves": "1. Na3 g6 2. g4"
  },
  {
    "name": "Sodium Attack: Durkin Gambit",
    "eco": "A00",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pp2/2N1P3/8/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. Na3 e5 2. Nc4 Nc6 3. e4 f5"
  },
  {
    "name": "Spanish Opening: Fianchetto Defense, Kevitz Gambit",
    "eco": "C60",
    "fen": "r1bqkbnr/pppp3p/2n3p1/1B2pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. c3 f5"
  },
  {
    "name": "St. George Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/1ppppppp/p7/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 a6"
  },
  {
    "name": "St. George Defense, 2. d4 a6",
    "eco": "C00",
    "fen": "rnbqkbnr/1ppp1ppp/p3p3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 a6"
  },
  {
    "name": "St. George Defense: New St. George, Sanky-George Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/2pp1ppp/p3p3/1p6/2PPP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 a6 3. c4 b5"
  },
  {
    "name": "St. George Defense: New St. George, Three Pawn Attack",
    "eco": "B00",
    "fen": "rnbqkbnr/1ppp1ppp/p3p3/8/2PPP3/8/PP3PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 e6 2. d4 a6 3. c4"
  },
  {
    "name": "St. George Defense: New St. George, Traditional Line",
    "eco": "B00",
    "fen": "rn1qkb1r/1b1p1ppp/p3pn2/1pp5/3PP3/2PB1N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 e6 2. d4 a6 3. Nf3 b5 4. Bd3 c5 5. c3 Bb7 6. O-O Nf6"
  },
  {
    "name": "St. George Defense: Polish Variation",
    "eco": "B00",
    "fen": "rn1qkbnr/1bpp1ppp/p3p3/1p6/3PP3/3B1N2/PPP2PPP/RNBQK2R w KQkq",
    "moves": "1. d4 b5 2. e4 a6 3. Nf3 Bb7 4. Bd3 e6"
  },
  {
    "name": "St. George Defense: San Jorge Variation",
    "eco": "B00",
    "fen": "rn1qk1nr/1bp1ppbp/p2p2p1/1p6/3PP3/2PB1N2/PP3PPP/RNBQ1RK1 w kq",
    "moves": "1. e4 a6 2. d4 b5 3. Nf3 Bb7 4. Bd3 d6 5. O-O g6 6. c3 Bg7"
  },
  {
    "name": "St. George Defense: St. George Gambit",
    "eco": "A40",
    "fen": "rnbqkbnr/2pp1ppp/4p3/1p6/3PP3/8/PP3PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 e6 2. d4 a6 3. c4 b5 4. cxb5 axb5"
  },
  {
    "name": "St. George Defense: Zilbermints Gambit",
    "eco": "B00",
    "fen": "rnbqkbnr/1ppp1ppp/p7/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 a6 2. d4 e5"
  },
  {
    "name": "System: Double Duck Formation",
    "eco": "A02",
    "fen": "rnbqkbnr/ppp1p1pp/8/3p1p2/3P1P2/8/PPP1P1PP/RNBQKBNR w KQkq",
    "moves": "1. f4 f5 2. d4 d5"
  },
  {
    "name": "Tarrasch Defense",
    "eco": "D32",
    "fen": "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5"
  },
  {
    "name": "Tarrasch Defense: Classical Variation",
    "eco": "D34",
    "fen": "r1bq1rk1/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Advance Variation",
    "eco": "D34",
    "fen": "r1bq1rk1/pp2bppp/2n2n2/3p2B1/2pP4/2N2NP1/PP2PPBP/R2Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 c4"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Bogoljubov Variation",
    "eco": "D34",
    "fen": "r2q1rk1/pp2bppp/2n1bn2/3p2B1/2pP4/2N2NP1/PP2PPBP/2RQ1RK1 w -",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nc3 c5 4. Nf3 d5 5. cxd5 exd5 6. g3 Nc6 7. Bg2 Be7 8. O-O O-O 9. Bg5 Be6 10. Rc1 c4"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Carlsbad Variation",
    "eco": "D34",
    "fen": "r1bq1rk1/pp2bppp/2n2n2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 b -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Chandler Variation",
    "eco": "D34",
    "fen": "r2qr1k1/pp2bpp1/2n1bn1p/3p4/3N4/2N1B1P1/PP2PPBP/2RQ1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Re8 12. Rc1 Be6"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Classical Tarrasch Gambit",
    "eco": "D34",
    "fen": "r1bq1rk1/pp2bppp/2n2n2/2P5/3p4/2N2NP1/PP2PPBP/R1BQ1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. dxc5 d4"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Endgame Variation",
    "eco": "D34",
    "fen": "r2q1rk1/pp2bppp/2n1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 Be6"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Main Line",
    "eco": "D34",
    "fen": "r1bqr1k1/pp2bpp1/2n2n1p/3p4/3N4/2N1B1P1/PP2PPBP/R2Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Re8"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Petursson Variation",
    "eco": "D34",
    "fen": "r1bqr1k1/pp2bppp/2n2n2/3p2B1/3N4/2N3P1/PP2PPBP/R2Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 Re8"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Reti Variation",
    "eco": "D34",
    "fen": "r1bq1rk1/pp3ppp/2n2n2/2bp4/N7/5NP1/PP2PPBP/R1BQ1RK1 b -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. dxc5 Bxc5 10. Na4"
  },
  {
    "name": "Tarrasch Defense: Classical Variation, Spassky Variation",
    "eco": "D34",
    "fen": "r2q1rk1/pp2bpp1/2n2n1p/3p4/3N2b1/2N1B1P1/PP2PPBP/R2Q1RK1 w -",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Bg4"
  },
  {
    "name": "Tarrasch Defense: Gruenfeld Gambit",
    "eco": "D32",
    "fen": "r1bqkbnr/p4ppp/2n5/1pP5/N2p4/5N2/PP2PPPP/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. dxc5 d4 7. Na4 b5"
  },
  {
    "name": "Tarrasch Defense: Marshall Gambit",
    "eco": "D32",
    "fen": "rnbqkbnr/pp3ppp/8/2pp4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. e4"
  },
  {
    "name": "Tarrasch Defense: Prague Variation",
    "eco": "D33",
    "fen": "r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6"
  },
  {
    "name": "Tarrasch Defense: Prague Variation, Main Line",
    "eco": "D34",
    "fen": "r1bqk2r/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7"
  },
  {
    "name": "Tarrasch Defense: Rubinstein System",
    "eco": "D33",
    "fen": "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3"
  },
  {
    "name": "Tarrasch Defense: Schara Gambit",
    "eco": "D32",
    "fen": "rnbqkbnr/pp3ppp/4p3/3P4/3p4/2N5/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 cxd4"
  },
  {
    "name": "Tarrasch Defense: Swedish Variation",
    "eco": "D33",
    "fen": "r1bqkbnr/pp3ppp/2n5/3p4/2pP4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 c4"
  },
  {
    "name": "Tarrasch Defense: Swedish Variation, Central Break",
    "eco": "D33",
    "fen": "r1bqkbnr/pp3ppp/2n5/3p4/2pPP3/2N2NP1/PP3P1P/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 c4 7. e4"
  },
  {
    "name": "Tarrasch Defense: Symmetrical Variation",
    "eco": "D32",
    "fen": "r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq",
    "moves": "1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. e3 d5 5. Nc3 Nc6"
  },
  {
    "name": "Tarrasch Defense: Tarrasch Gambit",
    "eco": "D32",
    "fen": "rnbqkbnr/p4ppp/8/1pP5/N2p4/8/PP2PPPP/R1BQKBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. dxc5 d4 6. Na4 b5"
  },
  {
    "name": "Tarrasch Defense: Two Knights Variation",
    "eco": "D32",
    "fen": "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3"
  },
  {
    "name": "Tarrasch Defense: Wagner Variation",
    "eco": "D33",
    "fen": "r2qkb1r/pp3ppp/2n2n2/2pp4/3P2b1/2N2NP1/PP2PPBP/R1BQK2R w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Bg4"
  },
  {
    "name": "Tarrasch Defense: von Hennig Gambit",
    "eco": "D32",
    "fen": "r2qkbnr/pp3ppp/2n1b3/3Q4/8/2N5/PP2PPPP/R1B1KBNR w KQkq",
    "moves": "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 cxd4 5. Qxd4 Nc6 6. Qd1 exd5 7. Qxd5 Be6"
  },
  {
    "name": "Tayler Opening",
    "eco": "C44",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1BPPP/RNBQK2R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d4"
  },
  {
    "name": "Three Knights Opening",
    "eco": "C46",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3"
  },
  {
    "name": "Three Knights Opening, 2. Nf3 Nc6 3. Nc3 Bb4",
    "eco": "C46",
    "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Bb4"
  },
  {
    "name": "Three Knights Opening: Schlechter Variation",
    "eco": "C46",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/3Np3/1b2P3/5N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 Bb4 4. Nd5 Nf6"
  },
  {
    "name": "Three Knights Opening: Steinitz Defense",
    "eco": "C46",
    "fen": "r1bqkbnr/pppp1p1p/2n3p1/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 g6"
  },
  {
    "name": "Three Knights Opening: Steinitz-Rosenthal Variation",
    "eco": "C46",
    "fen": "r1bqkbnr/pppp1p1p/2n3p1/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 g6 4. d4 exd4 5. Nd5"
  },
  {
    "name": "Three Knights Opening: Winawer Defense",
    "eco": "C46",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nf3 Nc6 3. Nc3 f5"
  },
  {
    "name": "Torre Attack",
    "eco": "A46",
    "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3"
  },
  {
    "name": "Torre Attack, 2. Nf3 e6 3. Bg5",
    "eco": "A46",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Bg5"
  },
  {
    "name": "Torre Attack, 2. Nf3 g6 3. Bg5",
    "eco": "A48",
    "fen": "rnbqkb1r/pppppp1p/5np1/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. Bg5"
  },
  {
    "name": "Torre Attack: Classical Defense, Nimzowitsch Variation",
    "eco": "A46",
    "fen": "rnbqkb1r/pppp1pp1/4pn1p/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Bg5 h6"
  },
  {
    "name": "Torre Attack: Classical Defense, Petrosian Gambit",
    "eco": "A46",
    "fen": "rnbqkb1r/p2p1ppp/1p2pn2/2pP2B1/8/4PN2/PPP2PPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Bg5 c5 4. e3 b6 5. d5"
  },
  {
    "name": "Torre Attack: Fianchetto Defense, Euwe Variation",
    "eco": "A48",
    "fen": "rnbqk2r/pp1pppbp/5np1/2p3B1/3P4/5N2/PPPNPPPP/R2QKB1R w KQkq",
    "moves": "1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. Nbd2 c5"
  },
  {
    "name": "Torre Attack: Wagner Gambit",
    "eco": "A46",
    "fen": "rnbqkb1r/pp1p1ppp/4pn2/2p3B1/3PP3/5N2/PPP2PPP/RN1QKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. Bg5 c5 4. e4"
  },
  {
    "name": "Trompowsky Attack",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5"
  },
  {
    "name": "Trompowsky Attack: Borg Variation",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppp1p/8/6p1/3PnB2/8/PPP1PPPP/RN1QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Bg5 Ne4 3. Bf4 g5"
  },
  {
    "name": "Trompowsky Attack: Classical Defense",
    "eco": "A45",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Bg5 e6"
  },
  {
    "name": "Trompowsky Attack: Classical Defense, Big Center Variation",
    "eco": "A45",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5 e6 3. e4"
  },
  {
    "name": "Trompowsky Attack: Edge Variation",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/8/8/3Pn2B/8/PPP1PPPP/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5 Ne4 3. Bh4"
  },
  {
    "name": "Trompowsky Attack: Edge Variation, Hergert Gambit",
    "eco": "A45",
    "fen": "rn1qkb1r/ppp1pppp/5n2/3p1b2/3PP2B/2N2P2/PPP3PP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5 Ne4 3. Bh4 d5 4. f3 Nf6 5. Nc3 Bf5 6. e4"
  },
  {
    "name": "Trompowsky Attack: Edge Variation, Hergert Gambit, 6. Qxd2 d5 7. e4",
    "eco": "A45",
    "fen": "rnb1kb1r/pp2pppp/2p5/q2p4/3PP2B/2P5/PP1Q1PPP/R3KBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5 Ne4 3. Bh4 c6 4. Nd2 Qa5 5. c3 Nxd2 6. Qxd2 d5 7. e4"
  },
  {
    "name": "Trompowsky Attack: Poisoned Pawn Variation",
    "eco": "A45",
    "fen": "rnb1kb1r/pp1ppppp/1q3n2/2pP2B1/8/2N5/PPP1PPPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5 c5 3. d5 Qb6 4. Nc3"
  },
  {
    "name": "Trompowsky Attack: Raptor Variation",
    "eco": "A45",
    "fen": "rnbqkb1r/pppppppp/8/6B1/3Pn2P/8/PPP1PPP1/RN1QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Bg5 Ne4 3. h4"
  },
  {
    "name": "Trompowsky Attack: Raptor Variation, Hergert Gambit",
    "eco": "A45",
    "fen": "rnbqkb1r/pppp1ppp/8/4p1P1/3P4/8/PPP1PPP1/RN1QKBNR w KQkq",
    "moves": "1. d4 Nf6 2. Bg5 Ne4 3. h4 Nxg5 4. hxg5 e5"
  },
  {
    "name": "Valencia Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPPNPPPP/R1BQKBNR b KQkq",
    "moves": "1. d3 e5 2. Nd2"
  },
  {
    "name": "Van Geet Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq",
    "moves": "1. Nc3"
  },
  {
    "name": "Van Geet Opening: Battambang Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/P1N5/1PPPPPPP/R1BQKBNR b KQkq",
    "moves": "1. a3 e5 2. Nc3"
  },
  {
    "name": "Van Geet Opening: Berlin Gambit",
    "eco": "A00",
    "fen": "r1bqkbnr/ppp1pppp/2n5/3P4/4p3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 Nc6 2. d4 d5 3. Nc3 dxe4 4. d5"
  },
  {
    "name": "Van Geet Opening: Billockus-Johansen Gambit",
    "eco": "A00",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq",
    "moves": "1. Nc3 e5 2. Nf3 Bc5"
  },
  {
    "name": "Van Geet Opening: Caro-Kann Variation, St. Patrick's Attack",
    "eco": "B10",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N4P/PPPP1PP1/R1BQKBNR b KQkq",
    "moves": "1. Nc3 d5 2. e4 c6 3. h3"
  },
  {
    "name": "Van Geet Opening: Damhaug Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 d5 2. f4 e5"
  },
  {
    "name": "Van Geet Opening: Dougherty Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. Nc3 d5 2. e4 dxe4 3. f3"
  },
  {
    "name": "Van Geet Opening: Duesseldorf Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/1P6/2N5/P1PPPPPP/R1BQKBNR b KQkq",
    "moves": "1. Nc3 c5 2. b4"
  },
  {
    "name": "Van Geet Opening: Dunst-Perrenet Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. Nc3 d5 2. e4 dxe4 3. d3"
  },
  {
    "name": "Van Geet Opening: Gladbacher Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/4p3/1PNP4/P1P2PPP/R1BQKBNR b KQkq",
    "moves": "1. Nc3 e5 2. b3 d5 3. e4 dxe4 4. d3"
  },
  {
    "name": "Van Geet Opening: Gruenfeld Defense",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/4N3/8/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 d5 2. Nc3 dxe4 3. Nxe4 e5"
  },
  {
    "name": "Van Geet Opening: Gruenfeld Defense, Steiner Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/4NP2/8/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 d5 3. Nc3 dxe4 4. Nxe4"
  },
  {
    "name": "Van Geet Opening: Hector Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2B1p3/2N5/PPPP1PPP/R1BQK1NR b KQkq",
    "moves": "1. Nc3 d5 2. e4 dxe4 3. Bc4"
  },
  {
    "name": "Van Geet Opening: Hergert Gambit",
    "eco": "A00",
    "fen": "r1bqkbnr/ppp2ppp/2np4/4P3/8/2N5/PPPPP1PP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 d6 2. f4 e5 3. fxe5 Nc6"
  },
  {
    "name": "Van Geet Opening: Hulsemann Gambit",
    "eco": "A00",
    "fen": "rn1qkbnr/ppp2ppp/4b3/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq",
    "moves": "1. Nc3 e5 2. e3 d5 3. Qh5 Be6"
  },
  {
    "name": "Van Geet Opening: Jendrossek Gambit",
    "eco": "A00",
    "fen": "rnbqkb1r/pp2p1pp/5n2/2p2p2/1P1p1P2/5N2/P1PPPNPP/R1BQKB1R b KQkq",
    "moves": "1. Nc3 d5 2. f4 d4 3. Ne4 f5 4. Nf2 Nf6 5. Nf3 c5 6. b4"
  },
  {
    "name": "Van Geet Opening: Kluever Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppppp1pp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. Nc3 f5 2. e4 fxe4 3. d3"
  },
  {
    "name": "Van Geet Opening: Laroche Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/8/2N5/PPPPPPPP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 b5"
  },
  {
    "name": "Van Geet Opening: Liebig Gambit",
    "eco": "A00",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq",
    "moves": "1. Nc3 e5 2. e3 d5 3. Qh5 Nf6"
  },
  {
    "name": "Van Geet Opening: Melleby Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 d5 2. f4 d4 3. Ne4 c5"
  },
  {
    "name": "Van Geet Opening: Myers Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/7P/2N5/PPPPPPP1/R1BQKBNR b KQkq",
    "moves": "1. Nc3 g6 2. h4"
  },
  {
    "name": "Van Geet Opening: Napoleon Attack",
    "eco": "A00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3P4/2N2N2/PPP1PPPP/R1BQKB1R b KQkq",
    "moves": "1. Nc3 e5 2. Nf3 Nc6 3. d4"
  },
  {
    "name": "Van Geet Opening: Novosibirsk Variation",
    "eco": "A00",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/7Q/2N5/PPP1PPPP/R1B1KBNR b KQkq",
    "moves": "1. Nc3 c5 2. d4 cxd4 3. Qxd4 Nc6 4. Qh4"
  },
  {
    "name": "Van Geet Opening: Nowokunski Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. f4 exf4 3. Nc3"
  },
  {
    "name": "Van Geet Opening: Pfeiffer Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 d5 2. f4 d4 3. Ne4 e5"
  },
  {
    "name": "Van Geet Opening: Pfeiffer Gambit, Sleipnir Countergambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/3pNP2/5N2/PPPPP1PP/R1BQKB1R b KQkq",
    "moves": "1. Nc3 d5 2. f4 d4 3. Ne4 e5 4. Nf3"
  },
  {
    "name": "Van Geet Opening: Reversed Nimzowitsch",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 e5"
  },
  {
    "name": "Van Geet Opening: Reversed Scandinavian",
    "eco": "A00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/Q7/2N5/PPP1PPPP/R1B1KBNR b KQkq",
    "moves": "1. Nc3 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qa4"
  },
  {
    "name": "Van Geet Opening: Sicilian Two Knights",
    "eco": "A00",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/3N4/2N5/PPP1PPPP/R1BQKB1R b KQkq",
    "moves": "1. Nc3 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4"
  },
  {
    "name": "Van Geet Opening: Sleipnir Gambit",
    "eco": "A00",
    "fen": "rnbqk1nr/ppp2ppp/8/3pp3/1b1P4/2N1P3/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 d5 2. e3 e5 3. d4 Bb4"
  },
  {
    "name": "Van Geet Opening: Tuebingen Gambit",
    "eco": "A00",
    "fen": "rnbqkb1r/pppppppp/5n2/8/6P1/2N5/PPPPPP1P/R1BQKBNR b KQkq",
    "moves": "1. Nc3 Nf6 2. g4"
  },
  {
    "name": "Van Geet Opening: Twyble Attack",
    "eco": "A00",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/8/2N5/PPPPPPPP/1RBQKBNR b Kkq",
    "moves": "1. Nc3 c5 2. Rb1"
  },
  {
    "name": "Van Geet Opening: Venezolana Variation",
    "eco": "A00",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq",
    "moves": "1. Nc3 d5 2. d3 Nf6 3. g3"
  },
  {
    "name": "Van Geet Opening: Warsteiner Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp1pp1p/8/3p2p1/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq",
    "moves": "1. Nc3 d5 2. f4 g5"
  },
  {
    "name": "Van't Kruijs Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. e3"
  },
  {
    "name": "Van't Kruijs Opening: Bouncing Bishop Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/p1pp1ppp/8/1p2p3/8/1B2P3/PPPP1PPP/RNBQK1NR b KQkq",
    "moves": "1. e3 e5 2. Bc4 b5 3. Bb3"
  },
  {
    "name": "Van't Kruijs Opening: Keoni-Hiva Gambit Delayed",
    "eco": "A00",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3p4/5p2/P1N1PN2/1PPP2PP/R1BQKB1R b KQkq",
    "moves": "1. e3 d5 2. Nc3 Nf6 3. a3 e5 4. f4 exf4 5. Nf3"
  },
  {
    "name": "Van't Kruijs Opening: Keoni-Hiva Gambit, Akahi Variation",
    "eco": "A00",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq",
    "moves": "1. e3 e5 2. Nc3 Nf6 3. f4 exf4 4. Nf3"
  },
  {
    "name": "Van't Kruijs Opening: Keoni-Hiva Gambit, Alua Variation",
    "eco": "A00",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq",
    "moves": "1. e3 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3"
  },
  {
    "name": "Van't Kruijs Opening: Keoni-Hiva Gambit, Ekolu Variation",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq",
    "moves": "1. e3 e5 2. Nc3 d5 3. f4 exf4 4. Nf3"
  },
  {
    "name": "Venezolana Opening",
    "eco": "A00",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq",
    "moves": "1. d3 c5 2. Nc3 Nc6 3. g3"
  },
  {
    "name": "Veresov Opening: Malich Gambit",
    "eco": "D00",
    "fen": "rnbqkb1r/pp2pp1p/5p2/2pP4/4p3/2N5/PPP2PPP/R2QKBNR b KQkq",
    "moves": "1. d4 Nf6 2. Nc3 d5 3. Bg5 c5 4. Bxf6 gxf6 5. e4 dxe4 6. d5"
  },
  {
    "name": "Vienna Game",
    "eco": "C27",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3"
  },
  {
    "name": "Vienna Game, 2. Nc3 Nf6 3. Bc4 Nxe4",
    "eco": "C27",
    "fen": "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4"
  },
  {
    "name": "Vienna Game: Adams' Gambit",
    "eco": "C27",
    "fen": "r1bqkb1r/pppp1ppp/2nn4/4p2Q/3P4/1BN5/PPP2PPP/R1B1K1NR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. d4"
  },
  {
    "name": "Vienna Game: Anderssen Defense",
    "eco": "C25",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Bc5"
  },
  {
    "name": "Vienna Game: Falkbeer Variation",
    "eco": "C26",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6"
  },
  {
    "name": "Vienna Game: Fyfe Gambit",
    "eco": "C23",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. d4"
  },
  {
    "name": "Vienna Game: Giraffe Attack",
    "eco": "C25",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/4P1Q1/2N5/PPPP1PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Bc5 3. Qg4"
  },
  {
    "name": "Vienna Game: Hamppe-Allgaier Gambit, Alapin Variation",
    "eco": "C25",
    "fen": "r1bqkbnr/ppp2p1p/2np4/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. h4 g4 6. Ng5 d6"
  },
  {
    "name": "Vienna Game: Hamppe-Meitner Variation",
    "eco": "C25",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/N3P3/8/PPPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Bc5 3. Na4"
  },
  {
    "name": "Vienna Game: Hamppe-Muzio Gambit",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1p1p/2n5/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. Bc4 g4 6. O-O"
  },
  {
    "name": "Vienna Game: Hamppe-Muzio, Dubois Variation",
    "eco": "C25",
    "fen": "r1b1kbnr/pppp1p1p/5q2/4n3/2B1PQ2/2N5/PPPP2PP/R1B2RK1 w kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. Bc4 g4 6. O-O gxf3 7. Qxf3 Ne5 8. Qxf4 Qf6"
  },
  {
    "name": "Vienna Game: Heyde Variation",
    "eco": "C29",
    "fen": "rnbqkb1r/ppp3pp/8/3pPp2/3Pn3/2N2Q2/PPP3PP/R1B1KBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3 f5 6. d4"
  },
  {
    "name": "Vienna Game: Max Lange Defense",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6"
  },
  {
    "name": "Vienna Game: Mengarini Variation",
    "eco": "C26",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/P1N5/1PPP1PPP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. a3"
  },
  {
    "name": "Vienna Game: Mieses Variation",
    "eco": "C26",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. g3"
  },
  {
    "name": "Vienna Game: Mieses Variation, Erben Gambit",
    "eco": "C25",
    "fen": "rnbqkb1r/pp3ppp/2p2n2/3Pp3/8/2N3P1/PPPP1P1P/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. g3 d5 4. exd5 c6"
  },
  {
    "name": "Vienna Game: Omaha Gambit",
    "eco": "C25",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 d6 3. f4"
  },
  {
    "name": "Vienna Game: Paulsen Variation",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. g3"
  },
  {
    "name": "Vienna Game: Paulsen Variation, Mariotti Gambit",
    "eco": "C25",
    "fen": "r1bqk1nr/pppp1pp1/2n5/2b1p3/4P2p/2N2NP1/PPPP1PBP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. g3 Bc5 4. Bg2 h5 5. Nf3 h4"
  },
  {
    "name": "Vienna Game: Paulsen Variation, Pollock Gambit",
    "eco": "C25",
    "fen": "r1bqk2r/ppp2ppp/2n2n2/2bPp3/8/2N3P1/PPPPNPBP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. g3 Bc5 4. Bg2 Nc6 5. Nge2 d5 6. exd5"
  },
  {
    "name": "Vienna Game: Paulsen Variation: 3... Nf6 4. Bg2",
    "eco": "C25",
    "fen": "r1bqk2r/ppp2ppp/2n2n2/2bpp3/4P3/2N3P1/PPPPNPBP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. g3 Nf6 4. Bg2 Bc5 5. Nge2 d5"
  },
  {
    "name": "Vienna Game: Philidor Countergambit",
    "eco": "C23",
    "fen": "r1bqkbnr/pppp2pp/2n5/4pp2/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. d4 f5"
  },
  {
    "name": "Vienna Game: Pierce Gambit, Rushmere Attack",
    "eco": "C25",
    "fen": "r2qkbnr/ppp2p1p/2P5/8/2BP1pb1/2N2p2/PPP3PP/R1BQ1RK1 b kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. d4 g4 6. Bc4 gxf3 7. O-O d5 8. exd5 Bg4 9. dxc6"
  },
  {
    "name": "Vienna Game: Stanley Variation",
    "eco": "C26",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4"
  },
  {
    "name": "Vienna Game: Stanley Variation, Alekhine Variation",
    "eco": "C27",
    "fen": "r1bqk2r/ppppbppp/2nn4/4N2Q/8/1BN5/PPPP1PPP/R1B1K2R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Be7 6. Nf3 Nc6 7. Nxe5"
  },
  {
    "name": "Vienna Game: Stanley Variation, Bronstein Gambit",
    "eco": "C23",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p3/2B1nP2/2N2N2/PPPP2PP/R1BQK2R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6 4. f4 Nxe4 5. Nf3"
  },
  {
    "name": "Vienna Game: Stanley Variation, Eifel Gambit",
    "eco": "C27",
    "fen": "rnbqk2r/p1pp1ppp/5n2/1pb1p3/2B1P3/2N5/PPPPNPPP/R1BQK2R w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Bc5 4. Nge2 b5"
  },
  {
    "name": "Vienna Game: Stanley Variation, Frankenstein-Dracula Variation",
    "eco": "C27",
    "fen": "N1bk1b1r/p2pq2p/1pnn2p1/3Qpp2/8/1B6/PPPP1PPP/R1B1K1NR w KQ",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. Nb5 g6 7. Qf3 f5 8. Qd5 Qe7 9. Nxc7+ Kd8 10. Nxa8 b6"
  },
  {
    "name": "Vienna Game: Stanley Variation, Meitner-Mieses Gambit",
    "eco": "C23",
    "fen": "r1b1k1nr/pppp1ppp/2n2q2/2bNp3/2B1P1Q1/8/PPPP1PPP/R1B1K1NR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. Bc4 Bc5 4. Qg4 Qf6 5. Nd5"
  },
  {
    "name": "Vienna Game: Stanley Variation, Monster Declined",
    "eco": "C27",
    "fen": "rnbqk2r/ppppbppp/3n4/4p2Q/8/1BN5/PPPP1PPP/R1B1K1NR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Be7"
  },
  {
    "name": "Vienna Game: Stanley Variation, Reversed Spanish",
    "eco": "C26",
    "fen": "rnbqk2r/pppp1ppp/5n2/4p3/1bB1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. Bc4 Bb4"
  },
  {
    "name": "Vienna Game: Stanley Variation, Three Knights Variation",
    "eco": "C28",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6"
  },
  {
    "name": "Vienna Game: Vienna Gambit",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4"
  },
  {
    "name": "Vienna Game: Vienna Gambit, 2. Nc3 Nf6 3. f4",
    "eco": "C28",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Bardeleben Variation",
    "eco": "C29",
    "fen": "rnbqkb1r/ppp3pp/8/3pPp2/4n3/2N2Q2/PPPP2PP/R1B1KBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3 f5"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Breyer Variation",
    "eco": "C29",
    "fen": "rnbqk2r/ppp1bppp/8/3pP3/4n3/2N2N2/PPPP2PP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3 Be7"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Cunningham Defense",
    "eco": "C25",
    "fen": "r1bqk1nr/ppppbppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 Be7"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1p1p/2n5/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. h4 g4 6. Ng5"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Hamppe-Allgaier-Thorold Gambit",
    "eco": "C25",
    "fen": "r1bq1bnr/pppp1k2/2n4p/8/3PPppP/2N5/PPP3P1/R1BQKB1R b KQ",
    "moves": "1. e4 e5 2. f4 exf4 3. Nf3 Nc6 4. Nc3 g5 5. h4 g4 6. Ng5 h6 7. Nxf7 Kxf7 8. d4"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Hamppe-Muzio Gambit",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/2N2p2/PPPP2PP/R1BQ1RK1 w kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. Bc4 g4 6. O-O gxf3"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Kaufmann Variation",
    "eco": "C29",
    "fen": "rn1qkb1r/ppp2ppp/8/3pP3/4n1b1/2N2N2/PPPPQ1PP/R1B1KB1R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3 Bg4 6. Qe2"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Main Line",
    "eco": "C29",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Modern Variation",
    "eco": "C29",
    "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2NP4/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. d3"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Paulsen Attack",
    "eco": "C29",
    "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2Q2/PPPP2PP/R1B1KBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Pierce Gambit",
    "eco": "C28",
    "fen": "r1bqkbnr/pppp1p1p/2n5/6p1/3PPp2/2N2N2/PPP3PP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. d4"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Quelle Gambit",
    "eco": "C25",
    "fen": "r1bqk1nr/ppp2ppp/2np4/2b1P3/4P3/2N5/PPPP2PP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 Bc5 4. fxe5 d6"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/3PPp2/2N5/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Fraser-Minckwitz Defense",
    "eco": "C28",
    "fen": "r1b1kbnr/p1pp1ppp/1pn5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 b6"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Knight Variation",
    "eco": "C25",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Main Line",
    "eco": "C28",
    "fen": "r1b1kbnr/pppp1ppp/2n5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR b kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Paulsen Defense",
    "eco": "C25",
    "fen": "r1b1kbnr/ppp2ppp/2np4/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 d6"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Soerensen Defense",
    "eco": "C25",
    "fen": "r1b1kbnr/pppp1p1p/2n5/6p1/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 g5"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Zukertort Defense",
    "eco": "C25",
    "fen": "r1b1kbnr/ppp2ppp/2n5/3p4/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq",
    "moves": "1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 d5"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Steinitz Variation",
    "eco": "C29",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2NP4/PPP3PP/R1BQKBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. d3"
  },
  {
    "name": "Vienna Game: Vienna Gambit, Wurzburger Trap",
    "eco": "C29",
    "fen": "rnb1kb1r/ppp2ppp/8/3NP2q/8/3P1Nn1/PPP4P/R1BQKB1R b KQkq",
    "moves": "1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. d3 Qh4+ 6. g3 Nxg3 7. Nf3 Qh5 8. Nxd5"
  },
  {
    "name": "Vienna Game: Zhuravlev Countergambit",
    "eco": "C25",
    "fen": "rnbqk1nr/pppp1ppp/8/4p3/1b2P3/2N5/PPPP1PPP/R1BQKBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Bb4"
  },
  {
    "name": "Vienna Game: Zhuravlev Countergambit, 2. Nc3 Bb4 3. Qg4",
    "eco": "C25",
    "fen": "rnbqk1nr/pppp1ppp/8/4p3/1b2P1Q1/2N5/PPPP1PPP/R1B1KBNR b KQkq",
    "moves": "1. e4 e5 2. Nc3 Bb4 3. Qg4"
  },
  {
    "name": "Vienna Game: Zhuravlev Countergambit, 2. Nc3 Bb4 3. Qg4 Nf6",
    "eco": "C25",
    "fen": "rnbqk2r/pppp1ppp/5n2/4p3/1b2P1Q1/2N5/PPPP1PPP/R1B1KBNR w KQkq",
    "moves": "1. e4 e5 2. Nc3 Bb4 3. Qg4 Nf6"
  },
  {
    "name": "Vulture Defense",
    "eco": "A56",
    "fen": "rnbqkb1r/pp1ppppp/8/2pP4/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nf6 2. c4 c5 3. d5 Ne4"
  },
  {
    "name": "Wade Defense",
    "eco": "A41",
    "fen": "rn1qkbnr/ppp1pppp/3p4/8/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 d6 2. Nf3 Bg4"
  },
  {
    "name": "Ware Defense",
    "eco": "B00",
    "fen": "rnbqkbnr/1ppppppp/8/p7/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 a5"
  },
  {
    "name": "Ware Defense: Snagglepuss Defense",
    "eco": "A40",
    "fen": "r1bqkbnr/1ppppppp/2n5/p7/3PP3/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 a5 2. d4 Nc6"
  },
  {
    "name": "Ware Opening",
    "eco": "A00",
    "fen": "rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq",
    "moves": "1. a4"
  },
  {
    "name": "Ware Opening: Cologne Gambit",
    "eco": "A00",
    "fen": "r1bqkbnr/p1pnpppp/1p6/3p4/P2P4/2N5/1PP1PPPP/R1BQKBNR w KQkq",
    "moves": "1. a4 b6 2. d4 d5 3. Nc3 Nd7"
  },
  {
    "name": "Ware Opening: Meadow Hay Trap",
    "eco": "A00",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/P7/R7/1PPPPPPP/1NBQKBNR b Kkq",
    "moves": "1. a4 e5 2. Ra3"
  },
  {
    "name": "Ware Opening: Ware Gambit",
    "eco": "A00",
    "fen": "rnbqkbnr/ppp3pp/P7/3ppp2/8/4P3/1PPP1PPP/RNBQKBNR b KQkq",
    "moves": "1. a4 e5 2. a5 d5 3. e3 f5 4. a6"
  },
  {
    "name": "Ware Opening: Wing Gambit",
    "eco": "A00",
    "fen": "rn1qkbnr/pbpppppp/8/1P6/8/8/1PPPPPPP/RNBQKBNR w KQkq",
    "moves": "1. a4 b5 2. axb5 Bb7"
  },
  {
    "name": "Yusupov-Rubinstein System",
    "eco": "A46",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. d4 Nf6 2. Nf3 e6 3. e3"
  },
  {
    "name": "Zaire Defense",
    "eco": "B02",
    "fen": "rnbqkbnr/pppppppp/8/3PP3/8/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. d4 Nc6 2. d5 Nb8 3. e4 Nf6 4. e5 Ng8"
  },
  {
    "name": "Zukertort Defense: Drunken Cavalry Variation",
    "eco": "A04",
    "fen": "r1bqkb1r/pppppppp/n6n/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Na6 2. e4 Nh6"
  },
  {
    "name": "Zukertort Defense: Kingside Variation",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppp1p/6pn/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. d4 g6 2. Nf3 Nh6"
  },
  {
    "name": "Zukertort Defense: Sicilian Knight Variation",
    "eco": "A04",
    "fen": "r1bqkbnr/pp1ppppp/n7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. e4 Na6 2. Nf3 c5"
  },
  {
    "name": "Zukertort Opening",
    "eco": "A04",
    "fen": "r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq",
    "moves": "1. Nf3 Nf6 2. Nc3 Nc6"
  },
  {
    "name": "Zukertort Opening: Ampel Variation",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKBR1 b Qkq",
    "moves": "1. Nf3 d5 2. Rg1"
  },
  {
    "name": "Zukertort Opening: Arctic Defense",
    "eco": "A04",
    "fen": "rnbqkbnr/ppppp1pp/5p2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 f6"
  },
  {
    "name": "Zukertort Opening: Arctic Defense, Drunken Knight Variation",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppnpp/5p2/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 f6 2. e4 Nh6 3. d4 Nf7"
  },
  {
    "name": "Zukertort Opening: Basman Defense",
    "eco": "A04",
    "fen": "rnbqkbnr/ppppppp1/7p/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 h6"
  },
  {
    "name": "Zukertort Opening: Black Mustang Defense",
    "eco": "A04",
    "fen": "r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 Nc6"
  },
  {
    "name": "Zukertort Opening: Double Fianchetto Attack",
    "eco": "A49",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/8/1P3NP1/PBPPPPBP/RN1Q1RK1 b -",
    "moves": "1. Nf3 Nf6 2. g3 g6 3. b3 Bg7 4. Bb2 O-O 5. Bg2 d6 6. O-O"
  },
  {
    "name": "Zukertort Opening: Dutch Variation",
    "eco": "A04",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 f5"
  },
  {
    "name": "Zukertort Opening: Gruenfeld Reversed",
    "eco": "A49",
    "fen": "r1bqkbnr/pp3ppp/2n1p3/2pp4/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq",
    "moves": "1. Nf3 d5 2. g3 c5 3. Bg2 Nc6 4. d4 e6 5. O-O"
  },
  {
    "name": "Zukertort Opening: Herrstrom Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/pppppp1p/8/6p1/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 g5"
  },
  {
    "name": "Zukertort Opening: Kingside Fianchetto",
    "eco": "A04",
    "fen": "rnbqkbnr/pppppp1p/6p1/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 g6"
  },
  {
    "name": "Zukertort Opening: Lemberger Gambit",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppppp/5n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. e4"
  },
  {
    "name": "Zukertort Opening: Lisitsyn Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/ppppp1pp/8/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 f5 2. e4"
  },
  {
    "name": "Zukertort Opening: Lisitsyn Gambit Deferred",
    "eco": "A04",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 f5 2. d3 Nf6 3. e4"
  },
  {
    "name": "Zukertort Opening: Myers Polish Attack",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/PP6/5N2/2PPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. a4 g6 3. b4"
  },
  {
    "name": "Zukertort Opening: Nimzo-Larsen Variation",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppppp/5n2/8/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. b3"
  },
  {
    "name": "Zukertort Opening: Old Indian Attack",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. d3"
  },
  {
    "name": "Zukertort Opening: Pachman Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/2p5/1P2PN2/P2P1PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. e3 c5 3. c4 dxc4 4. b3"
  },
  {
    "name": "Zukertort Opening: Pirc Invitation",
    "eco": "A04",
    "fen": "rnbqkbnr/ppp1pppp/3p4/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d6"
  },
  {
    "name": "Zukertort Opening: Polish Defense",
    "eco": "A04",
    "fen": "rnbqkbnr/p1pppppp/8/1p6/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 b5"
  },
  {
    "name": "Zukertort Opening: Queen's Gambit Invitation",
    "eco": "A04",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 e6"
  },
  {
    "name": "Zukertort Opening: Queenside Fianchetto Variation",
    "eco": "A04",
    "fen": "rnbqkbnr/p1pppppp/1p6/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 b6"
  },
  {
    "name": "Zukertort Opening: Quiet System",
    "eco": "A04",
    "fen": "rnbqkb1r/pppppppp/5n2/8/8/4PN2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 Nf6 2. e3"
  },
  {
    "name": "Zukertort Opening: Regina-Nu Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/pp2pppp/8/2p5/2p5/1PN2N2/P2PPPPP/R1BQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. b3 c5 3. c4 dxc4 4. Nc3"
  },
  {
    "name": "Zukertort Opening: Reversed Mexican Defense",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq",
    "moves": "1. Nc3 d5 2. Nf3"
  },
  {
    "name": "Zukertort Opening: Ross Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 e5"
  },
  {
    "name": "Zukertort Opening: Santasiere's Folly",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq",
    "moves": "1. b4 d5 2. Nf3"
  },
  {
    "name": "Zukertort Opening: Shabalov Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/3p1ppp/p3p3/1pp5/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq",
    "moves": "1. Nf3 e6 2. c4 a6 3. Nc3 c5 4. g3 b5"
  },
  {
    "name": "Zukertort Opening: Sicilian Invitation",
    "eco": "A04",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 c5"
  },
  {
    "name": "Zukertort Opening: Slav Invitation",
    "eco": "A04",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 c6"
  },
  {
    "name": "Zukertort Opening: Speelsmet Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/pp1ppppp/8/8/3p4/4PN2/PPP2PPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 c5 2. d4 cxd4 3. e3"
  },
  {
    "name": "Zukertort Opening: St. George Defense",
    "eco": "A04",
    "fen": "rnbqkbnr/1ppppppp/p7/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 a6"
  },
  {
    "name": "Zukertort Opening: Tennison Gambit",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq",
    "moves": "1. e4 d5 2. Nf3"
  },
  {
    "name": "Zukertort Opening: The Potato",
    "eco": "A06",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/P7/5N2/1PPPPPPP/RNBQKB1R b KQkq",
    "moves": "1. Nf3 d5 2. a4"
  },
  {
    "name": "Zukertort Opening: The Walrus",
    "eco": "A04",
    "fen": "r1bqkbnr/ppp2ppp/2p5/8/8/8/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 e5 2. Nxe5 Nc6 3. Nxc6 dxc6"
  },
  {
    "name": "Zukertort Opening: Vos Gambit",
    "eco": "A04",
    "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d6 2. d4 e5"
  },
  {
    "name": "Zukertort Opening: Wade Defense",
    "eco": "A04",
    "fen": "rn1qkbnr/ppp1pppp/3p4/8/4P1b1/5N2/PPPP1PPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 d6 2. e4 Bg4"
  },
  {
    "name": "Zukertort Opening: Wade Defense, Chigorin Plan",
    "eco": "A41",
    "fen": "1r1qkbnr/pppnpppp/3p4/8/2PP2b1/1Q3N2/PP2PPPP/RNB1KB1R w KQk",
    "moves": "1. d4 d6 2. Nf3 Bg4 3. c4 Nd7 4. Qb3 Rb8"
  },
  {
    "name": "Zukertort Opening: Ware Defense",
    "eco": "A04",
    "fen": "rnbqkbnr/1ppppppp/8/p7/8/5N2/PPPPPPPP/RNBQKB1R w KQkq",
    "moves": "1. Nf3 a5"
  }
];
