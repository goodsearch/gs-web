echo "Node environment set to: $NODE_ENV"
if [ "$NODE_ENV" == 'production' ]
then
  ./node_modules/.bin/gulp build:production
fi
