# Smart Perfume Recommender

A simple web application that recommends perfumes based on what the user types — using natural language matching and a JSON database. Built with **Flask (Python)** for the backend and **HTML/CSS/JS** for the frontend.

---

##  Features

- 🔎 User types their perfume preferences (e.g. “sweet vanilla for night”)
- 💡 App recommends the best matching perfume
- 🧠 Uses TF-IDF and cosine similarity to find the closest description
- 🖼️ Product images, descriptions, and prices displayed beautifully

---

## Tech Stack

- **Backend:** Flask, Python
- **Frontend:** HTML, CSS, JavaScript
- **ML logic:** scikit-learn (TF-IDF, cosine similarity)
- **Data:** `data.json` (custom perfume database)

---

## 📁 File Structure
perfume-recommender/
├── app.py # Flask backend
├── data.json # Product data (descriptions, images, prices)
├── index.html # Frontend UI
├── script.js # Frontend logic
├── style.css # Stylesheet
└── README.md # This file


---

## 📦 Setup Instructions

### 🔧 1. Clone the project

```bash
git clone https://github.com/your-username/perfume-recommender.git
cd perfume-recommender

```
### 2. Set up Python environment


Make sure you have Python 3 installed. Then install Flask and scikit-learn:

```bash
pip install flask flask-cors scikit-learn
```

▶️ 3. Run the backend

```bash
python app.py
```

### 🌐 4. Open the frontend

Just double-click index.html to open in your browser


## How It Works


User enters a sentence like: I want something fruity and fresh

Backend compares input against all perfume descriptions using TF-IDF

The most similar description is selected and returned as a recommendation

Frontend displays the name, image, description, and price


#### Note: The app uses a simple JSON database (`data.json`) with perfume details. You can easily add more products by editing this file.

### Author
Ahmed Refaat
[github.com/ARefaat1](https://github.com/ARefaat1)


#   P e r f u m e - R e c o m m e n d e r  
 