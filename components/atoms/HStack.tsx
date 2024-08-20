import Flex from "@/components/atoms/Flex";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

const HStack: React.FC<Props> = ({ children }) => {
  return <Flex style={styles.container}>{children}</Flex>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default HStack;
