import { NextResponse } from 'next/server';
//import PE from './porcentaje_latam.json'

async function generate_estimation(seeds, percentage) {
  const PE = [
  {
    "exterior_percent": 0.4,
    "balance_rate": 0
  },
  { "exterior_percent": 0.41, "balance_rate": 0.025 },
  { "exterior_percent": 0.42, "balance_rate": 0.05 },
  {
    "exterior_percent": 0.43,
    "balance_rate": 0.07500000000000001
  },
  { "exterior_percent": 0.44, "balance_rate": 0.1 },
  { "exterior_percent": 0.45, "balance_rate": 0.125 },
  { "exterior_percent": 0.46, "balance_rate": 0.15 },
  { "exterior_percent": 0.47, "balance_rate": 0.175 },
  {
    "exterior_percent": 0.48,
    "balance_rate": 0.19999999999999998
  },
  {
    "exterior_percent": 0.49,
    "balance_rate": 0.22499999999999998
  },
  {
    "exterior_percent": 0.5,
    "balance_rate": 0.24999999999999997
  },
  {
    "exterior_percent": 0.51,
    "balance_rate": 0.27499999999999997
  },
  { "exterior_percent": 0.52, "balance_rate": 0.3 },
  { "exterior_percent": 0.53, "balance_rate": 0.325 },
  {
    "exterior_percent": 0.54,
    "balance_rate": 0.35000000000000003
  },
  {
    "exterior_percent": 0.55,
    "balance_rate": 0.37500000000000006
  },
  {
    "exterior_percent": 0.56,
    "balance_rate": 0.4000000000000001
  },
  {
    "exterior_percent": 0.57,
    "balance_rate": 0.4250000000000001
  },
  {
    "exterior_percent": 0.58,
    "balance_rate": 0.4500000000000001
  },
  {
    "exterior_percent": 0.59,
    "balance_rate": 0.47500000000000014
  },
  {
    "exterior_percent": 0.6,
    "balance_rate": 0.5000000000000001
  },
  {
    "exterior_percent": 0.61,
    "balance_rate": 0.5250000000000001
  },
  {
    "exterior_percent": 0.62,
    "balance_rate": 0.5500000000000002
  },
  {
    "exterior_percent": 0.63,
    "balance_rate": 0.5750000000000002
  },
  {
    "exterior_percent": 0.64,
    "balance_rate": 0.6000000000000002
  },
  {
    "exterior_percent": 0.65,
    "balance_rate": 0.6250000000000002
  },
  {
    "exterior_percent": 0.66,
    "balance_rate": 0.6500000000000002
  },
  {
    "exterior_percent": 0.67,
    "balance_rate": 0.6750000000000003
  },
  {
    "exterior_percent": 0.68,
    "balance_rate": 0.7000000000000003
  },
  {
    "exterior_percent": 0.69,
    "balance_rate": 0.7250000000000003
  },
  {
    "exterior_percent": 0.7,
    "balance_rate": 0.7500000000000003
  },
  {
    "exterior_percent": 0.71,
    "balance_rate": 0.7750000000000004
  },
  {
    "exterior_percent": 0.72,
    "balance_rate": 0.8000000000000004
  },
  {
    "exterior_percent": 0.73,
    "balance_rate": 0.8250000000000004
  },
  {
    "exterior_percent": 0.74,
    "balance_rate": 0.8500000000000004
  },
  {
    "exterior_percent": 0.75,
    "balance_rate": 0.8750000000000004
  },
  {
    "exterior_percent": 0.76,
    "balance_rate": 0.9000000000000005
  },
  {
    "exterior_percent": 0.77,
    "balance_rate": 0.9250000000000005
  },
  {
    "exterior_percent": 0.78,
    "balance_rate": 0.9500000000000005
  },
  {
    "exterior_percent": 0.79,
    "balance_rate": 0.9750000000000005
  },
  {
    "exterior_percent": 0.8,
    "balance_rate": 1.0000000000000004
  },
  {
    "exterior_percent": 0.81,
    "balance_rate": 1.0250000000000004
  },
  {
    "exterior_percent": 0.82,
    "balance_rate": 1.0500000000000003
  },
  {
    "exterior_percent": 0.83,
    "balance_rate": 1.0750000000000002
  },
  { "exterior_percent": 0.84, "balance_rate": 1.1 },
  { "exterior_percent": 0.85, "balance_rate": 1.125 },
  { "exterior_percent": 0.86, "balance_rate": 1.15 },
  {
    "exterior_percent": 0.87,
    "balance_rate": 1.1749999999999998
  },
  {
    "exterior_percent": 0.88,
    "balance_rate": 1.1999999999999997
  },
  {
    "exterior_percent": 0.89,
    "balance_rate": 1.2249999999999996
  },
  {
    "exterior_percent": 0.9,
    "balance_rate": 1.2499999999999996
  },
  {
    "exterior_percent": 0.91,
    "balance_rate": 1.2749999999999995
  },
  {
    "exterior_percent": 0.92,
    "balance_rate": 1.2999999999999994
  },
  {
    "exterior_percent": 0.93,
    "balance_rate": 1.3249999999999993
  },
  {
    "exterior_percent": 0.94,
    "balance_rate": 1.3499999999999992
  },
  {
    "exterior_percent": 0.95,
    "balance_rate": 1.3749999999999991
  },
  {
    "exterior_percent": 0.96,
    "balance_rate": 1.399999999999999
  },
  {
    "exterior_percent": 0.97,
    "balance_rate": 1.424999999999999
  },
  {
    "exterior_percent": 0.98,
    "balance_rate": 1.4499999999999988
  },
  {
    "exterior_percent": 0.99,
    "balance_rate": 1.4749999999999988
  },
  {
    "exterior_percent": 1,
    "balance_rate": 1.4999999999999987
  }
  ];
  //console.log({ PE, seeds,percentage  })
  const percentage_target = PE.filter((val) => {
    return val.exterior_percent === percentage;
  });
  return Number(seeds * percentage_target[0].balance_rate)
}
export async function POST(request) {
  //console.log({req: await request.json()})
  const { initial_seeds, exterior_percentage } = await request.json();
  if (exterior_percentage <= 0.40) {
    return NextResponse.json({
      message:"Percentage is latam"
    },{status:200})
  }
  const balance_seeds = await generate_estimation(initial_seeds, exterior_percentage);
  return NextResponse.json({balance_seeds},{status:200})
}
