import { ValidatorConstraintInterface } from "class-validator";
export declare class IsBeforeToday implements ValidatorConstraintInterface {
    validate(date: Date): boolean;
    defaultMessage(): string;
}
