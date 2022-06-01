import { Sprite } from 'pixi.js'

export class Enemy extends Sprite {
  public enemy: Sprite;
  public  screenWidth: number;
  public  screenHeight: number;
  public enemyStartPositionY: number = +(Math.random() * 0.6).toFixed(1);
  public spriteAnchorPoint = 0.5;
  public enemyStartPositionX: number = 1.2;
  public velocity: number = +(Math.random() * 4).toFixed(1);

  constructor(screenWidth: number, screenHeight: number) {
    super();
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.enemy = Sprite.from('enemy');
    this.enemy.anchor.set(this.spriteAnchorPoint);
    this.addChild(this.enemy);

    this.x = this.screenWidth * this.enemyStartPositionX;
    this.y = this.screenHeight * this.enemyStartPositionY;
  }

  onResize = (width: number, height: number)=> {
    this.x = width * this.enemyStartPositionX;
    this.y = height * this.enemyStartPositionY;
  }

  onUpdate = (delta: number) => {
    this.x -= delta * this.velocity;
  }

}

