# WebExtension workshop

This is the source of materials for
[Hack and Remix the Web with WebExtensions](https://app.mozillafestival.org/#_session-409),
a workshop at MozFest 2016.

View the slides: https://kumar303.github.io/web-ext-workshop/

# Note to self

To build the slides, create a [virtualenv](https://pypi.python.org/pypi/virtualenv)
and install some dependencies:

    pip install -r ./slides/requirements.txt

Then run this script:

    ./slides/build.sh

Open `./slides/www/index.html` in your favorite web browser.

Deploy the slides to Github Pages:

    ./slides/deploy.sh
