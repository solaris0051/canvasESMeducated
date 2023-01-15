// static import
//object of color palette
import colors from "./modules/defColors.js";
//Classes of Canvases
import {
  Canvas,
  AltCanvas,
  SubCanvas,
  YetCanvas,
  YetAnotherCanvas,
} from "./modules/canvas.js";
const btn = [
  document.querySelector(".square"),
  document.querySelector(".circle"),
  document.querySelector(".triangle"),
  document.querySelector(".action"),
  document.querySelector(".clear_canvas1_4"),
  document.querySelector(".clear_canvas5"),
  document.querySelector(".splitter"),
  document.querySelector(".relo"),
];

// length of an edge of a canvas
const edge_of_canvas = 256;

// storing ID of canvases
const canvasID = ["canvas1", "canvas2", "canvas3", "canvas4", "canvas5",]

// create canvases
const canv = [
  new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`),
  new AltCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`),
  new SubCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`),
  new YetCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`),
  new YetAnotherCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`),
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
          colors.purple
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 6.4),
          Math.floor(canv[0].width / 8),
          Math.floor(canv[0].width / 8),
          colors.yellow
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 5.128),
          Math.floor(canv[0].width / 3.555),
          Math.floor(canv[0].width / 3.555),
          colors.purple
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 4.102),
          Math.floor(canv[0].width / 2.099),
          Math.floor(canv[0].width / 2.099),
          colors.yellow
        ),
        new Module.Square(
          canv[0].ctx,
          Math.floor(canv[0].width / 3.587),
          Math.floor(canv[0].width / 1.388),
          Math.floor(canv[0].width / 1.388),
          colors.purple
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
          colors.green
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 4.923),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.254),
          colors.blue
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 6.4),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.185),
          colors.green
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 9.142),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.122),
          colors.blue
        ),
        new Module.Circle(
          canv[1].ctx,
          Math.floor(canv[1].width / 16),
          Math.floor(canv[1].width / 2),
          Math.floor(canv[1].width / 1.066),
          colors.green
        ),
        //redPurple
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 4),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.333),
          colors.red
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 4.923),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.254),
          colors.purple
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 6.4),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.185),
          colors.red
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 9.142),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.122),
          colors.purple
        ),
        new Module.Circle(
          canv[2].ctx,
          Math.floor(canv[2].width / 16),
          Math.floor(canv[2].width / 1.33),
          Math.floor(canv[2].width / 1.066),
          colors.red
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
          colors.red
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.393),
          0,
          colors.red
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.735),
          0,
          colors.red
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.268),
          Math.floor(canv[3].width / 8.107),
          colors.orange
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.545),
          Math.floor(canv[3].width / 8.107),
          colors.orange
        ),
        new Module.Triangle(
          canv[3].ctx,
          Math.floor(canv[3].width / 7.079),
          Math.floor(canv[3].width / 1.393),
          Math.floor(canv[3].width / 4.085),
          colors.red
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

// clear_canvas1_4
btn[4].addEventListener(
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
btn[5].addEventListener(
  "click",
  () => {
    document
      .getElementById(canvasID[4])
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
  },
  false
);

// splitting_gathering_canvases
btn[6].addEventListener(
  "click",
  () => {
    for (let i = 0; i < canvasID.length; i++) {
      document.getElementById(canvasID[i]).classList.toggle("canvas");
    }
  },
  false
);

//reloading
btn[7].addEventListener("click", () => location.reload(), false);
