import { CustomElement } from "./elements/customElement";
import { appendToBody } from "./utils/dom";

const popup = new CustomElement({ tagName: "div" });

const siteDetectContent = new CustomElement({ tagName: "div" });
siteDetectContent.setText("정신 차려 이친구야");

popup.addChild(siteDetectContent.getElement());

appendToBody(popup.getElement());

// personal

// const personalSchedulePopup = new CustomElement({ tagName: "div" });

// const schedules = ["connact 개발", "위탁/구매대행 공부", "머신러닝 공부"];

// schedules.forEach((schedule) => {
//   const box = new CustomElement({ tagName: "div" });
//   box.setText(schedule);
//   personalSchedulePopup.addChild(box.getElement());
// });

// personalSchedulePopup.applyStyles({ bottom: "50px", left: "50px" });
// appendToBody(personalSchedulePopup.getElement());
