create table authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  avatar_url text not null,
  bio text,
  created_at timestamptz default now()
);

create table blogs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content jsonb not null,

  thumbnail_url text not null,
  tags text[] default '{}',

  reading_time integer not null,

  published_at timestamptz not null,
  updated_at timestamptz,

  is_featured boolean default false,
  status text check (status in ('draft', 'published')) default 'draft',

  seo_title text,
  seo_description text,
  seo_image text,

  author_id uuid references authors(id) on delete cascade,

  created_at timestamptz default now()
);