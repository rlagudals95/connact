import image from "../../../public/ohoo_favicon_128.png";

export const scrapTriggerElement = (): HTMLElement => {
  const element = document.createElement("div");
  element.style.backgroundImage = `url(${image})`;
  element.style.backgroundSize = "cover"; // 이미지를 div에 맞게 조정
  element.addEventListener("click", function () {
    //@TODO - scroll action
    chrome.runtime.sendMessage({ body: "test" });
  });

  element.style.position = "fixed";
  element.style.top = "50px";
  element.style.right = "50px";
  element.style.zIndex = "999999999";
  element.style.width = "100px";
  element.style.height = "100px";

  return element;
};
