import "./App.css";
import { BiAlarm } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { BiBeenHere } from "react-icons/bi";
import { BiFace } from "react-icons/bi";
import events from "./data/upcoming-events.json";
import { PageBoard } from "./components/PageBoard/PageBoard.jsx";

function App() {
  return (
    <>
      <PageBoard
        icons={[BiAlarm, BiCalendarAlt, BiBeenHere, BiFace]}
        events={events}
      />
    </>
  );
}

export default App;
