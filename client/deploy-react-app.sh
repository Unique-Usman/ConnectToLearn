echo "Switching to branch master"
git checkout master

echo "Building React app"
npm run build

echo "Deploying files to server"
scp -r build/* malhaar@143.110.253.152:/var/www/143.110.253.152/

echo "Done!"