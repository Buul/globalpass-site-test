import { content } from "../content";
import { siteUrl } from "../site";

export default function JsonLd() {
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${siteUrl}/#webpage`;

  const email = content.contact.items.find((item) => item.icon === "mail");
  const instagram = content.contact.items.find(
    (item) => item.icon === "instagram",
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: content.brand.name,
        url: siteUrl,
        logo: `${siteUrl}/logo.svg`,
        email: email?.value,
        telephone: `+${content.contact.phoneDigits}`,
        sameAs: instagram ? [instagram.href] : [],
        description: content.meta.description,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: content.brand.name,
        inLanguage: "pt-BR",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteUrl,
        name: content.meta.title,
        description: content.meta.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        inLanguage: "pt-BR",
      },
      {
        "@type": "SoftwareApplication",
        name: content.brand.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description: content.hero.description,
        url: siteUrl,
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
