import { useContext } from 'react';
import { VariableContext } from '../context';
import { Variable } from '../interfaces';

interface Props {
  variableKey: string;
}
export const VariableInput: React.FC<Props> = ({ variableKey }) => {
  const { variables, setVariables } = useContext(VariableContext);
  const variable = variables.find((v) => v.key === variableKey);
  if (!variable) {
    return null;
  }
  const onChange = (variableKey: string, value: Variable) => {
    setVariables((curr) => {
      const newArr = [...curr];
      const itemIndex = newArr.findIndex((v) => v.key === variableKey);
      newArr[itemIndex] = value;
      return newArr;
    });
  };

  return (
    <div>
      <input value={variable.label} onChange={(e) => onChange(variableKey, { ...variable, label: e.target.value })} />
      <select
        value={`${variable.value}`}
        onChange={(e) => onChange(variableKey, { ...variable, value: e.target.value === 'true' })}
      >
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>
    </div>
  );
};
