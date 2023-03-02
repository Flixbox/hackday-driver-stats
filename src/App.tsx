import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Progress,
  Box,
  Avatar,
  Tabs,
  Text,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import { BadgeView } from "./BadgeView";
import { Leaderboard } from "./Leaderboard";
import { Stats } from "./Stats";
import { primaryColor } from "./theme";

const SHIFTS_DRIVEN = 6;
const NEXT_LEVEL_AT_SHIFTS = 10;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container size="xs" px="xs" mt={5}>
      <Box
        display="flex"
        mb={15}
        style={{ alignItems: "flex-end", color: "white" }}
      >
        <Avatar radius="xl" size={100} mr={6} />

        <Stack spacing={0} align="center">
          <Box display="flex">
            <span className="fa-layers">
              <FontAwesomeIcon icon={faCircle} color={primaryColor} size="lg" />
              <span className="fa-layers-text">1</span>
            </span>
            <Progress
              size="xl"
              striped
              sections={[
                {
                  value: 40,
                  color: "primary",
                },
              ]}
              style={{ width: 350, marginLeft: 10, marginRight: 10 }}
            />
            <span className="fa-layers">
              <FontAwesomeIcon icon={faCircle} color={primaryColor} size="lg" />
              <span className="fa-layers-text">2</span>
            </span>
          </Box>
          <Text color="black" fz="xs">
            {SHIFTS_DRIVEN} von {NEXT_LEVEL_AT_SHIFTS} Schichten gefahren
          </Text>
          <Text color="black" fz="xs">
            Noch {NEXT_LEVEL_AT_SHIFTS - SHIFTS_DRIVEN} Schichten zum nächsten
            Level
          </Text>
        </Stack>
      </Box>
      <Tabs defaultValue="badges">
        <Tabs.List grow>
          <Tabs.Tab value="badges">Badges</Tabs.Tab>
          <Tabs.Tab value="leaderboard">Leaderboard</Tabs.Tab>
          <Tabs.Tab value="stats">Stats</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="badges" pt="xs">
          <BadgeView />
        </Tabs.Panel>

        <Tabs.Panel value="leaderboard" pt="xs">
          <Leaderboard />
        </Tabs.Panel>

        <Tabs.Panel value="stats" pt="xs">
          <Stats />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default App;
