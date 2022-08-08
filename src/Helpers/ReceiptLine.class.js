/** @format */

class ReceiptLine {
  constructor() {
    this.font = "A";
    this.size = 0;
    this.bold = false;
    this.inverse = false;
    this.underline = false;
    this.text = "";
    this.linefeed = false;
    this.draw = false;
    this.align = "LEFT";
    this.cut = false;
    this.send = false;
  }
}

class ReceiptLineBuilder {
  constructor() {
    this.currentLine = new ReceiptLine();
    this.data = [];
  }

  setFont = (font) => {
    this.currentLine.font = font;
    return this;
  };
  setSize = (size) => {
    this.currentLine.size = size;
    return this;
  };
  setBold = (bold) => {
    this.currentLine.bold = bold;
    return this;
  };
  setInverse = (inverse) => {
    this.currentLine.inverse = inverse;
    return this;
  };
  setUnderline = (underline) => {
    this.currentLine.underline = underline;
    return this;
  };
  setText = (text) => {
    this.currentLine.text = text;
    return this;
  };
  setLinefeed = (feed) => {
    this.currentLine.linefeed = feed;
    return this;
  };
  setDraw = (openDraw) => {
    this.currentLine.openDraw = openDraw;
    return this;
  };
  setAlign = (align) => {
    this.currentLine.align = align;
    return this;
  };
  setCut = (cut) => {
    this.currentLine.cut = cut;
    return this;
  };
  setSend = (send) => {
    this.currentLine.send = send;
    return this;
  };

  nextLine = () => {
    this.data.push(this.currentLine);
    this.currentLine = new ReceiptLine();
    return this;
  };

  finished = () => {
    this.nextLine();
    return this;
  };

  getData = () => {
    return this.data;
  };
}

export default ReceiptLineBuilder;
