import { CustomElement } from "./elements/customElement";
import { appendToBody } from "./utils/dom";

const popup = new CustomElement("div");

const siteDetectContent = new CustomElement("div");
siteDetectContent.setText("정신 차려 이친구야");

popup.addChild(siteDetectContent.getElement());

console.log("element : ", popup.getElement());
appendToBody(popup.getElement());
