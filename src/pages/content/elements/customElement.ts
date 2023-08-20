type StyleProperty = keyof CSSStyleDeclaration;

interface ElementOptions {
  tagName: keyof HTMLElementTagNameMap;
  styles?: Partial<CSSStyleDeclaration>;
  text?: string;
  classes?: string[];
  events?: { [key: string]: EventListener };
}

export class CustomElement<T extends keyof HTMLElementTagNameMap> {
  private element: HTMLElement;

  constructor(options: ElementOptions) {
    this.element = document.createElement(options.tagName);
    this.applyStyles(options.styles);
    if (options.text) this.setText(options.text);
    if (options.classes) this.addClasses(options.classes);
    if (options.events) this.addEventListeners(options.events);
  }

  private applyStyles(styles?: Partial<CSSStyleDeclaration>): void {
    if (!styles) return;
    const elementStyle = this.element.style;
    for (const property in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, property)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        elementStyle[property as StyleProperty] = styles[property]!;
      }
    }
  }

  setText(text: string): void {
    this.element.textContent = text;
  }

  addClasses(classes: string[]): void {
    this.element.classList.add(...classes);
  }

  addEventListeners(events: { [key: string]: EventListener }): void {
    for (const eventName in events) {
      // eslint-disable-next-line no-prototype-builtins
      if (events.hasOwnProperty(eventName)) {
        this.element.addEventListener(eventName, events[eventName]);
      }
    }
  }

  appendTo(target: HTMLElement): void {
    target.appendChild(this.element);
  }

  addChild(child: HTMLElement | CustomElement<T>): void {
    if (child instanceof CustomElement) {
      this.element.appendChild(child.element);
    } else {
      this.element.appendChild(child);
    }
  }

  appendHtml(htmlString: string): void {
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
