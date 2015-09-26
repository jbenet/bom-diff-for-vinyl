test: node_modules
	./vmv.js
	shasum src/test.num
	shasum dst/test.num
	diff -r src dst

node_modules:
	npm install
	touch node_modules
