
import { MainCharacter } from './character.ts'
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    const sample_character = new MainCharacter("bob");
    console.log(sample_character.name);
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
