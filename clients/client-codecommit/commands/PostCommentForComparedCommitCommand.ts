import {
  CodeCommitClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeCommitClient";
import {
  PostCommentForComparedCommitInput,
  PostCommentForComparedCommitOutput
} from "../models/index";
import {
  deserializeAws_json1_1PostCommentForComparedCommitCommand,
  serializeAws_json1_1PostCommentForComparedCommitCommand
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

export type PostCommentForComparedCommitCommandInput = PostCommentForComparedCommitInput;
export type PostCommentForComparedCommitCommandOutput = PostCommentForComparedCommitOutput;

export class PostCommentForComparedCommitCommand extends $Command<
  PostCommentForComparedCommitCommandInput,
  PostCommentForComparedCommitCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostCommentForComparedCommitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PostCommentForComparedCommitCommandInput,
    PostCommentForComparedCommitCommandOutput
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
    input: PostCommentForComparedCommitCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PostCommentForComparedCommitCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PostCommentForComparedCommitCommandOutput> {
    return deserializeAws_json1_1PostCommentForComparedCommitCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}