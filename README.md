# strapi-provider-email-sendgrid

## Resources

- [MIT License](LICENSE.md)

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Prerequisites

You need to have the plugin `strapi-plugin-email` installed in you Strapi project.

## Installation

```bash
# using yarn
yarn add strapi-provider-email-postmark

# using npm
npm install strapi-provider-email-postmark --save
```

## Configuration

| Variable                | Type                    | Description                                                                                                             | Required | Default   |
| ----------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string                  | The name of the provider you use                                                                                        | yes      |           |
| providerOptions         | object                  | Provider options                                                                                                        | yes      |           |
| providerOptions.apiKey  | object                  | Api key given to the function setApiKey. Please refer to [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail) | yes      |           |
| settings                | object                  | Settings                                                                                                                | no       | {}        |
| settings.defaultFrom    | string                  | Default sender mail address                                                                                             | no       | undefined |
| settings.defaultTo      | string                  | Default receiver mail address                                                                                           | no       | undefined |
| settings.defaultReplyTo | string                  | Default address receiver is asked to reply to                                                                           | no       | undefined |

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'postmark',
    providerOptions: {
      apiKey: env('POSTMARK_API_KEY'),
    },
    settings: {
      defaultFrom: 'from@strapi.io',
      defaultTo: 'to@strapi.io',
      defaultReplyTo: 'reply-to@strapi.io',
    },
  },
  // ...
});
```
