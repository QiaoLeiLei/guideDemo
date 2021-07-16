
import { _decorator, Component, Node, log, EventTouch } from 'cc';
import { GuideLayer } from './GuideLayer';
const { ccclass, property } = _decorator;

@ccclass('GuideTest')
export class GuideTest extends Component {
    @property(Node)
    guideLayer: Node = null!;
    @property([Node])
    btnList: Node[] = [];

    guide: GuideLayer | null = null;
    guideIndex: number = 0;

    start () {
        this.guide = this.guideLayer.getComponent(GuideLayer);
        this.guideBtnByBtnIndex(this.guideIndex);
    }

    guideBtnByBtnIndex(index: number) {
        if (this.guide && this.btnList[index]) {
            this.guide.showNextGuide(this.btnList[index],`点击按钮${index}进行下一步`);
        } else {
            this.guideLayer.active = false;
        }
    }

    public onbtnClick (event: EventTouch, customEventData: string) {
        if (event.currentTarget && event.target) {
            log(`event : ${event.currentTarget.name} ${event.target.name} customEventData: ${customEventData}`);
        }
        this.guideIndex += 1;
        this.guideBtnByBtnIndex(this.guideIndex);
    }

}
