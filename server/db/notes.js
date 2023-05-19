const prismaClient = require('@prisma/client')
const prisma = new prismaClient.PrismaClient()

// Add Notes
async function addNote(title, content ) {
    const flag = await prisma.note.create({
        data: {
            title: title,
            content: content,
        },
    })
    return flag;
}

// read all notes
async function readAllNotes() {
    const allNotes = await prisma.note.findMany({
        where: {
            title: {
                not: null
            }
        }
    })
    return allNotes
}

module.exports = [ readAllNotes, addNote]