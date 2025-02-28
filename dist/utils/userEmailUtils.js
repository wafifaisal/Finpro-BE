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
exports.getVerifyEmailHtml = getVerifyEmailHtml;
exports.sendVerifyEmail = sendVerifyEmail;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../services/mailer");
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
function getVerifyEmailHtml(token) {
    const linkUser = `${base_url_fe}/profile/${token}`;
    const templatePath = path_1.default.join(__dirname, "../templates", "verifyEmail.hbs");
    const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
    const compiledTemplate = handlebars_1.default.compile(templateSource);
    return compiledTemplate({ linkUser });
}
function sendVerifyEmail(email, html) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mailer_1.transporter.sendMail({
            from: "wafifaisal19@gmail.com",
            to: email,
            subject: "Verify Your New Email - NGINEPIN",
            html,
        });
    });
}
//# sourceMappingURL=userEmailUtils.js.map