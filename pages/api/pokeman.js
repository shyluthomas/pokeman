
import prisma from "../../helpers/dbConnection";

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case 'GET':
            const data = await prisma.pokeman.findMany();
            return res.status(200).json({data});
          break
        case 'POST':
            const {name,stats,types} = req.body;
            console.log('first', req.body.name)
            const resp = await prisma.pokeman.create({
                data : {
                    name,
                    stats,
                    types
                }
            });
            return res.status(201).json({resp});
          break
        default:
          res.status(405).end(`Method ${method} Not Allowed`)
      }
   
}
