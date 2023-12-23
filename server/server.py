from flask import Flask, jsonify, send_file
from flask_cors import CORS
import os
import argparse
from glob import glob
from pathlib import Path

app = Flask(__name__)
CORS(app)


@app.route("/file_list")
def get_file_list():
    try:
        files = glob(f"{app.config['LOCAL_DIRECTORY']}/*.html")
        names = []
        for f in files:
            names.append(Path(f).name)
        return jsonify({"files": names})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/read_file/<filename>")
def read_file(filename):
    try:
        file_path = os.path.join(app.config["LOCAL_DIRECTORY"], filename)
        return send_file(file_path)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="html viewer server", description="desc.")
    parser.add_argument("-p", "--port", default="3001")
    parser.add_argument(
        "-d", "--dir", default="./data/add-curved-parent-artery-0fd1cf1"
    )
    args = parser.parse_args()

    app.config["LOCAL_DIRECTORY"] = args.dir
    app.run(debug=True, port=args.port)
