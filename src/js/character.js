export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('неверное имя');
    }
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Daemon', 'Zombie'];
    if (!types.includes(this.type)) {
      throw new Error('неверный тип');
    }
  }
}
