import { VariableContextWrapper } from '../wrappers';
import { VariablesView } from '../views';
import { useState } from 'react';
import { ExpressionInterface } from '../interfaces';
import { Expression } from '../components';

function App() {
  const [expression, setExpression] = useState<ExpressionInterface>({ type: 'undefined', value: undefined });
  return (
    <VariableContextWrapper>
      <VariablesView />
      <Expression exp={expression} onChange={setExpression} />
    </VariableContextWrapper>
  );
}

export default App;
