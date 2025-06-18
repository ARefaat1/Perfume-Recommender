from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# initialize the Flask object
app = Flask(__name__) 
CORS(app)

# Define a simple route
@app.route('/')
def home():
    return "Smart Perfume Recommendations Backend is running!"

@app.route("/recommend", methods=["POST"])
def recommend():
    """
    Recommends the most suitable product based on user preferences.

    Expects:
        JSON payload with a "preferences" field containing user input text.

    Returns:
        JSON object representing the best matching product.
    """
    with open("backend/data.json", "r") as f:
        products = json.load(f)

    user_input = request.json.get("preferences", "")
    descriptions = [p["description"] for p in products]

    vectorizer = TfidfVectorizer().fit_transform([user_input] + descriptions)
    similarities = cosine_similarity(vectorizer[0:1], vectorizer[1:])

    best_match_index = similarities[0].argmax()
    best_product = products[best_match_index]

    return jsonify(best_product)

if __name__ == '__main__':
    app.run(debug=True)

