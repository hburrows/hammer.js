( function( global, factory ) {

	'use strict';

  // test for existence of module and module.exports which will clue us in
  // to a CommonJS environment
	if ( typeof module === 'object' && typeof module.exports === 'object' ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and to setup Hammer.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var hammertime = require("hammer")(window);
    if (global.document) {
      factory( global, global.document, 'Hammer' );
    } else {
      module.exports = function( w ) {
				if ( !w.document ) {
					throw new Error( 'Hammer requires a window with a document' );
				}
				return factory( w, w.document, 'Hammer' );
			};
    }
	} else {
		factory( global, global.document, 'Hammer' );
	}

// Pass this if window is not defined yet
}( typeof window !== 'undefined' ? window : this, function( window, document, exportName ) {

'use strict';
