import { sign, SignOptions } from "jsonwebtoken";
import ms from "ms";
import { genSalt, hash } from "bcrypt";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { transporter } from "../services/mailer";
import { OAuth2Client } from "google-auth-library";

export const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
export const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export function generateToken(
  payload: any,
  expiresIn: ms.StringValue = "1d"
): string {
  const msValue = ms(expiresIn) as number;
  const options: SignOptions = { expiresIn: msValue / 1000 };
  return sign(payload, process.env.JWT_KEY as string, options);
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await genSalt(10);
  return hash(password, salt);
}

export async function sendEmail(
  templateName: string,
  data: any,
  to: string,
  subject: string
): Promise<void> {
  const templatePath = path.join(__dirname, "../../../templates", templateName);
  const source = fs.readFileSync(templatePath, "utf-8");
  const compiled = handlebars.compile(source);
  const html = compiled(data);
  await transporter.sendMail({
    from: "wafifaisal19@gmail.com",
    to,
    subject,
    html,
  });
}
