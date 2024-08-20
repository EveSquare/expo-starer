import Background from "@/components/atoms/Background";
import { useThemeMode } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  const { mode } = useThemeMode();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={mode === "light" ? "dark" : "light"} />
      <Background>{children}</Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
