import mongoose, { Schema, Document } from "mongoose";


export interface Message extends Document { 
    content : string;
    createdAt : Date;
}

const Messagechema : Schema<Message> = new Schema({
    content :{
        type : String,
        required : true
        },
        createdAt : {
            type : Date,
            required : true,
            default : Date.now
        }
    })


    export  interface User extends Document {
        username : string;
        password : string;
        email : string;
        verifyCode : string;
        isverifyCode : boolean;
        verifyExpiryCode : Date;
        isAcceptingMessages : boolean;
        messages : Message[];

     
    }


    const UserSchema : Schema<User> = new Schema({
        username :{
            type : String,
            required : [true, 'Username is required']
            },
            password :{
                type : String,
                required : [true, 'Password is required']
                },
                email :{
                    type : String,
                    required : [true, 'Email is required'],
                    match : [/.+\@.+\..+/, 'Please enter a valid email']
                   
                    },
                    verifyCode :{
                        type : String,
                        required : true
                        },
                        isverifyCode :{
                            type : Boolean,
                            required : true,
                            default : false
                            },
                        verifyExpiryCode :{
                            type : Date,
                            required : true
                            },
                            isAcceptingMessages :{
                                type : Boolean,
                                required : true,
                                default : false
                                },
                                messages : [Messagechema]
             
        })


        const UserModel = (mongoose.models.User  as mongoose.Model<User> || mongoose.model<User>('User', UserSchema));
        export default UserModel;

