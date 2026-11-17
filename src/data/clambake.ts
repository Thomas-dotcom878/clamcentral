// ============================================================
//  CLAMbake lesson download buttons
// ============================================================
//  Each line is one button: [number, title].
//  The download file is found from the number, e.g. lesson 12 of the
//  New Testament -> /all-access/new-testament/clambake-curriculum-12nt.zip
//  To publish a "Coming soon" lesson, change its title and set ready: true.
// ============================================================

export type Lesson = { label: string; href?: string };

const nt = (n: number, title: string, ready = true): Lesson => ({
  label: `${n}: ${title}`,
  href: ready ? `/all-access/new-testament/clambake-curriculum-${n}nt.zip` : undefined,
});
const ot = (n: number, title: string): Lesson => ({
  label: `${n}: ${title}`,
  href: `/all-access/clambake-curriculum-${n}ot.zip`,
});

export const newTestament: Lesson[] = [
  nt(1, 'Jesus is Our Friend'), nt(2, 'Jesus is God'), nt(3, 'Jesus is Great'), nt(4, 'Jesus at 12'), nt(5, 'Review Lesson'),
  nt(6, 'Jesus is Baptized'), nt(7, 'Jesus is Tempted'), nt(8, 'Jesus is Action'), nt(9, 'Jesus Turns the Tables'), nt(10, 'Review Lesson'),
  nt(11, 'Nicodemus'), nt(12, 'Woman at the Well'), nt(13, 'Jesus and the Bible'), nt(14, 'Jesus and the Fish'), nt(15, 'Review Lesson'),
  nt(16, 'Jesus Heals'), nt(17, 'Sermon on the Mount'), nt(18, 'The Lord’s Prayer'), nt(19, 'Pharisees'), nt(20, 'Review Lesson'),
  nt(21, 'The Four Soils'), nt(22, 'Herd of Pigs'), nt(23, 'Walking on Water'), nt(24, 'Not Our Guest'), nt(25, 'Review Lesson'),
  nt(26, 'Who Do YOU Say?'), nt(27, 'Peter Rebukes Jesus'), nt(28, 'Death and Resurrection'), nt(29, 'Road to Emmaus'), nt(30, 'Review Lesson'),
  nt(31, '(Coming soon)', false), nt(32, '(Coming soon)', false), nt(33, '(Coming soon)', false), nt(34, '(Coming soon)', false), nt(35, '(Coming soon)', false),
  nt(36, '(Coming soon)', false), nt(37, '(Coming soon)', false), nt(38, '(Coming soon)', false), nt(39, '(Coming soon)', false), nt(40, '(Coming soon)', false),
];

export const oldTestament: Lesson[] = [
  ot(1, 'God’s BIG Plan'), ot(2, 'Creation'), ot(3, 'Adam and Eve'), ot(4, 'Cain and Abel'), ot(5, 'Review Lesson'),
  ot(6, 'Noah'), ot(7, 'The Tower of Babel'), ot(8, 'Abraham is Called'), ot(9, 'Abraham and Sarah'), ot(10, 'Review Lesson'),
  ot(11, 'Abraham and Isaac'), ot(12, 'Jacob and Esau'), ot(13, 'Joseph the Slave'), ot(14, 'Joseph the Prince'), ot(15, 'Review Lesson'),
  ot(16, 'Moses is Born'), ot(17, 'Moses Murders'), ot(18, 'The Burning Bush'), ot(19, 'The Plagues'), ot(20, 'Review Lesson'),
  ot(21, 'Crossing the Red Sea'), ot(22, 'Desert Grumbling'), ot(23, 'Ten Commandments'), ot(24, 'The Golden Calf'), ot(25, 'Review Lesson'),
  ot(26, 'The Spy Guys'), ot(27, 'The Bronze Snake'), ot(28, 'The Talking Donkey'), ot(29, 'Moses Strikes Out'), ot(30, 'Review Lesson'),
  ot(31, 'Joshua and Jericho'), ot(32, 'Achan and Ai'), ot(33, 'Gideon'), ot(34, 'Samson'), ot(35, 'Review Lesson'),
  ot(36, 'Samuel is Called'), ot(37, 'Samuel and Saul'), ot(38, 'David and Goliath'), ot(39, 'The Witch of Endor'), ot(40, 'Review Lesson'),
  ot(41, 'Bathsheba'), ot(42, 'Solomon'), ot(43, 'Elijah and Baal'), ot(44, 'Jonah'), ot(45, 'Review Lesson'),
  ot(46, 'Daniel Prays'), ot(47, 'Haggai'), ot(48, 'Queen Esther'), ot(49, 'King Josiah'), ot(50, 'Graduation'),
];

export const holidays: Lesson[] = [
  { label: 'CHRISTMAS', href: '/all-access/christmas.zip' },
  { label: 'EASTER', href: '/all-access/easter.zip' },
];
