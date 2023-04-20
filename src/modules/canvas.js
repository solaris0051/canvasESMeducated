// preparing canvas.
class Canvas {
  constructor(width, height, id) {
    this.width = width;
    this.height = height;
    this.id = id;
    this.ctx = null;
  }

  create() {
    if (this.ctx !== null) {
      return;
    } else {
      const canvasElem = document.getElementById(this.id);
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}
export { Canvas };
