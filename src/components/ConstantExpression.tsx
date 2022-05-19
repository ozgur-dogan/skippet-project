export const ConstantExpression: React.FC<{ value?: boolean; onChange: (val?: boolean) => void }> = ({
  value,
  onChange,
}) => {
  return (
    <select
      value={`${value}`}
      onChange={(e) => onChange(e.target.value === 'true' ? true : e.target.value === 'false' ? false : undefined)}
    >
      <option value='undefined'>Undefined</option>
      <option value='true'>True</option>
      <option value='false'>False</option>
    </select>
  );
};
