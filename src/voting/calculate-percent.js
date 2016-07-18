export default function calculatePercent(numerator, denominator) {

let result = 0;
  result = Math.round([numerator / denominator] * 100);

  return (result + "%");
}
