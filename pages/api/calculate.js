// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import balance_percentage from "../../calculated_percentages.json";
export default async function handler(req, res) {
  let seeds = await estimate_seed(
    req.body.initial_seeds,
    req.body.exterior_percentage
  );
  console.log(seeds);
  res.status(200).json({
    compensation: seeds,
    final_seeds: req.body.initial_seeds + seeds,
  });
}

async function estimate_seed(seeds, percentage) {
  let percen = balance_percentage.balance_percentage.filter(
    (vlr) => vlr.exterior_percent === percentage
  );
  let balance = Math.ceil(seeds * percen[0].balance_rate);
  return balance;
}
