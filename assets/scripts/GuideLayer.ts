
import { _decorator, Component, Node, UITransform, Vec3, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GuideLayer')
export class GuideLayer extends Component {

    @property(Node)
    maskNode: Node = null!;
    @property(Node)
    maskShade: Node = null!;
    @property(Label)
    dialogLabel: Label = null!;

    fire: boolean = false;//开始打字
    timer: number = 0.1;//打字间隔
    str: string[] = [];
    dt: number = 0;

    start() {
    }

    showNextGuide(node: Node, data: string) {
        this.dialogLabel.string = ``;
        if (node && node.isValid && node.parent) {
            let worldPos = node.parent.getComponent(UITransform)?.convertToWorldSpaceAR(node.position);
            if (worldPos) {
                let pos = this.node.getComponent(UITransform)?.convertToNodeSpaceAR(worldPos);
                if (pos) {
                    this.maskNode.position = pos;
                    this.maskShade.position = new Vec3(0, 0, 0).subtract(pos);
                    this.dialogLabel.node.position = new Vec3(pos.x-100, pos.y - 80, pos.z)
                }

            }
            this.typeDialog(data);
        }
    }

    typeDialog(str :string){
        this.str = str.split('');
        this.dt = 0;
        this.fire = true;
    }

    update (deltaTime: number) {
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
    }
}

