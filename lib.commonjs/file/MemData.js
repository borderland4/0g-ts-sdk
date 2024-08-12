"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemData = void 0;
const index_js_1 = require("./Iterator/index.js");
const AbstractFile_js_1 = require("./AbstractFile.js");
class MemData extends AbstractFile_js_1.AbstractFile {
    fileSize = 0;
    constructor(data) {
        super();
        this.fileSize = data.length;
    }
    iterateWithOffsetAndBatch(offset, batch, flowPadding) {
        return new index_js_1.MemIterator(new Uint8Array(0), this.size(), offset, batch, flowPadding);
    }
}
exports.MemData = MemData;
//# sourceMappingURL=MemData.js.map