import { Character, MainCharacter } from "../src/character.ts";
abstract class Scene {
  characters: Array<Character>;
  dialogue: Array<string>;
  line: number;
  sceneNumber: number

  // todo : choices
  constructor(characters: Array<Character>, dialogue: Array<string>, sceneNumber: number) {
    this.characters = characters;
    this.dialogue = dialogue;
    this.line = 0;
    this.sceneNumber = sceneNumber;
  }
  getCharacters(): Array<Character> {
    return this.characters;
  }
  getDialogue(): Array<string> {
    return this.dialogue;
  }
  isSceneOver(): boolean {
    return this.line >= this.dialogue.length;
  }
  printLine(): string {
    const ret = this.dialogue[this.line];
    this.line += 1;
    return ret;
  }
  readWithColorEffect(dialogue_line: string): string | null | undefined {
    // can be overriden by specific scenes
    return dialogue_line;
  }
}

export class SceneOne extends Scene {
  constructor() {
    super([new MainCharacter("Nameless")], SceneOne.getDialogue(), 1);
  }

  readWithColorEffect(dialogue_line: string): string | null | undefined {
    if (dialogue_line.includes("orange darts")) {
      return "orange";
    }
    return null;
  }

  public static getDialogue(): Array<string> {
    return [
      "A tree, a house, a tree",
      "An abandoned parking lot that surrounds an old, run down store.",
      "A billboard that promises to buy your home for cash today.",
      "A baseball field littered with weeds.",
      "More trees.",
      "Some have lost their leaves for the winter, bare and true and exposed to the world.",
      "Others are evergreen and no outside circumstance, changing season or otherwise, could convince them to change their emerald green uniforms.",
      "As you drive, you wonder who lives in a place like this.",
      "Before you can decide, a flash of orange darts into your peripheral vision, and interrupts your wandering mind.",
      "You slam on the brakes and squeeze your eyes shut.",
      "Beneath you, you hear your tires screech and rubber burn.",
      "Although you have braced your body for impact, none comes.",
      "You open your eyes after what feels like years but could have only been moments later to find the source of your premature stop content and licking his paw on the other side of the road.",
      "A hideous orange tabby cat with patchy fur and amber glowing eyes stares back at you as you inhale deeply to try to catch your breath.",
      "He doesn’t look surprised to see you, if anything, he seems mildly annoyed.",
      "Perhaps he is unaware of how he has just cheated death, or perhaps he had a few lives to spare.",
      "You count yourself lucky to have been the only car on this stretch of the road for miles.",
      "There’s no telling whether or not a driver behind you, had there been one, would have possessed your…cat-like reflexes.",
      "You touch your hands to your face and then to your stomach and are relieved to realize you are indeed alive.",
      "Who’s cat could that be anyway, roaming alone all the way out here? Around his neck you can see he is wearing a blue tattered collar holding a name tag, but the writing is too far away for your eyes to make out.",
      "Maybe when you were younger.",
      "Or if you had remembered to put on your glasses this morning.",
      "You catch yourself thinking that the cat is kind of cute, in a very ugly way…maybe…you shake your head.",
      "Not your problem.",
      "And clearly somebody else’s pet.",
      "No wild animal could possess such a lack of survival instinct.",
      "It’s time to move on.",
      "You press your foot to the gas pedal.",
      "The engine sputters and dies.",
      "You check your dash.",
      "Empty? But you just put gas in the car….",
      "oh.",
      "You didn’t fill up the tank this morning.",
      "It’s hard not to be angry with yourself for forgetting.",
      "You try to give yourself grace.",
      "There’s been a lot on your mind lately.",
      "Well, nothing to do about it now.",
      "It’s time to get out and walk.",
      "Does a place like this even have a gas station? You climb out of your truck and decide your best chance at making human contact is to walk towards the old run down store you passed a half mile back.",
      "Hopefully someone works there who knows where to find a gallon of gas.",
      "You swing the drivers side door closed behind you and leave your truck where it skidded to a stop on the side of the road.",
      "Thats funny, the cat is already gone.",
      "Oh well.",
      "You set off in the general direction of the store.",
      "At least your phone is charged.",
    ];
  }
}
