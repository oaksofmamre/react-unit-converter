import React from "react";
import InputGroup from "./elements/InputGroup";
import Select from "./elements/Select";
import ConversionResult from "./ConversionResult";
import { availableUnits } from "../helpers/conversion.js";

const Output = ({ inputValue, inputUnits, outputUnits }) => {
  if (!inputUnits) {
    return null;
  }

  return (
    <div className="well">
      <h2>Output</h2>

      <InputGroup name="outputUnits" labelText="New Units">
        <Select
          name="outputUnits"
          options={availableUnits(inputUnits)}
          value="meters"
        />
      </InputGroup>

      <ConversionResult inputValue="42" inputUnits="m" outputUnits="km" />
    </div>
  );
};

export default Output;
