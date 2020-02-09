import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  DescribeNetworkInterfacesRequest,
  DescribeNetworkInterfacesResult
} from "../models/index";
import {
  deserializeAws_ec2DescribeNetworkInterfacesCommand,
  serializeAws_ec2DescribeNetworkInterfacesCommand
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeNetworkInterfacesCommandInput = DescribeNetworkInterfacesRequest;
export type DescribeNetworkInterfacesCommandOutput = DescribeNetworkInterfacesResult;

export class DescribeNetworkInterfacesCommand extends $Command<
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNetworkInterfacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeNetworkInterfacesCommandInput,
    DescribeNetworkInterfacesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNetworkInterfacesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeNetworkInterfacesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeNetworkInterfacesCommandOutput> {
    return deserializeAws_ec2DescribeNetworkInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}