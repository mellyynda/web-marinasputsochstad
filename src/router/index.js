import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Covid from '../views/Covid.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Din städfirma i Storstockholm | Få bilig städning för ditt hem.',
      metaTags: [
        {
          name: 'description',
          content: 'Marinas Puts och Städ erbjuder proffsig och trygg städning för både hem och företag. ✆ Ring 0760853358 eller ✉ mejla info@marinasputs.se.'
        },
        {
          property: 'og:description',
          content: 'Marinas Puts och Städ erbjuder proffsig och trygg städning för både hem och företag. ✆ Ring 0760853358 eller ✉ mejla info@marinasputs.se.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Marinas Puts och Städ | Stockholmsbaserat familjeföretag med över 18 år erfarenhet inom branschen',
      metaTags: [
        {
          name: 'description',
          content: 'Vår hjärta ligger med kundens nöjhet. Vi vill att du ska vara glad och trygg med oss och få allt du behöver. Vi utför städningar inom hela Stockholms län.'
        },
        {
          property: 'og:description',
          content: 'Vår hjärta ligger med kundens nöjhet. Vi vill att du ska vara glad och trygg med oss och få allt du behöver. Vi utför städningar inom hela Stockholms län.'
        }
      ]
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Anpassade städtjänster efter kundens behov',
      metaTags: [
        {
          name: 'description',
          content: '✆ Ring 0760853358 eller ✉ mejla info@marinasputs.se för att få anpassade städtjänster som hemstädning, storstädning, kontorsstädning, trappstädning, fönsterputs, strykning eller flyttstädning.'
        },
        {
          property: 'og:description',
          content: '✆ Ring 0760853358 eller ✉ mejla info@marinasputs.se för att få anpassade städtjänster som hemstädning, storstädning, kontorsstädning, trappstädning, fönsterputs, strykning eller flyttstädning.'
        }
      ]
    }
  },
  {
    path: '/covid-info',
    name: 'Covid',
    component: Covid,
    meta: {
      title: 'Covid-19 anpassade städning | Senaste uppdaterningarna på Marinas Puts och Städ',
      metaTags: [
        {
          name: 'description',
          content: 'Vi följer Folkhälsomyndighetens rekommendationer och: ♡ Våra medarbetare arbetar inte när de har minsta symptom. ♡ Vi använder alltid desinfektionsmedel och handskar.'
        },
        {
          property: 'og:description',
          content: 'Vi följer Folkhälsomyndighetens rekommendationer och: ♡ Våra medarbetare arbetar inte när de har minsta symptom. ♡ Vi använder alltid desinfektionsmedel och handskar.'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  }
})



// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router
