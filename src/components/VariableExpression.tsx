import { useContext } from 'react';
import { VariableContext } from '../context';
import { VariableExpressionInterface } from '../interfaces';

export const VariableExpression: React.FC<{
  exp: VariableExpressionInterface;
  onChange: (val: VariableExpressionInterface) => void;
}> = ({ exp, onChange }) => {
  const { variables } = useContext(VariableContext);
  const onSelect = (newKey?: string) => {
    const variable = variables.find((v) => v.key === newKey);
    if (variable) {
      onChange({ ...exp, variableKey: newKey, value: variable.value });
    } else {
      onChange({ ...exp, variableKey: undefined, value: undefined });
    }
  };

  return (
    <select
      value={exp.variableKey || 'undefined'}
      onChange={(e) => onSelect(e.target.value === 'undefined' ? undefined : e.target.value)}
    >
      <option value='undefined'> --- </option>
      {variables.map((variable) => {
        return (
          <option value={variable.key} key={variable.key}>
            {variable.label}
          </option>
        );
      })}
    </select>
  );
};
