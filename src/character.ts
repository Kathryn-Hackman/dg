//
export abstract class Character {
  name: string;
  ascii_face: string = "TODO";
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }

  getFace(): string {
    return this.ascii_face;
  }
}

export class MainCharacter extends Character {}

export class CompanionCharacter extends Character {
  is_current_companion: boolean;
  constructor(name: string, is_current_companion: boolean) {
    super(name);
    this.is_current_companion = is_current_companion;
  }

  setIsCurrentCompanion(is_current_companion: boolean): void {
    this.is_current_companion = is_current_companion;
  }
  getIsCurrentCompanion(): boolean {
    return this.is_current_companion;
  }
}

export class NonPlayableCharacter extends Character {}
