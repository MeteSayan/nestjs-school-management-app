import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
    ) { }

    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOneBy({ id })
    }

    async createLesson(name: string, startDate: string, endDate: string): Promise<Lesson> {
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name: name,
            startDate: startDate,
            endDate: endDate
        });

        return this.lessonRepository.save(lesson);
    }

}
