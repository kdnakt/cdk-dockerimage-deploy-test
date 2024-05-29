import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { CdkTest1Stack } from "../lib/cdk-test1-stack";

test("snapshot test", () => {
    const app = new cdk.App();
    const stack = new CdkTest1Stack(app, "MyTestStack");
    const template = Template.fromStack(stack).toJSON();
    expect(template).toMatchSnapshot();
});
