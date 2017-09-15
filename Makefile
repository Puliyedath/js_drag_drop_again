# Project with npm and make file
output_dir = public
plugins = "-t babelify"

# Prints all the js files that have changed
${output_dir}/bundle.js: ${shell find src/ -type f -name '*.js'} entry.js
	@echo "[$@] creating bundle.js |> start"
	@browserify -e entry.js   -d  -o $@ -t [ babelify --comments false]
	@echo "[$@] creating bundle.js |> done"


#one task for css

#one task for html templates to be spit out

build:
	make public/bundle.js

watch:
	@superstatic ./public &
	while true; do make build ; inotifywait -qre close_write . ; done

npm_build: package.json
	@npm install

