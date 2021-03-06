import { runCaseRoundRobin } from "../index.js"
import { weightedCases } from "./cases.js";
import { NORMAL_LOAD } from "./loads.js";

export const options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    minIterationDuration: "10s", // I think this can be used to simulate the session duration
    stages: [
        { duration: "2m", target: NORMAL_LOAD }, // ramp up
        { duration: "3h56m", target: NORMAL_LOAD }, // stay
        { duration: "2m", target: 0 }, // scale down.
    ],
};

export default () => {
    runCaseRoundRobin(weightedCases);
};