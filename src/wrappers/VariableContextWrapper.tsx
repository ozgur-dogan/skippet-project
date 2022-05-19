import { PropsWithChildren, useEffect, useState } from 'react';
import { VariableContext } from '../context';
import { Variable } from '../interfaces';

export const VariableContextWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [variables, setVariables] = useState<Variable[]>([]);
  useEffect(() => {
    console.log('Variables Changed', variables);
  }, [variables]);
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
