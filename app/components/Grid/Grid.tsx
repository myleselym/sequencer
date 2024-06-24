"use client"
import "./Grid.css"
import GridCell from "./GridCell/GridCell"
import GridControls from "./GridControls"
import { useAppSelector } from "@/lib/hooks"
import { updateFocusedRow } from "@/lib/features/grid/gridSlice"



const Grid = () => {
    const scale = useAppSelector((state) => state.scales.scale);
    const patternData = useAppSelector((state) => state.patterns.patternData);
    return (
        <section id="grid-container">
            <GridControls />
            <div id="grid">
                {patternData.map((colData, colIndex) => (
                    <div key={colIndex} className={`grid-col`} onClick={() => updateFocusedRow(colIndex)}>
                        {colData.timeDataArray.map((cellData, rowIndex) => (
                            <GridCell 
                                key={colData.note + colData.octave + rowIndex}
                                colIndex={colIndex}
                                rowIndex={rowIndex}
                                cellData={cellData}
                                note={colData.note}
                                octave={colData.octave}
                                scaleTone={scale.includes(colData.note)}
                            />
                        ))}
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Grid;
