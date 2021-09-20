class BannerConstructor {
  constructor(parrentClass) {
    this.parrentClass = parrentClass;

    this.init();
  }

  init() {
    this.createHTMLElement();
  }

  createHTMLElement() {
    const element = document.createElement("div");
    this.addStylesForHTMLElement(element);
  }

  addStylesForHTMLElement(element) {
    element.style.width = "400px";
    element.style.height = "600px";
    element.style.position = "fixed";
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.transform = "translate(-50%, -50%)";
    element.style.background = "black";
    element.style.color = "white";

    this.putContentInsideHTMLElement(element);
  }

  putContentInsideHTMLElement(element) {
    element.innerHTML = "hello dear human";

    this.attachEllementInToTheDOM(element);
  }

  attachEllementInToTheDOM(element) {
    this.parrentClass.appendChild(element);
  }
}

const element = document.querySelector(".page-wrapper");

// new BannerConstructor(element);
