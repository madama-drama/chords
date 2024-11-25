const notesObjectRaise: Record<string, string> = {
  C: "C#",
  "C#": "D",
  D: "D#",
  "D#": "E",
  E: "F",
  F: "F#",
  "F#": "G",
  G: "G#",
  "G#": "A",
  A: "A#",
  "A#": "H",
  H: "C",

  Cm: "C#m",
  "C#m": "Dm",
  Dm: "D#m",
  "D#m": "Em",
  Em: "Fm",
  Fm: "F#m",
  "F#m": "Gm",
  Gm: "G#m",
  "G#m": "Am",
  Am: "A#m",
  "A#m": "Hm",
  Hm: "Cm",
};

export const changeTone_raising = ({
  tone,
  notes,
}: {
  tone: number;
  notes: string[][];
}) => {
  const noteObjectLower: Record<string, string> = {};
  Object.entries(notesObjectRaise).forEach(([key, value]) => {
    noteObjectLower[value] = key;
  });

  let transponentNotes = notes;

  if (tone >= 0) {
    for (let i = 0; i < tone; i++) {
      transponentNotes = transponentNotes.map((chordsLine) =>
        chordsLine.map((note) => notesObjectRaise[note])
      );
    }
  } else {
    for (let i = tone; i < 0; i++) {
      transponentNotes = transponentNotes.map((chordsLine) =>
        chordsLine.map((note) => noteObjectLower[note])
      );
    }
  }
  return transponentNotes;
};
