import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function ChatRoom() {
  const { id } = useLocalSearchParams();
  const [msg, setMsg] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#6e6461", padding: 16 }}>
      <Text style={{ color: "white" }}>Chat with {id}</Text>

      <View style={{ flex: 1 }} />

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TextInput
          value={msg}
          onChangeText={setMsg}
          placeholder="พิมพ์ข้อความ..."
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 12,
            padding: 10,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 12,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white" }}>ส่ง</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
