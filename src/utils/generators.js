import Grammar from 'tracery-grammar';
import Chance from 'chance';

export const getDescription = () => {
  const grammar = Grammar.createGrammar({

    kind: [
      'The strong, sour-sweet scent of vinegar', 'The metallic tang of blood'],
    enter: [
      'You enter a small room and your steps echo.',
      'You enter a small room.',
      'You enter a medium room.',
      'You enter a huge room.',
      'You enter a big room.',
      'You enter a silent room.',
      'You enter a smelly room.',
      'You enter a huge room and your steps echo.',
      'You open the door to a small room.',
      'You open the door to a huge room.',
      'You open the door to a small room.',
      'As the door opens, You enter a medium room.',
      'You enter a huge room.',
      'You enter a medium room.',
      'This room is a small antechamber before titanic bronze doors.',
      '#kind# assaults your nose as you enter this room.',
      'You poke your head through the break in the wall and look upon a room of titanic size.',
      'You inhale a briny smell like the sea as you crack open the door to this chamber.',
      'You peer into this room and spot the white orb of a skull lying on the floor.',
      'Rats inside the room shriek when they hear the door open, then they run in all directions from a putrid corpse lying in the center of the floor.',
      'You open the door, and the reek of garbage assaults your nose.',
      'You open the door to confront a room of odd pillars.',
      'This hall is choked with corpses. The bodies of orcs and ogres lie in tangled heaps where they died, and the floor is sticky with dried blood.',
      'You catch a whiff of the unmistakable metallic tang of blood as you open the door.',
      'A chill wind blows against you as you open the door.',
      'This room is shattered.',
      'As the door opens, it scrapes up frost from a floor covered in ice.',
      'A pungent, earthy odor greets you as you pull open the door and peer into this room.',
      'You pull open the door and hear the scrape of its opening echo throughout what must be a massive room.',
      "There's a hiss as you open this door, and you smell a sour odor.",
      'A chill crawls up your spine and out over your skin as you look upon this room.',
      'The door to this room swings open easily on well-oiled hinges.',
      'You open the door to reveal a foot-by-foot room with a floor studded with spikes.',
      'You open the door to what must be a combat training room.',
    ],
    more: [
      'A pile of elves bodies lie set in the center of the room, and the floor is sticky with dried blood.',
      'Corpses and pieces of corpses hang from hooks that dangle from chains attached to thick iron rings. Most appear humanoid but a few of the body parts appear more monstrous.',
      'Many small desks with high-backed chairs stand in three long rows in this room. Everything is covered with dust.',
      'Rough fighting circles are scratched into the surface of the floor.',
      'The corpse of a minotaur lies on the floor, its belly carved out.',
      'Stalactites drip down from the ceiling in sharp points while flowstone makes strange shapes on the floor.',
      'Mushrooms grow in clusters of hundreds all over the floor.',
      'It looks like the orcs and ogres were fighting. The bodies are largely stripped of valuables, but a few broken weapons jut from the slain or lie discarded on the floor.',
      'Every surface bears scorch marks and ash piles on the floor. The room reeks of fire and burnt flesh.',
      'You hear a low rumbling and cracking noise.',
      'This small room contains several pieces of well-polished wood furniture. Eight ornate, high-backed chairs surround a long oval table.',
      'Dozens of dead, winged beings lie scattered about the floor, each about the size of a cat, their broken bodies are batlike and buglike at the same time. Each had six legs.',
      'The water pools near the base of the wall, and a rivulet runs along the wall an out into the hall. The water smells fresh.',
      'Thick cobwebs fill the corners of the room, and wisps of webbing hang from the ceiling and waver in a wind you can barely feel.',
      "One corner of the ceiling has a particularly large clot of webbing within which a goblin's bones are tangled.",
      'Tapestries decorate the walls of this room. Although they may once have been brilliant in hue, they now hang in graying tatters.',
      'The stinking corpse in the middle of the room looks human, but the damage both time and the rats have wrought are enough to make determining its race by appearance an extremely difficult.',
      'Burning torches in iron sconces line the walls of this room, lighting it brilliantly.',
      "At the room's center lies a squat stone altar, its top covered in recently spilled blood.",
      "The liquid lies about feet below your feet and is so murky that you can't see its bottom. The room smells sour.",
      'Rusting spikes line the walls and ceiling of this chamber.',
      'The dusty floor shows no sign that the walls move over it, but you can see the skeleton of some humanoid impaled on some wall spikes nearby.',
      'Looking inside, you see a pile of refuse and offal that nearly reaches the ceiling.',
      'In the ceiling above it is a small hole that is roughly as wide as two human hands. No doubt some city dweller high above disposes of his rubbish without ever thinking about where it goes.',
      "Rounded green stones set in the floor form a snake's head. The body of the snake flows back and toward the wall to go round creating a spiral pattern on the floor.",
      'The manacles set into the walls of this room give you the distinct impression that it was used as a prison and torture chamber.',
      "You gaze into the room and hundreds of skulls gaze coldly back at you. They're set in niches in the walls.",
      'Unlike the flagstone common throughout the dungeon, this room is walled and floored with black marble veined with white.',
      'A huge iron cage lies on its side in this room, and its gate rests open on the floor.',
      'This room is a tomb. Stone sarcophagi stand in five rows of three, each carved with the visage of a warrior lying in state.',
      'Three low, oblong piles of rubble lie near the center of this room.',
      'Huge rusted metal blades jut out of cracks in the walls, and rusting spikes project down from the ceiling almost to the floor.',
      'Several white marble busts that rest on white pillars dominate this room. Most appear to be male or female humans of middle age. One is spread across the floor in a thousand pieces.',
      'A dozen statues stand or kneel in this room, and each one lacks a head and stands in a posture of action or defense.',
      'Four skeletons dressed in aged clothing and rusting armor lie on the floor in the room against the walls.',
      'This chamber holds a curious array of machinery. Winches and levers project from every wall, and chains with handles dangle from the ceiling.',
      'Two male humans, a male elf, and a female dwarf lie in drying pools of their blood.',
      'Armor and weapon racks line the walls and rusty and broken weapons litter the floor.',
      'Small cages containing small animals and large insects line the walls. Some of the creatures look sickly and alive but most are clearly dead.',
      'This chamber of well-laid stones holds a wide bas-relief of a pastoral scene.',
      'In the center of this chamber, the statue of a giant spider is skillfully crafted.',
      'This chamber holds a large tomb carved on the east side wall.',
      'You see benchlike seats on all the walls. The seats all have holes in their top, like a communal bathroom.',
      'Forge tools hang in racks nearby, and a barrel of water and bellows rest on the floor nearby.',
      "When looking into this chamber, you're confronted by a thousand reflections of yourself looking back. Mirrored walls set at different angles fill the room.",
      'A large forge squats against the far wall of this room, and coals glow dimly inside.',
      'This chamber is clearly a prison. Small barred cells line the walls, leaving a foot-wide pathway for a guard to walk.',
      'A cluster of low crates surrounds a barrel in the center of this chamber. Atop the barrel lies a stack of copper coins and two stacks of cards, one face up.',
      'Winches and levers project from every wall, and chains with handles dangle from the ceiling.',
      'A huge iron cage lies on its side in this room, and its gate rests open on the floor.',
      'A rotting corpse that looks to be a hobgoblin rest in the center ot this chamber. It lacks a head.',
      'The columns of stone are carved as tree trunks and seem placed at random like trees in a forest.',
      'In the center of this large room lies a foot-wide round pit, its edges lined with rusting iron spikes.',
    ],
    floor: [''], // ['sala','cámara','habitación','sepulcro','aposento','biblioteca','panteón','tumba'],
    walls: [''],
    ceiling: [''],
    origin: ['#enter# #more# #more# #more#'],
  });

  return grammar.flatten('#origin#');
};

