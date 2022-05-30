import { 
  Application, 
  Renderer, 
  BatchRenderer, 
  TilingSpriteRenderer,
  AppLoaderPlugin
} from "pixi.js";

Renderer.registerPlugin('batch', BatchRenderer)
Renderer.registerPlugin('tilingSprite', TilingSpriteRenderer)
Application.registerPlugin(AppLoaderPlugin);

import { App } from "./App";

new App();