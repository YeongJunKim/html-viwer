build_docker:
	docker build --progress=plain -t html:0.0.1 .

html_server:
	python server/server.py -d ./server/data

html_client:
	cd ./client && npm start