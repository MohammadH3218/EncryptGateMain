from flask import Flask, request, jsonify
from services.email_service import EmailService

app = Flask(__name__)
email_service = EmailService()

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        sender = data.get('sender')
        recipient = data.get('recipient')
        subject = data.get('subject')
        body = data.get('body')

        if not all([sender, recipient, subject, body]):
            return jsonify({"status": "error", "message": "Missing required fields"}), 400

        response = email_service.send_email(sender, recipient, subject, body)
        if response['status'] == 'success':
            return jsonify({"status": "success", "message": "Email sent successfully"})
        else:
            return jsonify({"status": "error", "message": response.get('message')}), 500

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
