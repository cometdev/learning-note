
set -e


npm run build


cd docs/.vuepress/dist



git init
git add -A
git commit -m 'deploy with vuepress'




git push -f https://github.com/cometdev/learning-note.git master:gh-pages

cd -