export const dynamic = 'force-dynamic';

// Utilisé par le HEALTHCHECK Docker et par Backstage pour valider le déploiement.
export async function GET() {
  return Response.json({
    status: 'ok',
    version: process.env.NEXT_PUBLIC_APP_VERSION || 'dev',
    time: new Date().toISOString(),
  });
}
