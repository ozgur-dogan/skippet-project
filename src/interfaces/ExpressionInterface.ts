export type ExpressionInterface =
  | { type: 'variable'; variableKey: string }
  | { type: 'and' | 'or'; items: ExpressionInterface[] };
