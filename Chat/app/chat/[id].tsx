import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ChatRoom() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text>ห้องแชท ID: {id}</Text>
    </View>
  );
}

// คำอธิบายการทำงาน:
// - หน้านี้แสดงรายละเอียดของห้องแชทตามพารามิเตอร์ `id` ที่ได้จากเส้นทาง
//   เช่น เมื่อไปที่ `/chat/2` จะอ่าน `id` เป็น "2" แล้วแสดงในหน้า
