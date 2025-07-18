import { Text, View, TouchableOpacity} from "react-native";
import  {styles}  from '../../styles/auth.styles';
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hello</Text>
      <TouchableOpacity onPress={() => alert('You Touched')}><Text>Touch me</Text></TouchableOpacity>
      <Link href={"/notification"}>Notification</Link>
      <Link href={"/profile"}>Profile</Link>
    </View>
  );
}
