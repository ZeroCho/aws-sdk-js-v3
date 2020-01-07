import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *         <p>Represents the input of, and adds tags to, an on-premises instance operation.</p>
 *
 */
export interface AddTagsToOnPremisesInstancesInput {
  __type?: "AddTagsToOnPremisesInstancesInput";
  /**
   *
   *         <p>The names of the on-premises instances to which to add tags.</p>
   *
   */
  instanceNames: Array<string> | undefined;

  /**
   *
   *         <p>The tag key-value pairs to add to the on-premises instances.</p>
   *         <p>Keys and values are both required. Keys cannot be null or empty strings. Value-only
   *             tags are not allowed.</p>
   *
   */
  tags: Array<Tag> | undefined;
}

export namespace AddTagsToOnPremisesInstancesInput {
  export function isa(o: any): o is AddTagsToOnPremisesInstancesInput {
    return _smithy.isa(o, "AddTagsToOnPremisesInstancesInput");
  }
}

/**
 *
 *         <p>Information about an alarm.</p>
 *
 */
export interface Alarm {
  __type?: "Alarm";
  /**
   *
   *         <p>The name of the alarm. Maximum length is 255 characters. Each alarm name can be used
   *             only once in a list of alarms.</p>
   *
   */
  name?: string;
}

export namespace Alarm {
  export function isa(o: any): o is Alarm {
    return _smithy.isa(o, "Alarm");
  }
}

/**
 *
 *         <p>Information about alarms associated with the deployment group.</p>
 *
 */
export interface AlarmConfiguration {
  __type?: "AlarmConfiguration";
  /**
   *
   *         <p>A list of alarms configured for the deployment group. A maximum of 10 alarms can be
   *             added to a deployment group.</p>
   *
   */
  alarms?: Array<Alarm>;

  /**
   *
   *         <p>Indicates whether the alarm configuration is enabled.</p>
   *
   */
  enabled?: boolean;

  /**
   *
   *         <p>Indicates whether a deployment should continue if information about the current state
   *             of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.</p>
   *         <ul>
   *             <li>
   *                 <p>true: The deployment proceeds even if alarm status information can't be
   *                     retrieved from Amazon CloudWatch.</p>
   *             </li>
   *             <li>
   *                 <p>false: The deployment stops if alarm status information can't be retrieved
   *                     from Amazon CloudWatch.</p>
   *             </li>
   *          </ul>
   *
   */
  ignorePollAlarmFailure?: boolean;
}

export namespace AlarmConfiguration {
  export function isa(o: any): o is AlarmConfiguration {
    return _smithy.isa(o, "AlarmConfiguration");
  }
}

/**
 *
 *         <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 *
 */
export interface AlarmsLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AlarmsLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace AlarmsLimitExceededException {
  export function isa(o: any): o is AlarmsLimitExceededException {
    return _smithy.isa(o, "AlarmsLimitExceededException");
  }
}

/**
 *
 *         <p> A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or
 *             JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the
 *             same as the AppSpec file. This method replaces the deprecated <code>RawString</code>
 *             data type. </p>
 *
 */
export interface AppSpecContent {
  __type?: "AppSpecContent";
  /**
   *
   *         <p> The YAML-formatted or JSON-formatted revision string. </p>
   *         <p> For an AWS Lambda deployment, the content includes a Lambda function name, the alias
   *             for its original version, and the alias for its replacement version. The deployment
   *             shifts traffic from the original version of the Lambda function to the replacement
   *             version. </p>
   *         <p> For an Amazon ECS deployment, the content includes the task name, information about
   *             the load balancer that serves traffic to the container, and more. </p>
   *         <p> For both types of deployments, the content can specify Lambda functions that run at
   *             specified hooks, such as <code>BeforeInstall</code>, during a deployment. </p>
   *
   */
  content?: string;

  /**
   *
   *         <p> The SHA256 hash value of the revision content. </p>
   *
   */
  sha256?: string;
}

export namespace AppSpecContent {
  export function isa(o: any): o is AppSpecContent {
    return _smithy.isa(o, "AppSpecContent");
  }
}

/**
 *
 *         <p>An application with the specified name with the IAM user or AWS account already
 *             exists.</p>
 *
 */
export interface ApplicationAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ApplicationAlreadyExistsException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ApplicationAlreadyExistsException {
  export function isa(o: any): o is ApplicationAlreadyExistsException {
    return _smithy.isa(o, "ApplicationAlreadyExistsException");
  }
}

/**
 *
 *         <p>The application does not exist with the IAM user or AWS account.</p>
 *
 */
export interface ApplicationDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ApplicationDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ApplicationDoesNotExistException {
  export function isa(o: any): o is ApplicationDoesNotExistException {
    return _smithy.isa(o, "ApplicationDoesNotExistException");
  }
}

/**
 *
 *         <p>Information about an application.</p>
 *
 */
export interface ApplicationInfo {
  __type?: "ApplicationInfo";
  /**
   *
   *         <p>The application ID.</p>
   *
   */
  applicationId?: string;

  /**
   *
   *         <p>The application name.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>The destination platform type for deployment of the application (<code>Lambda</code>
   *             or <code>Server</code>).</p>
   *
   */
  computePlatform?: ComputePlatform | string;

  /**
   *
   *         <p>The time at which the application was created.</p>
   *
   */
  createTime?: Date;

  /**
   *
   *         <p>The name for a connection to a GitHub account.</p>
   *
   */
  gitHubAccountName?: string;

  /**
   *
   *         <p>True if the user has authenticated with GitHub for the specified application.
   *             Otherwise, false.</p>
   *
   */
  linkedToGitHub?: boolean;
}

export namespace ApplicationInfo {
  export function isa(o: any): o is ApplicationInfo {
    return _smithy.isa(o, "ApplicationInfo");
  }
}

/**
 *
 *         <p>More applications were attempted to be created than are allowed.</p>
 *
 */
export interface ApplicationLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ApplicationLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ApplicationLimitExceededException {
  export function isa(o: any): o is ApplicationLimitExceededException {
    return _smithy.isa(o, "ApplicationLimitExceededException");
  }
}

/**
 *
 *         <p>The minimum number of required application names was not specified.</p>
 *
 */
export interface ApplicationNameRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ApplicationNameRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ApplicationNameRequiredException {
  export function isa(o: any): o is ApplicationNameRequiredException {
    return _smithy.isa(o, "ApplicationNameRequiredException");
  }
}

export enum ApplicationRevisionSortBy {
  FirstUsedTime = "firstUsedTime",
  LastUsedTime = "lastUsedTime",
  RegisterTime = "registerTime"
}

/**
 *
 *         <p>
 *             The specified ARN is not supported. For example, it might be an ARN for a resource that is not expected.
 *         </p>
 *
 */
export interface ArnNotSupportedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ArnNotSupportedException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ArnNotSupportedException {
  export function isa(o: any): o is ArnNotSupportedException {
    return _smithy.isa(o, "ArnNotSupportedException");
  }
}

/**
 *
 *         <p>Information about a configuration for automatically rolling back to a previous version
 *             of an application revision when a deployment is not completed successfully.</p>
 *
 */
export interface AutoRollbackConfiguration {
  __type?: "AutoRollbackConfiguration";
  /**
   *
   *         <p>Indicates whether a defined automatic rollback configuration is currently
   *             enabled.</p>
   *
   */
  enabled?: boolean;

  /**
   *
   *         <p>The event type or types that trigger a rollback.</p>
   *
   */
  events?: Array<AutoRollbackEvent | string>;
}

export namespace AutoRollbackConfiguration {
  export function isa(o: any): o is AutoRollbackConfiguration {
    return _smithy.isa(o, "AutoRollbackConfiguration");
  }
}

export enum AutoRollbackEvent {
  DEPLOYMENT_FAILURE = "DEPLOYMENT_FAILURE",
  DEPLOYMENT_STOP_ON_ALARM = "DEPLOYMENT_STOP_ON_ALARM",
  DEPLOYMENT_STOP_ON_REQUEST = "DEPLOYMENT_STOP_ON_REQUEST"
}

/**
 *
 *         <p>Information about an Auto Scaling group.</p>
 *
 */
export interface AutoScalingGroup {
  __type?: "AutoScalingGroup";
  /**
   *
   *         <p>An Auto Scaling lifecycle event hook name.</p>
   *
   */
  hook?: string;

  /**
   *
   *         <p>The Auto Scaling group name.</p>
   *
   */
  name?: string;
}

export namespace AutoScalingGroup {
  export function isa(o: any): o is AutoScalingGroup {
    return _smithy.isa(o, "AutoScalingGroup");
  }
}

/**
 *
 *         <p>Represents the input of a BatchGetApplicationRevisions operation.</p>
 *
 */
export interface BatchGetApplicationRevisionsInput {
  __type?: "BatchGetApplicationRevisionsInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application about which to get revision
   *             information.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>An array of <code>RevisionLocation</code> objects that specify information to get about the application revisions, including type and
   *             location. The maximum number of <code>RevisionLocation</code> objects you can specify is 25.</p>
   *
   */
  revisions: Array<RevisionLocation> | undefined;
}

export namespace BatchGetApplicationRevisionsInput {
  export function isa(o: any): o is BatchGetApplicationRevisionsInput {
    return _smithy.isa(o, "BatchGetApplicationRevisionsInput");
  }
}

/**
 *
 *         <p>Represents the output of a BatchGetApplicationRevisions operation.</p>
 *
 */
export interface BatchGetApplicationRevisionsOutput extends $MetadataBearer {
  __type?: "BatchGetApplicationRevisionsOutput";
  /**
   *
   *         <p>The name of the application that corresponds to the revisions.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>Information about errors that might have occurred during the API call.</p>
   *
   */
  errorMessage?: string;

  /**
   *
   *         <p>Additional information about the revisions, including the type and location.</p>
   *
   */
  revisions?: Array<RevisionInfo>;
}

