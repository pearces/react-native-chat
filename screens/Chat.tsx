import { StyleSheet, Text } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

const ChatScreen = ({ route }: ChatScreenProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default ChatScreen;
