import React from "react";
import { storiesOf, addDecorator, addParameters } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { withA11y } from "@storybook/addon-a11y";

import Button from "./Button";

const types = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  BLACK: "black"
};

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  a11y: {
    // ... axe options
    element: "#root", // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  }
});

storiesOf("button", module)
  .add("Accessible", () => (
    <button style={{ backgroundColor: "black", color: "white" }}>
      Accessible button
    </button>
  ))
  .add("Inaccessible", () => (
    <button style={{ backgroundColor: "black", color: "black" }}>
      Inaccessible button
    </button>
  ))

  .add(
    "button",
    () => {
      const type = select("Choose type", types, "success");
      const buttonText = text("Enter text", "Button text");

      return (
        <Button type={type} onClick={action("clicked")} title={buttonText} />
      );
    },
    {
      notes: "Test description"
    }
  );