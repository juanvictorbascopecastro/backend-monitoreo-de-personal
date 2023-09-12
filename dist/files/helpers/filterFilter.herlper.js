"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const fileFilter = (req, file, callback) => {
    if (!file)
        callback(null, true);
    const fileExptension = file.mimetype.split("/")[1];
    const validExtension = ["jpg", "jpeg", "png", "gif"];
    if (validExtension.includes(fileExptension)) {
        callback(null, true);
    }
    callback(null, false);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=filterFilter.herlper.js.map