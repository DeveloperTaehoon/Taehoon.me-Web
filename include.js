function loadHeaderFooter() {
  const headerHTML = `
    <!--Nav Bar Start-->
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://taehoon.me/index.html">Taehoon</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://taehoon.me/labs/index.html">Labs&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://taehoon.me/x.html">My 𝕏&nbsp;</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!--Nav Bar End-->
  `;

  const footerHTML = `
  <!--Footer Start-->
  <div class="container" style="clear: both; margin: 0px 0px 20px 0px;"></div>
  <footer class="footer text-center">
    <div class="container" style="clear: both;">
      <p class="text-muted mb-0 small">
        Email <a href="mailto:taehoon@taehoon.me">taehoon@taehoon.me</a><br>
        created by
        <a href="https://x.com/realTaehoon">Taehoon</a>
        |
        <a href="about.html">About</a>
        |
        (Beta)
      </p>
      <p>
        © 2022-<span id="year"></span> Taehoon
      </p>
    </div>
  </footer>
  <!-- Footer End-->
`;

  document.getElementById("header-placeholder").innerHTML = headerHTML;
}

// 현재년도 가져와서 <span id="year">에 넣기
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

  document.getElementById("footer-placeholder").innerHTML = footerHTML;
}


 
