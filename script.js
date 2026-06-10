/**
 * ONE SALE COMPANY — Landing Page Script
 * iFactor Academy · Ivory / Oxblood / Gold Design System
 */

(function () {
  'use strict';

  // ================================================
  // FAQ DATA
  // ================================================
  const faqData = [
    {
      q: 'ONE SALE COMPANY khác gì các khóa TikTok hay AI trên thị trường?',
      a: 'Khác ở chỗ đây không phải khóa học công cụ. ONE SALE COMPANY là chương trình hệ thống giúp sale bất động sản xây nền móng bán hàng cá nhân: từ tư duy, định vị, nội dung, video, AI, kênh, lead, CRM đến quy trình follow. Mỗi module đều có output cụ thể. Học xong có sản phẩm thật, không phải chỉ ghi chép lý thuyết.'
    },
    {
      q: 'Tôi chưa biết gì về TikTok, video hay AI có học được không?',
      a: 'Được. Chương trình thiết kế từ nền tảng, phù hợp người chưa có kinh nghiệm làm nội dung số. Tập 1 (999K) là lựa chọn tốt nhất để bắt đầu từ đầu với AI hỗ trợ. Từng bước nhỏ, có hướng dẫn cụ thể, có checklist và template để làm theo.'
    },
    {
      q: 'Tôi đã có kênh TikTok rồi. Khóa học có giúp được gì?',
      a: 'Có. Khóa học giúp bạn xác định lại concept kênh, xây lịch nội dung có hệ thống, cải thiện kịch bản video, dựng nhanh hơn bằng CapCut và template, đo lường hiệu quả bằng digital marketing cơ bản và chuyển đổi tương tác thành lead thật qua phễu rõ ràng.'
    },
    {
      q: 'Học xong tôi có được gì cụ thể?',
      a: 'Tùy gói học, nhưng tổng quát: concept kênh, bio, lịch content 30 ngày, 10-30 kịch bản video, bộ prompt AI, checklist quay, template CapCut, link bio & form thu lead, kịch bản livestream, file CRM cá nhân, quy trình follow khách hàng và bộ checklist triển khai thực tế.'
    },
    {
      q: 'Có cơ hội được tham gia brief/campaign/job sau khóa học không?',
      a: 'Có cơ hội. iFactor Academy và hệ sinh thái IFTV sẽ xét chọn học viên phù hợp cho các brief video, campaign dự án, livestream và review dự án. Việc được chọn phụ thuộc vào năng lực thực tế, mức độ hoàn thiện sản phẩm trong khóa học và nhu cầu thực tế. Đây không phải cam kết bắt buộc.'
    },
    {
      q: 'Khóa học có phù hợp với trưởng nhóm hoặc quản lý kinh doanh không?',
      a: 'Hoàn toàn phù hợp. Chương trình giúp trưởng nhóm chuẩn hóa năng lực truyền thông cho đội ngũ, xây bộ tài liệu nội bộ, thiết lập quy trình sản xuất nội dung đều đặn và giám sát hiệu quả kênh cá nhân của từng sale. Đây là công cụ quản lý và phát triển đội ngũ mạnh.'
    },
    {
      q: 'Tôi nên chọn gói nào cho phù hợp?',
      a: 'Nếu bạn mới bắt đầu và muốn thử làm quen với AI + TikTok: chọn Tập 1 (999K). Nếu bạn đã sẵn sàng xây kênh bán hàng cá nhân đầy đủ từ concept đến video: chọn Tập 2 (1.999K). Nếu bạn muốn hệ thống toàn diện từ tư duy đến CRM và chuyển đổi: chọn Tập 3 (4.999K). Để lại thông tin, chúng tôi sẽ tư vấn phù hợp.'
    },
    {
      q: 'Thời gian học bao lâu? Có giới hạn không?',
      a: 'Khóa học ghi hình sẵn, bạn có thể học mọi lúc mọi nơi, không giới hạn thời gian truy cập. Tốc độ học tùy thuộc bạn. Gói Tập 3 có đầy đủ 12 chương, 27 bài học. Thời gian học khuyến nghị: 3-6 tuần để hoàn thành toàn bộ chương trình và làm bài tập thực hành.'
    },
    {
      q: 'Khóa học có bảo hành hoặc cam kết hoàn tiền không?',
      a: 'Chính sách bảo hành và hoàn tiền sẽ được thông báo cụ thể khi đăng ký. Vui lòng để lại thông tin để được tư vấn chi tiết về chính sách phù hợp nhất.'
    }
  ];

  // ================================================
  // FAQ ACCORDION
  // ================================================
  function initFAQ() {
    const container = document.getElementById('faq-list');
    if (!container) return;

    faqData.forEach(function (item, index) {
      const itemEl = document.createElement('div');
      itemEl.className = 'faq-item';

      const questionBtn = document.createElement('button');
      questionBtn.className = 'faq-question';
      questionBtn.setAttribute('aria-expanded', 'false');
      questionBtn.setAttribute('aria-controls', 'faq-answer-' + index);
      questionBtn.innerHTML =
        '<span>' + item.q + '</span>' +
        '<span class="faq-icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
        '</span>';

      questionBtn.addEventListener('click', function () {
        const isOpen = itemEl.classList.contains('open');
        // Close all
        container.querySelectorAll('.faq-item').forEach(function (el) {
          el.classList.remove('open');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          const ans = el.querySelector('.faq-answer');
          if (ans) ans.classList.remove('open');
        });
        // Open clicked if was closed
        if (!isOpen) {
          itemEl.classList.add('open');
          questionBtn.setAttribute('aria-expanded', 'true');
          const answerEl = itemEl.querySelector('.faq-answer');
          if (answerEl) answerEl.classList.add('open');
        }
      });

      const answerEl = document.createElement('div');
      answerEl.className = 'faq-answer';
      answerEl.id = 'faq-answer-' + index;
      answerEl.innerHTML = '<div class="faq-answer-inner">' + item.a + '</div>';

      itemEl.appendChild(questionBtn);
      itemEl.appendChild(answerEl);
      container.appendChild(itemEl);
    });
  }

  // ================================================
  // HEADER SCROLL
  // ================================================
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
  }

  // ================================================
  // STICKY CTA BAR
  // ================================================
  function initStickyBar() {
    const stickyBar = document.getElementById('sticky-bar');
    if (!stickyBar) return;

    let lastScrollY = 0;

    function onScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 900) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ================================================
  // SMOOTH SCROLL
  // ================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const headerHeight = 72;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }

  // ================================================
  // FADE-IN ON SCROLL (Intersection Observer)
  // ================================================
  function initFadeIn() {
    const elements = document.querySelectorAll(
      '.pain-card, .module-card, .output-card, .instructor-card, ' +
      '.testimonial-card, .testimonial-featured, .pricing-card, ' +
      '.context-chip, .audience-card, .compare-box, .pillar-card'
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el, index) {
      el.classList.add('animate-on-scroll');
      el.style.transitionDelay = (index % 3) * 80 + 'ms';
      observer.observe(el);
    });
  }

  function init() {
    initFAQ();
    initHeaderScroll();
    initStickyBar();
    initSmoothScroll();
    initForm();

    // Small delay to ensure DOM is fully ready for animation observer
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        initFadeIn();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
