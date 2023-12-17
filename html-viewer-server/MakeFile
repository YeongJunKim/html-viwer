dev:
	pip install -e .
	pre-commit install

server:
	conda activate html
	python server.py

build_docker:
	docker build --progress=plain -t html:0.0.1 .