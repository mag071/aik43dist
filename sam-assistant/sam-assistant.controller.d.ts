import { SamAssistantService } from './sam-assistant.service';
import { QuestionDto } from './dtos/question.dto';
export declare class SamAssistantController {
    private readonly samAssistantService;
    constructor(samAssistantService: SamAssistantService);
    createThread(): Promise<{
        id: string;
    }>;
    userQuestion(questionDto: QuestionDto): Promise<{
        role: "user" | "assistant";
        content: any[];
    }[]>;
}
