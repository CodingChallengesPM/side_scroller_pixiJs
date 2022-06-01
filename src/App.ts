import { Application } from "pixi.js";
import { assets } from "./components/assets";
import { Ground } from "./components/Ground";
import { Clouds } from "./components/Clouds";
import { Player } from "./components/Player";
import { Score } from "./components/Score";
import { Enemy } from "./components/Enemy";
import { ShootingEnemy } from "./components/ShootingEnemy";
export class App extends Application {
  private score!: Score;
  private ground!: Ground;
  private clouds!: Clouds;
  private player!: Player;
  private enemies!: Enemy[];
  private shootingEnemies!: ShootingEnemy[];

  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x6495ed,
    });

    this.init();
    window.addEventListener('resize', this.onResize);
  }

  init() {
    this.loader.add(assets);
    this.loader.load(this.draw);
  }

  draw = () => {
    this.ground = new Ground();
    this.clouds = new Clouds();
    this.player = new Player();

    this.score = new Score();
    this.enemies = [
      new Enemy(window.innerWidth,window.innerHeight), 
      new Enemy(window.innerWidth,window.innerHeight), 
      new Enemy(window.innerWidth,window.innerHeight),
      new Enemy(window.innerWidth,window.innerHeight),
      new Enemy(window.innerWidth,window.innerHeight),
      new Enemy(window.innerWidth,window.innerHeight),
    ];
    this.shootingEnemies = [new ShootingEnemy(window.innerWidth,window.innerHeight)]

    this.stage.addChild(
      this.ground, 
      this.clouds, 
      this.player, 
      this.score, 
    );

    this.onResize();

    this.ticker.add(this.onUpdate);
    this.ticker.add(this.onCollision);
    this.ticker.add(this.enemyFactory);
    this.ticker.add(this.drawEnemies);
    this.ticker.add(this.fireBullet);
  }

  onUpdate = (delta: number) => {
    this.ground.onUpdate(delta)
    this.clouds.onUpdate(delta)
    this.score.onUpdate(this.ground.distance)
    this.enemies.forEach(element =>  element.onUpdate(delta))
    this.shootingEnemies.forEach(element =>  element.onUpdate(delta))
  }

  onResize = () => {
    this.renderer.resize(window.innerWidth, window.innerHeight)
    const width = this.renderer.width, height = this.renderer.height
    this.clouds.onResize(width)
    this.ground.onResize(width, height)
    this.player.onResize(width, height)
    this.enemies.forEach(element =>  element.onResize(width,height));
    this.shootingEnemies.forEach(element =>  element.onResize(width,height));
  }

  onCollision = () =>{
    this.enemies.forEach(enemy => this.player.onCollision(enemy));    
    this.shootingEnemies.forEach(enemy => this.player.onCollision(enemy.bullet));    
    this.shootingEnemies.forEach(enemy => this.player.onCollision(enemy.enemy));    
  }

  enemyFactory = () => {
    //TODO: Refactor to helper function or method to remove dublication
    for(let i = 0; i < this.enemies.length; i ++) {
      if(this.enemies[i].x < 0) {
        this.enemies[i].destroy();
        this.enemies.splice(i,1);
        this.enemies.push(new Enemy(window.innerWidth,window.innerHeight));
      }
    }

    for(let i = 0; i < this.shootingEnemies.length; i ++) {
      if(this.shootingEnemies[i].x < 0) {
        this.shootingEnemies[i].destroy();
        this.shootingEnemies.splice(i,1);
        this.shootingEnemies.push(new ShootingEnemy(window.innerWidth, window.innerHeight));
      }
    }
  }

  drawEnemies = ()=> {
    this.enemies.forEach(enemy => this.stage.addChild(enemy));
    this.shootingEnemies.forEach(enemy => this.stage.addChild(enemy));
  }

  fireBullet = (delta:number) => {
   this.shootingEnemies.forEach(enemy => {
    setTimeout(()=>{
      enemy.fireBullet(delta)
    }, enemy.bulletWaitTime)
    });    
  }

}