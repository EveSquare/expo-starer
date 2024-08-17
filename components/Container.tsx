import { SafeAreaView } from "react-native";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Container;
