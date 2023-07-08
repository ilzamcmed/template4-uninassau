#!/bin/bash
apt update && apt install nodejs npm
git clone https://github.com/ilzamcmed/template4-uninassau
cd template4-uninassau/template-4-ilza-medeiros-api
npm install
npm run dev
cd ../template-4-ilza-medeiros
npm install
npm start