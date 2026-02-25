from flask import Flask, request, jsonify
from flask_cors import CORS
from game_model import (
    get_all_games,
    create_game,
    delete_game,
    update_game
)

app = Flask(__name__)
CORS(app)

@app.route('/games', methods=['GET'])
def get_games():
    games = get_all_games()
    return jsonify(games)

@app.route('/games', methods=['POST'])
def add_game():
    data = request.json
    result = create_game(data)
    return jsonify(result)

@app.route('/games/<id>', methods=['DELETE'])
def remove_game(id):
    result = delete_game(id)
    return jsonify(result)

@app.route('/games/<id>', methods=['PUT'])
def edit_game(id):
    data = request.json
    result = update_game(id, data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
