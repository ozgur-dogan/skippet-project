import { useContext } from 'react';
import { VariableInput } from '../components/VariableInput';
import { VariableContext } from '../context';
import { v4 as uuidv4 } from 'uuid';

export const VariablesView = () => {
  const { variables, setVariables } = useContext(VariableContext);
  const onAdd = () => {
    setVariables((curr) => {
      const newArr = [...curr];
      newArr.push({ key: uuidv4(), value: false, label: '' });
      return newArr;
    });
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <div>Length: {variables.length}</div>
      {variables.map(({ key }) => (
        <VariableInput variableKey={key} key={key} />
      ))}
      <button onClick={onAdd}>Add expression</button>
    </div>
  );
};
