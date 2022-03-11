// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import balance_percentage from "../../calculated_percentages.json";
export default async function handler(req, res) {
  // console.log(req.body);
  let seds = await calculate_seeds(
    req.body.total_seeds,
    req.body.exterior_percentage
  );
  res.status(200);
  res.json({
    ...req.body,
    seed_for_balance: seds,
    final_total_seeds: req.body.total_seeds + seds,
  });
}

async function calculate_seeds(total_seeds, percentage_exterior) {
  // console.log(balance_percentage.balance_percentage);
  let percentage = balance_percentage.balance_percentage.filter(
    (vl) => vl.exterior_percent === percentage_exterior
  );
  // console.log(percentage);
  return Math.ceil(total_seeds * percentage[0].compen);
}
