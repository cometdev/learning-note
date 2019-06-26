
::set -e
call npm run build

cd docs/.vuepress/dist

REM TEST

:: 윈도우에서 git add -A를 할 경우 개행 문자열로 인해 warning: LF will be replaced by CRLF이 발생하여 해당 CRLF 치환을 자동으로 해주도록 global 설정
git config --global core.autocrlf true
REM TEST

git init
REM TEST

git add -A
REM TEST
git commit -m 'deploy with vuepress'
REM TEST
git push -f https://github.com/cometdev/learning-note.git master:gh-pages

cd ../../../