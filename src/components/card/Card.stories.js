import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, date, radios } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import Card from "./Card";

//values for select
const types = {
  LARGE: "large",
  SMALL: "small"
};

//values for date
const labelDate = "Enter date";
const defaultDateValue = new Date("Jan 20 2017");

function myDateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

//values for radio
const optionsRole = {
  admin: "admin",
  user: "user"
};
const defaultRoleValue = "user";

const stories = storiesOf("Buttons stories with Knobs", module);

stories.addDecorator(withKnobs);

stories.add(
  "Card",
  () => {
    const type = select("Choose type", types, "success");
    const role = radios("Choose role", optionsRole, defaultRoleValue);
    const title = text("Enter title", 'Test title' );
    const description = text("Enter description",  "description test");
    const dateValue = date(labelDate, defaultDateValue);

    return (
      <Card
        role={role}
        type={type}
        title={title}
        descriptionText={description}
        datePost={dateValue}
      />
    );
  },
  {
    notes: "Test description for Card"
  }
);
