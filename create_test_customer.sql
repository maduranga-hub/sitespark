-- Create a test user with a dummy email and a corresponding site with a subdomain
-- Note: This script is intended for use in the Supabase SQL Editor.

DO $$
DECLARE
    new_user_id UUID := '00000000-0000-0000-0000-000000000001';
BEGIN
    -- 1. Create a dummy user in auth.users if it doesn't exist
    -- We use a fixed UUID for testing purposes
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id = new_user_id) THEN
        INSERT INTO auth.users (
            id, 
            email, 
            encrypted_password, 
            email_confirmed_at, 
            raw_app_meta_data, 
            raw_user_meta_data, 
            created_at, 
            updated_at, 
            role, 
            aud
        )
        VALUES (
            new_user_id,
            'test_customer@dummy.com', -- Dummy email
            '$2a$10$vI8A7xvU/jOqGZ3lS6X0yO8/W7n6v8A7xvU/jOqGZ3lS6X0yO8/', -- Placeholder hash for 'Password123!'
            now(),
            '{"provider":"email","providers":["email"]}',
            '{"full_name":"Test Customer"}',
            now(),
            now(),
            'authenticated',
            'authenticated'
        );
        RAISE NOTICE 'Created dummy user with email test_customer@dummy.com';
    ELSE
        RAISE NOTICE 'Dummy user already exists';
    END IF;

    -- 2. Create a test site for this user with a subdomain
    IF NOT EXISTS (SELECT 1 FROM sites WHERE subdomain = 'test-customer') THEN
        INSERT INTO sites (
            user_id,
            name,
            subdomain,
            details,
            is_published
        )
        VALUES (
            new_user_id,
            'Test Customer Site',
            'test-customer', -- Subdomain: test-customer.sitespark.online
            '{"title": "Welcome to SiteSpark Test Site", "description": "This is a dummy customer site for testing subdomains."}'::jsonb,
            true
        );
        RAISE NOTICE 'Created test site with subdomain: test-customer';
    ELSE
        RAISE NOTICE 'Test site with subdomain test-customer already exists';
    END IF;
END $$;
