from flask import Flask, request, jsonify
from services.email_service import EmailService

# Initialize Flask app
app = Flask(__name__)

# Initialize EmailService (can be extended for different cloud providers)
email_service = EmailService()

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

# Email sending endpoint
@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    if not data or 'sender' not in data or 'recipient' not in data:
        return jsonify({"error": "Missing required fields"}), 400

    # Extract email details from the request body
    sender = data['sender']
    recipient = data['recipient']
    subject = data.get('subject', 'No Subject')
    body_text = data.get('body', '')

    # Use the EmailService to send the email
    response = email_service.send_email(sender, recipient, subject, body_text)

    if response['status'] == 'success':
        return jsonify({"message": "Email sent successfully"}), 200
    else:
        return jsonify({"error": response['message']}), 500

# Run the app in development mode (adjust for production deployment)
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
