webpackJsonp([1],{

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Administrator on 2016/4/21.
	 */
	module.exports = {
	    path: 'items',
	    getChildRoutes: function getChildRoutes(location, callback) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            callback(null, [__webpack_require__(803)]);
	        });
	    },
	    getComponents: function getComponents(nextSate, callback) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            callback(null, {
	                header: __webpack_require__(807),
	                main: __webpack_require__(808),
	                footer: __webpack_require__(809)
	            });
	        });
	    }
	};

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Administrator on 2016/4/21.
	 */
	module.exports = {
	    path: 'posts',
	    getComponents: function getComponents(nextSate, callback) {
	        __webpack_require__.e/* nsure */(5, function (require) {
	            callback(null, {
	                header: __webpack_require__(811),
	                main: __webpack_require__(812),
	                footer: __webpack_require__(813)
	            });
	        });
	    }
	};

/***/ }

});