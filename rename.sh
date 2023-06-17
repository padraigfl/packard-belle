#!/bin/bash

# find all files either in /data or /data/subdir
find .storybook/stories -type f -maxdepth 5 | while read file; do
  if [[ "$file" =~ \.js$ ]];
  then
    echo $file;
    mv $file ${file}x
  fi
done
# find /data/ -type f -print0 | while read -d $'\0' file; do
#     echo "Processing $file"
# done