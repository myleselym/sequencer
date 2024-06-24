import { useState } from "react"
import "../Piano.css"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { updateFocusedNote } from "@/lib/features/scales/scalesSlice"
type Props = {note: string, scaleTone: boolean }

const BlackKey = ({note, scaleTone }: Props) => {
  const dispatch = useAppDispatch()
  const { focusedNote: activeNote } = useAppSelector((state) => state.scales)
  const handleClick = () => {
  console.log(note)
  dispatch(updateFocusedNote(note));
}
  return (
    <div 
        onClick={handleClick}
        data-note={note} 
        className={`black-key ${note[0]+"-sharp"} ${scaleTone && "scale-tone"} ${activeNote === note && "active-piano-key"}`}
        ></div>
  )
}

export default BlackKey