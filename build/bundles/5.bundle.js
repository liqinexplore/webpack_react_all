webpackJsonp([5],{

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(232);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _dashboard = __webpack_require__(669);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _antd = __webpack_require__(293);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Circle = function (_Component) {
	    _inherits(Circle, _Component);

	    function Circle() {
	        _classCallCheck(this, Circle);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).apply(this, arguments));
	    }

	    _createClass(Circle, [{
	        key: 'render',
	        value: function render() {
	            console.log("adsfa this.props: ", this.props);
	            var _props = this.props;
	            var header = _props.header;
	            var main = _props.main;
	            var footer = _props.footer;
	            var children = _props.children;
	            var params = _props.params;var content = void 0;
	            if (header || main || footer) {
	                content = _react2.default.createElement(
	                    'div',
	                    { className: 'content_group' },
	                    !!header ? _react2.default.createElement(
	                        _antd.Affix,
	                        { offset: 20 },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'content_header' },
	                            header
	                        )
	                    ) : "",
	                    !!main ? _react2.default.createElement(
	                        'div',
	                        { className: 'content_main' },
	                        main
	                    ) : "",
	                    !!footer ? _react2.default.createElement(
	                        'div',
	                        { className: 'content_footer' },
	                        footer
	                    ) : ""
	                );
	            } else if (children) {
	                content = children;
	            } else {
	                content = _react2.default.createElement(_dashboard2.default, null);
	            }

	            return _react2.default.createElement(
	                'div',
	                null,
	                content
	            );
	        }
	    }]);

	    return Circle;
	}(_react.Component);

	module.exports = Circle;

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _customComponents = __webpack_require__(291);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lizhen on 4/12/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	//https://cnodejs.org/topic/5231a630101e574521e45ef8


	var Dashboard = function (_Component) {
	    _inherits(Dashboard, _Component);

	    function Dashboard() {
	        _classCallCheck(this, Dashboard);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).apply(this, arguments));
	    }

	    _createClass(Dashboard, [{
	        key: 'render',
	        value: function render() {

	            var thisData = [{ id: 1, title: '圈子', route: "circle/items", description: "所有有关圈子的操作（新建、搜索、设置、修改、删除、浏览、详细信息）" }, { id: 2, title: '圈帖', route: "circle/posts", description: "所有有关帖子的操作（搜索、设置、修改、删除、浏览、内容管理）" }, { id: 3, title: '圈评', route: "circle/comments", description: "所有有关评论的操作（搜索、设置、修改、删除、浏览、评论管理）" }, { id: 4, title: '精选圈子', route: "" }, { id: 5, title: '发现圈子', route: "" }, { id: 6, title: '圈子轮播图', route: "" }];

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '圈子管理'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(_customComponents.NavBox, { data: thisData })
	                )
	            );
	        }
	    }]);

	    return Dashboard;
	}(_react.Component);

	module.exports = Dashboard;

/***/ }

});