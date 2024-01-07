import axios from "axios";

export default async function handler(req, res) {
    const { url } = req.query;
    const resp = await axios.get(url)
    const data = await resp.data;
    const { id,name,stats,types,sprites } = data;
    return res.status(200).json({ id,name,stats,types,sprites });
}
