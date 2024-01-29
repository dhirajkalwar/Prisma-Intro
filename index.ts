import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   await prisma.user.create({
    data: {
        name: 'Tanmay',
        email: 'Tanmay@gmail.com',
        password: 'tanmay',
    }
   })

   const allUser = await prisma.user.findMany();
   console.log(allUser);
   
    
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
    
})
