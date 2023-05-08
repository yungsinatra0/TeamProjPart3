import {
	User,
    Chat,
    Message,
} from ".prisma/client"

export {}


declare global {
    type MessageUser = Message & {
        sender: {
            name: string
        }
    }
}