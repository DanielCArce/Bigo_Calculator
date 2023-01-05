// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PE from '../../porcentaje_latam.json'
async function generate_estimation(seeds, percentage) {
  const percentage_target = PE.filter((val) => {
    return val.exterior_percent === percentage;
  });
  return Number(seeds * percentage_target[0].balance_rate)
}
async function handler(req, res) {
  const { initial_seeds, exterior_percentage } = req.body;
  if (exterior_percentage <= 0.40) {
    res.status(200).json({
      message:"Percentage is latam"
    })
  }
  const balance_seeds = await generate_estimation(initial_seeds, exterior_percentage);
  res.status(200).json({balance_seeds})
}
export default handler;
