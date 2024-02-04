#! /usr/bin/bash
git pull --rebase
git add .
git commit -am "obsidian Push: `date +'%m-%d'` "
git push
