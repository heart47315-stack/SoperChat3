import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SuperChat</Text>
      <Button title="Login" onPress={() => router.push("/login")} />
    </View>
  );
}
