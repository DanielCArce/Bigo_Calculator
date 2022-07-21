import { useState, useEffect } from "react";
function useEstimationSeed(
  seeds_livedata = 0,
  exterior_percentage_livedata = 0.0
) {
  const [finally_seeds, setFinallySeeds] = useState(0);
  const [compensation_seed, setCompensationSeed] = useState(0);
  const getCalculate = async () => {
    const query = await fetch("http://localhost:3000/api/calculate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        seeds_on_livedata: seeds_livedata,
        exterior_percentage_on_livedata: exterior_percentage,
      }),
    });
    const data = query.json();
    return data;
  };
  useEffect(() => {
    getCalculate.then((data) => {
      setFinallySeeds(data.final_seeds);
      setCompensationSeed(data.compensation_seeds);
    });
  }, [seeds_livedata]);

  return {
    seeds_livedata,
    exterior_percentage_livedata,
    finally_seeds,
    compensation_seed,
  };
}

export default useEstimationSeed;
