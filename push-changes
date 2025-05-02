#!/bin/bash

echo "Add changes to the stage"
git add .

# Get current date and time
current_date=$(date "+%Y-%m-%d %H:%M:%S")

# Check if a commit message was provided
if [ -n "$1" ]; then
  commit_message="$1 - $current_date"
else
  commit_message="Add more notes - $current_date"
fi

echo "Commit changes with message: $commit_message"
git commit -m "$commit_message"

echo "Push changes to GitHub"
git push origin Master

echo "Deploy changes on the website"
npm run deploy
