import { createContext } from 'react';

// Create a context so components can access the toggle function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
