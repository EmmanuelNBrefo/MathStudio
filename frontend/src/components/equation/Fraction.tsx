import React from "react";

interface FractionProps {
  numerator?: string;
  denominator?: string;
}

const Fraction = ({
  numerator = "a",
  denominator = "b",
}: FractionProps) => {
  return (
    <div className="inline-flex flex-col items-center mx-2">
      <div className="px-2 text-lg">
        {numerator}
      </div>

      <div className="w-full border-t-2 border-black my-1"></div>

      <div className="px-2 text-lg">
        {denominator}
      </div>
    </div>
  );
};

export default Fraction;