#!/bin/bash
./build.sh
if [[ $(git diff --shortstat 2> /dev/null | tail -n1) != "" ]]; then
    git status
    echo "---------------------------------------------------------"
    echo "You need to commit all changes first"
    echo "---------------------------------------------------------"
    exit 1
fi
git subtree split --prefix slides/www/ -b gh-pages && git push origin gh-pages:gh-pages && git branch -D gh-pages
if [[ $? -ne 0 ]]; then
    echo "hmm, there was an error"
    exit 1;
fi
open "https://kumar303.github.io/web-ext-workshop/"
