#!/bin/bash
# deploy.sh — Reverda safe deploy guard
# Kullanım: ./deploy.sh
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo "═══════════════════════════════════════"
echo "  🌱 Reverda Deploy Guard"
echo "═══════════════════════════════════════"
echo ""

# 1. Uncommitted changes kontrolü
echo "🔍 [1/4] Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}❌ Uncommitted changes detected. Aborting.${NC}"
    echo ""
    git status --short
    echo ""
    echo "Önce commit et veya stash yap, sonra tekrar dene."
    exit 1
fi
echo -e "${GREEN}   ✓ Working tree clean${NC}"

# 2. Hangi dosyaların değiştiğini göster
echo ""
echo "🔍 [2/4] Changes since last deploy:"
git diff --stat HEAD~1 2>/dev/null || echo "   (ilk commit)"
echo ""

# 3. Yerel build
echo "🏗️  [3/4] Building..."
npm run build > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed! Fix errors before deploying.${NC}"
    echo "Hataları görmek için: npm run build"
    exit 1
fi
echo -e "${GREEN}   ✓ Build successful${NC}"

# 4. Push onayı
echo ""
echo "═══════════════════════════════════════"
echo -e "${YELLOW}📦 Ready to push to production.${NC}"
echo "═══════════════════════════════════════"
echo ""
read -p "Push to production? (y/n): " confirm
if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
    git push
    echo ""
    echo -e "${GREEN}✅ Pushed to production. Vercel deploy başlatıldı.${NC}"
else
    echo -e "${YELLOW}⏸  Aborted. Değişiklikler local'de kaldı.${NC}"
fi
