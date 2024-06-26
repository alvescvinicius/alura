# ALURA

Repositório de cursos da plataforma Alura.

## Clonar repositório:

git clone https://github.com/alvescvinicius/alura.git -b main

## Criar nova branch sem histórico de commits:

git checkout --orphan alura-docker

## Fazer commit:

Fazer login no Git com a conta do GitHub se necessário:

git config --global user.name "usuarioDoGitHub"

git config --global user.email seuEmailDoGitHub@email.com

git add .

git commit -m "Configuração inicial do repositório."

## Enviar branch para o GitHub:

git push origin alura-docker