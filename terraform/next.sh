#!/bin/sh
apt-get update
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs
apt-get install npm -y
npm install yarn -g