// static import
//object of color palette
import COLORS from "./modules/COLORS.js";
//Classes of Canvases
import { Canvas } from "./modules/canvas.js";
const btn = [
  document.querySelector(".square"),
  document.querySelector(".circle"),
  document.querySelector(".triangle"),
  document.querySelector(".action"),
  document.querySelector(".splitter"),
  document.querySelector(".canvas_speeder"),
  document.querySelector(".clear_canvas1_4"),
  document.querySelector(".clear_canvas5"),
  document.querySelector(".relo"),
];

// length of an edge of a canvas
const edge_of_canvas = 256;

// storing ID of canvases
const canvasID = ["canvas1", "canvas2", "canvas3", "canvas4", "canvas5",]

// create canvases
const canv = [
  new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`, canvasID[0]),
  new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`, canvasID[1]),
  new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`, canvasID[2]),
  new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`, canvasID[3]),
  new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`, canvasID[4]),
];

for (let i = 0; i < canv.length; i++) {
  canv[i].create();
}

// dynamic import(drawing squares on the canvas)
btn[0].addEventListener(
  "click",
  () => {
    import("./modules/square.js").then((Module) => {
      const square = [
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 8),
          0,
          0,
          COLORS.purple
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 6.4),
          Math.floor(canv[0].width / 8),
          Math.floor(canv[0].width / 8),
          COLORS.yellow
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 5.128),
          Math.floor(canv[0].width / 3.555),
          Math.floor(canv[0].width / 3.555),
          COLORS.purple
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 4.102),
          Math.floor(canv[0].width / 2.099),
          Math.floor(canv[0].width / 2.099),
          COLORS.yellow
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 3.587),
          Math.floor(canv[0].width / 1.388),
          Math.floor(canv[0].width / 1.388),
          COLORS.purple
        ),
      ];
      for (let i = 0; i < square.length; i++) {
        square[i].draw();
      }
    });
  },
  false
);

// dynamic import(drawing circles on the canvas)
btn[1].addEventListener(
  "click",
  () => {
    import("./modules/circle.js").then((Module) => {
      // greenBlue
      const circle = [
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 4),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.333),
          COLORS.green
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 4.923),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.254),
          COLORS.blue
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 6.4),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.185),
          COLORS.green
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 9.142),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.122),
          COLORS.blue
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 16),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.066),
          COLORS.green
        ),
        //redPurple
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 4),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.333),
          COLORS.red
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 4.923),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.254),
          COLORS.purple
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 6.4),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.185),
          COLORS.red
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 9.142),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.122),
          COLORS.purple
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 16),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.066),
          COLORS.red
        ),
      ];
      for (let i = 0; i < circle.length; i++) {
        circle[i].draw();
      }
    });
  },
  false
);

// dynamic import(drawing triangles on the canvas)
btn[2].addEventListener(
  "click",
  () => {
    import("./modules/triangle.js").then((Module) => {
      const triangle = [
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.164),
          0,
          COLORS.red
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.393),
          0,
          COLORS.red
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.735),
          0,
          COLORS.red
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.268),
          Math.floor(canv[3].width / 8.107),
          COLORS.orange
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.545),
          Math.floor(canv[3].width / 8.107),
          COLORS.orange
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.393),
          Math.floor(canv[3].width / 4.085),
          COLORS.red
        ),
      ];
      for (let i = 0; i < triangle.length; i++) {
        triangle[i].draw();
      }
    });
  },
  false
);

// just another tweak: animation to make a ball bouncing, accelerating, and slowing down to stop.
btn[3].addEventListener(
  "click",
  () => {
    import("./modules/CanvasAnim.js").then((Module) => {
      Module.CanvasAnim();
    });
  },
  false
);

// splitting_gathering_canvases
btn[4].addEventListener(
  "click",
  () => {
    for (let i = 0; i < canvasID.length; i++) {
      document.getElementById(canvasID[i]).classList.toggle(`canvas${i + 1}`);
      document.getElementById(canvasID[i]).classList.toggle(`canvas0${i + 1}`);
    }
  },
  false
);

//spinnig_hight_speed
btn[5].addEventListener(
  "click",
  () => {
    for (let i = 0; i < canvasID.length; i++) {
      document.getElementById(canvasID[i]).classList.toggle("speeder");
    }
  },
  false
);

// clear_canvas1_4
btn[6].addEventListener(
  "click",
  () => {
    for (let i = 0; i < canvasID.length - 1; i++) {
      document
        .getElementById(canvasID[i])
        .getContext("2d")
        .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
    }
  },
  false
);

// clear_canvas5
btn[7].addEventListener(
  "click",
  () => {
    document
      .getElementById(canvasID[4])
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
  },
  false
);

//reloading
btn[8].addEventListener("click", () => location.reload(), false);
