import React from "react";

interface MatrixProps {
  values?: string[][];
}

const Matrix = ({
  values = [
    ["1", "2"],
    ["3", "4"],
  ],
}: MatrixProps) => {
  return (
    <div className="inline-flex items-center mx-3">
      <div className="border-l-4 border-r-4 border-black px-3 py-2">
        {values.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-4"
          >
            {row.map((value, colIndex) => (
              <span
                key={colIndex}
                className="w-6 text-center"
              >
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;