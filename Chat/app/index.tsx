import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CharacterProfile() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Character ID: {id}</Text>
    </View>
  );
}
