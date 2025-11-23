import { createContext } from 'react';

export const UserContext = createContext({
  name: '',
  age: 0,
  bio: ''
});
