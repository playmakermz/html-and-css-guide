#! /usr/bin/bash
git pull --no-rebase
git add .
git commit -am "obsidian Push: `date +'%m-%d %H:%M'` "
git push
