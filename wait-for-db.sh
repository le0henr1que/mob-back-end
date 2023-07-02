

wait_for_db() {
  echo "Aguardando o banco de dados ficar disponível..."
  until npx prisma db push; do
    echo "Tentando novamente em 2 segundos..."
    sleep 2
  done
}

wait_for_db