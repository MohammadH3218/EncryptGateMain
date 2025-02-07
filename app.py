from flask import Flask, request, jsonify
from flask_cors import CORS
from services.email_service import EmailService

app = Flask(__name__)
CORS(app)

# Initialize email service
email_service = EmailService()

# Health check route
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

# Email sending route
@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        sender = data.get('sender')
        recipient = data.get('recipient')
        subject = data.get('subject')
        body = data.get('body')

        if not all([sender, recipient, subject, body]):
            return jsonify({"error": "All fields (sender, recipient, subject, body) are required"}), 400

        response = email_service.send_email(sender, recipient, subject, body)
        if response.get("status") != "success":
            return jsonify({"error": "Failed to send email"}), 500

        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 
