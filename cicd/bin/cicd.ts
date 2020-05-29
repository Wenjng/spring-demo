#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CicdStack } from '../lib/cicd-stack';

const app = new cdk.App();
new CicdStack(app, 'CicdStack');
