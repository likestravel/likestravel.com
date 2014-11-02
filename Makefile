deps:
	sudo gem install sass
	sudo gem install susy
	npm install
	bower install

serve:
	hugo server -D -w -t mr-velvet
