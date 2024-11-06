from requests_oauthlib import OAuth1Session

# pip3 install requests_oauthlib
# python3 uploadFileAndSendEmail.py

o_auth1_client = OAuth1Session(
  client_key="YOUR_CONSUMER_KEY",
  client_secret="YOUR_CONSUMER_SECRET",
  resource_owner_key="YOUR_TOKEN",
  resource_owner_secret="YOUR_TOKEN_SECRET"
)

# Ensure the URL is using the correct Extra Horizon URL for the environment you are testing: api.dev.xxx or api.stage.xxx
# The template_id is the id of the template you want to use this can be retrieved via `exh templates list` as described in the README.md
# The variables set for first_name, file_name and file_creator_id are placeholders for the actual values
result = o_auth1_client.post(
  'https:///api.your_environment.your_cluster.extrahorizon.io/mail/v1',
  json={
    "template_id": "672b3397de25814a5439836e",
    "recipients": {
      "to": ["example@example.com"]
    },
    "content": {
      "first_name": 'PYTHON_VALUE',
      "file_name": "Random_file_name.json",
      "file_creator_id": "Random_creator_id",
    }
  }
)

print("Response", result.json())