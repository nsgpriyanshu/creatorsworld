-- Contact Submissions Table for Leads & Client Inquiries
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  country text not null,
  company_size text,
  plan text,
  message text not null,
  status text default 'new',
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table contact_submissions enable row level security;

-- Policy to allow anonymous/public lead submissions
create policy "Allow anonymous submissions" on contact_submissions
  for insert
  with check (true);

-- Policy to allow authenticated reads
create policy "Allow authenticated read" on contact_submissions
  for select
  using (auth.role() = 'authenticated');
