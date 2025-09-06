import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // Get all jobs
  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  // Get a specific job by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const job = await this.jobsService.findOne(id);
    if (!job) {
      throw new NotFoundException('Job not found');
    }
    return job;
  }

  // Create a new job
  @Post()
  create(@Body() createJobDto: any) {
    return this.jobsService.create(createJobDto);
  }

  // Update an existing job
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateJobDto: any) {
    const updatedJob = await this.jobsService.update(id, updateJobDto);
    if (!updatedJob) {
      throw new NotFoundException('Job not found');
    }
    return updatedJob;
  }

  // Delete a job
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await this.jobsService.remove(id);
    if (!deleted) {
      throw new NotFoundException('Job not found');
    }
    return { message: 'Job deleted successfully' };
  }
}
