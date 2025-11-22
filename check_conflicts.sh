#!/bin/bash
echo "==== Checking for Git merge conflict markers ===="

# Find all files containing conflict markers
conflict_files=$(grep -rlE '^(<<<<<<<|=======|>>>>>>> )' .)

if [ -z "$conflict_files" ]; then
  echo "No conflict markers found! ✅"
else
  echo "Files with conflict markers:"
  echo "$conflict_files"
  echo
  echo "You need to open these files and resolve the conflicts manually."
fi

echo "==== Done ===="
