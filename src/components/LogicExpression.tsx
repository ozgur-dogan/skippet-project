import { LogicExpressionInterface } from '../interfaces';
import { Expression } from './Expression';

export const LogicExpression: React.FC<{
  type: 'and' | 'or';
  exp: LogicExpressionInterface;
  onChange: (val: LogicExpressionInterface) => void;
}> = ({ type, exp, onChange }) => {
  return (
    <div style={{ marginRight: 2, border: '1px solid #333', padding: 10 }}>
      <div>Type:{type}</div>
      {exp?.items?.map((expressionItem, index) => {
        return (
          <Expression
            key={index}
            exp={expressionItem}
            onChange={(v) => {
              const newExpression = { ...exp };
              newExpression.items = [...(exp.items || [])];
              newExpression.items[index] = v;

              const values = newExpression.items.map((item) => item.value);
              let value: boolean | undefined = undefined;
              if (values.some((v) => v === undefined)) {
                value = undefined;
              } else if (type === 'and') {
                if (values.some((v) => v === false)) {
                  value = false;
                } else {
                  value = true;
                }
              } else if (type === 'or') {
                if (values.some((v) => v === true)) {
                  value = true;
                } else {
                  value = false;
                }
              }
              onChange({ ...newExpression, value });
            }}
          />
        );
      })}
      <button
        onClick={() => {
          onChange({ ...exp, items: [...(exp.items || []), { type: 'undefined', value: undefined }] });
        }}
      >
        Add Expression
      </button>
    </div>
  );
};
