import { CustomElement } from "./elements/customElement";
import { appendToBody } from "./utils/dom";

const popup = new CustomElement({ tagName: "div" });

const siteDetectContent = new CustomElement({ tagName: "div" });
siteDetectContent.setText("정신 차려 이친구야");

popup.addChild(siteDetectContent.getElement());

appendToBody(popup.getElement());
