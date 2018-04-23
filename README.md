# Anotações

## boas práticas
- resetar css
    - https://css-tricks.com/reboot-resets-reasoning/
- Nome de variaveis de forma generica
    - corPrincipal e não corAzul
- minificar CSS



## extends e mixins
- Usado para criar css genericos e reaproveita-los

## Comandos

### SASS
- gerar css puro
`sass --watch principal.scss:../../assets/css/style.css --style compressed`

### LESS
- Gerar css puro
`lessc principal.less ../../assets/css/style.css`

### STYLUS
- Gerar css puro
`stylus principal.styl -o ../../assets/css/style.css -w`

# comentários
- less nao possui funções, então no less tive que criar um mixin com parametro

# cenarios
- modificar margins
- modificar grid
- modificar cores
- recriar uma pagina indentica, porém com uma barra lateral
- minificar imagens
- automatizar a geraçao dos arquivos de produção

# proximos passos
- criar arquivo css puro usando variaveis que o css tem
- realizar os testes de desempenho
- comparar o tamanho de cada arquivo gerado pelos pre processadores
- comparar as opçoes de minificação que cada um tem
