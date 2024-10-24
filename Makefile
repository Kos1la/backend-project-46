install:
	npm install

gendiff:
	node ./bin/index.js ./__fixtures__/file1.json ./__fixtures__/file2.json

lint:
	npx eslint .