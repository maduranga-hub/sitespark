import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Sightengine API Configuration
    // Replace with actual API user and secret from sightengine.com
    const apiUser = process.env.SIGHTENGINE_API_USER || 'placeholder_user';
    const apiSecret = process.env.SIGHTENGINE_API_SECRET || 'placeholder_secret';

    if (apiUser === 'placeholder_user') {
      console.warn('Sightengine API credentials missing. Moderation is in bypass mode.');
      return NextResponse.json({ safe: true, message: 'Bypass mode (No API Key)' });
    }

    const sightengineData = new FormData();
    sightengineData.append('media', image);
    sightengineData.append('models', 'nudity-2.0,wad,offensive'); // Wad = Weapon, Alcohol, Drugs
    sightengineData.append('api_user', apiUser);
    sightengineData.append('api_secret', apiSecret);

    const response = await fetch('https://api.sightengine.com/1.0/check.json', {
      method: 'POST',
      body: sightengineData,
    });

    const result = await response.json();

    if (result.status === 'failure') {
      console.error('Sightengine error:', result.error);
      return NextResponse.json({ error: 'Moderation service failed' }, { status: 500 });
    }

    // Check for inappropriate content
    // Nudity check
    const isNude = result.nudity && (
      result.nudity.sexual_activity > 0.5 || 
      result.nudity.sexual_display > 0.5 || 
      result.nudity.erotica > 0.5
    );

    // Offensive check (includes suggestive)
    const isOffensive = result.offensive && result.offensive.prob > 0.7;

    if (isNude || isOffensive) {
      return NextResponse.json({ 
        safe: false, 
        reason: isNude ? 'Adult content detected' : 'Inappropriate content detected' 
      });
    }

    return NextResponse.json({ safe: true });
  } catch (err: any) {
    console.error('Moderation route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
