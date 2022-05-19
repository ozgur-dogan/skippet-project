import { createContext } from 'react';
import { VariableContextInterface } from '../interfaces';

export const VariableContext = createContext<VariableContextInterface>({ variables: [], setVariables: () => {} });
