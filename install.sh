#!/bin/bash

mkdir ~/downloads
cd ~/downloads

#install youtube-dl
sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

#install sonic annotator
sudo wget https://code.soundsoftware.ac.uk/attachments/download/2708/sonic-annotator-1.6-linux64-static.tar.gz
tar -xf sonic-annotator-1.6-linux64-static.tar.gz
cd sonic-annotator-1.6-linux64-static
mkdir --parents 
mv /usr/local/bin/sonic-annotator
cd ~-

#install plugins
sudo wget 

cd /usr/local/bin

cd ~-