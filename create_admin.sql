-- SiteSpark Admin Account Creation Script
-- Run this in your Supabase SQL Editor to create the admin account manually.
-- Replace 'SET_YOUR_PASSWORD_HERE' with a strong password.

DO $$
DECLARE
  new_user_id UUID := gen_random_uuid();
  user_email TEXT := 'sinhawap@gmail.com';
  user_password TEXT := 'SET_YOUR_PASSWORD_HERE'; -- CHANGE THIS
BEGIN
  -- Insert into auth.users if not exists
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = user_email) THEN
    INSERT INTO auth.users (
      id, 
      instance_id, 
      email, 
      encrypted_password, 
      email_confirmed_at, 
      raw_app_meta_data, 
      raw_user_meta_data, 
      created_at, 
      updated_at, 
      role, 
      confirmation_token, 
      email_change, 
      email_change_token_new, 
      recovery_token
    )
    VALUES (
      new_user_id,
      '00000000-0000-0000-0000-000000000000',
      user_email,
      crypt(user_password, gen_salt('bf')),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{}',
      now(),
      now(),
      'authenticated',
      '',
      '',
      '',
      ''
    );
    
    RAISE NOTICE 'Admin user % created successfully.', user_email;
  ELSE
    RAISE NOTICE 'User % already exists.', user_email;
  END IF;
END $$;
