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
    this.setDefaultStyles();
    if (options.text) this.setText(options.text);
    if (options.classes) this.addClasses(options.classes);
    if (options.events) this.addEventListeners(options.events);
  }

  private setDefaultStyles(): void {
    this.applyStyles({
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "fixed",
      top: "50px",
      right: "50px",
      borderRadius: "0.5rem",
      background: "white",
      zIndex: "99999",
      boxShadow:
        "2px 2px 6px 0px rgba(0, 0, 0, 0.10), 0px 0px 2px 0px rgba(0, 0, 0, 0.20)",
    });
  }

  public applyStyles(styles?: Partial<CSSStyleDeclaration>): void {
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
