import {
  IoTThingsGraphClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTThingsGraphClient";
import {
  CreateSystemInstanceRequest,
  CreateSystemInstanceResponse
} from "../models/index";
import {
  deserializeAws_json1_1CreateSystemInstanceCommand,
  serializeAws_json1_1CreateSystemInstanceCommand
} from "../protocols/Aws_json1_1";
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

export type CreateSystemInstanceCommandInput = CreateSystemInstanceRequest;
export type CreateSystemInstanceCommandOutput = CreateSystemInstanceResponse;

export class CreateSystemInstanceCommand extends $Command<
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSystemInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateSystemInstanceCommandInput,
    CreateSystemInstanceCommandOutput
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
    input: CreateSystemInstanceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSystemInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateSystemInstanceCommandOutput> {
    return deserializeAws_json1_1CreateSystemInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}