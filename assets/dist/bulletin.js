'use strict';

System.register('teamelf/bulletin/Bulletin', ['teamelf/Error', 'teamelf/bulletin/BulletinList', 'teamelf/bulletin/BulletinItem'], function (_export, _context) {
  "use strict";

  var RedirectAs404, BulletinList, BulletinItem, _createClass, _ReactRouterDOM, Switch, Route, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfError) {
      RedirectAs404 = _teamelfError.RedirectAs404;
    }, function (_teamelfBulletinBulletinList) {
      BulletinList = _teamelfBulletinBulletinList.default;
    }, function (_teamelfBulletinBulletinItem) {
      BulletinItem = _teamelfBulletinBulletinItem.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _ReactRouterDOM = ReactRouterDOM;
      Switch = _ReactRouterDOM.Switch;
      Route = _ReactRouterDOM.Route;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.routes = [{ path: '/bulletin', exact: true, component: BulletinList }, { path: '/bulletin/:id', exact: true, component: BulletinItem }];
          return _this;
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Switch,
              null,
              this.routes.map(function (o) {
                return React.createElement(Route, { exact: o.exact, path: o.path, component: o.component });
              }),
              React.createElement(Route, { component: RedirectAs404 })
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinItem', ['teamelf/layout/Page', 'teamelf/bulletin/BulletinProcess'], function (_export, _context) {
  "use strict";

  var Page, BulletinProcess, _createClass, _antd, Row, Col, Button, Input, Checkbox, TreeSelect, Icon, _class;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfBulletinBulletinProcess) {
      BulletinProcess = _teamelfBulletinBulletinProcess.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Row = _antd.Row;
      Col = _antd.Col;
      Button = _antd.Button;
      Input = _antd.Input;
      Checkbox = _antd.Checkbox;
      TreeSelect = _antd.TreeSelect;
      Icon = _antd.Icon;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            autoSave: true,
            saving: false,
            publishing: false,
            deleting: false,
            changed: false,
            bulletin: null
          };
          _this.fetchBulletin();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchBulletin',
          value: function fetchBulletin() {
            var _this2 = this;

            var id = this.props.match.params.id;
            return axios.get('bulletin/' + id).then(function (r) {
              _this2.setState({ bulletin: r.data });
              _this2.autoSave();
            });
          }
        }, {
          key: 'save',
          value: function save() {
            var _this3 = this;

            var data = {
              title: this.state.bulletin.title || '',
              content: this.state.bulletin.content || ''
            };
            var id = this.props.match.params.id;
            this.setState({ saving: true });
            return axios.put('bulletin/' + id, data).then(function (r) {
              _this3.setState({ saving: false, changed: false });
            }).catch(function (e) {
              _this3.setState({ saving: false });
            });
          }
        }, {
          key: 'publish',
          value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var id;
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      id = this.props.match.params.id;
                      _context2.next = 3;
                      return this.save();

                    case 3:
                      this.setState({ publishing: true });
                      return _context2.abrupt('return', axios.put('bulletin/' + id + '/publish').then(function (r) {
                        _this4.setState({ publishing: false });
                        _this4.fetchBulletin();
                      }).catch(function (e) {
                        _this4.setState({ publishing: false });
                      }));

                    case 5:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee, this);
            }));

            function publish() {
              return _ref.apply(this, arguments);
            }

            return publish;
          }()
        }, {
          key: 'del',
          value: function del() {
            var _this5 = this;

            var id = this.props.match.params.id;
            this.setState({ deleting: false });
            return axios.delete('bulletin/' + id).then(function (r) {
              _this5.setState({ deleting: false });
              window.location.href = '/bulletin';
            }).catch(function (e) {
              _this5.setState({ deleting: false });
            });
          }
        }, {
          key: 'autoSave',
          value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.state.changed && this.state.autoSave)) {
                        _context3.next = 3;
                        break;
                      }

                      _context3.next = 3;
                      return this.save();

                    case 3:
                      setTimeout(this.autoSave.bind(this), 60000);

                    case 4:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee2, this);
            }));

            function autoSave() {
              return _ref2.apply(this, arguments);
            }

            return autoSave;
          }()
        }, {
          key: 'title',
          value: function title() {
            if (this.state.bulletin) {
              return this.state.bulletin.title;
            }
          }
        }, {
          key: 'description',
          value: function description() {
            var _this6 = this;

            if (this.state.bulletin) {
              return React.createElement(
                Row,
                { type: 'flex', gutter: 16 },
                React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      'strong',
                      null,
                      '\u521B\u5EFA\u65F6\u95F4\uFF1A'
                    ),
                    React.createElement(
                      'span',
                      null,
                      moment.unix(this.state.bulletin.createdAt).format('YYYY-MM-DD HH:mm:ss')
                    )
                  ),
                  React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      'strong',
                      null,
                      '\u6700\u540E\u66F4\u65B0\uFF1A'
                    ),
                    React.createElement(
                      'span',
                      null,
                      moment.unix(this.state.bulletin.updatedAt).format('YYYY-MM-DD HH:mm:ss')
                    )
                  )
                ),
                React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Checkbox,
                      {
                        checked: this.state.autoSave,
                        onChange: function onChange(e) {
                          return _this6.setState({ autoSave: e.target.checked });
                        }
                      },
                      this.state.autoSave && this.state.saving ? [React.createElement(Icon, { type: 'loading' }), ' 保存中...'] : '自动存草稿'
                    )
                  ),
                  this.state.bulletin.isDraft && React.createElement(
                    Row,
                    { type: 'flex', justify: 'start', gutter: 16 },
                    React.createElement(
                      Col,
                      null,
                      React.createElement(
                        Button,
                        {
                          type: 'primary',
                          onClick: this.save.bind(this),
                          loading: this.state.saving
                        },
                        '\u4FDD\u5B58\u8349\u7A3F'
                      )
                    ),
                    React.createElement(
                      Col,
                      null,
                      React.createElement(
                        Button,
                        {
                          type: 'primary',
                          onClick: this.publish.bind(this),
                          loading: this.state.publishing
                        },
                        '\u53D1\u5E03\u516C\u544A'
                      )
                    ),
                    React.createElement(
                      Col,
                      null,
                      React.createElement(
                        Button,
                        {
                          type: 'danger',
                          onClick: this.del.bind(this),
                          loading: this.state.deleting
                        },
                        '\u820D\u5F03'
                      )
                    )
                  )
                )
              );
            }
          }
        }, {
          key: 'handleBulletinChange',
          value: function handleBulletinChange(key, e) {
            var bulletin = this.state.bulletin;
            bulletin[key] = e.target.value;
            this.setState({ bulletin: bulletin, changed: true });
          }
        }, {
          key: 'renderView',
          value: function renderView() {
            return React.createElement(
              Row,
              { type: 'flex', gutter: 16 },
              React.createElement(
                Col,
                { xs: 24, md: 12 },
                React.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  React.createElement(Input, {
                    size: 'large',
                    value: this.state.bulletin.title,
                    onChange: this.handleBulletinChange.bind(this, 'title')
                  })
                ),
                React.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  React.createElement(TreeSelect, {
                    size: 'large', style: { width: '100%' },
                    treeCheckable: true,
                    showCheckedStrategy: TreeSelect.SHOW_PARENT,
                    searchPlaceholder: '\u9009\u62E9\u8981\u901A\u77E5\u7684\u4EBA',
                    treeData: [],
                    value: [],
                    onChange: function onChange(e) {
                      return console.log(e);
                    }
                  })
                ),
                React.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  React.createElement(Input.TextArea, {
                    size: 'large',
                    autosize: { minRows: 10, maxRows: 30 },
                    value: this.state.bulletin.content,
                    onChange: this.handleBulletinChange.bind(this, 'content')
                  })
                )
              ),
              React.createElement(
                Col,
                { xs: 24, md: 12 },
                React.createElement(
                  'div',
                  null,
                  this.state.bulletin.title
                ),
                React.createElement(
                  'div',
                  null,
                  this.state.bulletin.content
                )
              )
            );
          }
        }, {
          key: 'view',
          value: function view() {
            if (this.state.bulletin) {
              return [React.createElement(BulletinProcess, { isDraft: this.state.bulletin.isDraft }), this.renderView()];
            }
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinList', ['teamelf/layout/Page'], function (_export, _context) {
  "use strict";

  var Page, _createClass, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'title',
          value: function title() {
            return '公告管理';
          }
        }, {
          key: 'description',
          value: function description() {
            return [React.createElement(
              'p',
              null,
              '\u8FD9\u91CC\u60A8\u53EF\u4EE5\u7ED9\u6210\u5458\u7EC4\u6216\u8005\u5355\u4E2A\u6210\u5458\u53D1\u9001\u516C\u544A\uFF0C\u5E76\u4E14\u5F97\u5230\u53CD\u9988'
            )];
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              null,
              'Bulletin'
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinProcess', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Steps, Icon, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Steps = _antd.Steps;
      Icon = _antd.Icon;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.steps = [{ title: '编辑', icon: 'edit' }, { title: '发布公告', icon: 'notification' }, { title: '反馈', icon: 'solution' }];
          return _this;
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Steps,
              {
                current: this.props.isDraft ? 0 : 2,
                style: { marginBottom: 16 }
              },
              this.steps.map(function (o) {
                return React.createElement(Steps.Step, {
                  title: o.title,
                  icon: React.createElement(Icon, { type: o.icon })
                });
              })
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/main', ['teamelf/bulletin/Bulletin', 'teamelf/App', 'teamelf/layout/SideNav', 'teamelf/Permission'], function (_export, _context) {
  "use strict";

  var Bulletin, App, SideNav, Permission;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  return {
    setters: [function (_teamelfBulletinBulletin) {
      Bulletin = _teamelfBulletinBulletin.default;
    }, function (_teamelfApp) {
      App = _teamelfApp.default;
    }, function (_teamelfLayoutSideNav) {
      SideNav = _teamelfLayoutSideNav.SideNav;
    }, function (_teamelfPermission) {
      Permission = _teamelfPermission.default;
    }],
    execute: function () {
      /**
       * This file is part of TeamELF
       *
       * (c) GuessEver <guessever@gmail.com>
       *
       * For the full copyright and license information, please view the LICENSE
       * file that was distributed with this source code.
       */

      App.prototype.routes = [].concat(_toConsumableArray(App.prototype.routes || []), [{ path: '/bulletin', component: Bulletin }]);
      SideNav.prototype.navigations = [].concat(_toConsumableArray(SideNav.prototype.navigations || []), [{ path: '/bulletin', icon: 'notification', title: '公告管理' }]);
      Permission.prototype.permissions = [].concat(_toConsumableArray(Permission.prototype.permissions || []), [{ name: '查看所有通知', permission: 'bulletin.list' }, { name: '发送通知', permission: 'bulletin.create' }]);
    }
  };
});