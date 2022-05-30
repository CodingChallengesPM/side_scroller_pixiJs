import { Texture, TilingSprite } from "pixi.js";

export class Ground extends TilingSprite {
  constructor() {
    const ground =  Texture.from('ground');
    super(ground,1, ground.height)
  }
  onResize(width:number, height: number) {
    this.width = width
    this.y = height - this.height
  }
  onUpdate(delta: number) {
    this.tilePosition.x -=delta * 2;
  }
}