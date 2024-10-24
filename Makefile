install:
	npm install

gendiff:
	node ./bin/index.js src/file1.json src/file2.json

lint:
	npx eslint .