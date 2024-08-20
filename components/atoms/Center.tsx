import Box from "@/components/atoms/Box";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

const Center: React.FC<Props> = ({ children }) => {
  return <Box style={styles.container}>{children}</Box>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Center;
