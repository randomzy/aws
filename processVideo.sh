#!/bin/bash
download_dir=${PWD}

video_id=$(echo ${1} | grep -E "[A-Za-z0-9\-\_]{11}" )

if [ -z ${video_id} ]; then
    echo "Invalid input. Input is youtube video id"
    exit 1
fi

lock() {
  path="${1}"
  while true; do
        if mkdir "${path}/lock.d"; then
           break;
        fi
        sleep 0.1
  done
}

unlock() {
  path="${1}"
  rmdir "${path}/lock.d"
}

# cd ${download_dir}

# lock ${download_dir}
if [ ! -f "${video_id}.ogg" ]; then
# --ffmpeg-location /usr/local/bin
    youtube-dl -q --cache-dir ${download_dir} --no-check-certificate -o "${download_dir}/${video_id}.%(ext)s" -f "bestaudio[ext=m4a]" ${video_id}
    ffmpeg -loglevel panic -i "${video_id}.m4a" -acodec libvorbis -aq 4 -vn -ac 2 -map_metadata 0 "${video_id}.ogg"
    rm *.m4a
else
    echo "File ${video_id}.ogg already exists. Skipping downloading and converting"
fi
# unlock ${download_dir}
sonic-annotator -q -d vamp:nnls-chroma:chordino:simplechord ${video_id}.ogg -w jams

# cd ~-