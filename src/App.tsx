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
import sampleData from "./sampleData";
import { Stats } from "./Stats";
import { primaryColor } from "./theme";

function App() {
  const [count, setCount] = useState(0);

  const shiftsDriven = sampleData.shiftsDriven;
  const nextLevelAtShifts = 200;

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
              <span className="fa-layers-text">5</span>
            </span>
            <Progress
              size="xl"
              striped
              sections={[
                {
                  value: (shiftsDriven / nextLevelAtShifts) * 100,
                  color: "primary",
                },
              ]}
              style={{ width: 350, marginLeft: 10, marginRight: 10 }}
            />
            <span className="fa-layers">
              <FontAwesomeIcon icon={faCircle} color={primaryColor} size="lg" />
              <span className="fa-layers-text">6</span>
            </span>
          </Box>
          <Text color="black" fz="xs">
            {shiftsDriven} von {nextLevelAtShifts} Schichten gefahren
          </Text>
          <Text color="black" fz="xs">
            Noch {nextLevelAtShifts - shiftsDriven} Schichten zum nächsten Level
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
