import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: MongoRepository<Lesson>
    ) { }

    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOneBy({ id });
    }

    async getLessons(): Promise<Lesson[]> {
        return this.lessonRepository.find();
    }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name, startDate, endDate, students } = createLessonInput;
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name: name,
            startDate: startDate,
            endDate: endDate,
            students
        });

        return this.lessonRepository.save(lesson);
    }

    async assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson> {
        const lesson = await this.lessonRepository.findOneBy({ id: lessonId });
        lesson.students = [...lesson.students, ...studentIds]

        return this.lessonRepository.save(lesson);
    }
}
