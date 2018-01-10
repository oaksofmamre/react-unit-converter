import React, { Component } from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Select from "./elements/Select";
import Output from "./Output";
import {
	measurementTypes,
	unitsByMeasurementType
} from "../helpers/conversion";

class Form extends Component {
	constructor() {
		super();
		this.state = {
			measurementType: "length",
			inputValue: "",
			inputUnits: "",
			outputUnits: ""
		};
	}

	onChangeInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		const { inputValue, inputUnits, outputUnits, measurementType } = this.state;

		return (
			<form>
				<div className="well">
					<h3>Input</h3>

					<InputGroup name="measurementType" labelText="Type of Measurement">
						<Select
							name="measurementType"
							value={measurementType}
							options={measurementTypes(measurementType)}
							onChange={this.onChangeInput}
						/>
					</InputGroup>

					<InputGroup name="inputValue" labelText="Amount">
						<Input
							name="inputValue"
							value={this.state.inputValue}
							onChange={this.onChangeInput}
						/>
					</InputGroup>

					<InputGroup name="inputUnits" labelText="Units">
						<Select
							name="inputUnits"
							value={this.state.inputUnits}
							options={unitsByMeasurementType(measurementType)}
							onChange={this.onChangeInput}
						/>
					</InputGroup>
				</div>

				<Output onChangeInput={this.onChangeInput} {...this.state} />
			</form>
		);
	}
}

export default Form;
