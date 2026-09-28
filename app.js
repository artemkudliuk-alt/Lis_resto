// LIS RESTAURANT & LOUNGE (RIBAS KARPATY)
// Interactive Mobile Video-Menu Application

  // ==========================================================================
  // DATA MODEL: MENU CATEGORIES & DISHES
  // ==========================================================================

  const MENU_CATEGORIES = [
    { id: 'all', name: 'FULL MENU', icon: '🍽️', desc: 'Complete catalog of LIS dishes and signature drinks' },
    { id: 'hosper', name: 'JOSPER', icon: '🔥', desc: 'Signature dishes from the closed charcoal oven on natural Carpathian charcoal (350°C)' },
    { id: 'cocktails', name: 'COCKTAILS', icon: '🍸', desc: 'Signature and classic cocktails by our head bartender' },
    { id: 'kitchen', name: 'KITCHEN', icon: '🥘', desc: 'Authentic Carpathian and European dishes' },
    { id: 'starters', name: 'STARTERS', icon: '🥗', desc: 'Light bites and starters for the perfect start to the evening' },
    { id: 'nalyvky', name: 'LIQUEURS', icon: '🍷', desc: 'Craft Carpathian liqueurs and spirits' }
  ];

  const MENU_ITEMS = [
    {
      id: 'burger-lis',
      categoryId: 'hosper',
      name: 'LIS Signature Burger with Caramelized Onions',
      price: 530,
      weight: '450 g',
      hasVideo: true,
      videoUrl: 'assets/videos/burger_.mp4',
      posterUrl: 'assets/images/burger_poster.jpg?v=5',
      shortDesc: 'Juicy Josper charcoal-grilled beef patty, slow-cooked caramelized onions, cheddar, crispy dippers and sauces.',
      composition: '100% premium beef grilled over live wood charcoal in a closed Josper oven (350°C), slow-cooked caramelized onions in amber glaze, melted cheddar, a warm golden brioche bun, crispy potato dippers, signature BBQ sauce and house-made truffle mayo.',
      allergens: ['Gluten', 'Lactose', 'Mustard', 'Sesame'],
      nutrition: { kcal: 840, protein: '42 g', fat: '48 g', carbs: '62 g' },
      tags: ['hit', 'chef', 'video'],
      likes: 248
    },
    {
      id: 'negroni',
      categoryId: 'cocktails',
      name: 'Negroni',
      price: 350,
      weight: '150 ml',
      hasVideo: true,

      videoUrl: 'assets/videos/Negroni.mp4',
      posterUrl: 'assets/images/negroni_poster.jpg?v=5',
      shortDesc: 'Premium Gordon\'s London Dry gin, Cinzano Rosso vermouth, Campari bitter, a solid ice cube and orange zest.',
      composition: 'An iconic classic aperitif: Gordon\'s London Dry gin, fine Italian red vermouth Cinzano Rosso, bittersweet Campari, a crystal-clear hand-cut ice cube with no air bubbles and fresh oils from an orange twist.',
      allergens: ['Sulfites', 'Citrus'],
      nutrition: { kcal: 195, protein: '0 g', fat: '0 g', carbs: '12 g' },
      tags: ['hit', 'chef', 'video'],
      likes: 189
    },
    {
      id: 'aperol-spritz',
      categoryId: 'cocktails',
      name: 'Aperol Spritz',
      price: 310,
      weight: '255 ml',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/aperol_spritz.jpg?v=5',
      shortDesc: 'A light, sparkling cocktail with Aperol, Prosecco, soda and fresh orange.',
      composition: 'Original Italian Aperol Aperitivo, dry sparkling Prosecco, mountain soda, freshly squeezed orange juice, a slice of juicy orange, solid ice.',
      allergens: ['Sulfites', 'Citrus'],
      nutrition: { kcal: 160, protein: '0 g', fat: '0 g', carbs: '14 g' },
      tags: ['hit'],
      likes: 142
    },
    {
      id: 'clover-club',
      categoryId: 'cocktails',
      name: 'Clover Club',
      price: 300,
      weight: '120 ml',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/clover_club.jpg?v=5',
      shortDesc: 'An elegant raspberry cocktail with Gordon\'s gin, fresh lemon juice and velvety foam.',
      composition: 'Gordon\'s London Dry gin, fresh raspberry purée, fresh lemon juice, sugar syrup, silky whipped foam and fresh wild raspberries with mint.',
      allergens: ['Egg white'],
      nutrition: { kcal: 175, protein: '2 g', fat: '0 g', carbs: '16 g' },
      tags: ['chef'],
      likes: 115
    },
    {
      id: 'old-fashioned',
      categoryId: 'cocktails',
      name: 'Old Fashioned',
      price: 300,
      weight: '150 ml',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/old_fashioned.jpg?v=5',
      shortDesc: 'American bourbon Wild Turkey 101, Angostura bitters, cane sugar and oak smoke.',
      composition: 'Aged high-proof Wild Turkey 101 bourbon, dashes of aromatic Angostura bitters, Demerara cane syrup, a Sicilian orange peel spiral, served under a cloche with oak-chip smoke.',
      allergens: ['Citrus'],
      nutrition: { kcal: 210, protein: '0 g', fat: '0 g', carbs: '8 g' },
      tags: ['hit'],
      likes: 97
    },
    {
      id: 'whisky-sour',
      categoryId: 'cocktails',
      name: 'Whisky Sour',
      price: 310,
      weight: '180 ml',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/whisky_sour.jpg?v=5',
      shortDesc: 'Rich Jim Beam bourbon paired with fresh lemon juice and Angostura bitters.',
      composition: 'Jim Beam bourbon, freshly squeezed lemon juice, cane sugar syrup, aromatic Angostura bitters, a maraschino cherry and an orange twist.',
      allergens: ['Citrus'],
      nutrition: { kcal: 185, protein: '0 g', fat: '0 g', carbs: '11 g' },
      tags: [],
      likes: 83
    },
    {
      id: 'pornstar',
      categoryId: 'cocktails',
      name: 'PornStar Martini',
      price: 320,
      weight: '180 ml',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/pornstar.jpg?v=5',
      shortDesc: 'Absolut vanilla vodka, passion fruit, mango, fresh lemon juice and a shot of chilled Prosecco.',
      composition: 'Smooth Absolut Vanilla vodka, natural passion fruit pulp and ripe mango purée, fresh lemon juice, a flamed passion fruit half, served with a separate chilled shot of sparkling Prosecco.',
      allergens: ['Sulfites'],
      nutrition: { kcal: 230, protein: '1 g', fat: '0 g', carbs: '22 g' },
      tags: ['hit'],
      likes: 165
    },
    {
      id: 'banosh',
      categoryId: 'kitchen',
      name: 'Hutsul Banosh with Brynza and Porcini',
      price: 290,
      weight: '320 g',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/banosh.jpg?v=5',
      shortDesc: 'Traditional cornmeal porridge cooked in homemade sour cream with sheep brynza cheese, porcini mushrooms and cracklings.',
      composition: 'Fine cornmeal slow-cooked in a cast-iron pot with homemade sour cream and cream, aged Carpathian sheep brynza, Carpathian porcini sautéed in butter, golden cracklings and fresh dill.',
      allergens: ['Lactose'],
      nutrition: { kcal: 620, protein: '18 g', fat: '44 g', carbs: '46 g' },
      tags: ['hit', 'chef'],
      likes: 210
    },
    {
      id: 'deruni',
      categoryId: 'kitchen',
      name: 'Potato Pancakes with Sour Cream and Porcini',
      price: 280,
      weight: '300 g',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/deruni_smetana_griby.jpg?v=5',
      shortDesc: 'Crispy potato pancakes with a creamy Carpathian porcini sauce.',
      composition: 'Select young potatoes, onion, egg, a golden crust, a delicate cream and sour cream sauce with Carpathian porcini, fresh parsley.',
      allergens: ['Lactose', 'Gluten', 'Eggs'],
      nutrition: { kcal: 490, protein: '12 g', fat: '32 g', carbs: '42 g' },
      tags: ['hit'],
      likes: 176
    },
    {
      id: 'duck-leg',
      categoryId: 'kitchen',
      name: 'Duck Leg Confit with Apple Purée',
      price: 480,
      weight: '350 g',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/duck_leg_original.jpg?v=5',
      shortDesc: 'Tender slow-cooked duck leg with baked apple purée and berry sauce.',
      composition: 'Farm duck leg confit, slow-cooked at low temperature, velvety purée of baked Carpathian apples with cinnamon, rich demi-glace with wild blackberries and thyme.',
      allergens: [],
      nutrition: { kcal: 580, protein: '36 g', fat: '38 g', carbs: '24 g' },
      tags: ['chef'],
      likes: 134
    },
    {
      id: 'turkey-cutlet',
      categoryId: 'kitchen',
      name: 'Turkey Cutlet with Creamy Mashed Potatoes',
      price: 340,
      weight: '320 g',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/kotleta_induk.jpg?v=5',
      shortDesc: 'Juicy steamed turkey fillet cutlet, smooth mash and green pea sauce.',
      composition: 'Minced turkey fillet, butter, fluffy cream mashed potatoes, sweet young pea cream sauce, microgreens.',
      allergens: ['Lactose', 'Gluten'],
      nutrition: { kcal: 430, protein: '32 g', fat: '20 g', carbs: '34 g' },
      tags: [],
      likes: 92
    }
  ];

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================

  let currentCategory = 'all';
  let searchQuery = '';
  let activeDishIndex = 0;
  let isMuted = true;
  let videoDishes = MENU_ITEMS.filter(item => item.hasVideo);

  // DOM Elements
  const categoriesScrollTrack = document.getElementById('categories-scroll-track');
  const dishesContainer = document.getElementById('dishes-container');
  const categoryTitle = document.getElementById('category-title');
  const itemsCounter = document.getElementById('items-counter');
  const searchBar = document.getElementById('search-bar');
  const searchInput = document.getElementById('dish-search-input');
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  // Modal Elements
  const videoModal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const videoLoader = document.getElementById('video-loader');
  const closeModalBtn = document.getElementById('close-video-modal');
  const modalCategoryBadge = document.getElementById('modal-category-badge');
  const modalTags = document.getElementById('modal-tags');
  const modalDishTitle = document.getElementById('modal-dish-title');
  const modalDishPrice = document.getElementById('modal-dish-price');
  const modalDishWeight = document.getElementById('modal-dish-weight');
  const modalDishShortDesc = document.getElementById('modal-dish-short-desc');
  const likeDishBtn = document.getElementById('like-dish-btn');
  const likeCount = document.getElementById('like-count');
  const overlayTapTarget = document.getElementById('overlay-tap-target');


  // Drawer Elements
  const compositionDrawer = document.getElementById('composition-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const videoBottomOverlay = document.getElementById('video-bottom-overlay');
  const expandHintBtn = document.getElementById('expand-hint-btn');
  const infoDrawerBtn = document.getElementById('info-drawer-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerDishName = document.getElementById('drawer-dish-name');
  const drawerComposition = document.getElementById('drawer-composition');
  const drawerAllergens = document.getElementById('drawer-allergens');
  const drawerNutrition = document.getElementById('drawer-nutrition');


  // Toast
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  const callWaiterBtn = document.getElementById('call-waiter-btn');
  const openStoriesBtn = document.getElementById('open-video-stories-btn');

  // ==========================================================================
  // INITIALIZATION & PRELOADER
  // ==========================================================================

  function init() {
    renderCategories();
    renderDishes();
    setupEventListeners();
    handleAppPreloader();
  }

  function handleAppPreloader() {
    const preloader = document.getElementById('app-preloader');
    const progressBar = document.getElementById('preloader-progress-bar');
    const percentageText = document.getElementById('preloader-percentage');
    if (!preloader) return;

    let progress = 18;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 12;
      if (progress >= 95) {
        progress = 95;
        clearInterval(progressInterval);
      }
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (percentageText) percentageText.innerText = `${progress}%`;
    }, 100);

    // Preload top key assets (burger video, negroni video, posters)
    const preloadItems = MENU_ITEMS.slice(0, 4);
    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= preloadItems.length || progress >= 90) {
        clearInterval(progressInterval);
        if (progressBar) progressBar.style.width = '100%';
        if (percentageText) percentageText.innerText = '100%';
        
        setTimeout(() => {
          preloader.classList.add('fade-out');
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }, 250);
      }
    };


    preloadItems.forEach(item => {
      const img = new Image();
      img.src = item.posterUrl;
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;

      if (item.hasVideo && item.videoUrl) {
        const vid = document.createElement('video');
        vid.preload = 'auto';
        vid.src = item.videoUrl;
      }
    });

    // Fallback safety timeout (maximum 1.2s splash)
    setTimeout(() => {
      if (preloader && !preloader.classList.contains('fade-out')) {
        clearInterval(progressInterval);
        if (progressBar) progressBar.style.width = '100%';
        preloader.classList.add('fade-out');
        setTimeout(() => { preloader.style.display = 'none'; }, 550);
      }
    }, 1200);
  }

  // Preload adjacent video assets for seamless vertical TikTok/Reels feed scrolling
  function preloadAdjacentVideos(currentIndex) {
    const nextIdx = (currentIndex + 1) % MENU_ITEMS.length;
    const prevIdx = (currentIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;

    [MENU_ITEMS[nextIdx], MENU_ITEMS[prevIdx]].forEach(item => {
      if (!item) return;
      if (item.hasVideo && item.videoUrl) {
        const preloaderVid = document.createElement('video');
        preloaderVid.preload = 'auto';
        preloaderVid.src = item.videoUrl;
      }
      if (item.posterUrl) {
        const preloaderImg = new Image();
        preloaderImg.src = item.posterUrl;
      }
    });
  }


  // ==========================================================================
  // RENDER FUNCTIONS: SINGLE-ROW SCROLLABLE CATEGORIES
  // ==========================================================================

  function renderCategories() {
    categoriesScrollTrack.innerHTML = MENU_CATEGORIES.map(cat => {
      const count = cat.id === 'all' 
        ? MENU_ITEMS.length 
        : MENU_ITEMS.filter(d => d.categoryId === cat.id).length;

      return `
        <button class="category-pill-btn ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
          <span class="pill-icon">${cat.icon}</span>
          <span class="pill-title">${cat.name}</span>
          <span class="pill-badge">${count}</span>
        </button>
      `;
    }).join('');
  }

  // ==========================================================================
  // RENDER FUNCTIONS: COMPACT 2-COLUMN DISH GRID
  // ==========================================================================

  function renderDishes() {
    let filtered = MENU_ITEMS;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(d => d.categoryId === currentCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.composition.toLowerCase().includes(q) ||
        d.shortDesc.toLowerCase().includes(q)
      );
    }

    // Update section title & counter
    const activeCatObj = MENU_CATEGORIES.find(c => c.id === currentCategory) || MENU_CATEGORIES[0];
    categoryTitle.innerText = activeCatObj.name;
    itemsCounter.innerText = `${filtered.length} ${getWordEnding(filtered.length)}`;

    if (filtered.length === 0) {
      dishesContainer.innerHTML = `
        <div style="grid-column: span 2; text-align: center; padding: 40px 20px; color: #8D98AE;">
          <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
          <h3 style="font-family: var(--font-brand); color: var(--color-primary-navy);">Nothing found</h3>
          <p style="font-size: 13px; margin-top: 4px;">Try a different search or pick another category</p>
        </div>
      `;
      return;
    }

    dishesContainer.innerHTML = filtered.map((dish, index) => {
      const hitBadge = dish.tags.includes('hit') ? `<span class="dish-tag hit">🔥 HIT</span>` : '';
      const chefBadge = dish.tags.includes('chef') ? `<span class="dish-tag chef">👑 CHEF</span>` : '';
      
      const mediaHtml = dish.hasVideo ? `
        <img src="${dish.posterUrl}" alt="${dish.name}" loading="lazy">
        <div class="card-play-overlay">
          <div class="play-circle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
        <div class="floating-price-tag">${dish.price} ₴</div>
      ` : `
        <img src="${dish.posterUrl}" alt="${dish.name}" loading="lazy">
        <div class="floating-price-tag">${dish.price} ₴</div>
      `;

      return `
        <article class="dish-card" data-dish-id="${dish.id}" style="animation-delay: ${index * 45}ms;">
          <div class="dish-media">
            ${mediaHtml}
          </div>
          <div class="dish-info">
            <h3 class="dish-title">${dish.name}</h3>
            <div class="dish-footer-row">
              <div class="dish-meta-tags">
                ${hitBadge || chefBadge || `<span class="dish-weight">${dish.weight}</span>`}
              </div>
              ${(hitBadge || chefBadge) ? `<span class="dish-weight">${dish.weight}</span>` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }


  function getWordEnding(num) {
    return num === 1 ? 'dish' : 'dishes';
  }

  // ==========================================================================
  // FULLSCREEN MEDIA MODAL CONTROLLER (FOR ALL DISHES: VIDEO & PHOTO PREVIEW)
  // ==========================================================================

  const modalPhotoContainer = document.getElementById('modal-photo-container');
  const modalPhotoImg = document.getElementById('modal-photo-img');

  function openVideoModal(dishId) {
    const dishIndex = MENU_ITEMS.findIndex(d => d.id === dishId);
    if (dishIndex !== -1) {
      activeDishIndex = dishIndex;
    } else {
      activeDishIndex = 0;
    }
    loadActiveVideoDish();
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function loadActiveVideoDish() {
    const dish = MENU_ITEMS[activeDishIndex];
    if (!dish) return;

    // Reset UI states
    closeDrawer();
    likeDishBtn.classList.remove('liked');

    if (dish.hasVideo) {
      // VIDEO MODE
      modalPhotoContainer.classList.add('hidden');
      modalVideo.classList.remove('hidden');
      videoLoader.classList.add('active');

      modalVideo.src = dish.videoUrl;
      modalVideo.poster = dish.posterUrl;
      modalVideo.muted = true;

      modalVideo.play().then(() => {
        videoLoader.classList.remove('active');
      }).catch(err => {
        console.log('Autoplay fallback:', err);
        modalVideo.muted = true;
        modalVideo.play();
        videoLoader.classList.remove('active');
      });
    } else {
      // PHOTO PREVIEW MODE (FOR ITEMS WITHOUT VIDEO YET)
      modalVideo.pause();
      modalVideo.classList.add('hidden');
      modalPhotoContainer.classList.remove('hidden');
      videoLoader.classList.remove('active');

      modalPhotoImg.src = dish.posterUrl;
      modalPhotoImg.alt = dish.name;
    }


    // Update overlay content
    const cat = MENU_CATEGORIES.find(c => c.id === dish.categoryId);
    modalCategoryBadge.innerText = cat ? cat.name : 'LIS';

    modalTags.innerHTML = `
      ${dish.tags.includes('hit') ? '<span class="tag-badge hit">🔥 Hit</span>' : ''}
      ${dish.tags.includes('chef') ? '<span class="tag-badge chef">👑 Chef\'s Choice</span>' : ''}
    `;


    modalDishTitle.innerText = dish.name;
    modalDishPrice.innerText = `${dish.price} ₴`;
    modalDishWeight.innerText = dish.weight;
    modalDishShortDesc.innerText = dish.shortDesc;
    likeCount.innerText = dish.likes;

    // Update drawer info (Ingredients, Allergens, Nutrition)
    drawerDishName.innerText = dish.name;
    drawerComposition.innerText = dish.composition;
    drawerAllergens.innerHTML = dish.allergens.map(a => `<span class="allergen-pill">${a}</span>`).join('');
    
    if (dish.nutrition) {
      drawerNutrition.innerHTML = `
        <div class="nutrition-item"><span class="val">${dish.nutrition.kcal}</span><span class="lbl">kcal</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.protein}</span><span class="lbl">protein</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.fat}</span><span class="lbl">fat</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.carbs}</span><span class="lbl">carbs</span></div>
      `;
    }

    // Preload next and prev video streams for instant vertical swipe
    preloadAdjacentVideos(activeDishIndex);
  }


  function closeVideoModal() {
    videoModal.classList.remove('active');
    modalVideo.pause();
    document.body.style.overflow = '';
    closeDrawer();
  }

  function nextVideoDish() {
    activeDishIndex = (activeDishIndex + 1) % MENU_ITEMS.length;
    loadActiveVideoDish();
  }

  function prevVideoDish() {
    activeDishIndex = (activeDishIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;
    loadActiveVideoDish();
  }


  // ==========================================================================
  // COMPOSITION DRAWER (FROSTED GLASS OVERLAY)
  // ==========================================================================

  function openDrawer() {
    const drawer = document.getElementById('composition-drawer');
    const overlay = document.getElementById('video-bottom-overlay');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('drawer-open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeDrawer() {
    const drawer = document.getElementById('composition-drawer');
    const overlay = document.getElementById('video-bottom-overlay');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('drawer-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;



  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================

  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toastText.innerText = message;
    toast.classList.add('active');
    toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, 2800);
  }

  // Delight: Floating Heart Burst Particle Explosion
  function triggerHeartBurst(clientX, clientY) {
    const hearts = ['❤️', '💖', '✨', '🔥', '🌸'];
    const count = 7;
    const posX = clientX || window.innerWidth / 2;
    const posY = clientY || window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'heart-burst-particle';
      el.innerText = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.left = `${posX}px`;
      el.style.top = `${posY}px`;
      
      const randX = (Math.random() - 0.5) * 120;
      const randRot = (Math.random() - 0.5) * 60;
      el.style.setProperty('--rand-x', `${randX}px`);
      el.style.setProperty('--rand-rot', `${randRot}deg`);
      el.style.fontSize = `${Math.floor(Math.random() * 16) + 24}px`;
      el.style.animationDelay = `${i * 35}ms`;

      document.body.appendChild(el);
      setTimeout(() => {
        el.remove();
      }, 1000);
    }
  }

  // Single-Row Categories Drag-to-Scroll & Mouse Wheel Translation Engine
  function setupCategoriesScrollEngine() {
    const container = document.getElementById('categories-scroll-container');
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasDragged = false;

    // Mouse Drag support for desktop
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      hasDragged = false;
      container.classList.add('is-dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        container.classList.remove('is-dragging');
      }
    });

    window.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        container.classList.remove('is-dragging');
      }
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      if (Math.abs(walk) > 5) {
        hasDragged = true;
      }
      container.scrollLeft = scrollLeft - walk;
    });

    // Horizontal Mouse Wheel Scroll translation
    container.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 0.9;
      }
    }, { passive: false });

    // Category click handler (distinguish drag from click)
    categoriesScrollTrack.addEventListener('click', (e) => {
      if (hasDragged) {
        hasDragged = false;
        return;
      }
      const btn = e.target.closest('.category-pill-btn');
      if (!btn) return;
      currentCategory = btn.dataset.category;
      renderCategories();
      renderDishes();

      // Smoothly center the newly active pill in view
      const activePill = categoriesScrollTrack.querySelector(`[data-category="${currentCategory}"]`);
      if (activePill) {
        activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  // ==========================================================================
  // EVENT LISTENERS & TOUCH GESTURES
  // ==========================================================================


  function setupEventListeners() {
    // Single-Row Scrollable Categories: Drag-to-Scroll + Mouse Wheel + Click Centering
    setupCategoriesScrollEngine();



    // Search Toggle
    searchToggleBtn.addEventListener('click', () => {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        searchInput.focus();
      } else {
        searchQuery = '';
        searchInput.value = '';
        renderDishes();
      }
    });

    // Search Input
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderDishes();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      searchInput.value = '';
      renderDishes();
      searchInput.focus();
    });

    // Dish Card Clicks -> Open Fullscreen Media Modal for ALL dishes
    dishesContainer.addEventListener('click', e => {
      const card = e.target.closest('.dish-card');
      if (!card) return;
      const dishId = card.dataset.dishId;
      openVideoModal(dishId);
    });

    // Modal Controls
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeVideoModal);


    // Like Button
    likeDishBtn.addEventListener('click', () => {
      const dish = MENU_ITEMS[activeDishIndex];
      if (!dish) return;
      
      likeDishBtn.classList.toggle('liked');
      if (likeDishBtn.classList.contains('liked')) {
        dish.likes += 1;
        likeCount.innerText = dish.likes;
        showToast('❤️ Added to favorites!');
      } else {
        dish.likes = Math.max(0, dish.likes - 1);
        likeCount.innerText = dish.likes;
      }
    });

    // Drawer Triggers (Frosted Glass Ingredients Sheet)
    document.addEventListener('click', e => {
      if (!videoModal.classList.contains('active')) return;

      // Close drawer triggers
      if (e.target.closest('#close-drawer-btn') || e.target.closest('#drawer-backdrop')) {
        closeDrawer();
        return;
      }

      // Open drawer triggers
      if (e.target.closest('#expand-hint-btn') || 
          e.target.closest('#overlay-tap-target') || 
          e.target.closest('.video-bottom-overlay') || 
          e.target.closest('#info-drawer-btn')) {
        if (!e.target.closest('.side-action-btn.like-btn') && 
            !e.target.closest('#close-video-modal') && 
            !e.target.closest('#toggle-sound-btn') &&
            !compositionDrawer.classList.contains('open')) {
          openDrawer();
        }
      }
    });


    // Concierge & Waiter Service Liquid Glass HUD Modal
    const conciergeModal = document.getElementById('concierge-modal');
    const conciergeBackdrop = document.getElementById('concierge-backdrop');
    const conciergeCloseBtn = document.getElementById('concierge-close-btn');

    function openConciergeModal() {
      if (conciergeModal && conciergeBackdrop) {
        conciergeBackdrop.classList.add('active');
        conciergeModal.classList.add('active');
        navigator.vibrate?.(30);
      }
    }

    function closeConciergeModal() {
      if (conciergeModal && conciergeBackdrop) {
        conciergeBackdrop.classList.remove('active');
        conciergeModal.classList.remove('active');
      }
    }

    if (callWaiterBtn) callWaiterBtn.addEventListener('click', openConciergeModal);
    if (conciergeCloseBtn) conciergeCloseBtn.addEventListener('click', closeConciergeModal);
    if (conciergeBackdrop) conciergeBackdrop.addEventListener('click', closeConciergeModal);

    // Concierge quick action click
    if (conciergeModal) {
      conciergeModal.addEventListener('click', e => {
        const btn = e.target.closest('.concierge-action-btn');
        if (!btn) return;
        const action = btn.dataset.action || 'Waiter call';
        navigator.vibrate?.([30, 40, 30]);
        showToast(`🛎️ Request “${action}” sent to staff (Table #12)`);
        closeConciergeModal();
      });
    }

    // Double-Tap & Double-Click to Like with Heart Burst Delight
    let lastTapTime = 0;
    videoModal.addEventListener('click', e => {
      if (e.target.closest('#close-video-modal') || e.target.closest('#composition-drawer')) return;
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapTime;
      if (tapLength < 350 && tapLength > 0) {
        // Double Tap Detected!
        triggerHeartBurst(e.clientX, e.clientY);
        const dish = MENU_ITEMS[activeDishIndex];
        if (dish && likeDishBtn) {
          likeDishBtn.classList.add('liked');
          dish.likes += 1;
          likeCount.innerText = dish.likes;
          showToast('❤️ Added to favorites!');
        }
      }
      lastTapTime = currentTime;
    });

    // Stories Reel Button (Quick jump into video stream)
    openStoriesBtn.addEventListener('click', () => {
      openVideoModal('burger-lis');
    });



    // Vertical Swipe Gestures for Video Player (TikTok / Instagram Reels Style)
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    videoModal.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    videoModal.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      handleVerticalSwipe();
    }, { passive: true });

    function handleVerticalSwipe() {
      const diffY = touchEndY - touchStartY;
      const diffX = touchEndX - touchStartX;

      // Ignore micro-movements (pure taps) so click events fire cleanly
      if (Math.abs(diffY) < 20 && Math.abs(diffX) < 20) {
        return;
      }

      // If composition drawer is open and user swipes down, close drawer
      if (compositionDrawer.classList.contains('open')) {
        if (diffY > 50) {
          closeDrawer();
        }
        return;
      }

      // Vertical Swipe (TikTok / Reels Style: Up = Next, Down = Prev)
      if (Math.abs(diffY) > 40 && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY < 0) {
          nextVideoDish(); // Swipe UP -> Next video
        } else {
          prevVideoDish(); // Swipe DOWN -> Previous video
        }
      }
    }


    // Mouse Wheel / Trackpad Scroll Support for Desktop (TikTok / Reels Web)
    let isWheelThrottled = false;
    videoModal.addEventListener('wheel', e => {
      if (!videoModal.classList.contains('active') || compositionDrawer.classList.contains('open')) return;
      if (isWheelThrottled) return;

      if (e.deltaY > 30) {
        isWheelThrottled = true;
        nextVideoDish(); // Scroll Down -> Next
        setTimeout(() => { isWheelThrottled = false; }, 400);
      } else if (e.deltaY < -30) {
        isWheelThrottled = true;
        prevVideoDish(); // Scroll Up -> Prev
        setTimeout(() => { isWheelThrottled = false; }, 400);
      }
    }, { passive: true });

    // Keyboard support (Up/Down + Left/Right)
    window.addEventListener('keydown', e => {
      if (!videoModal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        if (compositionDrawer.classList.contains('open')) {
          closeDrawer();
        } else {
          closeVideoModal();
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') nextVideoDish();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') prevVideoDish();
    });

  }

  // Run App
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }




