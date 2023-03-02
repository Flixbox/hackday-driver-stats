import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Progress, Box, Avatar } from "@mantine/core";
import { useState } from "react";
import { primaryColor } from "./theme";

const SHIFTS_DRIVEN = 6;
const NEXT_LEVEL_AT_SHIFTS = 10;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container size="xs" px="xs" mt={5}>
      <Box display="flex" style={{ alignItems: "flex-end" }}>
        <Avatar radius="xl" mr={6} />

        <Box display="flex">
          <span className="fa-layers">
            <FontAwesomeIcon icon={faCircle} color={primaryColor} />
            <span className="fa-layers-text">1</span>
          </span>
          <Progress
            size="xl"
            striped
            sections={[
              {
                value: 40,
                color: "primary",
                label: `${SHIFTS_DRIVEN} von ${NEXT_LEVEL_AT_SHIFTS}`,
              },
            ]}
            style={{ width: 350, marginLeft: 10, marginRight: 10 }}
          />
          <span className="fa-layers">
            <FontAwesomeIcon icon={faCircle} color={primaryColor} />
            <span className="fa-layers-text">2</span>
          </span>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
