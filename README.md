# js_env_demo
#### Following along Pluralsight: Building a JavaScript Development Enviornment Course
Components
* .editorconfig: settings for ide editor 
* Package Manager: npm
* sharing work in progress: localtunnel, ngrock, now, surge  
	* lets you expose app running from local machine globally 
* Javascript automation: grunt, gulp, npm scripts 
* Transpiling: babel
* Bundling: ES6 modules + webpack
* Sourcemaps. Maps transpiled code back to the original source 
	* generated as part of our build 
* Linting. ESLint
	* enforce consistency
	* avoid mistakes
	* has eslint plugins + presets  
* Testing + Continuous Integration:	
	* Mocha
	* Assertion library: chai
	* Helper library: jsdom, cheerio
	* Test Runners: PhantomJS, JSDOM
* Continuous Integration: TravisCI, Appveyor
* Mock HTTP Calls
	* JSON Schema Faker
	* faker.js, chance.js, randexp.js
* Http Calls:
	* Browser: fetch
	* Node: http, request
	* Node and Browser: Axios
* Error Logging. TrackJS