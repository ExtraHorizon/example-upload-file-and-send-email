import { init } from './init.js';

async function uploadFileAndSendEmail() {
  const exh = await init();

  try {
    // https://docs.extrahorizon.com/javascript-sdk/features/files
    const fileName = 'file-to-upload.json';
    const file = await exh.files.create(fileName, 'file-to-upload');

    // https://docs.extrahorizon.com/extrahorizon/use-cases/medical-device-tutorial/build-your-first-prototype/configure-your-workflows/workflow-3-send-an-e-mail#update-your-function-to-trigger-an-email
    const template = await exh.templates.findByName('file-uploaded');
    if (!template) throw new Error('Template not found');

    await exh.mails.send({
      templateId: template.id,
      recipients: { to: [process.env.RECIPIENT_EMAIL] },
      content: {
        first_name: 'YOU_CHOOSE_THIS_VALUE',
        file_name: file.name,
        file_creator_id: file.creatorId,
      }
    });
  }
  catch (error) {
    console.error(error);
  }
}

void uploadFileAndSendEmail();
