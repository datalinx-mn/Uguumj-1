import Script from "next/script";
import AdminClient from "../admin/AdminClient";
import RebaClient from "../reba/RebaClient";

export default async function LegacyUguumjArkhadSite({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const route = await params;

  if (route.slug?.[0] === "admin") return <AdminClient />;
  if (route.slug?.join("/") === "reba-vintage-cafe") return <RebaClient />;

  return (
    <>
      <div id="root" suppressHydrationWarning />

      <Script
        src="/legacy/bootstrap.js"
        strategy="afterInteractive"
      />

      <Script
        type="module"
        src="/legacy/assets/index-Bx44nbsr.js"
        strategy="afterInteractive"
      />
    </>
  );
}
