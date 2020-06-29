# crear en aws
$ serverless deploy 
## o
$ sls deploy

# ejecutar localmente
$ serverless invoke --function check --data "{\"number\": \"10460033280\"}"
## o
$ sls invoke -f check -d "{\"number\": \"10460033280\"}"
## o
$ sls invoke -f check -p data-jldamians.json
## o
$ sls invoke -f check -p data-jadamians.json
