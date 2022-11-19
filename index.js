import { buttonOpts } from "./js/buttonopts.js"
import Stepper from "./js/stepper.js"

const defaultSplitWrap = document.getElementById("defaultSplit")
const defaultSplitOpts = {
	classes: [ "stepper-base", "btns-x", "btns-split"],
	attr: {
		name: "defSplit",
		value: 10
	},
	buttons: buttonOpts.default,
	onValueSet: e => console.log( e.detail.value )
}

const defaultLeftWrap = document.getElementById("defaultLeft")
const defaultLeftOpts = {
	classes: [ "btns-x", "btns-left"],
	attr: {
		name: "defLeft",
		value: 10
	},
	buttons: buttonOpts.default,
	onValueSet: e => console.log( e.detail.value )
}

const defaultRightWrap = document.getElementById("defaultRight")
const defaultRightOpts = {
	classes: [ "btns-x", "btns-right"],
	attr: {
		name: "defRight",
		value: 10
	},
	buttons: buttonOpts.arrows.y,
	onValueSet: e => console.log( e.detail.value )
}

const halfSplitWrap = document.getElementById("halfXSplit")
const halfSplitOpts = {
	classes: [ "btns-x", "btns-half", "btns-split"],
	attr: {
		name: "halfXSplit",
		value: 10
	},
	buttons: buttonOpts.default,
	onValueSet: e => console.log( e.detail.value )
}

const xLeftHalfWrap = document.getElementById("halfXLeft")
const xLeftHalfOpts = {
	classes: [ "btns-x", "btns-half", "btns-left"],
	attr: {
		name: "halfXLeft",
		value: 10
	},
	buttons: buttonOpts.chevron.x,
	onValueSet: e => console.log( e.detail.value )
}

const xRightHalfWrap = document.getElementById("halfXRight")
const xRightHalfOpts = {
	classes: [ "btns-x", "btns-half", "btns-right"],
	attr: {
		name: "halfXRight",
		value: 10
	},
	buttons: buttonOpts.pointer.x,
	onValueSet: e => console.log( e.detail.value )
}

const yLeftWrap = document.getElementById("yLeft")
const yLeftOpts = {
	classes: [ "btns-y", "btns-left"],
	attr: {
		name: "yLeft",
		value: 10
	},
	buttons: buttonOpts.chevron.y,
	onValueSet: e => console.log( e.detail.value )
}

const yRightWrap = document.getElementById("yRight")
const yRightOpts = {
	classes: [ "btns-y", "btns-right"],
	attr: {
		name: "yRight",
		value: 10
	},
	buttons: buttonOpts.pointer.y,
	onValueSet: e => console.log( e.detail.value )
}

const yLeftHalfWrap = document.getElementById("yHalfLeft")
const yLeftHalfOpts = {
	classes: [ "btns-y", "btns-half", "btns-left"],
	attr: {
		name: "halfYLeft",
		value: 10
	},
	buttons: buttonOpts.chevron.y,
	onValueSet: e => console.log( e.detail.value )
}

const yRightHalfWrap = document.getElementById("yHalfRight")
const yRightHalfOpts = {
	classes: [ "btns-y", "btns-half", "btns-right"],
	attr: {
		name: "halfYRight",
		value: 10
	},
	buttons: buttonOpts.pointer.y,
	onValueSet: e => console.log( e.detail.value )
}

const stepDayWrap = document.getElementById("stepDay");
const stepDayOpts = {
	classes: [ "stepper-y"],
	attr: {
		name: "stepDay",
		value: 1,
		min: 1,
		max: 31
	},
	buttons: buttonOpts.pointer.y,
	onValueSet: e => console.log( e.detail.value )
}

const stepMonthWrap = document.getElementById("stepMonth");
const stepMonthOpts = {
	classes: [ "stepper-y"],
	attr: {
		name: "stepMonth",
		value: 1,
		min: 1,
		max: 12
	},
	buttons: buttonOpts.pointer.y,
	onValueSet: e => console.log( e.detail.value )
}

const stepYearWrap = document.getElementById("stepYear");
const stepYearOpts = {
	classes: [ "stepper-y", "stepper-dub-w"],
	attr: {
		name: "stepYear",
		value: 2022,
		min: 1951,
		max: 2050
	},
	buttons: buttonOpts.pointer.y,
	onValueSet: e => console.log( e.detail.value )
}

const defSplit = new Stepper( defaultSplitWrap, defaultSplitOpts );
const defSplitLeft = new Stepper( defaultLeftWrap, defaultLeftOpts );
const defSplitRight = new Stepper( defaultRightWrap, defaultRightOpts );
const halfSplit = new Stepper( halfSplitWrap, halfSplitOpts );
const halfXLeft = new Stepper( xLeftHalfWrap, xLeftHalfOpts );
const halfXRight = new Stepper( xRightHalfWrap, xRightHalfOpts );
const yLeft = new Stepper( yLeftWrap, yLeftOpts );
const yRight = new Stepper( yRightWrap, yRightOpts );
const halfYLeft = new Stepper( yLeftHalfWrap, yLeftHalfOpts );
const halfYRight = new Stepper( yRightHalfWrap, yRightHalfOpts );
const dayStepper = new Stepper( stepDayWrap, stepDayOpts );
const monthStepper = new Stepper( stepMonthWrap, stepMonthOpts );
const yearStepper = new Stepper( stepYearWrap, stepYearOpts );
