import { Texture, TilingSprite } from "pixi.js";

export class Ground extends TilingSprite {
  public distance!: number;
  private velocity: number = 2;
  private tilePositionMultiplyer: number = 0.1;

  constructor() {
    const ground = Texture.from('ground');
    super(ground, 1, ground.height)
  }
  
  onResize(width: number, height: number) {
    this.width = width
    this.y = height - this.height
  }

  onUpdate(delta: number) {
    this.tilePosition.x -= delta * this.velocity;
    //TODO figure out better way to calculate distance
    this.distance = Math.abs(Math.ceil(this.tilePosition.x * this.tilePositionMultiplyer)); 
  }
}