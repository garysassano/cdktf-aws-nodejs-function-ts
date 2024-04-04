import { javascript } from "projen";
import { CdktfTypeScriptApp } from "projen-cdktf-app-ts";
const project = new CdktfTypeScriptApp({
  cdktfVersion: "0.20.7",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  devDeps: ["projen-cdktf-app-ts"],
  eslint: true,
  minNodeVersion: "20.11.1",
  name: "cdktf-aws-nodejs-function-ts",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9.0.5",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@middy/core@5.2.3",
    "@middy/http-error-handler",
    "@aws-lambda-powertools/logger",
  ],
  terraformProviders: [
    "hashicorp/aws@~> 5.46.0",
    "jSherz/node-lambda-packager@~> 1.2.0",
  ],
});

// Generate CDKTF constructs after installing deps
project.tasks.tryFind("install")?.spawn(project.cdktfTasks.get);

project.synth();
