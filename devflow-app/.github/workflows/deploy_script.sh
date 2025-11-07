#!/bin/bash

echo "Iniciando o deploy..."
cd /var/www/devflow-app
git pull origin main
npm install --production
pm2 restart all #Reinicia a aplicação com PM2
echo "Deploy concluído com sucesso!"

chmod +x deploy_script.sh