# WebExtension workshop

This is the source of materials for
[Hack and Remix the Web with Web Extensions](https://app.mozillafestival.org/#_session-409),
a workshop at MozFest 2016.

View the slides: https://kumar303.github.io/web-ext-workshop/

# Note to self

To build the slides, create a [virtualenv](https://pypi.python.org/pypi/virtualenv)
and install some dependencies:

    pip install -r requirements.txt

Then run this script:

    ./build.sh

Open `www/index.html` in your favorite web browser.

Deploy the slides to Github Pages:

    ./deploy.sh
