import { SceneOne } from "../src/scene";

describe("testing firt scene", () => {
  test("SceneOne", () => {
    const sceneOne = new SceneOne();
    expect(sceneOne.readWithColorEffect("hello")).toBe(null);
    expect(sceneOne.readWithColorEffect("orange darts")).toBe("orange");

    expect(SceneOne.getDialogue()).toContain("A tree, a house, a tree");
    expect(sceneOne.printLine()).toBe("A tree, a house, a tree");
    expect(sceneOne.getCharacters()[0].getName()).toBe("Nameless");
    expect(sceneOne.isSceneOver()).toBe(false);
    sceneOne.line = 100000000;
    expect(sceneOne.isSceneOver()).toBe(true);
  });
});
