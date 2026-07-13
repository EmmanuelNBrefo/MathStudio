import React from "react";

interface SubscriptProps {
  base?: string;
  subscript?: string;
}

const Subscript = ({
  base = "x",
  subscript = "1",
}: SubscriptProps) => {
  return (
    <span className="inline-flex items-end mx-1">
      <span className="text-xl">
        {base}
      </span>

      <sub className="text-sm ml-1">
        {subscript}
      </sub>
    </span>
  );
};

export default Subscript;