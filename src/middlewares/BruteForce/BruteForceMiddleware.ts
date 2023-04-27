import ExpressBrute from 'express-brute';

var store = new ExpressBrute.MemoryStore();

const failCallback = function (req: any, res: any, next: any, nextValidRequestDate: any) {
  res.status(429).json({
    message:
      'Detectamos muitas tentativas de login em um curto período de tempo. Por motivos de segurança, sua conta foi temporariamente bloqueada. Por favor, tente novamente mais tarde ou entre em contato com o suporte ao cliente para obter assistência.',
  });
};

var bruteforce = new ExpressBrute(store, {
  freeRetries: 5,
  minWait: 1 * 60 * 1000,
  maxWait: 5 * 60 * 1000,
  failCallback: failCallback,
  // handleStoreError: handleStoreError
});

export default bruteforce.prevent;
