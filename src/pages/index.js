import React, { Component } from 'react';
import { getDescription, lootGen, enemyGen, playerGen } from '../utils/generators';
import descriptionGenerator from 'dungeon-tools/description';
import Chance from 'chance';
import door from './door.png';
import intro from './intro.jpg';
import sword from './sword-altar.png';
import chest from './chest.png';
import { css } from 'glamor';
import Rooms from '../utils/meta'

const span = 64;
const chance = new Chance();

const Door = props => (
  <div
    css={{
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto 12px auto',
      '&:last-child': { marginBottom: 0 },
    }}
  >
    <img
      src={props.avatar}
      css={{
 flex: '0 0 spanpx', width: span, height: span, margin: 0,
}}
      alt=""
    />

    <div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
      <h6 css={{ margin: '0 0 12px 0', padding: 0, color: 'gray' }}>
        You can see {props.symbol ? 'a closed door' : 'an open door' } to the {props.exit}:
      </h6>
      <p css={{ margin: 0 }}>
        {props.symbol && `This door is closed. You need the ${props.hasKey} key to open it. 
        If you have the ${props.hasKey} key, turn to `}
        {!props.symbol && `If you go through the ${props.exit.toLowerCase()} door, turn to `}
        <span css={{ fontWeight: 'bold' }}><a href={`#Room${props.link}`}>Room {props.link}.</a></span>
      </p>
    </div>

  </div>
);

const Enemy = props => (
  <div
    css={{
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto 12px auto',
      '&:last-child': { marginBottom: 0 },
    }}
  >
    <img
      src={`/static/${props.funct}.jpg`}
      css={{
       flex: '0 0 spanpx', width: span, height: span, margin: 0,
      }}
      alt=""
    />
    <img
      src={`/static/${props.avatar}.png`}
      css={{
       flex: '0 0 spanpx', width: span, height: span, margin: 0,
      }}
      alt=""
    />
    <div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
      <h6 css={{ margin: '0 0 12px 0', padding: 0, color: 'gray' }}>
       You can see {props.desc} <span css={{ fontWeight: 'bold', color: '#222' }}>{props.name.toUpperCase()}</span> that is coming towards your position. You must defeat the monster before go ahead in the dungeon.
      </h6>
      <p css={{ margin: 0 }}>
        {`Skill ${props.skill}`.toUpperCase() }
      </p>
      <p css={{ margin: 0 }}>
        {`Stamina ${props.stamina}`.toUpperCase() }
      </p>
    </div>
  </div>
);

const Chest = props => (
  <div
    css={{
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto 12px auto',
      '&:last-child': { marginBottom: 0 },
    }}
  >
    <img
      src={`/static/${props.funct}.jpg`}
      css={{
       flex: '0 0 spanpx', width: span, height: span, margin: 0,
      }}
     alt={`Chest image`}
    />
    <img
      src={chest}
      css={{
       flex: '0 0 spanpx', width: span, height: span, margin: 0,
      }}
      alt={`Chest image`}
    />
    <div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
      <h6 css={{ margin: '0 0 12px 0', padding: 0, color: 'gray' }}>
       You can see a  <span css={{ fontWeight: 'bold', color: '#222' }}>{'chest'.toUpperCase()}</span>
      </h6>
      <p>
        {props.hasEnemy && `Once you have killed the ${props.hasEnemy} you can open this chest, turn to `}
        {!props.hasEnemy && 'If you decide to open this chest, turn to'} <a href={`#Chest${props.cindex}`}>Chest {props.cindex}</a>
      </p>
    </div>
  </div>
);

const ChestOpen = props => (
  <div css={{
     display: 'flex', alignItems: 'center', margin: '0 auto 12px auto', '&:last-child': { marginBottom: 0 },
    }}>
    <img
      src={`/static/${props.image}.png`}
      css={{
      flex: '0 0 spanpx', width: span, height: span, margin: 0,
      }}
      alt={`${props.cname} image`}
    />
    <div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
      <h6 css={{ margin: '0 0 12px 0', padding: 0, color: 'gray' }}>
        <span css={{ textTransform: 'capitalize' }}>{props.cname}</span>
      </h6>
      <p>
        {props.bonus}
      </p>
    </div>
  </div>
);


