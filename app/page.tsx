"use client";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  /* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#use-meaningful-and-pronounceable-variable-names
  x is not a meaningfull variable name, color would be a better name
  */
  const [x, setX] = useState("green");

  /* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#function-names-should-say-what-they-do
  doStuff tells nothing about what the function does, a better name would be createButtons
  */
  function doStuff(
    /* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#function-arguments-2-or-fewer-ideally 
    too many arguments, I would have instead given a list of pairs of color and label
    */

    y: string,
    z: string,
    w: string,
    k: string,
    q: string,
    p: string
  ) {
    return (
      /* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#remove-duplicate-code
      button needlessly duplicated, if the argument had been a list of pairs then it would have been possible to make a map call to create the buttons.
      */
      <>
        {/* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#only-comment-things-that-have-business-logic-complexity
this comment is stating the obvious, delete it!
*/}
        {/* create first button */}
        <Button
          m={10}
          colorScheme={x}
          onClick={() => {
            setX(y);
          }}
        >
          {z}
        </Button>
        <Button
          m={10}
          colorScheme={x}
          onClick={() => {
            setX(w);
          }}
        >
          {k}
        </Button>
        <Button
          m={10}
          colorScheme={x}
          onClick={() => {
            setX(q);
          }}
        >
          {p}
        </Button>
      </>
    );
  }
  /* https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#dont-leave-commented-out-code-in-your-codebase
  don´t leave commented out code! if needed it can be found in git history 
  */
  /* function doOtherStuff(a: number, b: number) {
    return a * b;
  } */
  return (
    <main>
      <Heading textAlign="center">This is first page</Heading>
      <Box>{doStuff("green", "yellow", "red", "blue", "orange", "pink")}</Box>
    </main>
  );
}
