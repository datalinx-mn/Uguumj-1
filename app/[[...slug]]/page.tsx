/* eslint-disable @next/next/no-sync-scripts */
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
      <div id="root" />
      <script src="/legacy/bootstrap.js" />
      <script type="module" src="/legacy/assets/index-Bx44nbsr.js" />
    </>
  );
}