class IndexPage extends Component {
  constructor() {
    super();
    this.chests = [];
    this.generated = false;
    this.player = playerGen();
    this.love = playerGen();
    this.state = {
      map:null
    }
    this.storyName = `The ${chance.pickone(["Abandoned","Abominable","Abomination","Abysmal","Abyss","Adamantine","Adamantite","Ancient","Angry","Arcane","Arching","Arctic","Arid","Bare","Bellowing","Black","Black Forest","Black Mountain","Bleak","Bloodfall","Bloodlust","Boiling","Bottomless","Brilliant","Broken Bones","Broken Curse","Bronze","Brutal","Buried","Burned","Burning","Burning Forest","Buried","Chaos","Chaotic","Cobalt","Cold","Collapsing","Coral","Courage","Crescent Moon","Crystal","Cunning","Cursed","Damned","Dancing","Dark","Daydream","Dead","Deadly","Death Talon","Decayed","Decaying","Deep","Deepest","Deepwood","Delusion","Demonic","Depraved","Desert","Deserted","Desolate","Desolated","Destroyed","Destruction","Diamond","Dire","Distant","Dragon","Dragonclaw","Dragontooth","Dread","Dreaded","Dreadful","Dream","Dreary","Dry","Dying","Earth","Eastern","Eclipse","Emerald","Empty","Enchanted","Ender","Erased","Eternal","Eternal Agony","Eternal Rest","Ethereal","Fabled","Fallen Legion","False","Feared","Fearsome","Fire","Fire Mountain","Flowing","Foaming","Forbidden","Forgotten","Forsaken","Fractured","Frozen","Full Moon","Ghost","Glistening","Gloomy","Glowing","Goblin","Gold Mine","Grey","Grim","Grizzly","Hallucination","Haunted","Hidden","Hollow","Howling","Hungry","Illusion","Infernal","Infinite","Invisible","Iron","Iron Mine","Ironbark","Isolated","Jade","Jagged","Killing","Laughing","Laughing Skulls","Lifeless","Light","Lion Tooth","Living","Living Dead","Lonely","Lost","Lower","Lucent","Lurking Shadow","Malicious","Mesmerizing","Mighty","Mirage","Mirrored","Misty","Mithril","Mithril Mine","Moaning","Mocking","Molten","Motionless","Mourning","Murky","Mysterious","Mystic","Narrow","Nether","Neverending","Nightmare","Northern","Obliterated","Oblivion","Ogre","Oracle","Orc","Overhanging","Perfumed","Phantom","Phoenix","Prisoner","Quiet","Raging","Red","Restless","Roaring","Rocking","Rugged","Sad","Sanguine","Savage","Scarlet","Scheming","Scorching","Screaming","Secret","Serene","Shadow","Shadowed","Shadowy","Shimmering","Shrieking","Silent","Silver","Sleeping","Smoky","Smoldering","Sorrow","Southern","Specter","Spirit","Steel","Sterile","Sunken","Swamp","Terraced","Thief","Thundering","Tormented","Tranquil","Turbulent","Twilight","Twisted","Twisting","Unholy","Unknown","Unstable","Vicious","Violent","Voiceless","Voiceless Whimpers","Volcanic","Wailing","Wasted","Watching Eyes","Western","Whispering","Whispering Shadows","White","White Forest","Wicked","Wild","Wind","Windy","Winter","Withered","Wondering","Wraith","Wrath","Yawning"])} ${chance.pickone(["Burrows","Catacombs","Caverns","Cells","Chambers","Crypt","Delves","Dungeon","Grotto","Haunt","Labyrinth","Lair","Maze","Pits","Point","Quarters","Tombs","Tunnels","Vault"])}`
    const index = chance.unique(chance.integer, Rooms.length, { min: 2, max: Rooms.length + 1 });
    Rooms.forEach((r, i) => {
      r.id = index[i];
      if (r.item != null) {
        if (r.item.name == 'Start') {
          r.id = 1;
        }
      }
      i++;
    });
    Rooms.sort((a, b) => a.id - b.id);
  }

