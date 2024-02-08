import apiClient from "../../utils/apiClient";

export default async function handler(req, res) {
  await apiClient
    .get(`/catalog/embed/playlist/${req.query.playlist}`)
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}
