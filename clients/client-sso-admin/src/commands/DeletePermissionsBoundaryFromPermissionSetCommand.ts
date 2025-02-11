// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeletePermissionsBoundaryFromPermissionSetRequest,
  DeletePermissionsBoundaryFromPermissionSetRequestFilterSensitiveLog,
  DeletePermissionsBoundaryFromPermissionSetResponse,
  DeletePermissionsBoundaryFromPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand,
  serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface DeletePermissionsBoundaryFromPermissionSetCommandInput
  extends DeletePermissionsBoundaryFromPermissionSetRequest {}
export interface DeletePermissionsBoundaryFromPermissionSetCommandOutput
  extends DeletePermissionsBoundaryFromPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the permissions boundary from a specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeletePermissionsBoundaryFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeletePermissionsBoundaryFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeletePermissionsBoundaryFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePermissionsBoundaryFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionsBoundaryFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class DeletePermissionsBoundaryFromPermissionSetCommand extends $Command<
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePermissionsBoundaryFromPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeletePermissionsBoundaryFromPermissionSetCommandInput,
    DeletePermissionsBoundaryFromPermissionSetCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeletePermissionsBoundaryFromPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePermissionsBoundaryFromPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeletePermissionsBoundaryFromPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> {
    return deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
