import { Sprite } from 'pixi.js'

export class Player extends Sprite {
  private player: Sprite;
  constructor() {
    super();
    this.player = Sprite.from('plane');
    this.player.anchor.set(0.5);
    this.addChild(this.player);
    //TODO: create separate classs for keyboard events
    // basic controls 
    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowUp") {
        this.player.y -= 5;
      }
      if (e.key === "ArrowDown") {
        this.player.y += 5;
      }
    })
  }

  onResize(width: number, height: number) {
    this.x = width * 0.2
    this.y = height * 0.5
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


