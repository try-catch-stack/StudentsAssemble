import data from "../../data_refined.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