  generateRoom() {
    let ci = 1;
    Rooms.forEach((room) => {
      room.exits = [];
      room.number = 1;
      room.enemy = null;
        room.chest = null;
        const inhabit = chance.bool({ enemy: Math.floor(room.intensity * 100) });
      
      if (inhabit) {
        room.enemy = enemyGen();
      }
      const chest = chance.d100();
      if (chest < 15) {
        room.chest = lootGen(ci, room.id);
        console.log(room.id)
        this.chests.push(room.chest);
        ci++;
      }

      if(room.item!=null){
         if (room.item.name == 'Start') {
          room.chest = null;
          room.enemy = null;
          room.ext_desc_main = "You delve into the deeps of this dungeon."
        }
        if (room.item.name == 'Goal') {
          room.chest = null;
          room.enemy = null;
          room.ext_desc = `You find your ♥LOVE♥ ${this.love.name} laying in the middle of this chamber. You can see a crack in the ceiling, a perfect hole to escape of this dungeon. Well done! THE END.`
        }
      }

      room.desc = getDescription();

      if (room.item != null) {
        if (room.item.name == 'A') {
          room.hasKey = '△';
          room.ext_desc = `You find the ${room.hasKey} key on the floor of this room.`;
        } else if (room.item.name == 'B') {
          room.hasKey = '♣';
          room.ext_desc = `You find the ${room.hasKey} key on the floor of this room.`;
        } else if (room.item.name == 'C') {
          room.hasKey = '►';
          room.ext_desc = `You find the ${room.hasKey} key on the floor of this room.`;
        } else if (room.item.name == 'D') {
          room.hasKey = '♀';
          room.ext_desc = `You find the ${room.hasKey} key on the floor of this room.`;
        } else if (room.item.name == 'E') {
          room.hasKey = '♥';
          room.ext_desc = `You find the ${room.hasKey} key on the floor of this room.`;
        }
      }

      for (let exit = 0; exit < 4; exit++) {
        if (room.edges[exit] == undefined) {

        } else if (exit == 0) {
          if (room.edges[exit].symbol == 'A') { }
          room.exits.push({
            exit: 'North', link: room.edges[exit].dir.id, symbol: room.edges[exit].symbol, hasKey: this.getItem(room, exit),
          });
        } else if (exit == 1) {
          room.exits.push({
            exit: 'East', link: room.edges[exit].dir.id, symbol: room.edges[exit].symbol, hasKey: this.getItem(room, exit),
          });
        } else if (exit == 2) {
          room.exits.push({
            exit: 'South', link: room.edges[exit].dir.id, symbol: room.edges[exit].symbol, hasKey: this.getItem(room, exit),
          });
        } else if (exit == 3) {
          room.exits.push({
            exit: 'West', link: room.edges[exit].dir.id, symbol: room.edges[exit].symbol, hasKey: this.getItem(room, exit),
          });
        }
      }
    });

    return Rooms.map((room, i) => {
      const {
        name, stamina, skill, image, desc,
      } = room.enemy != null && room.enemy[0];

      const {
        cname, cimage, cid,
      } = room.chest != null && room.chest[0];

      return (
        <div key={room.id} css={{ textAlign: 'justify' }}>
          <h4 id={`Room${room.id}`}>Room {room.id} {(room.item!=null && room.item=='Start' || room.item=='Goal') && `(${room.item.name})` }</h4>
          <p>
            {room.ext_desc_main}
          </p>
          <p>
            {room.desc}
          </p>
          <p>
            {room.ext_desc}
          </p>
          {room.exits.map((r, i) => (<Door
            exit={r.exit}
            link={r.link}
            hasKey={r.symbol != null && r.hasKey}
            avatar={door}
            symbol={r.symbol != null && r.symbol.name}
          />))}

          {room.enemy != null && <Enemy avatar={image} funct="done" name={name} skill={skill} stamina={stamina} desc={desc} />}

          {room.chest != null && <Chest funct="done" hasEnemy={name} cname={cname} cavatar={cimage} 
          cindex={cid} />}

        </div>
      );
    });
  }

