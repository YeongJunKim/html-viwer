directory = "./data/add-curved-parent-artery-0fd1cf1"
from flask import Flask, jsonify, send_file
from flask_cors import CORS
import os
import argparse

app = Flask(__name__)
CORS(app)

local_directory = "./data/add-curved-parent-artery-0fd1cf1"
# 파일 목록을 반환하는 엔드포인트
@app.route('/file_list')
def get_file_list():
    try:
        # 지정된 디렉토리에서 파일 목록 가져오기
        files = os.listdir(app.config['LOCAL_DIRECTORY'])
        print(files)
        # 파일 목록을 JSON 형식으로 응답
        return jsonify({'files': files})
    except Exception as e:
        # 오류가 발생한 경우 에러 메시지를 JSON 형식으로 응답
        return jsonify({'error': str(e)}), 500


# 파일 내용을 반환하는 엔드포인트
@app.route('/read_file/<filename>')
def read_file(filename):
    try:
        # 지정된 파일의 내용을 읽어와 응답으로 전송
        file_path = os.path.join(app.config['LOCAL_DIRECTORY'], filename)
        return send_file(file_path)
    except Exception as e:
        # 오류가 발생한 경우 에러 메시지를 JSON 형식으로 응답
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    parser = argparse.ArgumentParser(prog="html viewer server", description="desc.")
    parser.add_argument('-p', '--port', default="3001")
    parser.add_argument('-d', '--dir', default="./data/add-curved-parent-artery-0fd1cf1")
    args = parser.parse_args()
    
    app.config['LOCAL_DIRECTORY'] = args.dir
    app.run(debug=True, port=args.port)