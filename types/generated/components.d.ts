import type { Schema, Struct } from '@strapi/strapi';

export interface ElementPublishedItem extends Struct.ComponentSchema {
  collectionName: 'components_element_published_items';
  info: {
    displayName: 'PublishedItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_element_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'element.published-item': ElementPublishedItem;
      'element.social-link': ElementSocialLink;
    }
  }
}