  generateChests() {
    return this.chests.map(chest => (
      <div key={chest.cid} css={{ textAlign: 'justify' }}>
        <h4 id={`Chest${chest[0].cid}`}>Chest {chest[0].cid}</h4>
        <p>The {chance.pickone(['wood-made', 'iron-made', 'marble-made', 'golden', 'stone-carved', 'diamond', 'cobalt', 'copper', 'onyx', 'iron'])} chest squeak when you open it. You find a {chest[0].type} at the bottom of the chest.</p>
        <ChestOpen funct="done" image={chest[0].cimage} cname={chest[0].cname} 
        bonus={`${chest[0].bonus}. ${chest[0].persistent}`} />
        <p>Once you have picked up the {chest[0].type} the chest is empty. Turn back to, 
        <a href={`#Room${chest[0].cback}`}> Room {chest[0].cback}</a> </p>
      </div>
    ));
  }

  getItem(room, exit) {
    let item = '';

    if (room.edges[exit].symbol == 'A') {
      item = '△';
    } else if (room.edges[exit].symbol == 'B') {
      item = '♣';
    } else if (room.edges[exit].symbol == 'C') {
      item = '►';
    } else if (room.edges[exit].symbol == 'D') {
      item = '♀';
    } else if (room.edges[exit].symbol == 'E') {
      item = '♥';
    }

    return item;
  }

  componentDidMount(){
    this.createMap() 
  }

  createMap(){

    const ctx=this.refs.canvas.getContext("2d");
    const cspan = 12
    const cspany = 16;
    const fsize = 10
    let centex = 0;
    ctx.fillStyle='white'
    ctx.font = `${fsize}px Arial`;

    Rooms.forEach((r)=>{
      
      if(r.item!=null){
        if(r.item.name=="Start"){
          ctx.fillText("@",640/2+(8*cspan)+r.coords.x*cspan,640/1.25+r.coords.y*cspany);
        }
      }else{
      ctx.fillText("█",640/2+(8*cspan)+r.coords.x*cspan,640/1.25+r.coords.y*cspany);
      }
    })

    ctx.font = `16px Arial`;
    ctx.fillText("@ : Room 1 (Start)",32,64);
    ctx.fillText("█ : Room",32,96);
    ctx.fillText(`${this.storyName} Map`,32,32);

    this.setState({ map: this.refs.canvas.toDataURL("image/jpeg") });

  }

