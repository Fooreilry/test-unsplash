interface PhotoItem {
  id: string;
  slug: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: Breadcrumbs[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: null;
  topic_submissions: unknown;
  asset_type: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: null;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: null;
      paypal_email: null;
    };
  };
  tags: Tags[];
}

interface Breadcrumbs {
  slug: string;
  title: string;
  index: number;
  type: string;
}

interface Tags {
  type: string;
  title: string;
  source: {
    ancestry: {
      type: {
        slug: string;
        pretty_slug: string;
      };
      category: {
        slug: string;
        pretty_slug: string;
      };
      subcategory: {
        slug: string;
        pretty_slug: string;
      };
    };
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: {
      id: string;
      slug: string;
      alternative_slugs: {
        en: string;
        es: string;
        ja: string;
        fr: string;
        it: string;
        ko: string;
        de: string;
        pt: string;
      };
      created_at: string;
      updated_at: string;
      promoted_at: string;
      width: number;
      height: number;
      color: string;
      blur_hash: string;
      description: string;
      alt_description: string;
      breadcrumbs: unknown[];
      urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
      };
      links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
      };
      likes: number;
      liked_by_user: boolean;
      current_user_collections: unknown[];
      sponsorship: null;
      topic_submissions: {
        nature: {
          status: string;
          approved_on: string;
        };
        wallpapers: {
          status: string;
          approved_on: string;
        };
      };
      asset_type: string;
      premium: boolean;
      plus: boolean;
      user: {
        id: string;
        updated_at: string;
        username: string;
        name: string;
        first_name: string;
        last_name: string;
        twitter_username: null;
        portfolio_url: string;
        bio: string;
        location: string;
        links: {
          self: string;
          html: string;
          photos: string;
          likes: string;
          portfolio: string;
          following: string;
          followers: string;
        };
        profile_image: {
          small: string;
          medium: string;
          large: string;
        };
        instagram_username: string;
        total_collections: number;
        total_likes: number;
        total_photos: number;
        total_promoted_photos: number;
        total_illustrations: number;
        total_promoted_illustrations: number;
        accepted_tos: boolean;
        for_hire: boolean;
        social: {
          instagram_username: string;
          portfolio_url: string;
          twitter_username: null;
          paypal_email: null;
        };
      };
    };
  };
}

interface PhotoResponseData {
  total: number;
  total_pages: number;
  results: PhotoItem[];
}
