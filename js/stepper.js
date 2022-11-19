import { addClasses, isDisabled, toggleDisabled } from "./dom.js";
export default class Stepper {
	/** @constructor */
	constructor(ele, options) {

		this.options = options;
		this._element = ele;
		this._element.classList.add( "twx-stepper" );
		this._init();
	}

	_init() {
		let opts = this.options;

		this._input = this._addInput(opts.attr);
		this._btnDec = this._addButton([opts.buttons.dec, "btn-dec"]);
		this._btnInc = this._addButton([opts.buttons.inc, "btn-inc"]);

		addClasses(this._element, opts.classes );

		this._bindEvents();

	}
	
	_addInput(opts) {
		let ip = document.createElement("input");
		ip.setAttribute("type", "number");

		 for ( const prop in opts) {
			ip.setAttribute(prop, opts[prop])
		 }

		 this._element.append(ip);

		 return ip;
	}

	_addButton(cls) {
		let btn = document.createElement("button");
		addClasses(btn, cls);
		this._element.append(btn);

		return btn;
	}

	_bindEvents() {

		const valueSetEvent = new CustomEvent( "valueSet", { value: this._input.value } )

		this._btnInc.onclick = (e) => {
			e.stopPropagation();
			this._increment();
		}

		this._btnDec.onclick = (e) => {
			e.stopPropagation();
			this._decrement();
		}

		this._input.addEventListener("input", ( e ) => { 
			this._element.dispatchEvent(new CustomEvent( "valueSet", { detail: { value: e.target.value }} ))
		})
			

		this._element.addEventListener("valueSet", (e) => {
			this.options.onValueSet(e);
		})
	}

	_increment() {
		this._input.stepUp();
		this._checkVal();
	}
	_decrement() {
		this._input.stepDown();
		this._checkVal();
	}
	_checkVal() {
		let val = parseInt(this._input.value),
			min = this.options.attr.min,
			max = this.options.attr.max;

		if ( ( val > min && this._btnDec.disabled ) || (val === min && !this._btnDec.disabled ) ) {
			this._btnDec.disabled = (!this._btnDec.disabled);
		}
		if ( ( val < max && isDisabled(this._btnInc) ) || (val === max && !( isDisabled( this._btnInc ) ) ) ) {
			this._btnInc.disabled = (!this._btnInc.disabled);
		}

		this._input.dispatchEvent(new Event("input", { bubbles: false } ))
		
	}
}
/*
let stepperOpts = {
	classes: [],
	attr: {
		min: 0,
		max: 100,
		step: 5,
		name: '',
		id: ''
	},
	buttons: {
		inc: 'wxi-plus',
		dec: 'wxi-minus'
	},
	tag: {
		icon: '',
		label: ''
	},
	onValueSet: undefined
}*/