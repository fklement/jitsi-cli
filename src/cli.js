import arg from "arg";
import inquirer from "inquirer";
const clipboardy = require("clipboardy");
const opener = require("opener");
const boxen = require("boxen");
import { generateRoomName } from "./roomNameGenerator";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--help": Boolean,
      "--pattern": String,
      "--clipboard": Boolean,
      "-c": "--clipboard",
      "-p": "--pattern",
      "-h": "--help"
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    help: args["--help"] || false,
    pattern: args["--pattern"] || false,
    clipboard: args["--clipboard"] || false,
    roomName: args._[0]
  };
}

async function promptForMissingOptions(options) {
  if (options.help) {
    console.log(
      boxen(
        "🧪 How to use the jitsi-cli tool:\n\n" +
          "<roomName>:\n Uses the given <roomName> as input for creating the room\n\n" +
          "--clipboard or -c:\n Copies the generated jitsi room URL into your clipboard.\n\n" +
          "--pattern <selectedPattern> or -p <selectedPattern>:\n Select the desired generation pattern.\n" +
          " <selectedPattern> = [beautifulFungiOrSpaghetti, amazinglyScaryToy,\n neitherTrashNorRifle, eitherCopulateOrInvestigate, wolvesComputeBadly,\n uniteFacilitateAndMerge, nastyWitchesAtThePub, defaultPattern]",
        {
          padding: 1,
          margin: 1,
          borderStyle: "round"
        }
      )
    );
    process.exit();
  }
  const questions = [];
  if (!options.roomName && !options.pattern) {
    questions.push({
      type: "list",
      name: "pattern",
      message: "Please choose which pattern you would like",
      choices: [
        {
          name: "🍝 Beautiful Fungi Or Spaghetti",
          value: "beautifulFungiOrSpaghetti"
        },
        {
          name: "🔫 Amazingly Scary Toy",
          value: "amazinglyScaryToy"
        },
        {
          name: "🕵️  Either Copulate Or Investigate",
          value: "eitherCopulateOrInvestigate"
        },
        {
          name: "🐺 Wolves Compute Badly",
          value: "wolvesComputeBadly"
        },
        {
          name: "🧟 Unite Facilitate And Merge",
          value: "uniteFacilitateAndMerge"
        },
        {
          name: "🧙 Nasty Witches At The Pub",
          value: "nastyWitchesAtThePub"
        },
        {
          name: "🦙 Boring standard pattern",
          value: "defaultPattern"
        }
      ],
      default: "defaultPattern"
    });
  }

  if (!options.clipboard) {
    questions.push({
      type: "confirm",
      name: "clipboard",
      message: "Copy share link to clipboard?",
      default: false
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    pattern: options.pattern || answers.pattern || "defaultPattern",
    clipboard: options.clipboard || answers.clipboard
  };
}

export async function cli(args) {
  let slug = "";
  let boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round"
  };
  let possiblePatterns = [
    "beautifulFungiOrSpaghetti",
    "amazinglyScaryToy",
    "neitherTrashNorRifle",
    "eitherCopulateOrInvestigate",
    "wolvesComputeBadly",
    "uniteFacilitateAndMerge",
    "nastyWitchesAtThePub",
    "defaultPattern"
  ];
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);

  if (!possiblePatterns.includes(options.pattern) && !options.roomName) {
    console.log(boxen("🔥 Wrong pattern used 🔥", boxenOptions));
    process.exit();
  }

  if (!options.roomName) slug = generateRoomName(options.pattern);
  else slug = options.roomName;
  let jitsiURL = "https://meet.jit.si/" + slug;

  if (options.clipboard) clipboardy.writeSync(jitsiURL);
  opener(jitsiURL);
  console.log(
    boxen(
      "🎉 Successfully created and opened a jitsi room! \n🔗 Link: " + jitsiURL,
      boxenOptions
    )
  );
}
