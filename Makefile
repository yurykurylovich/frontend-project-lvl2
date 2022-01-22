# usage
start: install
setup: dependency install
dependency:
	npm ci
install:
	npm link

# dev
lint:
	npx eslint .
test:
	npm test -s
test_dev:
	npm test -s -- --watchAll
test_coverage:
	npm test -s -- --coverage --coverageProvider=v8
