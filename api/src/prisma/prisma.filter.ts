import {Prisma} from "database";
import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";
import prismaErrors from "./prisma-errors";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const error = prismaErrors[exception.code] || prismaErrors.default

    response
      //@ts-ignore
      .status(error[1])
      .json({
        statusCode: error[1],
        message: error[0],
      });
  }
}