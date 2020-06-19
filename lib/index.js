'use strict';

const { ServerClient } = require('postmark');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    if (!providerOptions.apiKey) {
      throw new Error('Missing apiKey in strapi-provider-email-postmark');
    }

    const client = new ServerClient(providerOptions.apiKey);

    return {
      send: async options => {
        client.sendEmail({
          From: options.from || settings.defaultFrom,
          To: options.to || settings.defaultTo,
          Cc: options.cc,
          Bcc: options.bcc,
          ReplyTo: options.replyTo || settings.defaultReplyTo,
          Subject: options.subject,
          TextBody: options.text,
          HtmlBody: options.html,
          Headers: options.headers,
          Attachments: options.attachments,
          Metadata: options.metadata,
          Tag: options.tag,
          TrackOpens: options.trackOpens,
          TrackLinks: options.trackLinks,
          TemplateId: options.templateId,
          TemplateAlias: options.templateAlias,
          TemplateModel: options.templateModel,
        });
      },
    };
  },
};
