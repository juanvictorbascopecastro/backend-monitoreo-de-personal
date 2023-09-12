"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNamer = void 0;
const fileNamer = (req, file, callback) => {
    if (!file)
        return callback(null, true);
    const fileExptension = file.mimetype.split("/")[1];
    const fileName = `${new Date().getTime()}.${fileExptension}`;
    callback(null, fileName);
};
exports.fileNamer = fileNamer;
//# sourceMappingURL=filterNamer.herlper.js.map