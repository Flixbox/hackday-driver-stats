import {
  Container,
  Progress,
  Box,
  Avatar,
  Tabs,
  Text,
  Stack,
} from "@mantine/core";
import { BadgeView } from "./BadgeView";
import { BubbleWithText } from "./BubbleWithText";
import { Leaderboard } from "./Leaderboard";
import sampleData from "./sampleData";
import { Stats } from "./Stats";

function App() {
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

        <Stack spacing={0} mb={10} align="center">
          <Box display="flex">
            <BubbleWithText text={5} />
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
            <BubbleWithText text={6} />
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