export const lootGen = (id, back) => {
  const items = [

    // armor 10%
    {
      cid: id, cback: back, cname: 'Large steel shield', bonus: 'Reduce only 1 STAMINA if any crature wounded you.', cimage: 'shield', type: 'armor', hands: 1, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Chain shirt', bonus: 'Reduce only 1 STAMINA if any crature wounded you.', cimage: 'shirt', type: 'armor', hands: 1, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Large elf wood shield', bonus: 'Reduce 1 STAMINA to a creature in the Room if you were wounded in combat.', cimage: 'shield', type: 'armor', hands: 1, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Armor of vulnerability', bonus: 'The enemies can not wound you for a turn. Destroy the Armor after use.', cimage: 'armor', type: 'armor', hands: 1, persistent: 'Destoy the armor after 3 impacts.',
    },
    {
      cid: id, cback: back, cname: 'Sentinel shield', bonus: 'Reduce only 1 STAMINA if a SKELETON attacks you', cimage: 'shield', type: 'armor', hands: 2, persistent: 'STUNTS have no effects.',
    },
    {
      cid: id, cback: back, cname: 'Chain mail of resistance', bonus: 'Reduce only 1 STAMINA if any creature wounded you.', cimage: 'shirt', type: 'armor', hands: 2, persistent: 'BITE attacks inflict no damage.',
    },
    {
      cid: id, cback: back, cname: 'Spellguard helmet', bonus: 'Reduce only 1 STAMINA if a ZOMBIE attacks you', cimage: 'helm', type: 'armor', hands: 2, persistent: 'FIRE magic inflict no damage.',
    },
    {
      cid: id, cback: back, cname: 'Gauntlets', bonus: 'Reduce only 1 STAMINA if a ZOMBIE attacks you.', cimage: 'gauntlet', type: 'armor', hands: 1, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Dragon boots', bonus: 'Reduce only 1 STAMINA if a SNAKE attacks you', cimage: 'boots', type: 'armor', hands: 1, persistent: '',
    },
    // Potions  16%
    {
      cid: id, cback: back, cname: 'Elixir of health', bonus: 'Drink to recover +2 STAMINA', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of mind reading', bonus: 'Drink to gain +2 current SKILL', cimage: 'potion', type: 'item', hands: 1, persistent: '1 Roll. Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of mind reading', bonus: 'Drink to gain +2 current SKILL', cimage: 'potion', type: 'item', hands: 1, persistent: '1 Roll. Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of healing', bonus: 'Drink to recover +1 STAMINA', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of healing', bonus: 'Drink to recover +1 STAMINA', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of healing', bonus: 'Drink to recover +1 STAMINA', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of cure', bonus: 'Drink to remove POISON effect', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of cure', bonus: 'Drink to remove POISON effect', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of cure', bonus: 'Drink to remove POISON effect', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of greater healing', bonus: 'Drink to recover +2 STAMINA', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of resistance', bonus: 'Drink, enemies can wound in this round', cimage: 'potion', type: 'item', hands: 1, persistent: 'Remove card after 3 Impacts.',
    },
    {
      cid: id, cback: back, cname: 'Potion of speed', bonus: 'Drink to gain +1 LUCK', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of speed', bonus: 'Drink to gain +1 LUCK', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of cure', bonus: 'Remove POISON effect', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    {
      cid: id, cback: back, cname: 'Potion of great healing', bonus: 'Drink to recover +3 STAMINA', cimage: 'potion', type: 'item', hands: 1, persistent: 'Destroy item after use.',
    },
    // Scrolls 10%
    {
      cid: id, cback: back, cname: 'Scroll of fire', bonus: 'Inflict 3 STAMINA wound to any creature', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The scroll burns after use.',
    },
    {
      cid: id, cback: back, cname: 'Fireball scroll', bonus: 'Inflict 2 STAMINA wound to any monster', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The scroll burns after use.',
    },
    {
      cid: id, cback: back, cname: 'Web Spell', bonus: '+1 SKILL rolls', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The scroll disapears after use.',
    },
    {
      cid: id, cback: back, cname: 'Cloud of Daggers', bonus: 'Inflict 2 STAMINA  woundto a monster', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The scroll burns after use.',
    },
    {
      cid: id, cback: back, cname: 'Divine Armor', bonus: 'Reduce by 1 STAMINA when enemies wounded you', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The spell persist in this room',
    },
    {
      cid: id, cback: back, cname: 'Lighting Bolt', bonus: 'Inflict 2 STAMINA wound to a monster', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The scroll burns after use.',
    },
    {
      cid: id, cback: back, cname: 'Divine Light', bonus: 'Inflict 2 STAMINA wound to a monster 4 STAMINA to ZOMBIES', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'Destroy the scroll after use.',
    },
    {
      cid: id, cback: back, cname: 'Scroll of fire', bonus: 'Inflict 1 STAMINA wound to any monster', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The scroll burns after use.',
    },
    {
      cid: id, cback: back, cname: 'Web Spell', bonus: '+1 SKILL rolls', cimage: 'scroll', type: 'scroll', hands: 1, persistent: 'The spell persist in this room.',
    },
    {
      cid: id, cback: back, cname: 'White Storm', bonus: 'Inflict 2 STAMINA wound to all the monster inside this room', cimage: 'scroll', type: 'scroll', hands: 2, persistent: 'Destroy item after use.',
    },
    // Weapons
    {
      cid: id, cback: back, cname: 'Sword of Vengance', bonus: '+2 SKILL Rolls to Demons', cimage: 'shortsword', type: 'shortsword', hands: 1, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Holy Sword', bonus: '+2 SKILL Rolls to Undead', cimage: 'largesword', type: 'sword', hands: 1, persistent: 'Remove extra HP to Undead',
    },
    {
      cid: id, cback: back, cname: 'King Crossbow', bonus: '+2 SKILL Rolls', cimage: 'crossbow', type: 'arrows', hands: 2, persistent: 'Require 1 AP to charge.',
    },
    {
      cid: id, cback: back, cname: 'Dragon Slayer', bonus: '+2 SKILL Rolls to Animals', cimage: 'largesword', type: 'sword', hands: 2, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Maze of Terror', bonus: '+1 SKILL Rolls', cimage: 'maze', type: 'maze', hands: 2, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Greataxe', bonus: '+1 SKILL Rolls', cimage: 'axe', type: 'axe', hands: 2, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Sword of Vengance', bonus: '+1 SKILL Rolls to Demons', cimage: 'shortsword', type: 'sword', hands: 1, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Holy Sword', bonus: '+1 SKILL Rolls to Undead', cimage: 'largesword', type: 'sword', hands: 1, persistent: 'Remove 1 STAMINA extra to Undead',
    },
    {
      cid: id, cback: back, cname: 'King Crossbow', bonus: '+2 SKILL Rolls', cimage: 'crossbow', type: 'arrows', hands: 2, persistent: 'Only 3 attack rolls',
    },
    {
      cid: id, cback: back, cname: 'Elven Bow', bonus: '+3 SKILL Rolls to Flying Animals', cimage: 'crossbow', type: 'arrows', hands: 2, persistent: 'Only 3 attack rolls',
    },

    {
      cid: id, cback: back, cname: 'Shining Gold Coins', bonus: `+${chance.d100()} gc`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Plate Coins', bonus: `+${chance.d100()} pc`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Electrum Coins', bonus: `+${chance.d100()} ec`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Shining Gold Coins', bonus: `+${chance.d100()} gc`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Plate Coins', bonus: `+${chance.d100()} pc`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Electrum Coins', bonus: `+${chance.d100()} ec`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Shining Gold Coins', bonus: `+${chance.d100()} gc`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Plate Coins', bonus: `+${chance.d100()} pc`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },
    {
      cid: id, cback: back, cname: 'Electrum Coins', bonus: `+${chance.d100()} ec`, cimage: 'coins', type: 'coins', hands: 0, persistent: '',
    },

  ];

  const item = chance.pickset(items, 1);

  return item;
};

export const enemyGen = (id) => {
  const enemies = [
    {
      cid: id, name: 'Orc', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '14', basic: 'SWORD +2 Dmg. 1HP', normal: 'SWORD +4 2HP', hard: 'SWORD +6 2HP/STUNT', hearts: '2', init: '+1', image: 'orc', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Orc', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '14', basic: 'SWORD +2 Dmg. 1HP', normal: 'SWORD +4 2HP', hard: 'SWORD +6 2HP/STUNT', hearts: '2', init: '+1', image: 'orc', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Rat', desc: `${chance.pickone(['a furry', 'a hairy', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +2 1HP', normal: 'BITE +4 1HP/POISON', hard: 'BITE +7 2HP/POISON', hearts: '1', init: '+2', image: 'rat', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Bat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'a hairy', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 5 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+2', image: 'bat', kind: 'Flying/Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Bat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'a hairy', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 5 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+2', image: 'bat', kind: 'Flying/Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Bat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'a hairy', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 5 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+2', image: 'bat', kind: 'Flying/Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Orc', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '14', basic: 'SWORD +2 Dmg. 1HP', normal: 'SWORD +4 2HP', hard: 'SWORD +6 2HP/STUNT', hearts: '2', init: '+1', image: 'orc', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Orc', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '14', basic: 'SWORD +2 Dmg. 1HP', normal: 'SWORD +4 2HP', hard: 'SWORD +6 2HP/STUNT', hearts: '2', init: '+1', image: 'orc', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Skeleton', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 4, max: 7 })}`, stamina: `${chance.integer({ min: 4, max: 7 })}`, AC: '15', basic: 'SWORD +6 1HP', normal: '', hard: 'SLICE +9 2HP', hearts: '3', init: '-2', image: 'skeleton', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Zombie', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +5 1HP', normal: '', hard: '', hearts: '1', init: '-2', image: 'zombie', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Zombie', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +5 1HP', normal: '', hard: '', hearts: '1', init: '-2', image: 'zombie', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Zombie', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +5 1HP', normal: '', hard: '', hearts: '1', init: '-2', image: 'zombie', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Zombie', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +5 1HP', normal: '', hard: '', hearts: '1', init: '-2', image: 'zombie', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Goblin', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '12', basic: 'SWORD +4 1HP', normal: 'SWORD +8 1HP', hard: '', hearts: '1', init: '+1', image: 'goblin', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Spider', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 8 })}`, stamina: `${chance.integer({ min: 5, max: 8 })}`, AC: '15', basic: 'BITE +6 1HP', normal: 'WEB +11 1HP/-3 INI', hard: 'BITE +8 3HP/POISON', hearts: '2', init: '+1', image: 'spider', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Orc', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 5 })}`, AC: '14', basic: 'SWORD +2 Dmg. 1HP', normal: 'SWORD +4 2HP', hard: 'SWORD +6 2HP/STUNT', hearts: '2', init: '+1', image: 'orc', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Rat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 5 })}`, AC: '11', basic: 'BITE +2 1HP', normal: 'BITE +4 1HP/POISON', hard: 'BITE +7 2HP/POISON', hearts: '1', init: '+2', image: 'rat', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Bat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 3, max: 5 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+2', image: 'bat', kind: 'Flying/Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Skeleton', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 4, max: 7 })}`, stamina: `${chance.integer({ min: 4, max: 7 })}`, AC: '15', basic: 'SWORD +6 1HP', normal: '', hard: 'SLICE +9 2HP', hearts: '3', init: '-2', image: 'skeleton', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Zombie', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +5 1HP', normal: '', hard: '', hearts: '1', init: '-2', image: 'zombie', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Goblin', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '12', basic: 'SWORD +4 1HP', normal: 'SWORD +8 1HP', hard: '', hearts: '1', init: '+1', image: 'goblin', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Spider', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 8 })}`, stamina: `${chance.integer({ min: 5, max: 8 })}`, AC: '15', basic: 'BITE +6 1HP', normal: 'WEB +11 1HP/-3 INI', hard: 'BITE +8 3HP/POISON', hearts: '2', init: '+1', image: 'spider', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Orc', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '14', basic: 'SWORD +2 Dmg. 1HP', normal: 'SWORD +4 2HP', hard: 'SWORD +6 2HP/STUNT', hearts: '2', init: '+1', image: 'orc', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Rat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +2 1HP', normal: 'BITE +4 1HP/POISON', hard: 'BITE +7 2HP/POISON', hearts: '1', init: '+2', image: 'rat', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Bat', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+2', image: 'bat', kind: 'Flying/Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Skeleton', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 4, max: 7 })}`, stamina: `${chance.integer({ min: 4, max: 7 })}`, AC: '15', basic: 'SWORD +6 1HP', normal: '', hard: 'SLICE +9 2HP', hearts: '3', init: '-2', image: 'skeleton', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Zombie', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '11', basic: 'BITE +5 1HP', normal: '', hard: '', hearts: '1', init: '-2', image: 'zombie', kind: 'Undead', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Goblin', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '12', basic: 'SWORD +4 1HP', normal: 'SWORD +8 1HP', hard: '', hearts: '1', init: '+1', image: 'goblin', kind: 'Green skin', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Spider', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 8 })}`, stamina: `${chance.integer({ min: 5, max: 8 })}`, AC: '15', basic: 'BITE +6 1HP', normal: 'WEB +11 1HP/-3 INI', hard: 'BITE +8 3HP/POISON', hearts: '2', init: '+1', image: 'spider', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Giant Spider', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '15', basic: 'BITE +6 1HP', normal: 'WEB +11 1HP/-3 INI', hard: 'BITE +8 3HP/POISON', hearts: '2', init: '+1', image: 'spider', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Fire Skull', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '16', basic: 'FIRE +6 2HP', normal: 'FIRE +9 1HP', hard: 'FIRE +12 3HP', hearts: '2', init: '+0', image: 'fire_elemental', kind: 'Demon', exp: 10, isboss: true, level: 2,
    },
    {
      cid: id, name: 'Ice Demon', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '16', basic: 'ICE +6 1HP', normal: 'ICE +9 2HP/Ini -1', hard: 'ICE +12 2HP/Ini -2', hearts: '2', init: '+0', image: 'ice_elemental', kind: 'Demon', exp: 10, isboss: true, level: 2,
    },
    {
      cid: id, name: 'Fire Skull', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 8 })}`, stamina: `${chance.integer({ min: 5, max: 8 })}`, AC: '16', basic: 'FIRE +6 2HP', normal: 'FIRE +9 1HP', hard: 'FIRE +12 3HP', hearts: '2', init: '+0', image: 'fire_elemental', kind: 'Demon', exp: 10, isboss: true, level: 2,
    },
    {
      cid: id, name: 'Ice Demon', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 6, max: 8 })}`, stamina: `${chance.integer({ min: 6, max: 9 })}`, AC: '16', basic: 'ICE +6 1HP', normal: 'ICE +9 2HP/Ini -1', hard: 'ICE +12 2HP/Ini -2', hearts: '2', init: '+0', image: 'ice_elemental', kind: 'Demon', exp: 10, isboss: true, level: 2,
    },
    {
      cid: id, name: 'Kobold', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '13', basic: 'SPEAR +5 1HP', normal: 'SPEAR +8 1HP', hard: '', hearts: '1', init: '+1', image: 'kobold', kind: 'Draconian', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Kobold', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '13', basic: 'SPEAR +5 1HP', normal: 'SPEAR +8 1HP', hard: '', hearts: '1', init: '+1', image: 'kobold', kind: 'Draconian', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Kobold', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 6 })}`, stamina: `${chance.integer({ min: 3, max: 6 })}`, AC: '13', basic: 'SPEAR +5 1HP', normal: 'SPEAR +8 1HP', hard: '', hearts: '1', init: '+1', image: 'kobold', kind: 'Draconian', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Snake', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 2, max: 4 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+1', image: 'snake', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Snake', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 2, max: 4 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+1', image: 'snake', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Snake', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 3, max: 5 })}`, stamina: `${chance.integer({ min: 2, max: 4 })}`, AC: '11', basic: 'BITE +3 1HP', normal: 'BITE +6 1HP/POISON', hard: '', hearts: '1', init: '+1', image: 'snake', kind: 'Animal', exp: 10, isboss: false, level: 1,
    },
    {
      cid: id, name: 'Stone Golem', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 8 })}`, stamina: `${chance.integer({ min: 10, max: 16 })}`, AC: '18', basic: '', normal: 'HIT +7 2HP/STUNT', hard: '', hearts: '4', init: '-3', image: 'golem', kind: 'Golem', exp: 10, isboss: false, level: 2,
    },
    {
      cid: id, name: 'Stone Golem', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 8 })}`, stamina: `${chance.integer({ min: 10, max: 16 })}`, AC: '18', basic: '', normal: 'HIT +7 2HP/STUNT', hard: '', hearts: '4', init: '-3', image: 'golem', kind: 'Golem', exp: 10, isboss: false, level: 2,
    },
    {
      cid: id, name: 'Minotaur', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 7, max: 9 })}`, stamina: `${chance.integer({ min: 8, max: 12 })}`, AC: '16', basic: 'SWORD +5 1HP/STUNT', normal: 'SOWRD +7 2HP/STUNT', hard: 'SOWRD +9 3HP/STUNT', hearts: '5', init: '-1', image: 'minotaur', kind: 'Demon', exp: 10, isboss: true, level: 2,
    },
    {
      cid: id, name: 'Troll', desc: `${chance.pickone(['an abominable', 'a gruesomoe', 'an awful', 'a cruel', 'a disgusting'])}`, skill: `${chance.integer({ min: 5, max: 7 })}`, stamina: `${chance.integer({ min: 8, max: 14 })}`, AC: '18', basic: '', normal: 'HIT +5 3HP/STUNT', hard: 'HIT +7 4HP/STUNT', hearts: '3', init: '-3', image: 'ogre', kind: 'Green Skin', exp: 10, isboss: true, level: 2,
    },
  ];

  const enemy = chance.pickset(enemies, 1);

  return enemy;
};

export const playerGen = () => {
  const genere = chance.pickone(['Female', 'Male']);
  const race = chance.pickone(['Dwarf', 'Elf', 'Human', 'Halfling']);
  let _class = '';
  let _name = '';
  const bonus_race = '';
  const bonus_class = '';

  let base_init = 2;
  let base_ac = 15;
  let base_hearts = 8;
  let base_spell = 0;

  let base_basic = '';
  let base_normal = '';
  let base_hard = '';

  const base_ap = 2;


  if (race == 'Dwarf') {
    // Bonus race +2 AC
    // race -1 Ini

    base_init -= 1;
    base_ac += 2;

    _class = chance.pickone(['Fighter', 'Cleric']);
    if (genere === 'Male') {
      _name = chance.pickone(['Grizad', 'Thaim', 'Dum', 'Gilain', 'Grumin', 'Raggin', 'Fimain', 'Ragbur', 'Doril', 'Durund', 'Bulrim', 'Grigin', 'Thrdin', 'Bromin', 'Chalunn', 'Dwgol']);
    } else {
      _name = chance.pickone(['Kilumma', 'Norala', 'Dwindina', 'Bilmina', 'Belundi', 'Thorgoli', 'Thrgari', 'Barona', 'Munia', 'Ketina', 'Durgoli', 'Dwona', 'Nalona', 'Durana', 'Grunraka']);
    }
  } else if (race == 'Elf') {
    // Bonus +1 Ini
    // Bonus +1 Spell
    base_spell += 1;
    base_init += 1;

    _class = chance.pickone(['Mage', 'Ranger', 'Bard']);
    if (genere === 'Male') {
      _name = chance.pickone(['Mnementh', 'Wirenth', 'Feyrith', 'Sataleeti', 'Leofrick', 'Abarat', 'Adamar', 'Adorellan', 'Adresin', 'Aelrindel', 'Aerendyl', 'Aeson', 'Afamrail', 'Agandaur', 'Agis', 'Aias', 'Aiduin', 'Aien', 'Ailas', 'Ailduin', 'Ailen', 'Ailluin', 'Ailmar', 'Ailmer', 'Ailmon', 'Ailre', 'Ailred', 'Ailuin', 'Ailwin', 'Aimar', 'Aimer', 'Aimon', 'Airdan', 'Aire', 'Aired', 'Aithlin', 'Aiwin', 'Akkar', 'Alabyran', 'Alaion', 'Alas', 'Albondiel', 'Alduin', 'Alen', 'Alinar', 'Alluin', 'Almar', 'Almer', 'Almon', 'Alok', 'Alosrin', 'Alre', 'Alred', 'Althidon', 'Alwin', 'Amrynn', 'Andrathath', 'Anfalen', 'Anlyth', 'Aolis', 'Aquilan', 'Arathorn', 'Arbane', 'Arbelladon', 'Ardreth', 'Ardryll', 'Arl', 'Arlen', 'Arun', 'Ascal', 'Athtar', 'Aubron', 'Aumanas', 'Aumrauth', 'Avourel', 'Ayas', 'Ayduin', 'Ayen', 'Ayluin', 'Aymar', 'Aymer', 'Aymon', 'Ayre', 'Ayred', 'Aywin', 'Belanor', 'Beldroth', 'Bellas', 'Beluar', 'Biafyndar', 'Bialaer', 'Braern', 'Cailu', 'Cameron', 'Camus', 'Castien', 'Chathanglas', 'Cheyrth', 'Cluhurach', 'Cluym', 'Cohnal', 'Conall', 'Connak', 'Cornaith', 'Corym', 'Cyran', 'Dain', 'Dakath', 'Dalyor', 'Darcassan', 'Darfin', 'Darthoridan', 'Darunia', 'Deldrach', 'Delmuth', 'Delsaran', 'Devdan', 'Drannor', 'Druindar', 'Durlan', 'Durothil', 'Dyffros', 'Edwyrd', 'Edyrm', 'Ehlark', 'Ehrendil', 'Eilauver', 'Elnaril', 'Elaith', 'Elandorr', 'Elas', 'Elashor', 'Elbauthin', 'Eldaernth', 'Eldar', 'Eldrin', 'Elduin', 'Elen', 'Elephon', 'Elidyr', 'Elion', 'Elkhazel', 'Ellisar', 'Elluin', 'Elmar', 'Elmer', 'Elmon', 'Elorshin', 'Elpaerae', 'Elre', 'Elred', 'Eltaor', 'Elwin', 'Elyon', 'Emmyth', 'Entrydal', 'Erendriel', 'Erglareo', 'Eriladar', 'Erlan', 'Erlathan', 'Eroan', 'Erolith', 'Eschallus', 'Estelar', 'Ethlando', 'Ettrian', 'Evindal', 'Eyrynnhv', 'Faelar', 'Faelyn', 'Faeranduil', 'Falael', 'Felaern', 'Fenian', 'Feno', 'Fhaornik', 'Filarion', 'Filvendor', 'Filverel', 'Flardryn', 'Flinar', 'Folas', 'Folduin', 'Folen', 'Folluin', 'Folmar', 'Folmer', 'Folmon', 'Folre', 'Folred', 'Folwin', 'Foxfire', 'Fylson', 'Gaeleath', 'Gaelin', 'Galaeron', 'Galan', 'Galather', 'Ganamede', 'Gantar', 'Garrik', 'Garynnon', 'Giullio', 'Glanduil', 'Glarald', 'Glorandal', 'Goll', 'Goras', 'Gorduin', 'Goren', 'Gorluin', 'Gormar', 'Gormer', 'Gormon', 'Gorre', 'Gorred', 'Gorwin', 'Grathgor', 'Haemir', 'Hagas', 'Hagduin', 'Hagen', 'Hagluin', 'Hagmar', 'Hagmer', 'Hagre', 'Hagred', 'Hagwin', 'Haladavar', 'Halafarin', 'Halamar', 'Haldir', 'Haldreithen', 'Halflar', 'Halueth', 'Halueve', 'Hamon', 'Haryk', 'Hastos', 'Hatharal', 'Hoccar', 'Horith', 'Hubyr', 'Iefyr', 'Ievos', 'Ilbryn', 'Ilimitar', 'Iliphar', 'Illianaro', 'Illithor', 'Illitran', 'Ilphas', 'Ilrune', 'Ilthuryn', 'Inchel', 'Inialos', 'Injros', 'Intevar', 'Iolas', 'Iolrath', 'Itham', 'Ivsaar', 'Ivlisar', 'Ivran', 'Iymbryl', 'Iyrandrar', 'Jandar', 'Jannalor', 'Jaonos', 'Jassin', 'Jhaan', 'Jhaartael', 'Jhaeros', 'Jharak', 'Jharym', 'Jonik', 'Jorildyn', 'Josidiah', 'Juppar', 'Kailu', 'Katar', 'Katyr', 'Keletheryl', 'Kellam', 'Kelvhan', 'Kendel', 'Kerym', 'Keryth', 'Kesefehon', 'Kharis', 'Khatar', 'Khidell', 'Khiiral', 'Khilseith', 'Khuumal', 'Khyrmn', 'Kieran', 'Kiirion', 'Kindroth', 'Kivessin', 'Kiyuigh', 'Klaern', 'Kolvar', 'Kuornos', 'Kuskyn', 'Kymil', 'Kyrenic', 'Kyrtaar', 'Laeroth', 'Lafarallin', 'Lamruil', 'Laosx', 'Larongar', 'Larrel', 'Lashul', 'Lathai', 'Lathlaeril', 'Leojym', 'Lhoris', 'Lianthorn', 'Llarm', 'Llewellenar', 'Llombaerth', 'Lorsan', 'Luirlan', 'Luthais', 'Luvon', 'Lyari', 'Lyklor', 'Lysanthir', 'Maeraddyth', 'Maeral', 'Maiele', 'Malgath', 'Malon', 'Mardeiym', 'Marikoth', 'Marlevaur', 'Melandrach', 'Merellien', 'Merith', 'Methild', 'Mhaenal', "Mi'tilarro", 'Mihangyl', 'Miirphys', 'Mirthal', 'Mlartlar', 'Molonym', 'Molostroi', 'Montagor', 'Morgan', 'Morthil', 'Myrddin', 'Myriil', 'Myrin', 'Mythanthar', 'Naertho', 'Naeryndam', 'Naesala', 'Narbeth', 'Nardual', 'Nasir', 'Navarre', 'Nelaeryn', 'Neldor', 'Nesterin', 'Nevarth', 'Nhamashal', 'Nieven', 'Nindrol', 'Ninleyn', 'Ninthalor', 'Nlossae', 'Nopos', 'Nremyn', 'Nuvian', 'Nylian', 'Nym', 'Nyvorlas', 'Oacenth', 'Oenel', 'Ohmbryn', 'Olaurae', 'Onas', 'Oncith', 'Onvyr', 'Orist', 'Orlpar', 'Orndacil', 'Ornthalas', 'Orrian', 'Orym', 'Oslarelar', 'Otaehryn', 'Othorion', 'Paeral', 'Paeris', 'Pelleas', 'Phaendar', 'Pharom', 'Phraan', 'Pirphal', 'Pleufan', 'Purtham', 'Pyrder', 'Pyrravym', 'Pywaln', 'Qildor', 'Quynn', 'Raeranthur', 'Raibyr', 'Ralikanthae', 'Ralnor', 'Rathal', 'Raunaeril', 'Rauvelore', 'Reluraun', 'Reluvethel', 'Rennyn', 'Reptar', 'Respen', "Rhaac'var", 'Rhalyf', 'Rhangyl', 'Rhistel', 'Rhothomir', 'Rhys', 'Rilitar', 'Riluaneth', 'Rolim', 'Rothilion', 'Ruardh', 'Ruehar', 'Ruith', 'Ruvaen', 'Ruven', 'Ruvyn', 'Rychell', 'Rydel', 'Ryfon', 'Ryo', 'Ryul', 'Saelethil', 'Saevel', 'Saleh', 'Samblar', 'Sandevv', 'Seiveril', 'Selanlar', 'Selgauth', 'Sharian', 'Shaundyl', 'Shihon', 'Shyrrik', 'Siirist', 'Silvyr', 'Simimar', 'Sinaht', 'Skalanis', 'Sontar', 'Sorfildor', 'Sudryl', 'Sundamar', 'Sylvar', 'Symkalr', 'Sythaeryn', 'Taanyth', 'Taegen', 'Taenaran', 'Taeral', 'Taerntym', 'Taleisin', 'Tamnaeuth', 'Tanithil', 'Tannivh', 'Tannyll', 'Tanyl', 'Taranath', 'Tarathiel', 'Taredd', 'Tarron', 'Tasar', 'Tassarion', 'Tathaln', 'Tehlmar', 'Teirist', 'Thalanil', 'Thallan', 'Theodas', 'Theodemar', 'Theoden', 'Theodluin', 'Theodmer', 'Theodmon', 'Theodre', 'Theodred', 'Theoduin', 'Theodwin', 'Thurdan', 'Tiarshus', 'Tinlef', 'Tlannatar', 'Tolthe', 'Tordynnar', 'Toross', 'Traeliorn', 'Travaran', 'Triandal', 'Ualair', 'Uevareth', 'Uldreiyn', 'Urddusk', 'Usunaar', 'Uthorim', 'Vaalyun', 'Vaeril', 'Vamir', 'Vander', 'Vartan', 'Velethuil', 'Venali', 'Vesperr', 'Vesryn', 'Vesstan', 'Virion', 'Volodar', 'Voron', 'Vuduin', 'Vulas', 'Vulen', 'Vulluin', 'Vulmar', 'Vulmer', 'Vulmon', 'Vulre', 'Vulred', 'Vulwin', 'Wistari', 'Wylchyr', 'Wyn', 'Wyninn', 'Wyrran', 'Xalph', 'Xanotter', 'Xhalh', 'Xhalth', 'Xharlion', 'Yalathanil', 'Yeschant', 'Yhendorn', 'Ylyndar', 'Zabbas', 'Zaltarish', 'Zandro', 'Zaor', 'Zaos', 'Zelphar', 'Zeno', 'Zhoron']);
    } else {
      _name = chance.pickone(['Sataleeti', 'Leena', 'Lithoniel', 'Vanya', 'Alasse', 'Zentha', 'Myantha', 'Eloimaya', 'Faraine', 'Kylantha', 'Celaena', 'Aenwyn', 'Maescia', 'Tyrael', 'Shearah', 'Elisven', 'Llorva', 'Nimue', 'Zaleria', 'Aelrue', 'Aelynthi', 'Aerilaya', 'Aerith', 'Ahrendue', 'Ahskahala', 'Aila', 'Alaglossa', 'Alais', 'Alanis', 'Alavara', 'Alea', 'Aleesia', 'Alenia', 'Alerathla', 'Allannia', 'Allisa', 'Alloralla', 'Allynna', 'Almedha', 'Almithara', 'Alvaerele', 'Alyndra', 'Amara', 'Amaranthae', 'Amedee', 'Ameria', 'Amkissra', 'Amlaruil', 'Amnestria', 'Amra', 'Anarzee', 'Aneirin', 'Anhaern', 'Annallee', 'Ara', 'Araushnee', 'Aravae', 'Arcaena', 'Ariawyn', 'Arielimnda', 'Arlayna', 'Arnarra', 'Arryn', 'Arthion', 'Artin', 'Ashera', 'Ashryn', 'Auluua', 'Aurae', 'Ava', 'Axilya', 'Ayda', 'Ayla', 'Azariah', 'Bellaluna', 'Bemere', 'Blythswana', 'Bonnalurie', 'Braerindra', 'Burolia', 'Caeda', 'Caerthynna', 'Calarel', 'Cellica', 'Chaenath', 'Chalia', 'Chalsarda', 'Chandrelle', 'Chasianna', 'Chomylla', 'Cilivren', 'Ciyradyl', 'Claire', 'Cremia', 'Cyithrel', 'Daratrine', 'Darshee', 'Darunia', 'Dasyra', 'Dathlue', 'Delimbiyra', 'Delshandra', 'Dessous', 'Deularla', 'Duilya', 'Duru', 'Eallyrl', 'Ecaeris', 'Edea', 'Edraele', 'Eirika', 'Elanalue', 'Elanil', 'Elasha', 'Elenaril', 'Eletha', 'Elincia', 'Ellarian', 'Elmyra', 'Eloen', 'Elora', 'Elyon', 'Ena', 'Enania', 'Eshenesra', 'Essaerae', 'Esta', 'Esyae', 'Falenas', 'Farryn', 'Faunalyn', 'Fayeth', 'Faylen', 'Fhaertala', 'Fi', 'Fieryat', 'Filaurel', 'Filauria', 'Fildaerae', 'Gaelira', 'Gaerradh', 'Gaylia', 'Gemstarzah', 'Ghilanna', 'Glynnii', 'Gweyr', 'Gwynnestri', 'Gylledha', 'Hacathra', 'Haera', 'Halaema', 'Halanaestra', 'Hamalitia', 'Haramara', 'Helartha', 'Holone', 'Huquethae', 'Hycis', 'Ialantha', 'Ikeshia', 'Ildilyntra', 'Ilmadia', 'Ilsevel', 'Ilyana', 'Ilyrana', 'Ilythyrra', 'Imizael', 'Immianthe', 'Imra', 'Imryll', 'Ioelena', 'Irhaal', 'Isilfarrel', 'Isilynor', 'Itiireae', 'Itylra', 'Iythronel', 'Jastra', 'Jeardra', 'Jhanandra', 'Jhaumrithe', 'Jhiilsraa', 'Kali', 'Kasula', 'Kavrala', 'Kaylessa', 'Kaylin', 'Keenor', 'Keerla', 'Keishara', 'Kenia ', 'Kethryllia', 'Keya', 'Kilyn', 'Kythaela', 'Laamtora', 'Laerdya', 'Lazziar', 'Leilatha', 'Lenna', 'Lensa', 'Lethhonel', 'Lierin', 'Liluth', 'Lixiss', 'Llamryl', 'Lorelei', 'Lura', 'Lusha', 'Lusherina', 'Lyeecia', 'Lyeyeru', 'Lyithion', 'Lymsleia', 'Lyndis', 'Lyra', 'Lyre', 'Maelyrra', 'Maeralya', 'Makaela', 'Malon', 'Malruthiia', 'Mariona', 'Martainn', 'Maylin', 'Meira', 'Melarue', 'Merethyl', 'Merialeth', 'Meriel', 'Merlara', 'Micaiah', 'Mladris', 'Mnuvae', 'Morgwais', 'Moryggan', 'Muerlara', 'Mylaela', 'Mylaerla', 'Myriani', 'Myrrh', 'Nabooru', 'Naesala', 'Naevys', 'Nakiasha', 'Nambra', 'Nanthleene', 'Naumys', 'Nei', 'Nephenee', 'Nexxis', 'Nimronyn', 'Nithenoel', 'Nithroel', 'Nlaea', 'Nuala', 'Nueleth', 'Nuovis', 'Nushala', 'Nylaathria', 'Nyna', 'Ochyllyss', 'Omylia', 'Osonia', 'Penelo', 'Phaerl', 'Phelorna', 'Phuingara', 'Phyrra', 'Pyria', 'Quamara', 'Radelia', 'Raejiisa', 'Raerauntha', 'Rania', 'Ratha', 'Rathiain', 'Renestrae', 'Renna', 'Rina', 'Riniya', 'Rosaria', 'Rosario', 'Roshi', 'Roshia', 'Rubrae', 'Ryllae', 'Salihn', 'Saelihn', 'Saida', 'Sakaala', 'Sana', 'Saria', 'Sariandi', 'Sarya', 'Seirye', 'Seldanna', 'Selphie', 'Selussa', 'Shadowmoon', 'Shalana', 'Shalendra', 'Shalheira', 'Shandalar', 'Shanyrria', 'Sharaera', 'Sharia', 'Sheedra', 'Sheera', 'Shialaevar', 'Shyael', 'Shyilia', 'Shyonia', 'Sinnafain', 'Solana', 'Soliania', 'Soora', 'Sorsasta', 'Sphiel', 'Sumia', 'Susklahava', 'Sylmae', 'Symrustar', 'Syndra', 'Syviis', 'Taenya', 'Taionia', 'Talanashta', 'Talila', 'Talindra', 'Tanelia', 'Tanulia', 'Tarasynora', 'Teharissa', 'Teryani', 'Tethys', 'Thalia', 'Thaola', 'Thasitalia', 'Thessalia', 'Tiatha', 'Tinesia', 'Tiriara', 'Tisharu', 'Tsarra', 'Uiathen', 'Ulelesse', 'Umrielyth', 'Urmicca', 'Uschymna', 'Valindra', 'Vashti', 'Velatha', 'Verrona', 'Vestele', 'Viansola', 'Viessa', 'Wynnter', 'Yaereene', 'Yalanilue', 'Yathlanae', 'Ygrainne', 'Ynshael', 'Yrlissa', 'Yrneha', 'Yrthraethra', 'Ysmyrlda', 'Yulmanda', 'Yunalesca', 'Zilyana', 'Zoastria', 'Vaeri']);
    }
  } else if (race == 'Halfling') {
    // Bonus +2 Ini
    // Bonus -1 AC

    base_ac -= 1;
    base_init += 2;

    _class = chance.pickone(['Rogue', 'Bard', 'Fighter']);
    if (genere == 'Male') {
      _name = chance.pickone(['Elver', 'Tardal', 'Janemin', 'Yarkas', 'Pimdal', 'Garkin', 'Garster', 'Finorin', 'Davkin', 'Newan', 'Falgin',
        'Tedak', 'Condal', 'Wenwrick', 'Ulzin', 'Panamin', 'Panwrick', 'Ricfire', 'Davlos', 'Zenwan', 'Ulbin', 'Teorin', 'Ulrin']);
    } else {
      _name = chance.pickone(['Yoleigh', 'Trynlienne', 'Odini', 'Gelkis', 'Zenola', 'Yeslienne', 'Darsys', 'Qufira', 'Yeslyse', 'Xifira',
        'Eraora', 'Xiwyn', 'Mareni', 'Neelle', 'Wilie', 'Beltrix', 'Thamvira', 'Calzira', 'Xieni', 'Qiphina']);
    }
  } else if (race == 'Human') {
    base_hearts += 1;

    _class = chance.pickone(['Barbarian', 'Paladin', 'Mage', 'Fighter']);
    if (genere == 'Male') {
      _name = chance.pickone(['Aalart', 'Aalot', 'Abel', 'Abelot', 'Aberardus', 'Acelin', 'Acot', 'Acur', 'Adam', 'Adame', 'Addie', 'Addy', 'Ade', 'Adeite', 'Adekin', 'Adelard', 'Adelardus', 'Ademar', 'Adenot', 'Adequin', 'Aderlard', 'Adhemar', 'Adie', 'Adinet', 'Adkin', 'Adlard', 'Adri', 'Aimeri', 'Aimeriguet', 'Aimery', 'Aitken', 'Alain', 'Alainon', 'Alan', 'Alane', 'Alanus', 'Alard', 'Alart', 'Alcock', 'Aldis', 'Aldo', 'Aldous', 'Aldus', 'Alein', 'Aleyn', 'Aleyne', 'Alfan', 'Alfonce', 'Allan', 'Allen', 'Alleyn', 'Almeric', 'Almericus', 'Alphonse', 'Alphonsins', 'Alphonsus', 'Althalos', 'Amaud', 'Amauri', 'Amaurri', 'Amaury', 'Amer', 'Americ', 'Americus', 'Amery', 'Amfrid', 'Amfridus', 'Ancel', 'Ancelin', 'Ancelm', 'Ancelmus', 'Ancelot', 'Anchier', 'Anderewe', 'Andreas', 'Andreu', 'Andrew', 'Andri', 'Andriet', 'Andrion', 'Andriu', 'Androu', 'Androuet', 'Andruche', 'Andry', 'Andryr', 'Anfroi', 'Anfroy', 'Anscoul', 'Anselet', 'Ansell', 'Ansellus', 'Anselm', 'Anselme', 'Anselmet', 'Anselmus', 'Ansfrid', 'Ansfroi', 'Ansger', 'Ansgot', 'Ansiau', 'Ansout', 'Ansure', 'Armand', 'Armant', 'Armin', 'Armine', 'Arminel', 'Armundus', 'Arnald', 'Arnaldus', 'Arnaud', 'Arnaut', 'Arnet', 'Arnold', 'Arnoldus', 'Arnott', 'Arnould', 'Arter', 'Arther', 'Artheur', 'Arthur', 'Arthurius', 'Arthurus', 'Artor', 'Artos', 'Artur', 'Arturus', 'Artus', 'Asce', 'Ascelin', 'Ascelyn', 'Asher', 'Asselin', 'Athelard', 'Athelardus', 'Atkin', 'Audemar', 'Audouin', 'Audri', 'Audry', 'Auguinare', 'Aunger', 'Aunsellus', 'Aurri', 'Ausout', 'Averardus', 'Averet', 'Averitt', 'Aylard', 'Aymer', 'Aymeri', 'Aymon', 'Azelinus', 'Azemar', 'Azer', 'Azorius', 'Azur', 'Badcock', 'Balan', 'Balian', 'Balin', 'Barat', 'Barda', 'Bardol', 'Bardolf', 'Bardolph', 'Bardolphus', 'Bardulphus', 'Baret', 'Barnabas', 'Barnabe', 'Barnaby', 'Barnard', 'Barnet', 'Barret', 'Barrett', 'Bart', 'Bartel', 'Bartelemi', 'Bartelmeu', 'Bartelot', 'Bartholomeus', 'Bartholomew', 'Bartle', 'Bartlet', 'Bartly', 'Bartolomeus', 'Bartram', 'Bartrem', 'Barty', 'Basequin', 'Basewin', 'Basuin', 'Bat', 'Batcock', 'Batkin', 'Batsuen', 'Batty', 'Bausan', 'Bayard', 'Baynard', 'Beavis', 'Belin', 'Benedict', 'Beneger', 'Benger', 'Berengar', 'Berengarius', 'Berenger', 'Berengerius', 'Berengerus', 'Berengier', 'Beri', 'Beringer', 'Berinon', 'Bernar', 'Bernard', 'Bernardus', 'Bernart', 'Bernier', 'Berold', 'Beroldus', 'Berolt', 'Bert', 'Bertaut', 'Bertelemi', 'Bertelemy', 'Bertelot', 'Berteram', 'Berthellemy', 'Bertie', 'Bertin', 'Bertol', 'Bertram', 'Bertramus', 'Bertran', 'Bertrand', 'Bertrannus', 'Bertrant', 'Bertylmew', 'Betan', 'Betin', 'Betyn', 'Beuves', 'Beves', 'Bevis', 'Blaive', 'Blavier', 'Blayves', 'Bob', 'Bobbie', 'Bobby', 'Bobs', 'Borin', 'Botolf', 'Botolfe', 'Botolph', 'Botulf', 'Brian', 'Brianus', 'Brice', 'Bricet', 'Briceus', 'Bricot', 'Brien', 'Brienus', 'Britius', 'Brom', 'Bruiant', 'Bryan', 'Bryant', 'Bryce', 'Carac', 'Carle', 'Cassius', 'Cedric', 'Challes', 'Charle', 'Charles', 'Charlet', 'Charlot', 'Charlys', 'Christian', 'Christie', 'Christofarus', 'Christofle', 'Christofre', 'Christofur', 'Christopher', 'Christopherus', 'Christouer', 'Christy', 'Clarembaut', 'Clarenbald', 'Clerebald', 'Clerebold', 'Clerenbald', 'Clifton', 'Col', 'Colart', 'Cole', 'Colet', 'Colin', 'Colinet', 'Colinus', 'Collett', 'Colley', 'Colyne', 'Conan', 'Conandus', 'Conanus', 'Conayn', 'Conon', 'Conrad', 'Conradin', 'Courtois', 'Crestiennet', 'Cristal', 'Cristall', 'Cristoffle', 'Cristoforus', 'Cristofre', 'Cristole', 'Crystall', 'Crysteffor', 'Crystoll', 'Curteis', 'Curtis', 'Dafydd', 'Dain', 'Dandi', 'Dandy', 'Dane', 'Daniau', 'Daniel', 'Dannet', 'Danyau', 'Danyel', 'Danyell', 'Danyll', 'Daue', 'Dauid', 'Dave', 'Davi', 'David', 'Davie', 'Davit', 'Davy', 'Daw', 'Dawkin', 'Dederic', 'Dederick', 'Dedericus', 'Degarre', 'Degore', 'Derek', 'Derric', 'Derrick', 'Deryk', 'Destrian', 'Diccon', 'Dick', 'Dicken', 'Dickie', 'Dickon', 'Dickory', 'Dicky', 'Diggin', 'Diggory', 'Digory', 'Dob', 'Dobbin', 'Dodd', 'Dodge', 'Donald', 'Donaldus', 'Doneuuald', 'Doran', 'Dowd', 'Drake', 'Drest', 'Dreu', 'Dreue', 'Dreues', 'Drew', 'Drewett', 'Droart', 'Droet', 'Drogo', 'Drouet', 'Droyn', 'Dru', 'Drue', 'Druet', 'Druettus', 'Drugo', 'Drust', 'Drystan', 'Dump', 'Dumphey', 'Dumphry', 'Dumpty', 'Dyryke', 'Ebrardus', 'Eden', 'Edmund', 'Edon', 'Edun', 'Elias', 'Elies', 'Eliot', 'Elis', 'Eluard', 'Elyas', 'Elye', 'Elyes', 'Elyot', 'Elys', 'Emaurri', 'Emeric', 'Emerick', 'Emericus', 'Emery', 'Emory', 'Engeram', 'Engeramus', 'Engerramet', 'Engerran', 'Engerrand', 'Enguerran', 'Enguerrand', 'Enjorran', 'Enjorren', 'Erart', 'Ernald', 'Ernaldus', 'Ernaut', 'Erneis', 'Ernis', 'Ernest', 'Ernisius', 'Ernold', 'Ernoldus', 'Ernoul', 'Ernoulet', 'Ernoullet', '', 'Estevenot', 'Estevot', 'Eude', 'Eudes', 'Eudo', 'Eudon', 'Euvrouin', 'Evenon', 'Everard', 'Everardus', 'Evrardin', 'Evrart', 'Evrat', 'Evrouin', 'Fairman', 'Faramond', 'Fareman', 'Faremanne', 'Farman', 'Farmanus', 'Farrimond', 'Fauques', 'Favian', 'Fawkes', 'Federic', 'Federyc', 'Fendrel', 'Ferand', 'Ferant', 'Ferentus', 'Ferrand', 'Ferrant', 'Ferri', 'Ferry', 'Fery', 'Filbert', 'Folc', 'Folcard', 'Folke', 'Folkes', 'Forthwind', 'Foucaud', 'Foucaut', 'Foucher', 'Fouchier', 'Foulk', 'Foulque', 'Foulqueret', 'Fouquaut', 'Fouque', 'Fouques', 'Fouquet', 'Fowke', 'Francis', 'Franco', 'Francus', 'Frank', 'Franque', 'Franquet', 'Fraunk', 'Frederic', 'Frederick', 'Fredericus', 'Frery', 'Frideric', 'Fulbert', 'Fulbertus', 'Fulchard', 'Fulcher', 'Fulco', 'Fulk', 'Fulke', 'Fulko', 'Gabel', 'Gabell', 'Gabriel', 'Gabrien', 'Gabryell', 'Gaiallard', 'Gaillard', 'Gaillart', 'Gale', 'Galeran', 'Galeren', 'Gales', 'Galfridus', 'Galien', 'Gallien', 'Galot', 'Galter', 'Galterius', 'Garin', 'Garit', 'Garner', 'Garnet', 'Garnier', 'Garnot', 'Garnotin', 'Garrat', 'Garratt', 'Garrett', 'Gaufridus', 'Gaufroi', 'Gauteron', 'Gautier', 'Gautzelin', 'Gauvain', 'Gavienus', 'Gavin', 'Gavinus', 'Gawain', 'Gawayne', 'Gawen', 'Gawin', 'Gawn', 'Gawne', 'Gawter', 'Gawyn', 'Gawyne', 'Gaylord', 'Geffery', 'Geffrai', 'Geffray', 'Geffrei', 'Geffrey', 'Geffroi', 'Gefroi', 'Gefroy', 'Gemmes', 'Geoff', 'Geoffrey', 'Geoffroi', 'Geofridus', 'Ger', 'Geraint', 'Gerald', 'Geraldus', 'Gerard', 'Gerardus', 'Gerbald', 'Gerbaut', 'Gerbert', 'Gerbertus', 'Gerbod', 'Gerbold', 'Gerboud', 'Gereminus', 'Gerente', 'Gerfast', 'Gernier', 'Geroldin', 'Geroldus', 'Gerolt', 'Geronim', 'Geronimus', 'Gerontius', 'Gerould', 'Gerrart', 'Geruntius', 'Gervais', 'Gervaise', 'Gervas', 'Gervase', 'Gervasius', 'Gervassius', 'Gerves', 'Gervese', 'Gervesin', 'Gervesot', 'Gervis', 'Geubert', 'Geuffroi', 'Geve', 'Gib', 'Gibbon', 'Gibby', 'Gieffrinnet', 'Gifardus', 'Gifartus', 'Giff', 'Giffard', 'Gifford', 'Gil', 'Gilberd', 'Gilbert', 'Gilbertus', 'Gilebert', 'Gilebertus', 'Gilebin', 'Gilibertus', 'Gill', 'Gillebertus', 'Gillet', 'Gilliame', 'Gillotin', 'Gilmyn', 'Gilow', 'Gilpin', 'Gipp', 'Giradin', 'Giraldus', 'Girard', 'Girardus', 'Girart', 'Giraud', 'Giraudus', 'Giraut', 'Giroldus', 'Girout', 'Gislebertus', 'Gobert', 'Goce', 'Gocelinus', 'Godafre', 'Godbert', 'Godebert', 'Godefray', 'Godefridus', 'Godefroi', 'Godefroy', 'Godefry', 'Godelot', 'Godet', 'Godfery', 'Godfree', 'Godfreed', 'Godfrey', 'Godfry', 'Goffridus', 'Goin', 'Goisfrid', 'Goisfridus', 'Goscelin', 'Goscelinus', 'Gosfridus', 'Goubert', 'Gozelinus', 'Gregory', 'Gualter', 'Gualterius', 'Gualtier', 'Guarin', 'Guarinet', 'Guarinus', 'Guarnier', 'Guerart', 'Guerin', 'Guerinnet', 'Guernier', 'Guernon', 'Guernot', 'Gui', 'Guiart', 'Guibe', 'Guibert', 'Guibour', 'Guido', 'Guilhem', 'Guilielm', 'Guillame', 'Guillaume', 'Guille', 'Guillelmus', 'Guillemaque', 'Guillemet', 'Guillemin', 'Guillemot', 'Guillot', 'Guillotin', 'Guimar', 'Guimart', 'Guimer', 'Guimond', 'Guinemar', 'Guiot', 'Guiraud', 'Guiraudet', 'Guiscard', 'Guischard', 'Guntard', 'Gunter', 'Gunterius', 'Guy', 'Guyat', 'Guymar', 'Guyon', 'Gwalter', 'Gwatkin', 'Gwychardus', 'Gwydo', 'Gy', 'Gyffard', 'Gylaw', 'Gylbard', 'Gylbarde', 'Gylbart', 'Gyrard', 'HÃ©ly', 'Hab', 'Hadrian', 'Haganrich', 'Haimmon', 'Hal', 'Ham', 'Hamelen', 'Hamelin', 'Hameline', 'Hamelot', 'Hamen', 'Hamett', 'Hamlet', 'Hamlin', 'Hamlyn', 'Hammond', 'Hamnet', 'Hamo', 'Hamon', 'Hamond', 'Hamonet', 'Hamund', 'Han', 'Hancock', 'Hanecock', 'Hanekin', 'Hanequin', 'Hank', 'Hankin', 'Hann', 'Hanry', 'Hardegin', 'Hardi', 'Harding', 'Hardouin', 'Harduinus', 'Hardwin', 'Harman', 'Harry', 'HarveyBreton', 'Hary', 'Haveron', 'Hawkin', 'Haymo', 'Heimart', 'Heimeri', 'Heimon', 'Helain', 'Helias', 'Helie', 'Helies', 'Helyas', 'Helyes', 'Helyot', 'Hemarc', 'Hemart', 'Hemeri', 'Hemmet', 'Hemon', 'Hemonnet', 'Hendereye', 'Hendry', 'Henfrey', 'Henricus', 'Henriet', 'Henriot', 'Henry', 'HenryHaimirich', 'Heriot', 'Herman', 'Hermannus', 'Hermenion', 'Herment', 'Hernais', 'Hernays', 'Herriot', 'Herry', 'Herve', 'Herveus', 'Hervey', 'Hervi', 'Herviet', 'Hervoet', 'Hervouet', 'Hervy', 'Heudebrand', 'Hew', 'Heward', 'Hewe', 'Hewelet', 'Hewelin', 'Hewerald', 'Hewet', 'Hewlett', 'Heymeri', 'Heymon', 'Hick', 'Hicket', 'Hickie', 'Higg', 'Hildebrand', 'Hildebrandus', 'Hildebrant', 'Hildebrondus', 'Hitch', 'Hitchcock', 'Hob', 'Hobard', 'Hobb', 'Hobbie', 'Hodge', 'Hodgkin', 'Holger', 'Honfroi', 'Hotch', 'Hotys', 'Houdart', 'Houdeet', 'Houdin', 'Houdoin', 'Houdouyn', 'How', 'Howard', 'Howkin', 'Hubard', 'Hubelet', 'Hubert', 'Hubertus', 'Hubie', 'Huchon', 'Hud', 'Hudd', 'Hudde', 'Hue', 'Huelin', 'Huet', 'Huffie', 'Hugelin', 'Huget', 'Hugethun', 'Huggett', 'Huggin', 'Hugh', 'Hughoc', 'Hugin', 'Hugline', 'Hugo', 'Hugolinus', 'Hugon', 'Huguard', 'Hugubert', 'Hugue', 'Huguenin', 'Hugues', 'Huguet', 'Huidemar', 'Humfery', 'Humfredus', 'Humfrey', 'Humfridus', 'Humfrye', 'Humph', 'Humpherus', 'Humphery', 'Humphrey', 'Humpty', 'Hunfray', 'Hunfridus', 'Huon', 'Hurrey', 'Hutch', 'Hutchin', 'Iame', 'Iames', 'Iamys', 'Iemes', 'Ihon', 'Ihone', 'Ilberd', 'Ilbert', 'Ilbertus', 'Imbart', 'Imbert', 'Imbertus', 'Imgelramus', 'Ingelram', 'Ingelramnus', 'Ingelrandus', 'Ingelrannus', 'Ingeram', 'Ingerame', 'Ingraham', 'Ingram', 'Ingramus', 'Ingran', 'Ingrannus', 'Ioco', 'Iohannes', 'Iohn', 'Iohne', 'Iordanus', 'Isaac', 'Isac', 'Isake', 'Isambard', 'Isembard', 'Isembart', 'Isemberd', 'Isembert', 'Isenbardus', 'Ive', 'Ives', 'Ivo', 'Ivon', 'Ivone', 'Ivote', 'Izaak', 'Jack', 'Jacke', 'Jackie', 'Jacky', 'Jacob', 'Jacobus', 'Jacominus', 'Jacomus', 'Jacomynus', 'Jacquelin', 'Jacquemin', 'Jacques', 'Jak', 'Jake', 'Jakke', 'Jame', 'James', 'Jamettus', 'Jamys', 'Jan', 'Janequin', 'Jankin', 'Janot', 'Janshai', 'Janyn', 'Jaque', 'Jaquemart', 'Jaquemin', 'Jaquemon', 'Jaques', 'Jaquet', 'Jarin', 'Jarvis', 'Jasce', 'Jaspar', 'Jasper', 'Jeacock', 'Jeames', 'Jeanin', 'Jed', 'Jeff', 'Jeffcock', 'Jeffery', 'Jeffroy', 'Jeffry', 'Jehan', 'Jehanel', 'Jehannequin', 'Jehannin', 'Jehannot', 'Jehanson', 'Jehen', 'Jem', 'Jemmy', 'Jenkin', 'Jep', 'Jeph', 'Jeremiah', 'Jeremias', 'Jeremimum', 'Jereminum', 'Jeremy', 'Jermyn', 'Jerome', 'Jeronim', 'Jeronimus', 'Jervis', 'Jesper', 'Jessop', 'Jewell', 'Joachim', 'Joachin', 'Job', 'Jobba', 'Joce', 'Jocelin', 'Jocelyn', 'Jocet', 'Joceus', 'Jock', 'Jodocus', 'Joe', 'Joel', 'Joffridus', 'Johannes', 'John', 'JohnCromwell', 'Jon', 'Jop', 'Joppa', 'Jordan', 'Jordanus', 'Josce', 'Joscelin', 'Joscelyn', 'Josclyn', 'Josef', 'Josep', 'Joseph', 'Joses', 'Joss', 'Josse', 'Josson', 'Jourdain', 'Jowell', 'Joyce', 'Judd', 'Juel', 'Juhel', 'Jupp', 'Jurdan', 'Jurdanus', 'Jurdi', 'Karles', 'Karolus', 'Kester', 'Kit', 'Kitt', 'Lambard', 'Lambekin', 'Lambelin', 'Lambequin', 'Lambert', 'Lambertus', 'Lambin', 'Lambkin', 'LanceLanzo', 'Lancelet', 'Lancelin', 'Lancelot', 'Lancelyn', 'Lanslet', 'Launce', 'Launceletus', 'Launcelot', 'Launselot', 'Leo', 'Leofrick', 'Letholdus', 'Lewis', 'Lief', 'Ligart', 'Ligier', 'Lijart', 'Lodewicus', 'Looys', 'Louis', 'Louve', 'Louvel', 'Love', 'Lovel', 'Lovell', 'Lovet', 'Lowis', 'Loys', 'Loyset', 'Ludovicus', 'Mace', 'Macey', 'Mainard', 'Mainardus', 'Mainfridus', 'Mainfroi', 'Malcolinus', 'Malcolm', 'Malcolum', 'Malculinus', 'Malculms', 'Malculmus', 'Malgerius', 'Manard', 'Manfred', 'Margre', 'Marmaduc', 'Marmaducus', 'Marmaduke', 'Marmedoke', 'Maucolyn', 'Mauger', 'Maugier', 'Maugre', 'Maukolum', 'Maynard', 'Melcher', 'Melchior', 'Melmidoc', 'Merek', 'Mermadak', 'Mial', 'Micahel', 'Michael', 'Michel', 'Michelet', 'Michell', 'Michiel', 'Miel', 'Mighel', 'Mighell', 'Mihel', 'Mihill', 'Mikael', 'Mile', 'Miles', 'Milet', 'Milo', 'Milon', 'Milot', 'Moise', 'Moses', 'Moss', 'Mosse', 'Mosseus', 'Mousse', 'Moyse', 'Moyses', 'Myghchaell', 'Myghell', 'Myles', 'Nab', 'Neal', 'Neale', 'Neel', 'Neil', 'Nel', 'Nele', 'Nell', 'Niall', 'Nib', 'Nichol', 'Nicholas', 'Nicholaus', 'Nichole', 'Nick', 'Nicky', 'Nicol', 'Nicolas', 'Nicolaus', 'Nicolet', 'Nicolin', 'Niel', 'Nigel', 'Nigelle', 'Nigellus', 'Nigs', 'Noah', 'Nob', 'Noe', 'Noes', 'Norman', 'Normand', 'Normann', 'Normannus', 'Noy', 'Nycolas', 'Nygell', 'Odde', 'Oddo', 'Ode', 'Odger', 'Odibrand', 'Odinel', 'Odo', 'Odouart', 'Oenus', 'Oger', 'Ogerius', 'Oggery', 'Ogier', 'Onfroi', 'Onuphrius', 'Otebon', 'Otelin', 'Otes', 'Othes', 'Otho', 'Otis', 'Otois', 'Oton', 'Ottie', 'Otto', 'Oudart', 'Oudet', 'Oudin', 'Oudinet', 'Oudinnet', 'Ouein', 'Ouen', 'Ouin', 'Oure', 'Ourri', 'Owain', 'Owayne', 'Owen', 'Oweyn', 'Owin', 'Owine', 'Owini', 'Owun', 'Owyne', 'Parsefal', 'Parzifal', 'Paul', 'Paule', 'Paulin', 'Paulinus', 'Pawelinus', 'Pawlin', 'Peares', 'Pearse', 'Peirce', 'Perceval', 'Percevale', 'Percheval', 'Percival', 'Percivale', 'Percyvallus', 'Percyvell', 'Pereret', 'Peres', 'Perez', 'Perinnet', 'Perote', 'Perrin', 'Perrot', 'Pers', 'Persefall', 'Persivell', 'Peter', 'Peterkin', 'Petrus', 'Petur', 'Petyr', 'Peyton', 'Phareman', 'Philbert', 'Philibert', 'Pierce', 'Pierres', 'Pierrot', 'Piers', 'Powel', 'Powle', 'Quinn', 'Raaf', 'Rab', 'Rabbie', 'Radolf', 'Radulf', 'Radulfus', 'Rafe', 'Raff', 'Ragenald', 'Raignald', 'Raiimond', 'Raimbaud', 'Raimbaut', 'Raimond', 'Raimund', 'Raimundus', 'Rainald', 'Rainaldus', 'Rainard', 'Rainerius', 'Rainerus', 'Rainier', 'Ralf', 'Ralphwolf', 'Ran', 'Ranald', 'Rand', 'Randal', 'Randall', 'Randle', 'Randolph', 'Randoul', 'Randulfus', 'Randull', 'Randy', 'Rankin', 'Rannulf', 'Rannulfus', 'Ranulf', 'Ranulfus', 'Ranulph', 'Ranulphus', 'Raolet', 'Raolin', 'Raollet', 'Raollin', 'Raoul', 'Raoulet', 'Raoulin', 'Rauf', 'Rauffe', 'Raulf', 'Raullin', 'Raulyn', 'Rawkin', 'Rawlin', 'Raymond', 'Raymundus', 'Raynaldus', 'Rayner', 'Raynerus', 'Raynoldus', 'Reginald', 'Reginalde', 'Reginaldus', 'Regnier', 'Reignald', 'Reignolde', 'Reimfred', 'Reimond', 'Reimund', 'Reinald', 'Reinfred', 'Reinfrid', 'Reinfridus', 'Reinhold', 'Reinold', 'Reinoldus', 'Remfrey', 'Remi', 'Remon', 'Remondin', 'Remonnet', 'Remont', 'Remy', 'Renard', 'Renart', 'Renaud', 'Renaudin', 'Renaut', 'Renfred', 'Renfry', 'Renier', 'Renodet', 'Renoldus', 'Renouart', 'Renout', 'Rex', 'Reymnd', 'Reynald', 'Reynard', 'Reynaud', 'Reyner', 'Reynfred', 'Reynfrey', 'Reynold', 'Reynoldus', 'Ricard', 'Ricardus', 'Ricaud', 'Rich', 'Richal', 'Richard', 'RichardRicher', 'Richarde', 'Richardin', 'Richardus', 'Richart', 'Richemanus', 'Richeut', 'Richie', 'Richier', 'Rick', 'Ricket', 'Ricon', 'Rique', 'Riquebourc', 'Riquier', 'Rob', 'Robard', 'Robbie', 'Rober', 'Robert', 'Robertus', 'Robin', 'Robinet', 'Robion', 'Robyn', 'Rodbertus', 'Roger', 'Rogerin', 'Rogerius', 'Rogerus', 'Roget', 'Rogier', 'Roguelin', 'Roland', 'Rolandus', 'Rolant', 'Roley', 'Rolf', 'Rolfe', 'Rolft', 'Rolland', 'Rollant', 'Rollin', 'Rollo', 'Rolph', 'Ronald', 'Rotbert', 'Rotbertus', 'Rotgerius', 'Rouland', 'Roulant', 'Roule', 'Roulf', 'Rowan', 'Rowland', 'Rowley', 'Rulf', 'Rychard', 'Rycharde', 'Sadon', 'Saer', 'Saerus', 'Sagar', 'Sagard', 'Sagarus', 'Salaman', 'Salamon', 'Salemon', 'Salmon', 'Sam', 'Samm', 'Sampson', 'Samson', 'Sanse', 'Sanses', 'Sanson', 'Sansonnet', 'Sansum', 'Saunsum', 'Sayer', 'Searl', 'Searle', 'Seemannus', 'Segar', 'Segarus', 'Selle', 'Selles', 'Serell', 'Seri', 'Serill', 'Serle', 'Serlo', 'Serlon', 'Serrell', 'Serrill', 'Sewal', 'Sewale', 'Sewallus', 'Sewell', 'Sim', 'Simcock', 'Simkin', 'Simmond', 'Simon', 'Simond', 'Simonnet', 'Simpkin', 'Solomon', 'Stefanus', 'Sten', 'Stephanus', 'Stephen', 'Steuan', 'Stevyn', 'Sym', 'Symkyn', 'Symme', 'Symon', 'Symond', 'Symonet', 'Symonnet', 'Symounde', 'Taff', 'Taffy', 'Talbot', 'Talebot', 'Tam', 'Tamas', 'Tammie', 'Tancard', 'Tancock', 'Tancred', 'Tandy', 'Tankard', 'Tebald', 'Tebaud', 'Tebbe', 'Tedbaldus', 'Tedric', 'Teebald', 'Teodbald', 'Teodric', 'Tericius', 'Terric', 'Terrick', 'Terricus', 'Terrin', 'Terrowin', 'Terry', 'Terryn', 'Tetbald', 'Thancred', 'Thebaldus', 'Theobald', 'Theobaldus', 'Theodoric', 'Theodric', 'Thibaud', 'Thiebaut', 'Thierri', 'Thierry', 'Thim', 'Tholy', 'Thom', 'Thoma', 'Thomas', 'Thomasin', 'Thomasinus', 'Thomass', 'Thomassin', 'Thome', 'Thomelin', 'Thomlin', 'Thomme', 'Thoumas', 'Thoumassin', 'Thybaudin', 'Thybaut', 'Tib', 'Tibald', 'Tibaut', 'Tibbott', 'Tibost', 'Tibout', 'Tiebaut', 'Tierri', 'Tim', 'Timm', 'Tobey', 'Tobias', 'Tobin', 'Toby', 'Tobye', 'Tobyn', 'Tolly', 'Toly', 'Tom', 'Tomas', 'Tomkin', 'Tommie', 'Tommy', 'Topaz', 'Topher', 'Tristan', 'Tristian', 'Triston', 'Tristram', 'Trustram', 'Trystrem', 'Tuyon', 'Tybalt', 'Tybaut', 'Tybost', 'Tybout', 'Tyon', 'Udo', 'Udona', 'Ulric', 'Umfray', 'Umfrey', 'Umfridus', 'Umphrey', 'Uranius', 'Urian', 'Urianus', 'Urien', 'Uryene', 'Uwen', 'Valter', 'Vasey', 'Vauquelin', 'Viliame', 'Vilihame', 'Villiame', 'Vvillequin', 'Walchelim', 'Walchelin', 'Walcher', 'Walganus', 'Walkelin', 'Walkelinus', 'Wally', 'Walt', 'Walter', 'Walterius', 'Walterus', 'Warin', 'Wariner', 'Warinus', 'Warner', 'Warnerius', 'Warnerus', 'Warren', 'Warrenus', 'Wat', 'Water', 'Watkin', 'Watkyn', 'Watt', 'Wattie', 'Watty', 'Wauter', 'Wichard', 'Wido', 'Wilcock', 'Wilecoc', 'Wiliam', 'Wiliame', 'Wilkie', 'Wilkin', 'Will', 'Willcock', 'Willelm', 'Willelmus', 'Willet', 'William', 'Williame', 'Willie', 'Willmot', 'Wilmot', 'Wimarc', 'Wimark', 'Wiscar', 'Wiscard', 'Wischard', 'Wisgarus', 'Wy', 'Wyat', 'Wyliame', 'Wylymot', 'Wyman', 'Wymar', 'Wymarc', 'Wymare', 'Wymark', 'Wymer', 'Wymerus', 'Wymon', 'Wymond', 'Wymund', 'Wyon', 'Wyschardus', 'Xalvador', 'Ymbert', 'Yngerame', 'Yon', 'Ysaac', 'Ysac', 'Ysembert', 'Yvain', 'Yve', 'Yves', 'Yvet', 'Yvon', 'Yvone', 'Yvonnet', 'Yvonus', 'Ywain', 'Zane']);
    } else {
      _name = chance.pickone(['Aales', 'Aalez', 'Aalina', 'Aaline', 'Aalis', 'Aaliz', 'Aanor', 'Acelina', 'Ada', 'Adaleide', 'Ade', 'Adela', 'Adelaide', 'Adelais', 'Adelena', 'Adelicia', 'Adelie', 'Adelin', 'Adelina', 'Adeline', 'Adelisa', 'Adeliz', 'Adeliza', 'Adelysia', 'Adete', 'Adhelina', 'Aeleis', 'Aelesia', 'Aelienor', 'Aelina', 'Aelis', 'Aelisia', 'Aelizia', 'Aenor', 'Aeschine', 'Afra', 'Agnes', 'Ahelis', 'Ahelissa', 'Ala', 'Alais', 'Albray', 'Albreda', 'Albree', 'Aleida', 'Aleneite', 'Alesia', 'Alesone', 'Alexia', 'Alia', 'Alianor', 'Alianora', 'Alice', 'Alicen', 'Alicia', 'Alienor', 'Alienora', 'Alina', 'Aline', 'Alis', 'Alisceon', 'Alise', 'Alison', 'Alisone', 'Alisoun', 'Aliss', 'Aliz', 'Allie', 'Allison', 'Alot', 'Alote', 'Alse', 'Alson', 'Alycie', 'Alyna', 'Alyon', 'Alys', 'Alyson', 'Alysone', 'Amalone', 'Amelia', 'Amelina', 'Ameline', 'Amelinne', 'Amelot', 'Amelyn', 'Ammij', 'Ammio', 'Ammy', 'Anachorita', 'Anastas', 'Anchoret', 'Anchoretta', 'Ancret', 'Ancreta', 'Ancrett', 'Angaret', 'Angmar', 'Anilla', 'Ankerita', 'Ankharet', 'Ann', 'Anna', 'Anne', 'Annet', 'Annie', 'Annot', 'Annote', 'Anny', 'Anot', 'Anote', 'Aphra', 'Aphrah', 'Arabella', 'Ariana', 'Arlette', 'Ascelina', 'Asceline', 'Ascelinne', 'Ascelot', 'Ascilia', 'Asselyna', 'Atheena', 'Athelesia', 'Atheleys', 'Athelina', 'Athelis', 'Athelisa', 'Athelisia', 'Athelyna', 'Auberee', 'Aubourc', 'Aubreda', 'Aubrey', 'Auelin', 'Auelina', 'Auelyna', 'Auic', 'Auice', 'Auicia', 'Auisia', 'Auizia', 'Auphrey', 'Auriol', 'Aveis', 'Avelina', 'Aveline', 'Avelot', 'Avelyn', 'Averil', 'Avice', 'Avicia', 'Avila', 'Avilina', 'Avin', 'Avina', 'Avis', 'Ayfara', 'Ayleth', 'BÃ¨le', 'Barsabe', 'Bathia', 'Bathsheba', 'Bathshua', 'Beatrice', 'Beatrix', 'Bela', 'Bele', 'Beleite', 'Belet', 'Bella', 'Belle', 'Belon', 'Belot', 'Belsant', 'Belsante', 'Berengaria', 'Berengiere', 'Bersaba', 'Bess', 'Besse', 'Besseta', 'Bessie', 'Bessy', 'Bet', 'Beth', 'Betha', 'Bethan', 'Bethia', 'Betsy', 'Betta', 'Bette', 'Betty', 'Bibbey', 'Bibby', 'Bibel', 'Bibele', 'Bible', 'Biby', 'Biddy', 'Bithiah', 'Bragwayn', 'Brangwayna', 'Brangwine', 'Branwyne', 'Braya', 'Bride', 'Bridget', 'Brigette', 'Brigida', 'Brigit', 'Brigitta', 'Brunhild', 'Bryde', 'Catherine', 'Catrain', 'Cecily', 'Cedany', 'Chrestienne', 'Christaire', 'Christian', 'Christiana', 'Christiania', 'Christin', 'Christina', 'Claramunda', 'Claremonde', 'Clarimond', 'Cleremunda', 'Crestienne', 'Crisly', 'Crislye', 'Cristan', 'Cristeane', 'Cristene', 'Cristian', 'Cristiana', 'Cristiane', 'Cristina', 'Cristine', 'Cristinia', 'Cristy', 'Crystina', 'Dimia', 'Duraina', 'Ebbot', 'Ebeta', 'Ebett', 'Ebota', 'Edelin', 'Edelina', 'Edeline', 'Edelinne', 'Edolina', 'Egelina', 'Ela', 'Eleanor', 'Eleanora', 'Elewisa', 'Elewys', 'Elezabeth', 'Elia', 'Elianor', 'Elianora', 'Elicia', 'Elinor', 'Elinora', 'Elisa', 'Elise', 'Elison', 'Elisot', 'Elisota', 'Eliza', 'Elizabet', 'Elizabeth', 'Elizabetha', 'Elizabethe', 'Elizabetht', 'Elizabez', 'Elizey', 'Elizibeth', 'Elizibetht', 'Ella', 'Ellenor', 'Ellice', 'Ellyn', 'Eloisa', 'Eloise', 'Elsa', 'Elsie', 'Elspat', 'Elspet', 'Eluned', 'Elwisia', 'Elyenora', 'Elysabeth', 'Elysande', 'Elysant', 'Elyscia', 'Elyzabeth', 'Ema', 'Emayn', 'Emblem', 'Emblema', 'Emblen', 'Emblin', 'Emblyn', 'Emelenine', 'Emelin', 'Emelina', 'Emeline', 'Emelisse', 'Emelnie', 'Emelot', 'Emelote', 'Emeloth', 'Emelyn', 'Emelyne', 'Emeny', 'Emlin', 'Emlyn', 'Emm', 'Emma', 'Emme', 'Emmelina', 'Emmeline', 'Emmet', 'Emmete', 'Emmony', 'Emmot', 'Emmota', 'Emmote', 'Emoni', 'Emonie', 'Emony', 'Emota', 'Emy', 'Emylyna', 'Enmeline', 'Enndolynn', 'Ermina', 'Ermintrude', 'Ermyntrude', 'Esabel', 'Esabell', 'Eschina', 'Esclairmonde', 'Esclamonde', 'Esobel', 'Essylt', 'Eua', 'Eudeline', 'Euot', 'Euota', 'Eva', 'Eve', 'Evelina', 'Evelot', 'Evelune', 'Evelyn', 'Evette', 'Evota', 'Ewe', 'Ezabell', 'Farfelee', 'Gabella', 'Gabriel', 'Gabriela', 'Gaenor', 'Galiena', 'Galiene', 'Galienne', 'Ganleya', 'Ganor', 'Gaunlaya', 'Gaunliena', 'Gaynore', 'Gele', 'Gelen', 'Gelleia', 'Genevieve', 'Genevote', 'Gennat', 'Gennevote', 'Gennon', 'Geua', 'Geue', 'Geuecok', 'Geva', 'Gisella', 'Giselle', 'Gisellee', 'Gisla', 'Gismon', 'Gloriana', 'Godiva', 'Gonore', 'Gresilda', 'Grisel', 'Griselda', 'Griseldis', 'Grishild', 'Grissall', 'Grissel', 'Grissell', 'Grizel', 'Grizzel', 'Guanor', 'Gueanor', 'Guener', 'Guenevere', 'Guibourc', 'Guillemete', 'Guillote', 'Guinevere', 'Guiote', 'Gunneuare', 'Gussalen', 'Gwendolynn', 'Gwenhevare', 'Gwenore', 'Gynuara', 'Hadwis', 'Hadwisa', 'Hadwise', 'Haouys', 'Haoys', 'Harsent', 'Haueis', 'Havisa', 'Hawis', 'Hawisa', 'Hawise', 'Hawisia', 'Hawys', 'Hawyse', 'Hegelina', 'Heilewis', 'Heilewisa', 'Hele', 'Heleanor', 'Helena', 'Helevisa', 'Helewis', 'Helewisa', 'Helewise', 'Helewys', 'Helewyse', 'Helisende', 'Helisent', 'Helissent', 'Heloise', 'Helouys', 'Heloys', 'Heloyson', 'Helueua', 'Helysoune', 'Helyssent', 'Hemin', 'Herleva', 'Herleve', 'Hermesent', 'Hermessent', 'Hermineite', 'Hersent', 'Hibbot', 'Hildegard', 'Hismena', 'Hosanna', 'Hosannah', 'Hosianna', 'Housewife', 'Hugolina', 'Hugolinae', 'Huguete', 'Husewyf', 'Husewyua', 'Hysode', 'Hyssmaye', 'Ibbe', 'Ibbet', 'Ibbot', 'Ibbota', 'Ibot', 'Ibota', 'Ida', 'Idemay', 'Imagantia', 'Imaigne', 'Imania', 'Imanie', 'Imayn', 'Imayne', 'Imblen', 'Imeyna', 'Imme', 'Immine', 'Imyne', 'Ingaret', 'Ingaretta', 'Ioetta', 'Iohane', 'Iohanna', 'Ione', 'Isa', 'Isabeau', 'Isabel', 'Isabele', 'Isabell', 'Isabella', 'Isabelle', 'Isabelot', 'Isamaya', 'Isard', 'Isata', 'Isaut', 'Iseldis', 'Iselota', 'Isemay', 'Isemeine', 'Iseuda', 'Iseult', 'Iseut', 'Ishbel', 'Ismania', 'Ismanna', 'Ismay', 'Ismeina', 'Ismena', 'Ismenia', 'Ismey', 'Isobel', 'Isobella', 'Isold', 'Isolda', 'Isolde', 'Isolt', 'Isopel', 'Isot', 'Isota', 'Isott', 'Isotta', 'Isouda', 'Issabell', 'Issabella', 'Issat', 'Issobell', 'Issobella', 'Isylte', 'Ivetta', 'Ivette', 'Izett', 'Izot', 'Jacket', 'Jacklin', 'Jaclyn', 'Jacoba', 'Jacobina', 'Jacqueline', 'Jacquelle', 'Jacquelyn', 'Jacquetta', 'Jahan', 'Jakelina', 'Jakemina', 'Jaketta', 'Jakolina', 'James', 'Jana', 'Janat', 'Jane', 'Janet', 'Janeta', 'Jannet', 'Jaquelinne', 'Jaquelot', 'Jasmine', 'Jean', 'Jeane', 'Jeanette', 'Jeanna', 'Jeanne', 'Jeene', 'Jehane', 'Jehanne', 'Jehannete', 'Jehannette', 'Jehannote', 'Jehenne', 'Jenefer', 'Jenet', 'Jeneuer', 'Jennet', 'Jenny', 'Jesmaine', 'Jesmond', 'Jessimond', 'Jhone', 'Jimme', 'Jinny', 'Jismond', 'Jivete', 'Joan', 'Joane', 'Joanette', 'Joanna', 'Jocea', 'Jocey', 'Jocosa', 'Jodoca', 'Joetta', 'Johamma', 'Johan', 'Johana', 'Johanna', 'Johna', 'Johne', 'Johnnett', 'Jone', 'Jonet', 'Joneta', 'Jonetam', 'Jonete', 'Jonett', 'Jonette', 'Josse', 'Josselyn', 'Jossy', 'Joyce', 'Joyse', 'Juicea', 'Juliana', 'Jyne', 'Katelyn', 'Katrina', 'Kaylein', 'Krea', 'Kristyan', 'Kyrstyan', 'Libbe', 'Libby', 'Libet', 'Lilian', 'Lilias', 'Lilion', 'Lilla', 'Lillian', 'Lillias', 'Lily', 'Lina', 'Linet', 'Linette', 'Linnet', 'Linniue', 'Linota', 'Linyeve', 'Linyive', 'Lisa', 'Liza', 'Lizbeth', 'Lizzie', 'Loreena', 'Luanda', 'Luned', 'Lunet', 'Lunete', 'Lylie', 'Lynette', 'Lyneue', 'Lyonnete', 'Maaline', 'Maalot', 'MacÃ©e', 'Mactilda', 'Mactildis', 'Madallaine', 'Madeleine', 'Madelina', 'Madlen', 'Madlin', 'Madlyn', 'Maerwynn', 'Magdalen', 'Magdalene', 'Magdalin', 'Magdelne', 'Maghenyld', 'Maghtild', 'Mahald', 'Mahalt', 'Mahaud', 'Mahault', 'Mahaut', 'Mahenyld', 'Maheut', 'Mahhild', 'Maleta', 'Malie', 'Malina', 'Maline', 'Malkin', 'Malkyn', 'Mall', 'Malle', 'Malleta', 'Mallkin', 'Mallot', 'Mally', 'Malot', 'Malota', 'Malt', 'Maly', 'Malyn', 'Malyna', 'Manel', 'Maneld', 'Manild', 'Mare', 'Marekyn', 'Mareona', 'Mareoun', 'Margaret', 'Margery', 'Maria', 'Marian', 'Mariana', 'Mariel', 'Marina', 'Marion', 'Marione', 'Mariora', 'Mariorie', 'Mariot', 'Mariota', 'Mariote', 'Marioth', 'Marioun', 'Marioziota', 'Mariun', 'Marote', 'Mary', 'Maryell', 'Masota', 'Masse', 'Mathe', 'Matheld', 'Mathila', 'Mathild', 'Mathildis', 'Matild', 'Matilda', 'Matilde', 'Matildis', 'Matill', 'Matilldis', 'Matillis', 'Mattie', 'Matty', 'Maud', 'Maude', 'Maudeleyn', 'Maudelyn', 'Maudlin', 'Maughtild', 'Mauld', 'Maut', 'Mautild', 'Mawd', 'Mawde', 'Mawdelyn', 'Mawt', 'May', 'Maynild', 'Maysant', 'Maysaunt', 'Mechtild', 'Mehenilda', 'Meisent', 'Melicent', 'Melisant', 'Melisenda', 'Melisent', 'Melisentia', 'Melissent', 'Meraud', 'Merewen', 'Merewina', 'Merhild', 'Meriall', 'Meriel', 'Merilda', 'Merione', 'Merwenna', 'Meryall', 'Meryld', 'Merzone', 'Metylda', 'Milcentia', 'Milesent', 'Milessent', 'Milicent', 'Milicenta', 'Milisandia', 'Milisant', 'Milisendis', 'Milisent', 'Milla', 'Mille', 'Millesant', 'Millesenta', 'Millicent', 'Minnie', 'Mirabelle', 'Miriald', 'Miriel', 'Miriela', 'Mirield', 'Mirielda', 'Mirielis', 'Miriella', 'Miriild', 'Mirils', 'Missa', 'Mohaut', 'Mold', 'Molde', 'Moll', 'Molle', 'Mollie', 'Molly', 'Molt', 'Moolde', 'Mott', 'Motte', 'Moude', 'Moulde', 'Moysant', 'Moysent', 'Murie', 'Muriel', 'Muriele', 'Muriella', 'Murienne', 'Mylecent', 'Mylisant', 'Mylla', 'Mylle', 'Nan', 'Nance', 'Nancy', 'Nanette', 'Nanny', 'Nanss', 'Nibb', 'Nina', 'Ninette', 'Ninon', 'Nota', 'Notekyn', 'Odelina', 'Odolina', 'Orella', 'Oriel', 'Oriholt', 'Oriold', 'Oriolda', 'Oriolt', 'Osane', 'Osanna', 'Osanne', 'Osenne', 'Ossenna', 'Ozanne', 'Peronell', 'Phrowenia', 'Poll', 'Pollekin', 'Polly', 'Rainydayas', 'Rechemay', 'Richarda', 'Richardyne', 'Richemaya', 'Richemeya', 'Richenda', 'Richenza', 'Richessa', 'Richil', 'Richild', 'Richildis', 'Richill', 'Richmal', 'Richoard', 'Richolda', 'Ricolda', 'Rikild', 'Rikilda', 'Rikilde', 'Rikmai', 'Rochilda', 'Roes', 'Roese', 'Roesia', 'Roheis', 'Roheisa', 'Roheisia', 'Rohese', 'Rohesia', 'Rohez', 'Roisia', 'Rokilda', 'Roos', 'Rosa', 'Rosalind', 'Rosalinda', 'Rosaline', 'Rosamond', 'Rosamund', 'Rosamunda', 'Rose', 'Roseaman', 'Roseia', 'Rosemond', 'Rosemunda', 'Rosomon', 'Rossamond', 'Rothais', 'Royce', 'Roysa', 'Royse', 'Roysia', 'Rozeman', 'Rychyld', 'Ryia', 'Rykeld', 'Sabelina', 'Sabeline', 'Sadie', 'Sairey', 'Sal', 'Sallie', 'Sally', 'Saloua', 'Salove', 'Sapphira', 'Sapphire', 'Sara', 'Sarah', 'Sarey', 'Sari', 'Sarra', 'Sarre', 'Sefare', 'Sela', 'Seloua', 'Seloue', 'Selova', 'Seluue', 'Sely', 'Sephare', 'Seraphina', 'Shusan', 'Shusanna', 'Simmonete', 'Simona', 'Simone', 'Sosanna', 'Sueta', 'Sueteluue', 'Sukie', 'Suky', 'Sulley', 'Sully', 'Susan', 'Susane', 'Susanna', 'Susannah', 'Susanney', 'Sweteloue', 'Swetelove', 'Swethyna', 'Swetiue', 'Swetyene', 'Swetyne', 'Sybbyl', 'Symonne', 'Tamasine', 'Tamsin', 'Tatsy', 'Tatty', 'Teffan', 'Teffania', 'Teffany', 'Tephania', 'Tephna', 'Tetty', 'Thamasin', 'Thea', 'Theffania', 'Theffanie', 'Theofania', 'Theophania', 'Thiphania', 'Thomas', 'Thomasia', 'Thomasin', 'Thomasina', 'Thomasine', 'Thomasse', 'Thomassete', 'Thomeson', 'Thyphainne', 'Tibb', 'Tibby', 'Tibota', 'Tifaine', 'Tiffan', 'Tiffania', 'Tiffany', 'Tiffonia', 'Tilda', 'Till', 'Tilla', 'Tille', 'Tillie', 'Tillot', 'Tillota', 'Tillote', 'Tilly', 'Tiphina', 'Tomson', 'Tyfainne', 'Tyffany', 'Tyffayne', 'Typhainne', 'Typheinne', 'Typhenete', 'Typhenon', 'Vanora', 'Victoria', 'Wander', 'Wannore', 'Wannour', 'Wantelien', 'Wantliana', 'Wenefreda', 'Wenthelen', 'Wentiliana', 'Williamina', 'Wilmetta', 'Wilmot', 'Winefred', 'Winifred', 'Winnifred', 'Wynifreed', 'Xristiana', 'Ybelote', 'Ybot', 'Yda', 'Ymanie', 'Ymanya', 'Ymanye', 'Ymeisna', 'Ymenia', 'Ysabel', 'Ysabell', 'Ysabella', 'Ysabelle', 'Ysabelon', 'Ysabelot', 'Ysabiau', 'Ysemay', 'Yseult', 'Yseulte', 'Ysmay', 'Ysmeina', 'Ysmena', 'Ysmene', 'Ysolt', 'Ysoude', 'Ysout']);
    }
  }

  if (_class == 'Mage' || _class == 'Cleric') {
    base_spell += 1;
    base_basic = `${chance.pickone(['MAGIC MISSILE +5 1HP', 'ICE +5 1HP/STUNT'])}`;
    base_normal = `${chance.pickone(['CURE Recover 1HP', 'ICE BURST +7 2HP'])}`;
    base_hard = `${chance.pickone(['FIREBALL +8 2HP/STUNT', 'FENIX Recover 2HP'])}`;
  } else if (_class == 'Fighter') {
    base_ac += 1;
    base_basic = `${chance.pickone(['SWORD +6 1HP'])}`;
    base_normal = `${chance.pickone(['SWORD +8 2HP'])}`;
    base_hard = `${chance.pickone(['SWORD +9 3HP/STUNT'])}`;
  } else if (_class == 'Paladin') {
    base_ac += 2;
    base_basic = `${chance.pickone(['SWORD +6 1HP'])}`;
    base_normal = `${chance.pickone(['SWORD +7 2HP/STUNT'])}`;
    base_hard = `${chance.pickone(['SWORD +9 3HP/STUNT'])}`;
  } else if (_class == 'Ranger' || _class == 'Bard' || _class == 'Rogue') {
    base_init += 2;
    base_basic = `${chance.pickone(['BOW +6 1HP'])}`;
    base_normal = `${chance.pickone(['BOW +7 2HP'])}`;
    base_hard = `${chance.pickone(['BOW +8 2HP/STUNT'])}`;
  } else if (_class == 'Barbarian') {
    base_init += 1;
    base_ac += 1;
    base_basic = `${chance.pickone(['SWORD +6 1HP'])}`;
    base_normal = `${chance.pickone(['SWORD +7 3HP'])}`;
    base_hard = `${chance.pickone(['SWORD +8 3HP/STUNT'])}`;
  }

  const player = {
    name: _name,
    image: race,
    genere,
    race: `${race} ${_class}`,
    raza: race,
    basic: base_basic,
    normal: base_normal,
    hard: base_hard,
    hearts: base_hearts,
    init: base_init,
    AC: base_ac,
    spell: base_spell,
    AP: base_ap,
  };


  return player;
};
