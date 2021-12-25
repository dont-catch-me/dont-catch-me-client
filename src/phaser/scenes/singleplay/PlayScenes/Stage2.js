import Stage from "./Stage";
import { LEVEL_2 } from "../../../../constants/coordinates";

export default class Stage2 extends Stage {
  constructor() {
    super("stage2");
  }

  create() {
    this.setBackground(2);

    this.setCharacters(LEVEL_2);

    super.create();
  }

  update() {
    super.update();

    const callback = () => this.scene.start("stage3");

    if (this.coinCount === 0 && !this.isCleared) {
      this.moveNextStage(callback);

      this.isCleared = true;
    }
  }
}
