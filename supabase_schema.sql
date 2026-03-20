-- SQL Schema for SiteSpark SaaS

-- 1. Sites Table
CREATE TABLE sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  subdomain TEXT UNIQUE NOT NULL,
  custom_domain TEXT UNIQUE,
  details JSONB NOT NULL,
  template_id TEXT DEFAULT 'default',
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies
-- Users can manage their own sites
CREATE POLICY "Users can manage their own sites" 
ON sites FOR ALL 
USING (auth.uid() = user_id);

-- Public can view published sites (needed for the generated site viewer)
CREATE POLICY "Public can view published sites" 
ON sites FOR SELECT 
USING (is_published = true);

-- 4. Indexes for faster lookup
CREATE INDEX idx_sites_subdomain ON sites(subdomain);
CREATE INDEX idx_sites_user_id ON sites(user_id);

-- 5. Leads Table (For site inquiries)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id), -- Owner of the site
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their site leads" 
ON leads FOR ALL 
USING (auth.uid() = user_id);

CREATE POLICY "Public can submit leads" 
ON leads FOR INSERT 
WITH CHECK (true);

-- 6. Site Stats Table
CREATE TABLE site_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  visit_date DATE DEFAULT CURRENT_DATE,
  view_count INTEGER DEFAULT 1,
  UNIQUE(site_id, visit_date)
);

ALTER TABLE site_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can increment stats" 
ON site_stats FOR ALL 
USING (true);

CREATE POLICY "Users can view their site stats" 
ON site_stats FOR SELECT 
USING (auth.uid() IN (SELECT user_id FROM sites WHERE id = site_id));
