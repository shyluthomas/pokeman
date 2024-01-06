// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


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
    return res.status(200).json({ id,name,stats,types,sprites });
}
