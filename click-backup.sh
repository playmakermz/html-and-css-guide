#! /usr/bin/bash
git pull --no-commit
git add .
git commit -am "obsidian Push: `date +'%m-%d'` "
git push
