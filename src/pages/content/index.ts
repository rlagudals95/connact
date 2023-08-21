import { CustomElement } from "./elements/customElement";
import { appendToBody } from "./utils/dom";

const popup = new CustomElement({ tagName: "div" });

const siteDetectContent = new CustomElement({
  tagName: "div",
  styles: { position: "fixed", right: "30px", top: "30px" },
});
siteDetectContent.setText("정신 차려 이친구야");

popup.addChild(siteDetectContent.getElement());

appendToBody(popup.getElement());

// personal

const personalSchedulePopup = new CustomElement({
  tagName: "div",
  styles: {
    position: "fixed",
    left: "30px",
    bottom: "30px",
    padding: "1.5rem 1rem",
    width: "fit-content",
  },
});

const schedules = ["connact 개발", "위탁/구매대행 공부", "머신러닝 공부"];

schedules.forEach((schedule) => {
  const box = new CustomElement({
    tagName: "div",
    styles: { boxShadow: "" },
  });

  box.setText(schedule);
  personalSchedulePopup.addChild(box.getElement());
});

appendToBody(personalSchedulePopup.getElement());
