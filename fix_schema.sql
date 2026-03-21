-- Fix for 'template_id' column missing error
-- Run this in your Supabase SQL Editor

ALTER TABLE sites 
ADD COLUMN IF NOT EXISTS template_id TEXT DEFAULT 'modern';

-- Also ensure other expected columns are present if this is an older schema
ALTER TABLE sites 
ADD COLUMN IF NOT EXISTS custom_domain TEXT UNIQUE;

COMMENT ON COLUMN sites.template_id IS 'Current active template for the site';
