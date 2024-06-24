export type TimeData = { 
    measureTime: string; 
    duration: string; 
    velocity: number; 
    active: boolean; 
}


export type CellData = {
    note: string;
    octave: number;
    timeDataArray: TimeData[];
};



// export type GridData = {steps: number, gridCellData: CellData[][]}

// export const createGridData = (scale:{note:string,octave:number}[], steps: number) => {
//     const newGridData:GridData = {
//         steps, 
//         gridCellData: Array.from({ length: steps }).map(() => {
//             return scale.map(({note, octave}, i) => {
//                 return {
//                     ...cellData, note, octave
//                 };
//             });
//         })}
//     return newGridData;
// };

export const createPatternData = (measure:number, scale: {note:string, octave:number}[]) => {
    const patternData:CellData[] = [];
    const timeData:TimeData[] = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const measureTime = `${measure}:${i}:${j}`;
            timeData.push({measureTime, duration: "16n", velocity: 60, active: false});
        }
    }
    scale.forEach(({note, octave}) => {
        patternData.push({note, octave, timeDataArray: timeData})
    })
    return patternData;
}

