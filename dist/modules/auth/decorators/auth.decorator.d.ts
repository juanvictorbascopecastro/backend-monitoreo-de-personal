import { ValidRoles } from "../interface";
export declare function Auth(...roles: ValidRoles[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
