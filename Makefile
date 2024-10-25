install:
	npm install

gendiff:
	node ./bin/index.js ./__fixtures__/file1.json ./__fixtures__/file2.json

gendiffYml:
	node ./bin/index.js ./__fixtures__/file1.yml ./__fixtures__/file2.yml

lint:
	npx eslint .