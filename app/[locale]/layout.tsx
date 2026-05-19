import { getDictionary } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div>
      <Navbar dict={dict.nav} locale={locale} />
      <main>{children}</main>
      <Footer dict={dict.footer} />
    </div>
  );
}
