import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Background from "@/components/atoms/Background";
import { Text, ThemeConsumer } from "@rneui/themed";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Tabs
          screenOptions={{
            headerBackground: () => <Background />,
            headerBackgroundContainerStyle: {
              backgroundColor: theme.colors.background,
            },
            tabBarStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerTitle: () => <Text>Tab One</Text>,
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="code" color={color} />
              ),
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={theme.colors.black}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              title: "Tab Two",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="code" color={color} />
              ),
            }}
          />
        </Tabs>
      )}
    </ThemeConsumer>
  );
}
