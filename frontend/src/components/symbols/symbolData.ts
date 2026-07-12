export interface MathSymbol {
  id: number;
  symbol: string;
  name: string;
  category: string;
  latex: string;
}


export const symbolData: MathSymbol[] = [

  // Arithmetic

  {
    id: 1,
    symbol: "+",
    name: "Addition",
    category: "Arithmetic",
    latex: "+"
  },

  {
    id: 2,
    symbol: "−",
    name: "Subtraction",
    category: "Arithmetic",
    latex: "-"
  },

  {
    id: 3,
    symbol: "×",
    name: "Multiplication",
    category: "Arithmetic",
    latex: "\\times"
  },

  {
    id: 4,
    symbol: "÷",
    name: "Division",
    category: "Arithmetic",
    latex: "\\div"
  },


  // Algebra

  {
    id: 5,
    symbol: "√",
    name: "Square Root",
    category: "Algebra",
    latex: "\\sqrt{}"
  },

  {
    id: 6,
    symbol: "∞",
    name: "Infinity",
    category: "Algebra",
    latex: "\\infty"
  },

  {
    id: 7,
    symbol: "∑",
    name: "Summation",
    category: "Algebra",
    latex: "\\sum"
  },


  // Geometry

  {
    id: 8,
    symbol: "∠",
    name: "Angle",
    category: "Geometry",
    latex: "\\angle"
  },

  {
    id: 9,
    symbol: "△",
    name: "Triangle",
    category: "Geometry",
    latex: "\\triangle"
  },

  {
    id: 10,
    symbol: "°",
    name: "Degree",
    category: "Geometry",
    latex: "^{\\circ}"
  },


  // Calculus

  {
    id: 11,
    symbol: "∫",
    name: "Integral",
    category: "Calculus",
    latex: "\\int"
  },

  {
    id: 12,
    symbol: "∂",
    name: "Partial Derivative",
    category: "Calculus",
    latex: "\\partial"
  },


  // Greek Letters

  {
    id: 13,
    symbol: "α",
    name: "Alpha",
    category: "Greek",
    latex: "\\alpha"
  },

  {
    id: 14,
    symbol: "π",
    name: "Pi",
    category: "Greek",
    latex: "\\pi"
  },

  {
    id: 15,
    symbol: "θ",
    name: "Theta",
    category: "Greek",
    latex: "\\theta"
  },


  // Sets & Logic

  {
    id: 16,
    symbol: "∈",
    name: "Element Of",
    category: "Sets",
    latex: "\\in"
  },

  {
    id: 17,
    symbol: "∪",
    name: "Union",
    category: "Sets",
    latex: "\\cup"
  },

  {
    id: 18,
    symbol: "∩",
    name: "Intersection",
    category: "Sets",
    latex: "\\cap"
  }

];