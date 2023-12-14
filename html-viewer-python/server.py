directory = "./data/add-curved-parent-artery-0fd1cf1"
from flask import Flask, jsonify, send_file
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# 로컬 디렉토리 경로 설정
port = 3001
local_directory = "./data/add-curved-parent-artery-0fd1cf1"
# 파일 목록을 반환하는 엔드포인트
@app.route('/file_list')
def get_file_list():
    try:
        # 지정된 디렉토리에서 파일 목록 가져오기
        files = os.listdir(local_directory)
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
        file_path = os.path.join(local_directory, filename)
        return send_file(file_path)
    except Exception as e:
        # 오류가 발생한 경우 에러 메시지를 JSON 형식으로 응답
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    # 서버를 로컬호스트의 3001번 포트로 실행
    app.run(debug=True, port=port)