import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, Grid, Text } from "@mantine/core";
import { primaryColor } from "./theme";
import data, { type Badge } from "./sampleData";

const Badge = ({ text, icon, disabled }: Badge) => {
  return (
    <Card
      shadow="sm"
      withBorder
      style={{
        width: "100%",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box className="fa-layers fa-3x">
        <FontAwesomeIcon
          icon={faCircle}
          color={disabled ? "gray" : primaryColor}
        />
        <FontAwesomeIcon
          icon={icon}
          color="white"
          transform="shrink-8"
          width="48px"
        />
      </Box>
      <Text align="center" mt={5} color={disabled ? "grey" : "black"}>
        {text}
      </Text>
    </Card>
  );
};

export const BadgeView = () => {
  return (
    <Grid>
      {data.badges.map((item) => (
        <Grid.Col span={4}>
          <Badge key={item.text} {...item} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
