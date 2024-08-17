import { CompanionCharacter, MainCharacter, NonPlayableCharacter } from '../src/character.ts'

describe('testing main character', () => {
  test('testing main character', () => {
    const main_character = new MainCharacter('bob');
    expect(main_character.getName()).toBe('bob');
    expect(main_character.getFace()).toBe('TODO');
  });
});

describe('testing companion character', () => {
    test('testing companion character', () => {
      const companion_character = new CompanionCharacter('bob', false);
      expect(companion_character.getName()).toBe('bob');
      expect(companion_character.getFace()).toBe('TODO');
      expect(companion_character.getIsCurrentCompanion()).toBe(false);
      companion_character.setIsCurrentCompanion(true);
      expect(companion_character.getIsCurrentCompanion()).toBe(true);
    });
  });

  describe('testing npc character', () => {
    test('testing npc character', () => {
      const npc_character = new NonPlayableCharacter('bob');
      expect(npc_character.getName()).toBe('bob');
      expect(npc_character.getFace()).toBe('TODO');
    });
  });