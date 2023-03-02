import { Container, Progress, Box } from "@mantine/core";
import { useState } from "react";

const SHIFTS_DRIVEN = 6;
const NEXT_LEVEL_AT_SHIFTS = 10;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container size="xs" px="xs" mt={5}>
      <Box display="flex">
        1
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
          style={{ width: 400, marginLeft: 10, marginRight: 10 }}
        />
        2
      </Box>
    </Container>
  );
}

export default App;
