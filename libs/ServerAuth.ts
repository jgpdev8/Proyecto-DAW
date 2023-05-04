import { NextApiRequest } from "next";
import { getSession } from "next-auth/react"

const ServerAuth = async(req:NextApiRequest) => {
    const session = await getSession({req});

    if(!session?.user?.email) {
        throw new Error ('No estas conectado');
    }

    const currentUser = await prisma?.user.findUnique({
        where:{
            email: session.user.email
        }
    });

    if(!currentUser) {
        throw new Error('No estas conectado');
    }

    return { currentUser }
};

export default ServerAuth;