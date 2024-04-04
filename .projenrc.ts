import { javascript } from "projen";
import { CdktfTypeScriptApp } from "projen-cdktf-app-ts";

const project = new CdktfTypeScriptApp({
  cdktfVersion: "0.20.10",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  devDeps: ["projen-cdktf-app-ts"],
  eslint: true,
  gitignore: ["*.tfstate*", "**/*.zip"],
  minNodeVersion: "22.12.0",
  name: "cdktf-aws-nodejs-function-ts",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@aws-lambda-powertools/logger",
    "@middy/core",
    "@middy/http-error-handler",
  ],
  terraformProviders: [
    "hashicorp/aws@~> 5.82.2",
    "jSherz/node-lambda-packager@~> 1.5.2",
  ],
});

// Generate CDKTF constructs after installing deps
project.tasks.tryFind("install")?.spawn(project.cdktfTasks.get);

project.synth();
