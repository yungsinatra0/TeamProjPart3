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
        users: User[]
        messages: Message[]
    }

    // Remove the password field from the User type
    type UserNP = User & {
        password: never
    }
}