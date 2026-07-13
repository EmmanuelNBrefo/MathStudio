export type EquationElementType =
  | "number"
  | "variable"
  | "operator"
  | "symbol"
  | "fraction"
  | "superscript"
  | "subscript"
  | "root"
  | "matrix";


export interface EquationElement {

  id: string;

  type: EquationElementType;

  value?: string;


  children?: EquationElement[];


  properties?: {

    numerator?: string;

    denominator?: string;

    base?: string;

    exponent?: string;

    degree?: string;

  };

}


export interface EquationModel {

  id: string;

  title: string;

  elements: EquationElement[];

  createdAt: Date;

  updatedAt: Date;

}