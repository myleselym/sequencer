"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import "../Piano.css"
import { updateFocusedNote } from "@/lib/features/scales/scalesSlice"
type Props = {note: string, scaleTone: boolean}
const WhiteKey = ({ note, scaleTone }:Props) => {
    const dispatch = useAppDispatch()
    const { focusedNote: activeNote } = useAppSelector((state) => state.scales)

    const handleKeyClick = () => {
        console.log(note)
        dispatch(updateFocusedNote(note));
    }
    return (
        <div 
        onClick={handleKeyClick}
        data-note={note}
        className={`white-key ${scaleTone && "scale-tone"} ${activeNote === note && "active-piano-key"} ${note}` }
        >
        </div>
    )
}

export default WhiteKey;