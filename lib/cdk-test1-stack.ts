import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as imagedeploy from 'cdk-docker-image-deployment';

export class CdkTest1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repo = ecr.Repository.fromRepositoryName(this, 'MyRepository', 'myrepository');

    new imagedeploy.DockerImageDeployment(this, 'ExampleImageDeploymentWithTag', {
      source: imagedeploy.Source.directory('./docker'),
      destination: imagedeploy.Destination.ecr(repo, { 
        tag: 'myspecialtag',
      }),
    });
  }
}