  render() {
    return (
      <div>
        <img src={intro} css={{ display: 'block', margin: '32px auto' }} />
        <h1 css={{ textAlign: 'center', color: '#222' }}>{this.storyName}</h1>
        <p css={{ textAlign: 'center', color: '#444', fontStyle: 'italic' }}>Oldschool Dungeon Crawler Gamebook <a href="https://github.com/NaNoGenMo/">#NaNoGenMo</a></p>
        <h3 css={{ textAlign: 'center' }} >Introduction</h3>
        <p css={{ textAlign: 'justify' }}>
        Before embarking on your adventure, you must first
        determine your own strengths and weaknesses. Use dice
        to determine your initial scores. Use the Adventure Sheet
        to record the details of an adventure. On it you will find
        boxes for recording your <strong><strong>SKILL</strong></strong>, <strong><strong>STAMINA</strong></strong> and <strong><strong>LUCK</strong></strong> scores.
        </p>
        <h3 css={{ textAlign: 'center' }} >Skill, Stamina and Luck</h3>
        <p css={{ textAlign: 'justify' }}>
        Roll one die. Add 6 to this number and enter this total in the <strong><strong>SKILL</strong></strong> box on the Adventure Sheet.
        Roll two dice. Add 12 to the number rolled and enter this total in the <strong><strong>STAMINA</strong></strong> box.
        There is also a <strong><strong>LUCK</strong></strong> box. Roll one die, add 6 lo this number and enter this total in the <strong><strong>LUCK</strong></strong> box.
        For reasons that will be explained below, <strong><strong>SKILL</strong></strong>, <strong><strong>STAMINA</strong></strong> and <strong><strong>LUCK</strong></strong> scores change constantly during
        an adventure. You must keep an accurate record of these scores and for this reason you are advised
        either to write small in the boxes or to keep an eraser handy. But never rub out your Initial scores.
        Although you may be awarded additional <strong><strong>SKILL</strong></strong>, <strong><strong>STAMINA</strong></strong> and <strong><strong>LUCK</strong></strong> points, these totals may never
        exceed your Initial scores, except on very rare occa­sions, when you will be instructed on a
        particular page.
        Your <strong><strong>SKILL</strong></strong> score reflects your swordsmanship and general fighing expertise; the higher the better.
        Your <strong><strong>STAMINA</strong></strong> score reflects your general constitution, your will to survive,
        your determination and overall fitness; the higher your <strong><strong>STAMINA</strong></strong> score, the longer
        you will be able to survive. Your LUCIK score indicates how natu­rally lucky a person you are.
        Luck -and magic -are facts of life in the fantasy kingdom you are about to ex­plore.
        </p>
        <h3 css={{ textAlign: 'center' }} >Adventure Sheet</h3>
        <pre>
        <code>
          <p><strong>NAME</strong>: {this.player.name}</p>
          <p><strong>RACE</strong>: {this.player.genere} {this.player.raza}</p>
          <p><strong>CLASS</strong>: {this.player.class}</p>
          <ul>
            <li><strong>SKILL</strong>: </li><hr/>
            <li><strong>STAMINA</strong>: </li><hr/>
            <li><strong>LUCK</strong>: </li><hr/>
          </ul>
          <p><strong>WEAPONS</strong>: </p>
          <hr/>
          <p><strong>EQUIPMENT</strong>: </p>
          <hr/>
          <p><strong>ARMOR</strong>: </p>
          <hr/>
          <p><strong>TREASURE</strong>: </p>
          <hr/>
        </code>
        </pre>
        <h3 css={{ textAlign: 'center' }} >Introduction</h3>
        <p css={{ textAlign: 'justify' }}>You will often come across pages in the book which
        instruct you to fight a creature of some sort. An option to Ree may be given,
        but if not -or if you choose to attack the creature anyway -you must
        resolve the battle as described below.
        </p>
          <ol>
            <li>
            Roll both dice once for the creature. Add its <strong><strong>SKILL</strong></strong> score. This total is the creature's Attack Strength.</li>
            <li>
            Roll both dice once for yourself. Add the number rolled to your current <strong><strong>SKILL</strong></strong> score. This total is your Attack Strength.</li>
            <li>
            If your Attack Strength is higher than that of your opponent, you have wounded it. Proceed to step 4. If the creature's
            Attack Strength is higher than yours, it ha wounded you. Proceed to step 5. If both Attack Strength totals are the same, you have avoided each other's blows -
            start the next Attack Round from step 1 above.</li>
            <li>
            You have wounded the creature, so subtract 2 points from its <strong><strong>STAMINA</strong></strong> score.You may use your <strong><strong>LUCK</strong></strong> here to do additional damage (see over). Proceed to step 6.</li>
            <li>
            The creature has wounded you, so subtract 2 points from your own <strong><strong>STAMINA</strong></strong> score. Again you may use <strong><strong>LUCK</strong></strong> at this stage (see over).</li>
            <li>
            Make the appropriate adjustments to either the creature's or your own <strong><strong>STAMINA</strong></strong> score (and to your <strong><strong>LUCK</strong></strong> score if you used <strong><strong>LUCK</strong></strong> - see over).</li>
            <li>
            Begin the next Attack Round by returning to step 1.  This sequence continues until the <strong><strong>STAMINA</strong></strong> score of either you or the creature you are fighting has been reduced to zero (death).</li>
          </ol>
        <h3 css={{ textAlign: 'center' }}>Luck</h3>
        <p css={{ textAlign: 'justify' }}>
         At various times during your adventure, either in battles or when you come across
         situations in which you could either be lucky or unlucky (details of these are given
         on the pages themselves), you may call on your luck to make the outcome more
         favourable. But beware! Using luck is a risky business and if you are unlucky, the
         results could be disastrous.
         The procedure for using your luck is as follows: roll two dice. If the number rolled is less
         than or equal to your current <strong>LUCK</strong> score, you have been Lucky and the result will go in your
         favour If the number rolled is higher than your current <strong>LUCK</strong> score, you have been Unlucky and
         you will be penalized.
         This procedure is known as Testing your Luck. Each time you Test your Luck, you must subtract
         1 point from your current <strong>LUCK</strong> score. Thus you will soon realize that the more you rely on
         your luck, the more risky this will become.
        </p>
        <h4 css={{ textAlign: 'center' }}><i>Using Luck in Battles</i></h4>
        <p css={{ textAlign: 'justify' }}>
        In certain paragraphs of the book you will be told to Test your Luck and will be
        told the consequences of your being Lucky or Unlucky. However, in battles you
        always have the opHon of using your luck either to inflict a more serious wound
        on a creature you have ust wounded, or to minimize the effects of a wound your
        opponent has just inflicted on you. If you have just wounded the creature, you may
        Test your Luck as described above. If you are Lucky, you have inflicted a severe
        wound and may sub­tract an extra 2 points from the creature's <strong>STAMINA</strong> score.
        However, if you are Unlucky, the wound was a mere graze and you must restore
        1 point to the creature's <strong>STAMINA</strong> (i.e., instead of scoring the normal 2 points
        of damage, you have now scored only 1). If the creature has just wounded. You may
        Test your Luck to try to minimize the wound. If you are Lucky, you have managed to
        avoid the full damage of the blow; restore 1 point of <strong>STAMINA</strong> (i.e. instead of doing 2 points of damage, it has done only 1). If you are Unlucky,
        you have taken a more serious blow. Subtract 1 extra <strong>STAMINA</strong> point. Remember that you must subtract 1 point from your own <strong>LUCK</strong> score each time
        you Test your Luck.
        </p>
        <img src={sword} css={{ display: 'block', margin: '32px auto' }} />
        <h4 css={{ textAlign: 'center' }}>EQUIPMENT</h4>
        <p css={{ textAlign: 'justify' }}>
        You start your adventure with the basic tools of your trade a fine sword, clothes suitable for travelling,
        a backpack to hold your Provisions and any tresasure you may come across. You can not carry more than 5 items in your inventori.
        </p>
        <h4 css={{ textAlign: 'center' }}>DUNGEON MAP</h4>
        <img src={this.state.map} css={{ width:640, height:640, display: 'block', margin: '0 auto' }}  /> 
        <canvas ref="canvas" width={640} height={640} css={{display:'none',margin:'0 auto', background:'black'}}></canvas>
        <h4 css={{ textAlign: 'center' }}>BACKGROUND</h4>
        <p css={{ textAlign: 'justify' }}>
        Your name is {this.player.name}. You are a {this.player.genere.toLowerCase()} {this.player.race.toLowerCase()}. You traveled for {chance.pickone(['five','two','three','four'])} {chance.pickone(['days','weeks','months'])} to find the place where {this.love.name}, 
        your {this.love.raza.toLowerCase()} { this.love.genere == 'Female' ? 'girlfriend' : 'boyfriend' } is kidnapped by evil forces. {descriptionGenerator()} You need to find {this.love.name} inside this dungeon and escape with {this.love.genere == 'Female' ? 'her' : 'him'} before the sun goes down beneath the mountains. 
        <br/><br/>Turn to Room 1.
        </p>
        <p css={{ textAlign: 'justify' }} />
        {this.state.map && this.generateRoom() }
        <h2 css={{ textAlign: 'center' }} >CHESTS</h2>
        {this.state.map &&  this.generateChests() }
        <img src={intro} css={{ display: 'block', margin: '32px auto' }} />
        <h6 css={{ textAlign: 'center' }} >Made with ♥ by <a target="_blank" href="https://twitter.com/delacannon">@Delacannon</a></h6>
      </div>
    );
  }
}

export default IndexPage;
