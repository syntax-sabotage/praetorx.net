/**
 * PraetorX i18n — lightweight DE/EN language toggle
 * Default: German. Persists choice in localStorage.
 */
(function () {
  'use strict';

  var translations = {
    en: {
      // Nav
      'nav.home': 'Home',
      'nav.modules': 'Modules',

      // Hero
      'hero.title': 'Enterprise Module Suite<br>for Odoo 19',
      'hero.subtitle': 'AI-powered invoice processing, intelligent document management, BPMN process design and seamless cloud integrations — 100% Odoo-native.',
      'hero.cta_modules': 'Explore all modules',
      'hero.cta_appstore': 'Odoo App Store',

      // Stats
      'stats.modules': 'Modules',
      'stats.version': 'Current Version',
      'stats.iso': 'Compliant',
      'stats.dsgvo': 'Compliant',
      'stats.native': 'Odoo-native',

      // Featured
      'featured.title': 'Featured Modules',
      'featured.subtitle': 'The essential building blocks for your Odoo environment',
      'featured.vault': 'AI-powered document management with automatic classification, intelligent routing, OCR and ISO 27001 compliant security levels.',
      'featured.invoice_pro': 'AI-powered invoice processing with automatic data extraction, validation and seamless Odoo Accounting integration.',
      'featured.sharepoint_sync': 'Bidirectional sync between Odoo Documents and SharePoint/OneDrive via Microsoft Graph API.',
      'featured.flowforge': 'BPMN 2.0 process designer with visual form builder — model and execute business processes directly in Odoo.',
      'featured.appstore_link': 'App Store',
      'featured.view_all': 'View all 12 modules',

      // Trust
      'trust.title': 'Enterprise Standards',
      'trust.iso': 'Information security management according to international standards',
      'trust.dsgvo': 'Fully compliant with the EU General Data Protection Regulation',
      'trust.gobd': 'Compliant with German principles of proper accounting',
      'trust.native_title': '100% Odoo-native',
      'trust.native': 'All modules use Odoo ORM exclusively — no raw SQL, no external dependencies',

      // CTA
      'cta.title': 'Ready for professional Odoo modules?',
      'cta.subtitle': 'Discover the complete PraetorX module suite on the Odoo App Store.',
      'cta.modules': 'Module Catalog',
      'cta.appstore': 'Odoo App Store',

      // Modules page
      'modules.title': 'Module Catalog',
      'modules.subtitle': '12 professional Odoo 19 modules — from AI-powered invoice processing to enterprise cloud integration.',
      'modules.cta_title': 'All modules on the Odoo App Store',
      'modules.cta_subtitle': 'Install PraetorX modules directly from the official Odoo App Store.',
      'modules.cta_button': 'Go to Odoo App Store',

      // Tiers
      'tier.premium': 'Premium',
      'tier.enterprise': 'Enterprise',
      'tier.free': 'Free',

      // Module descriptions
      'mod.vault': 'AI-powered document management with automatic classification, intelligent routing, OCR and ISO 27001 compliant security levels.',
      'mod.sharepoint_sync': 'Bidirectional sync between Odoo Documents and SharePoint/OneDrive via Microsoft Graph API.',
      'mod.nextcloud_sync': 'Bidirectional sync between Odoo Documents and Nextcloud — automatically sync libraries, folders and files.',
      'mod.flowforge_engine': 'Execution engine for BPMN processes — automatically translate tasks, timers, gateways and events into Odoo actions.',
      'mod.mcp_security': 'Model Context Protocol — security and access control for AI-powered Odoo integrations.',
      'mod.invoice_pro': 'AI-powered invoice processing with automatic data extraction, validation and seamless Odoo Accounting integration.',
      'mod.flowforge': 'BPMN 2.0 process designer with visual form builder — model business processes directly in Odoo.',
      'mod.mimik_ingest': 'SharePoint API compatible endpoint for scanners and multifunction devices — capture documents directly into Odoo.',
      'mod.foundation': 'Central infrastructure — unified AI providers (OpenAI, Claude, Azure), configuration, health monitoring and security framework.',
      'mod.praetorx_base': 'Queue jobs, validation framework and batch processing — shared infrastructure for cloud integration modules.',
      'mod.scribe': 'Markdown-to-HTML conversion for any Odoo HTML field. Powerbox command, wizard with live preview, GitHub Flavored Markdown.',
      'mod.flowforge_knowledge': 'Embed BPMN diagrams in Odoo Knowledge articles — process documentation directly in the knowledge base.',
      'mod.appstore': 'App Store',
      'mod.free': 'Free',

      // Footer
      'footer.tagline': 'Enterprise Module Suite for Odoo 19',
      'footer.modules': 'Modules',
      'footer.legal': 'Legal',
      'footer.built': 'Built by <a href="https://syntaxandsabotage.io" target="_blank" rel="noopener">Syntax &amp; Sabotage</a>'
    }
  };

  function applyLanguage(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-i18n');
      if (lang === 'de') {
        if (elements[i].hasAttribute('data-i18n-de')) {
          elements[i].innerHTML = elements[i].getAttribute('data-i18n-de');
        }
      } else if (translations[lang] && translations[lang][key]) {
        if (!elements[i].hasAttribute('data-i18n-de')) {
          elements[i].setAttribute('data-i18n-de', elements[i].innerHTML);
        }
        elements[i].innerHTML = translations[lang][key];
      }
    }

    document.documentElement.lang = lang === 'en' ? 'en' : 'de';

    var buttons = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.toggle('active', buttons[j].getAttribute('data-lang') === lang);
    }

    try { localStorage.setItem('praetorx-lang', lang); } catch (e) { /* no-op */ }
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem('praetorx-lang'); } catch (e) { /* no-op */ }
    var lang = saved || 'de';

    if (lang !== 'de') {
      applyLanguage(lang);
    }

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (btn) {
        var targetLang = btn.getAttribute('data-lang');
        applyLanguage(targetLang);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
