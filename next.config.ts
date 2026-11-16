import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Pertahankan URL dari website WordPress lama agar tautan & SEO tidak putus.
  async redirects() {
    const oldProfiles: Record<string, string> = {
      "/mirzasilatama": "mirza-silatama",
      "/profil-nandang-sutisna": "nandang-sutisna",
      "/profil-saepul-rizal": "saepul-rizal",
      "/profil-agung-dwijosasongko": "agung-dwijosasongko",
      "/profil-noki-amin": "noki-mulyanto-amin",
      "/profil-erwin-syahroni": "erwin-syahroni",
      "/profil-rasiban-e-procurement": "rasiban",
      "/profil-yofie-permana": "yofie-permana",
      "/profil-pietra-azwar": "pietra-azwar",
      "/profil-ibrahim-trihaji": "ibrahim-trihaji",
    };
    return [
      { source: "/timkami", destination: "/tim-kami", permanent: true },
      ...Object.entries(oldProfiles).map(([source, slug]) => ({
        source,
        destination: `/tim-kami#${slug}`,
        permanent: true,
      })),
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
