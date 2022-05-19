import { PropsWithChildren, useState } from 'react';
import { VariableContext } from '../context';
import { Variable } from '../interfaces';

export const VariableContextWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [variables, setVariables] = useState<Variable[]>([
    { key: 'a', label: 'A', value: true },
    { key: 'b', label: 'B', value: false },
    { key: 'c', label: 'C', value: true },
    { key: 'd', label: 'D', value: true },
    { key: 'e', label: 'E', value: false },
  ]);
  return (
    <VariableContext.Provider
      value={{
        variables,
        setVariables,
      }}
    >
      {children}
    </VariableContext.Provider>
  );
};
