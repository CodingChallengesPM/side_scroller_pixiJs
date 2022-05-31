import { Sprite } from 'pixi.js'

export class Enemy extends Sprite {
  private enemy: Sprite;
  private enemyStartPositionY: number = +(Math.random() * 0.4).toFixed(1);
  private enemyStartPositionX: number = 1.2;
  private pixelsPerFrame: number = +(Math.random() * 4).toFixed(1)
  constructor() {
    super();
    this.enemy = Sprite.from('enemy');
    this.enemy.anchor.set(0.5);
    this.addChild(this.enemy);
  }

  onResize(width: number, height: number) {
    this.x = width * this.enemyStartPositionX
    this.y = height * this.enemyStartPositionY
  }

  onUpdate(delta: number) {
    this.x -= delta * this.pixelsPerFrame;
  }

}

