import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPostsSelection extends Struct.ComponentSchema {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'file';
  };
  attributes: {
    heading: Schema.Attribute.String;
    post: Schema.Attribute.Relation<'oneToOne', 'api::post.post'>;
  };
}

export interface LayoutFeaturedCourse extends Struct.ComponentSchema {
  collectionName: 'components_layout_featured_courses';
  info: {
    description: '';
    displayName: 'featuredCourse';
    icon: 'crown';
  };
  attributes: {
    announcement: Schema.Attribute.Text;
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    heading: Schema.Attribute.String;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'archive';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'layout.link', true>;
    callToAction: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_mission_sections';
  info: {
    displayName: 'missionSection';
    icon: 'plane';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Mission'>;
    showLogo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsletterForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_newsletter_forms';
  info: {
    displayName: 'newsletterForm';
    icon: 'brush';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutServicesPreview extends Struct.ComponentSchema {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'servicesPreview';
    icon: 'cloud';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SeoSeoInfo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_infos';
  info: {
    displayName: 'seoInfo';
    icon: 'globe';
  };
  attributes: {
    seoDescription: Schema.Attribute.Text;
    seoTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.posts-selection': BlogPostsSelection;
      'layout.featured-course': LayoutFeaturedCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission-section': LayoutMissionSection;
      'layout.newsletter-form': LayoutNewsletterForm;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seo-info': SeoSeoInfo;
    }
  }
}
