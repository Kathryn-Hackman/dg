import { SceneOne } from "./scene.ts";

export function MainDriver(element: HTMLButtonElement) {
  const scene = new SceneOne();
  let count = 0;
  const readLine = () => {
    var curr = document.getElementById("content_" + count) as HTMLDivElement;

    let typeWriter = new Typewriter(curr, {});
    if (scene.isSceneOver()) {
      element.innerHTML = "scene is over!";
    }
    let nextLine = scene.printLine();
    let fontColor =
      scene.readWithColorEffect(nextLine) !== null
        ? scene.readWithColorEffect(nextLine)
        : "white";
    typeWriter
      .pauseFor(1)
      .callFunction(() => {
        element.disabled = true;
        element.hidden = true;
      })
      .typeString(nextLine)
      .callFunction(() => {
        curr.style.color = fontColor as string;
      })
      .callFunction(() => {
        element.disabled = false;
        element.hidden = false;
        element.innerHTML = "Next";
      })
      .start();
    count += 1;
    var div = document.getElementById("p_tags") as HTMLDivElement;
    var p = document.createElement("p");
    p.id = "content_" + count;
    div.append(p);
  };
  element.addEventListener("click", () => readLine());
}
