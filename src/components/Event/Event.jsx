import PropTypes from "prop-types";
import { Detail, Item, List, Title, Text } from "./Event";

export const Event = ({ name, start, end, location, speaker, icons }) => {
  const Alarm = icons[0];
  const Calendar = icons[1];
  const Here = icons[2];
  const Body = icons[3];
  return (
    <Item>
      <Title>{name}</Title>
      <List>
        <Detail>
          <Here fill={"#ffee00ff"} size={40} />
          <Text>{location}</Text>
        </Detail>
        <Detail>
          <Body fill={"#ffb300ff"} size={40} />
          <Text>{speaker}</Text>
        </Detail>
        <Detail>
          <Calendar fill={"#ffee00ff"} size={40} />
          <Text>
            {`${new Date(start)
              .toLocaleString("en-GB", {
                day: "numeric",
              })
              .padStart(2, "0")} ${new Date(start).toLocaleString("en-GB", {
              month: "long",
            })} ${new Date(start).getFullYear()}, ${new Date(start)
              .toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })
              .padStart(2, "0")}`}
          </Text>
        </Detail>
        <Detail>
          <Alarm fill={"#ffb300ff"} size={40} />
          <Text>
            {`${
              Math.floor((new Date(end) - new Date(start)) / 1000 / 60 / 60) > 0
                ? `${Math.floor(
                    (new Date(end) - new Date(start)) / 1000 / 60 / 60
                  )} hours`
                : ""
            } ${
              (Math.floor(new Date(end) - new Date(start)) -
                Math.floor((new Date(end) - new Date(start)) / 1000 / 60 / 60) *
                  1000 *
                  60 *
                  60) /
                1000 /
                60 >
              0
                ? `${
                    (Math.floor(new Date(end) - new Date(start)) -
                      Math.floor(
                        (new Date(end) - new Date(start)) / 1000 / 60 / 60
                      ) *
                        1000 *
                        60 *
                        60) /
                    1000 /
                    60
                  } min`
                : ""
            }`.trim()}
          </Text>
        </Detail>
      </List>
    </Item>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
};
