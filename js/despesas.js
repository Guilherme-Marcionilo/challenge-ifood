document.querySelectorAll('.custom-select option').forEach(option => {
    const color = option.getAttribute('data-color');
    if (color) {
        option.style.color = color;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('toggle-switch');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            console.log('Ligado');
        } else {
            console.log('Desligado');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('category-select');

    selectElement.addEventListener('change', function() {
        var selectedValue = selectElement.value;
        
        if (selectedValue === 'nova_categoria') {
            var modal = new bootstrap.Modal(document.getElementById('exportModal2'));
            modal.show();
        }
    });
});

function openPrimaryModal() {
    var primaryModal = new bootstrap.Modal(document.getElementById('exportModal'));
    primaryModal.show();
}


function arrowclick() {
    let arrowclick = document.getElementById('arrowbotton');
    let itensArow = document.getElementById('itensArrow');

    if (itensArow.classList.contains('remove-itens') ) {
        itensArow.classList.remove('remove-itens')
    }else {
        itensArow.classList.add('remove-itens')
    }
}

function arrowclick2() {
    let arrowclick = document.getElementById('arrowbotton');
    let itensArow2 = document.getElementById('itensArrow2');

    if (itensArow2.classList.contains('remove-itens') ) {
        itensArow2.classList.remove('remove-itens')
    }else {
        itensArow2.classList.add('remove-itens')
    }
}

function arrowclick3() {
    let arrowclick = document.getElementById('arrowbotton');
    let itensArow3 = document.getElementById('itensArrow3');

    if (itensArow3.classList.contains('remove-itens') ) {
        itensArow3.classList.remove('remove-itens')
    }else {
        itensArow3.classList.add('remove-itens')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1; // Página inicial
    const totalPages = 5; // Total de páginas (ajuste conforme necessário)

    // Função para alternar a tabela
    function alternaTabela(tabelaId) {
        document.querySelectorAll('.table-container table').forEach(table => {
            table.classList.add('table-hidden');
        });

        const tabelaParaMostrar = document.getElementById(tabelaId);
        if (tabelaParaMostrar) {
            tabelaParaMostrar.classList.remove('table-hidden');
        }
    }

    // Função para alternar as tabelas com base no número da página
    function alternaTabelaPorPagina(pageNumber) {
        let tabelaId;
        switch (pageNumber) {
            case 1:
                tabelaId = 'comissoes';
                break;
            case 2:
                tabelaId = 'mensalidade';
                break;
            case 3:
                tabelaId = 'taxas';
                break;
            case 4:
                tabelaId = 'outras';
                break;
            default:
                tabelaId = 'comissoes'; // Default
                break;
        }

        alternaTabela(tabelaId);
        atualizarPaginacao(pageNumber);
    }

    // Função para atualizar a aparência da navegação paginada
    function atualizarPaginacao(pageNumber) {
        document.querySelectorAll('.pagination a').forEach(link => link.classList.remove('pagination-active'));

        const pageLinks = document.querySelectorAll('.pagination a');
        if (pageLinks[pageNumber]) {
            pageLinks[pageNumber].classList.add('pagination-active');
        }
        
        // Atualiza o botão "Anterior"
        if (pageNumber === 1) {
            document.querySelector('.pagination .anterior').classList.add('disabled');
        } else {
            document.querySelector('.pagination .anterior').classList.remove('disabled');
        }

        // Atualiza o botão "Próximo"
        if (pageNumber === totalPages) {
            document.querySelector('.pagination .proximo').classList.add('disabled');
        } else {
            document.querySelector('.pagination .proximo').classList.remove('disabled');
        }
    }

    // Adiciona event listeners para todos os links de menu
    document.querySelectorAll('.menu-ta a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelectorAll('.menu-ta a').forEach(link => link.classList.remove('men-table-2'));

            this.classList.add('men-table-2');

            const tabelaId = this.getAttribute('data-table');
            alternaTabela(tabelaId);
            currentPage = 1; // Reseta a página ao mudar de tabela
            atualizarPaginacao(currentPage);
        });
    });

    // Adiciona event listeners para todos os itens de navegação
    document.querySelectorAll('.pagination a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.classList.contains('anterior')) {
                if (currentPage > 1) {
                    currentPage--;
                }
            } else if (this.classList.contains('proximo')) {
                if (currentPage < totalPages) {
                    currentPage++;
                }
            } else {
                currentPage = parseInt(this.textContent.trim());
            }

            alternaTabelaPorPagina(currentPage);
        });
    });

    // Exibe a tabela "comissoes" e aplica a classe "men-table-2" ao menu correspondente por padrão ao carregar a página
    alternaTabela('comissoes');
    document.querySelector('.menu-ta a[data-table="comissoes"]').classList.add('men-table-2');
    atualizarPaginacao(currentPage);
});
