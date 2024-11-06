# Upload file and send an email example
In this repository is a basic example of how to: 
- Create an email template with variable values
- Upload a file
- Send an email after a file has been uploaded

# Requirements
- Install and set up the Node.js and the Extra Horizon CLI as defined in the [documentation](https://docs.extrahorizon.com/cli/readme/installation).

# Set up
- Run `npm i` to install the required dependencies from the `package.json`
- Create a copy of the `.example.env` file, rename it to `.env` and fill in the `.env` file with your credentials.

## Synchonize email templates
- Run the command `exh sync --templates`, this will synchroize the templates in the `/templates` folder. Please read the [documentation](https://docs.extrahorizon.com/cli/readme/installation) for further information.
- Run the command `exh templates list`, this will show you a list in your terminal of templates created in your Extra Horizon environment. Please refer to the [documentation](https://docs.extrahorizon.com/cli/commands/templates#listing-templates). for futher information

## Execution
- Excecute the command `node uploadFileandSendEmail.js` and this will run the script to upload a file to your Extra Horizon environment and send an email to the email specified in the environment variables.