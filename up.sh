#git config --global core.autocrlf true
# abort on errors
set -e

git init
git add -A
git commit -m 'learning-note commit'
git push -f https://github.com/cometdev/learning-note.git master