# Git Command

git init = Create a new git repo
git status - view the changes to your project code
git add  - Add files to staging area
git commit -m "message" - creates a new commit with files from staging area
git log - View recent commits


ls -a ~/.ssh - look for keys
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" - create ssh key
eval "$(ssh-agen -s)"
ssh-add ~/.ssh/id_rsa - add identity

copy id to give to github
pbcopy < ~/.ssh/id_rsa.pub

paste in github settings > ssh key 

ssh -T git@github.com - basic ssh connection to see if it's working - should see message saying it's connected


copy ssh url from github

git remote add origin {URLCOPIED FROM GITHIB}

git remote -v - view urls  


git push -u origin master - initial push to github