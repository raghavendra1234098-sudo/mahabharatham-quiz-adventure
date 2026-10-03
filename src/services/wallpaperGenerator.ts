import { CharacterReward } from '../types/game';

/**
 * High-definition (1080x1920) Wallpaper Generator using HTML5 Canvas.
 * Generates an aesthetic, Indian-heritage themed, mobile-ready character wallpaper
 * complete with royal gold borders, lotus motifs, character attributes, and Sanskrit shlokas.
 */
export function generateCharacterWallpaper(character: CharacterReward): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const w = canvas.width;
  const h = canvas.height;

  // 1. Rich Royal Background Gradient
  const bgGrad = ctx.createRadialGradient(w / 2, h * 0.4, 80, w / 2, h / 2, h * 0.85);
  if (character.id === 'krishna') {
    bgGrad.addColorStop(0, '#0c2461');
    bgGrad.addColorStop(0.4, '#1e3799');
    bgGrad.addColorStop(0.8, '#0a1024');
    bgGrad.addColorStop(1, '#050711');
  } else if (character.id === 'draupadi') {
    bgGrad.addColorStop(0, '#590d22');
    bgGrad.addColorStop(0.4, '#800f2f');
    bgGrad.addColorStop(0.8, '#2b0913');
    bgGrad.addColorStop(1, '#080205');
  } else if (character.id === 'arjuna') {
    bgGrad.addColorStop(0, '#2e1065');
    bgGrad.addColorStop(0.4, '#3b0764');
    bgGrad.addColorStop(0.8, '#17042a');
    bgGrad.addColorStop(1, '#080112');
  } else if (character.id === 'bhima') {
    bgGrad.addColorStop(0, '#064e3b');
    bgGrad.addColorStop(0.4, '#065f46');
    bgGrad.addColorStop(0.8, '#022c22');
    bgGrad.addColorStop(1, '#01130e');
  } else if (character.id === 'karna') {
    bgGrad.addColorStop(0, '#78350f');
    bgGrad.addColorStop(0.4, '#92400e');
    bgGrad.addColorStop(0.8, '#3d1604');
    bgGrad.addColorStop(1, '#110501');
  } else {
    // Default Royal Saffron / Gold
    bgGrad.addColorStop(0, '#361e05');
    bgGrad.addColorStop(0.4, '#241403');
    bgGrad.addColorStop(0.8, '#130a01');
    bgGrad.addColorStop(1, '#080400');
  }
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Celestial Dust & Sacred Stars
  ctx.fillStyle = 'rgba(255, 235, 175, 0.45)';
  for (let i = 0; i < 120; i++) {
    const sx = Math.sin(i * 99) * w * 0.5 + w * 0.5;
    const sy = Math.cos(i * 47) * h * 0.5 + h * 0.5;
    const sSize = (i % 3) + 1.2;
    ctx.beginPath();
    ctx.arc(sx, sy, sSize, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Sacred Mandala Halo in Center
  ctx.save();
  ctx.translate(w / 2, h * 0.38);
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 260, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
  ctx.beginPath();
  ctx.arc(0, 0, 310, 0, Math.PI * 2);
  ctx.stroke();

  // Ray Spokes of the Mandala
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  ctx.lineWidth = 2;
  for (let a = 0; a < 36; a++) {
    const angle = (a * 10 * Math.PI) / 180;
    const r1 = 260;
    const r2 = 300;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
    ctx.lineTo(Math.cos(angle) * r2, Math.sin(angle) * r2);
    ctx.stroke();
  }
  ctx.restore();

  // 4. Royal Triple Gold Heritage Borders
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 8;
  ctx.strokeRect(40, 40, w - 80, h - 80);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
  ctx.lineWidth = 2;
  ctx.strokeRect(55, 55, w - 110, h - 110);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(70, 70, w - 140, h - 140);

  // 5. Four Corner Lotus Motifs
  const drawCornerLotus = (cx: number, cy: number, rot: number) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.strokeStyle = '#d4af37';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(45, 10, 55, 55);
    ctx.quadraticCurveTo(10, 45, 0, 0);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };
  drawCornerLotus(70, 70, 0);
  drawCornerLotus(w - 70, 70, Math.PI / 2);
  drawCornerLotus(w - 70, h - 70, Math.PI);
  drawCornerLotus(70, h - 70, -Math.PI / 2);

  // 6. Header: "MAHABHARATHAM" & "EPIC CHARACTER CARD"
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f6e05e';
  ctx.font = '600 28px "Cinzel", Georgia, serif';
  ctx.fillText('• ॐ • MAHABHARATHAM QUIZ ADVENTURE • ॐ •', w / 2, 130);

  ctx.fillStyle = 'rgba(255, 235, 175, 0.7)';
  ctx.font = '400 24px "Cinzel", Georgia, serif';
  ctx.fillText(`STORY PART ${character.storyPart} REWARD COLLECTIBLE`, w / 2, 175);

  // 7. Large Center Character Icon Emblem & Glowing Circle
  const glow = ctx.createRadialGradient(w / 2, h * 0.38, 50, w / 2, h * 0.38, 240);
  glow.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(w / 2, h * 0.38, 240, 0, Math.PI * 2);
  ctx.fill();

  // Character Icon Emoji
  ctx.font = '160px sans-serif';
  ctx.fillText(character.silhouetteIcon, w / 2, h * 0.43);

  // 8. Sanskrit Name
  ctx.fillStyle = '#ffd700';
  ctx.font = '700 48px "Cinzel", Georgia, serif';
  ctx.fillText(character.sanskritName, w / 2, h * 0.58);

  // 9. English Name
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 62px "Cinzel", Georgia, serif';
  ctx.fillText(character.name.toUpperCase(), w / 2, h * 0.63);

  // Decorative Golden Line
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 200, h * 0.655);
  ctx.lineTo(w / 2 + 200, h * 0.655);
  ctx.stroke();

  // Diamond in center of line
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(w / 2, h * 0.655, 8, 0, Math.PI * 2);
  ctx.fill();

  // 10. Title / Epithet
  ctx.fillStyle = '#f6e05e';
  ctx.font = '600 32px "Cinzel", Georgia, serif';
  ctx.fillText(character.title, w / 2, h * 0.69);

  // 11. Divine Attribute / Weapon
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Sacred Weapon: ${character.weaponOrSymbol}`, w / 2, h * 0.735);

  // 12. Character Timeless Quote Box
  const quoteY = h * 0.79;
  ctx.fillStyle = 'rgba(10, 15, 30, 0.75)';
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
  ctx.lineWidth = 2;
  const boxW = 860;
  const boxH = 140;
  ctx.beginPath();
  ctx.roundRect(w / 2 - boxW / 2, quoteY, boxW, boxH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#fef08a';
  ctx.font = 'italic 500 28px "Cinzel", Georgia, serif';
  
  // Wrap quote if needed
  const words = character.quote.split(' ');
  let line = '';
  let y = quoteY + 60;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 780 && n > 0) {
      ctx.fillText(line, w / 2, y);
      line = words[n] + ' ';
      y += 40;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, w / 2, y);

  // 13. Footer: Motto of Dharma
  ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
  ctx.font = '600 26px "Cinzel", Georgia, serif';
  ctx.fillText('यतो धर्मस्ततो जयः • WHERE THERE IS DHARMA, THERE IS VICTORY', w / 2, h - 90);

  return canvas.toDataURL('image/png');
}

/**
 * Triggers instant download of the rendered wallpaper
 */
export function downloadWallpaper(character: CharacterReward) {
  const dataUrl = generateCharacterWallpaper(character);
  const link = document.createElement('a');
  link.download = `Mahabharatam_${character.name.replace(/\s+/g, '_')}_Wallpaper.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
