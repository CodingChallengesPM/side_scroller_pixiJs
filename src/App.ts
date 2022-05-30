import { Application } from "pixi.js";
import { Ground } from "./components/Ground";

export class App extends Application {
  private ground: Ground;
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x6495ed,
    })
    this.ground = new Ground(this.screen.width, this.screen.height)
  }

  draw() {
    this.stage.addChild(this.ground);
  }
}