const factor_exchange = 3.67;
async function estimate_exchange(quantity, exchangeTo) {
  if (exchangeTo == "diamonds") {
    return {
      //Tengo Semillas y quiero ver cuanto me alcanza en diamantes
      seeds: quantity,
      diamonds: Number(Math.ceil(quantity / factor_exchange)),
    };
  }
  return {
    //Tengo Diamantes y quiero ver cuanto me cuesta tener esa cantidad
    diamonds: quantity,
    seeds: Number(Math.ceil(quantity * factor_exchange)),
  };
}
async function handler(req, res) {
  const { quantity, exchangeTo } = req.body;
  const result = await estimate_exchange(quantity, exchangeTo);
  res.status(200).json(result);
}
export default handler;
