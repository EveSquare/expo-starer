import Background from "@/components/atoms/Background";
import { useThemeMode } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  const { mode } = useThemeMode();
  return (
    <SafeAreaView>
      <StatusBar style={mode === "light" ? "dark" : "light"} />
      <Background>{children}</Background>
    </SafeAreaView>
  );
};

export default Container;
