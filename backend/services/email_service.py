import boto3
import os
from typing import Dict, Any

class EmailService:
    def __init__(self):
        self.client = boto3.client(
            'ses',
            aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
            region_name=os.getenv('AWS_REGION', 'us-east-1')
        )

    def send_email(self, sender: str, recipient: str, subject: str, body_text: str) -> Dict[str, Any]:
        try:
            response = self.client.send_email(
                Source=os.getenv('EMAIL_SENDER'),
                Destination={"ToAddresses": [recipient]},
                Message={
                    "Subject": {"Data": subject},
                    "Body": {"Text": {"Data": body_text}}
                },
                ReplyToAddresses=[sender]
            )
            return {"status": "success", "response": response}
        except Exception as e:
            return {"status": "error", "message": str(e)}
