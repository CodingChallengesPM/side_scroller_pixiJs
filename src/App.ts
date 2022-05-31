import { Application } from "pixi.js";
import { assets } from "./components/assets";
import { Ground } from "./components/Ground";
import { Clouds } from "./components/Clouds";
import { Player } from "./components/Player";
import { Score } from "./components/Score";
import { Enemy } from "./components/Enemy";
export class App extends Application {
  private score!: Score;
  private ground!: Ground;
  private clouds!: Clouds;
  private player!: Player;
  private enemy!: Enemy;

  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x6495ed,
    })

    this.init();  
    window.addEventListener('resize', this.onResize.bind(this))
  }

  init() {
    this.loader.add(assets);
    this.loader.load(this.draw.bind(this));
  }

  draw() {
    this.ground = new Ground();
    this.clouds = new Clouds();
    this.player = new Player();
    this.enemy = new Enemy();  
    this.score = new Score();  

    this.stage.addChild( this.ground, this.clouds, this.player, this.score, this.enemy);
    this.onResize()
    this.ticker.add(this.onUpdate.bind(this))
  }

  onUpdate(delta: number) {
    this.ground.onUpdate(delta)
    this.clouds.onUpdate(delta)
    this.score.onUpdate(this.ground.distance)
    console.log(this.ground.x)
  }

  onResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight)
    const width = this.renderer.width, height = this.renderer.height
    this.clouds.onResize(width)
    this.ground.onResize(width, height)
    this.player.onResize(width, height)
    this.enemy.onResize(width, height)
  }
}