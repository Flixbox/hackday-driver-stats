import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, Grid, Text } from "@mantine/core";
import { primaryColor } from "./theme";
import data from "./sampleData";

const Badge = ({ text, icon }: { text: string; icon: IconProp }) => {
  return (
    <Card
      shadow="sm"
      withBorder
      style={{
        width: "120px",
        height: "170px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box className="fa-layers fa-3x fa-beat">
        <FontAwesomeIcon icon={faCircle} color={primaryColor} />
        <FontAwesomeIcon icon={icon} color="white" transform="shrink-8" />
      </Box>
      <Text>{text}</Text>
    </Card>
  );
};

export const BadgeView = () => {
  return (
    <Grid>
      {data.badges.map((item) => (
        <Badge key={item.text} text={item.text} icon={item.icon} />
      ))}
    </Grid>
  );
};
