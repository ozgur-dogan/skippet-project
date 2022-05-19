import { useMemo } from 'react';
import { ExpressionInterface } from '../interfaces';
import { ConstantExpression } from './ConstantExpression';
import { LogicExpression } from './LogicExpression';
import { UndefinedExpression } from './UndefinedExpression';
import { VariableExpression } from './VariableExpression';

export const Expression: React.FC<{ exp: ExpressionInterface; onChange: (exp: ExpressionInterface) => void }> = ({
  exp,
  onChange,
}) => {
  const inside = useMemo(() => {
    switch (exp.type) {
      case 'undefined':
        return <UndefinedExpression onChange={(v) => onChange({ ...exp, type: v, value: undefined })} />;
      case 'constant':
        return <ConstantExpression value={exp.value} onChange={(v) => onChange({ ...exp, value: v })} />;
      case 'variable':
        return <VariableExpression exp={exp} onChange={(v) => onChange({ ...v })} />;
      case 'and':
      case 'or':
        return <LogicExpression type={exp.type} exp={exp} onChange={(v) => onChange({ ...v })} />;
      default:
        return null;
    }
  }, [exp, onChange]);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>{inside}</div>
        <div>
          <button onClick={() => onChange({ type: 'undefined', value: undefined })}>X</button>
        </div>
        <div>
          Value:
          {exp.value ? (
            <span style={{ color: 'blue' }}>True</span>
          ) : exp.value === false ? (
            <span style={{ color: 'red' }}>False</span>
          ) : (
            'undefined'
          )}
        </div>
      </div>
    </div>
  );
};
