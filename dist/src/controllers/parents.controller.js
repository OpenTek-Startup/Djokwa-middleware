"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParents = exports.getParent = exports.deleteParent = exports.updateParent = exports.createNewParent = void 0;
const createNewParent = async (req, res) => {
    return res.send("new parent controller");
};
exports.createNewParent = createNewParent;
const updateParent = async (req, res) => {
    return res.send("update parent route ");
};
exports.updateParent = updateParent;
const deleteParent = async (req, res) => {
    return res.send("delete parent route ");
};
exports.deleteParent = deleteParent;
const getParent = async (req, res) => {
    return res.send("getParent parent route ");
};
exports.getParent = getParent;
const getParents = async (req, res) => {
    return res.send("get parents route ");
};
exports.getParents = getParents;
