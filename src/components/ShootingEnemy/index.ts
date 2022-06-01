import { Sprite } from 'pixi.js';
import {Enemy} from '../Enemy'

export class ShootingEnemy extends Enemy {
  public bullet: Sprite;
  public bulletWaitTime: number = Math.floor(Math.random() * 3) * 1000;
  private startPositionX: number =  140;
  private startPositionY: number =  1.2;
  private shootingEnemyVelocity = 8;
  private bulletVelocity = 2;

  constructor(screenWidth: number, screenHeight: number) {
    super(screenWidth, screenHeight);

    this.enemy = Sprite.from('shooting-enemy');
    this.bullet = Sprite.from('bullet');

    this.enemy.anchor.set(this.spriteAnchorPoint);
    this.bullet.anchor.set(this.spriteAnchorPoint);

    this.enemyStartPositionY = this.startPositionX;
    this.enemyStartPositionX = this.startPositionY;

    this.velocity = this.shootingEnemyVelocity;

    this.addChild(this.enemy);
    this.addChild(this.bullet);

    this.x = screenWidth * this.enemyStartPositionX;
    this.y = screenHeight - this.height - this.enemyStartPositionY;
  }

  override onResize = (width: number, height: number) => {
    this.x = width * this.enemyStartPositionX;
    this.y = height - this.height - this.enemyStartPositionY;
  }

  override onUpdate = (delta: number) => {
    this.x -= delta * this.velocity;
  }

  fireBullet = (delta:number) => {
    this.bullet.y -= delta * this.bulletVelocity;
  }
}

