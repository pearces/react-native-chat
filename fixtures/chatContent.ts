import type { Message } from '../types';

const chatContent: Message[] = [
  { id: '1', sender: 'me', text: 'Hello!', sent: 1633024800 },
  {
    id: '2',
    sender: 'them',
    text: 'Hi there, this is a bunch of text that should wrap at some point',
    sent: 1633028400
  },
  { id: '3', sender: 'me', text: 'How are you?', sent: 1633032000 },
  {
    id: '4',
    sender: 'them',
    text: 'I am fine, thank you! How about you?',
    sent: 1633035600
  },
  { id: '5', sender: 'me', text: 'I am good too!', sent: 1633039200 },
  { id: '6', sender: 'them', text: 'Great to hear!', sent: 1633042800 },
  { id: '7', sender: 'me', text: 'What are you up to?', sent: 1633046400 },
  {
    id: '8',
    sender: 'them',
    text: 'Just working on some projects.',
    sent: 1633050000
  }
];

export default chatContent;
