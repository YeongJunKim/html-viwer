build_docker:
	docker build --progress=plain -t html:0.0.1 .

html_server:
	cd server && python server.py -d ./data

html_client:
	cd ./client && npm start