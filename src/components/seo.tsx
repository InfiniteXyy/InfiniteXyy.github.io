import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Map<string, any>[];
  title?: string;
}
const SEO = (props: SEOProps) => {
  const { lang = "zh-CN", meta = [], title, description = "" } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title}
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default SEO;
