import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import SafeAreaView from '../components/SafeAreaView';
import { StyleSheet, Text } from 'react-native';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route }: ProfileScreenProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default ProfileScreen;
