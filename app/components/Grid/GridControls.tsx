// GridControls.tsx
import { CellData, createPatternData } from "@/lib/functions/grid-data";
import { ChangeEvent, useState } from "react";
import "./Grid.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updatePatternData, updatePatternName, updateUserPatterns } from "@/lib/features/patterns/patternsSlice";
import { updateFocusedNote } from "@/lib/features/scales/scalesSlice";




const GridControls = () => {
    const {patternName, patternData, userPatterns, chromaticScaleData } = useAppSelector((state) => state.patterns);
    const dispatch = useAppDispatch();
    const savePattern = (patternName: string, patternData: CellData[]) => {
        dispatch(updateUserPatterns({ ...userPatterns, [patternName]: patternData }));
    };

    const renamePattern = (oldPatternName: string, newPatternName: string) => {
        if (newPatternName in userPatterns) {
            alert("Pattern name already exists. Please choose a different name.");
            return;
        }
        const updatedPatterns = { ...userPatterns };
        updatedPatterns[newPatternName] = updatedPatterns[oldPatternName];
        delete updatedPatterns[oldPatternName];
        dispatch(updateUserPatterns(updatedPatterns));
        dispatch(updatePatternName(newPatternName));
    };

    const handleNewGridData = () => {
        const newPatternName: string = prompt("Enter pattern name", `Pattern-${Object.keys(userPatterns).length + 1}`) || patternName;
        if (newPatternName in userPatterns) {
            alert("Pattern name already exists. Please choose a different name.");
            return;
        }
        // Save the current pattern before creating a new one
        savePattern(patternName, patternData);
        // Create and set new pattern
        const newPatternData = createPatternData(0, chromaticScaleData.scale);
        dispatch(updatePatternData(newPatternData));
        dispatch(updatePatternName(newPatternName));
        savePattern(newPatternName, newPatternData);
        dispatch(updateFocusedNote(""));
    };

    const handlePatternChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const currentPatternName = e.target.value;
        dispatch(updatePatternName(currentPatternName));
        const chosenPattern = userPatterns[currentPatternName];
        dispatch(updatePatternData(chosenPattern));
        dispatch(updateFocusedNote(""));
    };

    return (
        <div id="grid-controls">
            <label htmlFor="pattern-select">Pattern:</label>
            <select id="pattern-select" value={patternName} onChange={handlePatternChange}>
                {Object.keys(userPatterns).map((patternName) => (
                    <option key={patternName} value={patternName}>{patternName}</option>
                ))}
            </select>
            <button onClick={handleNewGridData}>New</button>
            <button onClick={() => renamePattern(patternName, prompt("Enter new pattern name", patternName) || patternName)}>Rename</button>
        </div>
    );
};

export default GridControls;
