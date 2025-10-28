const servicosInfo = {
    "Cortes": "Trabalhamos com o visagismo de cada rosto, orientando o cliente da melhor forma para garantir um resultado harmonioso e natural, evitando que o semblante fique pesado. Priorizamos a naturalidade e o encaixe perfeito do corte. Lembrando que sugestões serão oferecidas, mas a decisão final é sempre do cliente.",
    "Coloração": "Devido a um processo químico realizado durante a confecção das próteses, ocorre uma alteração na tonalidade dos fios. Com o tempo, esse efeito provoca o desbotamento da cor, exigindo um novo procedimento de correção para restabelecer a uniformidade com o cabelo natural do cliente. Como a fabricação é feita por empresas chinesas, utilizando cabelos de origem indiana quimicamente tratados, não é possível determinar com precisão quais substâncias são aplicadas nesse preparo. Apesar disso, a tecnologia atual permite que tanto os fios quanto as bases das próteses apresentem alta naturalidade, garantindo uma integração harmoniosa com o cabelo original do usuário.",
    "Confecção": "Peças importadas pela China que é um dos maiores produtores e exportadores globais de próteses capilares, perucas e extensões de cabelo. Empresas chinesas, como a Yuzhou City Xi ao Yuan Hair Crafts, são reconhecidas por sua capacidade de produção em larga escala e por atenderem a mercados internacionais.No entanto, mercados como os Estados Unidos, Europa e Japão apresentam alta demanda por esses produtos, impulsionados por fatores como envelhecimento populacional, aumento da conscientização sobre soluções capilares e avanços na estética masculina e feminina.",
    "Aplicação": "Cada prótese é adaptada ao formato da cabeça do cliente, respeitando o contorno e a densidade capilar desejada. Utilizamos técnicas modernas de fixação que permitem que a prótese se mantenha firme, mesmo durante atividades do dia a dia, esportes ou exposição ao calor e umidade. Além disso, oferecemos orientações personalizadas sobre cuidados diários, manutenção e remoção, garantindo maior durabilidade e aparência natural. Nosso objetivo é proporcionar um resultado que valorize a autoestima do cliente, com um acabamento harmonioso, confortável e praticamente imperceptível.",
    "Manutenção": "A manutenção da prótese capilar é indispensável e, na verdade, é a chave para uma rotina tranquila e confortável para quem a utiliza. Ela garante que o usuário possa aproveitar o dia a dia com segurança, incluindo atividades como treinos, academia, esportes, trabalho, estudo e compromissos sociais, sem se preocupar com descolamento, embaraços ou aparência desalinhada da prótese. Além disso, evita o ressecamento e a quebra dos fios. É importante lembrar que o cabelo da prótese é um cabelo seco, que não está ligado ao bulbo capilar, necessitando, portanto, do uso de produtos de alta qualidade para prolongar sua vida útil."
};

const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const titulo = card.querySelector("h3").textContent;
        popupTitle.textContent = titulo;
        popupText.textContent = servicosInfo[titulo] || "Informação indisponível.";
        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// === POPUP DA EQUIPE ===
document.addEventListener("DOMContentLoaded", () => {
    const popupEquipe = document.getElementById('popupEquipe');
    const popupEquipeTitle = document.getElementById('popupEquipeTitle');
    const popupEquipeText = document.getElementById('popupEquipeText');
    const popupEquipeInstagram = document.getElementById('popupEquipeInstagram');
    const closePopupEquipe = document.getElementById('closePopupEquipe');

    const cardsEquipe = document.querySelectorAll('#equipe .card');

    cardsEquipe.forEach(card => {
        card.addEventListener('click', () => {
            const nome = card.getAttribute('data-nome');
            const texto = card.getAttribute('data-texto');
            const insta = card.getAttribute('data-instagram');

            popupEquipeTitle.textContent = nome;
            popupEquipeText.textContent = texto;
            popupEquipeInstagram.href = insta;
            popupEquipeInstagram.style.display = insta ? 'inline-block' : 'none';

            popupEquipe.style.display = 'flex';
        });
    });

    closePopupEquipe.addEventListener('click', () => {
        popupEquipe.style.display = 'none';
    });

    popupEquipe.addEventListener('click', (e) => {
        if (e.target === popupEquipe) {
            popupEquipe.style.display = 'none';
        }
    });
});

