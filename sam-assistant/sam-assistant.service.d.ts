import { QuestionDto } from './dtos/question.dto';
export declare class SamAssistantService {
    private openai;
    createThread(): Promise<{
        id: string;
    }>;
    userQuestion(questionDto: QuestionDto): Promise<{
        role: "user" | "assistant";
        content: any[];
    }[]>;
}
