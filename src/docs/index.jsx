import React from "react";
import { render } from "react-dom";
import MyComponent from "sam-calendar";
import "./styles.css";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "rotten-firefox-54",
          date: "2018-07-08T07:00:00.000Z",
          toggled: false,
          description:
            "hot-fly-95 rude-ladybug-55 moody-skunk-73 smooth-turtle-61 popular-yak-26 cowardly-dodo-11 short-cheetah-60"
        },
        {
          title: "angry-sheep-15",
          date: "2018-07-23T07:00:00.000Z",
          toggled: false,
          description:
            "chilly-husky-24 good-cougar-40 heavy-grasshopper-93 tough-bullfrog-63 quiet-treefrog-81 thin-cat-83 soft-dragon-51"
        },
        {
          title: "little-deer-100",
          date: "2018-07-13T07:00:00.000Z",
          toggled: false,
          description:
            "mean-pug-50 serious-goose-69 lazy-chicken-20 lucky-cobra-36 pink-newt-16 red-wasp-87 yellow-dolphin-22"
        },
        {
          title: "happy-hound-23",
          date: "2018-07-02T07:00:00.000Z",
          toggled: false,
          description:
            "plastic-cow-17 dull-dingo-65 average-gecko-66 blue-eagle-12 nice-bird-30 odd-lizard-70 massive-moose-88"
        },
        {
          title: "giant-elephant-71",
          date: "2018-07-27T07:00:00.000Z",
          toggled: false,
          description:
            "green-kangaroo-77 honest-jellyfish-14 tidy-rat-78 slippery-seahorse-25 fluffy-frog-68 witty-catfish-34 spotty-impala-9"
        },
        {
          title: "wonderful-owl-91",
          date: "2018-07-15T07:00:00.000Z",
          toggled: false,
          description:
            "jolly-emu-13 bad-walrus-99 hard-bulldog-33 new-bobcat-74 pretty-snail-44 purple-monkey-79 great-sloth-89"
        },
        {
          title: "stupid-penguin-19",
          date: "2018-07-19T07:00:00.000Z",
          toggled: false,
          description:
            "nasty-tiger-43 helpless-earwig-67 lovely-falcon-31 afraid-swan-53 splendid-rattlesnake-32 shy-puma-97 cuddly-lion-3"
        },
        {
          title: "grumpy-goat-96",
          date: "2018-07-18T07:00:00.000Z",
          toggled: false,
          description:
            "fast-liger-62 evil-quail-27 big-fish-18 stale-horse-64 dry-duck-85 tall-robin-39 cold-donkey-59"
        },
        {
          title: "curly-rabbit-76",
          date: "2018-07-26T07:00:00.000Z",
          toggled: false,
          description:
            "loud-dog-86 unlucky-ape-47 sour-turkey-28 orange-starfish-42 hungry-badger-48 tasty-zebra-45 breezy-eel-46"
        },
        {
          title: "modern-termite-6",
          date: "2018-07-21T07:00:00.000Z",
          toggled: false,
          description:
            "rare-crab-37 friendly-fireant-2 bright-chipmunk-35 tame-dragonfly-10 selfish-bear-92 funny-bat-5 brown-wombat-7"
        },
        {
          title: "calm-octopus-84",
          date: "2018-07-03T07:00:00.000Z",
          toggled: false,
          description:
            "brave-panda-94 wise-fox-98 swift-insect-52 wet-moth-58 young-mayfly-90 smart-panther-57 strong-otter-4"
        },
        {
          title: "neat-stingray-38",
          date: "2018-07-16T07:00:00.000Z",
          toggled: false,
          description:
            "quick-shrimp-49 bitter-mouse-29 silly-lionfish-0 horrible-warthog-56 kind-wolverine-72 weak-pig-41 tiny-mule-8"
        },
        {
          title: "clever-baboon-21",
          date: "2018-07-23T07:00:00.000Z",
          toggled: false,
          description:
            "fat-mole-80 polite-parrot-82 dangerous-snake-75 ugly-squid-95 old-vampirebat-65 foolish-penguin-38 empty-mouse-8"
        },
        {
          title: "shaggy-zebra-33",
          date: "2018-07-27T07:00:00.000Z",
          toggled: false,
          description:
            "terrible-wombat-59 black-skunk-82 curvy-duck-57 sharp-swan-73 wicked-cougar-39 chatty-starfish-88 white-fireant-25"
        },
        {
          title: "nervous-lionfish-56",
          date: "2018-07-18T07:00:00.000Z",
          toggled: false,
          description:
            "mighty-deer-16 gentle-mole-32 ancient-rat-42 light-mayfly-76 slimy-elephant-66 tender-baboon-83 fresh-kangaroo-31"
        },
        {
          title: "tricky-puma-41",
          date: "2018-07-12T07:00:00.000Z",
          toggled: false,
          description:
            "perfect-bobcat-90 warm-emu-91 itchy-squid-93 proud-snail-20 sweet-earwig-10 spicy-shrimp-72 fuzzy-walrus-67"
        },
        {
          title: "ordinary-horse-99",
          date: "2018-07-08T07:00:00.000Z",
          toggled: false,
          description:
            "strange-bat-47 silent-gecko-97 splendid-fish-98 dangerous-dragon-18 fuzzy-quail-36 shy-jellyfish-89 sour-hound-86"
        },
        {
          title: "clever-panda-63",
          date: "2018-07-12T07:00:00.000Z",
          toggled: false,
          description:
            "smart-bullfrog-75 bright-chipmunk-17 big-wolverine-21 modern-firefox-55 blue-grasshopper-51 plastic-sheep-5 cold-newt-27"
        },
        {
          title: "brave-cow-60",
          date: "2018-07-04T07:00:00.000Z",
          toggled: false,
          description:
            "tiny-insect-69 silent-impala-48 swift-catfish-35 old-pug-7 selfish-yak-54 young-snake-43 cuddly-eel-70"
        },
        {
          title: "weak-goat-44",
          date: "2018-07-05T07:00:00.000Z",
          toggled: false,
          description:
            "lazy-dodo-92 honest-moth-77 spicy-badger-37 quick-falcon-13 rare-mule-9 black-wasp-40 wise-goose-79"
        }
      ]
    };
  }

  handleToggle = event => {
    this.setState(p => {
      let index;

      p.data.map((e, i) => {
        if (e === event.raw) {
          return (index = i);
        }
      });

      p.data[index].toggled = !p.data[index].toggled;
      event.toggled = !event.toggled;

      return {
        data: p.data
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Example Of Component</h1>
        <MyComponent
          events={data}
          eventToggled={this.handleToggle}
          height={400}
          width={500}
        />
      </div>
    );
  }
}

render(<Demo />, document.getElementById("app"));
