"use client"
import "./App.css"
import Grid from "./components/Grid/Grid"
import Piano from "./components/Piano/Piano"
import Sequencer from "./components/Sequencer/Sequencer"

const App = () => {
  return (
    <article id="grid-sequencer">
      <Grid />
      <Piano />
      <Sequencer />
    </article>
  )
}

export default App