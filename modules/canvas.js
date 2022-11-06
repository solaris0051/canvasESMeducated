// preparing canvas.
class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    if (this.ctx !== null) {
      return;
    } else {
      const canvasElem = document.getElementById("canvas0");
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}

class SubCanvas extends Canvas {
  super(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    if (this.ctx !== null) {
      return;
    } else {
      const canvasElem = document.getElementById("canvas1");
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}
// exporing.
export { Canvas, SubCanvas };
