import React from "react";

const names = [
  "dharm",
  "james",
  "rohit",
  "mohit",
  "raghav",
  "sarvan",
  "dhruv",
  "renu"
];
const Filter = () => {
  return (
    <>
      {names
        .filter((name) => name.includes("d", "r"))
        .map((filteredName) => (
          <li>{filteredName}</li>
        ))}
    </>
  );
};
export default Filter;
