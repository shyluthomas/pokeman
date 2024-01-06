// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse } from "next";

export default async function handler(req, res) {
    const { url } = req.query;
    const resp = await fetch(url,{
    method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
    const data = await resp.json();
    const { id,name,stats,types,sprites } = data;
    console.log('reducedData',{ id,name,stats,types })
    return res.status(200).json({ id,name,stats,types,sprites });

}
