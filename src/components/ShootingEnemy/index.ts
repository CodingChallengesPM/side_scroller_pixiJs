import { Sprite } from 'pixi.js';
import {Enemy} from '../Enemy'

export class ShootingEnemy extends Enemy {
  public bullet: Sprite;

  constructor(screenWidth: number, screenHeight: number) {
    super(screenWidth, screenHeight);
    this.enemy = Sprite.from('ground-enemy');
    this.bullet = Sprite.from('bullet');
    this.enemy.anchor.set(0.5);
    this.bullet.anchor.set(0.5);
    this.enemyStartPositionY = 140;
    this.enemyStartPositionX = 1.2;
    this.pixelsPerFrame = 8;
    this.addChild(this.enemy);
    this.enemy.addChild(this.bullet);
    this.x = screenWidth * this.enemyStartPositionX
    this.y = screenHeight - this.height - this.enemyStartPositionY;
  }

  override onResize = (width: number, height: number) => {
    this.x = width * this.enemyStartPositionX
    this.y = height - this.height - this.enemyStartPositionY;
  }

  override onUpdate = (delta: number) => {
    this.x -= delta * this.pixelsPerFrame;
  }

  fireBullet = (delta:number) => {
    this.bullet.y -= delta * 2;
    console.log(this.bullet)
  }
}

