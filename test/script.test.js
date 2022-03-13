// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should do a greeting for Ayrton, then ask if board maintains good grip, then suggest you wax your board, then suggest cold water wax", () => {
    const botReply1 = getBotReply("Ayrton");
    const expectedReply1 = [
      "Nice to meet you Ayrton, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?",
    ];

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = [
      "Well Ayrton, Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)",
    ];

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("cold");
    const expectedReply3 = [
      "Ok Ayrton, I would reccommend you use ccc cold water surf wax",
    ];

    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should do a greeting for Flimflam, then ask if board maintains good grip, then suggest you wax your board, then suggest warm water wax", () => {
    const botReply1 = getBotReply("Flimflam");
    const expectedReply1 = [
      "Nice to meet you Flimflam, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?",
    ];

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = [
      "Well Flimflam, Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)",
    ];

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("warm");
    const expectedReply3 = [
      "Ok Flimflam, I would reccommend you use xxx tropical surf wax",
    ];

    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should do a greeting for Timjim, then ask if board maintains good grip, then ask if you are catching lots of good waves, then compliment the user", () => {
    const botReply1 = getBotReply("Timjim");
    const expectedReply1 = [
      "Nice to meet you Timjim, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?",
    ];

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = [
      "Ok Timjim, thats good to hear your board has enough grip. Are you catching lots of good waves?",
    ];

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Well you dont need to wax your board you bloody surfin turfin legend";

    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should do a greeting for John Key, then ask if board maintains good grip, then ask if you are catching lots of good waves, then insult the user", () => {
    const botReply1 = getBotReply("John Key");
    const expectedReply1 = [
      "Nice to meet you John Key, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?",
    ];

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = [
      "Ok John Key, thats good to hear your board has enough grip. Are you catching lots of good waves?",
    ];

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = "Well then John Key, you must suck.";

    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);
  });
});
