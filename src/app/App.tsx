import { VariableContextWrapper } from '../wrappers';
import { VariablesView } from '../views';

function App() {
  return (
    <VariableContextWrapper>
      <VariablesView />
    </VariableContextWrapper>
  );
}

export default App;
