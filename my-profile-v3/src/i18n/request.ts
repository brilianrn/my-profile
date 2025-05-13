import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value;
  const locale = typeof lang === "string" ? lang : "en";
  const messages = (await import(`../../public/lang/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
