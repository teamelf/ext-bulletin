"use strict";

System.register("teamelf/bulletin/Bulletin", [], function (_export, _context) {
  "use strict";

  var _createClass, _class;

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
              "div",
              null,
              "Bulletin"
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

System.register('teamelf/bulletin/main', ['teamelf/bulletin/Bulletin'], function (_export, _context) {
  "use strict";

  var Bulletin, target;
  return {
    setters: [function (_teamelfBulletinBulletin) {
      Bulletin = _teamelfBulletinBulletin.default;
    }],
    execute: function () {
      target = document.getElementById('react-render-target-bulletin');

      if (target) {
        ReactDOM.render(React.createElement(Bulletin, null), target);
      }
    }
  };
});