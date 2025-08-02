import PropTypes from "prop-types";
import { Event } from "../Event/Event.jsx";
import { List } from "./EventList.js";
export const EventList = ({ events, icons }) => {
  return (
    <List>
      {events.map((event, index) => (
        <Event
          icons={icons}
          key={index}
          name={event.name}
          start={event.time.start}
          end={event.time.end}
          location={event.location}
          speaker={event.speaker}
        />
      ))}
    </List>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
};
