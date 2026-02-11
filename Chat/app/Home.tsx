import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>หน้า Home</Text>

      <Button title="ค้นหา" onPress={() => router.push("/search")} />
      <Button title="โปรไฟล์" onPress={() => router.push("/profile")} />
      <Button title="แชท" onPress={() => router.push("/chat")} />  
    </View>
  );
}
