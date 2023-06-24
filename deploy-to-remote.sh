#!/bin/bash
#assuming this script is in app root folder
cd ..
rsync -rauv --exclude 'node_modules' --exclude '.next' ./jpegated/* ubuntu@jpegated.arkt.me:/var/https/jpegated/
cd jpegated
