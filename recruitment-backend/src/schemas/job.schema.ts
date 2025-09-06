import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Job {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  requirements: string;

  @Prop()
  qualifications: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
