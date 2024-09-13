function openPrimaryModal() {
    var primaryModal = new bootstrap.Modal(document.getElementById('exportModal'));
    primaryModal.show();
}

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const totalPages = 2; 

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


    function alternaTabelaPorPagina(pageNumber) {
        let tabelaId;
        switch (pageNumber) {
            case 1:
                tabelaId = 'lancamentos-dia';
                break;
            case 2:
                tabelaId = 'lancamentos-futuros';
                break;
            default:
                tabelaId = 'lancamentos-dia'; 
                break;
        }

        alternaTabela(tabelaId);
        atualizarPaginacao(pageNumber);
    }


    function atualizarPaginacao(pageNumber) {
        document.querySelectorAll('.pagination a').forEach(link => link.classList.remove('pagination-active'));

        const pageLinks = document.querySelectorAll('.pagination a');
        if (pageLinks[pageNumber]) {
            pageLinks[pageNumber].classList.add('pagination-active');
        }
        
  
        if (pageNumber === 1) {
            document.querySelector('.pagination .anterior').classList.add('disabled');
        } else {
            document.querySelector('.pagination .anterior').classList.remove('disabled');
        }

        if (pageNumber === totalPages) {
            document.querySelector('.pagination .proximo').classList.add('disabled');
        } else {
            document.querySelector('.pagination .proximo').classList.remove('disabled');
        }
    }

 
    document.querySelectorAll('.menu-ta a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelectorAll('.menu-ta a').forEach(link => link.classList.remove('men-table-2'));

            this.classList.add('men-table-2');

            const tabelaId = this.getAttribute('data-table');
            alternaTabela(tabelaId);
            currentPage = 1; 
            atualizarPaginacao(currentPage);
        });
    });

    
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


    alternaTabela('lancamentos-dia');
    document.querySelector('.menu-ta a[data-table="lancamentos-dia"]').classList.add('men-table-2');
    atualizarPaginacao(currentPage);
});