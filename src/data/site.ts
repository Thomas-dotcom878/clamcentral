// ============================================================
//  Site-wide links: the top menu and the footer
// ============================================================
//  Page addresses are kept the same as on the WordPress site,
//  so old links, bookmarks and Google results keep working.
// ============================================================

// Until donations are moved off WordPress, this still points to the
// current donation page on the live site.
export const donateUrl =
  'https://www.clamcentral.com/my/donation/?checkout_id=853135ac-1fc1-420d-857e-d4db00e6beb8';

export const topNav = [
  { label: '3-STEPS', href: '/3-steps-to-lifelong-discipleship-2/' },
  { label: 'NEW TESTAMENT', href: '/clambake-new-testament/' },
  { label: 'OLD TESTAMENT', href: '/clambake-old-testament/' },
  { label: 'DONATE', href: donateUrl },
];

export const footerLinks = [
  { label: 'Resources', href: '/sunday-school-ideas/' },
  { label: 'Object Lesson Files', href: '/links/' },
  { label: 'Object Lessons YouTube', href: 'https://www.youtube.com/@TheObjectLessonsChannel/videos' },
  { label: 'Sunday School YouTube', href: 'https://www.youtube.com/@SundaySchoolIdeas/videos' },
  { label: 'Roadmap', href: '/roadmap-2/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms and Conditions', href: '/terms/' },
  { label: 'Bible Basis', href: '/bible-basis/' },
  { label: 'Donate', href: donateUrl },
  { label: 'Contact Us', href: '/support/' },
];

// ActiveCampaign forms. Each website form sends to one of these.
// The values come from the form's embed code in ActiveCampaign (Website → Forms → Integrate).
export const activeCampaign = {
	action: 'https://clamcentral.activehosted.com/proc.php',
	// "Website Newsletter" form (ActiveCampaign form 3)
	newsletter: { u: '6B077CF411E7D', f: '3', s: '', c: '0', m: '0', act: 'sub', v: '2', or: 'b09bb369-a7fb-432f-80a9-d4c00d6d2852' },
	// iPhone Object Lessons form (form 5) — /your-16-iphone-object-lessons/
	iphone: { u: '6B07B35900B9A', f: '5', s: '', c: '0', m: '0', act: 'sub', v: '2', or: '8edbdd37-de74-4507-9ae5-77578a1edd43' },
	// Kids Ministry Toolbox form (form 7) — /the-kids-ministry-toolbox/
	toolbox: { u: '6B07B3599D59C', f: '7', s: '', c: '0', m: '0', act: 'sub', v: '2', or: '1ea538c2-06f7-499f-8972-b2d8a541bcbe' },
	// Object Lesson Files / weekly links form (form 9) — /links/
	links: { u: '6B07B35A75533', f: '9', s: '', c: '0', m: '0', act: 'sub', v: '2', or: 'edc0a695-bd98-40f1-bbf6-bc0a0c879cc2' },
};
