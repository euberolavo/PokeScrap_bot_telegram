const { Telegraf } = require("telegraf");
const axios = require("axios");

class Bot {
  constructor(token) {
    this.bot = new Telegraf(token);
    this.bot.start(this.startHandler.bind(this));
    this.bot.on("text", this.textHandler.bind(this));
    this.bot.launch();
    this.nome = "";
    console.log("PokeScraper Telegram em Funcionamento");
  }

  startHandler(ctx) {
    const chatId = ctx.chat.id;
    this.bot.telegram.sendMessage(chatId, "Olá, bem-vindo ao PokeScraper!");
    setTimeout(() => {
      ctx.reply(`Digite o nome do seu Pokémon Preferido ❤️`);
    }, 1000);
  }

  replyWithNome(ctx, nome) {
    ctx.reply(`Você digitou ${nome}`);
    setTimeout(() => {
      ctx.reply(`Aguarde enquanto coletamos informações`);
    }, 1000);
  }

  async textHandler(ctx) {
    const nome = ctx.message.text;
    this.replyWithNome(ctx, nome);
    this.nome = nome;

    try {
      const response = await axios.get(
        `https://worb0n0l5a.execute-api.us-east-1.amazonaws.com/dev/?pokemon=${nome}`
      );

      // Insere a resposta do Lambda na variável
      const pokemonData = response.data.body;

      // Resposta ao usuário com os dados do Pokemon
      ctx.reply(
        `Nome: ${pokemonData.name}\nPeso: ${pokemonData.peso},\nAltura: ${
          pokemonData.altura
        },\nTipo: ${pokemonData.types.join(
          ", "
        )},\nHabilidades: ${pokemonData.habilidades.join(", ")}\n`
      );
      console.log(pokemonData);
    } catch (error) {
      console.log("Erro ao fazer a solicitação à API:", error);
      ctx.reply(
        "Oops! Parece que houve um pequeno erro de digitação. Por favor, verifique a ortografia e tente novamente."
      );
    }
  }
}

const bot = new Bot("<SEU-TOKEN>");
module.exports = bot;
