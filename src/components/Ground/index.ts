import { Texture, TilingSprite } from "pixi.js";

export class Ground extends TilingSprite {
  public distance!: number;
  constructor() {
    const ground = Texture.from('ground');
    super(ground, 1, ground.height)
  }
  
  onResize(width: number, height: number) {
    this.width = width
    this.y = height - this.height
  }

  onUpdate(delta: number) {
    this.tilePosition.x -= delta * 2;
    this.distance = Math.abs(Math.ceil(this.tilePosition.x * 0.1)); 

  }
}