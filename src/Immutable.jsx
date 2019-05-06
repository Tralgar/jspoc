import React from 'react';
import { fromJS, List, Map, Seq } from 'immutable';

export const Immutable = () => {
  const map1 = Map({ a: 1, b: 2, c: 3 });
  console.log(map1);

  const map2 = map1.set('b', 50);
  console.log(map1.get('b'));
  console.log(map2.get('b'));

  const hero = Map({
    pseudo: 'Tralgar',
    hp: 100,
    mana: 20,
    level: 100,
  });

  const hero2 = Map({
    pseudo: 'Dragon',
    hp: 10,
    mana: 200,
    level: 40,
  });

  const hero3 = Map({
    pseudo: 'Dragon',
    hp: 10,
    mana: 200,
    level: 40,
  });

  console.log('Immutable::render hero: ', hero);
  console.log('Immutable::render hero === hero2: ', hero === hero2);
  console.log('Immutable::render hero2 === hero3: ', hero2 === hero3);
  console.log('Immutable::render hero2.equals(hero3): ', hero2.equals(hero3));

  const array = List([1, 2, 3]);
  console.log('Immutable::render array: ', array.toJS());

  const array2 = array.push(5, 7, 8);
  console.log('Immutable::render array2: ', array2);

  const array3 = array.concat(array2);
  console.log('Immutable::render array3: ', array3);

  const array4 = array3.pop();
  console.log('Immutable::render array4: ', array4.toJS());

  let hero4 = {
    pseudo: 'Ludo',
    hp: 1000,
    mana: 800,
    level: 120,
    skills: [
      {
        id: 1,
        sword: {
          iron: 10,
          mithril: 18,
        }
      },
      {
        id: 2,
        bow: {
          wood: 2,
          plexi: 34,
        }
      }
    ],
    stats: {
      charism: {
        normal: 10,
        berserker: 90,
      },
      spirit: {
        normal: 5,
        burst: 25,
      }
    }
  };
  console.log('Immutable::render hero4 ->', hero4);

  console.log('Immutable::Immutable  ->', );

  hero4 = fromJS(hero4);
  console.log('Immutable::render hero4 ->', hero4);

  console.log('Immutable::render hero4.getIn([level]) ->', hero4.getIn(['skills', 'id']));

  console.log('Immutable::render hero4.getIn([stats charism berserker]) ->', hero4.getIn(['stats', 'charism', 'berserker']));

  // console.log('Immutable::render hero4.getIn(pseudo) ->', hero4.getIn('pseudo')); // ERROR

  console.log('Immutable::render hero4.getIn([power]) ->', hero4.getIn(['power', 'damage']));

  let hero5 = hero4.updateIn(['stats', 'charism', 'berserker'], value => value * 2);
  hero5 = hero5.toJS();
  console.log('Immutable::render hero5 ->', hero5);

  // console.log('Immutable::render hero5.power.damage ->', hero5.power.damage); // ERROR

  const seq = Seq(['tignes', 'valdiz', 'lacluz', 'lessaiz']);
  console.log('Immutable::render seq ->', seq);
  console.log('Immutable::render seq.toJS() ->', seq.toJS());

  const seq2 = seq.map(resort => `station : ${resort}`);
  console.log('Immutable::render seq2.toJS() ->', seq2.toJS());

  console.log('Immutable::render Seq(hero4) ->', Seq(hero4));
  console.log('Immutable::render Seq(hero5) ->', Seq(hero5));

  const seq3 = Seq([1, 2, 4, 6, 9]);
  console.log('Immutable::render seq3.filter(value => value % 2).toJS() ->', seq3.filter(value => value % 2).toJS());

  const set1 = Map({
    top: 'leo',
    boss: 'ludo',
  });

  console.log('Immutable::render set1 -> ', set1.toJS());

  const boss = 'xavier';
  const set2 = set1.set("boss", boss);

  console.log('Immutable::render set2.toJS() -> ', set2.toJS());

  return <div>Immutable POC</div>;

};

export default Immutable;
