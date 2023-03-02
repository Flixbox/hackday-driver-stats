import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor } from "./theme";
import { Text } from "@mantine/core";

export const BubbleWithText = ({
  color,
  text,
}: {
  color?: string;
  text: React.ReactNode;
}) => {
  return (
    <span className="fa-layers" style={{ width: "20px", height: "20px" }}>
      <FontAwesomeIcon
        icon={faCircle}
        color={color || primaryColor}
        size="lg"
        width="20px"
        height="20px"
      />
      <Text className="fa-layers-text" color="white">
        {text}
      </Text>
    </span>
  );
};
