// import {configuration as actionsConfiguration} from "./helpers/actions";
// import {configuration as calculationsConfiguration} from "./helpers/utils/calculations";
// import {makeSuite} from "./helpers/make-suite";
// import {executeStory} from "./helpers/scenario-engine";
// import ParaSpaceConfig from "../market-config";
//
// makeSuite("Subgraph scenario tests", async (testEnv) => {
//   let story: any;

// before("Initializing configuration", async () => {
//   const scenario = require(`./helpers/scenarios/borrow-repay-stable`);
//   story = scenario.stories[0];

//   actionsConfiguration.skipIntegrityCheck = false; //set this to true to execute solidity-coverage

//   calculationsConfiguration.reservesParams = ParaSpaceConfig.ReservesConfig;
// });
// it("deposit-borrow", async () => {
//   await executeStory(story, testEnv);
// });
// });
