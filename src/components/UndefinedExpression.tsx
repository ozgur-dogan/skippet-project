import { ExpressionType } from '../interfaces';

export const UndefinedExpression: React.FC<{ onChange: (type: ExpressionType) => void }> = ({ onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value as ExpressionType)}>
      <option value=''></option>
      <option value='constant'>Constant</option>
      <option value='variable'>Variable</option>
      <option value='and'>And</option>
      <option value='or'>Or</option>
    </select>
  );
};
