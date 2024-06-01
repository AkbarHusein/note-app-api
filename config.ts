import { sign, verify, decode } from 'jsonwebtoken'

export type signing = {
    username: string,
    email: string
}

const signing = (signing: signing) => {
    const token = sign(signing, process.env.JWT_SECRET as string, {
        expiresIn: '1d'
    })
    return token
};

export { signing }