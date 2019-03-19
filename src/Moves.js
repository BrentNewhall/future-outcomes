export const moves = [
    {
        id: "default",
        title: "Default Move",
        type: "skill",
        outcomes: [
            "You fail.",
            "You fail.",
            "You fail, taking a consequence.",
            "You fail, taking a consequence.",
            "You succeed.",
            "You succeed.",
        ],
        lastNegative: 4,
    },
    {
        id: "negotiation",
        title: "Negotiation",
        type: "skill",
        outcomes: [
            "Negotiations fail. Violence begins.",
            "Negotiations fail. Parties offended.",
            "Negotiations fail, but a back door opens.",
            "Negotiations succeed, begrudgingly.",
            "Negotiations succeed with a friendship opportunity.",
            "Negotiations succeed and an alliance begins.",
        ],
        lastNegative: 3,
    },
    {
        id: "physical-combat",
        title: "Physical Combat",
        type: "skill",
        outcomes: [
            "Your attack misses, and you are _hurt_.",
            "Your attack misses, and you are _stunned_.",
            "You _hurt_ the target, but you are also _hurt_.",
            "You _hurt_ the target, and the target flees.",
            "You _hurt_ the target.",
            "You _hurt_ the target, who surrenders.",
        ],
        lastNegative: 3,
    },
    {
        id: "ace-pilot",
        title: "Ace Pilot",
        type: "skill",
        outcomes: [
            "Your craft goes careening out of control.",
            "No change, but a complication occurs.",
            "No change, but a complication occurs.",
            "Your maneuver succeeds, but a complication occurs.",
            "Your maneuver succeeds.",
            "Your maneuver succeeds beyond your expectations.",
        ],
        lastNegative: 3,
    },
    {
        id: "blaster-master",
        title: "Blaster Master",
        type: "skill",
        outcomes: [
            "Your attack misses, and the target gets away.",
            "You _hurt_ the target, and you are _hurt_.",
            "You _hurt_ the target, and you are _hurt_.",
            "You _hurt_ the target.",
            "You _hurt_ and stun the target.",
            "You _hurt_ the target, who surrenders.",
        ],
        lastNegative: 3,
    },
    {
        id: "engineer",
        title: "Engineer",
        type: "skill",
        outcomes: [
            "You fail, and something explodes.",
            "You fail, and something gets jammed.",
            "You fail, and something goes wrong.",
            "You succeed, but something else goes wrong.",
            "You succeed.",
            "You succeed, and what you're wroking on works better than before.",
        ],
        lastNegative: 3,
    },
    {
        id: "medic",
        title: "Medic",
        type: "skill",
        outcomes: [
            "The target takes 1 extra _hurt_.",
            "The target is now _stunned_.",
            "No effect.",
            "The target clears 1 _hurt_.",
            "The target clears 1 _hurt_.",
            "The target clears 1 _hurt_ and 1 other condition of your choice.",
        ],
        lastNegative: 3,
    },
    {
        id: "infiltrator",
        title: "Infiltrator",
        type: "skill",
        outcomes: [
            "You cannot enter, and enemies are alerted to your presence.",
            "You cannot enter, and enemies are alerted to your presence.",
            "You cannot enter, and you are _distracted_ for the next 2 turns.",
            "You can enter, but enemies are alerted to your presence.",
            "You can enter.",
            "You can enter, and you learn a new secret.",
        ],
        lastNegative: 3,
    },
    {
        id: "learner-of-secrets",
        title: "Learner of Secrets",
        type: "skill",
        description: "You may use this skill in research, physical investigation, conversation, or interrogation.",
        outcomes: [
            "You are _distracted_ for the next 2 turns.",
            "You learn nothing.",
            "You get a general sense of what you want to know, and you are distracted for the next 2 turns.",
            "You get a general sense of what you want to know.",
            "You learn everything you want to know.",
            "You learn everything you want to know, and a surprising truth.",
        ],
        lastNegative: 3,
    },
    {
        id: "master-manipulator",
        title: "Master Manipulator",
        type: "skill",
        outcomes: [
            "They refuse. Violence begins.",
            "They refuse. Parties offended.",
            "They'll do it for a price.",
            "They'll do it.",
            "They'll do it.",
            "They'll do it, and more besides.",
        ],
        lastNegative: 4,
    },
    {
        id: "psychic-scanner",
        title: "Psychic Scanner",
        type: "skill",
        outcomes: [
            "Psychic backlash; you are _hurt_.",
            "Learn the target's biggest secret.",
            "Learn the target's biggest weakness.",
            "Learn the target's biggest fear.",
            "Learn what the target's actually about to do.",
            "Learn how the target can be controlled.",
        ],
        lastNegative: 1,
    },
    {
        id: "survivalist",
        title: "Survivalist",
        type: "skill",
        outcomes: [
            "You lose your way and stumble into danger.",
            "You step in the wrong nest and take a random condition.",
            "You waste precious time, causing a lurking danger to manifest.",
            "You find a path, speeding up your progress.",
            "You find a helpful remedy. Heal 1 hurt on yourself or an ally.",
            "You learn an important secret about the environment.",
        ],
        lastNegative: 3,
    },
    {
        id: "telekinesis",
        title: "Telekinesis",
        type: "skill",
        outcomes: [
            "Psychic backlash; you are _hurt_.",
            "Nothing happens, and you are _distracted_ next turn.",
            "You partially succeed (_e.g._, you move something half the desired distance).",
            "You succeed, but you are _stunned_ next turn.",
            "You succeed.",
            "You succeed and can either sustain this for another turn or double its effect (your choice).",
        ],
        lastNegative: 2,
    },
    {
        id: "trap-expert",
        title: "Trap Expert",
        type: "skill",
        outcomes: [
            "The trap explodes. You are _hurt_, and so is another nearby person (choose randomly).",
            "The trap explodes. You are _hurt_.",
            "You disarm the trap, but you are _hurt_.",
            "You find and disable the trap.",
            "You find and disable the trap, learning a secret about how it was made.",
            "You find and disable the trap, and can safely take it with you and use it later.",
        ],
        lastNegative: 3,
    },
    {
        id: "wild-courage",
        title: "Wild Courage",
        type: "skill",
        outcomes: [
            "You fail and suffer a serious setback.",
            "You fail and suffer a significant setback.",
            "You fail.",
            "You succeed.",
            "You succeed even more than you anticipated.",
            "You succeed beyond your wildest expectations.",
        ],
        lastNegative: 3,
    },
    {
        id: "chameleon-suit",
        title: "Chameleon Suit",
        description: "You must make this Move when activating the suit.",
        type: "equipment",
        outcomes: [
            "Nothing happens.",
            "Nothing happens.",
            "The suit sparks, giving away your position, and does nothing.",
            "The suit sparks, giving away your position, but you go invisible for 6 turns (30 seconds).",
            "You go invisible for 5 minutes.",
            "You go invisible for 1 hour.",
        ],
        lastNegative: 3,
    },
    {
        id: "explosives",
        title: "Explosives",
        description: "You carry 6 hand grenades and 2 larger explosives.",
        type: "equipment",
        outcomes: [
            "The explosive backfires. You and 1 nearby ally are _hurt_.",
            "The explosive backfires. You are _hurt_.",
            "The explosive does not have its intended effect.",
            "The explosive goes off, alerting enemies to your presence.",
            "The explosive goes off.",
            "Massive explosion! Yee-haw!",
        ],
        lastNegative: 3,
    },
    {
        id: "needle-rays",
        title: "Needle Rays",
        description: "These are precision beams of energy that can be dialed up or down in intensity, from a simple heat beam of about 100 C to a powerful laser.",
        type: "equipment",
        outcomes: [
            "Your needler is out of charge.",
            "You miss the target and hit something important.",
            "Your beam fires either too hot or too mild.",
            "You _hurt_ the target.",
            "You _hurt_ the target.",
            "You use the ray with great precision, dealing tremendous damage or cutting with great detail.",
        ],
        lastNegative: 3,
    },
    {
        id: "pulse-rifle",
        title: "Pulse Rifle",
        type: "equipment",
        outcomes: [
            "You miss the target, and you are _hurt_.",
            "You miss the target, and you are _stunned_.",
            "Your attack misses.",
            "You _hurt_ the target, but you are _stunned_ next turn.",
            "You _hurt_ the target.",
            "You _hurt_ the target twice.",
        ],
        lastNegative: 3,
    },
    {
        id: "seeker-droid",
        title: "Seeker Droid",
        type: "equipment",
        outcomes: [
            "You learn nothing, and a danger is alerted.",
            "You learn nothing.",
            "You learn an important detail, and a danger is alerted.",
            "You discover a danger, which is alerted to your presence.",
            "You discover a danger.",
            "You discover a danger, and an important detail about it.",
        ],
        lastNegative: 3,
    },
    {
        id: "stimpack",
        title: "Stimpack",
        type: "equipment",
        outcomes: [
            "Blacklash! You are _hurt_.",
            "You are _distracted_ for 2 turns.",
            "You are _stunned_ for 2 turns.",
            "Heal 1 _hurt_.",
            "Heal 1 condition of your choice.",
            "Heal 1 hurt, and you are _pumped_ for the next 6 turns (30 seconds).",
        ],
        lastNegative: 3,
    },
    {
        id: "vibro-knife",
        title: "Vibro Knife",
        type: "equipment",
        outcomes: [
            "You miss the target, and you are _hurt_.",
            "You miss the target, and you are _hurt_.",
            "You _hurt_ your target, and you are _hurt_.",
            "You _hurt_ your target.",
            "You _hurt_ your target, who is also _stunned_.",
            "You _hurt_ your target, who flees in terror.",
        ],
        lastNegative: 3,
    },
];

export default moves;