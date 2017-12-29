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

System.register('teamelf/bulletin/BulletinCardItem', ['teamelf/bulletin/BulletinProcess', 'teamelf/bulletin/BulletinFeedback'], function (_export, _context) {
  "use strict";

  var BulletinProcess, FeedbackTagUnread, FeedbackTagNoresponse, FeedbackTagConfirm, FeedbackTagRefuse, _createClass, _antd, Card, Divider, _class;

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
    setters: [function (_teamelfBulletinBulletinProcess) {
      BulletinProcess = _teamelfBulletinBulletinProcess.default;
    }, function (_teamelfBulletinBulletinFeedback) {
      FeedbackTagUnread = _teamelfBulletinBulletinFeedback.FeedbackTagUnread;
      FeedbackTagNoresponse = _teamelfBulletinBulletinFeedback.FeedbackTagNoresponse;
      FeedbackTagConfirm = _teamelfBulletinBulletinFeedback.FeedbackTagConfirm;
      FeedbackTagRefuse = _teamelfBulletinBulletinFeedback.FeedbackTagRefuse;
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
      Card = _antd.Card;
      Divider = _antd.Divider;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            var _this2 = this;

            return React.createElement(
              Card,
              {
                style: { marginBottom: 16 },
                title: this.props.title,
                extra: moment.unix(this.props.createdAt).format('YYYY-MM-DD'),
                hoverable: true,
                onClick: function onClick(e) {
                  return window.location.href = '/bulletin/' + _this2.props.id;
                }
              },
              React.createElement(
                'div',
                null,
                this.props.abstract
              ),
              React.createElement(Divider, null),
              React.createElement(BulletinProcess, { isDraft: this.props.isDraft }),
              React.createElement(Divider, null),
              React.createElement(
                'div',
                null,
                React.createElement(FeedbackTagUnread, { number: this.props.statistics.unread }),
                React.createElement(FeedbackTagNoresponse, { number: this.props.statistics.noresponse }),
                React.createElement(FeedbackTagConfirm, { number: this.props.statistics.confirm }),
                React.createElement(FeedbackTagRefuse, { number: this.props.statistics.refuse })
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
"use strict";

System.register("teamelf/bulletin/BulletinFeedback", [], function (_export, _context) {
  "use strict";

  var _slicedToArray, _createClass, _antd, Card, Table, Tag, Checkbox, FeedbackTagUnread, FeedbackTagNoresponse, FeedbackTagConfirm, FeedbackTagRefuse, _class;

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
      _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

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
      Card = _antd.Card;
      Table = _antd.Table;
      Tag = _antd.Tag;
      Checkbox = _antd.Checkbox;

      _export("FeedbackTagUnread", FeedbackTagUnread = function FeedbackTagUnread(props) {
        return React.createElement(
          Tag,
          null,
          props.number,
          "\u672A\u67E5\u9605"
        );
      });

      _export("FeedbackTagUnread", FeedbackTagUnread);

      _export("FeedbackTagNoresponse", FeedbackTagNoresponse = function FeedbackTagNoresponse(props) {
        return React.createElement(
          Tag,
          { color: "orange" },
          props.number,
          "\u5DF2\u8BFB"
        );
      });

      _export("FeedbackTagNoresponse", FeedbackTagNoresponse);

      _export("FeedbackTagConfirm", FeedbackTagConfirm = function FeedbackTagConfirm(props) {
        return React.createElement(
          Tag,
          { color: "green" },
          props.number,
          "\u786E\u8BA4"
        );
      });

      _export("FeedbackTagConfirm", FeedbackTagConfirm);

      _export("FeedbackTagRefuse", FeedbackTagRefuse = function FeedbackTagRefuse(props) {
        return React.createElement(
          Tag,
          { color: "red" },
          props.number,
          "\u62D2\u7EDD"
        );
      });

      _export("FeedbackTagRefuse", FeedbackTagRefuse);

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            filter: ['unread', 'noresponse', 'confirm', 'refuse']
          };
          return _this;
        }

        _createClass(_class, [{
          key: "getDataSource",
          value: function getDataSource() {
            var _this2 = this;

            var dataSource = [];
            var getStatus = function getStatus(feedback) {
              if (feedback.checked === true) {
                return ['confirm', React.createElement(FeedbackTagConfirm, null)];
              } else if (feedback.checked === false) {
                return ['refuse', React.createElement(FeedbackTagRefuse, null)];
              } else {
                if (feedback.updatedAt === null) {
                  return ['unread', React.createElement(FeedbackTagUnread, null)];
                } else {
                  return ['noresponse', React.createElement(FeedbackTagNoresponse, null)];
                }
              }
            };

            var _loop = function _loop(feedback) {
              var _getStatus = getStatus(feedback),
                  _getStatus2 = _slicedToArray(_getStatus, 2),
                  status = _getStatus2[0],
                  tag = _getStatus2[1];

              if (_this2.state.filter.find(function (o) {
                return o === status;
              })) {
                dataSource.push({
                  receiver: feedback.receiver.name,
                  status: tag,
                  remark: feedback.remark
                });
              }
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.props.feedbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var feedback = _step.value;

                _loop(feedback);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return dataSource;
          }
        }, {
          key: "render",
          value: function render() {
            var _this3 = this;

            var columns = [{ title: '接收人', dataIndex: 'receiver', key: 'receiver' }, { title: '状态', dataIndex: 'status', key: 'status' }, { title: '备注', dataIndex: 'remark', key: 'remark' }];
            var filterOptions = [{ label: React.createElement(FeedbackTagUnread, { number: this.props.statistics.unread }), value: 'unread' }, { label: React.createElement(FeedbackTagNoresponse, { number: this.props.statistics.noresponse }), value: 'noresponse' }, { label: React.createElement(FeedbackTagConfirm, { number: this.props.statistics.confirm }), value: 'confirm' }, { label: React.createElement(FeedbackTagRefuse, { number: this.props.statistics.refuse }), value: 'refuse' }];
            return React.createElement(
              Card,
              null,
              React.createElement(
                "div",
                { style: { marginBottom: 16 } },
                React.createElement(Checkbox.Group, {
                  options: filterOptions,
                  value: this.state.filter,
                  onChange: function onChange(e) {
                    return _this3.setState({ filter: e });
                  }
                })
              ),
              React.createElement(
                "div",
                { style: { margin: '0 -24px -24px' } },
                React.createElement(Table, {
                  columns: columns,
                  dataSource: this.getDataSource(),
                  pagination: false
                })
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export("default", _class);
    }
  };
});
'use strict';

System.register('teamelf/bulletin/BulletinItem', ['teamelf/layout/Page', 'teamelf/bulletin/BulletinProcess', 'teamelf/bulletin/BulletinPreview', 'teamelf/bulletin/BulletinFeedback'], function (_export, _context) {
  "use strict";

  var Page, BulletinProcess, BulletinPreview, BulletinFeedback, _createClass, _antd, Row, Col, Button, Input, Checkbox, TreeSelect, Icon, _class;

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
    }, function (_teamelfBulletinBulletinPreview) {
      BulletinPreview = _teamelfBulletinBulletinPreview.default;
    }, function (_teamelfBulletinBulletinFeedback) {
      BulletinFeedback = _teamelfBulletinBulletinFeedback.default;
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
            refreshing: false,
            autoRefresh: false,
            mentionList: [],
            bulletin: null,
            feedbacks: []
          };
          _this.fetchMentionList();
          _this.fetchBulletin();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchMentionList',
          value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var roles, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, member;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return axios.get('role');

                    case 2:
                      _context2.t0 = function (o) {
                        return {
                          label: o.name,
                          value: 'r_' + o.slug,
                          key: 'r_' + o.slug,
                          children: []
                        };
                      };

                      roles = _context2.sent.data.map(_context2.t0);

                      _loop = function _loop(member) {
                        var role = roles.find(function (o) {
                          return o.value === 'r_' + member.role.slug;
                        });
                        role.children.push({
                          label: member.name,
                          value: 'm_' + member.username,
                          key: 'm_' + member.username
                        });
                      };

                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      _context2.prev = 8;
                      _context2.next = 11;
                      return axios.get('member');

                    case 11:
                      _context2.t1 = Symbol.iterator;
                      _iterator = _context2.sent.data[_context2.t1]();

                    case 13:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context2.next = 19;
                        break;
                      }

                      member = _step.value;

                      _loop(member);

                    case 16:
                      _iteratorNormalCompletion = true;
                      _context2.next = 13;
                      break;

                    case 19:
                      _context2.next = 25;
                      break;

                    case 21:
                      _context2.prev = 21;
                      _context2.t2 = _context2['catch'](8);
                      _didIteratorError = true;
                      _iteratorError = _context2.t2;

                    case 25:
                      _context2.prev = 25;
                      _context2.prev = 26;

                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }

                    case 28:
                      _context2.prev = 28;

                      if (!_didIteratorError) {
                        _context2.next = 31;
                        break;
                      }

                      throw _iteratorError;

                    case 31:
                      return _context2.finish(28);

                    case 32:
                      return _context2.finish(25);

                    case 33:
                      this.setState({ mentionList: roles });
                      this.fetchFeedback();

                    case 35:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee, this, [[8, 21, 25, 33], [26,, 28, 32]]);
            }));

            function fetchMentionList() {
              return _ref.apply(this, arguments);
            }

            return fetchMentionList;
          }()
        }, {
          key: 'fetchBulletin',
          value: function fetchBulletin() {
            var _this2 = this;

            var id = this.props.match.params.id;
            return axios.get('bulletin/' + id).then(function (r) {
              _this2.setState({ bulletin: r.data });
              if (r.data.isDraft) {
                _this2.autoSave();
              } else {
                _this2.setState({ autoRefresh: true });
                _this2.autoRefreshFeedback();
              }
            });
          }
        }, {
          key: 'save',
          value: function save() {
            var _this3 = this;

            var data = {
              title: this.state.bulletin.title || '',
              content: this.state.bulletin.content || '',
              receivers: this.state.bulletin.receivers || []
            };
            var id = this.props.match.params.id;
            this.setState({ saving: true });
            return axios.put('bulletin/' + id, data).then(function (r) {
              _this3.setState({ saving: false, changed: false });
              _this3.fetchBulletin();
            }).catch(function (e) {
              _this3.setState({ saving: false });
            });
          }
        }, {
          key: 'publish',
          value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var id;
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      id = this.props.match.params.id;
                      _context3.next = 3;
                      return this.save();

                    case 3:
                      this.setState({ publishing: true });
                      return _context3.abrupt('return', axios.put('bulletin/' + id + '/publish').then(function (r) {
                        window.location.reload();
                      }).catch(function (e) {
                        _this4.setState({ publishing: false });
                      }));

                    case 5:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee2, this);
            }));

            function publish() {
              return _ref2.apply(this, arguments);
            }

            return publish;
          }()
        }, {
          key: 'del',
          value: function del() {
            var _this5 = this;

            antd.Modal.confirm({
              title: '不可恢复',
              content: '确定要删除么？该操作可能无法恢复',
              onOk: function onOk() {
                var id = _this5.props.match.params.id;
                _this5.setState({ deleting: true });
                return axios.delete('bulletin/' + id).then(function (r) {
                  _this5.setState({ deleting: false });
                  window.location.href = '/bulletin';
                }).catch(function (e) {
                  _this5.setState({ deleting: false });
                });
              }
            });
          }
        }, {
          key: 'autoSave',
          value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.state.changed && this.state.autoSave)) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 3;
                      return this.save();

                    case 3:
                      setTimeout(this.autoSave.bind(this), 60000);

                    case 4:
                    case 'end':
                      return _context4.stop();
                  }
                }
              }, _callee3, this);
            }));

            function autoSave() {
              return _ref3.apply(this, arguments);
            }

            return autoSave;
          }()
        }, {
          key: 'fetchFeedback',
          value: function fetchFeedback() {
            var _this6 = this;

            var id = this.props.match.params.id;
            this.setState({ refreshing: true });
            return axios.get('bulletin/' + id + '/feedback').then(function (r) {
              _this6.setState({ feedbacks: r.data });
              _this6.setState({ refreshing: false });
            }).catch(function (e) {
              _this6.setState({ refreshing: false });
            });
          }
        }, {
          key: 'autoRefreshFeedback',
          value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.state.autoRefresh) {
                        _context5.next = 3;
                        break;
                      }

                      _context5.next = 3;
                      return this.fetchFeedback();

                    case 3:
                      setTimeout(this.autoRefreshFeedback.bind(this), 60000);

                    case 4:
                    case 'end':
                      return _context5.stop();
                  }
                }
              }, _callee4, this);
            }));

            function autoRefreshFeedback() {
              return _ref4.apply(this, arguments);
            }

            return autoRefreshFeedback;
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
            var _this7 = this;

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
                  this.state.bulletin.isDraft && React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Checkbox,
                      {
                        checked: this.state.autoSave,
                        onChange: function onChange(e) {
                          return _this7.setState({ autoSave: e.target.checked });
                        }
                      },
                      this.state.autoSave && this.state.saving ? [React.createElement(Icon, { type: 'loading' }), ' 保存中...'] : '自动存草稿'
                    )
                  ),
                  !this.state.bulletin.isDraft && [React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Checkbox,
                      {
                        checked: this.state.autoRefresh,
                        onChange: function onChange(e) {
                          return _this7.setState({ autoRefresh: e.target.checked });
                        }
                      },
                      '\u81EA\u52A8\u5237\u65B0\u53CD\u9988'
                    )
                  ), React.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    React.createElement(
                      Button,
                      {
                        type: 'primary',
                        icon: 'reload',
                        onClick: this.fetchFeedback.bind(this),
                        loading: this.state.refreshing
                      },
                      '\u5237\u65B0\u53CD\u9988'
                    )
                  )],
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
          value: function handleBulletinChange(key, value) {
            var bulletin = this.state.bulletin;
            bulletin[key] = value;
            this.setState({ bulletin: bulletin, changed: true });
          }
        }, {
          key: 'renderEditor',
          value: function renderEditor() {
            var _this8 = this;

            return React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { style: { marginBottom: 16 } },
                React.createElement(Input, {
                  size: 'large',
                  value: this.state.bulletin.title,
                  onChange: function onChange(e) {
                    return _this8.handleBulletinChange('title', e.target.value);
                  }
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
                  treeData: this.state.mentionList,
                  value: this.state.bulletin.receivers,
                  onChange: function onChange(e) {
                    return _this8.handleBulletinChange('receivers', e);
                  },
                  allowClear: true
                })
              ),
              React.createElement(
                'div',
                { style: { marginBottom: 16 } },
                React.createElement(Input.TextArea, {
                  size: 'large',
                  autosize: { minRows: 10, maxRows: 30 },
                  value: this.state.bulletin.content,
                  onChange: function onChange(e) {
                    return _this8.handleBulletinChange('content', e.target.value);
                  }
                })
              )
            );
          }
        }, {
          key: 'view',
          value: function view() {
            if (this.state.bulletin) {
              return [React.createElement(BulletinProcess, { isDraft: this.state.bulletin.isDraft }), React.createElement(
                Row,
                { type: 'flex', gutter: 16 },
                this.state.bulletin.isDraft && React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  this.renderEditor()
                ),
                React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(BulletinPreview, this.state.bulletin)
                ),
                !this.state.bulletin.isDraft && React.createElement(
                  Col,
                  { xs: 24, md: 12 },
                  React.createElement(BulletinFeedback, {
                    statistics: this.state.bulletin.statistics,
                    feedbacks: this.state.feedbacks
                  })
                )
              )];
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

System.register('teamelf/bulletin/BulletinList', ['teamelf/layout/Page', 'teamelf/bulletin/BulletinCardItem'], function (_export, _context) {
  "use strict";

  var Page, BulletinCardItem, _createClass, _antd, Row, Col, Button, _class;

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
    }, function (_teamelfBulletinBulletinCardItem) {
      BulletinCardItem = _teamelfBulletinBulletinCardItem.default;
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

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            bulletins: []
          };
          _this.fetchBulletins();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchBulletins',
          value: function fetchBulletins() {
            var _this2 = this;

            axios.get('bulletin').then(function (r) {
              _this2.setState({ bulletins: r.data });
            });
          }
        }, {
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
            ), React.createElement(
              Button,
              {
                type: 'primary',
                onClick: this.createBulletin.bind(this)
              },
              '\u65B0\u5EFA\u516C\u544A'
            )];
          }
        }, {
          key: 'createBulletin',
          value: function createBulletin() {
            axios.post('bulletin').then(function (r) {
              window.location.href = '/bulletin/' + r.data.id;
            });
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { type: 'flex', gutter: 16 },
              this.state.bulletins.map(function (o) {
                return React.createElement(
                  Col,
                  { sm: 24, md: 12, lg: 8, xxl: 6 },
                  React.createElement(BulletinCardItem, o)
                );
              })
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
"use strict";

System.register("teamelf/bulletin/BulletinPreview", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Card, Divider, _class;

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
      Card = _antd.Card;
      Divider = _antd.Divider;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "render",
          value: function render() {
            return React.createElement(
              Card,
              null,
              React.createElement(
                "h2",
                null,
                this.props.title
              ),
              React.createElement(Divider, null),
              React.createElement(
                "div",
                null,
                this.props.content
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export("default", _class);
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