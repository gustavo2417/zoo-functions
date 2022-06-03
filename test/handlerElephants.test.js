const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('confere se quando o parametro for count retorna o valor esperado', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('confere se quando o parametro for um objeto vazio retorna parametro invalido', () => {
    const test = {};
    expect(handlerElephants(test)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('confere se quando o parametro for averageAge retorna um valor proximo do esperado', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('caso o parametro seja location retorna a localozação dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('caso o parametro não contemple nenhuma função deve retornar null', () => {
    expect(handlerElephants('aleatorio')).toBeNull();
  });
  it('caso não receba parametro deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('verifica se quando o parametro for popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
