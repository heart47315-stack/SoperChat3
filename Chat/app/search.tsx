import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Search() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text>Search</Text>

      <Button
        title="ไปห้องแชท ID 1"
        onPress={() => router.push("/chat/1")}
      />
    </View>
  );
}
