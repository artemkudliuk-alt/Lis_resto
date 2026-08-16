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
      posterUrl: 'assets/images/burger_poster.jpg?v=5',
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
      posterUrl: 'assets/images/negroni_poster.jpg?v=5',
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
      posterUrl: 'assets/images/aperol_spritz.jpg?v=5',
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
      posterUrl: 'assets/images/clover_club.jpg?v=5',
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
      posterUrl: 'assets/images/old_fashioned.jpg?v=5',
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
      posterUrl: 'assets/images/whisky_sour.jpg?v=5',
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
      posterUrl: 'assets/images/pornstar.jpg?v=5',
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
      posterUrl: 'assets/images/banosh.jpg?v=5',
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
      posterUrl: 'assets/images/deruni_smetana_griby.jpg?v=5',
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
      posterUrl: 'assets/images/duck_leg_original.jpg?v=5',
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
      posterUrl: 'assets/images/kotleta_induk.jpg?v=5',
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
    const statusText = document.getElementById('preloader-status');
    if (!preloader) return;

    let progress = 15;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 90) {
        progress = 90;
        clearInterval(progressInterval);
      }
      if (progressBar) progressBar.style.width = `${progress}%`;
    }, 120);

    // Preload top key assets (burger video, negroni video, posters)
    const preloadItems = MENU_ITEMS.slice(0, 4);
    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= preloadItems.length || progress >= 90) {
        clearInterval(progressInterval);
        if (progressBar) progressBar.style.width = '100%';
        if (statusText) statusText.innerText = 'Меню готове!';
        
        setTimeout(() => {
          preloader.classList.add('fade-out');
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 550);
        }, 350);
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
      ${dish.tags.includes('hit') ? '<span class="tag-badge hit">🔥 Хіт</span>' : ''}
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
        <div class="nutrition-item"><span class="val">${dish.nutrition.kcal}</span><span class="lbl">ккал</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.protein}</span><span class="lbl">білки</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.fat}</span><span class="lbl">жири</span></div>
        <div class="nutrition-item"><span class="val">${dish.nutrition.carbs}</span><span class="lbl">вуглеводи</span></div>
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

  // ==========================================================================
  // EVENT LISTENERS & TOUCH GESTURES
  // ==========================================================================

  function setupEventListeners() {
    // Single-Row Scrollable Categories
    categoriesScrollTrack.addEventListener('click', e => {
      const btn = e.target.closest('.category-pill-btn');
      if (!btn) return;
      currentCategory = btn.dataset.category;
      renderCategories();
      renderDishes();

      // Smoothly center the active pill in the horizontal scroll view
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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
        showToast('❤️ Додано в улюблені страви!');
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


    // Call Waiter Button
    callWaiterBtn.addEventListener('click', () => {
      showToast('🛎️ Офіціанта викликано до столу #12!');
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

  // ==========================================================================
  // 10 CURATED TYPOGRAPHY PAIRINGS FOR LUXURY RESTAURANT (FULL CYRILLIC)
  // ==========================================================================

  const FONT_PAIRS = [
    {
      id: 'outfit-manrope',
      name: '1. Outfit + Manrope',
      tag: 'Default',
      badge: 'Outfit',
      desc: 'Сучасний альпійський преміум-люкс (базовий стиль)',
      brandFont: "'Outfit', sans-serif",
      bodyFont: "'Manrope', sans-serif"
    },
    {
      id: 'playfair-inter',
      name: '2. Playfair Display + Inter',
      tag: 'Haute Cuisine',
      badge: 'Playfair',
      desc: 'Класична ресторанна елегантність та витонченість',
      brandFont: "'Playfair Display', serif",
      bodyFont: "'Inter', sans-serif"
    },
    {
      id: 'montserrat-opensans',
      name: '3. Montserrat + Open Sans',
      tag: 'Hotel Deluxe',
      badge: 'Montserrat',
      desc: 'Преміальний міжнародний готельний стандарт',
      brandFont: "'Montserrat', sans-serif",
      bodyFont: "'Open Sans', sans-serif"
    },
    {
      id: 'cormorant-mulish',
      name: '4. Cormorant Garamond + Mulish',
      tag: 'Aristocratic',
      badge: 'Cormorant',
      desc: 'Аристократичний стиль винних ресторанів Франції',
      brandFont: "'Cormorant Garamond', serif",
      bodyFont: "'Mulish', sans-serif"
    },
    {
      id: 'unbounded-plusjakarta',
      name: '5. Unbounded + Plus Jakarta Sans',
      tag: 'Neo-Karpaty',
      badge: 'Unbounded',
      desc: 'Ультрасучасний трендовий high-tech дизайн',
      brandFont: "'Unbounded', sans-serif",
      bodyFont: "'Plus Jakarta Sans', sans-serif"
    },
    {
      id: 'tenor-onest',
      name: '6. Tenor Sans + Onest',
      tag: 'Nordic Chic',
      badge: 'Tenor',
      desc: 'Скандинавський мінімалізм, чистота та легкість',
      brandFont: "'Tenor Sans', sans-serif",
      bodyFont: "'Onest', sans-serif"
    },
    {
      id: 'spectral-inter',
      name: '7. Spectral + Inter',
      tag: 'Gastronomy',
      badge: 'Spectral',
      desc: 'Шляхетна гастрономічна спадщина та благородство',
      brandFont: "'Spectral', serif",
      bodyFont: "'Inter', sans-serif"
    },
    {
      id: 'arsenal-nunito',
      name: '8. Arsenal + Nunito',
      tag: 'Ukrainian Pure',
      badge: 'Arsenal',
      desc: 'Автентична українська гармонійна геометрія',
      brandFont: "'Arsenal', sans-serif",
      bodyFont: "'Nunito', sans-serif"
    },
    {
      id: 'exo2-rubik',
      name: '9. Exo 2 + Rubik',
      tag: 'Dynamic Luxe',
      badge: 'Exo 2',
      desc: 'Енергійний контрастний преміум-дизайн',
      brandFont: "'Exo 2', sans-serif",
      bodyFont: "'Rubik', sans-serif"
    },
    {
      id: 'comfortaa-firasans',
      name: '10. Comfortaa + Fira Sans',
      tag: 'Cozy Craft',
      badge: 'Comfortaa',
      desc: 'Теплий карпатський затишок, м\'якість та крафт',
      brandFont: "'Comfortaa', cursive",
      bodyFont: "'Fira Sans', sans-serif"
    }
  ];

  let currentFontId = localStorage.getItem('lis_selected_font_pair') || 'outfit-manrope';

  function setupFontSwitcher() {
    const switcherToggle = document.getElementById('font-switcher-toggle');
    const switcherPanel = document.getElementById('font-switcher-panel');
    const panelClose = document.getElementById('font-panel-close');
    const pairsList = document.getElementById('font-pairs-list');
    const activeBadge = document.getElementById('active-font-badge');

    if (!switcherToggle || !switcherPanel || !pairsList) return;

    // Apply saved or default font
    const initialPair = FONT_PAIRS.find(p => p.id === currentFontId) || FONT_PAIRS[0];
    applyFontPair(initialPair, false);

    // Render list of 10 font options
    pairsList.innerHTML = FONT_PAIRS.map(pair => `
      <div class="font-pair-item ${pair.id === currentFontId ? 'active' : ''}" data-font-id="${pair.id}">
        <div class="font-pair-header">
          <span class="font-pair-name">${pair.name}</span>
          <span class="font-pair-active-tag">${pair.tag}</span>
        </div>
        <div class="font-pair-preview-title" style="font-family: ${pair.brandFont};">
          LIS • Ресторан & Бар
        </div>
        <div class="font-pair-preview-body" style="font-family: ${pair.bodyFont};">
          ${pair.desc}
        </div>
      </div>
    `).join('');

    // Toggle panel
    switcherToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      switcherPanel.classList.toggle('active');
    });

    if (panelClose) {
      panelClose.addEventListener('click', (e) => {
        e.stopPropagation();
        switcherPanel.classList.remove('active');
      });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#font-switcher-widget')) {
        switcherPanel.classList.remove('active');
      }
    });

    // Font selection click
    pairsList.addEventListener('click', (e) => {
      const item = e.target.closest('.font-pair-item');
      if (!item) return;
      const fontId = item.dataset.fontId;
      const selectedPair = FONT_PAIRS.find(p => p.id === fontId);
      if (!selectedPair) return;

      applyFontPair(selectedPair, true);

      // Update active states
      document.querySelectorAll('.font-pair-item').forEach(el => {
        el.classList.toggle('active', el.dataset.fontId === fontId);
      });

      if (activeBadge) activeBadge.innerText = selectedPair.badge;
      
      // Auto close after select with short delay
      setTimeout(() => {
        switcherPanel.classList.remove('active');
      }, 250);
    });
  }

  function applyFontPair(pair, notify = true) {
    currentFontId = pair.id;
    localStorage.setItem('lis_selected_font_pair', pair.id);
    document.documentElement.style.setProperty('--font-brand', pair.brandFont);
    document.documentElement.style.setProperty('--font-body', pair.bodyFont);

    const activeBadge = document.getElementById('active-font-badge');
    if (activeBadge) activeBadge.innerText = pair.badge;

    if (notify) {
      showToast(`🔤 Шрифти: ${pair.name}`);
    }
  }

  // Hook setupFontSwitcher into init
  const originalInit = init;
  init = function() {
    originalInit();
    setupFontSwitcher();
  };

  // Run App
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }



