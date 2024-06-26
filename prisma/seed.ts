import { hashSync } from 'bcryptjs'
import pc from '../utils/prisma'

async function main() {
    const user = await pc.user.create({
        data: {
            username: 'vanhusein',
            email: 'vanhusein@gmail.com',
            password: hashSync('password'),
        },
    })

    console.log('[----------------------- Seeding User -----------------------]')
    console.log(user)

    const notes = await pc.note.createMany({
        data: [
            {
                title: 'Note 1',
                content: 'Note 1 content',
                user_email: 'vanhusein@gmail.com',
                schedule: new Date()
            },
            {
                title: 'Note 2',
                content: 'Note 2 content',
                user_email: 'vanhusein@gmail.com',
                schedule: new Date()
            }
        ]
    })

    console.log('[----------------------- Seeding Notes -----------------------]')
    console.log(notes)

    const theme = await pc.theme.createMany({
        data: [
            {
                name: 'Black',
                code: '#000000',
            },
            {
                name: 'Grey',
                code: '#DDDDDD',
            },
            {
                name: 'White',
                code: '#FFFFFF',
            },
        ]
    })

    console.log('[----------------------- Seeding theme -----------------------]')
    console.log(theme)

    const categoriess = await pc.categoriess.createMany({
        data: [
            {
                name: 'Hari Saya',
                icon: 'ri-sun-line',
            },
            {
                name: 'Penting',
                icon: 'ri-star-line',
                theme_name: 'Black'
            },
            {
                name: 'Terencana',
                icon: 'ri-calendar-2-line',
                theme_name: 'Grey'
            },
            {
                name: 'Tugas',
                icon: 'ri-checkbox-line',
                theme_name: 'White'
            },
        ]
    })

    console.log('[----------------------- Seeding Categoriess -----------------------]')
    console.log(categoriess)
}

main()
    .then(async () => {
        await pc.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await pc.$disconnect()
        process.exit(1)
    })