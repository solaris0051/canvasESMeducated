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
      const canvasElem = document.getElementById("canvas1");
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}

class AltCanvas extends Canvas {
  super(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    if (this.ctx !== null) {
      return;
    } else {
      const canvasElem = document.getElementById("canvas2");
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
      const canvasElem = document.getElementById("canvas3");
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}

class YetCanvas extends Canvas {
  super(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    if (this.ctx !== null) {
      return;
    } else {
      const canvasElem = document.getElementById("canvas4");
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}

class YetAnotherCanvas extends Canvas {
  super(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    if (this.ctx !== null) {
      return;
    } else {
      const canvasElem = document.getElementById("canvas5");
      canvasElem.width = this.width;
      canvasElem.height = this.height;
      this.ctx = canvasElem.getContext("2d");
    }
  }
}

// exporting.,
export { Canvas, AltCanvas, SubCanvas, YetCanvas, YetAnotherCanvas };
