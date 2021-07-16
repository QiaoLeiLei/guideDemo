System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./GuideLayer"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, log, GuideLayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GuideTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuideTest", GuideTest = (_dec = ccclass('GuideTest'), _dec2 = property(Node), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class GuideTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "guideLayer", _descriptor, this);

          _initializerDefineProperty(this, "btnList", _descriptor2, this);

          _defineProperty(this, "guide", null);

          _defineProperty(this, "guideIndex", 0);
        }

        start() {
          this.guide = this.guideLayer.getComponent(_crd && GuideLayer === void 0 ? (_reportPossibleCrUseOfGuideLayer({
            error: Error()
          }), GuideLayer) : GuideLayer);
          this.guideBtnByBtnIndex(this.guideIndex);
        }

        guideBtnByBtnIndex(index) {
          if (this.guide && this.btnList[index]) {
            this.guide.showNextGuide(this.btnList[index], `点击按钮${index}进行下一步`);
          } else {
            this.guideLayer.active = false;
          }
        }

        onbtnClick(event, customEventData) {
          if (event.currentTarget && event.target) {
            log(`event : ${event.currentTarget.name} ${event.target.name} customEventData: ${customEventData}`);
          }

          this.guideIndex += 1;
          this.guideBtnByBtnIndex(this.guideIndex);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "guideLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GuideTest.js.map