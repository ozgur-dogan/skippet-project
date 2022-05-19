import { Variable } from './Variable';

export interface VariableContextInterface {
  variables: Variable[];
  setVariables: React.Dispatch<React.SetStateAction<Variable[]>>;
}
