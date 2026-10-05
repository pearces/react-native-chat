export type RootStackParamList = {
  Home: undefined;
  Chat: { userId: string };
  Profile: { userId: string };
  Settings: undefined;
};

export type Message = {
  id: string;
  sender: 'me' | 'them';
  text: string;
  sent: number;
};
