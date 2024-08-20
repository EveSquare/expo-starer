import Box from "@/components/atoms/Box";
import { StyleSheet, ViewProps } from "react-native";

type Props = ViewProps & {
  children: React.ReactNode;
};

const Flex: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Box style={styles.container} {...props}>
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export default Flex;
