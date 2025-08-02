import PropTypes from "prop-types";
import { EventList } from "../EventList/EventList.jsx";
import { Container, Orange, Section, Title, Yellow } from "./PageBoard.js";
export const PageBoard = ({ icons, events }) => {
  return (
    <Section>
      <Container>
        <Title>
          <Yellow>24</Yellow>
          <Orange>th</Orange> Core Worlds Coalition Conference
        </Title>
        <EventList events={events} icons={icons} />
      </Container>
    </Section>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
};
