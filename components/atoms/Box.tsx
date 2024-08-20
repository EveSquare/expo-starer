import { View, ViewProps } from "react-native";

type Props = ViewProps & {
  children: React.ReactNode;
};

const Box: React.FC<Props> = (props) => {
  return <View {...props}>{props.children}</View>;
};

export default Box;
