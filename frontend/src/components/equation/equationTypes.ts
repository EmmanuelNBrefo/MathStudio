export type EquationElementType =
  | "number"
  | "variable"
  | "operator"
  | "fraction"
  | "superscript"
  | "subscript"
  | "root"
  | "symbol";


export interface EquationElement {

  id: string;

  type: EquationElementType;

  value: string;

  children?: EquationElement[];

}


export interface EquationModel {

  id: string;

  title: string;

  elements: EquationElement[];

  createdAt: Date;

  updatedAt: Date;

}