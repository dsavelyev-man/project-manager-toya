import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { readFile } from 'fs/promises';
import * as path from 'path';
import { ERRORS } from 'database';
import hbs from 'handlebars';

type Transporter = ReturnType<typeof createTransport>;

@Injectable()
export class MailService {
  private static TEMPLATES_DIR = path.join(
    __dirname,
    '..',
    'src',
    'mail',
    'templates',
  );

  private transporter: Transporter;
  private templates: {
    [key: string]: ReturnType<typeof hbs.compile>;
  } = {};

  constructor() {
    this.transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT as string),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  async send(data: {
    to: string;
    subject: string;
    text: string;
    template: string;
    templateData: any;
  }) {
    let template: ReturnType<typeof hbs.compile> | undefined =
      this.templates[data.template];

    if (!template) {
      const file = await readFile(MailService.TEMPLATES_DIR + data.template);

      if (!file)
        throw new HttpException(
          ERRORS.TEMPLATE_NOT_FOUND,
          HttpStatus.NOT_FOUND,
        );

      template = hbs.compile(file.toString());
    }

    return await this.transporter.sendMail({
      to: data.to,
      subject: data.subject,
      from: `"Менеджер" <${process.env.MAIL}>`,
      text: data.text,
      html: template(data.templateData),
    });
  }
}
