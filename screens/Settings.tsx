import { Text } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

const SettingsScreen = ({}: SettingsScreenProps) => {
  return (
    <SafeAreaView className='items-center justify-center'>
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
