"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRunUseCase = void 0;
const createRunUseCase = async (openai, options) => {
    const { threadId, assistantId = 'asst_VVefvFU2YvJkLGhP4Yo521EN' } = options;
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
    });
    console.log({ run });
    return run;
};
exports.createRunUseCase = createRunUseCase;
//# sourceMappingURL=create-run.use-case.js.map