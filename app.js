// LIS RESTAURANT & LOUNGE (RIBAS KARPATY)
// Interactive Mobile Video-Menu Application

  // ==========================================================================
  // DATA MODEL: MENU CATEGORIES & DISHES
  // ==========================================================================

  const MENU_CATEGORIES = [
    { id: 'all', name: 'ВСЕ МЕНЮ', icon: '🍽️', desc: 'Повний каталог страв та авторських напоїв ресторану LIS' },
    { id: 'hosper', name: 'ХОСПЕР', icon: '🔥', desc: 'Фірмові страви з закритої печі на натуральному карпатському вугіллі (350°C)' },
    { id: 'cocktails', name: 'КОКТЕЙЛІ', icon: '🍸', desc: 'Авторські та класичні коктейлі від шеф-бармена' },
    { id: 'kitchen', name: 'КУХНЯ', icon: '🥘', desc: 'Автентичні карпатські та європейські страви' },
    { id: 'starters', name: 'ЗАКУСКИ', icon: '🥗', desc: 'Легкі закуски та стартери для ідеального початку вечері' },
    { id: 'nalyvky', name: 'НАЛИВКИ', icon: '🍷', desc: 'Крафтові карпатські настоянки та дистиляти' }
  ];

  const MENU_ITEMS = [
    {
      id: 'burger-lis',
      categoryId: 'hosper',
      name: 'Фірмовий бургер LIS з карамелізованою цибулею',
      price: 530,
      weight: '450 г',
      hasVideo: true,
      videoUrl: 'assets/videos/burger_.mp4',
      posterUrl: 'assets/images/burger_poster.jpg',
      shortDesc: 'Соковита яловича котлета на вугіллі хоспера, томлена карамелізована цибуля, сир чеддер, хрусткі діпи та соуси.',
      composition: '100% сортова яловичина на живому деревному вугіллі закритої печі хоспер (350°C), томлена карамелізована цибуля в бурштиновій глазурі, ніжний розплавлений сир чеддер, тепла золотиста булочка бріош, хрусткі картопляні діпи, фірмовий соус BBQ та домашній трюфельний майонез.',
      allergens: ['Глютен', 'Лактоза', 'Гірчиця', 'Кунжут'],
      nutrition: { kcal: 840, protein: '42 г', fat: '48 г', carbs: '62 г' },
      tags: ['hit', 'chef', 'video'],
      likes: 248
    },
    {
      id: 'negroni',
      categoryId: 'cocktails',
      name: 'Коктейль Negroni',
      price: 350,
      weight: '1 порц.',
      hasVideo: true,
      videoUrl: 'assets/videos/Negroni.mp4',
      posterUrl: 'assets/images/negroni_poster.jpg',
      shortDesc: 'Преміальний джин Gordon\'s London Dry, вермут Cinzano Rosso, біттер Campari, монолітний куб льоду та цедра апельсина.',
      composition: 'Культовий класичний аперитив: лондонський сухий джин Gordon\'s London Dry, благородний італійський червоний вермут Cinzano Rosso, гірко-солодкий біттер Campari, куб кришталево чистого ручного льоду без бульбашок повітря та свіжі ефірні олії апельсинового твісту.',
      allergens: ['Сульфіти', 'Цитрус'],
      nutrition: { kcal: 195, protein: '0 г', fat: '0 г', carbs: '12 г' },
      tags: ['hit', 'chef', 'video'],
      likes: 189
    },
    {
      id: 'aperol-spritz',
      categoryId: 'cocktails',
      name: 'Aperol Spritz',
      price: 310,
      weight: '255 мл',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/aperol_spritz.jpg',
      shortDesc: 'Легкий та ігристий коктейль з лікером Aperol, Prosecco, содовою та свіжим апельсином.',
      composition: 'Оригінальний італійський лікер Aperol Aperitivo, сухе ігристе вино Prosecco, гірська содова, свіжовичавлений апельсиновий сік, скибка соковитого апельсина, монолітний лід.',
      allergens: ['Сульфіти', 'Цитрус'],
      nutrition: { kcal: 160, protein: '0 г', fat: '0 г', carbs: '14 г' },
      tags: ['hit'],
      likes: 142
    },
    {
      id: 'clover-club',
      categoryId: 'cocktails',
      name: 'Clover Club',
      price: 300,
      weight: '120 мл',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/clover_club.jpg',
      shortDesc: 'Витончений малиновий коктейль на джині Gordon\'s з лимонним фрешем та оксамитовою піною.',
      composition: 'Джин Gordon\'s London Dry, натуральне свіже малинове пюре, лимонний фреш, цукровий сироп, збита шовковиста пінка та свіжі лісові ягоди малини з м\'ятою.',
      allergens: ['Яєчний білок'],
      nutrition: { kcal: 175, protein: '2 г', fat: '0 г', carbs: '16 г' },
      tags: ['chef'],
      likes: 115
    },
    {
      id: 'old-fashioned',
      categoryId: 'cocktails',
      name: 'Old Fashioned',
      price: 300,
      weight: '150 мл',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/old_fashioned.jpg',
      shortDesc: 'Американський бурбон Wild Turkey 101, біттер Angostura, тростинний цукор та дубовий дим.',
      composition: 'Витриманий міцний бурбон Wild Turkey 101, краплі ароматичного біттера Angostura, тростинний сироп Demerara, спіраль цедри сицилійського апельсина, подача під ковпаком з димом дубової тріски.',
      allergens: ['Цитрус'],
      nutrition: { kcal: 210, protein: '0 г', fat: '0 г', carbs: '8 г' },
      tags: ['hit'],
      likes: 97
    },
    {
      id: 'whisky-sour',
      categoryId: 'cocktails',
      name: 'Whisky Sour',
      price: 310,
      weight: '180 мл',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/whisky_sour.jpg',
      shortDesc: 'Багатий смак бурбону Jim Beam у поєднанні з лимонним фрешем та біттером Angostura.',
      composition: 'Бурбон Jim Beam, свіжовичавлений сік лимона, тростинний цукровий сироп, ароматичний біттер Angostura, коктейльна мараскінова вишня та апельсиновий твіст.',
      allergens: ['Цитрус'],
      nutrition: { kcal: 185, protein: '0 г', fat: '0 г', carbs: '11 г' },
      tags: [],
      likes: 83
    },
    {
      id: 'pornstar',
      categoryId: 'cocktails',
      name: 'PornStar Martini',
      price: 320,
      weight: '180 мл',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/pornstar.jpg',
      shortDesc: 'Ванільна горілка Absolut, маракуйя, манго, лимонний фреш та шот холодного Prosecco.',
      composition: 'Ніжна ванільна горілка Absolut Vanilla, натуральна м\'якоть маракуйї та пюре стиглого манго, лимонний фреш, половинка свіжої маракуйї з вогнем та подача з окремим охолодженим шотом ігристого вина Prosecco.',
      allergens: ['Сульфіти'],
      nutrition: { kcal: 230, protein: '1 г', fat: '0 г', carbs: '22 г' },
      tags: ['hit'],
      likes: 165
    },
    {
      id: 'banosh',
      categoryId: 'kitchen',
      name: 'Банош по-гуцульськи з бринзою та білими грибами',
      price: 290,
      weight: '320 г',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/banosh.jpg',
      shortDesc: 'Традиційна кукурудзяна каша на домашній сметані з овечою бринзою, білими грибами та шкварками.',
      composition: 'Кукурудзяна крупа дрібного помелу, томлена у чавунному казані на домашній сметані та вершках, витримана карпатська овеча бринза, обсмажені карпатські білі гриби у вершковому маслі, золотисті шкварки та свіжа зелень кропу.',
      allergens: ['Лактоза'],
      nutrition: { kcal: 620, protein: '18 г', fat: '44 г', carbs: '46 г' },
      tags: ['hit', 'chef'],
      likes: 210
    },
    {
      id: 'deruni',
      categoryId: 'kitchen',
      name: 'Деруни зі сметаною та білими грибами',
      price: 280,
      weight: '300 г',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/deruni_smetana_griby.jpg',
      shortDesc: 'Хрусткі картопляні деруни з вершковим соусом з карпатських білих грибів.',
      composition: 'Відбірна молода картопля, цибуля, яйце, золотиста скоринка, ніжний вершково-сметанний соус з карпатськими білими грибами, свіжа петрушка.',
      allergens: ['Лактоза', 'Глютен', 'Яйця'],
      nutrition: { kcal: 490, protein: '12 г', fat: '32 г', carbs: '42 г' },
      tags: ['hit'],
      likes: 176
    },
    {
      id: 'duck-leg',
      categoryId: 'kitchen',
      name: 'Качина ніжка конфі з яблучним пюре',
      price: 480,
      weight: '350 г',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/duck_leg_original.jpg',
      shortDesc: 'Ніжна качина ніжка тривалого томлення з пюре із запечених яблук та ягідним соусом.',
      composition: 'Ніжка фермерської качки тривалого томлення конфі за низької температури, оксамитове пюре із запечених карпатських яблук з корицею, густий деміглас з лісовою ожиною та чебрецем.',
      allergens: [],
      nutrition: { kcal: 580, protein: '36 г', fat: '38 г', carbs: '24 г' },
      tags: ['chef'],
      likes: 134
    },
    {
      id: 'turkey-cutlet',
      categoryId: 'kitchen',
      name: 'Котлета з індички з вершковим картопляним пюре',
      price: 340,
      weight: '320 г',
      hasVideo: false,
      videoUrl: null,
      posterUrl: 'assets/images/kotleta_induk.jpg',
      shortDesc: 'Соковита парова котлета з філе індички, ніжне пюре та соус із зеленого горошку.',
      composition: 'Рублене філе індички, вершкове масло, повітряне картопляне пюре на вершках, крем-соус на основі солодкого молодого горошку, мікрозелень.',
      allergens: ['Лактоза', 'Глютен'],
      nutrition: { kcal: 430, protein: '32 г', fat: '20 г', carbs: '34 г' },
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
  const categoryTilesGrid = document.getElementById('category-tiles-grid');
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
  const toggleSoundBtn = document.getElementById('toggle-sound-btn');
  const soundIconMuted = document.getElementById('sound-icon-muted');
  const soundIconUnmuted = document.getElementById('sound-icon-unmuted');
  const modalCategoryBadge = document.getElementById('modal-category-badge');
  const modalTags = document.getElementById('modal-tags');
  const modalDishTitle = document.getElementById('modal-dish-title');
  const modalDishPrice = document.getElementById('modal-dish-price');
  const modalDishWeight = document.getElementById('modal-dish-weight');
  const modalDishShortDesc = document.getElementById('modal-dish-short-desc');
  const likeDishBtn = document.getElementById('like-dish-btn');
  const likeCount = document.getElementById('like-count');
  const videoPrevBtn = document.getElementById('video-prev-btn');
  const videoNextBtn = document.getElementById('video-next-btn');
  const overlayTapTarget = document.getElementById('overlay-tap-target');

  // Drawer Elements
  const compositionDrawer = document.getElementById('composition-drawer');
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
  // INITIALIZATION
  // ==========================================================================

  function init() {
    renderCategories();
    renderDishes();
    setupEventListeners();
  }

  // ==========================================================================
  // RENDER FUNCTIONS: 3-COLUMN CATEGORY TILES
  // ==========================================================================

  function renderCategories() {
    categoryTilesGrid.innerHTML = MENU_CATEGORIES.map(cat => {
      const count = cat.id === 'all' 
        ? MENU_ITEMS.length 
        : MENU_ITEMS.filter(d => d.categoryId === cat.id).length;

      return `
        <button class="category-tile-card ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
          <span class="tile-icon">${cat.icon}</span>
          <span class="tile-title">${cat.name}</span>
          <span class="tile-count">${count} поз.</span>
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
          <h3 style="font-family: var(--font-brand); color: var(--color-primary-navy);">Нічого не знайдено</h3>
          <p style="font-size: 13px; margin-top: 4px;">Спробуйте змінити запит або обрати іншу категорію</p>
        </div>
      `;
      return;
    }

    dishesContainer.innerHTML = filtered.map(dish => {
      const hitBadge = dish.tags.includes('hit') ? `<span class="dish-tag hit">🔥 ХІТ</span>` : '';
      const chefBadge = dish.tags.includes('chef') ? `<span class="dish-tag chef">👑 ШЕФ</span>` : '';
      
      const mediaHtml = dish.hasVideo ? `
        <div class="video-indicator">
          <span class="dot"></span> 9:16 ВІДЕО
        </div>
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
        <article class="dish-card" data-dish-id="${dish.id}">
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
    if (num === 1) return 'страва';
    if (num >= 2 && num <= 4) return 'страви';
    return 'страв';
  }

  // ==========================================================================
  // FULLSCREEN VIDEO MODAL CONTROLLER
  // ==========================================================================

  function openVideoModal(dishId) {
    const dishIndex = videoDishes.findIndex(d => d.id === dishId);
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
    const dish = videoDishes[activeDishIndex];
    if (!dish) return;

    videoLoader.classList.add('active');

    // Update modal video source
    modalVideo.src = dish.videoUrl;
    modalVideo.poster = dish.posterUrl;
    modalVideo.muted = isMuted;

    modalVideo.play().then(() => {
      videoLoader.classList.remove('active');
    }).catch(err => {
      console.log('Autoplay muted fallback:', err);
      modalVideo.muted = true;
      modalVideo.play();
      videoLoader.classList.remove('active');
    });

    // Update overlay content
    const cat = MENU_CATEGORIES.find(c => c.id === dish.categoryId);
    modalCategoryBadge.innerText = cat ? cat.name : 'LIS';

    modalTags.innerHTML = `
      ${dish.tags.includes('hit') ? '<span class="tag-badge hit">🔥 Хіт ресторану</span>' : ''}
      ${dish.tags.includes('chef') ? '<span class="tag-badge chef">👑 Chef\'s Choice</span>' : ''}
    `;

    modalDishTitle.innerText = dish.name;
    modalDishPrice.innerText = `${dish.price} ₴`;
    modalDishWeight.innerText = dish.weight;
    modalDishShortDesc.innerText = dish.shortDesc;
    likeCount.innerText = dish.likes;

    // Reset like button state
    likeDishBtn.classList.remove('liked');

    // Update drawer info
    drawerDishName.innerText = dish.name;
    drawerComposition.innerText = dish.composition;
    drawerAllergens.innerHTML = dish.allergens.map(a => `<span class="allergen-pill">${a}</span>`).join('');
    
    if (dish.nutrition) {
      drawerNutrition.innerHTML = `
        <div class="nutrition-item"><span class="val">${dish.nutrition.kcal}</span><span class="lbl">ккал</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.protein}</span><span class="lbl">білки</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.fat}</span><span class="lbl">жири</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.carbs}</span><span class="lbl">вуглеводи</span></div>
      `;
    }

    // Close drawer if open
    closeDrawer();
  }

  function closeVideoModal() {
    videoModal.classList.remove('active');
    modalVideo.pause();
    document.body.style.overflow = '';
    closeDrawer();
  }

  function nextVideoDish() {
    activeDishIndex = (activeDishIndex + 1) % videoDishes.length;
    loadActiveVideoDish();
  }

  function prevVideoDish() {
    activeDishIndex = (activeDishIndex - 1 + videoDishes.length) % videoDishes.length;
    loadActiveVideoDish();
  }

  function toggleSound() {
    isMuted = !isMuted;
    modalVideo.muted = isMuted;
    if (isMuted) {
      soundIconMuted.classList.remove('hidden');
      soundIconUnmuted.classList.add('hidden');
      showToast('🔇 Звук вимкнено');
    } else {
      soundIconMuted.classList.add('hidden');
      soundIconUnmuted.classList.remove('hidden');
      showToast('🔊 Звук увімкнено');
    }
  }

  // ==========================================================================
  // COMPOSITION DRAWER
  // ==========================================================================

  function openDrawer() {
    compositionDrawer.classList.add('open');
  }

  function closeDrawer() {
    compositionDrawer.classList.remove('open');
  }

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

  // ==========================================================================
  // EVENT LISTENERS & TOUCH GESTURES
  // ==========================================================================

  function setupEventListeners() {
    // 3-Column Category Tiles
    categoryTilesGrid.addEventListener('click', e => {
      const tile = e.target.closest('.category-tile-card');
      if (!tile) return;
      currentCategory = tile.dataset.category;
      renderCategories();
      renderDishes();
    });

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

    // Dish Card Clicks -> Open Fullscreen Video Modal
    dishesContainer.addEventListener('click', e => {
      const card = e.target.closest('.dish-card');
      if (!card) return;
      const dishId = card.dataset.dishId;
      const dish = MENU_ITEMS.find(d => d.id === dishId);
      
      if (dish && dish.hasVideo) {
        openVideoModal(dishId);
      } else if (dish) {
        // Photo-only dish toast preview
        showToast(`📋 ${dish.name}: ${dish.price} ₴`);
      }
    });

    // Modal Video Controls
    closeModalBtn.addEventListener('click', closeVideoModal);
    toggleSoundBtn.addEventListener('click', toggleSound);
    videoNextBtn.addEventListener('click', nextVideoDish);
    videoPrevBtn.addEventListener('click', prevVideoDish);

    // Like Button
    likeDishBtn.addEventListener('click', () => {
      const dish = videoDishes[activeDishIndex];
      if (!dish) return;
      
      likeDishBtn.classList.toggle('liked');
      if (likeDishBtn.classList.contains('liked')) {
        dish.likes += 1;
        likeCount.innerText = dish.likes;
        showToast('❤️ Додано в улюблені страви!');
      } else {
        dish.likes -= 1;
        likeCount.innerText = dish.likes;
      }
    });

    // Drawer Controls
    overlayTapTarget.addEventListener('click', openDrawer);
    infoDrawerBtn.addEventListener('click', openDrawer);
    closeDrawerBtn.addEventListener('click', closeDrawer);

    // Call Waiter Button
    callWaiterBtn.addEventListener('click', () => {
      showToast('🛎️ Офіціанта викликано до столу #12!');
    });

    // Stories Reel Button (Quick jump into video stream)
    openStoriesBtn.addEventListener('click', () => {
      openVideoModal(videoDishes[0].id);
    });

    // Touch Swipe Gestures for Video Player
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    videoModal.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    videoModal.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Horizontal swipe (Next / Prev dish)
      if (Math.abs(diffX) > 60 && Math.abs(diffY) < 50) {
        if (diffX < 0) {
          nextVideoDish(); // Swipe left -> Next
        } else {
          prevVideoDish(); // Swipe right -> Prev
        }
      }

      // Vertical swipe down (Close modal)
      if (diffY > 100 && Math.abs(diffX) < 60 && !compositionDrawer.classList.contains('open')) {
        closeVideoModal();
      }

      // Vertical swipe up (Open composition drawer)
      if (diffY < -80 && Math.abs(diffX) < 60 && !compositionDrawer.classList.contains('open')) {
        openDrawer();
      }
    }

    // Keyboard support
    window.addEventListener('keydown', e => {
      if (!videoModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeVideoModal();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextVideoDish();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevVideoDish();
    });
  }

  // Run App
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


