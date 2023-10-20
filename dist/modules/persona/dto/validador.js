"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBeforeToday = void 0;
const class_validator_1 = require("class-validator");
let IsBeforeToday = class IsBeforeToday {
    validate(date) {
        return date <= new Date();
    }
    defaultMessage() {
        return "¡La fecha no debe ser mayor que la fecha actual!";
    }
};
exports.IsBeforeToday = IsBeforeToday;
exports.IsBeforeToday = IsBeforeToday = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "isBeforeToday", async: false })
], IsBeforeToday);
//# sourceMappingURL=validador.js.map