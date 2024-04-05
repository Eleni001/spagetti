"use client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  /* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#use-meaningful-and-pronounceable-variable-names
  x is not a meaningfull variable name, color would be a better name
  */
  const [x, setX] = useState("green");

  return (
    <main>
      This is first page
      <Button
        colorScheme={x}
        onClick={() => {
          setX("blue");
        }}
      >
        Blue
      </Button>
      <Button
        colorScheme={x}
        onClick={() => {
          setX("green");
        }}
      >
       Green
      </Button>
    </main>
  );
}
