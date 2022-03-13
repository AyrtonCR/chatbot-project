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

const getBotReply = (msg) => {
  console.log(level);
  console.log(path);

  if (level === 0 && rememberedName === undefined) {
    rememberedName = msg;
    level = 1;
    return [
      "Nice to meet you " +
        rememberedName +
        ", lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?",
    ];
  }

  if (level === 1) {
    if (msg === "no") {
      level = 2;
      path = 1;
      return [
        "Well " +
          rememberedName +
          ", Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)",
      ];
    } else if (msg === "yes") {
      level = 2;
      path = 0;
      return [
        "Ok " +
          rememberedName +
          ", thats good to hear your board has enough grip. Are you catching lots of good waves?",
      ];
    }
  }
  if (level === 2 && path === 1) {
    if (msg === "cold") {
      level = 3;
      return [
        "Ok " +
          rememberedName +
          ", I would reccommend you use ccc cold water surf wax",
      ];
    } else if (level === 2 && path === 1) {
      if (msg === "warm") {
        level = 3;
        return [
          "Ok " +
            rememberedName +
            ", I would reccommend you use xxx tropical surf wax",
        ];
      }
    }
  }

  if (level === 2 && path === 0) {
    if (msg === "yes") {
      level = 3;
      return "Well you dont need to wax your board you bloody surfin turfin legend";
    } else if (msg === "no") {
      level = 3;
      return "Well then John Key, you must suck.";
    }
  }
};
export { getBotReply };
