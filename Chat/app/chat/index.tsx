import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const chats = [
  { id: "1", name: "Lucia", last: "Hello 👋" },
  { id: "2", name: "Luca", last: "How are you?" },
];

export default function ChatList() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#6e6461", padding: 16 }}>
      <Text style={{ color: "white", fontSize: 20 }}>ห้องข้อความ</Text>

      <FlatList
        data={chats}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/chat/${item.id}`)}
            style={{
              padding: 12,
              backgroundColor: "#857a76",
              borderRadius: 12,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item.name}</Text>
            <Text style={{ color: "#ddd" }}>{item.last}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// คำอธิบายการทำงาน:
// - ไฟล์นี้เป็นหน้ารายการแชท (`/chat`). จะดึงข้อมูลแชทจากอาร์เรย์ตัวอย่าง
//   แล้วแสดงด้วย `FlatList` ทั้งหมด หากผู้ใช้แตะรายการ จะเรียก `router.push`
//   เพื่อไปยังหน้าแชทที่มีพารามิเตอร์ `id` (เช่น `/chat/1`).
