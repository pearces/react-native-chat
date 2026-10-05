import { Button, Text, View } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({}: HomeScreenProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className='my-4 items-center justify-between'>
      <Text className='text-2xl font-bold'>Home Screen</Text>
      <View className='justify-start gap-8 pt-16 h-full'>
        <Button
          title='Go to Chat'
          onPress={() => navigation.navigate('Chat', { userId: 'user123' })}
        />
        <Button
          title='View Profile'
          onPress={() => navigation.navigate('Profile', { userId: 'user123' })}
        />
        <Button
          title='Settings'
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
