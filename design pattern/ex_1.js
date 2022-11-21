let Hero = class {
    hp;
    mp;
    strength;
    wisdom;
    defense;
    skill;
    name;
    constructor(data) {
        this.name = data['name'];
        this.hp = data['hp'];
        this.mp = data['mp'];
        this.strength = data['strength'];
        this.wisdom = data['wisdom'];
        this.defense = data['defense'];
        this.skill = data['skill'];
    }
}
let main = () => {
    let Jason = new Hero({
        name: "Jason",
        hp: 1500, mp: 0, strength: 30, wisdom: 0, defense: 50, skill: (from, to) => {
            return from['strength'] - to['defense'];
        },
    });
    let Karl = new Hero({
        name: "Karl",
        hp: 1000, mp: 60, strength: 0, wisdom: 15, defense: 15, skill: (from, to) => {
            return from['wisdom'] * 2;
        }
    });
    let gameOver = false;
    let stack = [Jason, Karl];
    while (!gameOver) {
        let now = stack.pop();
        let damage = now.skill(now, stack[0]);
        stack[0].hp = Math.max(0, stack[0].hp - damage);
        console.log(`${now.name} attack  ${stack[0].name} with ${damage}, ${stack[0].name} hp: ${stack[0].hp}`);
        if (stack[0].hp == 0) gameOver = true;
        stack.unshift(now);
    }
    console.log(Jason, Karl);
};

main();