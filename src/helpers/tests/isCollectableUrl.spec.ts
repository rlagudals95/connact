import { isCollectableUrl } from "../isCollectableUrl";

describe("isCollectableUrl", () => {
  it("returns true if the URL contains collectable keywords", () => {
    expect(isCollectableUrl("This is a taobao product")).toBe(true);
    expect(isCollectableUrl("tmall is a popular e-commerce platform")).toBe(
      true
    );
    expect(isCollectableUrl("1688.com is a wholesale marketplace")).toBe(true);
    expect(isCollectableUrl("I like shopping on aliexpress")).toBe(true);
  });

  it("returns false if the URL does not contain collectable keywords", () => {
    expect(
      isCollectableUrl("This URL does not contain any collectable keyword")
    ).toBe(false);
    expect(isCollectableUrl("example.com")).toBe(false);
    expect(isCollectableUrl("amazon.com")).toBe(false);
  });
});
