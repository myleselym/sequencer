export const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export const noteNames: {[note:string]: string[]} = {
    "C": ["C"],
    "C#": ["C#", "Db"],
    "D": ["D"],
    "D#": ["D#", "Eb"],
    "E": ["E"],
    "F": ["F"],
    "F#": ["F#", "Gb"],
    "G": ["G"],
    "G#": ["G#", "Ab"],
    "A": ["A"],
    "A#": ["A#", "Bb"],
    "B": ["B"]
}

// Chromatic Scale

export type NoteObject = {
    note: string;
    octave: number;
}

export type ChromaticScaleData = {octaves:number, scale:NoteObject[]}
export const createChromaticScale = (octaves:number) => {
    const chromaticScaleData: ChromaticScaleData = {
        octaves, 
        scale: []
    };
    for (let i = 0; i < octaves; i++) {
        notes.forEach((note) => {
            const noteObject:NoteObject = {note: note, octave: (i + 1)}
            chromaticScaleData.scale.push(noteObject)
        })
    }
    chromaticScaleData.scale.push({note: "C", octave: (octaves + 1)})
    return chromaticScaleData
}

// Modal Scale

export const scaleModeIntervals: {[mode:string]: number[]}= {
    "Ionian": [2,2,1,2,2,2,1],
    "Aolian": [2,1,2,2,1,2,2],
    "Dorian": [2,1,2,2,2,1,2],
    "Phrygian": [1,2,2,2,1,2,2],
    "Lydian": [2,2,2,1,2,2,1],
    "Mixolydian": [2,2,1,2,2,1,2],
    "Locrian": [1,2,2,1,2,2,2]
}

export const createScale = (root:string, mode:string) => {
    const rootIndex = notes.indexOf(root);
    const intervalArray = scaleModeIntervals[mode];
    const scale: string[] = [];
    let noteIndex = rootIndex;
        for (let interval of intervalArray) {
            noteIndex = (noteIndex + interval) % 12 
            const noteName = notes[noteIndex];
                scale.push(noteName)
        }
    return scale
}