export namespace BatchGetApplicationRevisionsOutput {
  export function isa(o: any): o is BatchGetApplicationRevisionsOutput {
    return _smithy.isa(o, "BatchGetApplicationRevisionsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a BatchGetApplications operation.</p>
 *
 */
export interface BatchGetApplicationsInput {
  __type?: "BatchGetApplicationsInput";
  /**
   *
   *         <p>A list of application names separated by spaces. The maximum number of application names you can specify is 25.</p>
   *
   */
  applicationNames: Array<string> | undefined;
}

export namespace BatchGetApplicationsInput {
  export function isa(o: any): o is BatchGetApplicationsInput {
    return _smithy.isa(o, "BatchGetApplicationsInput");
  }
}

/**
 *
 *         <p>Represents the output of a BatchGetApplications operation.</p>
 *
 */
export interface BatchGetApplicationsOutput extends $MetadataBearer {
  __type?: "BatchGetApplicationsOutput";
  /**
   *
   *         <p>Information about the applications.</p>
   *
   */
  applicationsInfo?: Array<ApplicationInfo>;
}

export namespace BatchGetApplicationsOutput {
  export function isa(o: any): o is BatchGetApplicationsOutput {
    return _smithy.isa(o, "BatchGetApplicationsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a BatchGetDeploymentGroups operation.</p>
 *
 */
export interface BatchGetDeploymentGroupsInput {
  __type?: "BatchGetDeploymentGroupsInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the applicable IAM user or
   *             AWS account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>The names of the deployment groups.</p>
   *
   */
  deploymentGroupNames: Array<string> | undefined;
}

export namespace BatchGetDeploymentGroupsInput {
  export function isa(o: any): o is BatchGetDeploymentGroupsInput {
    return _smithy.isa(o, "BatchGetDeploymentGroupsInput");
  }
}

/**
 *
 *         <p>Represents the output of a BatchGetDeploymentGroups operation.</p>
 *
 */
export interface BatchGetDeploymentGroupsOutput extends $MetadataBearer {
  __type?: "BatchGetDeploymentGroupsOutput";
  /**
   *
   *         <p>Information about the deployment groups.</p>
   *
   */
  deploymentGroupsInfo?: Array<DeploymentGroupInfo>;

  /**
   *
   *         <p>Information about errors that might have occurred during the API call.</p>
   *
   */
  errorMessage?: string;
}

export namespace BatchGetDeploymentGroupsOutput {
  export function isa(o: any): o is BatchGetDeploymentGroupsOutput {
    return _smithy.isa(o, "BatchGetDeploymentGroupsOutput");
  }
}

/**
 *
 *         <p> Represents the input of a BatchGetDeploymentInstances operation. </p>
 *
 */
export interface BatchGetDeploymentInstancesInput {
  __type?: "BatchGetDeploymentInstancesInput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId: string | undefined;

  /**
   *
   *         <p>The unique IDs of instances used in the deployment. The maximum number of instance IDs you can specify is 25.</p>
   *
   */
  instanceIds: Array<string> | undefined;
}

export namespace BatchGetDeploymentInstancesInput {
  export function isa(o: any): o is BatchGetDeploymentInstancesInput {
    return _smithy.isa(o, "BatchGetDeploymentInstancesInput");
  }
}

/**
 *
 *         <p>Represents the output of a BatchGetDeploymentInstances operation.</p>
 *
 */
export interface BatchGetDeploymentInstancesOutput extends $MetadataBearer {
  __type?: "BatchGetDeploymentInstancesOutput";
  /**
   *
   *         <p>Information about errors that might have occurred during the API call.</p>
   *
   */
  errorMessage?: string;

  /**
   *
   *         <p>Information about the instance.</p>
   *
   */
  instancesSummary?: Array<InstanceSummary>;
}

export namespace BatchGetDeploymentInstancesOutput {
  export function isa(o: any): o is BatchGetDeploymentInstancesOutput {
    return _smithy.isa(o, "BatchGetDeploymentInstancesOutput");
  }
}

export interface BatchGetDeploymentTargetsInput {
  __type?: "BatchGetDeploymentTargetsInput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> The unique IDs of the deployment targets. The compute platform of the deployment
   *             determines the type of the targets and their formats. The maximum number of deployment target IDs you can specify is 25.</p>
   *         <ul>
   *             <li>
   *                 <p> For deployments that use the EC2/On-premises compute platform, the target IDs
   *                     are EC2 or on-premises instances IDs, and their target type is
   *                     <code>instanceTarget</code>. </p>
   *             </li>
   *             <li>
   *                 <p> For deployments that use the AWS Lambda compute platform, the target IDs are
   *                     the names of Lambda functions, and their target type is
   *                     <code>instanceTarget</code>. </p>
   *             </li>
   *             <li>
   *                 <p> For deployments that use the Amazon ECS compute platform, the target IDs are
   *                     pairs of Amazon ECS clusters and services specified using the format
   *                     <code><clustername>:<servicename></code>. Their target type is
   *                     <code>ecsTarget</code>. </p>
   *             </li>
   *          </ul>
   *
   */
  targetIds?: Array<string>;
}

export namespace BatchGetDeploymentTargetsInput {
  export function isa(o: any): o is BatchGetDeploymentTargetsInput {
    return _smithy.isa(o, "BatchGetDeploymentTargetsInput");
  }
}

export interface BatchGetDeploymentTargetsOutput extends $MetadataBearer {
  __type?: "BatchGetDeploymentTargetsOutput";
  /**
   *
   *         <p> A list of target objects for a deployment. Each target object contains details about
   *             the target, such as its status and lifecycle events. The type of the target objects
   *             depends on the deployment' compute platform. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>EC2/On-premises</b>: Each target object is an EC2
   *                     or on-premises instance. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>AWS Lambda</b>: The target object is a specific
   *                     version of an AWS Lambda function. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Amazon ECS</b>: The target object is an Amazon ECS
   *                     service. </p>
   *             </li>
   *          </ul>
   *
   */
  deploymentTargets?: Array<DeploymentTarget>;
}

export namespace BatchGetDeploymentTargetsOutput {
  export function isa(o: any): o is BatchGetDeploymentTargetsOutput {
    return _smithy.isa(o, "BatchGetDeploymentTargetsOutput");
  }
}

/**
 *
 *         <p> Represents the input of a BatchGetDeployments operation. </p>
 *
 */
export interface BatchGetDeploymentsInput {
  __type?: "BatchGetDeploymentsInput";
  /**
   *
   *         <p> A list of deployment IDs, separated by spaces. The maximum number of deployment IDs you can specify is 25.</p>
   *
   */
  deploymentIds: Array<string> | undefined;
}

export namespace BatchGetDeploymentsInput {
  export function isa(o: any): o is BatchGetDeploymentsInput {
    return _smithy.isa(o, "BatchGetDeploymentsInput");
  }
}

/**
 *
 *         <p> Represents the output of a BatchGetDeployments operation. </p>
 *
 */
export interface BatchGetDeploymentsOutput extends $MetadataBearer {
  __type?: "BatchGetDeploymentsOutput";
  /**
   *
   *         <p> Information about the deployments. </p>
   *
   */
  deploymentsInfo?: Array<DeploymentInfo>;
}

export namespace BatchGetDeploymentsOutput {
  export function isa(o: any): o is BatchGetDeploymentsOutput {
    return _smithy.isa(o, "BatchGetDeploymentsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a BatchGetOnPremisesInstances operation.</p>
 *
 */
export interface BatchGetOnPremisesInstancesInput {
  __type?: "BatchGetOnPremisesInstancesInput";
  /**
   *
   *         <p>The names of the on-premises instances about which to get information. The maximum number of instance names you can specify is 25.</p>
   *
   */
  instanceNames: Array<string> | undefined;
}

export namespace BatchGetOnPremisesInstancesInput {
  export function isa(o: any): o is BatchGetOnPremisesInstancesInput {
    return _smithy.isa(o, "BatchGetOnPremisesInstancesInput");
  }
}

/**
 *
 *         <p>Represents the output of a BatchGetOnPremisesInstances operation.</p>
 *
 */
export interface BatchGetOnPremisesInstancesOutput extends $MetadataBearer {
  __type?: "BatchGetOnPremisesInstancesOutput";
  /**
   *
   *         <p>Information about the on-premises instances.</p>
   *
   */
  instanceInfos?: Array<InstanceInfo>;
}

export namespace BatchGetOnPremisesInstancesOutput {
  export function isa(o: any): o is BatchGetOnPremisesInstancesOutput {
    return _smithy.isa(o, "BatchGetOnPremisesInstancesOutput");
  }
}

/**
 *
 *         <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 */
export interface BatchLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "BatchLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace BatchLimitExceededException {
  export function isa(o: any): o is BatchLimitExceededException {
    return _smithy.isa(o, "BatchLimitExceededException");
  }
}

/**
 *
 *         <p>Information about blue/green deployment options for a deployment group.</p>
 *
 */
export interface BlueGreenDeploymentConfiguration {
  __type?: "BlueGreenDeploymentConfiguration";
  /**
   *
   *         <p>Information about the action to take when newly provisioned instances are ready to
   *             receive traffic in a blue/green deployment.</p>
   *
   */
  deploymentReadyOption?: DeploymentReadyOption;

  /**
   *
   *         <p>Information about how instances are provisioned for a replacement environment in a
   *             blue/green deployment.</p>
   *
   */
  greenFleetProvisioningOption?: GreenFleetProvisioningOption;

  /**
   *
   *         <p>Information about whether to terminate instances in the original fleet during a
   *             blue/green deployment.</p>
   *
   */
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
}

export namespace BlueGreenDeploymentConfiguration {
  export function isa(o: any): o is BlueGreenDeploymentConfiguration {
    return _smithy.isa(o, "BlueGreenDeploymentConfiguration");
  }
}

/**
 *
 *         <p>Information about whether instances in the original environment are terminated when a
 *             blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not
 *             apply to Lambda deployments.
 *         </p>
 *
 */
export interface BlueInstanceTerminationOption {
  __type?: "BlueInstanceTerminationOption";
  /**
   *
   *         <p>The action to take on instances in the original environment after a successful
   *             blue/green deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>TERMINATE: Instances are terminated after a specified wait time.</p>
   *             </li>
   *             <li>
   *                 <p>KEEP_ALIVE: Instances are left running after they are deregistered from the
   *                     load balancer and removed from the deployment group.</p>
   *             </li>
   *          </ul>
   *
   */
  action?: InstanceAction | string;

  /**
   *
   *         <p>For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before
   *             terminating instances from the original environment.</p>
   *
   *         <p>
   *             For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment,
   *             CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set.
   *         </p>
   *
   *         <p>
   *             The maximum setting is 2880 minutes (2 days).
   *         </p>
   *
   *
   */
  terminationWaitTimeInMinutes?: number;
}

export namespace BlueInstanceTerminationOption {
  export function isa(o: any): o is BlueInstanceTerminationOption {
    return _smithy.isa(o, "BlueInstanceTerminationOption");
  }
}

/**
 *
 *         <p>A bucket name is required, but was not provided.</p>
 *
 */
export interface BucketNameFilterRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "BucketNameFilterRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace BucketNameFilterRequiredException {
  export function isa(o: any): o is BucketNameFilterRequiredException {
    return _smithy.isa(o, "BucketNameFilterRequiredException");
  }
}

export enum BundleType {
  JSON = "JSON",
  Tar = "tar",
  TarGZip = "tgz",
  YAML = "YAML",
  Zip = "zip"
}

export enum ComputePlatform {
  ECS = "ECS",
  LAMBDA = "Lambda",
  SERVER = "Server"
}

export interface ContinueDeploymentInput {
  __type?: "ContinueDeploymentInput";
  /**
   *
   *         <p> The unique ID of a blue/green deployment for which you want to start rerouting
   *             traffic to the replacement environment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> The status of the deployment's waiting period. READY_WAIT indicates the deployment is
   *             ready to start shifting traffic. TERMINATION_WAIT indicates the traffic is shifted, but
   *             the original target is not terminated. </p>
   *
   */
  deploymentWaitType?: DeploymentWaitType | string;
}

export namespace ContinueDeploymentInput {
  export function isa(o: any): o is ContinueDeploymentInput {
    return _smithy.isa(o, "ContinueDeploymentInput");
  }
}

/**
 *
 *         <p>Represents the input of a CreateApplication operation.</p>
 *
 */
export interface CreateApplicationInput {
  __type?: "CreateApplicationInput";
  /**
   *
   *         <p>The name of the application. This name must be unique with the applicable IAM user or
   *             AWS account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p> The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   *
   */
  computePlatform?: ComputePlatform | string;

  /**
   *
   *         <p>
   *             The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag
   *             consists of a key and an optional value, both of which you define.
   *         </p>
   *
   */
  tags?: Array<Tag>;
}

export namespace CreateApplicationInput {
  export function isa(o: any): o is CreateApplicationInput {
    return _smithy.isa(o, "CreateApplicationInput");
  }
}

/**
 *
 *         <p>Represents the output of a CreateApplication operation.</p>
 *
 */
export interface CreateApplicationOutput extends $MetadataBearer {
  __type?: "CreateApplicationOutput";
  /**
   *
   *         <p>A unique application ID.</p>
   *
   */
  applicationId?: string;
}

export namespace CreateApplicationOutput {
  export function isa(o: any): o is CreateApplicationOutput {
    return _smithy.isa(o, "CreateApplicationOutput");
  }
}

/**
 *
 *         <p>Represents the input of a CreateDeploymentConfig operation.</p>
 *
 */
export interface CreateDeploymentConfigInput {
  __type?: "CreateDeploymentConfigInput";
  /**
   *
   *         <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   *
   */
  computePlatform?: ComputePlatform | string;

  /**
   *
   *         <p>The name of the deployment configuration to create.</p>
   *
   */
  deploymentConfigName: string | undefined;

  /**
   *
   *         <p>The minimum number of healthy instances that should be available at any time during
   *             the deployment. There are two parameters expected in the input: type and value.</p>
   *         <p>The type parameter takes either of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>HOST_COUNT: The value parameter represents the minimum number of healthy
   *                     instances as an absolute value.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_PERCENT: The value parameter represents the minimum number of healthy
   *                     instances as a percentage of the total number of instances in the deployment. If
   *                     you specify FLEET_PERCENT, at the start of the deployment, AWS CodeDeploy
   *                     converts the percentage to the equivalent number of instance and rounds up
   *                     fractional instances.</p>
   *             </li>
   *          </ul>
   *         <p>The value parameter takes an integer.</p>
   *         <p>For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT
   *             and a value of 95.</p>
   *
   */
  minimumHealthyHosts?: MinimumHealthyHosts;

  /**
   *
   *         <p>The configuration that specifies how the deployment traffic is routed.</p>
   *
   */
  trafficRoutingConfig?: TrafficRoutingConfig;
}

export namespace CreateDeploymentConfigInput {
  export function isa(o: any): o is CreateDeploymentConfigInput {
    return _smithy.isa(o, "CreateDeploymentConfigInput");
  }
}

/**
 *
 *         <p>Represents the output of a CreateDeploymentConfig operation.</p>
 *
 */
export interface CreateDeploymentConfigOutput extends $MetadataBearer {
  __type?: "CreateDeploymentConfigOutput";
  /**
   *
   *         <p>A unique deployment configuration ID.</p>
   *
   */
  deploymentConfigId?: string;
}

export namespace CreateDeploymentConfigOutput {
  export function isa(o: any): o is CreateDeploymentConfigOutput {
    return _smithy.isa(o, "CreateDeploymentConfigOutput");
  }
}

/**
 *
 *         <p>Represents the input of a CreateDeploymentGroup operation.</p>
 *
 */
export interface CreateDeploymentGroupInput {
  __type?: "CreateDeploymentGroupInput";
  /**
   *
   *         <p>Information to add about Amazon CloudWatch alarms when the deployment group is
   *             created.</p>
   *
   */
  alarmConfiguration?: AlarmConfiguration;

  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>Configuration information for an automatic rollback that is added when a deployment
   *             group is created.</p>
   *
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   *
   *         <p>A list of associated Amazon EC2 Auto Scaling groups.</p>
   *
   */
  autoScalingGroups?: Array<string>;

  /**
   *
   *         <p>Information about blue/green deployment options for a deployment group.</p>
   *
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   *
   *         <p>If specified, the deployment configuration name can be either one of the predefined
   *             configurations provided with AWS CodeDeploy or a custom deployment configuration that
   *             you create by calling the create deployment configuration operation.</p>
   *         <p>CodeDeployDefault.OneAtATime is the default deployment configuration. It is used if a
   *             configuration isn't specified for the deployment or deployment group.</p>
   *         <p>For more information about the predefined deployment configurations in AWS CodeDeploy,
   *             see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html">Working with
   *                 Deployment Groups in AWS CodeDeploy</a> in the AWS CodeDeploy User Guide.</p>
   *
   */
  deploymentConfigName?: string;

  /**
   *
   *         <p>The name of a new deployment group for the specified application.</p>
   *
   */
  deploymentGroupName: string | undefined;

  /**
   *
   *         <p>Information about the type of deployment, in-place or blue/green, that you want to run
   *             and whether to route deployment traffic behind a load balancer.</p>
   *
   */
  deploymentStyle?: DeploymentStyle;

  /**
   *
   *         <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances
   *             with any of the specified tags. Cannot be used in the same call as ec2TagSet.</p>
   *
   */
  ec2TagFilters?: Array<EC2TagFilter>;

  /**
   *
   *         <p>Information about groups of tags applied to EC2 instances. The deployment group
   *             includes only EC2 instances identified by all the tag groups. Cannot be used in the same
   *             call as ec2TagFilters.</p>
   *
   */
  ec2TagSet?: EC2TagSet;

  /**
   *
   *         <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service
   *             is specified as an Amazon ECS cluster and service name pair using the format
   *             <code><clustername>:<servicename></code>. </p>
   *
   */
  ecsServices?: Array<ECSService>;

  /**
   *
   *         <p>Information about the load balancer used in a deployment.</p>
   *
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   *
   *         <p>The on-premises instance tags on which to filter. The deployment group includes
   *             on-premises instances with any of the specified tags. Cannot be used in the same call as
   *             OnPremisesTagSet.</p>
   *
   */
  onPremisesInstanceTagFilters?: Array<TagFilter>;

  /**
   *
   *         <p>Information about groups of tags applied to on-premises instances. The deployment
   *             group includes only on-premises instances identified by all of the tag groups. Cannot be
   *             used in the same call as onPremisesInstanceTagFilters.</p>
   *
   */
  onPremisesTagSet?: OnPremisesTagSet;

  /**
   *
   *         <p>A service role ARN that allows AWS CodeDeploy to act on the user's behalf when
   *             interacting with AWS services.</p>
   *
   */
  serviceRoleArn: string | undefined;

  /**
   *
   *         <p>
   *             The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag
   *             consists of a key and an optional value, both of which you define.
   *         </p>
   *
   */
  tags?: Array<Tag>;

  /**
   *
   *         <p>Information about triggers to create when the deployment group is created. For
   *             examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html">Create a Trigger for an
   *                 AWS CodeDeploy Event</a> in the AWS CodeDeploy User Guide.</p>
   *
   */
  triggerConfigurations?: Array<TriggerConfig>;
}

export namespace CreateDeploymentGroupInput {
  export function isa(o: any): o is CreateDeploymentGroupInput {
    return _smithy.isa(o, "CreateDeploymentGroupInput");
  }
}

/**
 *
 *         <p>Represents the output of a CreateDeploymentGroup operation.</p>
 *
 */
export interface CreateDeploymentGroupOutput extends $MetadataBearer {
  __type?: "CreateDeploymentGroupOutput";
  /**
   *
   *         <p>A unique deployment group ID.</p>
   *
   */
  deploymentGroupId?: string;
}

export namespace CreateDeploymentGroupOutput {
  export function isa(o: any): o is CreateDeploymentGroupOutput {
    return _smithy.isa(o, "CreateDeploymentGroupOutput");
  }
}

/**
 *
 *         <p>Represents the input of a CreateDeployment operation.</p>
 *
 */
export interface CreateDeploymentInput {
  __type?: "CreateDeploymentInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>Configuration information for an automatic rollback that is added when a deployment is
   *             created.</p>
   *
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   *
   *         <p>The name of a deployment configuration associated with the IAM user or AWS
   *             account.</p>
   *         <p>If not specified, the value configured in the deployment group is used as the default.
   *             If the deployment group does not have a deployment configuration associated with it,
   *             CodeDeployDefault.OneAtATime is used by default.</p>
   *
   */
  deploymentConfigName?: string;

  /**
   *
   *         <p>The name of the deployment group.</p>
   *
   */
  deploymentGroupName?: string;

  /**
   *
   *         <p>A comment about the deployment.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>Information about how AWS CodeDeploy handles files that already exist in a deployment
   *             target location but weren't part of the previous successful deployment.</p>
   *         <p>The fileExistsBehavior parameter takes any of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>DISALLOW: The deployment fails. This is also the default behavior if no option
   *                     is specified.</p>
   *             </li>
   *             <li>
   *                 <p>OVERWRITE: The version of the file from the application revision currently
   *                     being deployed replaces the version already on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>RETAIN: The version of the file already on the instance is kept and used as
   *                     part of the new deployment.</p>
   *             </li>
   *          </ul>
   *
   */
  fileExistsBehavior?: FileExistsBehavior | string;

  /**
   *
   *         <p>
   *             If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to
   *             an instance fails, then the deployment continues to the next deployment lifecycle event.
   *             For example, if ApplicationStop fails, the deployment continues with DownloadBundle. If BeforeBlockTraffic fails,
   *             the deployment continues with BlockTraffic. If AfterBlockTraffic fails, the deployment continues with ApplicationStop.
   *         </p>
   *
   *         <p>
   *             If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails.
   *             If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts,
   *             then a deployment to the next instance is attempted.
   *         </p>
   *
   *         <p>
   *             During a deployment, the AWS CodeDeploy agent runs the scripts specified for ApplicationStop,
   *             BeforeBlockTraffic, and AfterBlockTraffic in the AppSpec file from the previous successful deployment.
   *             (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts
   *             contains an error and does not run successfully, the deployment can fail.
   *         </p>
   *
   *         <p>
   *             If the cause of the failure is a script from the last successful deployment that will never run successfully,
   *             create a new deployment and use <code>ignoreApplicationStopFailures</code> to specify that the ApplicationStop,
   *             BeforeBlockTraffic, and AfterBlockTraffic failures should be ignored.
   *         </p>
   *
   */
  ignoreApplicationStopFailures?: boolean;

  /**
   *
   *         <p> The type and location of the revision to deploy. </p>
   *
   */
  revision?: RevisionLocation;

  /**
   *
   *         <p> Information about the instances that belong to the replacement environment in a
   *             blue/green deployment. </p>
   *
   */
  targetInstances?: TargetInstances;

  /**
   *
   *         <p> Indicates whether to deploy to all instances or only to instances that are not
   *             running the latest application revision. </p>
   *
   */
  updateOutdatedInstancesOnly?: boolean;
}

export namespace CreateDeploymentInput {
  export function isa(o: any): o is CreateDeploymentInput {
    return _smithy.isa(o, "CreateDeploymentInput");
  }
}

/**
 *
 *         <p> Represents the output of a CreateDeployment operation. </p>
 *
 */
export interface CreateDeploymentOutput extends $MetadataBearer {
  __type?: "CreateDeploymentOutput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;
}

export namespace CreateDeploymentOutput {
  export function isa(o: any): o is CreateDeploymentOutput {
    return _smithy.isa(o, "CreateDeploymentOutput");
  }
}

/**
 *
 *         <p>Represents the input of a DeleteApplication operation.</p>
 *
 */
export interface DeleteApplicationInput {
  __type?: "DeleteApplicationInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;
}

export namespace DeleteApplicationInput {
  export function isa(o: any): o is DeleteApplicationInput {
    return _smithy.isa(o, "DeleteApplicationInput");
  }
}

/**
 *
 *         <p>Represents the input of a DeleteDeploymentConfig operation.</p>
 *
 */
export interface DeleteDeploymentConfigInput {
  __type?: "DeleteDeploymentConfigInput";
  /**
   *
   *         <p>The name of a deployment configuration associated with the IAM user or AWS
   *             account.</p>
   *
   */
  deploymentConfigName: string | undefined;
}

export namespace DeleteDeploymentConfigInput {
  export function isa(o: any): o is DeleteDeploymentConfigInput {
    return _smithy.isa(o, "DeleteDeploymentConfigInput");
  }
}

/**
 *
 *         <p>Represents the input of a DeleteDeploymentGroup operation.</p>
 *
 */
export interface DeleteDeploymentGroupInput {
  __type?: "DeleteDeploymentGroupInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>The name of a deployment group for the specified application.</p>
   *
   */
  deploymentGroupName: string | undefined;
}

export namespace DeleteDeploymentGroupInput {
  export function isa(o: any): o is DeleteDeploymentGroupInput {
    return _smithy.isa(o, "DeleteDeploymentGroupInput");
  }
}

/**
 *
 *         <p>Represents the output of a DeleteDeploymentGroup operation.</p>
 *
 */
export interface DeleteDeploymentGroupOutput extends $MetadataBearer {
  __type?: "DeleteDeploymentGroupOutput";
  /**
   *
   *         <p>If the output contains no data, and the corresponding deployment group contained at
   *             least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto
   *             Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group.
   *             If the output contains data, AWS CodeDeploy could not remove some Auto Scaling lifecycle
   *             event hooks from the Amazon EC2 instances in the Auto Scaling group.</p>
   *
   */
  hooksNotCleanedUp?: Array<AutoScalingGroup>;
}

export namespace DeleteDeploymentGroupOutput {
  export function isa(o: any): o is DeleteDeploymentGroupOutput {
    return _smithy.isa(o, "DeleteDeploymentGroupOutput");
  }
}

/**
 *
 *         <p>Represents the input of a DeleteGitHubAccount operation.</p>
 *
 */
export interface DeleteGitHubAccountTokenInput {
  __type?: "DeleteGitHubAccountTokenInput";
  /**
   *
   *         <p>The name of the GitHub account connection to delete.</p>
   *
   */
  tokenName?: string;
}

export namespace DeleteGitHubAccountTokenInput {
  export function isa(o: any): o is DeleteGitHubAccountTokenInput {
    return _smithy.isa(o, "DeleteGitHubAccountTokenInput");
  }
}

/**
 *
 *         <p>Represents the output of a DeleteGitHubAccountToken operation.</p>
 *
 */
export interface DeleteGitHubAccountTokenOutput extends $MetadataBearer {
  __type?: "DeleteGitHubAccountTokenOutput";
  /**
   *
   *         <p>The name of the GitHub account connection that was deleted.</p>
   *
   */
  tokenName?: string;
}

export namespace DeleteGitHubAccountTokenOutput {
  export function isa(o: any): o is DeleteGitHubAccountTokenOutput {
    return _smithy.isa(o, "DeleteGitHubAccountTokenOutput");
  }
}

/**
 *
 *         <p>The deployment is already complete.</p>
 *
 */
export interface DeploymentAlreadyCompletedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentAlreadyCompletedException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentAlreadyCompletedException {
  export function isa(o: any): o is DeploymentAlreadyCompletedException {
    return _smithy.isa(o, "DeploymentAlreadyCompletedException");
  }
}

/**
 *
 *         <p>A deployment configuration with the specified name with the  IAM user or AWS account
 *             already exists .</p>
 *
 */
export interface DeploymentConfigAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentConfigAlreadyExistsException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentConfigAlreadyExistsException {
  export function isa(o: any): o is DeploymentConfigAlreadyExistsException {
    return _smithy.isa(o, "DeploymentConfigAlreadyExistsException");
  }
}

/**
 *
 *         <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
 *
 */
export interface DeploymentConfigDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentConfigDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentConfigDoesNotExistException {
  export function isa(o: any): o is DeploymentConfigDoesNotExistException {
    return _smithy.isa(o, "DeploymentConfigDoesNotExistException");
  }
}

/**
 *
 *         <p>The deployment configuration is still in use.</p>
 *
 */
export interface DeploymentConfigInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentConfigInUseException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentConfigInUseException {
  export function isa(o: any): o is DeploymentConfigInUseException {
    return _smithy.isa(o, "DeploymentConfigInUseException");
  }
}

/**
 *
 *         <p>Information about a deployment configuration.</p>
 *
 */
export interface DeploymentConfigInfo {
  __type?: "DeploymentConfigInfo";
  /**
   *
   *         <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   *
   */
  computePlatform?: ComputePlatform | string;

  /**
   *
   *         <p>The time at which the deployment configuration was created.</p>
   *
   */
  createTime?: Date;

  /**
   *
   *         <p>The deployment configuration ID.</p>
   *
   */
  deploymentConfigId?: string;

  /**
   *
   *         <p>The deployment configuration name.</p>
   *
   */
  deploymentConfigName?: string;

  /**
   *
   *         <p>Information about the number or percentage of minimum healthy instance.</p>
   *
   */
  minimumHealthyHosts?: MinimumHealthyHosts;

  /**
   *
   *         <p>The configuration that specifies how the deployment traffic is routed. Only
   *             deployments with a Lambda compute platform can specify this.</p>
   *
   */
  trafficRoutingConfig?: TrafficRoutingConfig;
}

export namespace DeploymentConfigInfo {
  export function isa(o: any): o is DeploymentConfigInfo {
    return _smithy.isa(o, "DeploymentConfigInfo");
  }
}

/**
 *
 *         <p>The deployment configurations limit was exceeded.</p>
 *
 */
export interface DeploymentConfigLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentConfigLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentConfigLimitExceededException {
  export function isa(o: any): o is DeploymentConfigLimitExceededException {
    return _smithy.isa(o, "DeploymentConfigLimitExceededException");
  }
}

/**
 *
 *         <p>The deployment configuration name was not specified.</p>
 *
 */
export interface DeploymentConfigNameRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentConfigNameRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentConfigNameRequiredException {
  export function isa(o: any): o is DeploymentConfigNameRequiredException {
    return _smithy.isa(o, "DeploymentConfigNameRequiredException");
  }
}

export enum DeploymentCreator {
  Autoscaling = "autoscaling",
  CodeDeployRollback = "codeDeployRollback",
  User = "user"
}

/**
 *
 *         <p>The deployment with the IAM user or AWS account does not exist.</p>
 *
 */
export interface DeploymentDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentDoesNotExistException {
  export function isa(o: any): o is DeploymentDoesNotExistException {
    return _smithy.isa(o, "DeploymentDoesNotExistException");
  }
}

/**
 *
 *         <p>A deployment group with the specified name with the IAM user or AWS account already
 *             exists.</p>
 *
 */
export interface DeploymentGroupAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentGroupAlreadyExistsException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentGroupAlreadyExistsException {
  export function isa(o: any): o is DeploymentGroupAlreadyExistsException {
    return _smithy.isa(o, "DeploymentGroupAlreadyExistsException");
  }
}

/**
 *
 *         <p>The named deployment group with the IAM user or AWS account does not exist.</p>
 *
 */
export interface DeploymentGroupDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentGroupDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentGroupDoesNotExistException {
  export function isa(o: any): o is DeploymentGroupDoesNotExistException {
    return _smithy.isa(o, "DeploymentGroupDoesNotExistException");
  }
}

/**
 *
 *         <p>Information about a deployment group.</p>
 *
 */
export interface DeploymentGroupInfo {
  __type?: "DeploymentGroupInfo";
  /**
   *
   *         <p>A list of alarms associated with the deployment group.</p>
   *
   */
  alarmConfiguration?: AlarmConfiguration;

  /**
   *
   *         <p>The application name.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>Information about the automatic rollback configuration associated with the deployment
   *             group.</p>
   *
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   *
   *         <p>A list of associated Auto Scaling groups.</p>
   *
   */
  autoScalingGroups?: Array<AutoScalingGroup>;

  /**
   *
   *         <p>Information about blue/green deployment options for a deployment group.</p>
   *
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   *
   *         <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   *
   */
  computePlatform?: ComputePlatform | string;

  /**
   *
   *         <p>The deployment configuration name.</p>
   *
   */
  deploymentConfigName?: string;

  /**
   *
   *         <p>The deployment group ID.</p>
   *
   */
  deploymentGroupId?: string;

  /**
   *
   *         <p>The deployment group name.</p>
   *
   */
  deploymentGroupName?: string;

  /**
   *
   *         <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   *
   */
  deploymentStyle?: DeploymentStyle;

  /**
   *
   *         <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances
   *             with any of the specified tags.</p>
   *
   */
  ec2TagFilters?: Array<EC2TagFilter>;

  /**
   *
   *         <p>Information about groups of tags applied to an EC2 instance. The deployment group
   *             includes only EC2 instances identified by all of the tag groups. Cannot be used in the
   *             same call as ec2TagFilters.</p>
   *
   */
  ec2TagSet?: EC2TagSet;

  /**
   *
   *         <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service
   *             is specified as an Amazon ECS cluster and service name pair using the format
   *             <code><clustername>:<servicename></code>. </p>
   *
   */
  ecsServices?: Array<ECSService>;

  /**
   *
   *         <p>Information about the most recent attempted deployment to the deployment group.</p>
   *
   */
  lastAttemptedDeployment?: LastDeploymentInfo;

  /**
   *
   *         <p>Information about the most recent successful deployment to the deployment
   *             group.</p>
   *
   */
  lastSuccessfulDeployment?: LastDeploymentInfo;

  /**
   *
   *         <p>Information about the load balancer to use in a deployment.</p>
   *
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   *
   *         <p>The on-premises instance tags on which to filter. The deployment group includes
   *             on-premises instances with any of the specified tags.</p>
   *
   */
  onPremisesInstanceTagFilters?: Array<TagFilter>;

  /**
   *
   *         <p>Information about groups of tags applied to an on-premises instance. The deployment
   *             group includes only on-premises instances identified by all the tag groups. Cannot be
   *             used in the same call as onPremisesInstanceTagFilters.</p>
   *
   */
  onPremisesTagSet?: OnPremisesTagSet;

  /**
   *
   *         <p>A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.
   *             For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html">Create a Service Role for AWS CodeDeploy</a> in
   *             the <i>AWS CodeDeploy User Guide</i>.</p>
   *
   */
  serviceRoleArn?: string;

  /**
   *
   *         <p>Information about the deployment group's target revision, including type and
   *             location.</p>
   *
   */
  targetRevision?: RevisionLocation;

  /**
   *
   *         <p>Information about triggers associated with the deployment group.</p>
   *
   */
  triggerConfigurations?: Array<TriggerConfig>;
}

export namespace DeploymentGroupInfo {
  export function isa(o: any): o is DeploymentGroupInfo {
    return _smithy.isa(o, "DeploymentGroupInfo");
  }
}

/**
 *
 *         <p> The deployment groups limit was exceeded.</p>
 *
 */
export interface DeploymentGroupLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentGroupLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentGroupLimitExceededException {
  export function isa(o: any): o is DeploymentGroupLimitExceededException {
    return _smithy.isa(o, "DeploymentGroupLimitExceededException");
  }
}

/**
 *
 *         <p>The deployment group name was not specified.</p>
 *
 */
export interface DeploymentGroupNameRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentGroupNameRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentGroupNameRequiredException {
  export function isa(o: any): o is DeploymentGroupNameRequiredException {
    return _smithy.isa(o, "DeploymentGroupNameRequiredException");
  }
}

/**
 *
 *         <p>At least one deployment ID must be specified.</p>
 *
 */
export interface DeploymentIdRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentIdRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentIdRequiredException {
  export function isa(o: any): o is DeploymentIdRequiredException {
    return _smithy.isa(o, "DeploymentIdRequiredException");
  }
}

/**
 *
 *         <p>Information about a deployment.</p>
 *
 */
export interface DeploymentInfo {
  __type?: "DeploymentInfo";
  /**
   *
   *         <p>Provides information about the results of a deployment, such as whether instances in
   *             the original environment in a blue/green deployment were not terminated.</p>
   *
   */
  additionalDeploymentStatusInfo?: string;

  /**
   *
   *         <p>The application name.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>Information about the automatic rollback configuration associated with the
   *             deployment.</p>
   *
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   *
   *         <p>Information about blue/green deployment options for this deployment.</p>
   *
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   *
   *         <p>A timestamp that indicates when the deployment was complete.</p>
   *
   */
  completeTime?: Date;

  /**
   *
   *         <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   *
   */
  computePlatform?: ComputePlatform | string;

  /**
   *
   *         <p>A timestamp that indicates when the deployment was created.</p>
   *
   */
  createTime?: Date;

  /**
   *
   *         <p>The means by which the deployment was created:</p>
   *         <ul>
   *             <li>
   *                 <p>user: A user created the deployment.</p>
   *             </li>
   *             <li>
   *                 <p>autoscaling: Amazon EC2 Auto Scaling created the deployment.</p>
   *             </li>
   *             <li>
   *                 <p>codeDeployRollback: A rollback process created the deployment.</p>
   *             </li>
   *          </ul>
   *
   */
  creator?: DeploymentCreator | string;

  /**
   *
   *         <p> The deployment configuration name. </p>
   *
   */
  deploymentConfigName?: string;

  /**
   *
   *         <p> The deployment group name. </p>
   *
   */
  deploymentGroupName?: string;

  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p>A summary of the deployment status of the instances in the deployment.</p>
   *
   */
  deploymentOverview?: DeploymentOverview;

  /**
   *
   *         <p>Messages that contain information about the status of a deployment.</p>
   *
   */
  deploymentStatusMessages?: Array<string>;

  /**
   *
   *         <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   *
   */
  deploymentStyle?: DeploymentStyle;

  /**
   *
   *         <p>A comment about the deployment.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>Information about any error associated with this deployment.</p>
   *
   */
  errorInformation?: ErrorInformation;

  /**
   *
   *         <p>Information about how AWS CodeDeploy handles files that already exist in a deployment
   *             target location but weren't part of the previous successful deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>DISALLOW: The deployment fails. This is also the default behavior if no option
   *                     is specified.</p>
   *             </li>
   *             <li>
   *                 <p>OVERWRITE: The version of the file from the application revision currently
   *                     being deployed replaces the version already on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>RETAIN: The version of the file already on the instance is kept and used as
   *                     part of the new deployment.</p>
   *             </li>
   *          </ul>
   *
   */
  fileExistsBehavior?: FileExistsBehavior | string;

  /**
   *
   *         <p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or
   *                 <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then
   *             the deployment continues to the next deployment lifecycle event. For example, if
   *                 <code>ApplicationStop</code> fails, the deployment continues with DownloadBundle. If
   *                 <code>BeforeBlockTraffic</code> fails, the deployment continues with
   *                 <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code> fails, the deployment
   *             continues with <code>ApplicationStop</code>. </p>
   *
   *         <p>
   *             If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails.
   *             If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts,
   *             then a deployment to the next instance is attempted.
   *         </p>
   *
   *         <p> During a deployment, the AWS CodeDeploy agent runs the scripts specified for
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful
   *             deployment. (All other scripts are run from the AppSpec file in the current deployment.)
   *             If one of these scripts contains an error and does not run successfully, the deployment
   *             can fail. </p>
   *
   *         <p> If the cause of the failure is a script from the last successful deployment that will
   *             never run successfully, create a new deployment and use
   *                 <code>ignoreApplicationStopFailures</code> to specify that the
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> failures should be ignored. </p>
   *
   */
  ignoreApplicationStopFailures?: boolean;

  /**
   *
   *         <p>Indicates whether the wait period set for the termination of instances in the original
   *             environment has started. Status is 'false' if the KEEP_ALIVE option is specified.
   *             Otherwise, 'true' as soon as the termination wait period starts.</p>
   *
   */
  instanceTerminationWaitTimeStarted?: boolean;

  /**
   *
   *         <p>Information about the load balancer used in the deployment.</p>
   *
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   *
   *         <p>Information about the application revision that was deployed to the deployment group
   *             before the most recent successful deployment.</p>
   *
   */
  previousRevision?: RevisionLocation;

  /**
   *
   *         <p>Information about the location of stored application artifacts and the service from
   *             which to retrieve them.</p>
   *
   */
  revision?: RevisionLocation;

  /**
   *
   *         <p>Information about a deployment rollback.</p>
   *
   */
  rollbackInfo?: RollbackInfo;

  /**
   *
   *         <p>A timestamp that indicates when the deployment was deployed to the deployment
   *             group.</p>
   *         <p>In some cases, the reported value of the start time might be later than the complete
   *             time. This is due to differences in the clock settings of backend servers that
   *             participate in the deployment process.</p>
   *
   */
  startTime?: Date;

  /**
   *
   *         <p>The current state of the deployment as a whole.</p>
   *
   */
  status?: DeploymentStatus | string;

  /**
   *
   *         <p>Information about the instances that belong to the replacement environment in a
   *             blue/green deployment.</p>
   *
   */
  targetInstances?: TargetInstances;

  /**
   *
   *         <p>Indicates whether only instances that are not running the latest application revision
   *             are to be deployed to.</p>
   *
   */
  updateOutdatedInstancesOnly?: boolean;
}

export namespace DeploymentInfo {
  export function isa(o: any): o is DeploymentInfo {
    return _smithy.isa(o, "DeploymentInfo");
  }
}

/**
 *
 *         <p>The deployment does not have a status of Ready and can't continue yet.</p>
 *
 */
export interface DeploymentIsNotInReadyStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentIsNotInReadyStateException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentIsNotInReadyStateException {
  export function isa(o: any): o is DeploymentIsNotInReadyStateException {
    return _smithy.isa(o, "DeploymentIsNotInReadyStateException");
  }
}

/**
 *
 *         <p>The number of allowed deployments was exceeded.</p>
 *
 */
export interface DeploymentLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentLimitExceededException {
  export function isa(o: any): o is DeploymentLimitExceededException {
    return _smithy.isa(o, "DeploymentLimitExceededException");
  }
}

/**
 *
 *         <p>The specified deployment has not started.</p>
 *
 */
export interface DeploymentNotStartedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentNotStartedException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentNotStartedException {
  export function isa(o: any): o is DeploymentNotStartedException {
    return _smithy.isa(o, "DeploymentNotStartedException");
  }
}

export enum DeploymentOption {
  WITHOUT_TRAFFIC_CONTROL = "WITHOUT_TRAFFIC_CONTROL",
  WITH_TRAFFIC_CONTROL = "WITH_TRAFFIC_CONTROL"
}

/**
 *
 *         <p>Information about the deployment status of the instances in the deployment.</p>
 *
 */
export interface DeploymentOverview {
  __type?: "DeploymentOverview";
  /**
   *
   *         <p>The number of instances in the deployment in a failed state.</p>
   *
   */
  Failed?: number;

  /**
   *
   *         <p>The number of instances in which the deployment is in progress.</p>
   *
   */
  InProgress?: number;

  /**
   *
   *         <p>The number of instances in the deployment in a pending state.</p>
   *
   */
  Pending?: number;

  /**
   *
   *         <p>The number of instances in a replacement environment ready to receive traffic in a
   *             blue/green deployment.</p>
   *
   */
  Ready?: number;

  /**
   *
   *         <p>The number of instances in the deployment in a skipped state.</p>
   *
   */
  Skipped?: number;

  /**
   *
   *         <p>The number of instances in the deployment to which revisions have been successfully
   *             deployed.</p>
   *
   */
  Succeeded?: number;
}

export namespace DeploymentOverview {
  export function isa(o: any): o is DeploymentOverview {
    return _smithy.isa(o, "DeploymentOverview");
  }
}

export enum DeploymentReadyAction {
  CONTINUE_DEPLOYMENT = "CONTINUE_DEPLOYMENT",
  STOP_DEPLOYMENT = "STOP_DEPLOYMENT"
}

/**
 *
 *         <p>Information about how traffic is rerouted to instances in a replacement environment in
 *             a blue/green deployment.</p>
 *
 */
export interface DeploymentReadyOption {
  __type?: "DeploymentReadyOption";
  /**
   *
   *         <p>Information about when to reroute traffic from an original environment to a
   *             replacement environment in a blue/green deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately
   *                     after the new application revision is installed on the instances in the
   *                     replacement environment.</p>
   *             </li>
   *             <li>
   *                 <p>STOP_DEPLOYMENT: Do not register new instances with a load balancer unless
   *                     traffic rerouting is started using <a>ContinueDeployment</a>. If
   *                     traffic rerouting is not started before the end of the specified wait period,
   *                     the deployment status is changed to Stopped.</p>
   *             </li>
   *          </ul>
   *
   */
  actionOnTimeout?: DeploymentReadyAction | string;

  /**
   *
   *         <p>The number of minutes to wait before the status of a blue/green deployment is changed
   *             to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT
   *             option for actionOnTimeout</p>
   *
   */
  waitTimeInMinutes?: number;
}

export namespace DeploymentReadyOption {
  export function isa(o: any): o is DeploymentReadyOption {
    return _smithy.isa(o, "DeploymentReadyOption");
  }
}

export enum DeploymentStatus {
  CREATED = "Created",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  QUEUED = "Queued",
  READY = "Ready",
  STOPPED = "Stopped",
  SUCCEEDED = "Succeeded"
}

/**
 *
 *         <p>Information about the type of deployment, either in-place or blue/green, you want to
 *             run and whether to route deployment traffic behind a load balancer.</p>
 *
 */
export interface DeploymentStyle {
  __type?: "DeploymentStyle";
  /**
   *
   *         <p>Indicates whether to route deployment traffic behind a load balancer.</p>
   *
   */
  deploymentOption?: DeploymentOption | string;

  /**
   *
   *         <p>Indicates whether to run an in-place deployment or a blue/green deployment.</p>
   *
   */
  deploymentType?: DeploymentType | string;
}

export namespace DeploymentStyle {
  export function isa(o: any): o is DeploymentStyle {
    return _smithy.isa(o, "DeploymentStyle");
  }
}

/**
 *
 *         <p> Information about the deployment target. </p>
 *
 */
export interface DeploymentTarget {
  __type?: "DeploymentTarget";
  /**
   *
   *         <p> The deployment type that is specific to the deployment's compute platform. </p>
   *
   */
  deploymentTargetType?: DeploymentTargetType | string;

  /**
   *
   *         <p> Information about the target for a deployment that uses the Amazon ECS compute
   *             platform. </p>
   *
   */
  ecsTarget?: ECSTarget;

  /**
   *
   *         <p> Information about the target for a deployment that uses the EC2/On-premises compute
   *             platform. </p>
   *
   */
  instanceTarget?: InstanceTarget;

  /**
   *
   *         <p> Information about the target for a deployment that uses the AWS Lambda compute
   *             platform. </p>
   *
   */
  lambdaTarget?: LambdaTarget;
}

export namespace DeploymentTarget {
  export function isa(o: any): o is DeploymentTarget {
    return _smithy.isa(o, "DeploymentTarget");
  }
}

/**
 *
 *         <p> The provided target ID does not belong to the attempted deployment. </p>
 *
 */
export interface DeploymentTargetDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentTargetDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentTargetDoesNotExistException {
  export function isa(o: any): o is DeploymentTargetDoesNotExistException {
    return _smithy.isa(o, "DeploymentTargetDoesNotExistException");
  }
}

/**
 *
 *         <p> A deployment target ID was not provided. </p>
 *
 */
export interface DeploymentTargetIdRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentTargetIdRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentTargetIdRequiredException {
  export function isa(o: any): o is DeploymentTargetIdRequiredException {
    return _smithy.isa(o, "DeploymentTargetIdRequiredException");
  }
}

/**
 *
 *         <p> The maximum number of targets that can be associated with an Amazon ECS or AWS Lambda
 *             deployment was exceeded. The target list of both types of deployments must have exactly
 *             one item. This exception does not apply to EC2/On-premises deployments. </p>
 *
 */
export interface DeploymentTargetListSizeExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeploymentTargetListSizeExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DeploymentTargetListSizeExceededException {
  export function isa(o: any): o is DeploymentTargetListSizeExceededException {
    return _smithy.isa(o, "DeploymentTargetListSizeExceededException");
  }
}

export enum DeploymentTargetType {
  ECS_TARGET = "ECSTarget",
  INSTANCE_TARGET = "InstanceTarget",
  LAMBDA_TARGET = "LambdaTarget"
}

export enum DeploymentType {
  BLUE_GREEN = "BLUE_GREEN",
  IN_PLACE = "IN_PLACE"
}

export enum DeploymentWaitType {
  READY_WAIT = "READY_WAIT",
  TERMINATION_WAIT = "TERMINATION_WAIT"
}

/**
 *
 *         <p>Represents the input of a DeregisterOnPremisesInstance operation.</p>
 *
 */
export interface DeregisterOnPremisesInstanceInput {
  __type?: "DeregisterOnPremisesInstanceInput";
  /**
   *
   *         <p>The name of the on-premises instance to deregister.</p>
   *
   */
  instanceName: string | undefined;
}

export namespace DeregisterOnPremisesInstanceInput {
  export function isa(o: any): o is DeregisterOnPremisesInstanceInput {
    return _smithy.isa(o, "DeregisterOnPremisesInstanceInput");
  }
}

/**
 *
 *         <p>The description is too long.</p>
 *
 */
export interface DescriptionTooLongException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DescriptionTooLongException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace DescriptionTooLongException {
  export function isa(o: any): o is DescriptionTooLongException {
    return _smithy.isa(o, "DescriptionTooLongException");
  }
}

/**
 *
 *         <p>Diagnostic information about executable scripts that are part of a deployment.</p>
 *
 */
export interface Diagnostics {
  __type?: "Diagnostics";
  /**
   *
   *         <p>The associated error code:</p>
   *         <ul>
   *             <li>
   *                 <p>Success: The specified script ran.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptMissing: The specified script was not found in the specified
   *                     location.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptNotExecutable: The specified script is not a recognized executable file
   *                     type.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptTimedOut: The specified script did not finish running in the specified
   *                     time period.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptFailed: The specified script failed to run as expected.</p>
   *             </li>
   *             <li>
   *                 <p>UnknownError: The specified script did not run for an unknown reason.</p>
   *             </li>
   *          </ul>
   *
   */
  errorCode?: LifecycleErrorCode | string;

  /**
   *
   *         <p>The last portion of the diagnostic log.</p>
   *         <p>If available, AWS CodeDeploy returns up to the last 4 KB of the diagnostic log.</p>
   *
   */
  logTail?: string;

  /**
   *
   *         <p>The message associated with the error.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The name of the script.</p>
   *
   */
  scriptName?: string;
}

export namespace Diagnostics {
  export function isa(o: any): o is Diagnostics {
    return _smithy.isa(o, "Diagnostics");
  }
}

/**
 *
 *         <p>Information about an EC2 tag filter.</p>
 *
 */
export interface EC2TagFilter {
  __type?: "EC2TagFilter";
  /**
   *
   *         <p>The tag filter key.</p>
   *
   */
  Key?: string;

  /**
   *
   *         <p>The tag filter type:</p>
   *         <ul>
   *             <li>
   *                 <p>KEY_ONLY: Key only.</p>
   *             </li>
   *             <li>
   *                 <p>VALUE_ONLY: Value only.</p>
   *             </li>
   *             <li>
   *                 <p>KEY_AND_VALUE: Key and value.</p>
   *             </li>
   *          </ul>
   *
   */
  Type?: EC2TagFilterType | string;

  /**
   *
   *         <p>The tag filter value.</p>
   *
   */
  Value?: string;
}

export namespace EC2TagFilter {
  export function isa(o: any): o is EC2TagFilter {
    return _smithy.isa(o, "EC2TagFilter");
  }
}

export enum EC2TagFilterType {
  KEY_AND_VALUE = "KEY_AND_VALUE",
  KEY_ONLY = "KEY_ONLY",
  VALUE_ONLY = "VALUE_ONLY"
}

/**
 *
 *         <p>Information about groups of EC2 instance tags.</p>
 *
 */
export interface EC2TagSet {
  __type?: "EC2TagSet";
  /**
   *
   *         <p>A list that contains other lists of EC2 instance tag groups. For an instance to be
   *             included in the deployment group, it must be identified by all of the tag groups in the
   *             list.</p>
   *
   */
  ec2TagSetList?: Array<Array<EC2TagFilter>>;
}

export namespace EC2TagSet {
  export function isa(o: any): o is EC2TagSet {
    return _smithy.isa(o, "EC2TagSet");
  }
}

/**
 *
 *         <p> Contains the service and cluster names used to identify an Amazon ECS deployment's
 *             target. </p>
 *
 */
export interface ECSService {
  __type?: "ECSService";
  /**
   *
   *         <p> The name of the cluster that the Amazon ECS service is associated with. </p>
   *
   */
  clusterName?: string;

  /**
   *
   *         <p> The name of the target Amazon ECS service. </p>
   *
   */
  serviceName?: string;
}

export namespace ECSService {
  export function isa(o: any): o is ECSService {
    return _smithy.isa(o, "ECSService");
  }
}

/**
 *
 *         <p> The Amazon ECS service is associated with more than one deployment groups. An Amazon
 *             ECS service can be associated with only one deployment group. </p>
 *
 */
export interface ECSServiceMappingLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ECSServiceMappingLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ECSServiceMappingLimitExceededException {
  export function isa(o: any): o is ECSServiceMappingLimitExceededException {
    return _smithy.isa(o, "ECSServiceMappingLimitExceededException");
  }
}

/**
 *
 *         <p> Information about the target of an Amazon ECS deployment. </p>
 *
 */
export interface ECSTarget {
  __type?: "ECSTarget";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> The date and time when the target Amazon ECS application was updated by a deployment.
   *         </p>
   *
   */
  lastUpdatedAt?: Date;

  /**
   *
   *         <p> The lifecycle events of the deployment to this target Amazon ECS application. </p>
   *
   */
  lifecycleEvents?: Array<LifecycleEvent>;

  /**
   *
   *         <p> The status an Amazon ECS deployment's target ECS application. </p>
   *
   */
  status?: TargetStatus | string;

  /**
   *
   *         <p> The ARN of the target. </p>
   *
   */
  targetArn?: string;

  /**
   *
   *         <p> The unique ID of a deployment target that has a type of <code>ecsTarget</code>.
   *         </p>
   *
   */
  targetId?: string;

  /**
   *
   *         <p> The <code>ECSTaskSet</code> objects associated with the ECS target. </p>
   *
   */
  taskSetsInfo?: Array<ECSTaskSet>;
}

export namespace ECSTarget {
  export function isa(o: any): o is ECSTarget {
    return _smithy.isa(o, "ECSTarget");
  }
}

/**
 *
 *         <p> Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An
 *             Amazon ECS task set includes details such as the desired number of tasks, how many tasks
 *             are running, and whether the task set serves production traffic. An AWS CodeDeploy
 *             application that uses the Amazon ECS compute platform deploys a containerized
 *             application in an Amazon ECS service as a task set. </p>
 *
 */
export interface ECSTaskSet {
  __type?: "ECSTaskSet";
  /**
   *
   *         <p> The number of tasks in a task set. During a deployment that uses the Amazon ECS
   *             compute type, CodeDeploy instructs Amazon ECS to create a new task set and uses this
   *             value to determine how many tasks to create. After the updated task set is created,
   *             CodeDeploy shifts traffic to the new task set. </p>
   *
   */
  desiredCount?: number;

  /**
   *
   *         <p> A unique ID of an <code>ECSTaskSet</code>. </p>
   *
   */
  identifer?: string;

  /**
   *
   *         <p> The number of tasks in the task set that are in the <code>PENDING</code> status
   *             during an Amazon ECS deployment. A task in the <code>PENDING</code> state is preparing
   *             to enter the <code>RUNNING</code> state. A task set enters the <code>PENDING</code>
   *             status when it launches for the first time, or when it is restarted after being in the
   *             <code>STOPPED</code> state. </p>
   *
   */
  pendingCount?: number;

  /**
   *
   *         <p> The number of tasks in the task set that are in the <code>RUNNING</code> status
   *             during an Amazon ECS deployment. A task in the <code>RUNNING</code> state is running and
   *             ready for use. </p>
   *
   */
  runningCount?: number;

  /**
   *
   *         <p> The status of the task set. There are three valid task set statuses: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>PRIMARY</code>: Indicates the task set is serving production traffic. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ACTIVE</code>: Indicates the task set is not serving production traffic. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DRAINING</code>: Indicates the tasks in the task set are being stopped and
   *                     their corresponding targets are being deregistered from their target group. </p>
   *             </li>
   *          </ul>
   *
   */
  status?: string;

  /**
   *
   *         <p> The target group associated with the task set. The target group is used by AWS
   *             CodeDeploy to manage traffic to a task set. </p>
   *
   */
  targetGroup?: TargetGroupInfo;

  /**
   *
   *         <p> A label that identifies whether the ECS task set is an original target
   *             (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   *
   */
  taskSetLabel?: TargetLabel | string;

  /**
   *
   *         <p> The percentage of traffic served by this task set. </p>
   *
   */
  trafficWeight?: number;
}

export namespace ECSTaskSet {
  export function isa(o: any): o is ECSTaskSet {
    return _smithy.isa(o, "ECSTaskSet");
  }
}

/**
 *
 *         <p>Information about a load balancer in Elastic Load Balancing to use in a deployment.
 *             Instances are registered directly with a load balancer, and traffic is routed to the
 *             load balancer.</p>
 *
 */
export interface ELBInfo {
  __type?: "ELBInfo";
  /**
   *
   *         <p>For blue/green deployments, the name of the load balancer that is used to route
   *             traffic from original instances to replacement instances in a blue/green deployment. For
   *             in-place deployments, the name of the load balancer that instances are deregistered from
   *             so they are not serving traffic during a deployment, and then re-registered with after
   *             the deployment is complete.</p>
   *
   */
  name?: string;
}

export namespace ELBInfo {
  export function isa(o: any): o is ELBInfo {
    return _smithy.isa(o, "ELBInfo");
  }
}

export enum ErrorCode {
  AGENT_ISSUE = "AGENT_ISSUE",
  ALARM_ACTIVE = "ALARM_ACTIVE",
  APPLICATION_MISSING = "APPLICATION_MISSING",
  AUTOSCALING_VALIDATION_ERROR = "AUTOSCALING_VALIDATION_ERROR",
  AUTO_SCALING_CONFIGURATION = "AUTO_SCALING_CONFIGURATION",
  AUTO_SCALING_IAM_ROLE_PERMISSIONS = "AUTO_SCALING_IAM_ROLE_PERMISSIONS",
  CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND = "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND",
  CUSTOMER_APPLICATION_UNHEALTHY = "CUSTOMER_APPLICATION_UNHEALTHY",
  DEPLOYMENT_GROUP_MISSING = "DEPLOYMENT_GROUP_MISSING",
  ECS_UPDATE_ERROR = "ECS_UPDATE_ERROR",
  ELASTIC_LOAD_BALANCING_INVALID = "ELASTIC_LOAD_BALANCING_INVALID",
  ELB_INVALID_INSTANCE = "ELB_INVALID_INSTANCE",
  HEALTH_CONSTRAINTS = "HEALTH_CONSTRAINTS",
  HEALTH_CONSTRAINTS_INVALID = "HEALTH_CONSTRAINTS_INVALID",
  HOOK_EXECUTION_FAILURE = "HOOK_EXECUTION_FAILURE",
  IAM_ROLE_MISSING = "IAM_ROLE_MISSING",
  IAM_ROLE_PERMISSIONS = "IAM_ROLE_PERMISSIONS",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_ECS_SERVICE = "INVALID_ECS_SERVICE",
  INVALID_LAMBDA_CONFIGURATION = "INVALID_LAMBDA_CONFIGURATION",
  INVALID_LAMBDA_FUNCTION = "INVALID_LAMBDA_FUNCTION",
  INVALID_REVISION = "INVALID_REVISION",
  MANUAL_STOP = "MANUAL_STOP",
  MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION = "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION",
  MISSING_ELB_INFORMATION = "MISSING_ELB_INFORMATION",
  MISSING_GITHUB_TOKEN = "MISSING_GITHUB_TOKEN",
  NO_EC2_SUBSCRIPTION = "NO_EC2_SUBSCRIPTION",
  NO_INSTANCES = "NO_INSTANCES",
  OVER_MAX_INSTANCES = "OVER_MAX_INSTANCES",
  RESOURCE_LIMIT_EXCEEDED = "RESOURCE_LIMIT_EXCEEDED",
  REVISION_MISSING = "REVISION_MISSING",
  THROTTLED = "THROTTLED",
  TIMEOUT = "TIMEOUT"
}

/**
 *
 *         <p>Information about a deployment error.</p>
 *
 */
export interface ErrorInformation {
  __type?: "ErrorInformation";
  /**
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html">Error Codes for AWS
   *                 CodeDeploy</a> in the <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy User Guide</a>.</p>
   *         <p>The error code:</p>
   *         <ul>
   *             <li>
   *                 <p>APPLICATION_MISSING: The application was missing. This error code is most
   *                     likely raised if the application is deleted after the deployment is created, but
   *                     before it is started.</p>
   *             </li>
   *             <li>
   *                 <p>DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code is
   *                     most likely raised if the deployment group is deleted after the deployment is
   *                     created, but before it is started.</p>
   *             </li>
   *             <li>
   *                 <p>HEALTH_CONSTRAINTS: The deployment failed on too many instances to be
   *                     successfully deployed within the instance health constraints specified.</p>
   *             </li>
   *             <li>
   *                 <p>HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed
   *                     within the instance health constraints specified.</p>
   *             </li>
   *             <li>
   *                 <p>IAM_ROLE_MISSING: The service role cannot be accessed.</p>
   *             </li>
   *             <li>
   *                 <p>IAM_ROLE_PERMISSIONS: The service role does not have the correct
   *                     permissions.</p>
   *             </li>
   *             <li>
   *                 <p>INTERNAL_ERROR: There was an internal error.</p>
   *             </li>
   *             <li>
   *                 <p>NO_EC2_SUBSCRIPTION: The calling account is not subscribed to Amazon
   *                     EC2.</p>
   *             </li>
   *             <li>
   *                 <p>NO_INSTANCES: No instances were specified, or no instances can be
   *                     found.</p>
   *             </li>
   *             <li>
   *                 <p>OVER_MAX_INSTANCES: The maximum number of instances was exceeded.</p>
   *             </li>
   *             <li>
   *                 <p>THROTTLED: The operation was throttled because the calling account exceeded
   *                     the throttling limits of one or more AWS services.</p>
   *             </li>
   *             <li>
   *                 <p>TIMEOUT: The deployment has timed out.</p>
   *             </li>
   *             <li>
   *                 <p>REVISION_MISSING: The revision ID was missing. This error code is most likely
   *                     raised if the revision is deleted after the deployment is created, but before it
   *                     is started.</p>
   *             </li>
   *          </ul>
   *
   */
  code?: ErrorCode | string;

  /**
   *
   *         <p>An accompanying error message.</p>
   *
   */
  message?: string;
}

export namespace ErrorInformation {
  export function isa(o: any): o is ErrorInformation {
    return _smithy.isa(o, "ErrorInformation");
  }
}

export enum FileExistsBehavior {
  DISALLOW = "DISALLOW",
  OVERWRITE = "OVERWRITE",
  RETAIN = "RETAIN"
}

/**
 *
 *         <p>Information about an application revision.</p>
 *
 */
export interface GenericRevisionInfo {
  __type?: "GenericRevisionInfo";
  /**
   *
   *         <p>The deployment groups for which this is the current target revision.</p>
   *
   */
  deploymentGroups?: Array<string>;

  /**
   *
   *         <p>A comment about the revision.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>When the revision was first used by AWS CodeDeploy.</p>
   *
   */
  firstUsedTime?: Date;

  /**
   *
   *         <p>When the revision was last used by AWS CodeDeploy.</p>
   *
   */
  lastUsedTime?: Date;

  /**
   *
   *         <p>When the revision was registered with AWS CodeDeploy.</p>
   *
   */
  registerTime?: Date;
}

export namespace GenericRevisionInfo {
  export function isa(o: any): o is GenericRevisionInfo {
    return _smithy.isa(o, "GenericRevisionInfo");
  }
}

/**
 *
 *         <p>Represents the input of a GetApplication operation.</p>
 *
 */
export interface GetApplicationInput {
  __type?: "GetApplicationInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;
}

export namespace GetApplicationInput {
  export function isa(o: any): o is GetApplicationInput {
    return _smithy.isa(o, "GetApplicationInput");
  }
}

/**
 *
 *         <p>Represents the output of a GetApplication operation.</p>
 *
 */
export interface GetApplicationOutput extends $MetadataBearer {
  __type?: "GetApplicationOutput";
  /**
   *
   *         <p>Information about the application.</p>
   *
   */
  application?: ApplicationInfo;
}

export namespace GetApplicationOutput {
  export function isa(o: any): o is GetApplicationOutput {
    return _smithy.isa(o, "GetApplicationOutput");
  }
}

/**
 *
 *         <p>Represents the input of a GetApplicationRevision operation.</p>
 *
 */
export interface GetApplicationRevisionInput {
  __type?: "GetApplicationRevisionInput";
  /**
   *
   *         <p>The name of the application that corresponds to the revision.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>Information about the application revision to get, including type and location.</p>
   *
   */
  revision: RevisionLocation | undefined;
}

export namespace GetApplicationRevisionInput {
  export function isa(o: any): o is GetApplicationRevisionInput {
    return _smithy.isa(o, "GetApplicationRevisionInput");
  }
}

/**
 *
 *         <p>Represents the output of a GetApplicationRevision operation.</p>
 *
 */
export interface GetApplicationRevisionOutput extends $MetadataBearer {
  __type?: "GetApplicationRevisionOutput";
  /**
   *
   *         <p>The name of the application that corresponds to the revision.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>Additional information about the revision, including type and location.</p>
   *
   */
  revision?: RevisionLocation;

  /**
   *
   *         <p>General information about the revision.</p>
   *
   */
  revisionInfo?: GenericRevisionInfo;
}

export namespace GetApplicationRevisionOutput {
  export function isa(o: any): o is GetApplicationRevisionOutput {
    return _smithy.isa(o, "GetApplicationRevisionOutput");
  }
}

/**
 *
 *         <p>Represents the input of a GetDeploymentConfig operation.</p>
 *
 */
export interface GetDeploymentConfigInput {
  __type?: "GetDeploymentConfigInput";
  /**
   *
   *         <p>The name of a deployment configuration associated with the IAM user or AWS
   *             account.</p>
   *
   */
  deploymentConfigName: string | undefined;
}

export namespace GetDeploymentConfigInput {
  export function isa(o: any): o is GetDeploymentConfigInput {
    return _smithy.isa(o, "GetDeploymentConfigInput");
  }
}

/**
 *
 *         <p>Represents the output of a GetDeploymentConfig operation.</p>
 *
 */
export interface GetDeploymentConfigOutput extends $MetadataBearer {
  __type?: "GetDeploymentConfigOutput";
  /**
   *
   *         <p>Information about the deployment configuration.</p>
   *
   */
  deploymentConfigInfo?: DeploymentConfigInfo;
}

export namespace GetDeploymentConfigOutput {
  export function isa(o: any): o is GetDeploymentConfigOutput {
    return _smithy.isa(o, "GetDeploymentConfigOutput");
  }
}

/**
 *
 *         <p>Represents the input of a GetDeploymentGroup operation.</p>
 *
 */
export interface GetDeploymentGroupInput {
  __type?: "GetDeploymentGroupInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>The name of a deployment group for the specified application.</p>
   *
   */
  deploymentGroupName: string | undefined;
}

export namespace GetDeploymentGroupInput {
  export function isa(o: any): o is GetDeploymentGroupInput {
    return _smithy.isa(o, "GetDeploymentGroupInput");
  }
}

/**
 *
 *         <p>Represents the output of a GetDeploymentGroup operation.</p>
 *
 */
export interface GetDeploymentGroupOutput extends $MetadataBearer {
  __type?: "GetDeploymentGroupOutput";
  /**
   *
   *         <p>Information about the deployment group.</p>
   *
   */
  deploymentGroupInfo?: DeploymentGroupInfo;
}

export namespace GetDeploymentGroupOutput {
  export function isa(o: any): o is GetDeploymentGroupOutput {
    return _smithy.isa(o, "GetDeploymentGroupOutput");
  }
}

/**
 *
 *         <p>Represents the input of a GetDeployment operation.</p>
 *
 */
export interface GetDeploymentInput {
  __type?: "GetDeploymentInput";
  /**
   *
   *         <p> The unique ID of a deployment associated with the IAM user or AWS account. </p>
   *
   */
  deploymentId: string | undefined;
}

export namespace GetDeploymentInput {
  export function isa(o: any): o is GetDeploymentInput {
    return _smithy.isa(o, "GetDeploymentInput");
  }
}

/**
 *
 *         <p> Represents the input of a GetDeploymentInstance operation. </p>
 *
 */
export interface GetDeploymentInstanceInput {
  __type?: "GetDeploymentInstanceInput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId: string | undefined;

  /**
   *
   *         <p> The unique ID of an instance in the deployment group. </p>
   *
   */
  instanceId: string | undefined;
}

export namespace GetDeploymentInstanceInput {
  export function isa(o: any): o is GetDeploymentInstanceInput {
    return _smithy.isa(o, "GetDeploymentInstanceInput");
  }
}

/**
 *
 *         <p> Represents the output of a GetDeploymentInstance operation. </p>
 *
 */
export interface GetDeploymentInstanceOutput extends $MetadataBearer {
  __type?: "GetDeploymentInstanceOutput";
  /**
   *
   *         <p> Information about the instance. </p>
   *
   */
  instanceSummary?: InstanceSummary;
}

export namespace GetDeploymentInstanceOutput {
  export function isa(o: any): o is GetDeploymentInstanceOutput {
    return _smithy.isa(o, "GetDeploymentInstanceOutput");
  }
}

/**
 *
 *         <p>Represents the output of a GetDeployment operation.</p>
 *
 */
export interface GetDeploymentOutput extends $MetadataBearer {
  __type?: "GetDeploymentOutput";
  /**
   *
   *         <p>Information about the deployment.</p>
   *
   */
  deploymentInfo?: DeploymentInfo;
}

export namespace GetDeploymentOutput {
  export function isa(o: any): o is GetDeploymentOutput {
    return _smithy.isa(o, "GetDeploymentOutput");
  }
}

export interface GetDeploymentTargetInput {
  __type?: "GetDeploymentTargetInput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> The unique ID of a deployment target. </p>
   *
   */
  targetId?: string;
}

export namespace GetDeploymentTargetInput {
  export function isa(o: any): o is GetDeploymentTargetInput {
    return _smithy.isa(o, "GetDeploymentTargetInput");
  }
}

export interface GetDeploymentTargetOutput extends $MetadataBearer {
  __type?: "GetDeploymentTargetOutput";
  /**
   *
   *         <p> A deployment target that contains information about a deployment such as its status,
   *             lifecyle events, and when it was last updated. It also contains metadata about the
   *             deployment target. The deployment target metadata depends on the deployment target's
   *             type (<code>instanceTarget</code>, <code>lambdaTarget</code>, or
   *             <code>ecsTarget</code>). </p>
   *
   */
  deploymentTarget?: DeploymentTarget;
}

export namespace GetDeploymentTargetOutput {
  export function isa(o: any): o is GetDeploymentTargetOutput {
    return _smithy.isa(o, "GetDeploymentTargetOutput");
  }
}

/**
 *
 *         <p> Represents the input of a GetOnPremisesInstance operation. </p>
 *
 */
export interface GetOnPremisesInstanceInput {
  __type?: "GetOnPremisesInstanceInput";
  /**
   *
   *         <p> The name of the on-premises instance about which to get information. </p>
   *
   */
  instanceName: string | undefined;
}

export namespace GetOnPremisesInstanceInput {
  export function isa(o: any): o is GetOnPremisesInstanceInput {
    return _smithy.isa(o, "GetOnPremisesInstanceInput");
  }
}

/**
 *
 *         <p> Represents the output of a GetOnPremisesInstance operation. </p>
 *
 */
export interface GetOnPremisesInstanceOutput extends $MetadataBearer {
  __type?: "GetOnPremisesInstanceOutput";
  /**
   *
   *         <p> Information about the on-premises instance. </p>
   *
   */
  instanceInfo?: InstanceInfo;
}

export namespace GetOnPremisesInstanceOutput {
  export function isa(o: any): o is GetOnPremisesInstanceOutput {
    return _smithy.isa(o, "GetOnPremisesInstanceOutput");
  }
}

/**
 *
 *         <p>No GitHub account connection exists with the named specified in the call.</p>
 *
 */
export interface GitHubAccountTokenDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "GitHubAccountTokenDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace GitHubAccountTokenDoesNotExistException {
  export function isa(o: any): o is GitHubAccountTokenDoesNotExistException {
    return _smithy.isa(o, "GitHubAccountTokenDoesNotExistException");
  }
}

/**
 *
 *         <p>The call is missing a required GitHub account connection name.</p>
 *
 */
export interface GitHubAccountTokenNameRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "GitHubAccountTokenNameRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace GitHubAccountTokenNameRequiredException {
  export function isa(o: any): o is GitHubAccountTokenNameRequiredException {
    return _smithy.isa(o, "GitHubAccountTokenNameRequiredException");
  }
}

/**
 *
 *         <p>Information about the location of application artifacts stored in GitHub.</p>
 *
 */
export interface GitHubLocation {
  __type?: "GitHubLocation";
  /**
   *
   *         <p>The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the
   *             application revision.</p>
   *
   */
  commitId?: string;

  /**
   *
   *         <p>The GitHub account and repository pair that stores a reference to the commit that
   *             represents the bundled artifacts for the application revision. </p>
   *         <p>Specified as account/repository.</p>
   *
   */
  repository?: string;
}

export namespace GitHubLocation {
  export function isa(o: any): o is GitHubLocation {
    return _smithy.isa(o, "GitHubLocation");
  }
}

export enum GreenFleetProvisioningAction {
  COPY_AUTO_SCALING_GROUP = "COPY_AUTO_SCALING_GROUP",
  DISCOVER_EXISTING = "DISCOVER_EXISTING"
}

/**
 *
 *         <p>Information about the instances that belong to the replacement environment in a
 *             blue/green deployment.</p>
 *
 */
export interface GreenFleetProvisioningOption {
  __type?: "GreenFleetProvisioningOption";
  /**
   *
   *         <p>The method used to add instances to a replacement environment.</p>
   *         <ul>
   *             <li>
   *                 <p>DISCOVER_EXISTING: Use instances that already exist or will be created
   *                     manually.</p>
   *             </li>
   *             <li>
   *                 <p>COPY_AUTO_SCALING_GROUP: Use settings from a specified Auto Scaling group to
   *                     define and create instances in a new Auto Scaling group.</p>
   *             </li>
   *          </ul>
   *
   */
  action?: GreenFleetProvisioningAction | string;
}

export namespace GreenFleetProvisioningOption {
  export function isa(o: any): o is GreenFleetProvisioningOption {
    return _smithy.isa(o, "GreenFleetProvisioningOption");
  }
}

/**
 *
 *         <p>No IAM ARN was included in the request. You must use an IAM session ARN or IAM user
 *             ARN in the request.</p>
 *
 */
export interface IamArnRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IamArnRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace IamArnRequiredException {
  export function isa(o: any): o is IamArnRequiredException {
    return _smithy.isa(o, "IamArnRequiredException");
  }
}

/**
 *
 *         <p>The request included an IAM session ARN that has already been used to register a
 *             different instance.</p>
 *
 */
export interface IamSessionArnAlreadyRegisteredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IamSessionArnAlreadyRegisteredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace IamSessionArnAlreadyRegisteredException {
  export function isa(o: any): o is IamSessionArnAlreadyRegisteredException {
    return _smithy.isa(o, "IamSessionArnAlreadyRegisteredException");
  }
}

/**
 *
 *         <p>The specified IAM user ARN is already registered with an on-premises instance.</p>
 *
 */
export interface IamUserArnAlreadyRegisteredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IamUserArnAlreadyRegisteredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace IamUserArnAlreadyRegisteredException {
  export function isa(o: any): o is IamUserArnAlreadyRegisteredException {
    return _smithy.isa(o, "IamUserArnAlreadyRegisteredException");
  }
}

/**
 *
 *         <p>An IAM user ARN was not specified.</p>
 *
 */
export interface IamUserArnRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IamUserArnRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace IamUserArnRequiredException {
  export function isa(o: any): o is IamUserArnRequiredException {
    return _smithy.isa(o, "IamUserArnRequiredException");
  }
}

export enum InstanceAction {
  KEEP_ALIVE = "KEEP_ALIVE",
  TERMINATE = "TERMINATE"
}

/**
 *
 *         <p>The specified instance does not exist in the deployment group.</p>
 *
 */
export interface InstanceDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InstanceDoesNotExistException {
  export function isa(o: any): o is InstanceDoesNotExistException {
    return _smithy.isa(o, "InstanceDoesNotExistException");
  }
}

/**
 *
 *         <p>The instance ID was not specified.</p>
 *
 */
export interface InstanceIdRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceIdRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InstanceIdRequiredException {
  export function isa(o: any): o is InstanceIdRequiredException {
    return _smithy.isa(o, "InstanceIdRequiredException");
  }
}

/**
 *
 *         <p>Information about an on-premises instance.</p>
 *
 */
export interface InstanceInfo {
  __type?: "InstanceInfo";
  /**
   *
   *         <p>If the on-premises instance was deregistered, the time at which the on-premises
   *             instance was deregistered.</p>
   *
   */
  deregisterTime?: Date;

  /**
   *
   *         <p>The ARN of the IAM session associated with the on-premises instance.</p>
   *
   */
  iamSessionArn?: string;

  /**
   *
   *         <p>The IAM user ARN associated with the on-premises instance.</p>
   *
   */
  iamUserArn?: string;

  /**
   *
   *         <p>The ARN of the on-premises instance.</p>
   *
   */
  instanceArn?: string;

  /**
   *
   *         <p>The name of the on-premises instance.</p>
   *
   */
  instanceName?: string;

  /**
   *
   *         <p>The time at which the on-premises instance was registered.</p>
   *
   */
  registerTime?: Date;

  /**
   *
   *         <p>The tags currently associated with the on-premises instance.</p>
   *
   */
  tags?: Array<Tag>;
}

export namespace InstanceInfo {
  export function isa(o: any): o is InstanceInfo {
    return _smithy.isa(o, "InstanceInfo");
  }
}

/**
 *
 *         <p>The maximum number of allowed on-premises instances in a single call was
 *             exceeded.</p>
 *
 */
export interface InstanceLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InstanceLimitExceededException {
  export function isa(o: any): o is InstanceLimitExceededException {
    return _smithy.isa(o, "InstanceLimitExceededException");
  }
}

/**
 *
 *         <p>The specified on-premises instance name is already registered.</p>
 *
 */
export interface InstanceNameAlreadyRegisteredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceNameAlreadyRegisteredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InstanceNameAlreadyRegisteredException {
  export function isa(o: any): o is InstanceNameAlreadyRegisteredException {
    return _smithy.isa(o, "InstanceNameAlreadyRegisteredException");
  }
}

/**
 *
 *         <p>An on-premises instance name was not specified.</p>
 *
 */
export interface InstanceNameRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceNameRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InstanceNameRequiredException {
  export function isa(o: any): o is InstanceNameRequiredException {
    return _smithy.isa(o, "InstanceNameRequiredException");
  }
}

/**
 *
 *         <p>The specified on-premises instance is not registered.</p>
 *
 */
export interface InstanceNotRegisteredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceNotRegisteredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InstanceNotRegisteredException {
  export function isa(o: any): o is InstanceNotRegisteredException {
    return _smithy.isa(o, "InstanceNotRegisteredException");
  }
}

export enum InstanceStatus {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  READY = "Ready",
  SKIPPED = "Skipped",
  SUCCEEDED = "Succeeded",
  UNKNOWN = "Unknown"
}

/**
 *
 *         <p>Information about an instance in a deployment.</p>
 *
 */
export interface InstanceSummary {
  __type?: "InstanceSummary";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p>The instance ID.</p>
   *
   */
  instanceId?: string;

  /**
   *
   *         <p>Information about which environment an instance belongs to in a blue/green
   *             deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>BLUE: The instance is part of the original environment.</p>
   *             </li>
   *             <li>
   *                 <p>GREEN: The instance is part of the replacement environment.</p>
   *             </li>
   *          </ul>
   *
   */
  instanceType?: _InstanceType | string;

  /**
   *
   *         <p>A timestamp that indicaties when the instance information was last updated.</p>
   *
   */
  lastUpdatedAt?: Date;

  /**
   *
   *         <p>A list of lifecycle events for this instance.</p>
   *
   */
  lifecycleEvents?: Array<LifecycleEvent>;

  /**
   *
   *         <p>The deployment status for this instance:</p>
   *         <ul>
   *             <li>
   *                 <p>Pending: The deployment is pending for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>In Progress: The deployment is in progress for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The deployment has succeeded for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: The deployment has failed for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>Skipped: The deployment has been skipped for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>Unknown: The deployment status is unknown for this instance.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: InstanceStatus | string;
}

export namespace InstanceSummary {
  export function isa(o: any): o is InstanceSummary {
    return _smithy.isa(o, "InstanceSummary");
  }
}

/**
 *
 *         <p> A target Amazon EC2 or on-premises instance during a deployment that uses the
 *             EC2/On-premises compute platform. </p>
 *
 */
export interface InstanceTarget {
  __type?: "InstanceTarget";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> A label that identifies whether the instance is an original target
   *             (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   *
   */
  instanceLabel?: TargetLabel | string;

  /**
   *
   *         <p> The date and time when the target instance was updated by a deployment. </p>
   *
   */
  lastUpdatedAt?: Date;

  /**
   *
   *         <p> The lifecycle events of the deployment to this target instance. </p>
   *
   */
  lifecycleEvents?: Array<LifecycleEvent>;

  /**
   *
   *         <p> The status an EC2/On-premises deployment's target instance. </p>
   *
   */
  status?: TargetStatus | string;

  /**
   *
   *         <p> The ARN of the target. </p>
   *
   */
  targetArn?: string;

  /**
   *
   *         <p> The unique ID of a deployment target that has a type of <code>instanceTarget</code>.
   *         </p>
   *
   */
  targetId?: string;
}

export namespace InstanceTarget {
  export function isa(o: any): o is InstanceTarget {
    return _smithy.isa(o, "InstanceTarget");
  }
}

export enum _InstanceType {
  BLUE = "Blue",
  GREEN = "Green"
}

/**
 *
 *         <p>The format of the alarm configuration is invalid. Possible causes include:</p>
 *         <ul>
 *             <li>
 *                 <p>The alarm list is null.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm object is null.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p>
 *             </li>
 *             <li>
 *                 <p>Two alarms with the same name have been specified.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm configuration is enabled, but the alarm list is empty.</p>
 *             </li>
 *          </ul>
 *
 */
export interface InvalidAlarmConfigException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidAlarmConfigException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidAlarmConfigException {
  export function isa(o: any): o is InvalidAlarmConfigException {
    return _smithy.isa(o, "InvalidAlarmConfigException");
  }
}

/**
 *
 *         <p>The application name was specified in an invalid format.</p>
 *
 */
export interface InvalidApplicationNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidApplicationNameException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidApplicationNameException {
  export function isa(o: any): o is InvalidApplicationNameException {
    return _smithy.isa(o, "InvalidApplicationNameException");
  }
}

/**
 *
 *         <p>
 *             The specified ARN is not in a valid format.
 *         </p>
 *
 */
export interface InvalidArnException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidArnException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidArnException {
  export function isa(o: any): o is InvalidArnException {
    return _smithy.isa(o, "InvalidArnException");
  }
}

/**
 *
 *         <p>The automatic rollback configuration was specified in an invalid format. For example,
 *             automatic rollback is enabled, but an invalid triggering event type or no event types
 *             were listed.</p>
 *
 */
export interface InvalidAutoRollbackConfigException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidAutoRollbackConfigException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidAutoRollbackConfigException {
  export function isa(o: any): o is InvalidAutoRollbackConfigException {
    return _smithy.isa(o, "InvalidAutoRollbackConfigException");
  }
}

/**
 *
 *         <p>The Auto Scaling group was specified in an invalid format or does not exist.</p>
 *
 */
export interface InvalidAutoScalingGroupException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidAutoScalingGroupException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidAutoScalingGroupException {
  export function isa(o: any): o is InvalidAutoScalingGroupException {
    return _smithy.isa(o, "InvalidAutoScalingGroupException");
  }
}

/**
 *
 *         <p>The configuration for the blue/green deployment group was provided in an invalid
 *             format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
 *
 */
export interface InvalidBlueGreenDeploymentConfigurationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidBlueGreenDeploymentConfigurationException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidBlueGreenDeploymentConfigurationException {
  export function isa(
    o: any
  ): o is InvalidBlueGreenDeploymentConfigurationException {
    return _smithy.isa(o, "InvalidBlueGreenDeploymentConfigurationException");
  }
}

/**
 *
 *         <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
 *
 */
export interface InvalidBucketNameFilterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidBucketNameFilterException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidBucketNameFilterException {
  export function isa(o: any): o is InvalidBucketNameFilterException {
    return _smithy.isa(o, "InvalidBucketNameFilterException");
  }
}

/**
 *
 *         <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or
 *                 <code>Server</code>.</p>
 *
 */
export interface InvalidComputePlatformException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidComputePlatformException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidComputePlatformException {
  export function isa(o: any): o is InvalidComputePlatformException {
    return _smithy.isa(o, "InvalidComputePlatformException");
  }
}

/**
 *
 *         <p>The deployed state filter was specified in an invalid format.</p>
 *
 */
export interface InvalidDeployedStateFilterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeployedStateFilterException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeployedStateFilterException {
  export function isa(o: any): o is InvalidDeployedStateFilterException {
    return _smithy.isa(o, "InvalidDeployedStateFilterException");
  }
}

/**
 *
 *         <p>The deployment configuration name was specified in an invalid format.</p>
 *
 */
export interface InvalidDeploymentConfigNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentConfigNameException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentConfigNameException {
  export function isa(o: any): o is InvalidDeploymentConfigNameException {
    return _smithy.isa(o, "InvalidDeploymentConfigNameException");
  }
}

/**
 *
 *         <p>The deployment group name was specified in an invalid format.</p>
 *
 */
export interface InvalidDeploymentGroupNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentGroupNameException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentGroupNameException {
  export function isa(o: any): o is InvalidDeploymentGroupNameException {
    return _smithy.isa(o, "InvalidDeploymentGroupNameException");
  }
}

/**
 *
 *         <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 */
export interface InvalidDeploymentIdException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentIdException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentIdException {
  export function isa(o: any): o is InvalidDeploymentIdException {
    return _smithy.isa(o, "InvalidDeploymentIdException");
  }
}

/**
 *
 *         <p>An instance type was specified for an in-place deployment. Instance types are
 *             supported for blue/green deployments only.</p>
 *
 */
export interface InvalidDeploymentInstanceTypeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentInstanceTypeException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentInstanceTypeException {
  export function isa(o: any): o is InvalidDeploymentInstanceTypeException {
    return _smithy.isa(o, "InvalidDeploymentInstanceTypeException");
  }
}

/**
 *
 *         <p>The specified deployment status doesn't exist or cannot be determined.</p>
 *
 */
export interface InvalidDeploymentStatusException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentStatusException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentStatusException {
  export function isa(o: any): o is InvalidDeploymentStatusException {
    return _smithy.isa(o, "InvalidDeploymentStatusException");
  }
}

/**
 *
 *         <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE"
 *             and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and
 *             "WITHOUT_TRAFFIC_CONTROL."</p>
 *
 */
export interface InvalidDeploymentStyleException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentStyleException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentStyleException {
  export function isa(o: any): o is InvalidDeploymentStyleException {
    return _smithy.isa(o, "InvalidDeploymentStyleException");
  }
}

/**
 *
 *         <p> The target ID provided was not valid. </p>
 *
 */
export interface InvalidDeploymentTargetIdException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentTargetIdException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentTargetIdException {
  export function isa(o: any): o is InvalidDeploymentTargetIdException {
    return _smithy.isa(o, "InvalidDeploymentTargetIdException");
  }
}

/**
 *
 *         <p> The wait type is invalid. </p>
 *
 */
export interface InvalidDeploymentWaitTypeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeploymentWaitTypeException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidDeploymentWaitTypeException {
  export function isa(o: any): o is InvalidDeploymentWaitTypeException {
    return _smithy.isa(o, "InvalidDeploymentWaitTypeException");
  }
}

/**
 *
 *         <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of
 *             these data types can be used in a single call.</p>
 *
 */
export interface InvalidEC2TagCombinationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidEC2TagCombinationException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidEC2TagCombinationException {
  export function isa(o: any): o is InvalidEC2TagCombinationException {
    return _smithy.isa(o, "InvalidEC2TagCombinationException");
  }
}

/**
 *
 *         <p>The tag was specified in an invalid format.</p>
 *
 */
export interface InvalidEC2TagException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidEC2TagException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidEC2TagException {
  export function isa(o: any): o is InvalidEC2TagException {
    return _smithy.isa(o, "InvalidEC2TagException");
  }
}

/**
 *
 *         <p> The Amazon ECS service identifier is not valid. </p>
 *
 */
export interface InvalidECSServiceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidECSServiceException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidECSServiceException {
  export function isa(o: any): o is InvalidECSServiceException {
    return _smithy.isa(o, "InvalidECSServiceException");
  }
}

/**
 *
 *         <p>An invalid fileExistsBehavior option was specified to determine how AWS CodeDeploy
 *             handles files or directories that already exist in a deployment target location, but
 *             weren't part of the previous successful deployment. Valid values include "DISALLOW,"
 *             "OVERWRITE," and "RETAIN."</p>
 *
 */
export interface InvalidFileExistsBehaviorException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidFileExistsBehaviorException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidFileExistsBehaviorException {
  export function isa(o: any): o is InvalidFileExistsBehaviorException {
    return _smithy.isa(o, "InvalidFileExistsBehaviorException");
  }
}

/**
 *
 *         <p>The GitHub token is not valid.</p>
 *
 */
export interface InvalidGitHubAccountTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidGitHubAccountTokenException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidGitHubAccountTokenException {
  export function isa(o: any): o is InvalidGitHubAccountTokenException {
    return _smithy.isa(o, "InvalidGitHubAccountTokenException");
  }
}

/**
 *
 *         <p>The format of the specified GitHub account connection name is invalid.</p>
 *
 */
export interface InvalidGitHubAccountTokenNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidGitHubAccountTokenNameException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidGitHubAccountTokenNameException {
  export function isa(o: any): o is InvalidGitHubAccountTokenNameException {
    return _smithy.isa(o, "InvalidGitHubAccountTokenNameException");
  }
}

/**
 *
 *         <p>The IAM session ARN was specified in an invalid format.</p>
 *
 */
export interface InvalidIamSessionArnException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidIamSessionArnException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidIamSessionArnException {
  export function isa(o: any): o is InvalidIamSessionArnException {
    return _smithy.isa(o, "InvalidIamSessionArnException");
  }
}

/**
 *
 *         <p>The IAM user ARN was specified in an invalid format.</p>
 *
 */
export interface InvalidIamUserArnException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidIamUserArnException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidIamUserArnException {
  export function isa(o: any): o is InvalidIamUserArnException {
    return _smithy.isa(o, "InvalidIamUserArnException");
  }
}

/**
 *
 *         <p>The IgnoreApplicationStopFailures value is invalid. For AWS Lambda deployments,
 *                 <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code>
 *             or <code>false</code> is expected.</p>
 *
 */
export interface InvalidIgnoreApplicationStopFailuresValueException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidIgnoreApplicationStopFailuresValueException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidIgnoreApplicationStopFailuresValueException {
  export function isa(
    o: any
  ): o is InvalidIgnoreApplicationStopFailuresValueException {
    return _smithy.isa(o, "InvalidIgnoreApplicationStopFailuresValueException");
  }
}

/**
 *
 *         <p>The input was specified in an invalid format.</p>
 *
 */
export interface InvalidInputException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInputException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return _smithy.isa(o, "InvalidInputException");
  }
}

/**
 *
 *         <p>The on-premises instance name was specified in an invalid format.</p>
 *
 */
export interface InvalidInstanceNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInstanceNameException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidInstanceNameException {
  export function isa(o: any): o is InvalidInstanceNameException {
    return _smithy.isa(o, "InvalidInstanceNameException");
  }
}

/**
 *
 *         <p>The specified instance status does not exist.</p>
 *
 */
export interface InvalidInstanceStatusException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInstanceStatusException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidInstanceStatusException {
  export function isa(o: any): o is InvalidInstanceStatusException {
    return _smithy.isa(o, "InvalidInstanceStatusException");
  }
}

/**
 *
 *         <p>An invalid instance type was specified for instances in a blue/green deployment. Valid
 *             values include "Blue" for an original environment and "Green" for a replacement
 *             environment.</p>
 *
 */
export interface InvalidInstanceTypeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInstanceTypeException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidInstanceTypeException {
  export function isa(o: any): o is InvalidInstanceTypeException {
    return _smithy.isa(o, "InvalidInstanceTypeException");
  }
}

/**
 *
 *         <p>The specified key prefix filter was specified in an invalid format.</p>
 *
 */
export interface InvalidKeyPrefixFilterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidKeyPrefixFilterException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidKeyPrefixFilterException {
  export function isa(o: any): o is InvalidKeyPrefixFilterException {
    return _smithy.isa(o, "InvalidKeyPrefixFilterException");
  }
}

/**
 *
 *         <p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your
 *             AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are
 *             valid.</p>
 *
 */
export interface InvalidLifecycleEventHookExecutionIdException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidLifecycleEventHookExecutionIdException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidLifecycleEventHookExecutionIdException {
  export function isa(
    o: any
  ): o is InvalidLifecycleEventHookExecutionIdException {
    return _smithy.isa(o, "InvalidLifecycleEventHookExecutionIdException");
  }
}

/**
 *
 *         <p>The result of a Lambda validation function that verifies a lifecycle event is invalid.
 *             It should return <code>Succeeded</code> or <code>Failed</code>.</p>
 *
 */
export interface InvalidLifecycleEventHookExecutionStatusException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidLifecycleEventHookExecutionStatusException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidLifecycleEventHookExecutionStatusException {
  export function isa(
    o: any
  ): o is InvalidLifecycleEventHookExecutionStatusException {
    return _smithy.isa(o, "InvalidLifecycleEventHookExecutionStatusException");
  }
}

/**
 *
 *         <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 *
 */
export interface InvalidLoadBalancerInfoException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidLoadBalancerInfoException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidLoadBalancerInfoException {
  export function isa(o: any): o is InvalidLoadBalancerInfoException {
    return _smithy.isa(o, "InvalidLoadBalancerInfoException");
  }
}

/**
 *
 *         <p>The minimum healthy instance value was specified in an invalid format.</p>
 *
 */
export interface InvalidMinimumHealthyHostValueException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidMinimumHealthyHostValueException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidMinimumHealthyHostValueException {
  export function isa(o: any): o is InvalidMinimumHealthyHostValueException {
    return _smithy.isa(o, "InvalidMinimumHealthyHostValueException");
  }
}

/**
 *
 *         <p>The next token was specified in an invalid format.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 *         <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet,
 *             but only one of these data types can be used in a single call.</p>
 *
 */
export interface InvalidOnPremisesTagCombinationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidOnPremisesTagCombinationException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidOnPremisesTagCombinationException {
  export function isa(o: any): o is InvalidOnPremisesTagCombinationException {
    return _smithy.isa(o, "InvalidOnPremisesTagCombinationException");
  }
}

/**
 *
 *         <p>An invalid operation was detected.</p>
 *
 */
export interface InvalidOperationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidOperationException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidOperationException {
  export function isa(o: any): o is InvalidOperationException {
    return _smithy.isa(o, "InvalidOperationException");
  }
}

/**
 *
 *         <p>The registration status was specified in an invalid format.</p>
 *
 */
export interface InvalidRegistrationStatusException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRegistrationStatusException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidRegistrationStatusException {
  export function isa(o: any): o is InvalidRegistrationStatusException {
    return _smithy.isa(o, "InvalidRegistrationStatusException");
  }
}

/**
 *
 *         <p>The revision was specified in an invalid format.</p>
 *
 */
export interface InvalidRevisionException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRevisionException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidRevisionException {
  export function isa(o: any): o is InvalidRevisionException {
    return _smithy.isa(o, "InvalidRevisionException");
  }
}

/**
 *
 *         <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group
 *             was specified, the specified service role does not grant the appropriate permissions to
 *             Amazon EC2 Auto Scaling.</p>
 *
 */
export interface InvalidRoleException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRoleException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidRoleException {
  export function isa(o: any): o is InvalidRoleException {
    return _smithy.isa(o, "InvalidRoleException");
  }
}

/**
 *
 *         <p>The column name to sort by is either not present or was specified in an invalid
 *             format.</p>
 *
 */
export interface InvalidSortByException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidSortByException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidSortByException {
  export function isa(o: any): o is InvalidSortByException {
    return _smithy.isa(o, "InvalidSortByException");
  }
}

/**
 *
 *         <p>The sort order was specified in an invalid format.</p>
 *
 */
export interface InvalidSortOrderException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidSortOrderException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidSortOrderException {
  export function isa(o: any): o is InvalidSortOrderException {
    return _smithy.isa(o, "InvalidSortOrderException");
  }
}

/**
 *
 *         <p>The tag was specified in an invalid format.</p>
 *
 */
export interface InvalidTagException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTagException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTagException {
  export function isa(o: any): o is InvalidTagException {
    return _smithy.isa(o, "InvalidTagException");
  }
}

/**
 *
 *         <p>The tag filter was specified in an invalid format.</p>
 *
 */
export interface InvalidTagFilterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTagFilterException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTagFilterException {
  export function isa(o: any): o is InvalidTagFilterException {
    return _smithy.isa(o, "InvalidTagFilterException");
  }
}

/**
 *
 *         <p>
 *             The specified tags are not valid.
 *         </p>
 *
 */
export interface InvalidTagsToAddException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTagsToAddException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTagsToAddException {
  export function isa(o: any): o is InvalidTagsToAddException {
    return _smithy.isa(o, "InvalidTagsToAddException");
  }
}

/**
 *
 *         <p> The target filter name is invalid. </p>
 *
 */
export interface InvalidTargetFilterNameException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTargetFilterNameException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTargetFilterNameException {
  export function isa(o: any): o is InvalidTargetFilterNameException {
    return _smithy.isa(o, "InvalidTargetFilterNameException");
  }
}

/**
 *
 *         <p> A target group pair associated with this deployment is not valid. </p>
 *
 */
export interface InvalidTargetGroupPairException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTargetGroupPairException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTargetGroupPairException {
  export function isa(o: any): o is InvalidTargetGroupPairException {
    return _smithy.isa(o, "InvalidTargetGroupPairException");
  }
}

/**
 *
 *         <p>The target instance configuration is invalid. Possible causes include:</p>
 *         <ul>
 *             <li>
 *                 <p>Configuration data for target instances was entered for an in-place
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>The limit of 10 tags for a tag type was exceeded.</p>
 *             </li>
 *             <li>
 *                 <p>The combined length of the tag names exceeded the limit. </p>
 *             </li>
 *             <li>
 *                 <p>A specified tag is not currently applied to any instances.</p>
 *             </li>
 *          </ul>
 *
 */
export interface InvalidTargetInstancesException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTargetInstancesException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTargetInstancesException {
  export function isa(o: any): o is InvalidTargetInstancesException {
    return _smithy.isa(o, "InvalidTargetInstancesException");
  }
}

/**
 *
 *         <p>The specified time range was specified in an invalid format.</p>
 *
 */
export interface InvalidTimeRangeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTimeRangeException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTimeRangeException {
  export function isa(o: any): o is InvalidTimeRangeException {
    return _smithy.isa(o, "InvalidTimeRangeException");
  }
}

/**
 *
 *         <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 *
 */
export interface InvalidTrafficRoutingConfigurationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTrafficRoutingConfigurationException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTrafficRoutingConfigurationException {
  export function isa(
    o: any
  ): o is InvalidTrafficRoutingConfigurationException {
    return _smithy.isa(o, "InvalidTrafficRoutingConfigurationException");
  }
}

/**
 *
 *         <p>The trigger was specified in an invalid format.</p>
 *
 */
export interface InvalidTriggerConfigException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTriggerConfigException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidTriggerConfigException {
  export function isa(o: any): o is InvalidTriggerConfigException {
    return _smithy.isa(o, "InvalidTriggerConfigException");
  }
}

/**
 *
 *         <p>The UpdateOutdatedInstancesOnly value is invalid. For AWS Lambda deployments,
 *                 <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code>
 *             or <code>false</code> is expected.</p>
 *
 */
export interface InvalidUpdateOutdatedInstancesOnlyValueException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidUpdateOutdatedInstancesOnlyValueException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace InvalidUpdateOutdatedInstancesOnlyValueException {
  export function isa(
    o: any
  ): o is InvalidUpdateOutdatedInstancesOnlyValueException {
    return _smithy.isa(o, "InvalidUpdateOutdatedInstancesOnlyValueException");
  }
}

/**
 *
 *         <p>
 *             Information about a Lambda function specified in a deployment.
 *         </p>
 *
 */
export interface LambdaFunctionInfo {
  __type?: "LambdaFunctionInfo";
  /**
   *
   *         <p>
   *             The version of a Lambda function that production traffic points to.
   *         </p>
   *
   */
  currentVersion?: string;

  /**
   *
   *         <p>
   *             The alias of a Lambda function. For more information, see
   *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>.
   *         </p>
   *
   */
  functionAlias?: string;

  /**
   *
   *         <p>
   *             The name of a Lambda function.
   *         </p>
   *
   */
  functionName?: string;

  /**
   *
   *         <p>
   *             The version of a Lambda function that production traffic points to after the Lambda function is deployed.
   *         </p>
   *
   */
  targetVersion?: string;

  /**
   *
   *         <p>
   *             The percentage of production traffic that the target version of a Lambda function receives.
   *         </p>
   *
   */
  targetVersionWeight?: number;
}

export namespace LambdaFunctionInfo {
  export function isa(o: any): o is LambdaFunctionInfo {
    return _smithy.isa(o, "LambdaFunctionInfo");
  }
}

/**
 *
 *         <p> Information about the target AWS Lambda function during an AWS Lambda deployment.
 *         </p>
 *
 */
export interface LambdaTarget {
  __type?: "LambdaTarget";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p>
   *             A <code>LambdaFunctionInfo</code> object that describes a target Lambda function.
   *         </p>
   *
   */
  lambdaFunctionInfo?: LambdaFunctionInfo;

  /**
   *
   *         <p> The date and time when the target Lambda function was updated by a deployment.
   *         </p>
   *
   */
  lastUpdatedAt?: Date;

  /**
   *
   *         <p> The lifecycle events of the deployment to this target Lambda function. </p>
   *
   */
  lifecycleEvents?: Array<LifecycleEvent>;

  /**
   *
   *         <p> The status an AWS Lambda deployment's target Lambda function. </p>
   *
   */
  status?: TargetStatus | string;

  /**
   *
   *         <p> The ARN of the target. </p>
   *
   */
  targetArn?: string;

  /**
   *
   *         <p> The unique ID of a deployment target that has a type of <code>lambdaTarget</code>.
   *         </p>
   *
   */
  targetId?: string;
}

export namespace LambdaTarget {
  export function isa(o: any): o is LambdaTarget {
    return _smithy.isa(o, "LambdaTarget");
  }
}

/**
 *
 *         <p>Information about the most recent attempted or successful deployment to a deployment
 *             group.</p>
 *
 */
export interface LastDeploymentInfo {
  __type?: "LastDeploymentInfo";
  /**
   *
   *         <p>A timestamp that indicates when the most recent deployment to the deployment group
   *             started.</p>
   *
   */
  createTime?: Date;

  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p>A timestamp that indicates when the most recent deployment to the deployment group was
   *             complete.</p>
   *
   */
  endTime?: Date;

  /**
   *
   *         <p>The status of the most recent deployment.</p>
   *
   */
  status?: DeploymentStatus | string;
}

export namespace LastDeploymentInfo {
  export function isa(o: any): o is LastDeploymentInfo {
    return _smithy.isa(o, "LastDeploymentInfo");
  }
}

export enum LifecycleErrorCode {
  SCRIPT_FAILED = "ScriptFailed",
  SCRIPT_MISSING = "ScriptMissing",
  SCRIPT_NOT_EXECUTABLE = "ScriptNotExecutable",
  SCRIPT_TIMED_OUT = "ScriptTimedOut",
  SUCCESS = "Success",
  UNKNOWN_ERROR = "UnknownError"
}

/**
 *
 *         <p>Information about a deployment lifecycle event.</p>
 *
 */
export interface LifecycleEvent {
  __type?: "LifecycleEvent";
  /**
   *
   *         <p>Diagnostic information about the deployment lifecycle event.</p>
   *
   */
  diagnostics?: Diagnostics;

  /**
   *
   *         <p>A timestamp that indicates when the deployment lifecycle event ended.</p>
   *
   */
  endTime?: Date;

  /**
   *
   *         <p>The deployment lifecycle event name, such as ApplicationStop, BeforeInstall,
   *             AfterInstall, ApplicationStart, or ValidateService.</p>
   *
   */
  lifecycleEventName?: string;

  /**
   *
   *         <p>A timestamp that indicates when the deployment lifecycle event started.</p>
   *
   */
  startTime?: Date;

  /**
   *
   *         <p>The deployment lifecycle event status:</p>
   *         <ul>
   *             <li>
   *                 <p>Pending: The deployment lifecycle event is pending.</p>
   *             </li>
   *             <li>
   *                 <p>InProgress: The deployment lifecycle event is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The deployment lifecycle event ran successfully.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: The deployment lifecycle event has failed.</p>
   *             </li>
   *             <li>
   *                 <p>Skipped: The deployment lifecycle event has been skipped.</p>
   *             </li>
   *             <li>
   *                 <p>Unknown: The deployment lifecycle event is unknown.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: LifecycleEventStatus | string;
}

export namespace LifecycleEvent {
  export function isa(o: any): o is LifecycleEvent {
    return _smithy.isa(o, "LifecycleEvent");
  }
}

/**
 *
 *         <p>An attempt to return the status of an already completed lifecycle event
 *             occurred.</p>
 *
 */
export interface LifecycleEventAlreadyCompletedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LifecycleEventAlreadyCompletedException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace LifecycleEventAlreadyCompletedException {
  export function isa(o: any): o is LifecycleEventAlreadyCompletedException {
    return _smithy.isa(o, "LifecycleEventAlreadyCompletedException");
  }
}

export enum LifecycleEventStatus {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SKIPPED = "Skipped",
  SUCCEEDED = "Succeeded",
  UNKNOWN = "Unknown"
}

/**
 *
 *         <p>The limit for lifecycle hooks was exceeded.</p>
 *
 */
export interface LifecycleHookLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LifecycleHookLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace LifecycleHookLimitExceededException {
  export function isa(o: any): o is LifecycleHookLimitExceededException {
    return _smithy.isa(o, "LifecycleHookLimitExceededException");
  }
}

/**
 *
 *         <p> Represents the input of a ListApplicationRevisions operation. </p>
 *
 */
export interface ListApplicationRevisionsInput {
  __type?: "ListApplicationRevisionsInput";
  /**
   *
   *         <p> The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account. </p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p> Whether to list revisions based on whether the revision is the target revision of an
   *             deployment group: </p>
   *         <ul>
   *             <li>
   *                 <p>include: List revisions that are target revisions of a deployment
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>exclude: Do not list revisions that are target revisions of a deployment
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>ignore: List all revisions.</p>
   *             </li>
   *          </ul>
   *
   */
  deployed?: ListStateFilterAction | string;

  /**
   *
   *         <p>An identifier returned from the previous <code>ListApplicationRevisions</code> call.
   *             It can be used to return the next set of applications in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p> An Amazon S3 bucket name to limit the search for revisions. </p>
   *         <p> If set to null, all of the user's buckets are searched. </p>
   *
   */
  s3Bucket?: string;

  /**
   *
   *         <p> A key prefix for the set of Amazon S3 objects to limit the search for revisions.
   *         </p>
   *
   */
  s3KeyPrefix?: string;

  /**
   *
   *         <p>The column name to use to sort the list results:</p>
   *         <ul>
   *             <li>
   *                 <p>registerTime: Sort by the time the revisions were registered with AWS
   *                     CodeDeploy.</p>
   *             </li>
   *             <li>
   *                 <p>firstUsedTime: Sort by the time the revisions were first used in a
   *                     deployment.</p>
   *             </li>
   *             <li>
   *                 <p>lastUsedTime: Sort by the time the revisions were last used in a
   *                     deployment.</p>
   *             </li>
   *          </ul>
   *         <p> If not specified or set to null, the results are returned in an arbitrary order. </p>
   *
   */
  sortBy?: ApplicationRevisionSortBy | string;

  /**
   *
   *         <p> The order in which to sort the list results: </p>
   *         <ul>
   *             <li>
   *                 <p>ascending: ascending order.</p>
   *             </li>
   *             <li>
   *                 <p>descending: descending order.</p>
   *             </li>
   *          </ul>
   *         <p>If not specified, the results are sorted in ascending order.</p>
   *         <p>If set to null, the results are sorted in an arbitrary order.</p>
   *
   */
  sortOrder?: SortOrder | string;
}

export namespace ListApplicationRevisionsInput {
  export function isa(o: any): o is ListApplicationRevisionsInput {
    return _smithy.isa(o, "ListApplicationRevisionsInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListApplicationRevisions operation.</p>
 *
 */
export interface ListApplicationRevisionsOutput extends $MetadataBearer {
  __type?: "ListApplicationRevisionsOutput";
  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list application revisions call to return the next set of
   *             application revisions in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>A list of locations that contain the matching revisions.</p>
   *
   */
  revisions?: Array<RevisionLocation>;
}

export namespace ListApplicationRevisionsOutput {
  export function isa(o: any): o is ListApplicationRevisionsOutput {
    return _smithy.isa(o, "ListApplicationRevisionsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a ListApplications operation.</p>
 *
 */
export interface ListApplicationsInput {
  __type?: "ListApplicationsInput";
  /**
   *
   *         <p>An identifier returned from the previous list applications call. It can be used to
   *             return the next set of applications in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListApplicationsInput {
  export function isa(o: any): o is ListApplicationsInput {
    return _smithy.isa(o, "ListApplicationsInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListApplications operation.</p>
 *
 */
export interface ListApplicationsOutput extends $MetadataBearer {
  __type?: "ListApplicationsOutput";
  /**
   *
   *         <p>A list of application names.</p>
   *
   */
  applications?: Array<string>;

  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list applications call to return the next set of applications in
   *             the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListApplicationsOutput {
  export function isa(o: any): o is ListApplicationsOutput {
    return _smithy.isa(o, "ListApplicationsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a ListDeploymentConfigs operation.</p>
 *
 */
export interface ListDeploymentConfigsInput {
  __type?: "ListDeploymentConfigsInput";
  /**
   *
   *         <p>An identifier returned from the previous <code>ListDeploymentConfigs</code> call. It
   *             can be used to return the next set of deployment configurations in the list. </p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentConfigsInput {
  export function isa(o: any): o is ListDeploymentConfigsInput {
    return _smithy.isa(o, "ListDeploymentConfigsInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListDeploymentConfigs operation.</p>
 *
 */
export interface ListDeploymentConfigsOutput extends $MetadataBearer {
  __type?: "ListDeploymentConfigsOutput";
  /**
   *
   *         <p>A list of deployment configurations, including built-in configurations such as
   *             CodeDeployDefault.OneAtATime.</p>
   *
   */
  deploymentConfigsList?: Array<string>;

  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment configurations call to return the next set of
   *             deployment configurations in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentConfigsOutput {
  export function isa(o: any): o is ListDeploymentConfigsOutput {
    return _smithy.isa(o, "ListDeploymentConfigsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a ListDeploymentGroups operation.</p>
 *
 */
export interface ListDeploymentGroupsInput {
  __type?: "ListDeploymentGroupsInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>An identifier returned from the previous list deployment groups call. It can be used
   *             to return the next set of deployment groups in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentGroupsInput {
  export function isa(o: any): o is ListDeploymentGroupsInput {
    return _smithy.isa(o, "ListDeploymentGroupsInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListDeploymentGroups operation.</p>
 *
 */
export interface ListDeploymentGroupsOutput extends $MetadataBearer {
  __type?: "ListDeploymentGroupsOutput";
  /**
   *
   *         <p>The application name.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>A list of deployment group names.</p>
   *
   */
  deploymentGroups?: Array<string>;

  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment groups call to return the next set of deployment
   *             groups in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentGroupsOutput {
  export function isa(o: any): o is ListDeploymentGroupsOutput {
    return _smithy.isa(o, "ListDeploymentGroupsOutput");
  }
}

/**
 *
 *         <p> Represents the input of a ListDeploymentInstances operation. </p>
 *
 */
export interface ListDeploymentInstancesInput {
  __type?: "ListDeploymentInstancesInput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId: string | undefined;

  /**
   *
   *         <p>A subset of instances to list by status:</p>
   *         <ul>
   *             <li>
   *                 <p>Pending: Include those instances with pending deployments.</p>
   *             </li>
   *             <li>
   *                 <p>InProgress: Include those instances where deployments are still in
   *                     progress.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: Include those instances with successful deployments.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: Include those instances with failed deployments.</p>
   *             </li>
   *             <li>
   *                 <p>Skipped: Include those instances with skipped deployments.</p>
   *             </li>
   *             <li>
   *                 <p>Unknown: Include those instances with deployments in an unknown state.</p>
   *             </li>
   *          </ul>
   *
   */
  instanceStatusFilter?: Array<InstanceStatus | string>;

  /**
   *
   *         <p>The set of instances in a blue/green deployment, either those in the original
   *             environment ("BLUE") or those in the replacement environment ("GREEN"), for which you
   *             want to view instance information.</p>
   *
   */
  instanceTypeFilter?: Array<_InstanceType | string>;

  /**
   *
   *         <p>An identifier returned from the previous list deployment instances call. It can be
   *             used to return the next set of deployment instances in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentInstancesInput {
  export function isa(o: any): o is ListDeploymentInstancesInput {
    return _smithy.isa(o, "ListDeploymentInstancesInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListDeploymentInstances operation.</p>
 *
 */
export interface ListDeploymentInstancesOutput extends $MetadataBearer {
  __type?: "ListDeploymentInstancesOutput";
  /**
   *
   *         <p>A list of instance IDs.</p>
   *
   */
  instancesList?: Array<string>;

  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment instances call to return the next set of
   *             deployment instances in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentInstancesOutput {
  export function isa(o: any): o is ListDeploymentInstancesOutput {
    return _smithy.isa(o, "ListDeploymentInstancesOutput");
  }
}

export interface ListDeploymentTargetsInput {
  __type?: "ListDeploymentTargetsInput";
  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> A token identifier returned from the previous <code>ListDeploymentTargets</code>
   *             call. It can be used to return the next set of deployment targets in the list. </p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p> A key used to filter the returned targets. The two valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>TargetStatus</code> - A <code>TargetStatus</code> filter string can be <code>Failed</code>, <code>InProgress</code>, <code>Pending</code>,
   *                     <code>Ready</code>, <code>Skipped</code>, <code>Succeeded</code>, or <code>Unknown</code>.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ServerInstanceLabel</code> - A <code>ServerInstanceLabel</code> filter string can be <code>Blue</code> or <code>Green</code>.
   *                 </p>
   *             </li>
   *          </ul>
   *
   */
  targetFilters?: { [key: string]: Array<string> };
}

export namespace ListDeploymentTargetsInput {
  export function isa(o: any): o is ListDeploymentTargetsInput {
    return _smithy.isa(o, "ListDeploymentTargetsInput");
  }
}

export interface ListDeploymentTargetsOutput extends $MetadataBearer {
  __type?: "ListDeploymentTargetsOutput";
  /**
   *
   *         <p> If a large amount of information is returned, a token identifier is also  returned.
   *             It can be used in a subsequent <code>ListDeploymentTargets</code> call to return the
   *             next set of deployment targets in the list. </p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p> The unique IDs of deployment targets. </p>
   *
   */
  targetIds?: Array<string>;
}

export namespace ListDeploymentTargetsOutput {
  export function isa(o: any): o is ListDeploymentTargetsOutput {
    return _smithy.isa(o, "ListDeploymentTargetsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a ListDeployments operation.</p>
 *
 */
export interface ListDeploymentsInput {
  __type?: "ListDeploymentsInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *         <note>
   *             <p>If <code>applicationName</code> is specified, then <code>deploymentGroupName</code> must
   *                 be specified. If it is not specified, then <code>deploymentGroupName</code> must not
   *                 be specified.
   *             </p>
   *         </note>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>A time range (start and end) for returning a subset of the list of deployments.</p>
   *
   */
  createTimeRange?: TimeRange;

  /**
   *
   *         <p>The name of a deployment group for the specified application.</p>
   *         <note>
   *             <p>If <code>deploymentGroupName</code> is specified, then <code>applicationName</code> must
   *                 be specified. If it is not specified, then <code>applicationName</code> must not
   *                 be specified.
   *             </p>
   *         </note>
   *
   */
  deploymentGroupName?: string;

  /**
   *
   *         <p>A subset of deployments to list by status:</p>
   *         <ul>
   *             <li>
   *                 <p>Created: Include created deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>Queued: Include queued deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>In Progress: Include in-progress deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: Include successful deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: Include failed deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>Stopped: Include stopped deployments in the resulting list.</p>
   *             </li>
   *          </ul>
   *
   */
  includeOnlyStatuses?: Array<DeploymentStatus | string>;

  /**
   *
   *         <p>An identifier returned from the previous list deployments call. It can be used to
   *             return the next set of deployments in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentsInput {
  export function isa(o: any): o is ListDeploymentsInput {
    return _smithy.isa(o, "ListDeploymentsInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListDeployments operation.</p>
 *
 */
export interface ListDeploymentsOutput extends $MetadataBearer {
  __type?: "ListDeploymentsOutput";
  /**
   *
   *         <p>A list of deployment IDs.</p>
   *
   */
  deployments?: Array<string>;

  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployments call to return the next set of deployments in
   *             the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeploymentsOutput {
  export function isa(o: any): o is ListDeploymentsOutput {
    return _smithy.isa(o, "ListDeploymentsOutput");
  }
}

/**
 *
 *         <p>Represents the input of a ListGitHubAccountTokenNames operation.</p>
 *
 */
export interface ListGitHubAccountTokenNamesInput {
  __type?: "ListGitHubAccountTokenNamesInput";
  /**
   *
   *         <p>An identifier returned from the previous ListGitHubAccountTokenNames call. It can be
   *             used to return the next set of names in the list. </p>
   *
   */
  nextToken?: string;
}

export namespace ListGitHubAccountTokenNamesInput {
  export function isa(o: any): o is ListGitHubAccountTokenNamesInput {
    return _smithy.isa(o, "ListGitHubAccountTokenNamesInput");
  }
}

/**
 *
 *         <p>Represents the output of a ListGitHubAccountTokenNames operation.</p>
 *
 */
export interface ListGitHubAccountTokenNamesOutput extends $MetadataBearer {
  __type?: "ListGitHubAccountTokenNamesOutput";
  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent ListGitHubAccountTokenNames call to return the next set of names
   *             in the list. </p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>A list of names of connections to GitHub accounts.</p>
   *
   */
  tokenNameList?: Array<string>;
}

export namespace ListGitHubAccountTokenNamesOutput {
  export function isa(o: any): o is ListGitHubAccountTokenNamesOutput {
    return _smithy.isa(o, "ListGitHubAccountTokenNamesOutput");
  }
}

/**
 *
 *         <p>Represents the input of a ListOnPremisesInstances operation.</p>
 *
 */
export interface ListOnPremisesInstancesInput {
  __type?: "ListOnPremisesInstancesInput";
  /**
   *
   *         <p>An identifier returned from the previous list on-premises instances call. It can be
   *             used to return the next set of on-premises instances in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>The registration status of the on-premises instances:</p>
   *         <ul>
   *             <li>
   *                 <p>Deregistered: Include deregistered on-premises instances in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                 <p>Registered: Include registered on-premises instances in the resulting
   *                     list.</p>
   *             </li>
   *          </ul>
   *
   */
  registrationStatus?: RegistrationStatus | string;

  /**
   *
   *         <p>The on-premises instance tags that are used to restrict the  on-premises instance
   *             names returned.</p>
   *
   */
  tagFilters?: Array<TagFilter>;
}

export namespace ListOnPremisesInstancesInput {
  export function isa(o: any): o is ListOnPremisesInstancesInput {
    return _smithy.isa(o, "ListOnPremisesInstancesInput");
  }
}

/**
 *
 *         <p>Represents the output of the list on-premises instances operation.</p>
 *
 */
export interface ListOnPremisesInstancesOutput extends $MetadataBearer {
  __type?: "ListOnPremisesInstancesOutput";
  /**
   *
   *         <p>The list of matching on-premises instance names.</p>
   *
   */
  instanceNames?: Array<string>;

  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list on-premises instances call to return the next set of
   *             on-premises instances in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListOnPremisesInstancesOutput {
  export function isa(o: any): o is ListOnPremisesInstancesOutput {
    return _smithy.isa(o, "ListOnPremisesInstancesOutput");
  }
}

export enum ListStateFilterAction {
  Exclude = "exclude",
  Ignore = "ignore",
  Include = "include"
}

export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   *
   *         <p>An identifier returned from the previous <code>ListTagsForResource</code> call.
   *                 It can be used to return the next set of applications in the list.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>
   *             The ARN of a CodeDeploy resource. <code>ListTagsForResource</code> returns all the tags associated with the
   *             resource that is identified by the <code>ResourceArn</code>.
   *         </p>
   *
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export function isa(o: any): o is ListTagsForResourceInput {
    return _smithy.isa(o, "ListTagsForResourceInput");
  }
}

export interface ListTagsForResourceOutput extends $MetadataBearer {
  __type?: "ListTagsForResourceOutput";
  /**
   *
   *         <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list application revisions call to return the next set of
   *             application revisions in the list.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>
   *             A list of tags returned by <code>ListTagsForResource</code>. The tags are associated with the resource
   *             identified by the input <code>ResourceArn</code> parameter.
   *         </p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceOutput {
  export function isa(o: any): o is ListTagsForResourceOutput {
    return _smithy.isa(o, "ListTagsForResourceOutput");
  }
}

/**
 *
 *         <p>Information about the Elastic Load Balancing load balancer or target group used in a
 *             deployment.</p>
 *
 */
export interface LoadBalancerInfo {
  __type?: "LoadBalancerInfo";
  /**
   *
   *         <p>An array that contains information about the load balancer to use for load balancing
   *             in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load
   *             Balancers.</p>
   *         <note>
   *             <p> Adding more than one load balancer to the array is not supported. </p>
   *         </note>
   *
   */
  elbInfoList?: Array<ELBInfo>;

  /**
   *
   *         <p>An array that contains information about the target group to use for load balancing in
   *             a deployment. In Elastic Load Balancing, target groups are used with Application Load
   *             Balancers.</p>
   *         <note>
   *             <p> Adding more than one target group to the array is not supported. </p>
   *         </note>
   *
   */
  targetGroupInfoList?: Array<TargetGroupInfo>;

  /**
   *
   *         <p> The target group pair information. This is an array of
   *             <code>TargeGroupPairInfo</code> objects with a maximum size of one. </p>
   *
   */
  targetGroupPairInfoList?: Array<TargetGroupPairInfo>;
}

export namespace LoadBalancerInfo {
  export function isa(o: any): o is LoadBalancerInfo {
    return _smithy.isa(o, "LoadBalancerInfo");
  }
}

/**
 *
 *         <p>Information about minimum healthy instance.</p>
 *
 */
export interface MinimumHealthyHosts {
  __type?: "MinimumHealthyHosts";
  /**
   *
   *         <p>The minimum healthy instance type:</p>
   *         <ul>
   *             <li>
   *                 <p>HOST_COUNT: The minimum number of healthy instance as an absolute
   *                     value.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_PERCENT: The minimum number of healthy instance as a percentage of the
   *                     total number of instance in the deployment.</p>
   *             </li>
   *          </ul>
   *         <p>In an example of nine instance, if a HOST_COUNT of six is specified, deploy to up to
   *             three instances at a time. The deployment is successful if six or more instances are
   *             deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is
   *             specified, deploy to up to five instance at a time. The deployment is successful if four
   *             or more instance are deployed to successfully. Otherwise, the deployment fails.</p>
   *         <note>
   *             <p>In a call to the <code>GetDeploymentConfig</code>,
   *                 CodeDeployDefault.OneAtATime returns a minimum healthy instance type of
   *                 MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a
   *                 time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or
   *                 FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, AWS CodeDeploy
   *                 attempts to ensure that all instances but one are kept in a healthy state during the
   *                 deployment. Although this allows one instance at a time to be taken offline for a
   *                 new deployment, it also means that if the deployment to the last instance fails, the
   *                 overall deployment is still successful.</p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html">AWS CodeDeploy Instance
   *                 Health</a> in the <i>AWS CodeDeploy User Guide</i>.</p>
   *
   */
  type?: MinimumHealthyHostsType | string;

  /**
   *
   *         <p>The minimum healthy instance value.</p>
   *
   */
  value?: number;
}

export namespace MinimumHealthyHosts {
  export function isa(o: any): o is MinimumHealthyHosts {
    return _smithy.isa(o, "MinimumHealthyHosts");
  }
}

export type MinimumHealthyHostsType = "FLEET_PERCENT" | "HOST_COUNT";

/**
 *
 *         <p>Both an IAM user ARN and an IAM session ARN were included in the request. Use only one
 *             ARN type.</p>
 *
 */
export interface MultipleIamArnsProvidedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MultipleIamArnsProvidedException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace MultipleIamArnsProvidedException {
  export function isa(o: any): o is MultipleIamArnsProvidedException {
    return _smithy.isa(o, "MultipleIamArnsProvidedException");
  }
}

/**
 *
 *         <p>Information about groups of on-premises instance tags.</p>
 *
 */
export interface OnPremisesTagSet {
  __type?: "OnPremisesTagSet";
  /**
   *
   *         <p>A list that contains other lists of on-premises instance tag groups. For an instance
   *             to be included in the deployment group, it must be identified by all of the tag groups
   *             in the list.</p>
   *
   */
  onPremisesTagSetList?: Array<Array<TagFilter>>;
}

export namespace OnPremisesTagSet {
  export function isa(o: any): o is OnPremisesTagSet {
    return _smithy.isa(o, "OnPremisesTagSet");
  }
}

/**
 *
 *         <p>The API used does not support the deployment.</p>
 *
 */
export interface OperationNotSupportedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "OperationNotSupportedException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace OperationNotSupportedException {
  export function isa(o: any): o is OperationNotSupportedException {
    return _smithy.isa(o, "OperationNotSupportedException");
  }
}

export interface PutLifecycleEventHookExecutionStatusInput {
  __type?: "PutLifecycleEventHookExecutionStatusInput";
  /**
   *
   *         <p> The unique ID of a deployment. Pass this ID to a Lambda function that validates a
   *             deployment lifecycle event. </p>
   *
   */
  deploymentId?: string;

  /**
   *
   *         <p> The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is
   *             specified in the <code>hooks</code> section of the AppSpec file. </p>
   *
   */
  lifecycleEventHookExecutionId?: string;

  /**
   *
   *         <p>The result of a Lambda function that validates a deployment lifecycle event
   *                 (<code>Succeeded</code> or <code>Failed</code>).</p>
   *
   */
  status?: LifecycleEventStatus | string;
}

export namespace PutLifecycleEventHookExecutionStatusInput {
  export function isa(o: any): o is PutLifecycleEventHookExecutionStatusInput {
    return _smithy.isa(o, "PutLifecycleEventHookExecutionStatusInput");
  }
}

export interface PutLifecycleEventHookExecutionStatusOutput
  extends $MetadataBearer {
  __type?: "PutLifecycleEventHookExecutionStatusOutput";
  /**
   *
   *         <p>The execution ID of the lifecycle event hook. A hook is specified in the
   *                 <code>hooks</code> section of the deployment's AppSpec file.</p>
   *
   */
  lifecycleEventHookExecutionId?: string;
}

export namespace PutLifecycleEventHookExecutionStatusOutput {
  export function isa(o: any): o is PutLifecycleEventHookExecutionStatusOutput {
    return _smithy.isa(o, "PutLifecycleEventHookExecutionStatusOutput");
  }
}

/**
 *
 *         <p>A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted
 *             string. For AWS Lambda deployments, the revision is the same as the AppSpec file.</p>
 *
 */
export interface RawString {
  __type?: "RawString";
  /**
   *
   *         <p>The YAML-formatted or JSON-formatted revision string. It includes information about
   *             which Lambda function to update and optional Lambda functions that validate deployment
   *             lifecycle events.</p>
   *
   */
  content?: string;

  /**
   *
   *         <p>The SHA256 hash value of the revision content.</p>
   *
   */
  sha256?: string;
}

export namespace RawString {
  export function isa(o: any): o is RawString {
    return _smithy.isa(o, "RawString");
  }
}

/**
 *
 *         <p>Represents the input of a RegisterApplicationRevision operation.</p>
 *
 */
export interface RegisterApplicationRevisionInput {
  __type?: "RegisterApplicationRevisionInput";
  /**
   *
   *         <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS
   *             account.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>A comment about the revision.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>Information about the application revision to register, including type and
   *             location.</p>
   *
   */
  revision: RevisionLocation | undefined;
}

export namespace RegisterApplicationRevisionInput {
  export function isa(o: any): o is RegisterApplicationRevisionInput {
    return _smithy.isa(o, "RegisterApplicationRevisionInput");
  }
}

/**
 *
 *         <p>Represents the input of the register on-premises instance operation.</p>
 *
 */
export interface RegisterOnPremisesInstanceInput {
  __type?: "RegisterOnPremisesInstanceInput";
  /**
   *
   *         <p>The ARN of the IAM session to associate with the on-premises instance.</p>
   *
   */
  iamSessionArn?: string;

  /**
   *
   *         <p>The ARN of the IAM user to associate with the on-premises instance.</p>
   *
   */
  iamUserArn?: string;

  /**
   *
   *         <p>The name of the on-premises instance to register.</p>
   *
   */
  instanceName: string | undefined;
}

export namespace RegisterOnPremisesInstanceInput {
  export function isa(o: any): o is RegisterOnPremisesInstanceInput {
    return _smithy.isa(o, "RegisterOnPremisesInstanceInput");
  }
}

export enum RegistrationStatus {
  Deregistered = "Deregistered",
  Registered = "Registered"
}

/**
 *
 *         <p>Represents the input of a RemoveTagsFromOnPremisesInstances operation.</p>
 *
 */
export interface RemoveTagsFromOnPremisesInstancesInput {
  __type?: "RemoveTagsFromOnPremisesInstancesInput";
  /**
   *
   *         <p>The names of the on-premises instances from which to remove tags.</p>
   *
   */
  instanceNames: Array<string> | undefined;

  /**
   *
   *         <p>The tag key-value pairs to remove from the on-premises instances.</p>
   *
   */
  tags: Array<Tag> | undefined;
}

export namespace RemoveTagsFromOnPremisesInstancesInput {
  export function isa(o: any): o is RemoveTagsFromOnPremisesInstancesInput {
    return _smithy.isa(o, "RemoveTagsFromOnPremisesInstancesInput");
  }
}

/**
 *
 *         <p>
 *             The ARN of a resource is required, but was not found.
 *         </p>
 *
 */
export interface ResourceArnRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceArnRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ResourceArnRequiredException {
  export function isa(o: any): o is ResourceArnRequiredException {
    return _smithy.isa(o, "ResourceArnRequiredException");
  }
}

/**
 *
 *         <p>The specified resource could not be validated.</p>
 *
 */
export interface ResourceValidationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceValidationException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ResourceValidationException {
  export function isa(o: any): o is ResourceValidationException {
    return _smithy.isa(o, "ResourceValidationException");
  }
}

/**
 *
 *         <p>The named revision does not exist with the IAM user or AWS account.</p>
 *
 */
export interface RevisionDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RevisionDoesNotExistException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace RevisionDoesNotExistException {
  export function isa(o: any): o is RevisionDoesNotExistException {
    return _smithy.isa(o, "RevisionDoesNotExistException");
  }
}

/**
 *
 *         <p>Information about an application revision.</p>
 *
 */
export interface RevisionInfo {
  __type?: "RevisionInfo";
  /**
   *
   *         <p>Information about an application revision, including usage details and associated
   *             deployment groups.</p>
   *
   */
  genericRevisionInfo?: GenericRevisionInfo;

  /**
   *
   *         <p>Information about the location and type of an application revision.</p>
   *
   */
  revisionLocation?: RevisionLocation;
}

export namespace RevisionInfo {
  export function isa(o: any): o is RevisionInfo {
    return _smithy.isa(o, "RevisionInfo");
  }
}

/**
 *
 *         <p>Information about the location of an application revision.</p>
 *
 */
export interface RevisionLocation {
  __type?: "RevisionLocation";
  /**
   *
   *         <p> The content of an AppSpec file for an AWS Lambda or Amazon ECS deployment. The
   *             content is formatted as JSON or YAML and stored as a RawString. </p>
   *
   */
  appSpecContent?: AppSpecContent;

  /**
   *
   *         <p>Information about the location of application artifacts stored in GitHub.</p>
   *
   */
  gitHubLocation?: GitHubLocation;

  /**
   *
   *         <p>The type of application revision:</p>
   *         <ul>
   *             <li>
   *                 <p>S3: An application revision stored in Amazon S3.</p>
   *             </li>
   *             <li>
   *                 <p>GitHub: An application revision stored in GitHub (EC2/On-premises deployments
   *                     only).</p>
   *             </li>
   *             <li>
   *                 <p>String: A YAML-formatted or JSON-formatted string (AWS Lambda deployments
   *                     only).</p>
   *             </li>
   *          </ul>
   *
   */
  revisionType?: RevisionLocationType | string;

  /**
   *
   *         <p>Information about the location of a revision stored in Amazon S3. </p>
   *
   */
  s3Location?: S3Location;

  /**
   *
   *         <p>Information about the location of an AWS Lambda deployment revision stored as a
   *             RawString.</p>
   *
   */
  string?: RawString;
}

export namespace RevisionLocation {
  export function isa(o: any): o is RevisionLocation {
    return _smithy.isa(o, "RevisionLocation");
  }
}

export enum RevisionLocationType {
  AppSpecContent = "AppSpecContent",
  GitHub = "GitHub",
  S3 = "S3",
  String = "String"
}

/**
 *
 *         <p>The revision ID was not specified.</p>
 *
 */
export interface RevisionRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RevisionRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace RevisionRequiredException {
  export function isa(o: any): o is RevisionRequiredException {
    return _smithy.isa(o, "RevisionRequiredException");
  }
}

/**
 *
 *         <p>The role ID was not specified.</p>
 *
 */
export interface RoleRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RoleRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace RoleRequiredException {
  export function isa(o: any): o is RoleRequiredException {
    return _smithy.isa(o, "RoleRequiredException");
  }
}

/**
 *
 *         <p>Information about a deployment rollback.</p>
 *
 */
export interface RollbackInfo {
  __type?: "RollbackInfo";
  /**
   *
   *         <p>The ID of the deployment rollback.</p>
   *
   */
  rollbackDeploymentId?: string;

  /**
   *
   *         <p>Information that describes the status of a deployment rollback (for example, whether
   *             the deployment can't be rolled back, is in progress, failed, or succeeded). </p>
   *
   */
  rollbackMessage?: string;

  /**
   *
   *         <p>The deployment ID of the deployment that was underway and triggered a rollback
   *             deployment because it failed or was stopped.</p>
   *
   */
  rollbackTriggeringDeploymentId?: string;
}

export namespace RollbackInfo {
  export function isa(o: any): o is RollbackInfo {
    return _smithy.isa(o, "RollbackInfo");
  }
}

/**
 *
 *         <p>Information about the location of application artifacts stored in Amazon S3.</p>
 *
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   *
   *         <p>The name of the Amazon S3 bucket where the application revision is stored.</p>
   *
   */
  bucket?: string;

  /**
   *
   *         <p>The file type of the application revision. Must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>tar: A tar archive file.</p>
   *             </li>
   *             <li>
   *                 <p>tgz: A compressed tar archive file.</p>
   *             </li>
   *             <li>
   *                 <p>zip: A zip archive file.</p>
   *             </li>
   *          </ul>
   *
   */
  bundleType?: BundleType | string;

  /**
   *
   *         <p>The ETag of the Amazon S3 object that represents the bundled artifacts for the
   *             application revision.</p>
   *         <p>If the ETag is not specified as an input parameter, ETag validation of the object is
   *             skipped.</p>
   *
   */
  eTag?: string;

  /**
   *
   *         <p>The name of the Amazon S3 object that represents the bundled artifacts for the
   *             application revision.</p>
   *
   */
  key?: string;

  /**
   *
   *         <p>A specific version of the Amazon S3 object that represents the bundled artifacts for
   *             the application revision.</p>
   *         <p>If the version is not specified, the system uses the most recent version by
   *             default.</p>
   *
   */
  version?: string;
}

export namespace S3Location {
  export function isa(o: any): o is S3Location {
    return _smithy.isa(o, "S3Location");
  }
}

export interface SkipWaitTimeForInstanceTerminationInput {
  __type?: "SkipWaitTimeForInstanceTerminationInput";
  /**
   *
   *         <p> The unique ID of a blue/green deployment for which you want to skip the instance
   *             termination wait time. </p>
   *
   */
  deploymentId?: string;
}

export namespace SkipWaitTimeForInstanceTerminationInput {
  export function isa(o: any): o is SkipWaitTimeForInstanceTerminationInput {
    return _smithy.isa(o, "SkipWaitTimeForInstanceTerminationInput");
  }
}

export enum SortOrder {
  Ascending = "ascending",
  Descending = "descending"
}

/**
 *
 *         <p> Represents the input of a StopDeployment operation. </p>
 *
 */
export interface StopDeploymentInput {
  __type?: "StopDeploymentInput";
  /**
   *
   *         <p> Indicates, when a deployment is stopped, whether instances that have been updated
   *             should be rolled back to the previous version of the application revision. </p>
   *
   */
  autoRollbackEnabled?: boolean;

  /**
   *
   *         <p> The unique ID of a deployment. </p>
   *
   */
  deploymentId: string | undefined;
}

export namespace StopDeploymentInput {
  export function isa(o: any): o is StopDeploymentInput {
    return _smithy.isa(o, "StopDeploymentInput");
  }
}

/**
 *
 *         <p> Represents the output of a StopDeployment operation. </p>
 *
 */
export interface StopDeploymentOutput extends $MetadataBearer {
  __type?: "StopDeploymentOutput";
  /**
   *
   *         <p>The status of the stop deployment operation:</p>
   *         <ul>
   *             <li>
   *                 <p>Pending: The stop operation is pending.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The stop operation was successful.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: StopStatus | string;

  /**
   *
   *         <p>An accompanying status message.</p>
   *
   */
  statusMessage?: string;
}

export namespace StopDeploymentOutput {
  export function isa(o: any): o is StopDeploymentOutput {
    return _smithy.isa(o, "StopDeploymentOutput");
  }
}

export enum StopStatus {
  PENDING = "Pending",
  SUCCEEDED = "Succeeded"
}

/**
 *
 *         <p>Information about a tag.</p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   *         <p>The tag's key.</p>
   *
   */
  Key?: string;

  /**
   *
   *         <p>The tag's value.</p>
   *
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 *
 *         <p>Information about an on-premises instance tag filter.</p>
 *
 */
export interface TagFilter {
  __type?: "TagFilter";
  /**
   *
   *         <p>The on-premises instance tag filter key.</p>
   *
   */
  Key?: string;

  /**
   *
   *         <p>The on-premises instance tag filter type:</p>
   *         <ul>
   *             <li>
   *                 <p>KEY_ONLY: Key only.</p>
   *             </li>
   *             <li>
   *                 <p>VALUE_ONLY: Value only.</p>
   *             </li>
   *             <li>
   *                 <p>KEY_AND_VALUE: Key and value.</p>
   *             </li>
   *          </ul>
   *
   */
  Type?: TagFilterType | string;

  /**
   *
   *         <p>The on-premises instance tag filter value.</p>
   *
   */
  Value?: string;
}

export namespace TagFilter {
  export function isa(o: any): o is TagFilter {
    return _smithy.isa(o, "TagFilter");
  }
}

export enum TagFilterType {
  KEY_AND_VALUE = "KEY_AND_VALUE",
  KEY_ONLY = "KEY_ONLY",
  VALUE_ONLY = "VALUE_ONLY"
}

/**
 *
 *         <p>The maximum allowed number of tags was exceeded.</p>
 *
 */
export interface TagLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TagLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace TagLimitExceededException {
  export function isa(o: any): o is TagLimitExceededException {
    return _smithy.isa(o, "TagLimitExceededException");
  }
}

/**
 *
 *         <p>A tag was not specified.</p>
 *
 */
export interface TagRequiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TagRequiredException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace TagRequiredException {
  export function isa(o: any): o is TagRequiredException {
    return _smithy.isa(o, "TagRequiredException");
  }
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   *
   *         <p>
   *             The ARN of a resource, such as a CodeDeploy application or deployment group.
   *         </p>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   *         <p>
   *             A list of tags that <code>TagResource</code> associates with a resource. The resource is identified by the <code>ResourceArn</code> input parameter.
   *         </p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceInput {
  export function isa(o: any): o is TagResourceInput {
    return _smithy.isa(o, "TagResourceInput");
  }
}

export interface TagResourceOutput extends $MetadataBearer {
  __type?: "TagResourceOutput";
}

export namespace TagResourceOutput {
  export function isa(o: any): o is TagResourceOutput {
    return _smithy.isa(o, "TagResourceOutput");
  }
}

/**
 *
 *         <p>The number of tag groups included in the tag set list exceeded the maximum allowed
 *             limit of 3.</p>
 *
 */
export interface TagSetListLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TagSetListLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace TagSetListLimitExceededException {
  export function isa(o: any): o is TagSetListLimitExceededException {
    return _smithy.isa(o, "TagSetListLimitExceededException");
  }
}

export enum TargetFilterName {
  SERVER_INSTANCE_LABEL = "ServerInstanceLabel",
  TARGET_STATUS = "TargetStatus"
}

/**
 *
 *         <p>Information about a target group in Elastic Load Balancing to use in a deployment.
 *             Instances are registered as targets in a target group, and traffic is routed to the
 *             target group.</p>
 *
 */
export interface TargetGroupInfo {
  __type?: "TargetGroupInfo";
  /**
   *
   *         <p>For blue/green deployments, the name of the target group that instances in the
   *             original environment are deregistered from, and instances in the replacement environment
   *             are registered with. For in-place deployments, the name of the target group that
   *             instances are deregistered from, so they are not serving traffic during a deployment,
   *             and then re-registered with after the deployment is complete. </p>
   *
   */
  name?: string;
}

export namespace TargetGroupInfo {
  export function isa(o: any): o is TargetGroupInfo {
    return _smithy.isa(o, "TargetGroupInfo");
  }
}

/**
 *
 *         <p> Information about two target groups and how traffic is routed during an Amazon ECS
 *             deployment. An optional test traffic route can be specified. </p>
 *
 */
export interface TargetGroupPairInfo {
  __type?: "TargetGroupPairInfo";
  /**
   *
   *         <p> The path used by a load balancer to route production traffic when an Amazon ECS
   *             deployment is complete. </p>
   *
   */
  prodTrafficRoute?: TrafficRoute;

  /**
   *
   *         <p> One pair of target groups. One is associated with the original task set. The second
   *             is associated with the task set that serves traffic after the deployment is complete. </p>
   *
   */
  targetGroups?: Array<TargetGroupInfo>;

  /**
   *
   *         <p> An optional path used by a load balancer to route test traffic after an Amazon ECS
   *             deployment. Validation can occur while test traffic is served during a deployment. </p>
   *
   */
  testTrafficRoute?: TrafficRoute;
}

export namespace TargetGroupPairInfo {
  export function isa(o: any): o is TargetGroupPairInfo {
    return _smithy.isa(o, "TargetGroupPairInfo");
  }
}

/**
 *
 *         <p>Information about the instances to be used in the replacement environment in a
 *             blue/green deployment.</p>
 *
 */
export interface TargetInstances {
  __type?: "TargetInstances";
  /**
   *
   *         <p>The names of one or more Auto Scaling groups to identify a replacement environment for
   *             a blue/green deployment.</p>
   *
   */
  autoScalingGroups?: Array<string>;

  /**
   *
   *         <p>Information about the groups of EC2 instance tags that an instance must be identified
   *             by in order for it to be included in the replacement environment for a blue/green
   *             deployment. Cannot be used in the same call as tagFilters.</p>
   *
   */
  ec2TagSet?: EC2TagSet;

  /**
   *
   *         <p>The tag filter key, type, and value used to identify Amazon EC2 instances in a
   *             replacement environment for a blue/green deployment. Cannot be used in the same call as
   *             ec2TagSet.</p>
   *
   */
  tagFilters?: Array<EC2TagFilter>;
}

export namespace TargetInstances {
  export function isa(o: any): o is TargetInstances {
    return _smithy.isa(o, "TargetInstances");
  }
}

export enum TargetLabel {
  BLUE = "Blue",
  GREEN = "Green"
}

export enum TargetStatus {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  READY = "Ready",
  SKIPPED = "Skipped",
  SUCCEEDED = "Succeeded",
  UNKNOWN = "Unknown"
}

/**
 *
 *         <p>An API function was called too frequently.</p>
 *
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottlingException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 *
 *         <p>A configuration that shifts traffic from one version of a Lambda function to another
 *             in two increments. The original and target Lambda function versions are specified in the
 *             deployment's AppSpec file.</p>
 *
 */
export interface TimeBasedCanary {
  __type?: "TimeBasedCanary";
  /**
   *
   *         <p>The number of minutes between the first and second traffic shifts of a
   *                 <code>TimeBasedCanary</code> deployment.</p>
   *
   */
  canaryInterval?: number;

  /**
   *
   *         <p>The percentage of traffic to shift in the first increment of a
   *                 <code>TimeBasedCanary</code> deployment.</p>
   *
   */
  canaryPercentage?: number;
}

export namespace TimeBasedCanary {
  export function isa(o: any): o is TimeBasedCanary {
    return _smithy.isa(o, "TimeBasedCanary");
  }
}

/**
 *
 *         <p>A configuration that shifts traffic from one version of a Lambda function to another
 *             in equal increments, with an equal number of minutes between each increment. The
 *             original and target Lambda function versions are specified in the deployment's AppSpec
 *             file.</p>
 *
 */
export interface TimeBasedLinear {
  __type?: "TimeBasedLinear";
  /**
   *
   *         <p>The number of minutes between each incremental traffic shift of a
   *                 <code>TimeBasedLinear</code> deployment.</p>
   *
   */
  linearInterval?: number;

  /**
   *
   *         <p>The percentage of traffic that is shifted at the start of each increment of a
   *                 <code>TimeBasedLinear</code> deployment.</p>
   *
   */
  linearPercentage?: number;
}

export namespace TimeBasedLinear {
  export function isa(o: any): o is TimeBasedLinear {
    return _smithy.isa(o, "TimeBasedLinear");
  }
}

/**
 *
 *         <p>Information about a time range.</p>
 *
 */
export interface TimeRange {
  __type?: "TimeRange";
  /**
   *
   *         <p>The end time of the time range.</p>
   *         <note>
   *             <p>Specify null to leave the end time open-ended.</p>
   *         </note>
   *
   */
  end?: Date;

  /**
   *
   *         <p>The start time of the time range.</p>
   *         <note>
   *             <p>Specify null to leave the start time open-ended.</p>
   *         </note>
   *
   */
  start?: Date;
}

export namespace TimeRange {
  export function isa(o: any): o is TimeRange {
    return _smithy.isa(o, "TimeRange");
  }
}

/**
 *
 *         <p> Information about a listener. The listener contains the path used to route traffic
 *             that is received from the load balancer to a target group. </p>
 *
 */
export interface TrafficRoute {
  __type?: "TrafficRoute";
  /**
   *
   *         <p> The ARN of one listener. The listener identifies the route between a target group and
   *             a load balancer. This is an array of strings with a maximum size of one. </p>
   *
   */
  listenerArns?: Array<string>;
}

export namespace TrafficRoute {
  export function isa(o: any): o is TrafficRoute {
    return _smithy.isa(o, "TrafficRoute");
  }
}

/**
 *
 *         <p>The configuration that specifies how traffic is shifted from one version of a Lambda
 *             function to another version during an AWS Lambda deployment.</p>
 *
 */
export interface TrafficRoutingConfig {
  __type?: "TrafficRoutingConfig";
  /**
   *
   *         <p>A configuration that shifts traffic from one version of a Lambda function to another
   *             in two increments. The original and target Lambda function versions are specified in the
   *             deployment's AppSpec file.</p>
   *
   */
  timeBasedCanary?: TimeBasedCanary;

  /**
   *
   *         <p>A configuration that shifts traffic from one version of a Lambda function to another
   *             in equal increments, with an equal number of minutes between each increment. The
   *             original and target Lambda function versions are specified in the deployment's AppSpec
   *             file.</p>
   *
   */
  timeBasedLinear?: TimeBasedLinear;

  /**
   *
   *         <p>The type of traffic shifting (<code>TimeBasedCanary</code> or
   *                 <code>TimeBasedLinear</code>) used by a deployment configuration .</p>
   *
   */
  type?: TrafficRoutingType | string;
}

export namespace TrafficRoutingConfig {
  export function isa(o: any): o is TrafficRoutingConfig {
    return _smithy.isa(o, "TrafficRoutingConfig");
  }
}

export enum TrafficRoutingType {
  AllAtOnce = "AllAtOnce",
  TimeBasedCanary = "TimeBasedCanary",
  TimeBasedLinear = "TimeBasedLinear"
}

/**
 *
 *         <p>Information about notification triggers for the deployment group.</p>
 *
 */
export interface TriggerConfig {
  __type?: "TriggerConfig";
  /**
   *
   *         <p>The event type or types for which notifications are triggered.</p>
   *
   */
  triggerEvents?: Array<TriggerEventType | string>;

  /**
   *
   *         <p>The name of the notification trigger.</p>
   *
   */
  triggerName?: string;

  /**
   *
   *         <p>The ARN of the Amazon Simple Notification Service topic through which notifications
   *             about deployment or instance events are sent.</p>
   *
   */
  triggerTargetArn?: string;
}

export namespace TriggerConfig {
  export function isa(o: any): o is TriggerConfig {
    return _smithy.isa(o, "TriggerConfig");
  }
}

export enum TriggerEventType {
  DEPLOYMENT_FAILURE = "DeploymentFailure",
  DEPLOYMENT_READY = "DeploymentReady",
  DEPLOYMENT_ROLLBACK = "DeploymentRollback",
  DEPLOYMENT_START = "DeploymentStart",
  DEPLOYMENT_STOP = "DeploymentStop",
  DEPLOYMENT_SUCCESS = "DeploymentSuccess",
  INSTANCE_FAILURE = "InstanceFailure",
  INSTANCE_READY = "InstanceReady",
  INSTANCE_START = "InstanceStart",
  INSTANCE_SUCCESS = "InstanceSuccess"
}

/**
 *
 *         <p>The maximum allowed number of triggers was exceeded.</p>
 *
 */
export interface TriggerTargetsLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TriggerTargetsLimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace TriggerTargetsLimitExceededException {
  export function isa(o: any): o is TriggerTargetsLimitExceededException {
    return _smithy.isa(o, "TriggerTargetsLimitExceededException");
  }
}

/**
 *
 *         <p>A call was submitted that is not supported for the specified deployment type.</p>
 *
 */
export interface UnsupportedActionForDeploymentTypeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedActionForDeploymentTypeException";
  $fault: "client";
  /**
   *
   *         <p>The message that corresponds to the exception thrown by AWS CodeDeploy.</p>
   *
   */
  message?: string;
}

export namespace UnsupportedActionForDeploymentTypeException {
  export function isa(
    o: any
  ): o is UnsupportedActionForDeploymentTypeException {
    return _smithy.isa(o, "UnsupportedActionForDeploymentTypeException");
  }
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   *
   *         <p>
   *             The ARN that specifies from which resource to disassociate the tags with the keys in the <code>TagKeys</code> input paramter.
   *         </p>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   *         <p>
   *             A list of keys of <code>Tag</code> objects. The <code>Tag</code> objects identified by the keys are disassociated from the resource
   *             specified by the <code>ResourceArn</code> input parameter.
   *         </p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceInput {
  export function isa(o: any): o is UntagResourceInput {
    return _smithy.isa(o, "UntagResourceInput");
  }
}

export interface UntagResourceOutput extends $MetadataBearer {
  __type?: "UntagResourceOutput";
}

export namespace UntagResourceOutput {
  export function isa(o: any): o is UntagResourceOutput {
    return _smithy.isa(o, "UntagResourceOutput");
  }
}

/**
 *
 *         <p>Represents the input of an UpdateApplication operation.</p>
 *
 */
export interface UpdateApplicationInput {
  __type?: "UpdateApplicationInput";
  /**
   *
   *         <p>The current name of the application you want to change.</p>
   *
   */
  applicationName?: string;

  /**
   *
   *         <p>The new name to give the application.</p>
   *
   */
  newApplicationName?: string;
}

export namespace UpdateApplicationInput {
  export function isa(o: any): o is UpdateApplicationInput {
    return _smithy.isa(o, "UpdateApplicationInput");
  }
}

/**
 *
 *         <p>Represents the input of an UpdateDeploymentGroup operation.</p>
 *
 */
export interface UpdateDeploymentGroupInput {
  __type?: "UpdateDeploymentGroupInput";
  /**
   *
   *         <p>Information to add or change about Amazon CloudWatch alarms when the deployment group
   *             is updated.</p>
   *
   */
  alarmConfiguration?: AlarmConfiguration;

  /**
   *
   *         <p>The application name that corresponds to the deployment group to update.</p>
   *
   */
  applicationName: string | undefined;

  /**
   *
   *         <p>Information for an automatic rollback configuration that is added or changed when a
   *             deployment group is updated.</p>
   *
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   *
   *         <p>The replacement list of Auto Scaling groups to be included in the deployment group, if
   *             you want to change them. To keep the Auto Scaling groups, enter their names. To remove
   *             Auto Scaling groups, do not enter any Auto Scaling group names.</p>
   *
   */
  autoScalingGroups?: Array<string>;

  /**
   *
   *         <p>Information about blue/green deployment options for a deployment group.</p>
   *
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   *
   *         <p>The current name of the deployment group.</p>
   *
   */
  currentDeploymentGroupName: string | undefined;

  /**
   *
   *         <p>The replacement deployment configuration name to use, if you want to change it.</p>
   *
   */
  deploymentConfigName?: string;

  /**
   *
   *         <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   *
   */
  deploymentStyle?: DeploymentStyle;

  /**
   *
   *         <p>The replacement set of Amazon EC2 tags on which to filter, if you want to change them.
   *             To keep the existing tags, enter their names. To remove tags, do not enter any tag
   *             names.</p>
   *
   */
  ec2TagFilters?: Array<EC2TagFilter>;

  /**
   *
   *         <p>Information about groups of tags applied to on-premises instances. The deployment
   *             group includes only EC2 instances identified by all the tag groups.</p>
   *
   */
  ec2TagSet?: EC2TagSet;

  /**
   *
   *         <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service
   *             is specified as an Amazon ECS cluster and service name pair using the format
   *             <code><clustername>:<servicename></code>. </p>
   *
   */
  ecsServices?: Array<ECSService>;

  /**
   *
   *         <p>Information about the load balancer used in a deployment.</p>
   *
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   *
   *         <p>The new name of the deployment group, if you want to change it.</p>
   *
   */
  newDeploymentGroupName?: string;

  /**
   *
   *         <p>The replacement set of on-premises instance tags on which to filter, if you want to
   *             change them. To keep the existing tags, enter their names. To remove tags, do not enter
   *             any tag names.</p>
   *
   */
  onPremisesInstanceTagFilters?: Array<TagFilter>;

  /**
   *
   *         <p>Information about an on-premises instance tag set. The deployment group includes only
   *             on-premises instances identified by all the tag groups.</p>
   *
   */
  onPremisesTagSet?: OnPremisesTagSet;

  /**
   *
   *         <p>A replacement ARN for the service role, if you want to change it.</p>
   *
   */
  serviceRoleArn?: string;

  /**
   *
   *         <p>Information about triggers to change when the deployment group is updated. For
   *             examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html">Modify Triggers in an AWS
   *                 CodeDeploy Deployment Group</a> in the AWS CodeDeploy User Guide.</p>
   *
   */
  triggerConfigurations?: Array<TriggerConfig>;
}

export namespace UpdateDeploymentGroupInput {
  export function isa(o: any): o is UpdateDeploymentGroupInput {
    return _smithy.isa(o, "UpdateDeploymentGroupInput");
  }
}

/**
 *
 *         <p>Represents the output of an UpdateDeploymentGroup operation.</p>
 *
 */
export interface UpdateDeploymentGroupOutput extends $MetadataBearer {
  __type?: "UpdateDeploymentGroupOutput";
  /**
   *
   *         <p>If the output contains no data, and the corresponding deployment group contained at
   *             least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto
   *             Scaling lifecycle event hooks from the AWS account. If the output contains data, AWS
   *             CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the AWS
   *             account.</p>
   *
   */
  hooksNotCleanedUp?: Array<AutoScalingGroup>;
}

export namespace UpdateDeploymentGroupOutput {
  export function isa(o: any): o is UpdateDeploymentGroupOutput {
    return _smithy.isa(o, "UpdateDeploymentGroupOutput");
  }
}