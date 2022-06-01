import { Sprite } from 'pixi.js'

export class Player extends Sprite {
  private player: Sprite;
  private speedUp:number = 6;
  private speedDown:number = 6;
  private spriteAnchor:number = 0.5;
  private playerPositionX:number = 0.2;
  private playerPositionY:number = 0.5;

  constructor() {
    super();
    this.player = Sprite.from('plane');
    this.player.anchor.set(this.spriteAnchor);
    this.addChild(this.player);
    //TODO: create separate classs for keyboard events
    // basic controls 
    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowUp") {
        this.player.y -= this.speedUp;
      }
      if (e.key === "ArrowDown") {
        this.player.y += this.speedDown;
      }
    })
  }

  onResize(width: number, height: number) {
    this.x = width * this.playerPositionX
    this.y = height * this.playerPositionY
  }

  onCollision(object: Sprite) {
    let playerObject = this.player.getBounds();
    let enemyObject = object.getBounds();

    if (playerObject.x + playerObject.width > enemyObject.x &&
      playerObject.x < enemyObject.x + enemyObject.width &&
      playerObject.y + playerObject.height > enemyObject.y &&
      playerObject.y < enemyObject.y + enemyObject.height
    ) { 
        this.destroy()
        document.location.reload()
       }
  }
}


