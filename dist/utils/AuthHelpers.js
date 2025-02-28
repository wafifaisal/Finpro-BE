"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleClient = exports.base_url_fe = void 0;
exports.generateToken = generateToken;
exports.hashPassword = hashPassword;
exports.sendEmail = sendEmail;
const jsonwebtoken_1 = require("jsonwebtoken");
const ms_1 = __importDefault(require("ms"));
const bcrypt_1 = require("bcrypt");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../services/mailer");
const google_auth_library_1 = require("google-auth-library");
exports.base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
exports.googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
function generateToken(payload, expiresIn = "1d") {
    const msValue = (0, ms_1.default)(expiresIn);
    const options = { expiresIn: msValue / 1000 };
    return (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, options);
}
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield (0, bcrypt_1.genSalt)(10);
        return (0, bcrypt_1.hash)(password, salt);
    });
}
function sendEmail(templateName, data, to, subject) {
    return __awaiter(this, void 0, void 0, function* () {
        const templatePath = path_1.default.join(__dirname, "../templates", templateName);
        const source = fs_1.default.readFileSync(templatePath, "utf-8");
        const compiled = handlebars_1.default.compile(source);
        const html = compiled(data);
        yield mailer_1.transporter.sendMail({
            from: "wafifaisal19@gmail.com",
            to,
            subject,
            html,
        });
    });
}
