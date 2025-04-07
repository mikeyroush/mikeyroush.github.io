// Konami Code detection and Easter Egg hunt
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
let treasureHuntActive = false;
let collectedItems = {
  coffee: 0,
  bourbon: 0,
  bicycle: 0
};

// Total items to find
const TOTAL_ITEMS = {
  coffee: 5,
  bourbon: 5,
  bicycle: 5
};

// Listen for keydown events to detect Konami code
document.addEventListener('keydown', (e) => {
  // Check if the key matches the expected key in the sequence
  if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
    konamiIndex++;
    
    // If the complete sequence is entered
    if (konamiIndex === konamiCode.length) {
      activateTreasureHunt();
      konamiIndex = 0; // Reset for next time
    }
  } else {
    konamiIndex = 0; // Reset on mistake
  }
});

// Function to activate the treasure hunt
function activateTreasureHunt() {
  if (treasureHuntActive) return;
  treasureHuntActive = true;
  
  console.log('🎮 Konami code activated! Treasure hunt mode ON');
  
  // Create treasure hunt UI
  createTreasureHuntUI();
  
  // Generate hidden items throughout the page
  generateHiddenItems();
}

// Create UI for the treasure hunt
function createTreasureHuntUI() {
  const huntUI = document.createElement('div');
  huntUI.id = 'treasure-hunt-ui';
  huntUI.className = 'fixed bottom-4 right-4 bg-[var(--color-bg-secondary)] p-3 rounded-lg shadow-lg z-50 transition-transform duration-300 transform translate-y-0';
  
  // Create counter display
  huntUI.innerHTML = `
    <div class="text-[var(--color-text-primary)] font-medium text-sm mb-2">Treasure Hunt</div>
    <div class="flex space-x-3 text-xs">
      <div class="flex items-center">
        <span>☕</span>
        <span id="coffee-count" class="ml-1">0/${TOTAL_ITEMS.coffee}</span>
      </div>
      <div class="flex items-center">
        <span>🥃</span>
        <span id="bourbon-count" class="ml-1">0/${TOTAL_ITEMS.bourbon}</span>
      </div>
      <div class="flex items-center">
        <span>🚲</span>
        <span id="bicycle-count" class="ml-1">0/${TOTAL_ITEMS.bicycle}</span>
      </div>
    </div>
  `;
  
  document.body.appendChild(huntUI);
}

// Generate hidden items throughout the page
function generateHiddenItems() {
  const treasureItems = [
    { type: 'coffee', emoji: '☕', count: TOTAL_ITEMS.coffee },
    { type: 'bourbon', emoji: '🥃', count: TOTAL_ITEMS.bourbon },
    { type: 'bicycle', emoji: '🚲', count: TOTAL_ITEMS.bicycle }
  ];
  
  // Get all available sections to place items in
  const sections = document.querySelectorAll('section');
  if (sections.length === 0) return;
  
  // Place items in random positions within each section
  treasureItems.forEach(item => {
    for (let i = 0; i < item.count; i++) {
      const randomSection = sections[Math.floor(Math.random() * sections.length)];
      
      // Create the item element
      const treasureItem = document.createElement('div');
      treasureItem.className = `hidden-treasure ${item.type} absolute transition-opacity duration-300 opacity-0 cursor-pointer hover:scale-125 transform transition-transform`;
      treasureItem.style.left = `${Math.random() * 80 + 10}%`; // Random position (10% to 90%)
      treasureItem.style.top = `${Math.random() * 80 + 10}%`;  // Random position (10% to 90%)
      treasureItem.innerHTML = item.emoji;
      treasureItem.style.fontSize = '24px';
      treasureItem.style.zIndex = '40';
      
      // Make the section position relative if it's not already
      if (window.getComputedStyle(randomSection).position === 'static') {
        randomSection.style.position = 'relative';
      }
      
      // Add click handler to collect the item
      treasureItem.addEventListener('click', () => collectItem(treasureItem, item.type));
      
      // Add to the page and make visible
      randomSection.appendChild(treasureItem);
      setTimeout(() => {
        treasureItem.classList.add('opacity-100');
      }, Math.random() * 1000); // Staggered appearance
    }
  });
}

// Function to collect an item when clicked
function collectItem(element, type) {
  // Update counter
  collectedItems[type]++;
  
  // Update UI
  const countElement = document.getElementById(`${type}-count`);
  if (countElement) {
    countElement.textContent = `${collectedItems[type]}/${TOTAL_ITEMS[type]}`;
  }
  
  // Remove the item with an effect
  element.classList.add('opacity-0', 'scale-150');
  setTimeout(() => {
    element.remove();
  }, 300);
  
  // Check if all items have been collected
  checkCompletion();
}

// Check if all items have been collected
function checkCompletion() {
  const totalCollected = collectedItems.coffee + collectedItems.bourbon + collectedItems.bicycle;
  const totalItems = TOTAL_ITEMS.coffee + TOTAL_ITEMS.bourbon + TOTAL_ITEMS.bicycle;
  
  if (totalCollected === totalItems) {
    showCongratulations();
  }
}

// Show congratulations message
function showCongratulations() {
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50';
  
  modal.innerHTML = `
    <div class="bg-[var(--color-bg-primary)] p-6 rounded-lg shadow-xl max-w-md mx-4 text-center">
      <h3 class="text-2xl font-bold mb-4 text-[var(--color-accent)]">🎉 Congratulations! 🎉</h3>
      <p class="mb-4 text-[var(--color-text-primary)]">You've found all the hidden treasures!</p>
      <p class="mb-4 text-[var(--color-text-primary)]">Thanks for exploring my website so thoroughly.</p>
      <button id="close-congrats" class="btn-primary">Close</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add close handler
  document.getElementById('close-congrats').addEventListener('click', () => {
    modal.remove();
    resetTreasureHunt();
  });
}

// Reset the treasure hunt
function resetTreasureHunt() {
  treasureHuntActive = false;
  collectedItems = { coffee: 0, bourbon: 0, bicycle: 0 };
  
  // Remove UI
  const huntUI = document.getElementById('treasure-hunt-ui');
  if (huntUI) {
    huntUI.remove();
  }
  
  // Remove any remaining items
  const items = document.querySelectorAll('.hidden-treasure');
  items.forEach(item => item.remove());
}

// Subtle hint in console
console.log('Hint: Some treasures might be revealed with a classic gaming code...');