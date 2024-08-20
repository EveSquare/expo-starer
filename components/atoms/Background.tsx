import { ThemeConsumer } from "@rneui/themed";
import { View } from "react-native";

type Props = {
  children?: React.ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
          {children}
        </View>
      )}
    </ThemeConsumer>
  );
};

export default Background;
