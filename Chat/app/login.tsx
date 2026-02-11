import { View, TextInput, Button } from "react-native";

export default function Login() {
  const login = async () => {
    await fetch("http://10.0.2.2:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "test", pass: "1234" }),
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="เข้าสู่ระบบ" onPress={login} />
    </View>
  );
}
