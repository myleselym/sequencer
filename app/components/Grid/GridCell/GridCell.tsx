"use client";

import { memo } from 'react';
import { TimeData } from "@/lib/functions/grid-data";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateFocusedRow, updateHoverRowCol } from "@/lib/features/grid/gridSlice";
import { updatePatternData } from "@/lib/features/patterns/patternsSlice";
import { updateFocusedNote } from '@/lib/features/scales/scalesSlice';

type Props = {
    note: string;
    octave: number;
    rowIndex: number;
    colIndex: number;
    cellData: TimeData;
    scaleTone: boolean;
};

const scrollStep = 5;

const GridCell = ({
    note,
    octave,
    rowIndex,
    colIndex,
    scaleTone,
}: Props) => { 
    const { focusedNote } = useAppSelector((state) => state.scales);
    const { activeRow, focusedRow, hoverRowCol } = useAppSelector((state) => state.grid);
    const { patternData } = useAppSelector((state) => state.patterns);
    const { active, velocity } = patternData[colIndex].timeDataArray[rowIndex];
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        // Create shallow copy of the patternData to avoid mutating the original state
        const updatedPatternData = [...patternData];
        
        // Copy shallow copy of the timeDataArray to avoid mutating the original state
        updatedPatternData[colIndex] = {
            ...updatedPatternData[colIndex],
            timeDataArray: [...updatedPatternData[colIndex].timeDataArray]
        };
        
        // Update the active state of the specific cell.
        updatedPatternData[colIndex].timeDataArray[rowIndex] = {
            ...updatedPatternData[colIndex].timeDataArray[rowIndex],
            active: !active
        };
        
        // Update state
        dispatch(updatePatternData(updatedPatternData));
        dispatch(updateFocusedRow(rowIndex));
        dispatch(updateFocusedNote(note + octave));
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (e.shiftKey) {
            e.preventDefault();
            // Update velocity based on scroll direction
            const newVelocity = Math.max(0, Math.min(127, velocity + (e.deltaY > 0 ? -scrollStep : scrollStep)));
            // Create shallow copy of the patternData to avoid mutating the original state
            const updatedPatternData = [...patternData];
            // Copy shallow copy of the timeDataArray to avoid mutating the original state
            updatedPatternData[colIndex] = {
                ...updatedPatternData[colIndex],
                timeDataArray: [...updatedPatternData[colIndex].timeDataArray]
            };
            // Update the velocity of the specific cell.
            updatedPatternData[colIndex].timeDataArray[rowIndex] = {
                ...updatedPatternData[colIndex].timeDataArray[rowIndex],
                velocity: newVelocity
            };
            // Update state
            dispatch(updatePatternData(updatedPatternData));
        }
    };

    return (
        <div
            onClick={handleClick}
            onWheel={handleWheel}
            onMouseOver={() => dispatch(updateHoverRowCol([rowIndex, colIndex]))}
            onMouseOut={() => dispatch(updateHoverRowCol([null, null]))}
            data-note={note}
            className={`grid-cell
                     ${scaleTone && "scale-tone-cell"} 
                     ${activeRow === rowIndex && "active-row"} 
                     ${focusedNote === note + octave && "focused-cell"} 
                     ${focusedRow === rowIndex && "focused-row"}
                     ${(hoverRowCol[0] === rowIndex || hoverRowCol[1] === colIndex) && "hover-row-col"}
                    `}
            style={{ backgroundColor: active ? `rgb(${135 + velocity}, ${velocity % 40}, ${255 - velocity})` : undefined }}
        >
            {note + octave}
        </div>
    );
};

export default memo(GridCell);
