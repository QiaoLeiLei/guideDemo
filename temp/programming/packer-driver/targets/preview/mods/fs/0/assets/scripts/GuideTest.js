System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./GuideLayer"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, log, GuideLayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GuideTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGuideLayer(extras) {
    _reporterNs.report("GuideLayer", "./GuideLayer", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      log = _cc.log;
    }, function (_GuideLayer) {
      GuideLayer = _GuideLayer.GuideLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "168cadDRqNKWqcnb5z5HHpL", "GuideTest", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GuideTest", GuideTest = (_dec = ccclass('GuideTest'), _dec2 = property(Node), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuideTest, _Component);

        function GuideTest() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "guideLayer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "btnList", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "guide", null);

          _defineProperty(_assertThisInitialized(_this), "guideIndex", 0);

          return _this;
        }

        var _proto = GuideTest.prototype;

        _proto.start = function start() {
          this.guide = this.guideLayer.getComponent(_crd && GuideLayer === void 0 ? (_reportPossibleCrUseOfGuideLayer({
            error: Error()
          }), GuideLayer) : GuideLayer);
          this.guideBtnByBtnIndex(this.guideIndex);
        };

        _proto.guideBtnByBtnIndex = function guideBtnByBtnIndex(index) {
          if (this.guide && this.btnList[index]) {
            this.guide.showNextGuide(this.btnList[index], "\u70B9\u51FB\u6309\u94AE" + index + "\u8FDB\u884C\u4E0B\u4E00\u6B65");
          } else {
            this.guideLayer.active = false;
          }
        };

        _proto.onbtnClick = function onbtnClick(event, customEventData) {
          if (event.currentTarget && event.target) {
            log("event : " + event.currentTarget.name + " " + event.target.name + " customEventData: " + customEventData);
          }

          this.guideIndex += 1;
          this.guideBtnByBtnIndex(this.guideIndex);
        };

        return GuideTest;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "guideLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GuideTest.js.map