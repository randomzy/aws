#!/usr/bin/env python3

import sys
import os
import subprocess
from urllib.parse import urlparse

download_folder = '../temp'
audio_format = 'mp3'

def getSongId(youtubeURL):
    o = urlparse(youtubeURL)
    if o.netloc == 'youtu.be':
        return o.path[1:]
    elif o.netloc in ('www.youtube.com', 'youtube.com'):
        if o.path == '/watch':
            id_index = o.query.index('v=')
            return o.query[id_index+2:id_index+13]
        elif o.path[:7] == '/embed/':
            return o.path.split('/')[2]
        elif o.path[:3] == '/v/':
            return o.path.split('/')[2]
    return None

def processSong(youtubeURL):
    songId = getSongId(youtubeURL)
    if songId is None:
        print(f'[ERROR] Invalid song URL {youtubeURL}')
        exit(1)
    if not os.path.exists(f'{download_folder}/{songId}.{audio_format}'):
        download_command = f'youtube-dl -o {download_folder}/{songId}.%(ext)s --extract-audio --audio-format {audio_format} {songId}' #
        subprocess.call(download_command.split(),shell=False)
    sonic_command = f'sonic-annotator -d vamp:nnls-chroma:chordino:simplechord {download_folder}/{songId}.{audio_format} -w csv'
    subprocess.call(sonic_command.split(),shell=False)
    
def processPlaylist(youtubeURL):
    pass

def main(argv):
    if len(argv) != 1:
        print('[ERROR] Program takes a single argument youtube video URL')
        exit(1)
    if not os.path.exists(download_folder):
        os.mkdir(download_folder)
    processSong(argv[0])

main(sys.argv[1:])