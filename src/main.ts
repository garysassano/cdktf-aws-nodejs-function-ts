import { App } from "cdktf";
import { MyStack } from "./stacks/my-stack";

const app = new App();

new MyStack(app, "cdktf-aws-nodejs-function-ts-dev");

app.synth();
