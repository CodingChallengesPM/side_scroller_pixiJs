import { Text } from "pixi.js";
//TODO: add BitmapText for rendering score.
export class Score extends Text {
  constructor(text:string) {
    super(text, {
      fontSize: 35,
      align: "right",
    })
  }
}