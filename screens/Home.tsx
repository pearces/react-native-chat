import { Button, StyleSheet, Text } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ }: HomeScreenProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat', { userId: 'user123' })} />
      <Button title="View Profile" onPress={() => navigation.navigate('Profile', { userId: 'user123' })} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default HomeScreen;
