import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transporter } from "../services/mailer";

const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

export function getVerifyEmailHtml(token: string): string {
  const linkUser = `${base_url_fe}/profile/${token}`;
  const templatePath = path.join(
    __dirname,
    "../../../templates",
    "verifyEmail.hbs"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8");
  const compiledTemplate = handlebars.compile(templateSource);
  return compiledTemplate({ linkUser });
}

export async function sendVerifyEmail(
  email: string,
  html: string
): Promise<void> {
  await transporter.sendMail({
    from: "wafifaisal19@gmail.com",
    to: email,
    subject: "Verify Your New Email - NGINEPIN",
    html,
  });
}
