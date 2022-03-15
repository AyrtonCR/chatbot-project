/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let rememberedName;
let level = 0;
let path = 0;
// path 0 is yes, path 1 is no //

const affirmativeReplies = ["yes", "ya", "ye", "yee", "yep", "yeah", "y"];
const negativeReplies = ["no", "nah", "na", "n", "nope", "negative"];
const warmReplies = ["warm", "hot", "roasting"];
const coldReplies = ["cold", "freezing", "chilly"];

const tellJoke = [
  "What did the German animal doctor wear when he went surfing? A Vetsuit",
];

const getBotReply = (msg) => {
  console.log(level);
  console.log(path);
  const lowerCaseUserInput = msg.toLowerCase();

  if (lowerCaseUserInput === "joke") {
    return tellJoke;
  }

  if (msg === "restart") {
    level = 0;
    path = 0;
    rememberedName = undefined;
    return "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name?";
  }

  if (level === 0 && rememberedName === undefined) {
    rememberedName = msg;
    level = 1;
    return `Nice to meet you ${rememberedName}, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?`;
  }

  if (level === 1) {
    if (negativeReplies.includes(lowerCaseUserInput)) {
      level = 2;
      path = 1;
      return `Well ${rememberedName}, Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)`;
    } else if (affirmativeReplies.includes(lowerCaseUserInput)) {
      level = 2;
      path = 0;
      return `Ok ${rememberedName}, thats good to hear your board has enough grip. Are you catching lots of good waves?`;
    }
  }
  if (level === 2 && path === 1) {
    if (coldReplies.includes(lowerCaseUserInput)) {
      level = 3;
      return `Ok ${rememberedName}, I would reccommend you use ccc cold water surf wax`;
    } else if (level === 2 && path === 1) {
      if (warmReplies.includes(lowerCaseUserInput)) {
        level = 3;
        return `Ok ${rememberedName}, I would reccommend you use xxx tropical surf wax`;
      }
    }
  }

  if (level === 2 && path === 0) {
    if (affirmativeReplies.includes(lowerCaseUserInput)) {
      level = 3;
      return "Well you dont need to wax your board you bloody surfin turfin legend";
    } else if (negativeReplies.includes(lowerCaseUserInput)) {
      level = 3;
      return `Well then ${rememberedName}, you must suck.`;
    }
  }

  return "Plese answer with either yes, no, warm or cold, or type restart to start over";
};
export { getBotReply };
