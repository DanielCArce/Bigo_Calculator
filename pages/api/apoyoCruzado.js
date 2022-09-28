// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import porcentages from "../../porcentaje_apoyo_cruzado.json";
const { balance_percentage } = porcentages;
async function generate_estimation(seeds, percentage) {
  const percentage_for_calculate = balance_percentage.filter((value) => {
    return value.crossed_percentage === percentage;
  });

  const op = percentage_for_calculate[0].balance_rate * seeds;

  return Number(op);
}
async function handler(req, res) {
  const { seeds_on_livedata, apoyo_cruzado_on_livedata } = req.body;
  if (apoyo_cruzado_on_livedata <= 0.50) {
    res.json({
      message: "No hay nada que compensar al ser menor de 40%",
      seeds_total: 0,
      seeds_balance: 0,
    });
  }
  generate_estimation(seeds_on_livedata, apoyo_cruzado_on_livedata).then(
    (info) => {
      const finals = Math.round(Number(seeds_on_livedata) + info);
      res.statusCode(200).json({
        message: `Calculo generado ${new Date()}`,
        seeds_total: Math.ceil(finals),
        seeds_balance: Math.round(info),
      });
    }
  );
}

export default handler;
