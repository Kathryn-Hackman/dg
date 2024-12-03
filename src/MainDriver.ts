import { SceneOne } from "./scene.ts";

export function MainDriver(element: HTMLButtonElement) {
  const scene = new SceneOne();
  let count = 0;
  console.log('before readline: ', localStorage)
  const loadPreviousLines = () => {
    const lastLine = Number(localStorage.getItem('lastLineRead'))
    var div = document.getElementById("p_tags") as HTMLDivElement;
    var p = document.createElement("p");
    p.id = "content_" + count;
    div.append(p);
  }
  const readLine = () => {
    // TODO: this code should be moved to be called only when necessary
    if (localStorage.getItem('lastLineRead') && Number(localStorage.getItem('lastLineRead')) > 0) {
      loadPreviousLines()
    }
    var curr = document.getElementById("content_" + count) as HTMLDivElement;
    localStorage.setItem('lastLineRead', count)

    let typeWriter = new Typewriter(curr, {});
    if (scene.isSceneOver()) {
      localStorage.setItem('lastSceneCompleted', scene.sceneNumber)
      element.innerHTML = "scene is over!";
    }
    let nextLine = scene.printLine();
    let fontColor =
      scene.readWithColorEffect(nextLine) !== null
        ? scene.readWithColorEffect(nextLine)
        : "black";
    typeWriter
      .changeDelay(35)
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
        element.innerHTML = "continue";
        curr.innerHTML = nextLine;
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
