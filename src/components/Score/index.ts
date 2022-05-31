import { Text, TextStyle } from "pixi.js";
//TODO: add BitmapText for rendering score.
export class Score extends Text {
  constructor() {
    super('', {
      fontSize: 35,
      align: "right",
    })
    this.style = new TextStyle({
      fill: 0x150907 
    })
  }

  onUpdate(distance:number) {
    this.text = `Score: ${distance}`;
  }
}