#!/bin/bash

mkdir ~/downloads
cd ~/downloads

#install youtube-dl
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

#install sonic annotator
sudo wget https://code.soundsoftware.ac.uk/attachments/download/2708/sonic-annotator-1.6-linux64-static.tar.gz
tar -xvf sonic-annotator-1.6-linux64-static.tar.gz
cd sonic-annotator-1.6-linux64-static
sudo chmod a+rx sonic-annotator
sudo cp ./sonic-annotator /usr/local/bin
cd ~-

PLUGIN_DIR=/usr/local/lib/vamp
sudo mkdir --parent ${PLUGIN_DIR}

#install plugins
sudo wget https://code.soundsoftware.ac.uk/attachments/download/1693/nnls-chroma-linux64-v1.1.tar.bz2
tar -xvf nnls-chroma-linux64-v1.1.tar.bz2
cd nnls-chroma-linux64-v1.1
sudo chmod a+r *
sudo cp *.so ${PLUGIN_DIR}
sudo cp *.cat ${PLUGIN_DIR}
sudo cp *.n3 ${PLUGIN_DIR}
cd ~-

sudo wget https://code.soundsoftware.ac.uk/attachments/download/915/beatroot-vamp-v1.0-linux64.tar.gz
tar -xvf beatroot-vamp-v1.0-linux64.tar.gz
cd beatroot-vamp-v1.0-linux64
sudo chmod a+r *
sudo cp *.so ${PLUGIN_DIR}
sudo cp *.cat ${PLUGIN_DIR}
sudo cp *.n3 ${PLUGIN_DIR}