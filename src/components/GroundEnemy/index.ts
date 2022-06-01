import { Sprite } from 'pixi.js'

export class GroundEnemy extends Sprite {
  private enemy: Sprite;
  public bullet: Sprite;
  private enemyStartPositionY:number =  140;
  private enemyStartPositionX: number = 1.2;
  // private randomNumber: number = +(Math.random() * 4).toFixed(1)
  private pixelsPerFrame: number = 8;
  // private pixelsPerFrame: number = +(Math.random() * 4).toFixed(1)
  constructor() {
    super();
    this.enemy = Sprite.from('ground-enemy');
    this.bullet = Sprite.from('bullet');
    this.enemy.anchor.set(0.5);
    this.bullet.anchor.set(0.5);
    this.addChild(this.enemy);
    this.enemy.addChild(this.bullet);
  }

  onResize(width: number, height: number) {
    this.x = width * this.enemyStartPositionX
    this.y = height - this.height - this.enemyStartPositionY;
  }

  onUpdate(delta: number) {
    this.x -= delta * this.pixelsPerFrame;
  }

  fireBullet(delta:number) {
    this.bullet.y -= delta * 2;
    console.log(this.bullet)
  }
}

