::call npm run build
cd docs/.vuepress/dist
:: 윈도우에서 git add -A를 할 경우 개행 문자열로 인해 warning: LF will be replaced by CRLF이 발생하여 해당 CRLF 치환을 자동으로 해주도록 global 설정
git init
git config --global core.autocrlf true
git add -A
git commit -m 'deploy with vuepress'
git push -f https://github.com/cometdev/learning-note.git master:gh-pages
cd ../../../