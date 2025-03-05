import boto3
import os
from typing import Dict, Any

class EmailService:
    def __init__(self):
        self.client = boto3.client(
            'ses',
            aws_access_key_id=os.getenv('ACCESS_KEY_ID'),
            aws_secret_access_key=os.getenv('SECRET_ACCESS_KEY'),
            region_name=os.getenv('REGION', 'us-east-1')
        )

    def send_email(self, sender: str, recipient: str, subject: str, body_text: str) -> Dict[str, Any]:
        """
        Sends an email using AWS SES.

        Args:
            sender (str): Email address of the sender.
            recipient (str): Email address of the recipient.
            subject (str): Subject of the email.
            body_text (str): Body text of the email.

        Returns:
            Dict[str, Any]: A dictionary with the status and response message.
        """
        try:
            response = self.client.send_email(
                Source=os.getenv('EMAIL_SENDER', sender),
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
