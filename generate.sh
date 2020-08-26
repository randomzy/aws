#!/bin/bash
DOWNLOAD_FOLDER=${HOME}

video_id=$(echo ${1} | grep -E "[A-Za-z0-9\-]{11}" )

if [ -z ${video_id} ]; then
    echo "Invalid input. Input is youtube video id"
    exit 1
fi

cd ${DOWNLOAD_FOLDER}
if [ ! -f "${video_id}.ogg" ]; then
    youtube-dl -o "${video_id}.%(ext)s" -f "bestaudio[ext=m4a]" ${video_id}
    ffmpeg -i "${video_id}.m4a" -acodec libvorbis -aq 4 -vn -ac 2 -map_metadata 0 "${video_id}.ogg"
    rm 
fi
sonic-annotator -d vamp:nnls-chroma:chordino:simplechord ${video_id}.ogg -w lab