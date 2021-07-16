System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, UITransform, Vec3, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GuideLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79db9xePGJLWY73jQoduzZu", "GuideLayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GuideLayer", GuideLayer = (_dec = ccclass('GuideLayer'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GuideLayer, _Component);

        function GuideLayer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "maskNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "maskShade", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "dialogLabel", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "fire", false);

          _defineProperty(_assertThisInitialized(_this), "timer", 0.1);

          _defineProperty(_assertThisInitialized(_this), "str", []);

          _defineProperty(_assertThisInitialized(_this), "dt", 0);

          return _this;
        }

        var _proto = GuideLayer.prototype;

        _proto.start = function start() {};

        _proto.showNextGuide = function showNextGuide(node, data) {
          this.dialogLabel.string = "";

          if (node && node.isValid && node.parent) {
            var _node$parent$getCompo;

            var worldPos = (_node$parent$getCompo = node.parent.getComponent(UITransform)) === null || _node$parent$getCompo === void 0 ? void 0 : _node$parent$getCompo.convertToWorldSpaceAR(node.position);

            if (worldPos) {
              var _this$node$getCompone;

              var pos = (_this$node$getCompone = this.node.getComponent(UITransform)) === null || _this$node$getCompone === void 0 ? void 0 : _this$node$getCompone.convertToNodeSpaceAR(worldPos);

              if (pos) {
                this.maskNode.position = pos;
                this.maskShade.position = new Vec3(0, 0, 0).subtract(pos);
                this.dialogLabel.node.position = new Vec3(pos.x - 100, pos.y - 80, pos.z);
              }
            }

            this.typeDialog(data);
          }
        };

        _proto.typeDialog = function typeDialog(str) {
          this.str = str.split('');
          this.dt = 0;
          this.fire = true;
        };

        _proto.update = function update(deltaTime) {
          if (!this.fire || deltaTime > 0.5) {
            return;
          }

          if (!this.str.length) {
            this.fire = false;
            return;
          }

          this.dt += deltaTime;

          if (this.dt >= this.timer) {
            this.dt = 0;
            this.dialogLabel.string += this.str.shift();
          }
        };

        return GuideLayer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskShade", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dialogLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GuideLayer.js.map