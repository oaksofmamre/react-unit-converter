import React from "react";
import InputGroup from "./elements/InputGroup";
import Select from "./elements/Select";
import ConversionResult from "./ConversionResult";
import { availableUnits } from "../helpers/conversion";

const Output = props => {
  const { inputValue, inputUnits, outputUnits, onChangeInput } = props;

  if (!inputUnits) {
    return null;
  }

  return (
    <div className="well">
      <h3>Output</h3>

      <InputGroup name="outputUnits" labelText="New Units">
        <Select
          name="outputUnits"
          options={availableUnits(inputUnits)}
          value={outputUnits}
          onChange={onChangeInput}
        />
      </InputGroup>

      <ConversionResult {...props} />
    </div>
  );
};

export default Output;
