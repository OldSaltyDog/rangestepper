const addClasses = ( ele, cls ) => {
	
	cls = ( typeof cls === "string" ) ? [ cls ] : cls;

	if ( Array.isArray( cls ) ) {
		cls.forEach( (s) => {
			ele.classList.add( s );
		})
	}
}

const isDisabled = (ele) => {
	return ( ele.attributes.getNamedItem( "disabled" ) !== null );
}

const toggleDisabled = (ele) => {
	
	ele.disabled = (!ele.disabled)
}

export { addClasses, isDisabled, toggleDisabled }