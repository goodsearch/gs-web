#!/bin/sh

echo "Node environment set to: $NODE_ENV"
echo "Shell is set to: $SHELL"

if [ "$NODE_ENV" == 'production' ]
then
  ./node_modules/.bin/gulp build:production
fi
