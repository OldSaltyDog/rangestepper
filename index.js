import { buttonOpts } from "./js/buttonopts.js"
import Stepper from "./js/stepper.js"

const step1wrap = document.getElementById("btnsSplit")
const step1opts = {
	classes: [ "stepper-base", "btns-split"],
	attr: {
		name: "stepper1",
		value: 10
	},
	buttons: buttonOpts.default,
	onValueSet: e => console.log( e.detail.value )
}

const step2wrap = document.getElementById("btnsSplitShort")
const step2opts = {
	classes: ["stepper-2", "btns-split", "btns-half-w" ],
	attr: {
		name: "stepper2",
		min: 0,
		max: 10,
		value: 5
	},
	buttons: buttonOpts.pointer.x,
	onValueSet: e => console.log( e.detail.value )
}

const stepLeftwrap = document.getElementById("btnsLeft")
const stepLeftopts = {
	classes: ["btns-stacked-h", "btns-left"],
	attr: {
		name: "stepLeft",
		value: 50,
		min: 0,
		max: 100,
		step: 5
	},
	buttons: buttonOpts.chevron.y,
	onValueSet: e => console.log( e.detail.value )
}

const stepRightwrap = document.getElementById("btnsRight")
const stepRightopts = {
	classes: ["btns-stacked", "btns-right"],
	attr: {
		name: "stepRight",
		value: 0,
		min: 0,
		max: 10,
		step: .5
	},
	buttons: buttonOpts.pointer.y,
	onValueSet: e => console.log( e.detail.value )
}

const stepYopts = {
	classes: ["btns-y"],
	attr: {
		name: "stepY",
		value: 10
	},
	buttons: buttonOpts.chevron.y,
	onValueSet: e => console.log( e.detail.value )
}

const stepYwrap = document.getElementById("btnsY")

const stepper1 = new Stepper( step1wrap, step1opts );
const splitHalf = new Stepper( step2wrap, step2opts );
const stepperLeft = new Stepper( stepLeftwrap, stepLeftopts );
const stepperRight = new Stepper( stepRightwrap, stepRightopts );
const stepperY = new Stepper( stepYwrap, stepYopts );