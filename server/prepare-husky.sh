#!/usr/bin/env bash

npx husky install
npx husky set .husky/pre-commit 'npx lint-staged'
npx husky set .husky/pre-push 'npm run test'
chmod ug+x .husky/*
