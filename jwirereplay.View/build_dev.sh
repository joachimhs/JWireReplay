#!/bin/bash

#SproutCore build tools
rm -rf ../jwirereplay.Web/src/main/webapp/static
rm -rf ./tmp
/usr/bin/sc-build --build jwirereplay
cp -R ./tmp/build/static ../jwirereplay.Web/src/main/webapp/static

