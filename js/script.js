// Автоматическое добавление header и footer + активная ссылка
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Header
  const headerHTML = `
    <div class="container header-content">
      <a href="index.html" class="logo">ProLaunch</a>
      <nav>
        <ul>
          <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Главная</a></li>
          <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">О проекте</a></li>
          <li><a href="blog.html" class="${currentPage === 'blog.html' ? 'active' : ''}">Блог</a></li>
          <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Контакты</a></li>
        </ul>
      </nav>
    </div>
  `;

  // Footer
  const footerHTML = `
    <div class="container">
      <p>🚀 ProLaunch — платформа для запуска инновационных идей</p>
      <p>&copy; ${new Date().getFullYear()} Все права защищены.</p>
    </div>
  `;

  // Вставляем header, если его нет
  if (!document.querySelector('header')) {
    const header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.prepend(header);
  }

  // Вставляем footer, если его нет
  if (!document.querySelector('footer')) {
    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.appendChild(footer);
  }
});