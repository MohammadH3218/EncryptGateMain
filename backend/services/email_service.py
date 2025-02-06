import boto3
import os
from typing import Dict, Any

class EmailService:
    def __init__(self, cloud_provider: str = "aws", region: str = None):
        """
        Initialize the email service with the specified cloud provider.

        Args:
            cloud_provider (str): The cloud provider (e.g., 'aws', 'azure', 'gcp').
            region (str): The region to use for the cloud services.
        """
        self.cloud_provider = cloud_provider.lower()
        self.region = region or os.getenv('CLOUD_REGION', 'us-east-1')

        # Initialize the appropriate cloud client based on the provider
        if self.cloud_provider == "aws":
            self.client = boto3.client('ses', region_name=self.region)
        else:
            raise NotImplementedError(f"Cloud provider {self.cloud_provider} is not supported yet.")

    def send_email(self, sender: str, recipient: str, subject: str, body_text: str) -> Dict[str, Any]:
        """
        Send an email through the configured cloud service.

        Args:
            sender (str): The email address of the sender.
            recipient (str): The email address of the recipient.
            subject (str): The subject of the email.
            body_text (str): The plain text body of the email.

        Returns:
            Dict[str, Any]: The response from the cloud email service.
        """
        if self.cloud_provider == "aws":
            try:
                response = self.client.send_email(
                    Source=sender,
                    Destination={"ToAddresses": [recipient]},
                    Message={
                        "Subject": {"Data": subject},
                        "Body": {"Text": {"Data": body_text}}
                    }
                )
                return {"status": "success", "response": response}
            except Exception as e:
                return {"status": "error", "message": str(e)}
        else:
            raise NotImplementedError(f"Email sending is not implemented for {self.cloud_provider}.")

    def set_cloud_provider(self, cloud_provider: str):
        """
        Change the cloud provider for this service.

        Args:
            cloud_provider (str): The new cloud provider (e.g., 'aws', 'azure', 'gcp').
        """
        self.cloud_provider = cloud_provider.lower()
        if self.cloud_provider == "aws":
            self.client = boto3.client('ses', region_name=self.region)
        else:
            raise NotImplementedError(f"Cloud provider {self.cloud_provider} is not supported yet.")
