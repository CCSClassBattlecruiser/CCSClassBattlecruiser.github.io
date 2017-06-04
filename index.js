const PIXI = require('pixi.js');
import './src/index';

const renderer = new PIXI.WebGLRenderer(800, 600);
document.getElementById('app').appendChild(renderer.view);
const stage = new PIXI.Container();

const ModelNeptune = {
  "type":"Live2D Model Setting",
  "name":"neptune",
  "model":"assets/neptune/classic.moc",
  "textures":
  [
    "assets/neptune/classic.1024/neptune_texture_00.png",
    "assets/neptune/classic.1024/neptune_texture_01.png",
    "assets/neptune/classic.1024/neptune_texture_03.png"
  ],
  "physics":"assets/neptune/physics.json",
  "pose":"assets/neptune/classic.model.json",
  "expressions":
  [
    {"name":"f01","file":"assets/neptune/expressions/f01.exp.json"},
    {"name":"f02","file":"assets/neptune/expressions/f02.exp.json"},
    {"name":"f03","file":"assets/neptune/expressions/f03.exp.json"},
    {"name":"f04","file":"assets/neptune/expressions/f04.exp.json"},
    {"name":"f05","file":"assets/neptune/expressions/f05.exp.json"},
    {"name":"f06","file":"assets/neptune/expressions/f06.exp.json"},
    {"name":"f07","file":"assets/neptune/expressions/f07.exp.json"},
    {"name":"f08","file":"assets/neptune/expressions/f08.exp.json"}
  ],
  "layout":
  {
    "center_x": 0,
    "y": 1.2,
    "width": 2.9
  },
  "hit_areas":
  [
    {"name":"head", "id":"D_REF.HEAD"},
    {"name":"body", "id":"D_REF.BODY"}
  ],
  "motions":
  {
    "idle":
    [
      {"file":"assets/neptune/motions/idle/nep_idling_1.mtn" ,"fade_in":2000, "fade_out":2000},
      {"file":"assets/neptune/motions/idle/nep_idling_2.mtn" ,"fade_in":2000, "fade_out":2000},
      {"file":"assets/neptune/motions/idle/nep_idling_3.mtn" ,"fade_in":2000, "fade_out":2000}
    ],
    "tap_body":
    [
      { "file":"assets/neptune/motions/tap/nep_touch_belly_1.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_belly_1.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_belly_2.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_belly_2.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_belly_3.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_belly_3.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_boobs_1.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_boobs_1.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_boobs_2.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_boobs_2.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_boobs_3.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_boobs_3.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_classic.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_classic.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_head_1.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_head_1.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_head_2.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_head_2.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_head_3.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_head_3.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_head_4.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_head_4.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_other_3.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_other_1.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_other_3.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_other_2.mp3"},
      { "file":"assets/neptune/motions/tap/nep_touch_other_3.mtn" , "sound":"assets/neptune/motions/tap/nep_touch_other_3.mp3"},



    ],
    
    "shake":
    [
      { "file":"assets/neptune/motions/shake/nep_shake_1.mtn", "sound":"assets/neptune/motions/shake/nep_shake_1.mp3","fade_in":500 },
       { "file":"assets/neptune/motions/shake/nep_shake_2.mtn", "sound":"assets/neptune/motions/shake/nep_shake_2.mp3","fade_in":500 },
        { "file":"assets/neptune/motions/shake/nep_shake_3.mtn", "sound":"assets/neptune/motions/shake/nep_shake_3.mp3","fade_in":500 },
         { "file":"assets/neptune/motions/shake/neptune_base_kurakura01.mtn", "sound":"","fade_in":500 }
    ],
    "flick_head":
    [
      { "file":"assets/neptune/motions/flick/neptune_slide_boobs_1.mtn", "sound":"assets/neptune/motions/flick/neptune_slide_boobs_1.mp3" },
       { "file":"assets/neptune/motions/flick/neptune_slide_boobs_2.mtn", "sound":"assets/neptune/motions/flick/neptune_slide_boobs_2.mp3" },
        { "file":"assets/neptune/motions/flick/neptune_slide_boobs_3.mtn", "sound":"assets/neptune/motions/flick/neptune_slide_boobs_3.mp3" },
         { "file":"assets/neptune/motions/flick/neptune_slide_head_1.mtn", "sound":"assets/neptune/motions/flick/neptune_slide_head_1.mp3" },
         { "file":"assets/neptune/motions/flick/neptune_slide_head_2.mtn", "sound":"assets/neptune/motions/flick/neptune_slide_head_2.mp3" },
         { "file":"assets/neptune/motions/flick/neptune_slide_head_3.mtn", "sound":"assets/neptune/motions/flick/neptune_slide_head_3.mp3" }
    ]
  }
};



const sprite = new PIXI.Sprite.fromImage('./7_room2_a.jpg');
stage.addChild(sprite);

// setTimeout(() => {
//   const sprite2 = new PIXI.Sprite.fromImage('./pixiv4.jpg');
//   sprite2.y = 350;
//   stage.addChildAt(sprite2, 1);
// }, 1000)

const live2dSprite = new PIXI.Live2DSprite(ModelNeptune, {
  debugLog: false,
  randomMotion: false,
  eyeBlink: false,
  // audioPlayer: (...args) => console.log(...args)
});
stage.addChild(live2dSprite);

live2dSprite.x = -105;
// live2dSprite.y = -150;
live2dSprite.adjustScale(0,0,0.7);
live2dSprite.adjustTranslate(0.4, 0);
live2dSprite.startRandomMotion('idle');

live2dSprite.on('click', (evt) => {
  const point = evt.data.global;
  if (live2dSprite.hitTest('body', point.x, point.y)) {
    live2dSprite.startRandomMotionOnce('tap_body');
  }
  if (live2dSprite.hitTest('head', point.x, point.y)) {
    live2dSprite.playSound('星のカケラ.mp3', 'sound/');
  }
});
live2dSprite.on('mousemove', (evt) => {
  const point = evt.data.global;
  live2dSprite.setViewPoint(point.x, point.y);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
animate();
