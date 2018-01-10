import React, { Component } from "react";
// Add import statements
import InputGroup from "./elements/InputGroup";
import Input from "./elements/Input";
import Select from "./elements/Select";

// Hard-coded options for now
const options = ["mm", "cm", "m", "km"];

class Form extends Component {
	render() {
		// Add text and select inputs
		return (
			<form>
				<div className="well">
					<h2>Input</h2>
					<InputGroup name="inputValue" labelText="Amount">
						<Input name="inputValue" value="42" />
					</InputGroup>

					<InputGroup name="inputUnits" labelText="Units">
						<Select name="inputUnits" options={options} value="m" />
					</InputGroup>
				</div>
			</form>
		);
	}
}

export default Form;
