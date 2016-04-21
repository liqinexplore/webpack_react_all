webpackJsonp([3],{

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lizhen on 4/12/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var circleItem = function (_Component) {
	    _inherits(circleItem, _Component);

	    function circleItem() {
	        _classCallCheck(this, circleItem);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(circleItem).apply(this, arguments));
	    }

	    _createClass(circleItem, [{
	        key: "render",
	        value: function render() {
	            var properties = this.props;
	            console.log("item.props: ", this.props);
	            return _react2.default.createElement(
	                "div",
	                null,
	                "此处是具体某一条数据的详细信息页，根据传入的参数（",
	                properties.params.circleID,
	                "）读取接口，显示数据，进行逻辑操作。"
	            );
	        }
	    }]);

	    return circleItem;
	}(_react.Component);

	module.exports = circleItem;

/***/ }

});