import React from 'react';
import { View, Text } from 'react-native';
import type { Message } from '../types';
import clsx from 'clsx';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isMe = message.sender === 'me';
  return (
    <View
      className={clsx(
        'my-1 max-w-[80%] rounded-lg p-2.5',
        isMe ? 'self-end bg-[#dcf8c6]' : 'self-start bg-[#eee]'
      )}
    >
      <Text className='text-base'>{message.text}</Text>
    </View>
  );
};

export default MessageBubble;
