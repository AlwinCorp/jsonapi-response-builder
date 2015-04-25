# jsonapi-response-builder
Response builder for NodeJS based on http://jsonapi.org/ recommendations

The projet proposes an implementation of the JSON API recommendation.
As the recommendation is an on-going project, this plugin will probably change in order to respect the new specifications.

## Installation

In order to install that module, open a terminal, go to your npm project and run the following command:

    npm install jsonapi-response-builder --save

You can also run that command with the -g option to save it globally and re-use it later.

## How to use it

As any NodeJS module, you can load it with the require() function.

    var ResponseBuilder = require('jsonapi-response-builder');

Then, you can use it to build your anwsers.

    var response = new ResponseBuilder.Response();
    console.log(response.getResponse());

## Contributing

This project is my first contribution to the NPM community and i hope that you will find it usefull. Please, feel free to suggest, contribute, fork the project in order to make it better!

## License

The MIT License (MIT)

Copyright (c) 2015 AlwinCorp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Changelog

### Coming next
- Validation format (checking requirements)

### v0.0.3
- Adding the Error management
- Few adjustements

### v0.0.2
- Fixes

### v0.0.1
- First version
- Introducing basic implementation