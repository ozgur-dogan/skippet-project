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
  const onChange = (index: number, value: Variable) => {
    setVariables((curr) => {
      const newArr = [...curr];
      newArr[index] = value;
      return newArr;
    });
  };

  return (
    <div>
      <input value={variable.label} onChange={(e) => onChange(index, { ...variable, label: e.target.value })} />
      <select
        value={`${variable.value}`}
        onChange={(e) => onChange(index, { ...variable, value: e.target.value === 'true' })}
      >
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>
    </div>
  );
};
