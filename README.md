# Anotações

## boas práticas
- resetar css
    - https://css-tricks.com/reboot-resets-reasoning/
- Nome de variaveis de forma generica
    - corPrincipal e não corAzul
- minificar CSS
- minificar images
- minificar html
- CSS assincrono
    - https://www.filamentgroup.com/lab/async-css.html
- JS Assincrono
    - https://braziljs.org/blog/diferencas-entre-async-e-defer/
- Cache do navegador
    

## extends e mixins
- Usado para criar css genericos e reaproveita-los

## Comandos

### GULP
- gerar arquivos de produção
`npm run build:gulp`

- gerar arquivos de produção e criar um servidor
`npm run build:gulp:servidor`

- gerar arquivos automáticamente a cada alteração com servidor carregando automaticamente
`npm run dev:gulp`

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
- Remover elementos HTML conseguentemente seus seletores CSS

# proximos passos
- criar arquivo css puro usando variaveis que o css tem
- realizar os testes de desempenho

