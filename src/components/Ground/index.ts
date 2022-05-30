import { Sprite } from "pixi.js";

export class Ground extends Sprite {
  private ground: Sprite;
  private readonly screenWidth: number;
  private readonly screenHeight: number;
  constructor(screenWidth: number, screenHeight:number) {
    super()
    this.screenWidth = screenWidth
    this.screenHeight = screenHeight

    this.ground = Sprite.from('./assets/sprites/env/ground.png');
    this.ground.anchor.set(0.5);
    
    this.ground.x = this.screenWidth / 2;
    this.ground.y = this.screenHeight / 2;
    
    this.addChild(this.ground);
  }
}