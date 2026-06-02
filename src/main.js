import "./styles.css";

const links = [
  {
    label: "Quero comprar meu produto Apple 📱",
    href: "https://api.whatsapp.com/send?phone=5531990742171&text=Ol%C3%A1!%20Cliquei%20no%20link%20da%20bio%20porque%20quero%20garantir%20meu%20produto%20Apple,%20pode%20me%20ajudar?",
  },
  {
    label: "Preciso consertar meu produto Apple 🛠️",
    href: "https://wa.me/5531990742171?text=Ol%C3%A1!%20Cliquei%20no%20link%20da%20bio%20porque%20preciso%20consertar%20meu%20produto%20Apple%2C%20pode%20me%20ajudar%3F",
  },
  {
    label: "Quero participar do GRUPO VIP 🥇",
    href: "https://chat.whatsapp.com/ILUuXK8MfCUJCRsCFoyXMB",
  },
];

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="link-page" aria-label="Links oficiais da BEW Store">
    <section class="profile" aria-label="Perfil">
      <img
        class="profile__image"
        src="/bew-store-logo.jpg"
        width="96"
        height="96"
        alt="Logo da BEW Store"
      />
      <h1>bewstore</h1>
      <p>
        Já Cuidamos de mais de 300 mil clientes satisfeitos em nossos 9 anos de
        existência. Como podemos te ajudar ? Escolha a opção abaixo:
      </p>
    </section>

    <nav class="links" aria-label="Links principais">
      ${links
        .map(
          (link) => `
            <a class="link-button" href="${link.href}" target="_blank" rel="noopener noreferrer">
              <span>${link.label}</span>
            </a>
          `,
        )
        .join("")}
    </nav>

    <footer class="brand-footer" aria-label="BEW Store">
      <span>BEW Store</span>
    </footer>
  </main>
`;
