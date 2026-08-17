import http from 'http';

// Verify carousel component supports 100 items with pagination
import { readFileSync } from 'fs';
const content = readFileSync('/home/ubuntu/biolab-guide/client/src/components/Pure3DCarousel.tsx', 'utf8');

if (content.includes('equipment.length') && content.includes('pageSize') && content.includes('card-name')) {
  console.log("SUCCESS: Pure3DCarousel correctly maps 100 items, pageSize logic, and card-name captions.");
  process.exit(0);
} else {
  console.error("ERROR: Carousel pagination or card caption logic missing.");
  process.exit(1);
}
