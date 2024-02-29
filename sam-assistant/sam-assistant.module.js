"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamAssistantModule = void 0;
const common_1 = require("@nestjs/common");
const sam_assistant_service_1 = require("./sam-assistant.service");
const sam_assistant_controller_1 = require("./sam-assistant.controller");
let SamAssistantModule = class SamAssistantModule {
};
exports.SamAssistantModule = SamAssistantModule;
exports.SamAssistantModule = SamAssistantModule = __decorate([
    (0, common_1.Module)({
        controllers: [sam_assistant_controller_1.SamAssistantController],
        providers: [sam_assistant_service_1.SamAssistantService],
    })
], SamAssistantModule);
//# sourceMappingURL=sam-assistant.module.js.map