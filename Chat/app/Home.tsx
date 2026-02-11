import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const mockData = [
  { id: "1", name: "Lucia", image: "https://i.pravatar.cc/300?img=1" },
  { id: "2", name: "Luca", image: "https://i.pravatar.cc/300?img=2" },
  { id: "3", name: "Leya", image: "https://i.pravatar.cc/300?img=3" },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#6e6461", padding: 16 }}>
      <Text style={{ fontSize: 22, color: "white", marginBottom: 12 }}>
        หน้าแรก
      </Text>

      <FlatList
        data={mockData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/character/[id]",
                params: { id: item.id },
              })
            }
            style={{ flex: 1, marginBottom: 12 }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ height: 180, borderRadius: 16 }}
            />
            <Text style={{ color: "white", marginTop: 6 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
