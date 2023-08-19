import { isCollectableUrl } from "@src/helpers/isCollectableUrl";
import { scrapTriggerElement } from "../popup";

if (isCollectableUrl(window.location.href)) {
  document.body.append(scrapTriggerElement());
}
