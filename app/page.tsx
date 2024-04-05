"use client";
/*  
https://eslint.org/docs/latest/rules/no-duplicate-imports
Button is imported separately, instead it should be imported in the same line as other chakra-ui/react imports
*/
import { Box, Heading } from "@chakra-ui/react";
/*  https://eslint.org/docs/latest/rules/line-comment-position
the position on the comment is not consistent. Choose either place it above or beside the code.
*/
import { Button } from "@chakra-ui/react"; // this should be added to the list of imports form chakra
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
            /* 
            https://eslint.org/docs/latest/rules/no-self-compare
            q is always going to be q so this should be removed
            */
            if (q === q) {
              setX(q);
              /* https://eslint.org/docs/latest/rules/no-empty
              an else statement block that doesnt contain anything causes confusion. shold be removed
              */
            } else {
            }
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

  /*  https://eslint.org/docs/latest/rules/no-unreachable
  placing the function call after return makes it unreachable, it should be placed outside and under the function
  */
  function someFunction(a: number, b: number): number {
    return a + b;
    const result = someFunction(5, 3);
    console.log(result);
  }

  return (
    <main>
      <Heading textAlign="center">This is first page</Heading>
      <Box>{doStuff("green", "yellow", "red", "blue", "orange", "pink")}</Box>
    </main>
  );
}
