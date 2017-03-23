
ssh -i /root/.ssh/authorizedjenkins_keys root@104.236.252.17 <<EOF
  cd ~/hello-jenkins
  git pull
  npm install --production
  forever restartall
  exit
EOF