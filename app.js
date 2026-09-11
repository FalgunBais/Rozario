/**
 * Rozario's Giardino - Cafe & Courtyard
 * Client-side Master Application Script
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MENU DATA STORE (ZERO-PRICE SPECIFICATION)
  // ==========================================
  const MENU_DATABASE = [
    // --- FOOD: PURE VEGETARIAN (VEG) ---
    {
      id: 'veg-crostini',
      title: 'Crostini Alla Ragusana',
      category: 'Starters & Tapas',
      type: 'food',
      diet: 'veg',
      desc: "Artisan farmer's crusty bread topped with aged melted cheese, Mediterranean artichokes, kalamata olives, capers, and aromatic basil pesto drizzle.",
      craft: 'Artisan Wood-Fired',
      chefPick: true
    },
    {
      id: 'veg-masala-baguette',
      title: 'Masala Garlic Baguette',
      category: 'Starters & Tapas',
      type: 'food',
      diet: 'veg',
      desc: 'Slow-toasted herb baguette infused with roasted garlic butter, Indian herb spices, and golden melted mozzarella.',
      craft: 'Herb-Butter Infused',
      chefPick: false
    },
    {
      id: 'veg-cheese-garlic-bread',
      title: 'Classic Cheese Garlic Bread',
      category: 'Starters & Tapas',
      type: 'food',
      diet: 'veg',
      desc: 'Golden toasted sourdough drenched in garlic-herb butter and bubbly golden cheddar-mozzarella blend.',
      craft: 'Double Melted Cheese',
      chefPick: false
    },
    {
      id: 'veg-chilli-paneer',
      title: 'Indo-Italian Chilli Paneer',
      category: 'Starters & Tapas',
      type: 'food',
      diet: 'veg',
      desc: 'Fresh cottage cheese wok-tossed with bell peppers, spring scallions, light soy, and cracked oriental black pepper.',
      craft: 'Wok-Tossed Fusion',
      chefPick: true
    },
    {
      id: 'veg-bruschetta',
      title: 'Tuscan Bruschetta Pomodoro',
      category: 'Starters & Tapas',
      type: 'food',
      diet: 'veg',
      desc: 'Diced vine-ripened tomatoes, sweet basil, cold-pressed extra virgin olive oil, and aged balsamic glaze on toasted ciabatta.',
      craft: 'Cold-Pressed Olive Oil',
      chefPick: false
    },
    {
      id: 'veg-nachos',
      title: 'Herb-Crusted Cheese Nachos',
      category: 'Starters & Tapas',
      type: 'food',
      diet: 'veg',
      desc: 'Crispy stone-ground corn crisps baked with melted jalapeño cheese sauce, fresh pico de gallo, and cool sour cream.',
      craft: 'Stone-Ground Corn',
      chefPick: false
    },
    {
      id: 'veg-grilled-paneer-pizza',
      title: 'Grilled Paneer Giardino Pizza',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'veg',
      desc: 'Tandoor-spiced grilled cottage cheese cubes, sweet charred peppers, red onions, fresh basil, and bubbling mozzarella on crisp stone-baked dough.',
      craft: 'Stone Oven Baked',
      chefPick: true
    },
    {
      id: 'veg-margherita',
      title: 'Classic Margherita Di Bufala',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'veg',
      desc: 'Rich San Marzano tomato reduction, buffalo mozzarella, fresh sweet basil leaves, and cold-pressed extra virgin olive oil.',
      craft: 'Napoli Style',
      chefPick: false
    },
    {
      id: 'veg-verdure-pizza',
      title: 'Verdure Rustica (Farmhouse Feast)',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'veg',
      desc: 'Fresh button mushrooms, crisp bell peppers, sweet corn, black olives, sun-dried tomatoes, and Italian herbs.',
      craft: 'Garden Harvest',
      chefPick: false
    },
    {
      id: 'veg-truffle-mushroom-pizza',
      title: 'Wild Mushroom & Truffle Pizza',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'veg',
      desc: 'Sautéed forest mushrooms, caramelized roasted garlic, fresh rosemary, and herb-infused white truffle sauce.',
      craft: 'White Sauce Specialty',
      chefPick: false
    },
    {
      id: 'veg-spaghetti-aglio-olio',
      title: 'Spaghetti Aglio E Olio Peperoncino',
      category: 'Artisanal Pastas',
      type: 'food',
      diet: 'veg',
      desc: 'Al dente spaghetti tossed with golden sliced garlic, crushed red chili flakes, cold-pressed olive oil, and flat-leaf parsley.',
      craft: 'Italian Classic',
      chefPick: true
    },
    {
      id: 'veg-penne-arrabbiata',
      title: 'Penne All’Arrabbiata',
      category: 'Artisanal Pastas',
      type: 'food',
      diet: 'veg',
      desc: 'Al dente penne tossed in a slow-simmered spicy San Marzano tomato reduction with roasted garlic and fresh sweet basil.',
      craft: 'Slow-Simmered Sauce',
      chefPick: false
    },
    {
      id: 'veg-penne-pesto',
      title: 'Penne Pesto Genovese',
      category: 'Artisanal Pastas',
      type: 'food',
      diet: 'veg',
      desc: 'Penne enveloped in fragrant basil-pine nut pesto, extra virgin olive oil, and aged Parmigiano Reggiano.',
      craft: 'Fresh Ground Pesto',
      chefPick: false
    },
    {
      id: 'veg-creamy-funghi',
      title: 'Creamy Funghi Fettuccine',
      category: 'Artisanal Pastas',
      type: 'food',
      diet: 'veg',
      desc: 'Ribbon fettuccine coated in a velvety wild mushroom cream reduction with freshly cracked black pepper and parmesan.',
      craft: 'Wild Porcini & Cream',
      chefPick: false
    },
    {
      id: 'veg-paneer-burger',
      title: 'Paneer Tikka Charcoal Burger',
      category: 'Burgers & Paninis',
      type: 'food',
      diet: 'veg',
      desc: 'Tandoor-grilled cottage cheese steak, fresh garden lettuce, sliced tomatoes, and house mint mayo in a brioche bun with herb fries.',
      craft: 'Served with Fries',
      chefPick: false
    },
    {
      id: 'veg-rosario-burger',
      title: 'Rosario Special Garden Burger',
      category: 'Burgers & Paninis',
      type: 'food',
      diet: 'veg',
      desc: 'House-made crisp legume and vegetable patty, melted cheddar slice, gherkins, and smoked paprika spread.',
      craft: 'Signature House Burger',
      chefPick: true
    },
    {
      id: 'veg-cheese-bomb',
      title: 'Cheese Bomb Burger',
      category: 'Burgers & Paninis',
      type: 'food',
      diet: 'veg',
      desc: 'Double crispy vegetable patty stuffed with a molten cheese core, caramelized onions, and house burger relish.',
      craft: 'Molten Core',
      chefPick: false
    },
    {
      id: 'veg-panini',
      title: 'Mediterranean Grilled Vegetable Panini',
      category: 'Burgers & Paninis',
      type: 'food',
      diet: 'veg',
      desc: 'Charred zucchini, sweet bell peppers, fresh mozzarella, and walnut basil pesto pressed in crusty ciabatta.',
      craft: 'Pressed Ciabatta',
      chefPick: false
    },

    // --- FOOD: NON-VEGETARIAN (NON-VEG) ---
    {
      id: 'nonveg-chicken-skewers',
      title: 'Rosemary Grilled Chicken Skewers',
      category: 'Starters & Small Plates',
      type: 'food',
      diet: 'non-veg',
      desc: 'Tender chicken breast skewers infused with wild garden rosemary, roasted garlic, and cold-pressed olive oil, served with garlic dip.',
      craft: 'Charcoal Grilled',
      chefPick: true
    },
    {
      id: 'nonveg-peri-peri-crispers',
      title: 'Fiery Peri Peri Chicken Crispers',
      category: 'Starters & Small Plates',
      type: 'food',
      diet: 'non-veg',
      desc: "Crunchy boneless chicken tenders dusted in African bird's eye chili spice blend, accompanied by herb ranch dip.",
      craft: 'Bird’s Eye Spice',
      chefPick: false
    },
    {
      id: 'nonveg-seafood-crostini',
      title: 'Garlic Butter Prawns / Fish Crostini',
      category: 'Starters & Small Plates',
      type: 'food',
      diet: 'non-veg',
      desc: 'Pan-seared tender ocean catch tossed in rich garlic-parsley butter served atop crusty toasted country sourdough.',
      craft: 'Pan-Seared Fresh',
      chefPick: false
    },
    {
      id: 'nonveg-bbq-wings',
      title: 'Smoky BBQ Glazed Wings',
      category: 'Starters & Small Plates',
      type: 'food',
      diet: 'non-veg',
      desc: 'Slow-baked tender chicken wings basted in house-smoked sticky barbecue glaze with toasted white sesame.',
      craft: 'Hickory Smoked',
      chefPick: false
    },
    {
      id: 'nonveg-smoked-chicken-pizza',
      title: 'Smoked Chicken & Charred Jalapeño Pizza',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'non-veg',
      desc: 'Shaved hickory-smoked chicken breast, pickled spicy jalapeño coins, red onions, and bubbly mozzarella on crisp dough.',
      craft: 'Stone Oven Baked',
      chefPick: true
    },
    {
      id: 'nonveg-pollo-pesto-pizza',
      title: 'Pollo Pesto Giardino Pizza',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'non-veg',
      desc: 'Herb-marinated chicken slivers, walnut basil pesto base, blistered cherry tomatoes, and aged cheese blend.',
      craft: 'Artisan Pesto Base',
      chefPick: false
    },
    {
      id: 'nonveg-pepperoni-feast',
      title: 'Spicy Pepperoni & Chicken Feast',
      category: 'Handcrafted Pizzas',
      type: 'food',
      diet: 'non-veg',
      desc: 'Layered spiced chicken pepperoni, savory herb chicken mince, red pepper flakes, and tomato reduction.',
      craft: 'Double Meat Topping',
      chefPick: false
    },
    {
      id: 'nonveg-chicken-alfredo',
      title: 'Chicken Alfredo Fettuccine',
      category: 'Artisanal Pastas',
      type: 'food',
      diet: 'non-veg',
      desc: 'Silky ribbon pasta coated in garlic parmesan cream with seared herbed chicken breast strips.',
      craft: 'Velvety Cream & Parmigiano',
      chefPick: true
    },
    {
      id: 'nonveg-bolognese',
      title: 'Spaghetti Bolognese Con Pollo',
      category: 'Artisanal Pastas',
      type: 'food',
      diet: 'non-veg',
      desc: 'Classic slow-cooked minced chicken ragù simmered for hours with mirepoix, Italian garden herbs, and ripe plum tomatoes.',
      craft: 'Slow-Simmered Ragù',
      chefPick: false
    },
    {
      id: 'nonveg-chicken-steak',
      title: 'Herb-Crusted Chicken Breast with Mash',
      category: 'Chef’s Mains',
      type: 'food',
      diet: 'non-veg',
      desc: 'Pan-roasted tender chicken breast served alongside velvet herb potato mash, buttered greens, and rich thyme pan jus.',
      craft: 'Signature Main Course',
      chefPick: true
    },
    {
      id: 'nonveg-smoked-burger',
      title: 'Rosario Signature Smoked Chicken Burger',
      category: 'Burgers & Paninis',
      type: 'food',
      diet: 'non-veg',
      desc: 'Juicy flame-grilled chicken breast fillet, melted cheddar, crisp lettuce, brioche bun, and golden herb fries.',
      craft: 'Brioche Bun & Fries',
      chefPick: false
    },
    {
      id: 'nonveg-crispy-spicy-burger',
      title: 'Crispy Fiery Chicken Burger',
      category: 'Burgers & Paninis',
      type: 'food',
      diet: 'non-veg',
      desc: 'Golden fried buttermilk chicken fillet, spicy crunchy cabbage slaw, dill pickles, and chipotle mayo.',
      craft: 'Buttermilk Fried',
      chefPick: false
    },

    // --- BEVERAGES: SPECIALTY COFFEES & HOT DELICACIES ---
    {
      id: 'bev-espresso',
      title: 'Signature Giardino Espresso',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Intense double extraction of 100% single-origin Arabica beans featuring notes of toasted cocoa and roasted hazelnut.',
      craft: '100% Single Origin Arabica',
      chefPick: false
    },
    {
      id: 'bev-cappuccino',
      title: 'Artisan Cappuccino',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Balanced espresso shot poured beneath silky microfoam, dusted with organic unsweetened cocoa powder.',
      craft: 'Velvet Microfoam',
      chefPick: false
    },
    {
      id: 'bev-spanish-latte',
      title: 'Spanish Cortado / Latte',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Bold double espresso softened with sweetened condensed milk and silky warm dairy.',
      craft: 'Sweet & Balanced',
      chefPick: true
    },
    {
      id: 'bev-hazelnut-mocha',
      title: 'Giardino Hazelnut Mocha',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Espresso infused with dark melted Belgian chocolate and roasted hazelnut praline essence.',
      craft: 'Belgian Chocolate Infused',
      chefPick: false
    },
    {
      id: 'bev-cold-brew',
      title: 'Vanilla Bean Cold Brew',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: '18-hour slow-steeped Arabica coffee served over crystal block ice with subtle Madagascar vanilla bean notes.',
      craft: '18-Hour Slow Steeped',
      chefPick: true
    },
    {
      id: 'bev-iced-macchiato',
      title: 'Iced Salted Caramel Macchiato',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Layered chilled milk, double espresso float, and handcrafted ribbons of sea-salt caramel sauce.',
      craft: 'Handcrafted Caramel',
      chefPick: false
    },
    {
      id: 'bev-cold-coffee-frappe',
      title: 'Classic Giardino Cold Coffee Frappé',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Chilled blended espresso, premium dairy cream, vanilla bean ice cream, and dark chocolate drizzle.',
      craft: 'Blended Perfection',
      chefPick: false
    },
    {
      id: 'bev-hot-chocolate',
      title: 'Rich Belgian Hot Chocolate',
      category: 'Specialty Coffees',
      type: 'beverages',
      diet: 'coffee',
      desc: 'Thick luxurious melted Belgian chocolate simmered with dairy cream and topped with mini marshmallows.',
      craft: '70% Belgian Ganache',
      chefPick: true
    },

    // --- BEVERAGES: GOURMET THICK SHAKES ---
    {
      id: 'bev-brownie-shake',
      title: 'The Famous Giardino Brownie Shake',
      category: 'Gourmet Thick Shakes',
      type: 'beverages',
      diet: 'shakes',
      desc: 'Signature rich chocolate shake blended with freshly baked fudge brownies, topped with brownie chunks, whipped cream, and chocolate curls.',
      craft: 'Signature Bestseller',
      chefPick: true
    },
    {
      id: 'bev-dark-truffle-shake',
      title: 'Belgian Dark Truffle Shake',
      category: 'Gourmet Thick Shakes',
      type: 'beverages',
      diet: 'shakes',
      desc: '70% dark cocoa blended thick and smooth for deep chocolate aficionados, garnished with chocolate shavings.',
      craft: 'Deep Cocoa',
      chefPick: false
    },
    {
      id: 'bev-nutella-shake',
      title: 'Nutella Hazelnut Crunch Shake',
      category: 'Gourmet Thick Shakes',
      type: 'beverages',
      diet: 'shakes',
      desc: 'Creamy Nutella blended with roasted crushed hazelnuts and velvety vanilla soft serve.',
      craft: 'Roasted Hazelnut Crunch',
      chefPick: false
    },
    {
      id: 'bev-biscoff-shake',
      title: 'Lotus Biscoff Speculoos Shake',
      category: 'Gourmet Thick Shakes',
      type: 'beverages',
      diet: 'shakes',
      desc: 'Belgian spiced speculoos cookie butter blended with rich vanilla cream and crunchy biscuit crumble.',
      craft: 'Belgian Speculoos',
      chefPick: true
    },

    // --- BEVERAGES: BOTANICAL MOCKTAILS & COOLERS ---
    {
      id: 'bev-botanical-mojito',
      title: 'Giardino Botanical Mojito',
      category: 'Botanical Mocktails & Coolers',
      type: 'beverages',
      diet: 'mocktails',
      desc: 'Fresh garden spearmint leaves, juicy Persian lime wedges, raw organic cane sugar, crushed ice, and sparkling soda.',
      craft: 'Garden Fresh Herb',
      chefPick: true
    },
    {
      id: 'bev-passion-fruit-sparkler',
      title: 'Passion Fruit & Basil Sparkler',
      category: 'Botanical Mocktails & Coolers',
      type: 'beverages',
      diet: 'mocktails',
      desc: 'Exotic passion fruit nectar shaken with hand-torn sweet basil, citrus juice, and chilled sparkling bubbles.',
      craft: 'Sweet Basil Infusion',
      chefPick: false
    },
    {
      id: 'bev-watermelon-quencher',
      title: 'Watermelon Mint Quencher',
      category: 'Botanical Mocktails & Coolers',
      type: 'beverages',
      diet: 'mocktails',
      desc: 'Cold-pressed sweet watermelon juice, bruised garden mint, freshly squeezed lime, and Himalayan pink salt.',
      craft: 'Cold-Pressed Fresh',
      chefPick: false
    },
    {
      id: 'bev-green-apple-fizz',
      title: 'Green Apple & Elderflower Fizz',
      category: 'Botanical Mocktails & Coolers',
      type: 'beverages',
      diet: 'mocktails',
      desc: 'Tart granny smith apple essence infused with floral European elderflower cordial and premium tonic water.',
      craft: 'European Elderflower',
      chefPick: false
    }
  ];

  // ==========================================
  // 2. STATE MANAGEMENT
  // ==========================================
  const state = {
    currentPage: 'home',
    menuMasterCategory: 'food', // 'food' or 'beverages'
    foodSubFilter: 'all-food',   // 'all-food', 'veg', 'non-veg'
    bevSubFilter: 'all-beverages',// 'all-beverages', 'coffee', 'shakes', 'mocktails'
    searchQuery: ''
  };

  // ==========================================
  // 3. SPA ROUTING CONTROLLER
  // ==========================================
  const pageViews = document.querySelectorAll('.page-view');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navTriggers = document.querySelectorAll('.nav-link-trigger');

  function navigateTo(pageId) {
    if (!['home', 'menu', 'about', 'visit'].includes(pageId)) {
      pageId = 'home';
    }

    state.currentPage = pageId;

    // Switch active class on views
    pageViews.forEach(view => {
      if (view.id === `view-${pageId}`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // Update Desktop Nav indicators
    desktopNavLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Mobile Nav indicators
    mobileNavLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    closeMobileDrawer();

    // Smooth scroll to top of main view
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Update URL hash without breaking history
    if (window.location.hash !== `#${pageId}`) {
      history.pushState(null, '', `#${pageId}`);
    }
  }

  // Handle URL hash on initial load
  function initRoutingFromHash() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && ['home', 'menu', 'about', 'visit'].includes(hash)) {
      navigateTo(hash);
    } else {
      navigateTo('home');
    }
  }

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && hash !== state.currentPage) {
      navigateTo(hash);
    }
  });

  // Attach click listeners to all navigational triggers
  document.querySelectorAll('a[data-page], button[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      const targetPage = el.dataset.page;
      if (targetPage) {
        e.preventDefault();
        navigateTo(targetPage);
      }
    });
  });

  // ==========================================
  // 4. MOBILE NAVIGATION DRAWER
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  function openMobileDrawer() {
    mobileNavDrawer.classList.add('open');
    mobileNavBackdrop.classList.add('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileNavDrawer.classList.remove('open');
    mobileNavBackdrop.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer.classList.contains('open')) {
      closeMobileDrawer();
    }
  });

  // ==========================================
  // 5. MENU ENGINE & FILTERING LOGIC
  // ==========================================
  const menuContainer = document.getElementById('menuItemsContainer');
  const menuNoResults = document.getElementById('menuNoResults');
  const searchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resetSearchBtn = document.getElementById('resetSearchBtn');

  const tabFood = document.getElementById('tabFood');
  const tabBeverages = document.getElementById('tabBeverages');
  const foodSubFilters = document.getElementById('foodSubFilters');
  const beverageSubFilters = document.getElementById('beverageSubFilters');

  function renderMenuItems() {
    if (!menuContainer) return;

    // Filter by master category (food vs beverages)
    let filtered = MENU_DATABASE.filter(item => item.type === state.menuMasterCategory);

    // Filter by sub-category
    if (state.menuMasterCategory === 'food') {
      if (state.foodSubFilter === 'veg') {
        filtered = filtered.filter(item => item.diet === 'veg');
      } else if (state.foodSubFilter === 'non-veg') {
        filtered = filtered.filter(item => item.diet === 'non-veg');
      }
    } else {
      if (state.bevSubFilter !== 'all-beverages') {
        filtered = filtered.filter(item => item.diet === state.bevSubFilter);
      }
    }

    // Filter by text search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.craft.toLowerCase().includes(q)
      );
    }

    // Handle empty state
    if (filtered.length === 0) {
      menuContainer.innerHTML = '';
      menuNoResults.style.display = 'block';
      return;
    }

    menuNoResults.style.display = 'none';

    // Generate Cards HTML
    const cardsHTML = filtered.map(dish => {
      const isVeg = dish.diet === 'veg';
      const isNonVeg = dish.diet === 'non-veg';
      const isBeverage = dish.type === 'beverages';

      let dietIconHTML = '';
      if (isVeg) {
        dietIconHTML = `<span class="diet-icon veg-icon" title="Pure Vegetarian (Veg)"></span>`;
      } else if (isNonVeg) {
        dietIconHTML = `<span class="diet-icon nonveg-icon" title="Non-Vegetarian (Non-Veg)"></span>`;
      } else {
        dietIconHTML = `<span style="font-size: 1rem;">☕</span>`;
      }

      return `
        <article class="menu-item-card" data-dish-id="${dish.id}">
          <div class="menu-card-header">
            <div class="menu-card-title-group">
              ${dietIconHTML}
              <h3 class="menu-card-title">${dish.title}</h3>
            </div>
            <span class="menu-category-tag">${dish.category}</span>
          </div>
          <p class="menu-card-desc">${dish.desc}</p>
          <div class="menu-card-footer">
            <span class="menu-craft-badge">✦ ${dish.craft}</span>
            <a href="https://www.google.com/maps/reserve/v/dine/c/EV_Dvpa7ubw?source=pa&opi=89978449&hl=en-IN" target="_blank" rel="noopener noreferrer" class="menu-reserve-quick-btn">
              Reserve to Taste →
            </a>
          </div>
        </article>
      `;
    }).join('');

    menuContainer.innerHTML = cardsHTML;
  }

  // Master Category Tabs
  if (tabFood && tabBeverages) {
    tabFood.addEventListener('click', () => {
      state.menuMasterCategory = 'food';
      tabFood.classList.add('active');
      tabFood.setAttribute('aria-selected', 'true');
      tabBeverages.classList.remove('active');
      tabBeverages.setAttribute('aria-selected', 'false');

      foodSubFilters.style.display = 'flex';
      beverageSubFilters.style.display = 'none';
      renderMenuItems();
    });

    tabBeverages.addEventListener('click', () => {
      state.menuMasterCategory = 'beverages';
      tabBeverages.classList.add('active');
      tabBeverages.setAttribute('aria-selected', 'true');
      tabFood.classList.remove('active');
      tabFood.setAttribute('aria-selected', 'false');

      foodSubFilters.style.display = 'none';
      beverageSubFilters.style.display = 'flex';
      renderMenuItems();
    });
  }

  // Sub-filter pill selection: Food
  if (foodSubFilters) {
    foodSubFilters.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        foodSubFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.foodSubFilter = pill.dataset.sub;
        renderMenuItems();
      });
    });
  }

  // Sub-filter pill selection: Beverages
  if (beverageSubFilters) {
    beverageSubFilters.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        beverageSubFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.bevSubFilter = pill.dataset.sub;
        renderMenuItems();
      });
    });
  }

  // Search filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      if (state.searchQuery.length > 0) {
        clearSearchBtn.style.display = 'block';
      } else {
        clearSearchBtn.style.display = 'none';
      }
      renderMenuItems();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      searchInput.focus();
      renderMenuItems();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      renderMenuItems();
    });
  }

  // ==========================================
  // 6. 3D CARD TILT MICRO-INTERACTIONS
  // ==========================================
  const tiltCards = document.querySelectorAll('.card-tilt, #heroTiltCard');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7; // Max tilt 7deg
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // ==========================================
  // 7. HEADER SHADOW ON SCROLL
  // ==========================================
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 8. LIVE OPERATING HOURS STATUS INDICATOR
  // ==========================================
  function updateLiveOperatingStatus() {
    const statusTextEl = document.getElementById('liveStatusText');
    if (!statusTextEl) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 6 = Sat
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeMinutes = hours * 60 + minutes;

    const openTimeMinutes = 14 * 60; // 2:00 PM = 840 mins
    const isWeekend = (day === 0 || day === 6);
    // Weekdays close at 11:30 PM (23:30 = 1410 mins); Weekends close at 12:30 AM (00:30 next day)
    const closeTimeMinutes = isWeekend ? (24.5 * 60) : (23.5 * 60);

    let isOpen = false;
    if (currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < 24 * 60) {
      if (!isWeekend && currentTimeMinutes < 1410) {
        isOpen = true;
      } else if (isWeekend) {
        isOpen = true;
      }
    } else if (isWeekend && currentTimeMinutes < 30) { // Saturday night / Sunday early morning till 12:30 AM
      isOpen = true;
    }

    if (isOpen) {
      const closeLabel = isWeekend ? '12:30 AM' : '11:30 PM';
      statusTextEl.innerHTML = `<strong>Open Now</strong> • Welcoming guests till ${closeLabel}`;
    } else {
      statusTextEl.innerHTML = `Opens today at <strong>2:00 PM</strong> • Clarks Premier`;
    }
  }

  // ==========================================
  // 9. FULLSCREEN PHOTO LIGHTBOX VIEWER
  // ==========================================
  const photoLightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  function openLightbox(src, caption) {
    if (!photoLightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || "Rozario's Giardino Photo";
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || "Rozario's Giardino - Cafe & Courtyard";
      lightboxCaption.style.display = caption ? 'block' : 'none';
    }
    photoLightbox.classList.add('active');
    photoLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!photoLightbox) return;
    photoLightbox.classList.remove('active');
    photoLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoLightbox && photoLightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Attach click listeners to all photo containers on the website
  const clickableImages = document.querySelectorAll('.hero-visual-3d-card, .experience-card-img-wrapper, .signature-img-box, .instagram-post-card, .stack-img, .mosaic-item');

  clickableImages.forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
      // If clicking inside an action link or button inside the card, don't trigger lightbox
      if (e.target.closest('a') && !e.target.closest('.instagram-post-card')) {
        return;
      }
      
      if (wrapper.classList.contains('instagram-post-card')) {
        e.preventDefault();
      }

      const img = wrapper.tagName === 'IMG' ? wrapper : wrapper.querySelector('img');
      if (img && img.src) {
        let caption = img.alt || '';
        const cardCaption = wrapper.querySelector('.insta-caption') || 
                            wrapper.querySelector('.experience-title') || 
                            wrapper.querySelector('.dish-title') || 
                            wrapper.querySelector('.mosaic-caption');
        if (cardCaption && cardCaption.textContent) {
          caption = cardCaption.textContent.trim();
        }
        openLightbox(img.src, caption);
      }
    });
  });

  // ==========================================
  // 10. INITIALIZE
  // ==========================================
  initRoutingFromHash();
  renderMenuItems();
  updateLiveOperatingStatus();

});
