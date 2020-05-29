import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";

export class CicdStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "SpringVpc", {
      maxAzs: 2 // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, "MyCluster4Spring", {
      vpc: vpc
    });

    // Create a load-balanced Fargate service and make it public
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster: cluster, // Required
      cpu: 512, // Default is 256
      desiredCount: 3, // Default is 1
      // taskImageOptions: { image: ecs.ContainerImage.fromAsset("../") },
      taskImageOptions: { image: ecs.ContainerImage.fromRegistry("hewenjing99/spring-demo") },
      memoryLimitMiB: 4096, // Default is 512
      publicLoadBalancer: true // Default is false
    });
  }
}
