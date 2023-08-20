export class CustomElement<T extends keyof HTMLElementTagNameMap> {
  private element: HTMLElement;

  constructor(tagName: T) {
    this.element = document.createElement(tagName);
    this.setDefaultStyles();
  }

  private setDefaultStyles(): void {
    const elementStyle = this.element.style;
    elementStyle.padding = "1rem";
    elementStyle.display = "flex";
    elementStyle.flexDirection = "column";
    elementStyle.justifyContent = "center";
    elementStyle.position = "fixed";
    elementStyle.top = "50px";
    elementStyle.right = "50px";
    elementStyle.borderRadius = "0.5rem";
    elementStyle.background = "white";
    elementStyle.zIndex = "99999";
    elementStyle.boxShadow =
      "2px 2px 6px 0px rgba(0, 0, 0, 0.10), 0px 0px 2px 0px rgba(0, 0, 0, 0.20)";
  }

  public setStyle(property: string, value: string): void {
    this.element.style[property] = value;
  }

  setText(text: string): void {
    this.element.textContent = text;
  }

  public addClass(className: string): void {
    this.element.classList.add(className);
  }

  public addEventListener(event: string, handler: EventListener): void {
    this.element.addEventListener(event, handler);
  }

  public appendTo(target: HTMLElement): void {
    target.appendChild(this.element);
  }

  public addChild(child: HTMLElement | CustomElement<T>): void {
    if (child instanceof CustomElement) {
      this.element.appendChild(child.getElement());
    } else {
      this.element.appendChild(child);
    }
  }

  public appendHtml(htmlString: string): void {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    while (tempDiv.firstChild) {
      this.element.appendChild(tempDiv.firstChild);
    }
  }

  getElement(): HTMLElement {
    return this.element;
  }
}
