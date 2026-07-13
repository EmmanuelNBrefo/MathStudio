import React from "react";

interface RootProps {
  value?: string;
  degree?: string;
}

const Root = ({
  value = "x",
  degree = "2",
}: RootProps) => {
  return (
    <span className="inline-flex items-start mx-2">
      {degree !== "2" && (
        <sup className="text-xs mr-1">
          {degree}
        </sup>
      )}

      <span className="text-2xl">√</span>

      <span className="border-t-2 border-black px-2 pt-1 text-lg">
        {value}
      </span>
    </span>
  );
};

export default Root;