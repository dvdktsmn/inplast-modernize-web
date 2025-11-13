// Temporary script to convert .png to .webp references
const fs = require('fs');

const files = [
  'src/components/services/ServiceData.ts',
  'src/components/projects/ProjectData.ts',
  'src/components/featured-projects/ProjectsData.ts'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const updated = content.replaceAll('.png', '.webp');
  fs.writeFileSync(file, updated);
  console.log(`Updated ${file}`);
});

console.log('Done!');
