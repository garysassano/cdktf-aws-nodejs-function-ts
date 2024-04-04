# cdktf-aws-nodejs-function-ts

CDKTF app that deploys a Lambda function written in TypeScript in a way similar to AWS CDK [NodejsFunction](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs.NodejsFunction.html) construct.

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration) in your local environment.
- **_Terraform:_**
  - Must be [installed](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli#install-terraform) in your system.
- **_Node.js + npm:_**
  - Must be [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your system.

## Installation

```sh
npx projen install
```

## Deployment

```sh
npx projen deploy
```

## Cleanup

```sh
npx projen destroy
```
