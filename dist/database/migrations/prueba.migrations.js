"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1658149110474 = void 0;
class default1658149110474 {
    constructor() {
        this.name = "default1658149110474";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "prueba" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "prueba"`);
    }
}
exports.default1658149110474 = default1658149110474;
//# sourceMappingURL=prueba.migrations.js.map