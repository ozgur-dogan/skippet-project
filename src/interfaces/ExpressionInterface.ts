export type ExpressionType = 'undefined' | 'constant' | 'variable' | 'and' | 'or';
export type BaseExpressionInterface = { value?: boolean };
export type UndefinedExpressionInterface = BaseExpressionInterface & { type: 'undefined' };
export type ConstantExpressionInterface = BaseExpressionInterface & { type: 'constant' };
export type VariableExpressionInterface = BaseExpressionInterface & { type: 'variable'; variableKey?: string };
export type LogicExpressionInterface = BaseExpressionInterface & { type: 'and' | 'or'; items?: ExpressionInterface[] };

export type ExpressionInterface = BaseExpressionInterface &
  (UndefinedExpressionInterface | LogicExpressionInterface | ConstantExpressionInterface | VariableExpressionInterface);
