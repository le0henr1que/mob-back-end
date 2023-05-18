import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Define o intervalo de tempo em que as solicitações são contadas (1 minuto neste exemplo)
  max: 15,
  message:
    'Detectamos muitas tentativas de login em um curto período de tempo. Por favor, tente novamente mais tarde ou entre em contato com o suporte ao cliente para obter assistência.',
  keyGenerator: function (req) {
    console.log(req.ip);
    return req.ip;
  },
});

export default apiLimiter;
