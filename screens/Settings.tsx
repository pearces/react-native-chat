import { StyleSheet, Text } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen = ({ }: SettingsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default SettingsScreen;
