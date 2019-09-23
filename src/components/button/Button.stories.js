import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text,  select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import Button from "./Button";

const types = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning"
};

const stories = storiesOf("Buttons stories with Knobs", module);

stories.addDecorator(withKnobs);

stories.add(
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


// storiesOf("Button", module)
//   .addDecorator(withKnobs)
//   .add("primary", () => (
//     <Button type="success" onClick={action("clicked")} title="Primary" />
//   ))
//   .add("secondary", () => (
//     <Button type="warning" onClick={action("clicked")} title="Secondary" />
//   ))
//   .add("tertiary", () => (
//     <Button type="error" onClick={action("clicked")} title="Tertiary" />
//   ));
