function showSection(sectionId) {
        // Remove 'active' de todas as seções e botões
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });

        // Adiciona 'active' à seção e ao botão clicado
        document.getElementById(sectionId).classList.add('active');
        document.querySelector(`.menu-item[onclick="showSection('${sectionId}')"]`).classList.add('active');
    }