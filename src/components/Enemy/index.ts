import {Sprite} from 'pixi.js'

export class Enemy extends Sprite {
  private enemy: Sprite;
  constructor() {
    super();
    this.enemy = Sprite.from('enemy');
    this.enemy.anchor.set(0.5);
    this.addChild(this.enemy);
  }

  onResize(width: number, height: number) {
    this.x = width * 0.63
    this.y = height * 0.5
  }
}

