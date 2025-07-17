from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample NFT data
nfts = [
    {"id": 1, "title": "Galaxy Art", "price": 2.5, "owner": "Alice"},
    {"id": 2, "title": "Cyber Lion", "price": 3.1, "owner": "Bob"},
    {"id": 3, "title": "Neon Skull", "price": 1.8, "owner": "Charlie"}
]

# Dummy user database for login and register
users_db = {
    "Priyanshu@gmail.com": "Sharma@2621",
    "alice@example.com": "alice123",
}

@app.route("/api/nfts", methods=["GET"])
def get_nfts():
    return jsonify(nfts)

@app.route("/api/nft/<int:nft_id>", methods=["GET"])
def get_single_nft(nft_id):
    nft = next((item for item in nfts if item["id"] == nft_id), None)
    if nft:
        return jsonify(nft)
    else:
        return jsonify({"error": "NFT not found"}), 404

@app.route("/api/bid", methods=["POST"])
def place_bid():
    data = request.json
    print("Bid received:", data)
    return jsonify({"message": "Bid placed successfully!"})

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if email in users_db and users_db[email] == password:
        return jsonify({"message": f"Login successful. Welcome {email}!"})
    else:
        return jsonify({"error": "Invalid email or password"}), 401

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if email in users_db:
        return jsonify({"error": "User already exists"}), 409

    # Register user (add to dummy db)
    users_db[email] = password
    return jsonify({"message": "Registration successful", "user": email})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
