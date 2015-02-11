#!/bin/bash

if [ "$NODE_ENV" == 'production' ]
then
  ./node_modules/.bin/gulp build:production
fi
