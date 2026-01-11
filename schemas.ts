import type { Person, SoftwareSourceCode, WebApplication, WebSite } from "schema-dts";
import { documentationConfig } from "./docs.config";

const {
  site: { title, description, siteUrl, base, websiteLastModified },
  author: { 
    name, 
    alternateName, 
    firstName, 
    lastName, 
    jobTitle, 
    portfolioWebsite, 
    githubProfile, 
    linkedinProfile, 
    universityName: alumniUniversity, 
    universityUrl, 
    universityLogo 
  },
  project: { 
    name: projectName, 
    githubRepo, 
    version, 
    programmingLanguage, 
    keywords, 
    license, 
    startDate, 
    endDate, 
    liveDemoUrl 
  },
  assets: { logoFileName }
} = documentationConfig;

const personId = `${portfolioWebsite}/#person`;
const softwareId = `${githubRepo}/#software`;
const homepageId = `${siteUrl}${base}/#homepage`;
const webAppId = `${liveDemoUrl}/#web-app`;

const personLd: Person = {
  "@type": "Person",
  "@id": personId,
  name,
  alternateName,
  givenName: firstName,
  familyName: lastName,
  jobTitle,
  url: portfolioWebsite,
  sameAs: [githubProfile, linkedinProfile],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: alumniUniversity,
    url: universityUrl,
    logo: universityLogo,
  },
};

const softwareLd: SoftwareSourceCode = {
  "@type": "SoftwareSourceCode",
  "@id": softwareId,
  name: projectName,
  author: personLd,
  maintainer: personLd,
  description: description,
  keywords: keywords,
  url: githubRepo,
  version: version,
  programmingLanguage: programmingLanguage,
  license: license,
  dateCreated: startDate,
  dateModified: endDate,
  codeRepository: githubRepo,
  runtimePlatform: "Web",
};

const homepageLd: WebSite = {
  "@type": "WebSite",
  "@id": homepageId,
  author: personLd,
  license: license,
  inLanguage: "en",
  dateModified: websiteLastModified.toISOString(),
  url: `${siteUrl}${base}/`,
  name: title,
  description: description,
  image: `${siteUrl}${base}/${logoFileName}`,
  about: { "@id": softwareId },
  sameAs: [githubProfile, linkedinProfile],
};

const webAppLd: WebApplication = {
  "@type": "WebApplication",
  "@id": webAppId,
  name: projectName,
  description: description.replace("Documentation for ", ""),
  url: liveDemoUrl,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript and a modern web browser",
};

export { personId, softwareId, homepageId, webAppId, personLd, softwareLd, homepageLd, webAppLd };