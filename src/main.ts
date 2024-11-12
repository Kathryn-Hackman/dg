import "./style.css";
import { MainDriver } from "./MainDriver.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
    <div id="p_tags">
      <p id="content_0"></p>
    </div>
      <button id="output_line" type="button">click to begin</button>
    </div>
  </div>
`;

MainDriver(document.querySelector<HTMLButtonElement>("#output_line")!);
