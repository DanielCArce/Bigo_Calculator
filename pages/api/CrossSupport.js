// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PE from '../../porcentaje_apoyo_cruzado.json'
async function generate_estimation(seeds, percentage) {
  const percentage_target = PE.filter((val) => {
    return val.crossed_percentage === percentage;
  });
  return Number(seeds * percentage_target[0].balance_rate)
}
async function handler(req, res) {
  const { initial_seeds, cross_percentage } = req.body;
  if (cross_percentage <= 0.50) {
    res.status(200).json({
      message:"Percentage is OKAY"
    })
  }
  const balance_seeds = await generate_estimation(initial_seeds, cross_percentage);
  res.status(200).json({balance_seeds})
}
export default handler;
