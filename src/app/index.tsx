import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to QwickMath!</Text>
      <Text>Work in progress...</Text>
      <button onClick={Register}>Register</button>
    </View>
  );
}
var Register = () => {


}
