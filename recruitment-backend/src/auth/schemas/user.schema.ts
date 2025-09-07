import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  email?: string;

  @Prop({ default: Date.now })
  createdAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
