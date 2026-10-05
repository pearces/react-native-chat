import React, { useState } from 'react';
import { Button, FlatList, TextInput, View } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Message, RootStackParamList } from '../types';
import MessageBubble from '../components/MessageBubble';
import chatContent from '../fixtures/chatContent';

type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

const ChatScreen = ({ route }: ChatScreenProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userId } = route.params;
  const [messages, setMessages] = useState<Message[]>(chatContent);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          sender: 'me',
          text: input,
          sent: Date.now()
        }
      ]);
      setInput('');
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View key={item.id} className='mb-2.5 min-w-[200px]'>
            <MessageBubble message={item} />
          </View>
        )}
        className='flex-1'
        contentContainerClassName='px-4 py-2'
      />
      <View className='flex-none flex-row items-center border-t border-[#ccc]'>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder='Type a message'
          className='flex-1 rounded-md border border-[#ddd] p-4'
        />
        <Button title='Send' onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
