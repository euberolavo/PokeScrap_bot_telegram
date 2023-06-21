PokeScraper
# PokeScraper Chatbot

_Chatbot desenvolvido para uso do [Web Scraper pokemon](https://github.com/euberolavo/Scraper_Pokemon_Puppeteer) que está implementado no AWS Lambda_

***********
### Tópicos 

- [Sobre o projeto](#Sobre-o-projeto)

- [Tecnologias](#Tecnologias)

- [Instalação](#Instalação)

- [Funcionamento](#Funcionamento)

- [Desenvolvimento](#Desenvolvimento)

- [Considerações finais](#Considerações-finais)

***********
## Sobre o projeto

### O projeto foi desenvolvido em NodeJS, com uso da Biblioteca telegraf

- O bot está implementado em uma VPS Oracle;
- Ele recebe um nome de Pokemon, e retorna os dados obtidos pelo [PokeScraper](Scraper_Pokemon_Puppeteer) implementado na AWS Lambda;

## Tecnologias
* NodeJS
* telegraf
* Axios

## Instalação
Clonar o projeto:
```bash
git clone https://github.com/euberolavo/PokeScrap_bot_telegram.git
```
Baixar as dependências:
```bash
npm install
```
Startar o Bot
```bash
npm start
```
## Funcionamento

###Local
- Ao iniciar o Bot, ele retornará no terminal 
```bash
PokeScraper Telegram em Funcionamento
```
Após isso, é apenas abrir o PokeScraper([@PokeScraperBot](https://t.me/PokeScraperBot)) no telegram, e enviar "/start" para iniciar a conversa.

*****

## Desenvolvimento
No processo de desenvolvimento do Scraper, senti a necessidade de criar algum front para interação do usuario, então tive a ideia de criar algo mais interativo, e surgiu o Bot.

Esse foi o meu primeiro contato com o telegraf, e devido a documentação ser bastate detalhada, não tive dificuldades no desenvolvimento.

## Considerações finais

Sei que poderia implementar o bot no AWS, e pretendo realiza-lo, mas devido o tempo, decidi implementar em uma VPS ao qual possuo.
