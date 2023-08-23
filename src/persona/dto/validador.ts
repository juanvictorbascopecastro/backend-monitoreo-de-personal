import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "isBeforeToday", async: false })
export class IsBeforeToday implements ValidatorConstraintInterface {
  validate(date: Date) {
    return date <= new Date();
  }

  defaultMessage() {
    return "¡La fecha no debe ser mayor que la fecha actual!";
  }
}
