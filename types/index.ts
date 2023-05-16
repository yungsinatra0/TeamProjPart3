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

    type ChatUM = Chat & {
        users: {
            name: string
            uid: string
        }[]
        messages: Message[]
    }

    // Remove the password field from the User type
    type UserNP = User & {
        password: never
    }
}