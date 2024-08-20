import { VStack, Container, Center, HStack } from "@/components/atoms";
import { Button, Card, Image, Text, useThemeMode } from "@rneui/themed";
import { router } from "expo-router";
import { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Image as ExpoImage } from "expo-image";
import { CheckBox } from "@rneui/base";

export default function TabOneScreen() {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const { setMode, mode } = useThemeMode();
  return (
    <Container>
      <VStack scrollable>
        <Center>
          <Button
            title="Hey! Push it!"
            onPress={() => setCount(count + 1)}
            containerStyle={{
              width: wp("80%"),
            }}
            buttonStyle={{
              borderWidth: 2,
            }}
            titleStyle={{
              fontWeight: "bold",
            }}
            radius="xl"
          />
        </Center>
        <Text>
          Hey{count}! {"themefile locate themes/index.ts"}
        </Text>
        <Image
          source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          containerStyle={{ width: wp("100%"), height: hp("30%") }}
        />
        <Card>
          <CheckBox
            title={`chage ${isChecked ? "light" : "dark"} theme`}
            checked={isChecked}
            onPress={() => {
              setIsChecked(!isChecked);
              setMode(isChecked ? "light" : "dark");
            }}
          />
          <Text>Word of the Day{mode}</Text>
          <Text h1>(h1) In love with React Native & Expo</Text>
          <Text h2>(h2) In love with React Native & Expo</Text>
          <Text h3>(h3) In love with React Native & Expo</Text>
          <Text h4>(h4) In love with React Native & Expo</Text>
          <Center>
            <HStack>
              <Button
                size="sm"
                type="clear"
                onPress={() => router.navigate("/modal")}
              >
                Learn More
              </Button>
              <Button size="sm" type="clear">
                Blank Button
              </Button>
            </HStack>
          </Center>
        </Card>
        <ExpoImage
          source="image1-IvanSamkov-cc"
          style={{ width: wp("80%"), height: hp("30%") }}
        />
      </VStack>
    </Container>
  );
}
