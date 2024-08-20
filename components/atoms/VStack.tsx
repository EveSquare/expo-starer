import Flex from "@/components/atoms/Flex";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";

type Props = ViewProps & {
  scrollable?: boolean;
  children: React.ReactNode;
};

const VStack: React.FC<Props> = ({ scrollable = false, ...props }) => (
  <>
    {scrollable ? (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Flex style={styles.vstack} {...props}>
          {props.children}
        </Flex>
      </ScrollView>
    ) : (
      <Flex style={styles.vstack} {...props}>
        {props.children}
      </Flex>
    )}
  </>
);

const styles = StyleSheet.create({
  vstack: {
    flexDirection: "column",
  },
});

export default VStack;
