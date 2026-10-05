import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import SafeAreaView from '../components/SafeAreaView';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route }: ProfileScreenProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userId } = route.params;

  return (
    <SafeAreaView className='items-center justify-center'>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
