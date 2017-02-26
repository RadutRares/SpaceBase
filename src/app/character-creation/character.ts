

export class Character {
  constructor(
    public name: string,
    public race: string,
    public charClass: string,
    public armor: string,
    public weapons: string[],
    public fate: string,
    public weight: number,
    public age: number,

    public agi?: number,
    public str?:  number,
    public msk?: number,
    public vit?: number,
    public std?: number,
    public wis?: number,
    public int?: number,
    public cha?: number
  ) {  }
}