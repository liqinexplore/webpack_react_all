webpackJsonp([4],{

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(293);

	var _reactRouter = __webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lizhen on 4/12/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	module.exports = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'createCircle',
	        value: function createCircle() {
	            _reactRouter.hashHistory.push("/circle/items/id/new");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _antd.Button,
	                { type: 'primary', onClick: this.createCircle },
	                '新建圈子'
	            );
	        }
	    }]);

	    return _class;
	}(_react.Component);

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(293);

	var _reactRouter = __webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lizhen on 4/12/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	//import NavLink from 'rewriteAntd';

	//const rowSelection={
	//    onChange(selectedRowKeys,selectedRows){
	//        //选中项发生变化的时的回调
	//        //selectedRowKeys指定选中项的 key 数组，需要和 onChange 进行配合
	//        //选择的key值selectedRowKeys
	//        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	//    },
	//    onSelect(record, selected, selectedRows) {
	//        console.log("这里是单项选择",record, selected, selectedRows);
	//    },
	//    onSelectAll(selected, selectedRows, changeRows) {
	//        console.log("这里是全部选择",selected, selectedRows, changeRows);
	//    }
	//};

	var CircleItems = function (_Component) {
	    _inherits(CircleItems, _Component);

	    function CircleItems(props) {
	        _classCallCheck(this, CircleItems);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CircleItems).call(this, props)); //构造函数


	        _this.state = {
	            selectedRowKeys: [], // 这里配置默认勾选列
	            loading: false
	        };
	        return _this;
	    }

	    _createClass(CircleItems, [{
	        key: 'start',
	        value: function start() {
	            var _this2 = this;

	            this.setState({ loading: true });
	            // 模拟 ajax 请求，完成后清空
	            setTimeout(function () {
	                _this2.setState({
	                    selectedRowKeys: [],
	                    loading: false
	                });
	            }, 1000);
	        }
	    }, {
	        key: 'onSelectChange',
	        value: function onSelectChange(selectedRowKeys) {
	            console.log('selectedRowKeys changed: ', selectedRowKeys);
	            this.setState({ selectedRowKeys: selectedRowKeys });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(pagination, filters, sorter) {
	            // 点击分页、筛选、排序时触发
	            console.log('各类参数是', pagination, filters, sorter);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = [];
	            //定义方法，调用onChange，<Table onChange={onChange}  /> 这是方法一，方法二是onChange={this.onChange.bind(this)}

	            //    const onChange=(pagination, filters, sorter) =>{
	            //    // 点击分页、筛选、排序时触发
	            //    console.log('各类参数是', pagination, filters, sorter);
	            //}
	            //循环输出数组
	            for (var i = 0; i < 46; i++) {
	                data.push({
	                    key: i,
	                    name: '李钦' + i,
	                    age: '32',
	                    address: '济南' + i + '号'
	                });
	            }
	            var columns = [{
	                title: '姓名',
	                dataIndex: 'name',
	                key: 'name',
	                render: function render(text) {
	                    return _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        text
	                    );
	                },

	                filters: [{
	                    text: '姓李的',
	                    value: '李'
	                }, {
	                    text: '姓胡的',
	                    value: '胡'
	                }, {
	                    text: '子菜单',
	                    value: '子菜单',
	                    children: [{
	                        text: '姓陈的',
	                        value: '陈'
	                    }, {
	                        text: '姓王的',
	                        value: '王'
	                    }]
	                }],
	                // 指定确定筛选的条件函数
	                // 这里是名字中第一个字是 value
	                onFilter: function onFilter(value, record) {
	                    return record.name.indexOf(value) === 0;
	                },
	                sorter: function sorter(a, b) {
	                    return a.name.length - b.name.length;
	                }
	            }, {
	                title: '年龄',
	                dataIndex: 'age',
	                key: 'age',
	                sorter: function sorter(a, b) {
	                    return a.age - b.age;
	                }
	            }, {
	                title: '住址',
	                dataIndex: 'address',
	                key: 'address',
	                filters: [{
	                    text: '南湖',
	                    value: '南湖'
	                }, {
	                    text: '西湖',
	                    value: '西湖'
	                }],
	                filterMultiple: false,
	                onFilter: function onFilter(value, record) {
	                    return record.address.indexOf(value) === 0;
	                },
	                sorter: function sorter(a, b) {
	                    return a.address.length - b.address.length;
	                }
	            }, {
	                title: '操作',
	                key: 'operation',
	                render: function render(text, record) {
	                    return _react2.default.createElement(
	                        'span',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/circle/items/id/' + record.key, activeClassName: 'active' },
	                            _react2.default.createElement(_antd.Icon, { type: 'setting' }),
	                            '详细信息'
	                        ),
	                        _react2.default.createElement('span', { className: 'ant-divider' }),
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#', className: 'ant-dropdown-link' },
	                            '更多 ',
	                            _react2.default.createElement(_antd.Icon, { type: 'down' })
	                        )
	                    );
	                }
	            }];
	            var _state = this.state;
	            var loading = _state.loading;
	            var selectedRowKeys = _state.selectedRowKeys;

	            var rowSelection = {
	                selectedRowKeys: selectedRowKeys,
	                onChange: this.onSelectChange.bind(this),
	                //	选择框的默认属性配置
	                getCheckboxProps: function getCheckboxProps(record) {
	                    return {
	                        disabled: record.name === '李钦2' // 配置无法勾选的列
	                    };
	                }
	            };
	            var hasSelected = selectedRowKeys.length > 0;
	            //分页器，配置项参考 pagination，设为 false 时不显示分页
	            var pagination = {
	                total: data.length,
	                showSizeChanger: true,
	                onShowSizeChange: function onShowSizeChange(current, pageSize) {
	                    console.log('Current: ', current, '; PageSize: ', pageSize);
	                },
	                onChange: function onChange(current) {
	                    console.log('Current: ', current);
	                }
	            };

	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children || _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: { marginBottom: 16 } },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', onClick: this.start.bind(this), disabled: !hasSelected, loading: loading },
	                            '操作'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { style: { marginLeft: 8 } },
	                            hasSelected ? '选择了 ' + selectedRowKeys.length + ' 个对象' : ''
	                        )
	                    ),
	                    _react2.default.createElement(_antd.Table, { rowSelection: rowSelection, dataSource: data, onChange: this.onChange.bind(this), columns: columns, pagination: pagination })
	                )
	            );
	        }
	    }]);

	    return CircleItems;
	}(_react.Component);

	module.exports = CircleItems;

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(293);

	var _reactRouter = __webpack_require__(233);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lizhen on 4/12/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	module.exports = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'render',
	        value: function render() {
	            //console.log("this.props: ", this.props);

	            return _react2.default.createElement(_antd.Alert, { message: '需求与疑问请向技术部提出', type: 'info' });
	        }
	    }]);

	    return _class;
	}(_react.Component);

/***/ }

});