const { dockStart } = require('@nlpjs/basic');

(async () => {
  const dock = await dockStart({ use: ['Basic']});
  const nlp = dock.get('nlp');
  //O treino do modelo acontece aqui
  nlp.addLanguage('pt');

  nlp.addDocument('pt', 'Olá', 'greetings.hello');
  nlp.addDocument('pt', 'Oi', 'greetings.hello');

  nlp.addAnswer('pt', 'greetings.hello', 'Olá - Resposta');
  nlp.addAnswer('pt', 'greetings.hello', 'Oi - Reposta');

  await nlp.train();
  // 

})();