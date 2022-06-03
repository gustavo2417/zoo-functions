const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se o parametro passado for dia e um horário retorna a string esperada', () => {
    const closed = 'The zoo is closed';
    const open = 'The zoo is open';

    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(open);
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(closed);
    expect(getOpeningHours('Thursday', '11:00-PM')).toBe(closed);
    expect(getOpeningHours('Wednesday', '12:00-AM')).toBe(open);
    expect(getOpeningHours('Friday', '12:12-AM')).toBe(open);
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe(open);
    expect(getOpeningHours('Sunday', '07:20-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '10:45-AM')).toBe(closed);
  });
  it('quando não receber nenhum parametro retorna todos os dias e seus hoarios em que zoologico esta aberto', () => {
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result);
  });
  it('se o argumento passado for invalido deve lançar erro', () => {
    try {
      getOpeningHours('Tues', '11:00-AM');
    } catch (error) {
      expect(error.message).toBe('The day must be valid. Example: Monday');
    }
  });
  it('se o minuto passado for invalido retorna o erro esperado', () => {
    try {
      getOpeningHours('Saturday', 99);
    } catch (error) {
      expect(error.message).toBe('hour.toUpperCase is not a function');
    }
  });
  it('se a hora passada for invalida deve retornar a mensagem de erro esperada', () => {
    try {
      getOpeningHours('Saturday', 'o9:00-AM');
    } catch (error) {
      expect(error.message).toBe('The hour should represent a number');
    }
  });
  it('se o minuto passado for invalido retorna a mensagem de erro esperada', () => {
    try {
      getOpeningHours('Friday', '09:oo-AM');
    } catch (error) {
      expect(error.message).toBe('The minutes should represent a number');
    }
  });
  it('quando a abreviaçao for invalida deve retornar a mensagem esperada', () => {
    try {
      getOpeningHours('Tuesday', '11:00-RM');
    } catch (error) {
      expect(error.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
    }
  });
  it('se a hora passada for maior que 12 deve retornar a mensagem esperada', () => {
    try {
      getOpeningHours('Wednesday', '19:21-AM');
    } catch (error) {
      expect(error.message).toBe('The hour must be between 0 and 12');
    }
  });
  it('se os minutos passados forem maior que 59 deve retornar a mensagem esperada', () => {
    try {
      getOpeningHours('Sunday', '12:65-AM');
    } catch (error) {
      expect(error.message).toBe('The minutes must be between 0 and 59');
    }
  });
});
