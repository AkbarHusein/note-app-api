type Note = {
    id: string
    title: string
    content: string
    user_email: string
    categories_name: string | null
    done: boolean
    important: boolean
    schedule: Date
    createdAt: Date
    updatedAt: Date
}

type CreateNoteProps = {
    title: string
    content: string
}

function createNote({ title, content }: CreateNoteProps): Note  // Penggunaan tipe yang benar

export { Note, CreateNoteProps, createNote }
