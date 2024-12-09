import mongoose, {Schema, Document }from "mongoose";

export interface Message extends Document
{
    content: string;
    createdAt: Date
}


const MessageSchema: Schema<Message> = new Schema({
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
    });

// user define schema
export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    message: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {type: String, required: [true, "User name is required"], unique: true},
    email: {type: String, required: [true, "Email is required"], unique: true, match: [/.+\@.+\..+/, 'please, use a valid email address']},
    password: {type: String, required: [true, "Password is required"]},
    verifyCode: {type: String, required: true},
    verifyCodeExpiry: {type: Date, required: true},
    isAcceptingMessage: {type: Boolean, default: false},
    message: [{type: Schema.Types.ObjectId, ref: 'Message'}]
    });


