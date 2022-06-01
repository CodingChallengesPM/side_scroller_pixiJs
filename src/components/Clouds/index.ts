import {TilingSprite, Texture} from 'pixi.js'

export class Clouds extends TilingSprite {
  private velocity: number = 4;
  constructor() {
    const clouds = Texture.from('clouds')
    super(clouds, 1, clouds.height)
  }

  onResize(width:number) {
    this.width = width
  }

  onUpdate(delta:number) {
    this.tilePosition.x -= delta * this.velocity;
  }
}